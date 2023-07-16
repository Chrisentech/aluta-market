import { createSlice } from "@reduxjs/toolkit";

interface alertState {
  message: string;
  status: "success" | "pending" | "failed" | "";
}

const initialState: alertState = {
  message:"",
  status: "" 
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertSuccess: (state) => {
       state.message = "";
    },
    alertFailed: (state,{payload}) => {
      state.message = payload;
      state.status = "failed"
    },
    alertPending:(state)=>{
        state.message = ""
    }
  },
});

export const { alertSuccess, alertFailed,alertPending } = alertSlice.actions;

export default alertSlice.reducer;
