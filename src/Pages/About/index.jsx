import "../../style/css/main.css";
import { AboutColla } from "../../components/Collapse/index";
import bg from "../../assets/about-bg.png";

const AboutVar = {
  Fiabilité:
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  Respect:
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  Service:
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  Sécurité:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

function About() {
  return (
    <div className="AboutDiv">
      <img src={bg} className="AboutDiv__img" alt="Cover" />
      <div className="AboutDiv__AboutColla">
        {Object.entries(AboutVar).map(([title, description], index) => (
          <AboutColla key={index} title={title} description={description} />
        ))}
      </div>
    </div>
  );
}

export default About;
