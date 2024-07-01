import StarRating from "./stars";

const Review = ({ review }) => {
    return(
        <div className = "reviewContainer">
            <p className="reviewUser">{review.user}</p>
            <p className="reviewText">{review.review}</p>
            <StarRating
             stars={review.stars}
             disabled={true}
              />
        </div>

    )

}

export default Review