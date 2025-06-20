import MovieData from './MovieData';
import MoviePoster from './MoviePoster';
import MovieAnalytic from './MovieAnalytic';

function MovieComponent() {
  // console.log(MovieData);
  return (
    <>
      <MoviePoster data={MovieData} />
      <MovieAnalytic data={MovieData} />
    </>
  );
}

export default MovieComponent;
