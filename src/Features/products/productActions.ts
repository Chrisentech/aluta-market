import { useDispatch, useSelector } from "react-redux";
import { apolloClient } from "../../Services/graphql/apolloClient";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "../../Services/graphql/products";
import { selectProducts, actions, selectProduct } from "./productSlice";
import { IProductProps } from "../../Interfaces";

//https://www.youtube.com/watch?v=qmCAnvE_KAU

export default function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const product = useSelector(selectProduct);

  const getProducts = async (filter: IProductProps) => {
    const response = await apolloClient.query({
      query: GET_PRODUCTS,
      variables: { filter },
    });
    dispatch(actions.setProducts(response.data.products));
  };
  const getProduct = async (id: string) => {
    const response = await apolloClient.query({
      query: GET_PRODUCT,
      variables: { id },
    });
    dispatch(actions.setProduct(response.data.productById));
  };

  const createProduct = async (input: IProductProps) => {
    const response = await apolloClient.mutate({
      mutation: CREATE_PRODUCT,
      variables: { input },
    });
    if (response?.data?.createProduct) {
      dispatch(actions.setProducts([...products, response.data.createProduct]));
    }
  };

  const updateProduct = async (id: string, input: IProductProps) => {
    const response = await apolloClient.mutate({
      mutation: UPDATE_PRODUCT,
      variables: { id, input },
    });
    if (response?.data?.updateProduct) {
      const productsData = [...products];
      const index = productsData.findIndex((product: IProductProps) => {
        product.id === id;
      });
      productsData[index] = response?.data?.updateProduct;
      dispatch(actions.setProducts(productsData));
    }
  };
  const deleteProduct = async (id: string) => {
    await apolloClient.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id },
    });
    const productsData = products.filter((product: IProductProps) => {
      product.id !== id;
    });
    dispatch(actions.setProducts(productsData));
  };
  return {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    products,
    product,
  };
}
