// loadingSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface LoadingState {
	isLoading: boolean;
}

const initialState: LoadingState = {
	isLoading: false,
};

export const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {
		setLoading: (state) => {
			state.isLoading = true;
		},
		setNotLoading: (state) => {
			state.isLoading = false;
		},
	},
});

export const { setLoading,setNotLoading } = loadingSlice.actions;
export const selectLoadingState = (state: RootState): boolean =>
	state.loading.isLoading;

export default loadingSlice.reducer;
