// import App from "./App";
import { Router } from "./Routes";
import "./App.css";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./Shared/Globalstyles";
import { Games } from "./Shared/Games";

const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(true);
    };

    const handleOfflineStatus = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      {isOnline ? <Router /> : <Games />}
    </>
  );
};
export default App;
