import { gql } from "@apollo/client";

const STORE_FIELDS = gql`
	fragment StoreFields on Store {
		id
		link
		name
		user
		description
		thumbnail
		phone
		background
		address
		status
		has_physical_address
		wallet
		followers {
			follower_id
			follower_image
			follower_name
			store_id
		}
		product {
			id
			name
			price
			description
			discount
			image
			slug
			quantity
			status
			thumbnail
			store
			category
			subcategory
		}
		orders {
			store_id
			status
			customer {
				name
				phone
				address
			}
			uuid
			createdAt
			product {
				name
				thumbnail
				id
				quantity
				price
			}
		}
	}
`;
const PAGINATION_DATA = gql`
	fragment paginationProps on StorePaginationData {
		data {
			id
			link
			name
			user
			description
			thumbnail
			phone
			background
			address
			status
			has_physical_address
			wallet
			followers {
				follower_id
				follower_image
				follower_name
				store_id
			}
			product {
				id
				name
				price
				description
				discount
				image
				slug
				quantity
				status
				thumbnail
				store
				category
				subcategory
			}
			orders {
				store_id

				status
				customer {
					name
					phone
					address
				}
				uuid
				createdAt
				product {
					name
					thumbnail
					id
					quantity
					price
				}
			}
		}
		current_page
		per_page
		total
	}
`;

export const CREATE_NEW_STORE = gql`
	${STORE_FIELDS}
	mutation createStore($input: StoreInput!) {
		createStore(input: $input) {
			...StoreFields
		}
	}
`;

export const GET_MY_STORES = gql`
	${PAGINATION_DATA}
	query Stores($user: Int!, $limit: Int!, $offset: Int!) {
		Stores(user: $user, limit: $limit, offset: $offset) {
			...paginationProps
		}
	}
`;

export const GET_MY_STORE = gql`
	${STORE_FIELDS}
	query Store($id: Int!) {
		Store(id: $id) {
			...StoreFields
		}
	}
`;

export const GET_MY_STORE_BY_NAME = gql`
	${STORE_FIELDS}
	query StoreByName($name: String!) {
		StoreByName(name: $name) {
			...StoreFields
		}
	}
`;

export const UPDATE_MY_STORE = gql`
	${STORE_FIELDS}
	mutation updateStore($input: UpdateStoreInput) {
		updateStore(input: $input) {
			...StoreFields
		}
	}
`;

export const DELETE_MY_STORE = gql`
	${STORE_FIELDS}
	mutation deleteStore($storeId: Int!) {
		deleteStore(input: $input) {
			...StoreFields
		}
	}
`;

// export const CONFIGURE_MY_STORE = gql``; //This would be used to either disable/delete store

// export const GET_REVIEWS = gql`` //might be removed
