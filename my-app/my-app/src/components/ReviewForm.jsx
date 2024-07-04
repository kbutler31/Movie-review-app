import React from "react";
import StarRating from "./stars";

const ReviewForm = ({movieID, addReview}) => {

    const[user, setUser] = React.useState("");
    const[review, setReview] = React.useState("");

    const userhandler = (e) => {
        setUser(e.target.value);
    };

    const reviewHandler = (e) => {
        setReview(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const stars = e.target.rating.value;
        
        addReview(movieID,{
            id:"",
            user:user,
            review:review,
            stars:stars
        }
    );
    resetform();
    };

    const resetform = () => {
        setUser("");
        setReview("");
    };
    return (
        <>
        <div className="reviewFormContainer">
            <legend>Leave a Review</legend>
            <form onSubmit={submitHandler}>
                <label htmlFor="user">Name</label>
                <input
                    type="text"
                    id="user"
                    value={user}
                    onChange={userhandler}
                />
                <label htmlFor="review">Review</label>
                <textarea rows="4" cols="30" id="review" value={review} onChange={reviewHandler}></textarea>
                <label htmlFor="Rating"></label>
                <StarRating 
                    disabled={false}
                    stars={0}
                    />
            <input type="submit" value="Submit Review" />
            </form>
        
        
        </div>
        </>
    );
};



export default ReviewForm;