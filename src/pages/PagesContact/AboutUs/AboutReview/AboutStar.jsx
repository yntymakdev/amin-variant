import React from "react";

const AboutStar = ({ value, onStarClick, maxStars }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span
        key={i}
        className={i <= value ? "star active" : "star"}
        onClick={() => onStarClick(i)}
      >
        &#9733;
      </span>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

export default AboutStar;
