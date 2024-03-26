import React from "react";
import PropTypes from "prop-types";
import emptyStar from "../../assets/emptyStar.png";
import filledStar from "../../assets/filled-star.png";

const Rating = ({ rating }) => {
  const maxRating = 5;
  let stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(i <= rating ? filledStar : emptyStar);
  }

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" className="star" />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
