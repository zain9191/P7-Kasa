import React from "react";
import PropTypes from "prop-types";
import Carousel from "../Carousel";
import UniversalCollapsible from "../Collapse";
import Rating from "../Rating";

const Card = ({ logement }) => {
  if (!logement) return <div>Loading...</div>;

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logement;

  return (
    <div className="Card">
      <Carousel className="carousel" images={pictures} />

      <div className="logement__main__wrapper">
        <div className="logement__main__wrapper__first">
          <h2 className="logement__title">{title}</h2>
          <h3 className="logement__location">{location}</h3>
          <div className="logement__tags--div">
            {tags.map((tag, index) => (
              <div key={index}>
                <span className="logement__tags--span">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="logement__main__wrapper__second">
          <div className="logement__rating-owner">
            <Rating
              rating={parseInt(rating)}
              className="logement__rating-div"
            />

            <div className="logement__owner">
              {host.name.split(" ")[0]}
              <br />
              {host.name.split(" ")[1]}
              <img
                className="logement__owner-pic"
                src={host.picture}
                alt="the owner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="logement__description">
        <UniversalCollapsible className="collapsible" title="Description">
          <p>{description}</p>
        </UniversalCollapsible>

        <UniversalCollapsible className="collapsible" title="Equipments">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </UniversalCollapsible>
      </div>
    </div>
  );
};

Card.propTypes = {
  logement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pictures: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    equipments: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default Card;
