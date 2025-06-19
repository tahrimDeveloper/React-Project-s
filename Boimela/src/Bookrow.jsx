import React from 'react';
import BookDetails from './Bookdetails';
import FeatureBook from './featureBook';

function Bookrow({ book, onFeaturedBook }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook book={book} onFeaturedBook={onFeaturedBook} />
    </div>
  );
}

// {
// import PropTypes from 'prop-types';

// Bookrow.propTypes = {
//   book: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//   }).isRequired,
// };
// }

export default Bookrow;
