import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProps } from "../../Interfaces";
import { RootState } from "../../store";

export interface CartState {
	cart: ICartProps | null;
}

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: { empty: false },
	} as CartState,
	reducers: {
		setCart: (state, action: PayloadAction<ICartProps | null>) => {
			state.cart = action.payload;
		},
		clearCart: (state) => {
			state.cart = {};
		},
	},
});

export const actions = cartSlice.actions;

export const selectCart = (state: RootState): ICartProps | null =>
	state.cart.cart;

export default cartSlice.reducer;
