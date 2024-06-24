import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICartProps, IUserProps, IHandledProductProps } from "../../Interfaces";
export interface UserState {
	me: IUserProps | null;
	cart: ICartProps | null;
	token: string | null;
	wishlists: IHandledProductProps[] | null;
	savedForLater: IHandledProductProps[] | null;
	recentlyViewed: IHandledProductProps[] | null;
}

export const userSlice = createSlice({
	name: "user",
	initialState: {
		me: null,
		cart: null,
		token: null,
		wishlists: null,
		savedForLater: null,
		recentlyViewed: null,
	} as UserState,
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
		addWishlist: (state, { payload }) => {
			state.wishlists = payload;
		},
		logout: (state) => {
			state.me = null;
			state.cart = null;
			state.token = null;
			state.wishlists = null;
			state.recentlyViewed = null;
			state.savedForLater = null;
		},
	},
});

export const actions = userSlice.actions;

//Define and export action for selectors
export const fetchMe = (state: RootState): IUserProps | null => state.user.me;

export const fetchMyCart = (state: RootState): ICartProps | null =>
	state.user.cart;

export const fetchWishlist = (state: RootState): any[] | null =>
	state.user.wishlists;

export const fetchSavedForLater = (state: RootState): any[] | null =>
	state.user.savedForLater;
export const fetchRecentlyViewed = (state: RootState): any[] | null =>
	state.user.recentlyViewed;

//export user reducer
export default userSlice.reducer;
