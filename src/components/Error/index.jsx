import errorImg from "../../assets/error.png";
import "../../style/css/main.css";
function Error() {
  return (
    <div className="error-main">
      <img className="error-main__img" src={errorImg} alt="Page Not Found" />

      <span className="error-main__msg">
        Oups! La page que vous demandez n'existe pas.
      </span>

      <a className="error-main__back">Retourner sur la page d’accueil</a>
    </div>
  );
}
export default Error;
