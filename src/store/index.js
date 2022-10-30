import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: { Auth: AuthSlice, Cart: CartSlice },
});

export default store;
