

// import App from "./App";
import { Router } from "./Routes";
import React from "react";
import GlobalStyle from "./Shared/Globalstyles";

const app : React.FC = ()=> {
    return (
      <>
      <GlobalStyle/>
        <Router />
      </>
    );
}
export default app