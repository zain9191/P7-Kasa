import { createGlobalStyle } from "styled-components";
const StyledGlobalStyle = createGlobalStyle`
    body{
      display: flex;
      justify-content: center; 
      align-items: center; 
      border:dotted 2px red;
      width: 100vh;
    }
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
