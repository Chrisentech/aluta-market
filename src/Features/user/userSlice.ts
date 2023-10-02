import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { ICartProps, RegisterFormValues } from "../../Interfaces";
export interface UserState {
  user: RegisterFormValues | null;
  cart: ICartProps | null;
  wishlists: any;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    cart: null,
    wishlists: null,
  } as UserState,
  reducers: {
    getUser: (state, action: PayloadAction<RegisterFormValues | null>) => {
      state.user = action.payload;
    },
    getMyCart: (state, action: PayloadAction<ICartProps | null>) => {
      state.cart = action.payload;
    },
    registerUser: (state, { payload }) => {
      state.user = payload.user;
    },
  },
});

export const actions = userSlice.actions;

//Define and export action for selectors
export const fetchUser = (state: RootState): RegisterFormValues | null =>
  state.user.user;

export const fetchCart = (state: RootState): ICartProps | null =>
  state.user.cart;
//export user reducer
export default userSlice.reducer;
