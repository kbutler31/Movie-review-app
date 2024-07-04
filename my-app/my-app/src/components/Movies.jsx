import React from "react";
import { calcMovieRating } from "../util";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Movie = ({ movie, review }) => {
  const categoryList = movie.category.map((category, index) => (
    <li key={index}>{category}</li>
  ));

  const rating = calcMovieRating(movie.reviews);
  return (
    <article key={movie.id}>
      <h3>{movie.title} - {movie.year}</h3>
      <header>
        <img className="thumbnail" src={movie.imagSrc} alt={movie.title} />
        <div className="details">
          <p>{movie.Synopsis}</p>
          <h4>Rating</h4>
          <div className="categories">
            <h4>Categories</h4>
            <ul>{categoryList}</ul>
          </div>
        </div>
      </header>
      <aside>
        <ReviewList reviews={movie.reviews} />
        <ReviewForm movieID={movie.id} addReview={addReview} />
console.log("addReview:", addReview);

      </aside>
    </article>
  );
};