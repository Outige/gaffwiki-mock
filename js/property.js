// Constants
const seeMoreLess = document.querySelectorAll('.see-more-less');
// document.getElementsByTagName('body')[0].innerHTML = ''; // FIXME: This might annoy you later. Should probably start with a loading screen that disables once data comes in 

// Functions

// Event listeners
for (var i = 0; i< seeMoreLess.length; i++) { // FIXME: could probably be way better and this has probably lead to some funky css and html
    console.log(i, seeMoreLess[i])

    seeMoreLess[i].addEventListener("click", function (event) {
        const innerText = event.target.innerText;
        if (innerText === 'see more') {
            event.target.innerText = 'see less';
        } else {
            event.target.innerText = 'see more';
        }
    });
}


function performSearch() {
    const devEndpoint = 'https://68vfhgotm0.execute-api.eu-west-1.amazonaws.com'; // Should be properties 
    const prodEndpoint = 'https://drixy6cd52.execute-api.eu-west-1.amazonaws.com';

    const urlParams = new URLSearchParams(window.location.search);
    const eircode = urlParams.get('eircode'); 
    fetch(`${devEndpoint}/property/${eircode}`) // FIXME: This is experimental
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            refreshPropertyDetails(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    const id = urlParams.get('id');
    fetch(`${devEndpoint}/review/property/${id}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Update property details on page load
performSearch()
