import errorImg from "../../assets/error.png";
import "../../utils/style/sass/error.scss";
function Error() {
  return (
    <div className="error-main-div">
      <img className="error-img" src={errorImg} alt="Page Not Found" />

      <span className="error-msg">
        Oups! La page que vous demandez n'existe pas.
      </span>

      <a className="error-back-home">Retourner sur la page d’accueil</a>
    </div>
  );
}
export default Error;
