import React from 'react';

function Search({ searchTerm, onSearchBook }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Books..."
        onChange={event => onSearchBook(event.target.value)}
        className="mb-4 border rounded-md p-1 w-full"
      />
    </form>
  );
}

export default Search;
