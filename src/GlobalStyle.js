import { createGlobalStyle } from "styled-components";
import { Reset } from 'styled-reset'
import reset from 'styled-reset'
import Pretendard_Reg from './font/Pretendard-Regular.woff'
import Pretendard_Light from './font/Pretendard-Light.woff'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html{
    font-size:16px;
  }
  @media  all and (max-width: 1024px) {
    html { font-size: 14px; } 
  }
  @media  all and (max-width: 800px) {
    html { font-size: 11px; } 
  }
  @media all and  (max-width: 650px) {
    html { font-size: 10px; } 
  }

  @media  all and (max-width: 500px) {
    html { font-size: 8px; } 
  }


  body {
    font-family: "Pretendard-Regular", "Helvetica", "Arial", sans-serif;
    line-height: 1.5;

  }
  a { text-decoration: none; outline: none; color: black}
  a:hover, a:active {text-decoration: none;}
  #root {
    height: 100vh;
    width: 100%;
  }

  @font-face {
        font-family: "Pretendard-Regular";
        src: local("Pretendard-Regular");
        src: url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css)
         format('woff');
        font-style: normal;
  }

  @font-face {
        font-family: "Pretendard-Light";
        src: local("Pretendard-Light");
        src: url(${Pretendard_Light}) format('woff');
        font-style: normal;
  }

`;

export default GlobalStyle;
