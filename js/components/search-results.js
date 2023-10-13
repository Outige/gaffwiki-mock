/* Constants */
const resultsContainer = document.querySelector('.results-container');



function createResultFromJson(json) {
    // Create the parent div with class "result-container"
    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';

    // Create the inner div with class "result flex-row"
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    const resultRow = document.createElement('div');
    resultRow.className = 'row flex-row';

    // Create the link element
    const linkElement = document.createElement('a');
    linkElement.href = '#';
    linkElement.className = 'eircode-link';

    // Create the h1 element with class "result-element eircode-text"
    const h1Element = document.createElement('h1');
    h1Element.className = 'result-element eircode-text';
    h1Element.textContent = json['eircode'];

    // Append the h1 element to the link element
    linkElement.appendChild(h1Element);

    // Create the div with class "result-element flex-row" for rating
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'result-element flex-row';

    // Create the h2 element with class "vertically-align review-data-text" for rating value
    const ratingValueElement = document.createElement('h2');
    ratingValueElement.className = 'vertically-align review-data-text';
    ratingValueElement.textContent = json['rating'];

    // Create the image element for the star
    const starImage = document.createElement('img');
    starImage.src = 'static/img/star.png';
    starImage.alt = '';
    starImage.className = 'vertically-align result-image';

    // Append the rating value and star image to the rating div
    ratingDiv.appendChild(ratingValueElement);
    ratingDiv.appendChild(starImage);

    // Create the div with class "result-element review-data-container flex-row" for review count
    const reviewCountDiv = document.createElement('div');
    reviewCountDiv.className = 'result-element review-data-container flex-row';

    // Create the h2 element with class "vertically-align review-data review-data-text" for review count
    const reviewCountElement = document.createElement('h2');
    reviewCountElement.className = 'vertically-align review-data review-data-text';
    reviewCountElement.textContent = json['reviewCount'];

    // Create the image element for the user icon
    const userImage = document.createElement('img');
    userImage.src = 'static/img/user.png';
    userImage.alt = '';
    userImage.className = 'vertically-align result-image';

    // Append the review count and user image to the review count div
    reviewCountDiv.appendChild(reviewCountElement);
    reviewCountDiv.appendChild(userImage);

    // Create the div with class "result-element flex-row" for comment count
    const commentCountDiv = document.createElement('div');
    commentCountDiv.className = 'result-element flex-row';

    // Create the h2 element with class "vertically-align review-data-text" for comment count
    const commentCountElement = document.createElement('h2');
    commentCountElement.className = 'vertically-align review-data-text';
    commentCountElement.textContent = json['commentCount'];

    // Create the image element for the comment icon
    const commentImage = document.createElement('img');
    commentImage.src = 'static/img/comment.png';
    commentImage.alt = '';
    commentImage.className = 'vertically-align result-image';

    // Append the comment count and comment image to the comment count div
    commentCountDiv.appendChild(commentCountElement);
    commentCountDiv.appendChild(commentImage);

    // Append the link, rating div, review count div, and comment count div to the result div
    resultRow.appendChild(linkElement);
    resultRow.appendChild(ratingDiv);
    resultRow.appendChild(reviewCountDiv);
    resultRow.appendChild(commentCountDiv);

    // Append the result div to the result container
    const resultAddressRow = document.createElement('div');
    resultAddressRow.className = 'row result-address';
    resultAddressRow.innerHTML = '<p>' + json['address'] + '</p>';

    resultDiv.appendChild(resultRow)
    resultDiv.appendChild(resultAddressRow)
    resultContainer.appendChild(resultDiv);

    return (resultContainer)
}

// Define the refreshSearch method
function refreshSearch() {
    resultsContainer.innerHTML = '';


    // Get the key and searchType from the input and select elements
    const keyInput = document.querySelector('.search-container input');
    const searchTypeSelect = document.querySelector('.search-container select');

    const key = keyInput.value;
    const searchType = searchTypeSelect.value;

    // Call the search method with the key and searchType
    const resultsJson = search(key, searchType);

    for (var i = 0; i < Math.max(resultsJson.length, 20); i++) {
        resultsContainer.appendChild(createResultFromJson(resultsJson[i]));
    }
}

function search(key, searchType) {
    key = key.toLowerCase()
    const reducedDummyData = []
    const searchTypeSelect = document.querySelector('.search-container select');
    const searchType2 = searchTypeSelect.options[searchTypeSelect.selectedIndex].value;
    for (var i = 0; i < dummyData.length; i++) {
        if (dummyData[i] === undefined) {
            continue;
        }

        if (searchType2 === 'EIRCODE') {
            const eircode = dummyData[i]['eircode'].toLowerCase()
            if (key.includes(eircode) || eircode.includes(key)) {
                reducedDummyData.push(dummyData[i])
            }
        }

        if (searchType2 === 'Address') {
            const address = dummyData[i]['address'].toLowerCase()
            if (key.includes(address) || address.includes(key)) {
                reducedDummyData.push(dummyData[i])
            }
        }
    }
    return reducedDummyData
}

const inputElement = document.getElementsByTagName('input')[0];
inputElement.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.key === 'Enter') { // FIXME: Just use chat
        console.log('Enter key was pressed');
        refreshSearch();
    }
});
