import { useDispatch, useSelector } from "react-redux";
import { actions, selectCart } from "./cartSlice";
import { ICartProps } from "../../Interfaces";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	GET_MY_CART,
	INITIATE_PAYEMNT,
	MODIFY_CART,
} from "../../Services/graphql/cart";
import { REMOVE_ALL_CARTS } from "../../Services/graphql/cart";
import { closeModal } from "../modal/modalSlice";

export default function useCart() {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	// add to/remove from a cart
	const modifyCart = async (input: ICartProps | any) => {
		const response = await apolloClient.mutate({
			mutation: MODIFY_CART,
			variables: { input },
		});
		try {
			if (response?.data?.modifyCart) {
				dispatch(actions.setCart(response.data.modifyCart));
			}
		} catch (error) {
			throw error;
		}
	};

	//remove all cart

	const removeAllCart = async (id: Number) => {
		const response = await apolloClient.mutate({
			mutation: REMOVE_ALL_CARTS,
			variables: { cartID: id },
		});
		if (response?.data?.removeAllCart) {
			dispatch(actions.setCart(response?.data?.removeAllCart));
		}
	};

	//getmyCart
	const getmyCart = async (id: Number) => {
		if (id) {
			const response: any = await apolloClient.query({
				query: GET_MY_CART,
				variables: { user: id },
			});
			dispatch(actions.setCart(response?.data?.Cart));
			console.log("Cart from  backend: ", response?.data?.Cart);
		} else {
			let cart: any = window.sessionStorage.getItem("cart");
			cart ? JSON.parse(cart) : null;
			console.log("Cart from session Storage: ", cart);
			dispatch(actions.setCart(cart));
		}
	};

	const initializePayment = async (input: any) => {
		const response = await apolloClient.mutate({
			mutation: INITIATE_PAYEMNT,
			variables: { input },
		});
		if (response.data.initializePayment) {
			window.location.replace(response.data.initializePayment);
			dispatch(closeModal("payment"));
		}
	};
	return {
		cart,
		modifyCart,
		removeAllCart,
		getmyCart,
		initializePayment,
	};
}
