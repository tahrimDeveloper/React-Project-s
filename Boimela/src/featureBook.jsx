import React from 'react';
import { Star } from 'lucide-react';

function featureBook({ book, onFeaturedBook }) {
  return (
    <button
      onClick={() => onFeaturedBook(book.id)}
      className="cursor-pointer bg-green-100 rounded-full p-1">
      <Star color={book.featured ? 'red' : 'gray'} />
    </button>
  );
}

export default featureBook;
