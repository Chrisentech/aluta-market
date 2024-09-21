import { useDispatch, useSelector } from "react-redux";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	IVerifyOTPProps,
	LoginFormValues,
	RegisterFormValues,
	UpdateUserFormValues,
} from "../../Interfaces";
import {
	CREATE_USER,
	LOGIN_USER,
	VERIFY_OTP,
	ADD_HANDLED_PRODUCTS,
	GET_HANDLED_PRODUCTS,
	MY_PROFILE,
	UPDATE_MY_PROFILE,
	CREATE_SKYNET,
	VERIFY_SMARTCARD,
	GET_VARIATION,
	INITIATE_PAYMENT,
	GET_MYDVA,
	REMOVE_HANDLED_PRODUCTS,
	CHECK_STORE_NAME,
	SEND_RESET_PASSWORD_LINK,
	VERIFY_RESET_PASSWORD_LINK, CONFIRM_PASSWORD,
	UPDATE_PASSWORD,
} from "../../Services/graphql/users";
import { actions, fetchMe, fetchWishlists } from "./userSlice";
import { setCookie } from "../../Shared/Utils/helperFunctions";
import { CREATE_CHATLIST, MY_CHATS, SEND_MESSAGE } from "../../Services/graphql/messages";

export default function useUsers() {
	const dispatch = useDispatch();
	const wishlists: any = useSelector(fetchWishlists);
	const me = useSelector(fetchMe)
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

	const updateUser = async (input: UpdateUserFormValues) => {

		const response = await apolloClient.mutate({
			mutation: UPDATE_MY_PROFILE,
			variables: { input },
		});
		if (response.data.updateUser) {
			const updatedUser: any = {
				...me,
				...input
			}
			dispatch(actions.getMe(updatedUser));
			return response.data.updateUser;
		}
	};

	const checkStoreName = async (input: String) => {
		const response = await apolloClient.mutate({
			mutation: CHECK_STORE_NAME,
			variables: { input },
		});
		return response.data.checkStoreName;
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
			return response.data.loginUser;
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

	const getDva = async (email: string) => {
		const response = await apolloClient.query({
			query: GET_MYDVA,
			variables: { email: email },
		});
		if (response.data.MYDVA) {
			dispatch(actions.setDVA(response.data.MYDVA));
		}
	};

	const getWishlist = async (userId: number) => {
		if (userId) {
			const response = await apolloClient.query({
				query: GET_HANDLED_PRODUCTS,
				variables: { user: userId, type: "wishlists" },
			});
			dispatch(actions.addWishlist(response.data.HandledProducts));

			return response.data;
		} else {
			let wishlist: any = window.sessionStorage.getItem("wishlist");
			wishlist ? JSON.parse(wishlist) : null;
			// console.log("wishlist from session Storage: ", wishlist);
			// dispatch(actions.getWishlist(wishlist));
		}
	};

	const addToWishlist = async (userId: number, productId: number) => {
		const response = await apolloClient.mutate({
			mutation: ADD_HANDLED_PRODUCTS,
			variables: { userId, productId, type: "wishlists" },
		});
		try {
			if (response) {
				dispatch(
					actions.addWishlist(wishlists.concat(response.data.addHandledProduct))
				);
			}
		} catch (error) {
			throw error;
		}
	};
	const removeFromWishlist = async (productId: number) => {
		const response = await apolloClient.mutate({
			mutation: REMOVE_HANDLED_PRODUCTS,
			variables: { prd: productId, type: "wishlists" },
		});

		if (response) {
			getWishlist(response.data.removeHandledProduct.userId);
			dispatch(
				actions.addWishlist(
					wishlists.filter(
						(wishlist: any) =>
							wishlist.productId != response.data.removeHandledProduct.productId
					)
				)
			);
		}
	};

	const createSkynet = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: CREATE_SKYNET,
			variables: { input },
		});
		console.log(response);
	};

	const verifySmartCard = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: VERIFY_SMARTCARD,
			variables: { input },
		});
		if (response.data.verifySmartCard) console.log(response);
	};

	const getServicesVariation = async (serviceID: string) => {
		const response = await apolloClient.query({
			query: GET_VARIATION,
			variables: { serviceID },
		});
		if (response.data.SubscriptionBundle) {
			dispatch(
				actions.setSkynetServiceVariations(response.data.SubscriptionBundle)
			);
		}
	};

	const initializePayment = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: INITIATE_PAYMENT,
			variables: { input },
		});
		if (response.data.initializePayment) {
			window.location.replace(response.data.initializePayment);
		}
	};

	const sendResetPasswordLink = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: SEND_RESET_PASSWORD_LINK,
			variables: { input },
		});

		console.log(response.data)

	};

	const verifyResetPasswordLink = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: VERIFY_RESET_PASSWORD_LINK,
			variables: { input },
		});
		console.log(response.data)

	};

	const updateMyPassword = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: UPDATE_PASSWORD,
			variables: { input },
		});
		console.log(response.data)

	};

	const createChat = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: CREATE_CHATLIST,
			variables: { input },
		});
		console.log(response.data)

	};

	const getChats = async (userID: String) => {
		const response = await apolloClient.query({
			query: MY_CHATS,
			variables: { userID },
		});
		if (response.data.Chats) {
			dispatch(
				actions.setChats(response.data.Chats)
			);
		} else {
			dispatch(
				actions.setChats([])
			);
		}
		return response.data.Chats
	}


	const sendMessage = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: SEND_MESSAGE,
			variables: { input },
		});
		console.log(response.data)

	};

	const confirmPassword = async (input: any) => {
		try {
			const res = await apolloClient.mutate({
				mutation: CONFIRM_PASSWORD,
				variables: { input },
			});
			console.log(res.data)
		} catch (e: any) {
			console.log(e)
			throw e.message
		}
	}

	return {
		createUser,
		loginUser,
		verifyOTP,
		getMe,
		addToWishlist,
		getWishlist,
		removeFromWishlist,
		updateUser,
		createSkynet,
		verifySmartCard,
		getServicesVariation,
		initializePayment,
		getDva,
		getChats,
		wishlists,
		createChat,
		checkStoreName,
		sendResetPasswordLink,
		verifyResetPasswordLink,
		updateMyPassword,
		sendMessage,
		confirmPassword
	};
}
