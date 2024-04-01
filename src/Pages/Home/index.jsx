import Card from "../../components/Card";
import "../../style/css/main.css";
import { useEffect, useState } from "react";

function Home() {
  const [logementsData, setLogementsData] = useState(null);
  useEffect(() => {
    fetch("logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLogementsData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header-overlay" />
        <span className="home__header-text">
          Chez vous, partout et ailleurs
        </span>
      </div>

      <div className="home__grid">
        {logementsData &&
          logementsData.map((logementData) => (
            <a
              href={"logement/" + logementData.id}
              key={logementData.id}
              className="home__card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logementData.cover})`,
              }}
            >
              <h2 className="home__card-title">{logementData.title} </h2>
            </a>
          ))}
      </div>
    </div>
  );
}

export default Home;
