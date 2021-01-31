const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
  }
  body {
    font-size: 16px;
    font-family: ${({ theme }) => theme.mainFont};
    color: ${({ theme }) => theme.textMain};
    background: ${({ theme }) => theme.mainBackground};
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  h1 {
    font-size: 2rem !important;
  }
  h2 {
    font-size: 1.5rem !important;
  }
  h3 {
    font-size: 1.25rem !important;
  }
  h4 {
    font-size: 1rem !important;
  }
  h5 {
    font-size: .875rem !important;
  }
  h6 {
    font-size: .75rem !important;
  }

  
`;
