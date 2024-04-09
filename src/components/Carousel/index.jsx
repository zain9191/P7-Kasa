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

  // Conditionally rendering the arrows if there are more than one image
  const renderArrowLeft = images.length > 1 && (
    <button
      className={`carousel__button carousel__button--prev ${animation}`}
      onClick={prevSlide}
    >
      <img src={arrow_left} alt="Previous Slide" />
    </button>
  );

  const renderArrowRight = images.length > 1 && (
    <button
      className={`carousel__button carousel__button--next ${animation}`}
      onClick={nextSlide}
    >
      <img src={arrow_right} alt="Next Slide" />
    </button>
  );

  return (
    <div className="carousel">
      {renderArrowLeft}
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
            readOnly
          />
        ))}
      </div>
      {renderArrowRight}
    </div>
  );
};

export default Carousel;
