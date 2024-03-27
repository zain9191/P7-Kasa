import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../style/css/main.css";

function Header() {
  return (
    <div>
      <div className="StyledHeaderDiv">
        <div>
          <img className="StyledHeaderDiv__Logo" src={logo} alt="logo" />
        </div>
        <ul className="StyledHeaderDiv__Ul">
          <li className="StyledHeaderDiv__Li">
            <Link to="/" className="StyledHeaderDiv__Link">
              Accueil
            </Link>
          </li>
          <li className="StyledHeaderDiv__Li">
            <Link to="/about" className="StyledHeaderDiv__Link">
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
