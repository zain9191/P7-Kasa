import logoFooter from "../../assets/logo-footer.png";
import "../../style/css/main.css";

function Footer() {
  return (
    <div className="Footer-div">
      <img className="Footer-div__logo" src={logoFooter} alt="logo" />
      <br></br>
      <span className="Footer-div__span">© 2020 Kasa. All rights reserved</span>
    </div>
  );
}

export default Footer;
