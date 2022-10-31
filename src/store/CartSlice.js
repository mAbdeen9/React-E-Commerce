import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], ids: [], items: 0, subtotal: 0 };

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.ids.includes(action.payload.id)) {
        state.cart.forEach((o) => {
          if (o.id === action.payload.id) {
            o.count = +o.count + +action.payload.count;
          }
        });
        state.items = +state.items + +action.payload.count;
        state.subtotal = +state.subtotal + +action.payload.price;
        return state;
      }
      state.items = +state.items + +action.payload.count;
      state.subtotal = +state.subtotal + +action.payload.price;
      state.ids.push(action.payload.id);
      state.cart.push(action.payload);
    },
    deleteOrderFromCart(state, action) {
      return state.cart.filter((o) => o.id !== action.payload);
    },
    removeAll: () => initialState,
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
