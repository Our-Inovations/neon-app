import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSplice";
import customNeonSplice from "./customNeonSplice";
import cartSplice from "./cartSplice";

const store = configureStore({
  reducer: {
    menuReducer: menuSlice.reducer,
    customReducer: customNeonSplice.reducer,
    cartReducer: cartSplice.reducer,
  },
});

export default store;
