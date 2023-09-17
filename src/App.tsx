// import App from "./App";
import { Router } from "./Routes";
import "./App.css";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./Shared/Globalstyles";
import { Games } from "./Shared/Games";
import { GoogleOAuthProvider } from '@react-oauth/google';

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
    <GoogleOAuthProvider clientId={import.meta.env.REACT_APP_GOOGLE_API_TOKEN as string}>
        <GlobalStyle />
        {isOnline ? <Router /> : <Games />}
    </GoogleOAuthProvider>
    </>
  );
};
export default App;
