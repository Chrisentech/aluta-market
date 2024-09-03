import { gql } from "@apollo/client";

const PRODUCT_FIELDS = gql`
	fragment ProductFields on Product {
		id
		name
		price
		description
		discount
		image
		# type
		slug
		quantity
		status
		thumbnail
		store
		file
		always_available
		category
		subcategory
		review {
			id
			username
			image
			message
			rating
			product_id
		}
		# variant
	}
`;

const PRODUCT_REVIEW_FIELDS = gql`
	fragment ReviewFields on Review {
		username
		image
		message
		rating
		productId
	}
`;
const PAGINATION_DATA = gql`
	fragment paginationProps on ProductPaginationData {
		data {
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
			file
			always_available
			store
			category
			subcategory
			review {
				id
				username
				image
				message
				rating
				product_id
			}
		}
		current_page
		per_page
		total
	}
`;
const CATEGORY_FIELD = gql`
	fragment CategoryFields on Category {
		id
		name
		slug
		subcategories {
			name
			slug
		}
	}
`;

export const GET_CATEGORY = gql`
	${CATEGORY_FIELD}
	query Category($id: Int!) {
		Category(id: $id) {
			...CategoryFields
		}
	}
`;
export const GET_CATEGORIES = gql`
	${CATEGORY_FIELD}
	query {
		Categories {
			...CategoryFields
		}
	}
`;

export const GET_PRODUCTS = gql`
	${PAGINATION_DATA}
	query Products($store: String!, $limit: Int!, $offset: Int!) {
		Products(store: $store, limit: $limit, offset: $offset) {
			...paginationProps
		}
	}
`;

export const GET_PRODUCT = gql`
	${PRODUCT_FIELDS}
	query Product($productId: Int!) {
		Product(id: $productId) {
			...ProductFields
		}
	}
`;

export const CREATE_PRODUCT = gql`
	${PRODUCT_FIELDS}
	mutation CreateProduct($input: ProductInput!) {
		createProduct(input: $input) {
			...ProductFields
		}
	}
`;

export const UPDATE_PRODUCT = gql`
	${PRODUCT_FIELDS}
	mutation ($input: UpdateProductInput!) {
		updateProduct(input: $input) {
			...ProductFields
		}
	}
`;

export const DELETE_PRODUCT = gql`
	${PRODUCT_FIELDS}
	mutation deleteProduct($productId: Int!) {
		deleteProduct(productId: $productId) {
			...ProductFields
		}
	}
`;

export const ADD_REVIEW = gql`
	${PRODUCT_REVIEW_FIELDS}
	mutation addReview($input: ReviewInput!) {
		addReview(input: $input) {
			...ReviewFields
		}
	}
`;

export const GET_PRODUCT_REVIEWS = gql`
	${PRODUCT_REVIEW_FIELDS}
	query ProductReview($id: Int!) {
		ProductReview(id: $id) {
			...ReviewFields
		}
	}
`;

// export const GET_WISHLISTED_PRODUCTS = gql``;

// export const REMOVE_WISHLISTED_PRODUCT = gql``;

export const GET_SEARCHED_PRODUCTS = gql`
	${PRODUCT_FIELDS}
	query SearchProducts($query: String!) {
		searchProducts(query: $query) {
			...ProductFields
		}
	}
`;

// export const GET_RECOMMENDED_PRODUCT = gql``;
