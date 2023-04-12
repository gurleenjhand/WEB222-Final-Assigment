import reviewArray from './data.js';

const reviewData = reviewArray;

// Convert a numeric rating to a star rating string
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
        stars += '★ ';
    }
    for (let i = rating; i < 5; i++) {
        stars += '☆ ';
    }
    return stars.trim();
}

// Generate a single review card as HTML
function generateReviewCard(review) {
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = review.name;
    card.appendChild(name);

    const date = document.createElement('p');
    date.classList.add('date');
    date.textContent = new Date(review.date).toLocaleDateString();
    card.appendChild(date);

    const rating = document.createElement('p');
    rating.classList.add('rating');
    rating.textContent = getStarRating(review.rating);
    card.appendChild(rating);

    const reviewText = document.createElement('p');
    reviewText.textContent = review.review;
    card.appendChild(reviewText);

    return card;
}

// Generate all review cards and add them to the page
function generateReviewCards() {
    const container = document.getElementById('review-container');

    reviewData.forEach(review => {
        const card = generateReviewCard(review);
        container.appendChild(card);
    });
}

// Call the generateReviewCards function when the page loads
window.addEventListener('load', generateReviewCards);

//form submition
// Get a reference to the form and attach a submit event listener

const submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", function (e) {

    let addname = document.getElementById("name").value;
    let addrate = document.getElementById("rating").value;
    let addreview = document.getElementById("review").value;

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // add 1 to month since it is zero-indexed and pad with zero if necessary
    const day = currentDate.getDate().toString().padStart(2, '0'); // pad with zero if necessary
    const formattedDate = `${year}-${month}-${day}`; // create formatted date string

    let newObject = { name: addname, date: formattedDate, rating: addrate, review: addreview }

    const container = document.getElementById('review-container');

    const card = generateReviewCard(newObject);
    container.appendChild(card);
})
