import movie from "./Movies";

const MovieList = ({ movies, addReview }) => {

    return (
        <>
            {movies.map((movie) => (
                <Movie key={index} movie={movie} addReview={addReview} />
            ))} 
        </>
    );
};
export default MovieList