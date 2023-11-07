import { createSlice } from "@reduxjs/toolkit";

export interface AlertState {
	message: string;
	code: string;
	status: "success" | "pending" | "error" | "";
}

const initialState: AlertState = {
	message: "",
	status: "",
	code: "",
};

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		alertSuccess: (state, { payload }) => {
			state.status = "success";
			state.message = payload;
		},
		alertError: (state, { payload }) => {
			state.message = payload.message;
			state.code = payload.status;
			state.status = "error";
		},
		alertPending: (state) => {
			state.message = "";
			state.status = "pending";
		},
		clearAlert: (state) => {
			state.message = "";
			state.status = "";
		},
	},
});

export const { alertSuccess, alertError, alertPending, clearAlert } =
	alertSlice.actions;

export default alertSlice.reducer;
