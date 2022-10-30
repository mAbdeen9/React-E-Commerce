import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteOrderFromCart(state, action) {
      return state.filter((o) => o.id !== action.payload);
    },
    removeAll: () => initialState,
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
