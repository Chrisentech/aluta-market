// import App from "./App";
import { Router } from "./Routes";
import "./App.css";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./Shared/Globalstyles";
import { Games } from "./Shared/Games";
import { GoogleOAuthProvider } from "@react-oauth/google";
import useUsers from "./Features/user/userActions";
import { getCookie } from "./Shared/Utils/helperFunctions";
import { useDispatch } from "react-redux";
import { actions } from "./Features/user/userSlice";
import useAuthentication from "./Shared/Hooks/useAuth";

const App: React.FC = () => {
	const [isOnline, setIsOnline] = useState(true);
	const { isAuthenticated } = useAuthentication();
	const { getMe } = useUsers();
	const dispatch = useDispatch();
	useEffect(() => {
		const handleOnlineStatus = () => {
			setIsOnline(true);
		};

		const handleOfflineStatus = () => {
			setIsOnline(false);
		};

		window.addEventListener("online", handleOnlineStatus);
		window.addEventListener("offline", handleOfflineStatus);
		if (isAuthenticated) {
			getMe(parseInt(getCookie("user_id") || "0"));

			dispatch(actions.setToken(getCookie("access_token")));
		}
		return () => {
			window.removeEventListener("online", handleOnlineStatus);
			window.removeEventListener("offline", handleOfflineStatus);
		};
	}, [isOnline]);

	return (
		<>
			<GoogleOAuthProvider
				clientId={import.meta.env.REACT_APP_GOOGLE_API_TOKEN as string}
			>
				<GlobalStyle />
				{true ? <Router /> : <Games />}
			</GoogleOAuthProvider>
		</>
	);
};
export default App;
