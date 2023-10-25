/*
FIXME: Big list of FIXMEs
- TS instead of JS

*/

/* Constants */
const searchInput = document.getElementById('searchInput');
const searchTypeSelect = document.getElementById('searchType');

/* Functions */
// HERE
  

function filterSearch(searchData) {
    // const searchData = fetchDataWithCORS('https://3mtfm3nngqn7j2bhj3uw2mprha0lvqov.lambda-url.eu-west-1.on.aws/');
    const key = searchInput.value.trim().toLowerCase()
    const reducedSearchData = []
    const searchType = searchTypeSelect.options[searchTypeSelect.selectedIndex].value.trim().toLowerCase();
    
    if (key === '') {
        return searchData;
    }

    for (var i = 0; i < searchData.length; i++) {
        if (searchData[i] === undefined) {
            continue;
        }

        if (searchType === 'eircode') {
            const eircode = searchData[i]['eircode'].toLowerCase()
            if (key.includes(eircode) || eircode.includes(key)) {
                reducedSearchData.push(searchData[i])
            }
        }

        if (searchType === 'address') {
            const address = searchData[i]['address'].toLowerCase()
            if (key.includes(address) || address.includes(key)) {
                reducedSearchData.push(searchData[i])
            }
        }
    }
    return reducedSearchData

    // return searchData; // TODO: add logic to call endpoints and get proper data  
}

function performSearch() {
    const devEndpoint = 'https://68vfhgotm0.execute-api.eu-west-1.amazonaws.com'; // Should be properties 
    const prodEndpoint = 'https://drixy6cd52.execute-api.eu-west-1.amazonaws.com';
    fetch(`${devEndpoint}/property`) // FIXME: This is experimental
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            performSearchOld(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function performSearchOld(searchData) {
    const filteredSearchData = filterSearch(searchData);
    refreshSearchResults(filteredSearchData);

}

/* Event listeners */
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

