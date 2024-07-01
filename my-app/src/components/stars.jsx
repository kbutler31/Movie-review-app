import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StartRating = ({stars, disabled}) => {
    
    const [rating, setRating] = useState(stars);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            disabled={disabled}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                        />
                    </label>
                );
            })}
        </div>
    );
}