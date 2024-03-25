import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "../../utils/style/sass/logement.scss";

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
                  <h2>{logement.title}</h2>
                  <h3>{logement.location}</h3>
                  <div>
                    {logement.tags.map((tag, index) => (
                      <div key={index}>
                        <span>{tag}</span>
                      </div>
                    ))}
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
