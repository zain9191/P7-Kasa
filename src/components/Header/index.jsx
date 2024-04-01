import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "StyledHeaderDiv__Link StyledHeaderDiv__Link__active"
                  : "StyledHeaderDiv__Link"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li className="StyledHeaderDiv__Li">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "StyledHeaderDiv__Link StyledHeaderDiv__Link__active"
                  : "StyledHeaderDiv__Link"
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
