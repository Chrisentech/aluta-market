import { gql } from "@apollo/client";

const CART_FIELD = gql`
	fragment CartFields on Cart {
		total
		active
		user
		id
		items {
			product {
				id
				discount
				name
				price
				quantity
				thumbnail
				image
				store
			}
			quantity
		}
	}
`;

export const MODIFY_CART = gql`
	${CART_FIELD}
	mutation modifyCart($input: ModifyCartItemInput!) {
		modifyCart(input: $input) {
			...CartFields
		}
	}
`;

export const REMOVE_ALL_CARTS = gql`
	${CART_FIELD}
	mutation removeAllCart($cartID: Int!) {
		removeAllCart(cartID: $cartID) {
			...CartFields
		}
	}
`;

export const GET_MY_CART = gql`
	${CART_FIELD}
	query Cart($user: Int!) {
		Cart(user: $user) {
			...CartFields
		}
	}
`;
