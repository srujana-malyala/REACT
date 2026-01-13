import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/Cart/CartSlice";

 export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
