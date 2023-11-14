import { useDispatch, useSelector } from "react-redux";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
	CREATE_PRODUCT,
	GET_CATEGORIES,
	GET_CATEGORY,
	// CREATE_PRODUCT,
	// DELETE_PRODUCT,
	GET_PRODUCT, GET_SEARCHED_PRODUCTS,
	// GET_PRODUCTS,
	// UPDATE_PRODUCT,
} from "../../Services/graphql/products";
import { selectProducts, actions, selectProduct } from "./productSlice";
import { IProductProps } from "../../Interfaces";

// https://www.youtube.com/watch?v=qmCAnvE_KAU

export default function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const product = useSelector(selectProduct);

  // const getProducts = async (filter: IProductProps) => {
  //   const response = await apolloClient.query({
  //     query: GET_PRODUCTS,
  //     variables: { filter },
  //   });
  //   dispatch(actions.setProducts(response.data.products));
  // };
  const getProduct = async (productId: string | undefined) => {
    const response = await apolloClient.query({
      query: GET_PRODUCT,
      variables: { productId }  ,
    });
    dispatch(actions.setProduct(response.data.Product));
  };

  const getSearchProducts = async (query: string) => {
    const response = await apolloClient.query({
      query: GET_SEARCHED_PRODUCTS,
      variables: { query },
    })
    if (response.data) {
      // dispatch(actions.setProducts(response.data.searchProducts));
      console.log(response.data.searchProducts)
    }
  }

  const getSearchSuggestions = async (query: string) => {
    const response = await apolloClient.query({
      query: GET_SEARCHED_PRODUCTS,
      variables: { query },
    }) 
    if (response?.data?.searchProducts) {
      const flattenedArray = Object.values(response.data.searchProducts).flatMap((item: any) => item.name);
      dispatch(actions.setSearchSuggestions(flattenedArray))
    } else [
      dispatch(actions.setSearchSuggestions([]))
    ]
  }

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

  // const updateProduct = async (id: string, input: IProductProps) => {
  //   const response = await apolloClient.mutate({
  //     mutation: UPDATE_PRODUCT,
  //     variables: { id, input },
  //   });
  //   if (response?.data?.updateProduct) {
  //     const productsData = [...products];
  //     const index = productsData.findIndex((product: IProductProps) => {
  //       product.id === id;
  //     });
  //     productsData[index] = response?.data?.updateProduct;
  //     dispatch(actions.setProducts(productsData));
  //   }
  // };
  // const deleteProduct = async (id: string) => {
  //   await apolloClient.mutate({
  //     mutation: DELETE_PRODUCT,
  //     variables: { id },
  //   });
  //   const productsData = products.filter((product: IProductProps) => {
  //     product.id !== id;
  //   });
  //   dispatch(actions.setProducts(productsData));
  // };
  return {
    // getProducts,
    getProduct,
    getSearchProducts,
    getSearchSuggestions,
    getCategories,
    // createProduct,
    // updateProduct,
    // deleteProduct,
    products,
    product,
  };
}
