import React from 'react';
import ReactStars from 'react-rating-stars-component';

const StarRating = () => {
  const ratingChanged = newRating => {
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fas fa-star-half-alt"></i>}
      filledIcon={<i className="fas fa-star"></i>}
      activeColor="#ffd700"
    />
  );
};

export default StarRating;
