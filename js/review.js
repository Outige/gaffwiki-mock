const descriptionElement = document.getElementById("sectionContent");
const descriptionCharacterLimitElement = document.getElementById("description-character-limit");
var unusedTopics = null;

function getTopics() {
    return {
        "Curb Appeal": true,
        "Crime Rate": true,
        "Dated Interior": true,
        // "Entertainment": true,
        // "Environmental Hazards": true,
        // "Home Office": true,
        // "Location": true,
        // "Neighbours": true,
        // "Noise": true,
        // "Safety": true,
        // "School District": true,
        // "Smell": true,
        // "Structural Issues": true,
        // "Storage Space": true,
        // "Traffic": true,
        // "Upgrades": true,
        "View": true
    };
}

function refreshUnusedTopics() {
    const reviewTopics = document.querySelectorAll(".review-topic");
    var topicSelect = document.getElementById("topic-type");

    reviewTopics.forEach(topic => {
        // delete unusedTopics[topic.textContent];
        // delete unusedTopics[topic.textContent];
        unusedTopics[topic.textContent] = false;
    });

    console.log(topicSelect);
    while (topicSelect.options.length > 0) {
        topicSelect.remove(0);
    }
    const headerOption = document.createElement("option");
    headerOption.disabled = true;
    headerOption.selected = true;
    headerOption.textContent = "Select review topic..";
    topicSelect.add(headerOption);

    Object.keys(unusedTopics).forEach(key => {
        if (unusedTopics[key]) {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = key;
            topicSelect.add(option);
        }
    })
}

function validateTopic() {
    var topicTypeSelect = document.getElementById("topic-type");
    var selectedIndex = topicTypeSelect.selectedIndex;
    var errorDiv = document.getElementById("topic-error-message");
    errorDiv.textContent = "";

    if (selectedIndex <= 0) {
        errorDiv.textContent = "Need to select a topic.";
        return false;
    }
    return true;
}

function validateRating() {
    var sectionRatingInput = document.getElementsByClassName("section-rating")[0];
    var sectionRatingValue = parseFloat(sectionRatingInput.value);
    var errorDiv = document.getElementById("rating-error-message");
    errorDiv.textContent = "";


    if (isNaN(sectionRatingValue)) {
        errorDiv.textContent = "Topic rating needs to be a number.";
        return false;
    }

    // Check if the input is within the range [0.0, 5.0]
    if (sectionRatingValue < 0.0 || sectionRatingValue > 5.0) {
        errorDiv.textContent = "Topic rating needs to be a number between 0.0 and 5.0.";
        return false;
    }

    // Check if the input has more than one decimal point
    if ((sectionRatingInput.value[0] == '.' && sectionRatingInput.value.length > 2) ||
    sectionRatingInput.value.length > 3) {
        errorDiv.textContent = "Too many decimal points. Max 1 like, 4.6";
        return false;
    }

    return true;
}

function validateDescription() {
    const sectionContent = document.getElementById("sectionContent").value;
    var errorDiv = document.getElementById("description-error-message");
    errorDiv.textContent = "";

    if (sectionContent.trim() === "") {
        errorDiv.textContent = "Description can't be blank.";
        return false;
    }

    if (sectionContent.length > 2000) {
        errorDiv.textContent = "Description too long.";
        return false;
    }

    return true;
}

function validateModalInputs() {
    // return true;
    var result = true;
    result = validateTopic() && result;
    result = validateDescription() && result;
    result = validateRating() && result;
    return  result;
}

function validateReviewDetails() { // FIXME: If it was logically linked to 1 form would need less of this
    const startDate = document.getElementById("start-date-input").value;
    const endDate = document.getElementById("end-date-input").value;
    const errorContainer = document.getElementById("review-details-error-container");
    const errorInput = errorContainer.getElementsByTagName("input")[0];
    
    errorContainer.classList.add("no-form-errors");

    if (startDate.trim().length == 0 || endDate.trim().length == 0) {
        errorContainer.classList.remove("no-form-errors");
        errorInput.value = "Missing start or end date."
        return false;
    } 
    return true;
}

function validateTopics() {
    const topics = document.getElementsByClassName("review-topic");
    const errorContainer = document.getElementById("topics-error-container");
    const errorInput = errorContainer.getElementsByTagName("input")[0];

    errorContainer.classList.add("no-form-errors");

    if (topics.length < 3) {
        errorContainer.classList.remove("no-form-errors");
        errorInput.value = "A minimum of 3 unique review topics are required."
    }

    return true;
}

function validateReviewInputs() {
    // return true;
    var result = true;
    result = validateReviewDetails() && result;
    result = validateTopics() && result;
    return  result;
}

function updateDescriptionCharacterLimit(){
    descriptionCharacterLimitElement.textContent = `${2000 - descriptionElement.value.length} characters`
}

function deleteTopic(event) {
    const topic = event.target.querySelector(".review-topic").textContent;
    event.target.parentElement.removeChild(event.target);
    unusedTopics[topic] = true;
    refreshUnusedTopics();
}


function createNewSectionHtml() {
    const addTopicButton = document.getElementById("add-topic-button");
    const form = document.createElement('form');
    form.className ="topic-form"
    const topicSelect = document.getElementById("topic-type");
    const topic = topicSelect.options[topicSelect.selectedIndex].value;
    const description = document.getElementById("sectionContent").value;
    const rating = document.getElementById("modal-rating").value;

    form.addEventListener("submit", event => {
        event.preventDefault();
        deleteTopic(event);
    }); 
    form.innerHTML = `<label for="topic-name">Topic Name:</label>
    <p class="review-topic">${topic}</p>

    <label>Topic Description:</label>
    <p>${description}</p>

    <label for="topic-rating">Topic Rating:</label>
    <p>${rating}</p>
    <button class="btn btn-danger"><i class="fas fa-minus-circle"></i></button>`;
    
    form.innerHTML = `<button class="btn btn-danger" style="float: right;"><i class="fas fa-minus-circle"></i> Topic</button>
    <h2 class="review-topic">${topic}</h2>
    <p>${description}</p>
    <label for="topic-rating">Topic Rating:</label>
    <p>${rating} <i class="fas fa-star"></i></p>`;
    addTopicButton.parentElement.parentElement.insertBefore(form, addTopicButton.parentElement);
    // console.log(addTopicButton, addTopicButton.parentElement, addTopicButton.parentElement.parentElement);
}


// Function to validate and submit the new section
function createNewSection() {
    // Get the input values
    var sectionType = document.getElementById("topic-type").value;
    var sectionContent = document.getElementById("sectionContent").value;


    // Reset error classes and messages
    document.getElementById("sectionContent").classList.remove("is-invalid");

    // Check if the section content is blank
    if (validateModalInputs() === true) {
        // Your success logic here (e.g., send data to the server, display success message)
        // For demonstration, we'll show an alert message and close the modal

        createNewSectionHtml();

        // Reset the form inputs
        document.getElementById("newSectionForm").reset();

        // Close the modal
        var modal = document.getElementById("newSectionModal");
        var bsModal = new bootstrap.Modal(modal);
        bsModal.hide();


        $('#newSectionModal').modal('hide');
        refreshUnusedTopics();
    }
}

function submitReview() {
    if (validateReviewInputs()) {
        console.log(`FIXME: Gather the review and post the review and on a callback
        redirect to the property page. Need to load in data from the property id on this page to start`)
    }
}

// $('#newSectionModal').modal('show');
updateDescriptionCharacterLimit()
unusedTopics = getTopics();
refreshUnusedTopics();

descriptionElement.addEventListener("keydown", updateDescriptionCharacterLimit); 