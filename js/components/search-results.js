const searchResults = document.getElementById('searchResults'); // FIXME: better name than container


function createResultCardFromResultPojo(data) {
    if (data === undefined) {
        return // FIXME: why would it be none
    }
    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.innerHTML = `<a href="https://rb.gy/6gzq1">
        <div class="card-body">
            <h5 class="card-title"><i class="fas fa-map-marker-alt"></i> ${data['eircode']}</h5>
            <p class="card-text"><!--<i class="fas fa-address-book">--></i> ${data['address']}</p>
            <p class="card-text">
                <i class="fas ${data['rating'] >= 3.5 ? 'fa-star' : 'fa-star-half-alt'}"></i> ${data['rating']}
                <i class="fas fa-solid fa-user ml-2"></i> ${data['reviewCount']}
                <i class="fas fa-comment ml-2"></i> ${data['commentCount']}
            </p>
        </div>
    </a>`.trim();
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
