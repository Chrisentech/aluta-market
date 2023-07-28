import { createSlice } from "@reduxjs/toolkit";

export interface AlertState {
  message: string;
  status: "success" | "pending" | "failed" | "";
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
      state.status = "failed";
      state.message = payload;
    },
    alertFailed: (state, { payload }) => {
      state.message = payload;
      state.status = "failed";
    },
    alertPending: (state) => {
      state.message = "";
    },
  },
});

export const { alertSuccess, alertFailed, alertPending } = alertSlice.actions;

export default alertSlice.reducer;
