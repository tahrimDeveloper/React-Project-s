import { useState } from 'react';

function MovieForm({ addMovie }) {
  const [movieData, setMovieData] = useState({
    title: '',
    ott: '',
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    console.log(key, value);

    setMovieData({ ...movieData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(movieData);
    if (!movieData?.title.trim() || !movieData?.ott.trim()) return;
    addMovie(movieData);
    setMovieData({ ...movieData, title: '', ott: '' });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 mb-8 w-full">
      <input
        type="text"
        placeholder="Enter Movie Name..."
        name="title"
        onChange={handleChange}
        value={movieData?.title}
        className="flex-1 p-2 border border-gray-700 bg-gray-800 rounded text-white"
      />

      <select
        name="ott"
        value={movieData?.ott}
        onChange={handleChange}
        className="border border-gray-300 rounded-md bg-black">
        <option value="">Select an OTT</option>
        <option value="Netflix">Netflix</option>
        <option value="Hiqmah">Hiqmah</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Hotster">Hotster</option>
        <option value="SonyLIV">SonyLIV</option>
        <option value="Hoichoi">Hoichoi</option>
        <option value="Other">Other</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded ">
        Add
      </button>
    </form>
  );
}

export default MovieForm;
