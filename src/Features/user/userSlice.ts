import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICartProps, IUserProps, IHandledProductProps } from "../../Interfaces";

export interface UserState {
	me: any;
	mode: string; // to toggle usertype state
	cart: ICartProps | null;
	token: string | null;
	skynet: any;
	messages: any;
	chats: any;
	wishlists: IHandledProductProps[] | null;
	savedForLater: IHandledProductProps[] | null;
	recentlyViewed: IHandledProductProps[] | null;
	pickUpStation: any;
	homeDelivery: any;
}

const initialState: UserState = {
	me: null,
	cart: null,
	token: null,
	mode: "",
	messages: null,
	chats: null,
	wishlists: null,
	savedForLater: null,
	recentlyViewed: null,
	skynet: {}, // Initialize skynet as an empty object
	pickUpStation: null,
	homeDelivery: null,
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
		setPickUpStation: (state, { payload }) => {
			state.pickUpStation = payload;
		},
		setHomeDelivery: (state, { payload }) => {
			state.homeDelivery = payload;
		},
		setMessages: (state, { payload }) => {
			state.messages = { ...state.messages, payload };
		},
		setChats: (state, { payload }) => {
			state.chats = { ...state.chats, payload };
		},
		setMyDownloads: (state, { payload }) => {
			state.me = { ...state.me, downloads: payload };
		},
		setMode: (state, { payload }) => {
			state.mode = payload;
		},
		logout: () => {
			// state = nul
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

export const fetchWishlists = (state: RootState): any[] | null =>
	state.user.wishlists;

export const fetchSavedForLater = (
	state: RootState
): IHandledProductProps[] | null => state.user.savedForLater;

export const fetchRecentlyViewed = (
	state: RootState
): IHandledProductProps[] | null => state.user.recentlyViewed;

export const selectPickupStation = (state: RootState) =>
	state.user.pickUpStation;
export const selectHomeDelivery = (state: RootState) => state.user.homeDelivery;
export const selectMyChats = (state: RootState) => state.user.chats;
export const selectMode = (state: RootState) => state.user.mode;

// Export user reducer
export default userSlice.reducer;
