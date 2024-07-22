import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICartProps, IUserProps, IHandledProductProps } from "../../Interfaces";

export interface UserState {
	me: any;
	cart: ICartProps | null;
	token: string | null;
	skynet: any;
	wishlists: IHandledProductProps[] | null;
	savedForLater: IHandledProductProps[] | null;
	recentlyViewed: IHandledProductProps[] | null;
}

const initialState: UserState = {
	me: null,
	cart: null,
	token: null,
	wishlists: null,
	savedForLater: null,
	recentlyViewed: null,
	skynet: {}, // Initialize skynet as an empty object
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getMe: (state, action: PayloadAction<IUserProps | null>) => {
			state.me = action.payload;
		},
		getMyCart: (state, action: PayloadAction<ICartProps | null>) => {
			state.cart = action.payload;
		},
		setToken: (state, { payload }) => {
			state.token = payload;
		},
		registerUser: (state, { payload }) => {
			state.me = payload;
		},
		setSkynetServiceVariations: (state, { payload }) => {
			state.skynet = { ...state.skynet, variations: payload };
		},
		addWishlist: (state, { payload }) => {
			state.wishlists = payload;
		},
		setDVA: (state, { payload }) => {
			state.me = { ...state.me, dva: payload };
		},
		logout: () => {
			// window.location.reload();
		},
	},
});

export const actions = userSlice.actions;

// Define and export selectors
export const fetchMe = (state: RootState): IUserProps | null => state.user.me;

export const fetchMyCart = (state: RootState): ICartProps | null =>
	state.user.cart;

export const fetchWishlist = (
	state: RootState
): IHandledProductProps[] | null => state.user.wishlists;

export const fetchServiceVaration = (state: RootState): any[] | null =>
	state.user.skynet?.variations;

export const fetchSavedForLater = (
	state: RootState
): IHandledProductProps[] | null => state.user.savedForLater;

export const fetchRecentlyViewed = (
	state: RootState
): IHandledProductProps[] | null => state.user.recentlyViewed;

// Export user reducer
export default userSlice.reducer;
