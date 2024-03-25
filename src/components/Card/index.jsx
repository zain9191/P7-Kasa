import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Card = () => {
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/logements.json");
        if (!response.ok) throw new Error("Data could not be fetched");
        const data = await response.json();
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!accommodation) return <div>Loading...</div>;

  const {
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = accommodation;

  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="host-info">
        <img src={host.picture} alt={host.name} className="host-picture" />
        <p>Hosted by: {host.name}</p>
        <p>Rating: {rating}</p>
      </div>
      <p>Location: {location}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="equipments">
        <h3>Equipments:</h3>
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
