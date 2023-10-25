const body = document.getElementsByTagName('body')[0]; // FIXME: better name than container
const row = document.getElementsByClassName('row')[0];
const propertyDetails = document.querySelector('.property-details');
const searchResults = document.querySelector('.searchResults'); // FIXME: camel case: look at correct case; FIXME: had to add class and ID.......


function refreshPropertyDetails(data) {
    if (data === undefined) {
        return // FIXME: why would it be none
    }
    propertyDetails.innerHTML = `<h4 class="card-title text-secondary">${data['eircode']}</h4>
    <p class="card-text">${data['address']}</p>`.trim();
}



function createReview(data, reviewPos) {
    function roundDownToOneDecimal(number) {
        return Math.floor(number * 10) / 10;
    }

    function generateReviewTopicStars(score) {
        return `: ${score}<i class="fas fa-star text-secondary"></i>`;

        result = '';
        while (score > 0) {
            score -= 1;
            if (score >= 0) {
                result += '<i class="fas fa-star text-secondary"></i>';
            } else {
                result += '<i class="fas fa-star-half text-secondary"></i>';
            }
        }

    }
    
    const review = document.createElement('div');
    review.className = 'card mb-3';

    const divider = document.createElement('div');
    review.className = 'divider';

    const reviewHeading = document.createElement('div');
    reviewHeading.className = 'card-body review-heading';

    var reviewScoreSum = 0;
    for (var i = 0; i < data.review_topics.length; i++) {
        reviewScoreSum += data.review_topics[i].topic_score;
    }

    reviewHeading.innerHTML = `<h5 class="card-title">${data.title}</h5>
    <p class="card-text"><i class="fas fa-calendar"></i> Dec 2021 - Oct 2023</p>
    <p class="card-text mb-0">
        <i class="fas fa-star"></i>${roundDownToOneDecimal(reviewScoreSum/data.review_topics.length)}
        <i class="fas fa-thumbs-up"></i>10
        <i class="far fa-comment"></i> 5
         <!-- <span class="text-primary see-more">see more</span> -->
    </p>
    <p class="text-primary mt-0 mb-0 see-more-less see-more" data-toggle="collapse" href="#review${reviewPos}">see more</p>
    <p class="text-primary mt-0 mb-0 see-more-less see-less not-visible">see less</p>
    <!-- FIXME: make this flip when clicked -->`;

    const reviewBody = document.createElement('div');
    reviewBody.id = `review${reviewPos}`;
    reviewBody.className = 'collapse';
    reviewBody.innerHTML = `<div class="divider col-8 text-primary" style="margin-left: auto; margin-right: auto;"></div>`;
    for (var i = 0; i < data.review_topics.length; i++) {
        const reviewTopic = document.createElement('div');
        reviewTopic.className = 'card-body review-topic';
        reviewTopic.innerHTML = `${data.review_topics[i].review_topic}
        ${generateReviewTopicStars(data.review_topics[i].topic_score)}
    </h4>
    <p>${data.review_topics[i].topic_description}</p>`
        reviewBody.append(reviewTopic);
    }

    const summary = document.createElement('div');
    summary.className = 'card-body review-topic';
    summary.innerHTML =`<h4>Summary</h4>
    <p>${data.summary}</p>`
    reviewBody.appendChild(summary);

    review.append(divider);
    review.appendChild(reviewHeading);
    review.append(reviewBody);
    return review;
}

function refreshReviews(data) {
    searchResults.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        searchResults.appendChild(createReview(data[i], i));
    }
}
