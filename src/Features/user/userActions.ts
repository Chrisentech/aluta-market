import { useDispatch } from "react-redux";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	IVerifyOTPProps,
	LoginFormValues,
	ModifyCartItemInput,
	RegisterFormValues,
} from "../../Interfaces";
import {
	CREATE_USER,
	GET_MY_CART,
	LOGIN_USER,
	VERIFY_OTP,
	ADD_TO_WISHLIST,
	GET_WISHLIST,
	MODIFY_CART,
	MY_PROFILE,
} from "../../Services/graphql/users";
import { actions } from "./userSlice";
import { setCookie } from "../../Shared/Utils/helperFunctions";

export default function useUsers() {
	const dispatch = useDispatch();
	const createUser = async (input: RegisterFormValues) => {
		const response = await apolloClient.mutate({
			mutation: CREATE_USER,
			variables: { input },
		});
		if (response.data.createUser) {
			dispatch(actions.registerUser(response.data.createUser));
		}
	};

	const verifyOTP = async (input: IVerifyOTPProps) => {
		const response = await apolloClient.mutate({
			mutation: VERIFY_OTP,
			variables: { input },
		});
		if (response.data.verifyOTP)
			dispatch(actions.registerUser(response.data.verifyOTP));
	};

	const loginUser = async (input: LoginFormValues) => {
		const response = await apolloClient.mutate({
			mutation: LOGIN_USER,
			variables: { input },
		});
		if (response.data.loginUser) {
			dispatch(actions.setToken(response?.data?.loginUser?.access_token));
			setCookie("access_token", response?.data?.access_token, 7);
			await getMe(response.data.loginUser.id);
			// await getWishlist(response.data.loginUser.id);
			return response.data.loginUser;
		}
	};

	const modifyCart = async (input: ModifyCartItemInput) => {
		const response = await apolloClient.mutate({
			mutation: MODIFY_CART,
			variables: { input },
		});
		if (response.data) {
			return response.data;
		}
	};
	const getMe = async (userId: number) => {
		const response = await apolloClient.query({
			query: MY_PROFILE,
			variables: { id: userId },
		});
		if (response.data.User) {
			const { password, access_token, refresh_token, __typename, ...rest } =
				response?.data?.User;

			dispatch(actions.getMe(rest));
			return response.data.User;
		}
	};
	const getCart = async (userId: number) => {
		if (userId) {
			const response = await apolloClient.query({
				query: GET_MY_CART,
				variables: { user: userId },
			});
			console.log(response);
		} else {
			let cart: any = window.sessionStorage.getItem("cart");
			cart ? JSON.parse(cart) : null;
			console.log("Cart from session Storage: ", cart);
			dispatch(actions.getMyCart(cart));
		}
	};

	const getWishlist = async (userId: number) => {
		if (userId) {
			const response = await apolloClient.query({
				query: GET_WISHLIST,
				variables: { user: userId },
			});
			dispatch(actions.addWishlist(response.data));
			return response.data;
		} else {
			let wishlist: any = window.sessionStorage.getItem("wishlist");
			wishlist ? JSON.parse(wishlist) : null;
			console.log("wishlist from session Storage: ", wishlist);
			// dispatch(actions.getWishlist(wishlist));
		}
	};

	const addToWishlist = async (userId: number, productId: number) => {
		const response = await apolloClient.mutate({
			mutation: ADD_TO_WISHLIST,
			variables: { userId, productId },
		});
		if (response) {
			getWishlist(userId);
		}
		console.log(response);
	};

	return {
		createUser,
		loginUser,
		verifyOTP,
		getCart,
		getMe,
		addToWishlist,
		getWishlist,
		modifyCart,
	};
}
