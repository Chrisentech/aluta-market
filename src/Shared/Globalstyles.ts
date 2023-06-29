import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Global CSS styles */
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background:#0000001A;
    color:#002;
  }

  a{
    text-decoration:unset;
    color:inherit
  }
  li,ol{
    list-style:unset
  }
`;

export default GlobalStyle;
