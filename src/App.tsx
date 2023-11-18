// import App from "./App";
import { Router } from "./Routes";
import "./App.css";
import React, { useState, useEffect } from "react";
import GlobalStyle from "./Shared/Globalstyles";
import { Games } from "./Shared/Games";
import { GoogleOAuthProvider } from "@react-oauth/google";
import useUsers from "./Features/user/userActions";
import { getCookie } from "./Shared/Utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { actions, fetchMe } from "./Features/user/userSlice";
import useAuthentication from "./Shared/Hooks/useAuth";
import useStore from "./Features/store/storeAction";

const App: React.FC = () => {
	const [isOnline, setIsOnline] = useState(true);
	const { isAuthenticated } = useAuthentication();
	const { getMe } = useUsers();
	const user = useSelector(fetchMe);
	
	const { getMyStores } = useStore();
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

		return () => {
			if (isAuthenticated) {
				getMe(parseInt(getCookie("user_id") || "0"));
				dispatch(actions.setToken(getCookie("access_token")));
			}
			window.removeEventListener("online", handleOnlineStatus);
			window.removeEventListener("offline", handleOfflineStatus);
		};
	}, []);
	useEffect(() => {
		user?.usertype === "seller" &&
			getMyStores({user:user?.id,limit:100,offset:0});
			
	}, [user]);

	return (
		<>
			<GoogleOAuthProvider
				clientId={import.meta.env.REACT_APP_GOOGLE_API_TOKEN as string}
			>
				<GlobalStyle />
				{isOnline ? <Router /> : <Games />}
			</GoogleOAuthProvider>
		</>
	);
};
export default App;
