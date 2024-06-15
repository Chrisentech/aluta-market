import { gql } from "@apollo/client";

const USER_FIELDS = gql`
	fragment UserFields on User {
		id
		fullname
		email
		campus
		password
		avatar
		password
		phone
		usertype
		stores {
			link
			name
			user
			description
			address
			has_physical_address
			wallet
			phone
		}
	}
`;

const WISHLIST_FIELDS = gql`
	fragment WishlistFields on WishListedProducts {
		productDiscount
		productId
		productName
		productPrice
		productQuantity
		productStatus
		productThumbnail
		userId
	}
`;

export const CREATE_USER = gql`
	# ${USER_FIELDS}
	mutation createUser($input: NewUser!) {
		createUser(input: $input) {
			...UserFields
		}
	}
`;

export const VERIFY_OTP = gql`
	${USER_FIELDS}
	mutation ($input: NewVerifyOTP!) {
		createVerifyOTP(input: $input) {
			...UserFields
		}
	}
`;

export const LOGIN_USER = gql`
	mutation LoginUser($input: LoginReq!) {
		loginUser(input: $input) {
			access_token
			id
			refresh_token
		}
	}
`;

export const MY_PROFILE = gql`
	${USER_FIELDS}
	query ($id: ID!) {
		User(id: $id) {
			...UserFields
		}
	}
`;

// export const SET_TWOFA = gql``;

export const ADD_TO_WISHLIST = gql`
	${WISHLIST_FIELDS}
	mutation AddWishListedProduct($userId: Int!, $productId: Int!) {
		addWishListedProduct(userId: $userId, productId: $productId) {
			...WishlistFields
		}
	}
`;

export const UPDATE_MY_PROFILE = gql`
	${USER_FIELDS}
	mutation updateUser($input: UpdateUserInput!) {
		updateUser(input: $input) {
			...UserFields
		}
	}
`;

export const MODIFY_CART = gql`
	mutation ModifyCart($input: ModifyCartItemInput!) {
		modifyCart(input: $input) {
			active
		}
	}
`;

export const GET_MY_CART = gql`
	query ($id: Int!) {
		Cart(user: $id) {
			...Cart
		}
	}
`;

export const GET_WISHLIST = gql`
	${WISHLIST_FIELDS}
	query WishListedProducts($user: Int!) {
		WishListedProducts(user: $user) {
			...WishlistFields
		}
	}
`;

// export const ADD_TO_CART = gql``;

// export const REMOVE_FROM_CART = gql``;

// export const MAKE_PAYMENT = gql``;

// export const ADD_REVIEW = gql``;

// export const REPORT_STORE = gql``; //to be implemented
