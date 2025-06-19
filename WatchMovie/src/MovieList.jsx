import MovieItem from './MovieItem';

function MovieList({ movies, rateMovie, toggleWatch, deleteMovie }) {
  return (
    <div className="mt-4">
      {movies === 0 ? (
        <p className="text-center text-gray-400">
          No Movies in Your watchlist. add some!
        </p>
      ) : (
        <ul className="space-y-3">
          {movies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              rateMovie={rateMovie}
              toggleWatch={toggleWatch}
              deleteMovie={deleteMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
