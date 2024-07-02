import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import './app.css';
import './util/index.js';
import {Stores} from './assets/Stores.js';

export default function App() {
    const [movies, setMovies] = React.useState(Stores);

    const addReview = (movieID, review) => {
        const newMovies = movies.map(movie => {
            if (movie.id === movieID){
                const lastReview = movie.review[ movie.review.length - 1];
                const newReview = lastReview ? lastReview.id + 1 :1;
                return{
                    ...movie,
                    review: [
                        ...movie.reviews,
                        {id:newReview, ... review}
                    ]
                };
            }
            return movie;
        });
        setMovies(newMovies);
    }
    return(
    <div className="container">
        <Header />
        <MovieList movies = {movies} addReview={addReview}/>
    </div>
);

}


// export default function App() {
//     const [movies, setMovies] = React.useState(Stores); 

//     const [reviews, setReviews] = React.useState(StoresReviews);

//     const [rating, setRating] = React.useState(StoresRating);
    
//     const addReview = (movieID, review) => {
//         const newMovies = movies.map(movies => {
//             if (movie.id === movieID){
//                 const lastReview = movie.review[ movie.review.length - 1];
//                 const newReview = lastReview ? lastReview.id + 1 :1;
//                 return{
//                     ...movie,
//                     review: [
//                         ...movie.reviews,
//                         {id:newReviewID, ... review}
//                     ]
//                 };
//             }
//             return movie;
//         });
//         setMovies(newMovies);
//     };
//     return (
//         <div className="container">
//             <Header />
//             <MovieList movies = {movies} addReview={addReview}/>
//         </div>
//     );
// }