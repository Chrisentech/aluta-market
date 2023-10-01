import { createSlice } from "@reduxjs/toolkit";

export interface AlertState {
  message: string;
  status: "success" | "pending" | "error" | "";
}

const initialState: AlertState = {
  message: "",
  status: "",
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
      state.message = payload;
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
