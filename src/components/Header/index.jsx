import logo from "../../assets/logo.png";
import BackGroundImg from "../../assets/header-bg.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledHeaderDiv = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledLogo = styled.img`
  width: 20vh;
  hight: auto;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  width: 50vh;
`;
const StyledLi = styled.li`
  padding-left: 20px;
`;

const StyledA = styled.a`
  color: ${colors.primary};
`;

const StyledBackgroundDiv = styled.div`
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BackGroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  border-radius: 25px;
`;

const StyledOverlay = styled.div``;
const StyledText = styled.span`
  color: #ffffff;
  font-size: 3vh;
`;

function Header() {
  return (
    <div>
      <StyledHeaderDiv>
        <div>
          <StyledLogo src={logo} alt="logo" />
        </div>
        <StyledUl>
          <StyledLi>
            <StyledA href="#">Accueil</StyledA>
          </StyledLi>
          <StyledLi>
            <StyledA href="#">A Propos</StyledA>
          </StyledLi>
        </StyledUl>
      </StyledHeaderDiv>
      <StyledBackgroundDiv>
        <StyledOverlay />{" "}
        <StyledText>Chez vous, partout et ailleurs</StyledText>
      </StyledBackgroundDiv>
    </div>
  );
}

export default Header;
