document.querySelector('.add-review-category').addEventListener('click', function(event) {
    const reviewTopic = document.createElement('div');
    reviewTopic.innerHTML = `                        <select class="form-control custom-select mb-1 review-category" required="true">
        <option value="" disabled selected>Select review category</option>
        <option value="safety">Safety</option>
        <option value="noise">Noise</option>
        <option value="landlord">Landlord</option>
    </select>
    
    <div class="stars ml-2">
    <div class="row align-items-center">
        <!-- <div class="col-md-1 text-left">
            <label for="">Rating</label>
        </div> -->
        <div class="col-md-1 text-left">
            <input type="number" class="form-control rating-input" min="0" max="5" step="1" required
                onkeydown="return false">
        </div>
        <div class="col-md-10">
            <div class="star-rating">
            </div>
        </div>
    </div>
</div>





<textarea class="form-control my-2 ml-2" name="locationReview" rows="3"
    placeholder="Please provide context for your this topic..." required></textarea>`;

    event.target.parentElement.parentElement.insertBefore(reviewTopic, event.target.parentElement);
    addEventListeners();

    // const addButton = document.getElementById('addStuffButton');
    // const container = addButton.parentElement;

    // addButton.addEventListener('click', function() {
    //     // Create a new stuff div
    //     const newStuff = document.createElement('div');
    //     newStuff.className = 'stuff';

    //     // Insert the new stuff div above the button
    //     container.insertBefore(newStuff, addButton);
    // });
});


function addEventListeners() {
    document.querySelectorAll('.rating-input').forEach(ratingInput => {
        ratingInput.addEventListener('change', function (event) {
            const stars = event.target.parentElement.parentElement.querySelector('.star-rating');
            // stars.outerHtml = '';

            // console.log()
            while (stars.firstChild) {
                stars.removeChild(stars.firstChild);
            }
            console.log(stars)

            console.log(event.target.value)
            for (var i = 0; i < event.target.value; i++) {
                const star = document.createElement('i');
                if (i < Math.floor(event.target.value)) {
                    star.className = 'fas fa-star';
                } else {
                    star.className = 'fas fa-star-half';
                }
                stars.appendChild(star);
            }

            // if (event.target.value % 1 != 0) {
            //     const star = document.createElement('i');
            //     star.className = 'far fa-star-half';
            //     // <i class="fas fa-star-half"></i>
            //     stars.appendChild(star);
            // }
        });
        console.log(ratingInput);
    });

    document.querySelector('.add-pro').addEventListener('click', function (event) {
        // FIXME: Should add a delete pro button - for now just make them empty and don't use value; should have a max of say 5;
        const pro = document.createElement('input');
        pro.className = 'form-control col-4 mb-1';
        pro.placeholder = 'Pro...';
        pro.type = 'text';
        pro.required = false;
        event.target.parentElement.querySelector('.pros').appendChild(pro);
    })
}