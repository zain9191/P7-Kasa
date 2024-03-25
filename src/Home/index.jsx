// import Card from "../components/Card";
import "../utils/style/sass/home.scss";
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

  const testLogement = (
    <div
      className="Home-Div-Cont"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
      // }}
    >
      <h2 className="Home-h2">Titre de la location</h2>
    </div>
  );

  return (
    <div>
      {logementsData.map((logementData) => (
        <div
          key={logementData.id}
          className="Home-Div-Cont"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logementData.cover})`,
          }}
        >
          <h2 className="Home-h2">{logementData.title} </h2>
        </div>
      ))}
    </div>

    // testLogement
  );
}

export default Home;
