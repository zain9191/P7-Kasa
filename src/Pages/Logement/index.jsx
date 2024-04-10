import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import "../../style/css/main.css";
import Rating from "../../components/Rating";
import Carousel from "../../components/Carousel";
import UniversalCollapsible from "../../components/Collapse/index";

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
                  <Carousel images={logement["pictures"]} />

                  <div className="logement__main__wraper">
                    <div className="logement__main__wraper__first">
                      <h2 className="logement__title">{logement.title}</h2>
                      <h3 className="logement__location">
                        {logement.location}
                      </h3>
                      <div className="logement__tags--div">
                        {logement.tags.map((tag, index) => (
                          <div key={index}>
                            <span className="logement__tags--span">{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="logement__main__wraper__second">
                      <div className="logement__rating-owner">
                        <Rating
                          rating={parseInt(logement.rating)}
                          className="logement__rating-div"
                        />

                        <div className="logement__owner">
                          {logement.host["name"].split(" ")[0]}
                          <br />
                          {logement.host["name"].split(" ")[1]}
                          <img
                            className="logement__owner-pic"
                            src={logement.host["picture"]}
                            alt="the owner"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logement__description">
                    <UniversalCollapsible title="Description">
                      <p>{logement.description}</p>
                    </UniversalCollapsible>

                    <UniversalCollapsible title="Equipment">
                      <ul>
                        {logement.equipments.map((equipment, index) => (
                          <li key={index}>{equipment}</li>
                        ))}
                      </ul>
                    </UniversalCollapsible>
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
