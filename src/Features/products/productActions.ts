import { useDispatch, useSelector } from "react-redux";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	CREATE_PRODUCT,
	GET_CATEGORIES,
	GET_CATEGORY,
	// CREATE_PRODUCT,
	DELETE_PRODUCT,
	GET_SEARCHED_PRODUCTS,
	GET_PRODUCT,
	GET_PRODUCTS,
	UPDATE_PRODUCT,
	// UPDATE_PRODUCT,
} from "../../Services/graphql/products";
import {
	selectProducts,
	actions,
	selectProduct,
	selectMyProducts,
	selectPurchasedOrders,
} from "./productSlice";
import { IProductProps } from "../../Interfaces";
import { PURCHASED_ORDER } from "../../Services/graphql/store";

// https://www.youtube.com/watch?v=qmCAnvE_KAU

export default function useProducts() {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	const myproducts = useSelector(selectMyProducts);
	const product = useSelector(selectProduct);
	const purchasedOrders = useSelector(selectPurchasedOrders);

	const getProducts = async (filter?: any) => {
		const response = await apolloClient.query({
			query: GET_PRODUCTS,
			variables: {
				store: filter.store,
				limit: filter.limit,
				offset: filter.offset,
			},
		});
		const { __typename, ...rest } = response.data.Products;
		filter.store && !filter.type
			? dispatch(actions.setMyProducts(rest))
			: dispatch(actions.setProducts(response.data.Products.data));
	};
	const getProduct = async (productId: string | undefined) => {
		dispatch(actions.setProduct(null));

		const response = await apolloClient.query({
			query: GET_PRODUCT,
			variables: { productId },
		});
		dispatch(actions.setProduct(response.data.Product));
	};

	const getSearchProducts = async (query: string) => {
		dispatch(actions.setSeacrhedProducts(null));

		const response = await apolloClient.query({
			query: GET_SEARCHED_PRODUCTS,
			variables: { query },
		});
		if (response.data.searchProducts) {
			dispatch(actions.setSeacrhedProducts(response.data.searchProducts));
		} else {
			dispatch(actions.setSeacrhedProducts([]));
		}
	};

	const getBeveragesProducts = async () => {
		const response = await apolloClient.query({
			query: GET_SEARCHED_PRODUCTS,
			variables: { query: "beverages" },
		});
		if (response.data.searchProducts) {
			dispatch(actions.setBeveragesProducts(response.data.searchProducts));
		}
	};
	const getAccomodationProducts = async () => {
		const response = await apolloClient.query({
			query: GET_SEARCHED_PRODUCTS,
			variables: { query: "accomodation" },
		});
		if (response.data.searchProducts) {
			dispatch(actions.setAccomodationProduct(response.data.searchProducts));
		}
	};
	const getGadgetsProducts = async () => {
		const response = await apolloClient.query({
			query: GET_SEARCHED_PRODUCTS,
			variables: { query: "gadget" },
		});
		if (response.data.searchProducts) {
			dispatch(actions.setGadgetsProducts(response.data.searchProducts));
		}
	};
	const getSkincareProducts = async () => {
		const response = await apolloClient.query({
			query: GET_SEARCHED_PRODUCTS,
			variables: { query: "skincare" },
		});
		if (response.data.searchProducts) {
			dispatch(actions.setSkinCareProduct(response.data.searchProducts));
		}
	};

	const getSearchSuggestions = async (query: string) => {
		try {
			const response = await apolloClient.query({
				query: GET_SEARCHED_PRODUCTS,
				variables: { query },
			});
			if (response?.data?.searchProducts) {
				const searchProducts = response.data.searchProducts;

				// console.log("Search Products Array:", searchProducts); // Debugging statement
				const namesArray = searchProducts.map((item: any) => item.name);

				// console.log("Names Array:", namesArray); // Debugging statement
				dispatch(actions.setSearchSuggestions(namesArray));
			} else {
				dispatch(actions.setSearchSuggestions([]));
			}
		} catch (error) {
			console.error("Error fetching search suggestions:", error);
			dispatch(actions.setSearchSuggestions([]));
		}
	};

	const getCategories = async () => {
		const response = await apolloClient.query({
			query: GET_CATEGORIES,
			// variables: {},
		});
		dispatch(actions.setCategories(response.data.Categories));
	};
	const getCategory = async (categoryId: number | undefined) => {
		const response = await apolloClient.query({
			query: GET_CATEGORY,
			variables: { id: categoryId },
		});
		dispatch(actions.setCategory(response.data.Category));
	};

	const createProduct = async (input: IProductProps | any) => {
		try {
			const response = await apolloClient.mutate({
				mutation: CREATE_PRODUCT,
				variables: { input },
			});

			// Check if the product was created successfully
			if (response?.data?.createProduct) {

				// Ensure currentProducts is fetched correctly from Redux store
				const currentProducts = myproducts ?? [];

				// Dispatch action to update products in the store
				dispatch(
					actions.setMyProducts([
						...currentProducts,
						response.data.createProduct,
					])
				);
			}
		} catch (error) {
			console.error("Error creating product:", error);
			// Optionally handle error, e.g., dispatch an error action or show a notification
		}
	};

	const updateProduct = async (input: any) => {
		const { store, ...rest } = input;  // Destructure input to separate the store, id, and other fields

		try {
			// Execute the mutation and wait for it to complete
			await apolloClient.mutate({
				mutation: UPDATE_PRODUCT,
				variables: { input: rest },
			});


			// Find the product with the matching ID and update its fields
			const updatedProducts = myproducts.map((product: any) => {
				if (product.id === rest.id) {
					// Spread the existing product and override the matching fields with `rest`
					return { ...product, ...rest };
				}
				return product; // Return product unchanged if id doesn't match
			});

			// Optionally, you could update your store with the new array of products
			dispatch(actions.setMyProducts({ data: updatedProducts }));

			console.log("Product updated successfully and products list updated.");
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};
	const deleteProduct = async (id: number) => {
		const res = await apolloClient.mutate({
			mutation: DELETE_PRODUCT,
			variables: { productId: id },
		});

		// Ensure the correct return from the filter function
		const productsData = myproducts.filter((product: IProductProps) => {
			return product.name !== res.data.deleteProduct.name;
		});

		dispatch(actions.setMyProducts(productsData));
	};


	const getPurchasedData = async (userId: number) => {
		try {
			const response = await apolloClient.query({
				query: PURCHASED_ORDER,
				variables: { user: userId },
			});
			dispatch(actions.setPurchasedOrders(response.data.PurchasedOrder));
		} catch (error) {
			console.error("Error getting purchased order:", error);
			throw error;
		}
	};
	return {
		getProducts,
		getProduct,
		createProduct,
		getCategories,
		getCategory,
		getSearchProducts,
		getSearchSuggestions,
		updateProduct,
		deleteProduct,
		products,
		product,
		myproducts,
		getBeveragesProducts,
		getAccomodationProducts,
		getSkincareProducts,
		getGadgetsProducts,
		getPurchasedData,
		purchasedOrders,
	};
}
