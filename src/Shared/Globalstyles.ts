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
    color:#fff !important;
    background:${AppColors.brandGray};
    cursor:not-allowed !important
  }
 input::disabled{
    cursor:not-allowed,
  }
      body.no-scroll {
    overflow: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  body.no-scroll::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera */
  }
`;

export default GlobalStyle;
