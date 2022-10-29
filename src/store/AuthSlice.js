import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: null, id: null, name: null, role: null };

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    validator(state, action) {
      state.token = action.payload.token || null;
      state.id = action.payload.id || null;
      state.username = action.payload.username || null;
      state.role = action.payload.role || null;
    },
    logout: () => initialState,
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
