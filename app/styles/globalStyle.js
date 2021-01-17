const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: ${({ theme }) => theme.mainFont};
    color: ${({ theme }) => theme.textMain};
    background: ${({ theme }) => theme.mainCanvas};
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
  }
  h5 {
    font-size: .875rem;
  }
  h6 {
    font-size: .75rem;
  }

  
`;
