import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICartProps, IUserProps, IWishlistProductProps } from "../../Interfaces";
export interface UserState {
  user: IUserProps | null;
  cart: ICartProps | null;
  wishlists: any[] | null;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    cart: null,
    wishlists: null,
  } as UserState,
  reducers: {
    getUser: (state, action: PayloadAction<IUserProps | null>) => {
      state.user = action.payload;
    },
    getMyCart: (state, action: PayloadAction<ICartProps | null>) => {
      state.cart = action.payload;
    },
    registerUser: (state, { payload }) => {
      state.user = payload;
    },
    addWishlist: (state, { payload }) => {
      state.wishlists = payload
    }
  },
});

export const actions = userSlice.actions;

//Define and export action for selectors
export const fetchUser = (state: RootState): IUserProps | null =>
  state.user.user;

export const fetchCart = (state: RootState): ICartProps | null =>
  state.user.cart;

  export const fetchWishlist = (state: RootState): any[] | null =>
  state.user.wishlists;

export const isInWishlist = (productId: number) => (state: RootState): boolean | undefined =>
  state.user.wishlists?.some(product => product.productId === productId);

//export user reducer
export default userSlice.reducer;
