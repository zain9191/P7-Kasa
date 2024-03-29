import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "../../style/css/main.css";
import Rating from "../../components/Rating";
import {
  DescriptionCollapse,
  EquipmentCollapse,
} from "../../components/Collapse/index";
import Carousel from "../../components/Carousel";

function Logement() {
  const { logementId } = useParams();
  const { isLoading, data, error } = useFetch(`/logements.json`);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred while fetching data</p>}
      {!isLoading && !error && (
        <div>
          {data.map((logement) => {
            if (logement.id === logementId) {
              return (
                <div className="logement__main" key={logement.id}>
                  <Carousel images={logement["pictures"]} />

                  <h2 className="logement__title">{logement.title}</h2>
                  <h3 className="logement__location">{logement.location}</h3>
                  <div className="logement__tags--div">
                    {logement.tags.map((tag, index) => (
                      <div key={index}>
                        <span className="logement__tags--span">{tag}</span>
                      </div>
                    ))}
                  </div>
                  <div className="logement__rating-owner">
                    <Rating
                      rating={parseInt(logement.rating)}
                      className="logement__rating-div"
                    />

                    <div className="logement__owner">
                      {logement.host["name"]}
                      <img
                        className="logement__owner-pic"
                        src={logement.host["picture"]}
                        alt="the owner"
                      />
                    </div>
                  </div>
                  <div className="logement__description">
                    <DescriptionCollapse description={logement.description} />
                    <br></br>
                    <EquipmentCollapse equipment={logement.equipments} />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default Logement;
