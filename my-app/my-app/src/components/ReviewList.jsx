import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
    return (
        <Fieldset classname = "reviewContainer">
            <legend>Reviews</legend>
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </Fieldset>
    );
};
export default ReviewList