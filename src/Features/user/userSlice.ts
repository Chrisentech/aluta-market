import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import {
	ICartProps,
	IUserProps,
	IWishlistProductProps,
} from "../../Interfaces";
export interface UserState {
	me: IUserProps | null;
	cart: ICartProps | null;
	token: string | null;
	wishlists: IWishlistProductProps[] | null;
}

export const userSlice = createSlice({
	name: "user",
	initialState: {
		me: null,
		cart: null,
		token: null,
		wishlists: null,
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

export const isInWishlist =
	(productId: number) =>
	(state: RootState): boolean | undefined =>
		state.user.wishlists?.some((product) => product.productId === productId);

//export user reducer
export default userSlice.reducer;
