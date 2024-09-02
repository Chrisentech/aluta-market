import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductProps } from "../../Interfaces";
import { RootState } from "../../store";

// Define the ProductState type
export interface ProductState {
	products: IProductProps[] | null;
	recommendedProducts: IProductProps[] | null;
	beveragesProducts: IProductProps[] | null;
	accomodationProducts: IProductProps[] | null;
	gadgetsProducts: IProductProps[] | null;
	skincareProducts: IProductProps[] | null;
	searchedProducts: IProductProps[] | null;
	myproducts: any;
	product: IProductProps | null;
	categories: any;
	category: any;
	searchSuggestions: string[];
	orders: any;
	catalogue: any;
}

// Create the productSlice
export const productSlice = createSlice({
	name: "products",
	initialState: {
		products: null,
		searchedProducts: null,
		recommendedProducts: null,
		beveragesProducts: null,
		accomodationProducts: null,
		skincareProducts: null,
		gadgetsProducts: null,
		myproducts: [],
		categories: null,
		category: null,
		product: null,
		searchSuggestions: [],
		orders: null,
		catalogue: null,
	} as ProductState, // Set the initial state using the ProductState type
	reducers: {
		setProducts: (state, action: PayloadAction<IProductProps[]>) => {
			state.products = action.payload;
		},
		setMyProducts: (state, action: PayloadAction<any>) => {
			state.myproducts = action.payload;
		},
		setGadgetsProducts: (state, action: PayloadAction<any>) => {
			state.gadgetsProducts = action.payload;
		},
		setRecommendedProducts: (state, action: PayloadAction<any>) => {
			state.recommendedProducts = action.payload;
		},
		setAccomodationProduct: (state, action: PayloadAction<any>) => {
			state.accomodationProducts = action.payload;
		},
		setBeveragesProducts: (state, action: PayloadAction<any>) => {
			state.beveragesProducts = action.payload;
		},
		setSkinCareProduct: (state, action: PayloadAction<any>) => {
			state.skincareProducts = action.payload;
		},
		setCategories: (state, action: PayloadAction<IProductProps[] | null>) => {
			state.categories = action.payload;
		},
		setCategory: (state, action: PayloadAction<any>) => {
			state.category = action.payload;
		},
		setProduct: (state, action: PayloadAction<IProductProps | null>) => {
			state.product = action.payload;
		},
		setSeacrhedProducts: (
			state,
			action: PayloadAction<IProductProps[] | null>
		) => {
			state.searchedProducts = action.payload;
		},
		setSearchSuggestions: (state, action: PayloadAction<string[]>) => {
			state.searchSuggestions = action.payload;
		},
		setPurchasedOrders: (state, action: PayloadAction<string[]>) => {
			state.orders = action.payload;
		},
		setCatalogue: (state, action: PayloadAction<any>) => {
			state.catalogue = action.payload;
		},
	},
});

// Export the action creators
export const actions = productSlice.actions;

// Define the types for the selectors
export const selectProducts = (state: RootState): IProductProps[] | null =>
	state.products.products;
export const selectMyProducts = (state: RootState): any =>
	state.products.myproducts.data;
export const selectBeveragesProducts = (state: RootState): any =>
	state.products.beveragesProducts;
export const selectAccomodationProducts = (state: RootState): any =>
	state.products.accomodationProducts;
export const selectGadgetProducts = (state: RootState): any =>
	state.products.gadgetsProducts;
export const selectSkinCareProducts = (state: RootState): any =>
	state.products.skincareProducts;
export const selectCategories = (state: RootState) => state.products.categories;
export const selectCategory = (state: RootState) => state.products.category;
export const selectProduct = (state: RootState): IProductProps | null =>
	state.products.product;
export const searchedProducts = (state: RootState): IProductProps[] | null =>
	state.products.searchedProducts;
export const searchSuggestions = (state: RootState): string[] =>
	state.products.searchSuggestions;
export const selectPurchasedOrders = (state: RootState): any => {
	return state.products.orders;
};

export const selectCatlogue = (state: RootState): any => {
	return state.products.catalogue;
};

// Export the reducer
export default productSlice.reducer;
