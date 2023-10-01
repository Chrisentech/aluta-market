import { configureStore } from "@reduxjs/toolkit";
import alertReducer, { AlertState } from "./Features/alert/alertSlice";
import productReducer, {
  ProductState,
} from "./Features/products/productSlice";
import modalReducer, { ModalState } from "./Features/modal/modalSlice";
import userReducer, { UserState } from "./Features/user/userSlice";

// Define the root state type
export interface RootState {
  alert: AlertState;
  products: ProductState;
  modal: ModalState;
  user: UserState;
}

// Create the Redux store with the rootReducer
export const store = configureStore({
  reducer: {
    alert: alertReducer,
    products: productReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
