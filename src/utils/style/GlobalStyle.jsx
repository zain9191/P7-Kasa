import { createGlobalStyle } from "styled-components";
const StyledGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('path/to/Montserrat-Regular.woff2') format('woff2'),
         url('path/to/Montserrat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'Montserrat'
  }
`;
function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;
