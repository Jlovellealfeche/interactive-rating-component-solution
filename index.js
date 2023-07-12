const mainContainer = document.querySelector(".container");
const reviewContainer = document.querySelector(".review");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const reviewRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    reviewContainer.classList.remove("hidden");
});

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        reviewRating.innerHTML = rating.innerHTML;
    });
});

rateAgain.addEventListener("click", () => {
    mainContainer.style.display = "block";
    reviewContainer.classList.add("hidden");
});

