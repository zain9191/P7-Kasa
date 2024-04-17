import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "../../style/css/main.css";
import Card from "../../components/Card";
import Erorr from "../../components/Error";
function Logement() {
  const { logementId } = useParams();
  const { isLoading, data, error } = useFetch(`/logements.json`);
  const [notFound, setNotFound] = useState(false);

  React.useEffect(() => {
    if (!isLoading && data) {
      const logementExists = data.some(
        (logement) => logement.id === logementId
      );
      setNotFound(!logementExists);
    }
  }, [isLoading, data, logementId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching data</p>;
  }

  if (notFound) {
    return <Erorr />;
  }

  return (
    <div>
      {data.map((logement) => {
        if (logement.id === logementId) {
          return (
            <div className="logement__main" key={logement.id}>
              <Card logement={logement} />
              <div className="logement__description"></div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Logement;
