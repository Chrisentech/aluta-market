import { gql } from "@apollo/client";

const STORE_FIELDS = gql`
	fragment StoreFields on Store {
		id
		link
		name
		user
		description
		followers {
			follower_image
			follower_name
		}
		has_physical_address
		wallet
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
			followers {
				follower_name
				follower_id
				follower_image
			}
			order {
				customer
				customer_email
				price
				status
				date
				store_id
			}
			has_physical_address
			wallet
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

// export const UPDATE_MY_STORE = gql``

// export const CONFIGURE_MY_STORE = gql``; //This would be used to either disable/delete store

// export const GET_REVIEWS = gql`` //might be removed
