import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    background-color: #2F2E41;
    font-size: 12px;
  }
	
  html, body, #root{
    height: 100%;
  }

  button{
    border: 0;
    outline: 0;
  }

  input {
    outline: 0;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyles;