import { configureStore } from "@reduxjs/toolkit";
import alertReducer, { AlertState } from "./Features/alert/alertSlice";
import productReducer, { ProductState } from "./Features/products/productSlice";
import modalReducer, { ModalState } from "./Features/modal/modalSlice";
import userReducer, { UserState } from "./Features/user/userSlice";
import notificationsReducer, {
	notificationsState,
} from "./Features/notifications/notificationSlice";
import loadingReducer, { LoadingState } from "./Features/loading/loadingSlice";
import storeReducer, { StoreState } from "./Features/store/storeSlice";
import cartReducer, { CartState } from "./Features/cart/cartSlice";

// Define the root state type
export interface RootState {
	alert: AlertState;
	products: ProductState;
	store: StoreState;
	modal: ModalState;
	user: UserState;
	notifications: notificationsState;
	loading: LoadingState;
	cart: CartState;
}

// Create the Redux store with the rootReducer
export const store = configureStore({
	reducer: {
		alert: alertReducer,
		products: productReducer,
		modal: modalReducer,
		store: storeReducer,
		user: userReducer,
		notifications: notificationsReducer,
		loading: loadingReducer,
		cart: cartReducer,
	},
});
