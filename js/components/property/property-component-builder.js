const body = document.getElementsByTagName('body')[0]; // FIXME: better name than container
const row = document.getElementsByClassName('row')[0];
const propertyDetails = document.querySelector('.property-details');


function refreshPropertyDetails(data) {
    if (data === undefined) {
        return // FIXME: why would it be none
    }
    propertyDetails.innerHTML = `<h4 class="card-title text-secondary">${data['eircode']}</h4>
    <p class="card-text">${data['address']}</p>`.trim();
}   
