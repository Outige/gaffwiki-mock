// Constants
const seeMoreLess = document.querySelectorAll('.see-more-less');

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
