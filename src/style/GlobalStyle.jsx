import { createGlobalStyle } from "styled-components";
const StyledGlobalStyle = createGlobalStyle`

* {
font-family: "Montserrat";
}

body{
    width:100%;
    padding: 10px 10px ;
    }
`;
function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
