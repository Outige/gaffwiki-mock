const searchResults = document.getElementById('searchResults'); // FIXME: better name than container


function createResultCardFromResultPojo(data) {
    if (data === undefined) {
        return // FIXME: why would it be none
    }
    console.log(data)
    data['rating'] = 4.5
    data['reviewCount'] = 3
    data['commentCount'] = 12
    const card = document.createElement('div');
    card.className = 'card mb-3';
    // card.innerHTML = `<a href="property.html?eircode=${data['eircode']}&id=${data['id']}">
    //     <div class="card-body">
    //         <h5 class="card-title"><i class="fas fa-map-marker-alt"></i> ${data['eircode']}</h5>
    //         <p class="card-text"><!--<i class="fas fa-address-book">--></i> ${data['address']}</p>
    //         <p class="card-text">
    //             <i class="fas ${data['rating'] >= 3.5 ? 'fa-star' : 'fa-star-half-alt'}"></i> ${data['rating']}
    //             <i class="fas fa-solid fa-user ml-2"></i> ${data['reviewCount']}
    //             <i class="fas fa-comment ml-2"></i> ${data['commentCount']}
    //         </p>
    //     </div>
    // </a>`.trim();
    console.log(data)
    card.innerHTML = `<div class="card-body">
    <div class="row">
        <div class="col-6">
        <a href="property.html?eircode=${data.eircode}&id=${data.id}"><h5 class="card-title"><i class="fas fa-map-marker-alt"></i> ${data.eircode}</h5></a>
        </div>
        <div class="col-6 text-right">
            <div class="header-button">
                <form id="reviewForm" action="review.html" method="get">
                    <input type="hidden" name="eircode" value="${data.eircode}">
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-plus-circle"></i> Review
                    </button>
                </form>

            </div>
        </div>
    </div>
    <p class="card-text"></i> ${data.address}</p>
    <p class="card-text">
        <i class="fas fa-star-half-alt"></i> 2.1
        <i class="fas fa-solid fa-user ml-2"></i> 2
        <i class="fas fa-comment ml-2"></i> 7
    </p>
</div>`
    return card;
}   

// FIXME: In the future it will be better to construct an element before cleaning out old result and on failure prepend message
function refreshSearchResults(searchData) {
    searchResults.innerHTML = '';

    for (var i = 0; i < searchData.length; i++) { // FIXME: Var vs let
        const card = createResultCardFromResultPojo(searchData[i]);
    
        if (card !== undefined) {
            const divider = document.createElement('div');
            divider.className = 'divider';
    
            searchResults.appendChild(divider);
            searchResults.appendChild(card);
        }
    }

    /* No results found */
    if (searchResults.innerHTML === '') {
        const divider = document.createElement('div');
        divider.className = 'divider';

        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `<div class="card-body">
        <h5 class="card-title">Write a Review</h5>
        <p class="card-text">Couldn't find the property you were looking for? Share your thoughts and help others by writing a review.</p>
        <button class="btn btn-primary" onclick="openReviewForm()">Write a Review</button>
    </div>`.trim();
        searchResults.appendChild(divider);
        searchResults.appendChild(card);
    }
}
