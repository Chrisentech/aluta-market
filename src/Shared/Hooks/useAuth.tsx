import { useSelector } from "react-redux";
import { isTokenExpired } from "../Utils/helperFunctions";

function useAuthentication() {
	// Get the access token from Redux state

	const tokenFromRedux = useSelector(
		(state: any) => state?.user?.user?.access_token
	);

	// Function to read cookies
	function getCookie(name: string) {
		const value = `; ${document.cookie}`;
		const parts: any = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(";").shift();
		return null;
	}

	// Read the 'access_token' cookie
	const accessToken = getCookie("access_token");

	// Set the token using the Redux state or cookie value
	const token = tokenFromRedux || accessToken;
	const isNotValidToken = isTokenExpired(token);

	// Check if the user is authenticated
	const isAuthenticated = !!token && !isNotValidToken;

	// const isAuthenticated = true;

	// Optionally return both token and isAuthenticated as an object
	return { isAuthenticated };
}

export default useAuthentication;
