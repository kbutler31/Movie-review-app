import React from "react";
import {calcMovieRating} from "../util"
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Movies = ({movies, review}) => {

    const categoryList = movie.category.map((category,index) => <li key={index}>{category}</li>);

    const rating = calcMovieRating(movies.reviews);
        return (
            <article key={movies.id}>
                <h3>{movies.title} - {movies.year}</h3>
                <header>
                    <img className = thumbnail src={movies.imagSrc} alt={movies.title} />
                    <div className="details">
                        <p>{movies.Synopsis}</p>
                        <h4>Rating</h4>
                        <div className = "categories">
                            <h4>Categories</h4>
                            <ul>{categoryList}
                    </div>
                </header>
                <aside>
                    <Reviewlist reviews={movies.reviews} />
                    <ReviewForm movieID = {movies.id} addReview = {addReview} />
                </aside>
            </article>
    );
};

export default Movies;
