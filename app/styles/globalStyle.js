const { createGlobalStyle } = require('styled-components');

export default createGlobalStyle`
  * {
    box-sizing: border-box !important;
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
    font-weight: 400;
    color: ${({ theme }) => theme.textMain};
    background: ${({ theme }) => theme.mainBackground};
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    transition: background 0.5s ease-in-out;
    transition: color 0.5s ease-in-out;
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
  p {
    font-size: 1em;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.textMain};

  }
  
`;
