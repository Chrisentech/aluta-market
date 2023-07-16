// import App from "./App";
import { Router } from "./Routes";
import React from "react";
import GlobalStyle from "./Shared/Globalstyles";

const App : React.FC = ()=> {
    return (
      <>
      <GlobalStyle/>
        <Router />
      </>
    );
}
export default App