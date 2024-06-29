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
} from "./productSlice";
import { IProductProps } from "../../Interfaces";

// https://www.youtube.com/watch?v=qmCAnvE_KAU

export default function useProducts() {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	const myproducts = useSelector(selectMyProducts);
	const product = useSelector(selectProduct);

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
		const response = await apolloClient.query({
			query: GET_SEARCHED_PRODUCTS,
			variables: { query },
		});
		if (response.data) {
			dispatch(actions.setSeacrhedProducts(response.data.searchProducts));
			console.log(response.data.searchProducts);
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

				console.log("Search Products Array:", searchProducts); // Debugging statement
				const namesArray = searchProducts.map((item: any) => item.name);

				console.log("Names Array:", namesArray); // Debugging statement
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
		const response = await apolloClient.mutate({
			mutation: CREATE_PRODUCT,
			variables: { input },
		});
		if (response?.data?.createProduct) {
			dispatch(actions.setProducts([...products, response.data.createProduct]));
		}
	};

	const updateProduct = async (input: any) => {
		const { store, ...rest } = input;
		try {
			// Execute the mutation and wait for it to complete
			await apolloClient.mutate({
				mutation: UPDATE_PRODUCT,
				variables: { input: rest },
			});

			// Now that the mutation has completed, call getProducts
			await getProducts({ store: input.store, limit: 1000, offset: 0 });
		} catch (error) {
			console.error("Error updating product:", error);
		}
	};
	const deleteProduct = async (id: number) => {
		await apolloClient.mutate({
			mutation: DELETE_PRODUCT,
			variables: { productId: id },
		});
		const productsData = myproducts.filter((product: IProductProps) => {
			product.id !== id;
		});
		dispatch(actions.setMyProducts(productsData));
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
	};
}
