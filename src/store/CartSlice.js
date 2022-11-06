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
        state.subtotal =
          +state.subtotal + +action.payload.price * action.payload.count;
        return state;
      }
      state.items = +state.items + +action.payload.count;
      state.subtotal =
        +state.subtotal + +action.payload.price * action.payload.count;
      state.ids.push(action.payload.id);
      state.cart.push(action.payload);
    },
    deleteOrderFromCart(state, action) {
      state.cart = state.cart.filter((o) => o.id !== action.payload.id);
      state.items = +state.items - +action.payload.count;
      state.subtotal =
        +state.subtotal - +action.payload.price * action.payload.count;
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
      if (state.subtotal <= 0) state.subtotal = 0;
    },
    removeAll: () => initialState,
    updateCartFromServer(state, action) {
      return action.payload;
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
