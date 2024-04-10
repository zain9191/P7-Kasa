import { createGlobalStyle } from "styled-components";
const StyledGlobalStyle = createGlobalStyle`

* {
font-family: "Montserrat";
}

body{
    width:100%;
    display;felx;
    align-items: center;
    // border:dotted red 2px;
    padding: 10px 10px ;
    }
`;
function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
