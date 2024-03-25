import { createGlobalStyle } from "styled-components";
const StyledGlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Regular.woff2') format('woff2'), /* Adjust the path accordingly */
       url('/fonts/Montserrat-Regular.woff') format('woff'); /* Adjust the path accordingly */
  font-weight: normal;
  font-style: normal;
}
  
* {
font-family: "Montserrat";
}

body{
    width:100s%;
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
