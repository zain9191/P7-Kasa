import "../../style/css/main.css";
import UniversalCollapsible from "../../components/Collapse/index";

import bg from "../../assets/about-bg.png";

function About() {
  return (
    <div className="AboutDiv">
      <img src={bg} className="AboutDiv__img" alt="Cover" />

      <UniversalCollapsible className="AboutDiv__AboutColla" title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale...
        </p>
      </UniversalCollapsible>
      <UniversalCollapsible className="AboutDiv__AboutColla" title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </UniversalCollapsible>
      <UniversalCollapsible className="AboutDiv__AboutColla" title="Service">
        <p>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      </UniversalCollapsible>
      <UniversalCollapsible className="AboutDiv__AboutColla" title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </UniversalCollapsible>
    </div>
  );
}

export default About;
