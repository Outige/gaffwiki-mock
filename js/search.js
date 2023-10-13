/*
FIXME: Big list of FIXMEs
- TS instead of JS

*/

function search() {
    return dummyData; // TODO: add logic to call endpoints and get proper data  
}

// FIXME: this will actually become part of an event listener
const searchData = search();


// FIXME: this will move to /components
const searchResults = document.getElementById('searchResults'); // FIXME: better name than container
searchResults.innerHTML = '';

function createResultCardFromResultPojo(data) {
    const card = document.createElement('div');
    card.className = 'card mb-3';
    card.innerHTML = `<a href="https://rb.gy/6gzq1">
        <div class="card-body">
            <h5 class="card-title"><i class="fas fa-map-marker-alt"></i> D08VW25</h5>
            <p class="card-text"><!--<i class="fas fa-address-book">--></i> 61 Cork St</p>
            <p class="card-text">
                <i class="fas fa-star-half-alt"></i> 2.1
                <i class="fas fa-solid fa-user ml-2"></i> 2
                <i class="fas fa-comment ml-2"></i> 7
            </p>
        </div>
    </a>`.trim();
    return card;
}

// HERE: There is for sure some confusion that NEEDS to be addressed.
// Add all card:
for (var i = 0; i < 10; i++) { // FIXME: Var vs let
    var card = createResultCardFromResultPojo(dummyData[i]);
    // console.log(dummyData.length, i, card, dummyData[i])
    console.log(dummyData[i])
    // searchResults.appendChild(card);
}
console.log(createResultCardFromResultPojo());