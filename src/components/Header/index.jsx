import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../utils/style/sass/header.scss";

function Header() {
  return (
    <div>
      <div className="StyledHeaderDiv">
        <div>
          <img className="StyledLogo" src={logo} alt="logo" />
        </div>
        <ul className="StyledUl">
          <li className="StyledLi">
            <Link to="/" className="StyledLink">
              Accueil
            </Link>
          </li>
          <li className="StyledLi">
            <Link to="/about" className="StyledLink">
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
