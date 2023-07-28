import { createGlobalStyle } from "styled-components";
import { AppColors } from "./Constants";

const GlobalStyle = createGlobalStyle`
  /* Global CSS styles */
  *{margin: 0;
    padding: 0;
    // box-sizing:border-box
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background:#fff;
    color:#002;
    transition:0.6s ease;
    scroll:smooth
  }
  a{
    text-decoration:unset;
    color:inherit
  }
  li,ol{
    list-style:none !important
  }
  button:disabled{
    background:${AppColors.brandGray};
    cursor:not-allowed
  }
`;

export default GlobalStyle;
