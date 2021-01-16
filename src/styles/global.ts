import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Rowdies', cursive;
    font-size: 20px;
  }

  height, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button: {
    cursor: pointer;
  }
`;
