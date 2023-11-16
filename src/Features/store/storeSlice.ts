import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define the ProductState type
export interface StoreState {
	maintenanceMode: boolean;
	stores: any[];
	store: any;
}

// Create the productSlice
export const storeSlice = createSlice({
	name: "store",
	initialState: {
		maintenanceMode: false,
		store: null,
		stores: [],
	} as StoreState, // Set the initial state using the ProductState type
	reducers: {
		setMaintenanceMode: (state, action: PayloadAction<boolean>) => {
			state.maintenanceMode = action.payload;
		},
		setStores: (state, action: PayloadAction<any[]>) => {
			state.stores = action.payload;
		},
		setStore: (state, action: PayloadAction<any>) => {
			state.store = action.payload;
		},
	},
});

// Export the action creators
export const actions = storeSlice.actions;

// Define the types for the selectors
export const selectMaintenanceMode = (state: RootState): boolean =>
	state.store.maintenanceMode;

export const selectStores = (state: RootState): any[] => state.store.stores;

export const selectStore = (state: RootState): any => state.store.store;

// Export the reducer
export default storeSlice.reducer;
