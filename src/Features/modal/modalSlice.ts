import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  modals: Record<string, boolean>;
  activeModal: string | null; // New property to store the active modal
}

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modals: {},
    activeModal: null,
  } as ModalState,
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
      state.modals[action.payload] = true;
      state.activeModal = action.payload; // Set the active modal when showing
    },
    closeModal: (state, action?: PayloadAction<string>) => {
      state.modals[action.payload] = false;
      state.activeModal = null; // Clear the active modal when closing
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

// Add a new reducer to get the active modal
export const selectActiveModal = (state: { modal: ModalState }) => state.modal.activeModal;

export default modalSlice.reducer;
