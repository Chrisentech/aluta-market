import { createSlice } from "@reduxjs/toolkit";

// Define the type for the notificationsState
export interface notificationsState {
  message: number;
  order:number;
}

// Create the notificationsSlice
export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    message:0,
    order:0
  } as notificationsState, // Set the initial state using the notificationsState type
  reducers: {
    newMessage: (state) => {
      state.message+=1;
    },
    clearMessage:(state)=>{
        state.message = 0
    }
  },
});

// Export the action creators
export const { newMessage, clearMessage } = notificationsSlice.actions;

// Export the reducer
export default notificationsSlice.reducer;
