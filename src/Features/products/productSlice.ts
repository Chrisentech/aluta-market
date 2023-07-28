import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductProps } from "../../Interfaces";
import { RootState } from "../../store";

// Define the ProductState type
export interface ProductState {
  products: IProductProps[];
  product: IProductProps | null;
}

// Create the productSlice
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
  } as ProductState, // Set the initial state using the ProductState type
  reducers: {
    setProducts: (state, action: PayloadAction<IProductProps[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<IProductProps | null>) => {
      state.product = action.payload;
    },
  },
});

// Export the action creators
export const actions = productSlice.actions;

// Define the types for the selectors
export const selectProducts = (state: RootState): IProductProps[] =>
  state.products.products;
export const selectProduct = (state: RootState): IProductProps | null =>
  state.products.product;

// Export the reducer
export default productSlice.reducer;
