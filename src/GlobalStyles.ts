import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #2F2E41;
  }
	
  html, body, #root{
    height: 100%;
  }

  *, button, input{
    border: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyles;