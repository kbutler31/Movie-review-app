import Movie from "./Movies";

const MovieList = ({ movies, addReview }) => {

    return (
        <>
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} addReview={addReview} />
            ))} 
        </>
    );
};
export default MovieList