import logoFooter from "../../assets/logo-footer.png";
import "../../utils/style/sass/Footer.scss";

function Footer() {
  return (
    <div className="Footer-div">
      <img className="Footer-logo" src={logoFooter} alt="logo" />
      <br></br>
      <span className="footer-span">© 2020 Kasa. All rights reserved</span>
    </div>
  );
}

export default Footer;
