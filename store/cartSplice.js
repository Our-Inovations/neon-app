import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
};

const cartSplice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => ({
      ...state,
      itemsInCart: [...state.itemsInCart, action.payload],
    }),
    emptyCart: () => ({
      itemsInCart: [],
    }),
  },
});

export const { addToCart,emptyCart } = cartSplice.actions;
export default cartSplice;
