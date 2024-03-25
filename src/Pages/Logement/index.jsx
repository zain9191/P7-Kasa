import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";

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
                <div key={logement.id}>
                  <h2>{logement.title}</h2>
                  <p>{logement.description}</p>
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
