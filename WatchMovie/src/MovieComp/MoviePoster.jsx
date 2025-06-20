function MoviePoster({ data }) {
  // console.log(data);
  return (
    <>
      <h1 className="font-bold text-center">Movie List</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {data.map(data => (
          <div className="flex-1 m-2.5 p-2.5 border-2 rounded-xl bg-amber-50">
            <img className="text-center" src={data.poster} alt={data.title} />
            <p>
              <strong>{data.title}</strong> by <strong>{data.director}</strong>{' '}
              was released on <strong>{data.year}</strong>
            </p>
            <p>
              Rating: <strong>{data.rating}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MoviePoster;
