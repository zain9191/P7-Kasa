import React from "react";
import PropTypes from "prop-types";
import Carousel from "../Carousel";
import UniversalCollapsible from "../Collapse";
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
    <div className="card">
      <Carousel className={"carousel"} images={pictures} />
      <h2 className="logement__title">{title}</h2>
      {/* Collapsible Description
      <UniversalCollapsible className={"collapsible"} title="Description">
        <p>{description}</p>
      </UniversalCollapsible> */}
      <div className="host-info">
        <img
          className={"logement__owner-pic"}
          src={host.picture}
          alt={host.name}
        />
        <p className="logement__owner">{host.name}</p>
        <p>Rating: {rating}</p>
      </div>
      <p className="logement__location">Location: {location}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      {/* Collapsible Equipment List
      <UniversalCollapsible className={"collapsible"} title="Equipments">
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </UniversalCollapsible> */}
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
