import React, { useState } from "react";
// import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--prev"
        onClick={prevSlide}
      >
        Prev
      </button>
      <img
        className="carousel__image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
      />
      <button
        className="carousel__button carousel__button--next"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
