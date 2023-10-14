/*
FIXME: Big list of FIXMEs
- TS instead of JS

*/

/* Constants */
const searchInput = document.getElementById('searchInput');
const searchTypeSelect = document.getElementById('searchType');

/* Functions */
function search() {
    const key = searchInput.value.trim().toLowerCase()
    const reducedDummyData = []
    const searchType = searchTypeSelect.options[searchTypeSelect.selectedIndex].value.trim().toLowerCase();
    console.log(key, searchType, key === '')
    
    if (key === '') {
        return dummyData;
    }

    for (var i = 0; i < dummyData.length; i++) {
        if (dummyData[i] === undefined) {
            continue;
        }

        if (searchType === 'eircode') {
            const eircode = dummyData[i]['eircode'].toLowerCase()
            if (key.includes(eircode) || eircode.includes(key)) {
                reducedDummyData.push(dummyData[i])
            }
        }

        if (searchType === 'address') {
            const address = dummyData[i]['address'].toLowerCase()
            if (key.includes(address) || address.includes(key)) {
                reducedDummyData.push(dummyData[i])
            }
        }
    }
    return reducedDummyData

    // return dummyData; // TODO: add logic to call endpoints and get proper data  
}

function performSearch() {
    const searchData = search();
    refreshSearchResults(searchData);

}

/* Event listeners */
console.log(searchInput)
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Enter key was pressed
        // Add your search function or code here
        performSearch();
    }
});

// inputElement.addEventListener('keydown', function (event) {
//     if (event.keyCode === 13 || event.key === 'Enter') { // FIXME: Just use chat
//         console.log('Enter key was pressed');
//         refreshSearch();
//     }
// });
