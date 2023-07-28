import { createSlice } from "@reduxjs/toolkit";

// Define the type for the ModalState
export interface ModalState {
  show: boolean;
}

// Create the modalSlice
export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
  } as ModalState, // Set the initial state using the ModalState type
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
});

// Export the action creators
export const { showModal, closeModal } = modalSlice.actions;

// Export the reducer
export default modalSlice.reducer;
