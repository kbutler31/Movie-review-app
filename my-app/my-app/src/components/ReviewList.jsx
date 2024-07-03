import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
console.log("ReviewList:", reviews);

    return (
        <div className = "reviewContainer">
            <legend>Reviews</legend>
            {reviews.map((review) => {
                console.log("jsx map review:", review);
                return (
                <Review key={review.id} review={review} />
            )
        }
        )}
        </div>
    );
};
export default ReviewList