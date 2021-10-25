import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    type: null,
    launch: null,
  },
  reducers: {
    closeModal(state, action) {
      state.isOpen = false;
      state.type = null;
      state.launch = null;
    },
    openModal(state, action) {
      state.isOpen = true;
      state.type = action.payload.type;
      state.launch = action.payload.launch;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
