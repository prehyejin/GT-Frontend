import { createGlobalStyle } from "styled-components";
import { Reset } from 'styled-reset'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;

  }

  #root {
    border: solid red;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
