import Card from "../../components/Card";
import "../../utils/style/sass/home.scss";
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
    <div>
      <div className="StyledBackgroundDiv">
        <div className="StyledOverlay" />
        <span className="StyledText">Chez vous, partout et ailleurs</span>
      </div>
      {logementsData &&
        logementsData.map((logementData) => (
          <a
            href={"logement/" + logementData.id}
            key={logementData.id}
            className="Home-Div-Cont"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logementData.cover})`,
            }}
          >
            <h2 className="Home-h2">{logementData.title} </h2>
          </a>
        ))}
    </div>

    // testLogement
  );
}

export default Home;
