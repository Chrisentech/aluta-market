import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductProps } from "../../Interfaces";
import { RootState } from "../../store";

// Define the ProductState type
export interface ProductState {
	products: IProductProps[];
	myproducts: any;
	product: IProductProps | null;
	categories: any;
	category: any;
	searchSuggestions: string[];
}

// Create the productSlice
export const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		myproducts: [],
		categories: [],
		category: null,
		product: null,
		searchSuggestions: [],
	} as ProductState, // Set the initial state using the ProductState type
	reducers: {
		setProducts: (state, action: PayloadAction<IProductProps[]>) => {
			state.products = action.payload;
		},
		setMyProducts: (state, action: PayloadAction<any>) => {
			state.myproducts = action.payload;
		},
		setCategories: (state, action: PayloadAction<IProductProps[]>) => {
			state.categories = action.payload;
		},
		setCategory: (state, action: PayloadAction<any>) => {
			state.category = action.payload;
		},
		setProduct: (state, action: PayloadAction<IProductProps | null>) => {
			state.product = action.payload;
		},
		setSearchSuggestions: (state, action: PayloadAction<string[]>) => {
			state.searchSuggestions = action.payload;
		},
	},
});

// Export the action creators
export const actions = productSlice.actions;

// Define the types for the selectors
export const selectProducts = (state: RootState): IProductProps[] =>
	state.products.products;
export const selectMyProducts = (state: RootState): any =>
	state.products.myproducts;
export const selectCategories = (state: RootState) => state.products.categories;
export const selectCategory = (state: RootState) => state.products.category;
export const selectProduct = (state: RootState): IProductProps | null =>
	state.products.product;
export const searchSuggestions = (state: RootState): string[] =>
	state.products.searchSuggestions;

// Export the reducer
export default productSlice.reducer;
