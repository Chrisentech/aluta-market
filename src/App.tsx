

// import App from "./App";
import { Router } from "./Routes";
import React from "react";
import GlobalStyle from "./Shared/Globalstyles";
import { create_UUID,numberWithCommas } from "./Shared/Utils/helperFunctions";
const orderId = create_UUID()
console.log(orderId)
console.log(numberWithCommas(1000000000000))
const app : React.FC = ()=> {
    return (
      <>
      <GlobalStyle/>
        <Router />
      </>
    );
}
export default app