import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const menuSlice = createSlice({
  name: "megaMenu",
  initialState,
  reducers: {
    updateOpener: (state, action) => action.payload,
  },
});

export const { updateOpener } = menuSlice.actions;
export default menuSlice;
