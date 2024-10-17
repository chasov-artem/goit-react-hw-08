import { createSlice } from "@reduxjs/toolkit";
import { registration } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authSlice = slice.reducer;
