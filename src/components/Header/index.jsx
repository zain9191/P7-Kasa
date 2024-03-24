import logo from "../../assets/logo.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";
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
            <a href="#" className="StyledA">
              Accueil
            </a>
          </li>
          <li className="StyledLi">
            <a href="#" className="StyledA">
              A Propos
            </a>
          </li>
        </ul>
      </div>
      <div className="StyledBackgroundDiv">
        <div className="StyledOverlay" />
        <span className="StyledText">Chez vous, partout et ailleurs</span>
      </div>
    </div>
  );
}

export default Header;
