import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.png';
import image3 from './assets/image-3.jpg';

const Review = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="review-container">
      <h1 className="review-title">Thank You For Booking With Us</h1>
      <h2 className="gold-text">thank you for booking with us</h2>
      <div className="review-images-container">
        <img className="review-images" src={image1} alt="Image 1" />
        <img className="review-images" src={image2} alt="Image 2" />
        <img className="review-images" src={image3} alt="Image 3" />
      </div>
      <h3 className="leave-review">DON'T FORGET TO LEAVE A </h3>
      <h3 className="gold-review">review</h3>

      <div className="star-container">
        <StarRatings
          rating={rating}
          starRatedColor="#ffd700"
          starHoverColor="#ffed85"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="100px"
          starSpacing="20px"
        />
        <p className="rating-text">You rated: {rating} stars</p>
      </div>
    </div>
  );
};

export default Review;
