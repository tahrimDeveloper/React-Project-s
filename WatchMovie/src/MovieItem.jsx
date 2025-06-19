import StarRating from './Stars';

function MovieItem({ movie, rateMovie, toggleWatched, deleteMovie }) {
  function ratingChange(newRating) {
    rateMovie(movie.id, newRating);
  }

  return (
    <>
      <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md">
        <span
          className={`flex-1 mr-4 ${
            movie.watched ? 'line-through text-gray-400' : 'text-white'
          }`}>
          {movie.title} on {movie.ott} {movie.rating && `⭐ ${movie.rating}/5`}
        </span>
        <div className="flex gap-2">
          <ReactStars
            count={5}
            value={movie.rating}
            onChange={ratingChange}
            size={24}
            color2={'#ffd700'}
          />
          {/* <ReactStars
            count={5}
            value={movie.rating}
            onChange={ratingChange}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fas fa-star-half-alt"></i>}
            filledIcon={<i className="fas fa-star"></i>}
            activeColor="#ffd700"
          /> */}
          <button
            onClick={() => toggleWatched(movie.id)}
            className="px-2 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded">
            {movie.watched ? 'Unwatch' : 'Watched'}
          </button>
          <button
            onClick={() => deleteMovie(movie.id)}
            className="px-2 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded">
            Remove
          </button>
        </div>
      </li>
    </>
  );
}

export default MovieItem;
