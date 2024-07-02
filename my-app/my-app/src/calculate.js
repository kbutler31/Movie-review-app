import react from "react";
const calcMovieRating = (reviews) => {
    let rating = 0;
    reviews.forEach((review) => {
        console.log(review.rating);
        rating += review.rating;
    });
    return rating / reviews.length.toFixed(2);
};

export default calcMovieRating