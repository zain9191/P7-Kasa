import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "../../style/css/main.css";
// import Rating from "../../components/Rating";
// import Carousel from "../../components/Carousel";
// import UniversalCollapsible from "../../components/Collapse/index";
import Card from "../../components/Card";

function Logement() {
  const { logementId } = useParams();
  const navigate = useNavigate();
  const { isLoading, data, error } = useFetch(`/logements.json`);

  React.useEffect(() => {
    if (
      !isLoading &&
      data &&
      !data.some((logement) => logement.id === logementId)
    ) {
      navigate("/404");
    }
  }, [isLoading, data, logementId, navigate]);

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
                  <Card logement={logement} />
                  <div className="logement__description"></div>
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
