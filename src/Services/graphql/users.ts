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

const DVA_FIELDS = gql`
	fragment DvaFields on Account {
		customer {
			first_name
			last_name
		}
		bank {
			name
			slug
		}
		account_number
		account_name
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

const SKYNET_FIELDS = gql`
	fragment SkynetFields on Skynet {
		id
		user_id
		status
		request_id
		transaction_id
		type
		reciever
	}
`;

const SKYNET_SERVICE_VARIATION = gql`
	fragment VariationFields on SubscriptionBundle {
		serviceName
		serviceID
		convinienceFee
		variations {
			variationCode
			name
			variationAmount
			fixedPrice
		}
	}
`;

const SMARTCARD_VERIFICATION_RESPONSE_FIELDS = gql`
	fragment SmartcardVerificationResponseFields on SmartcardVerificationResponse {
		code
		content {
			customerName
			status
			dueDate
			customerNumber
			customerType
			currentBouquet
			currentBouquetCode
			renewalAmount
		}
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

export const ADD_HANDLED_PRODUCTS = gql`
	${HANDLED_PRODUCT_FIELDS}
	mutation addHandledProduct($userId: Int!, $productId: Int!, $type: String!) {
		addHandledProduct(userId: $userId, productId: $productId, type: $type) {
			...HandledProducFields
		}
	}
`;

export const REMOVE_HANDLED_PRODUCTS = gql`
	${HANDLED_PRODUCT_FIELDS}
	mutation removeHandledProduct($prd: Int!, $type: String) {
		removeHandledProduct(prd: $prd, type: $type) {
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

export const CREATE_SKYNET = gql`
	mutation createSkynet($input: SkynetInput) {
		createSkynet(input: $input) {
			String
		}
	}
`;

export const VERIFY_SMARTCARD = gql`
	${SMARTCARD_VERIFICATION_RESPONSE_FIELDS}
	mutation verifySmartCard($input: SmartCardInput!) {
		verifySmartCard(input: $input) {
			...SmartcardVerificationResponseFields
		}
	}
`;

export const GET_SKYNETS = gql`
	${SKYNET_FIELDS}
	query Skynets($id: String!) {
		Skynets(id: $id) {
			...SkynetFields
		}
	}
`;

export const GET_SKYNET = gql`
	${SKYNET_FIELDS}
	query Skynet($id: String!) {
		Skynet(id: $id) {
			...SkynetFields
		}
	}
`;

export const GET_VARIATION = gql`
	${SKYNET_SERVICE_VARIATION}
	query SubscriptionBundle($serviceID: String!) {
		SubscriptionBundle(serviceID: $serviceID) {
			...VariationFields
		}
	}
`;

export const INITIATE_PAYMENT = gql`
	mutation initializePayment($input: PaymentData!) {
		initializePayment(input: $input)
	}
`;

export const GET_MYDVA = gql`
	${DVA_FIELDS}
	query MYDVA($email: String!) {
		MYDVA(email: $email) {
			...DvaFields
		}
	}
`;

export const CHECK_STORE_NAME = gql`
	mutation checkStoreName($input: String!) {
		checkStoreName(input: $input)
	}
`;
