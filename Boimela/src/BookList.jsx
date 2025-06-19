import React from 'react';
import Bookrow from './Bookrow';

function BookList({ searchTerm, books, onFeaturedBook }) {
  const rows = [];
  books.forEach(book => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    rows.push(
      <Bookrow key={book.id} book={book} onFeaturedBook={onFeaturedBook} />
    );
  });
  return <div className="space-y-4">{rows}</div>;
}

export default BookList;
