import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "../../utils/style/sass/logement.scss";
import Rating from "../../components/Rating";

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
                <div className="logement-main-div" key={logement.id}>
                  <img
                    className="logement-img"
                    src={logement.cover}
                    alt="logement cover "
                  />
                  <h2 className="logement-title">{logement.title}</h2>
                  <h3 className="logement-location">{logement.location}</h3>
                  <div className="logement-tags-div">
                    {logement.tags.map((tag, index) => (
                      <div key={index}>
                        <span className="logement-tags-span">{tag}</span>
                      </div>
                    ))}
                  </div>

                  <div className="logement-owner-rating">
                    <div className="logement-rating-div">
                      <Rating rating={parseInt(logement.rating)} />
                    </div>

                    <div className="logement-owner"></div>
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
