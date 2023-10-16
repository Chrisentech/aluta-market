import { configureStore } from "@reduxjs/toolkit";
import alertReducer, { AlertState } from "./Features/alert/alertSlice";
import productReducer, {
  ProductState,
} from "./Features/products/productSlice";
import modalReducer, { ModalState } from "./Features/modal/modalSlice";
import userReducer, { UserState } from "./Features/user/userSlice";
import filterReducer, { FilterState } from "./Features/searchFilter/filterSlice";
import notificationsReducer, { notificationsState } from "./Features/notifications/notificationSlice";

// Define the root state type
export interface RootState {
  alert: AlertState;
  products: ProductState;
  modal: ModalState;
  filter: FilterState
  user: UserState;
  notifications: notificationsState;
}

// Create the Redux store with the rootReducer
export const store = configureStore({
  reducer: {
    alert: alertReducer,
    products: productReducer,
    modal: modalReducer,
    filter: filterReducer,
    user: userReducer,
    notifications: notificationsReducer,
  },
});

