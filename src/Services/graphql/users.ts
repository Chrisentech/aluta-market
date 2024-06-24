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

const HANDLED_PRODUCT_FIELDS = gql`
	fragment HandledProducFields on HandledProducts {
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

export const ADD_HANDLED_PRODUCTS = gql`
	${HANDLED_PRODUCT_FIELDS}
	mutation addHandledProduct($userId: Int!, $productId: Int!, $type: String!) {
		addHandledProduct(userId: $userId, productId: $productId, type: $type) {
			...HandledProducFields
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

export const GET_HANDLED_PRODUCTS = gql`
	${HANDLED_PRODUCT_FIELDS}
	query HandledProducts($user: Int!, $type: String!) {
		HandledProducts(user: $user, type: $type) {
			...HandledProducFields
		}
	}
`;

// export const ADD_TO_CART = gql``;

// export const REMOVE_FROM_CART = gql``;

// export const MAKE_PAYMENT = gql``;

// export const ADD_REVIEW = gql``;

// export const REPORT_STORE = gql``; //to be implemented
