import React, { useState, useEffect } from "react";
import arrow_left from "../../assets/arrow-left.png";
import arrow_right from "../../assets/arrow-right.png";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("hide");
    setTimeout(() => {
      setAnimation("");
    }, 10);
  }, [currentIndex]); // Trigger animation whenever currentIndex changes

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
        className={`carousel__button carousel__button--prev ${animation}`}
        onClick={prevSlide}
      >
        <img src={arrow_left} alt="Previous Slide" />
      </button>
      <div className={`carousel__image-container ${animation}`}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className="carousel__radios">
        {images.map((image, index) => (
          <input
            key={index}
            type="radio"
            name="carousel-radio"
            checked={index === currentIndex}
            onChange={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button
        className={`carousel__button carousel__button--next ${animation}`}
        onClick={nextSlide}
      >
        <img src={arrow_right} alt="Next Slide" />
      </button>
    </div>
  );
};
export default Carousel;
