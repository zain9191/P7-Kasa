// import Card from "../components/Card";
import "../utils/style/sass/home.scss";

function Home() {
  const logement = (
    <div className="Home-Div-Cont">
      <h2 className="Home-h2">Titre de la location</h2>
    </div>
  );

  return (
    <div>
      {logement}, {logement}, {logement}
    </div>
  );
}

export default Home;
