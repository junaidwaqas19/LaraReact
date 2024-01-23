// auth-slice.js
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    auth: {
      user: null,
      token: localStorage.getItem('TOKEN') || null, // Load token from local storage
      userType: null,
    },
  },
  reducers: {
    setUser: (currentSlice, action) => {
      const { user, token, usertype } = action.payload;

      // Save the token to local storage
      localStorage.setItem('TOKEN', token);

      // Update the state
      currentSlice.auth.user = user;
      currentSlice.auth.token = token;
      currentSlice.auth.userType = usertype;
    },
    clearUser: (currentSlice) => {
      // Remove the token from local storage
      localStorage.removeItem('TOKEN');

      // Clear the state
      currentSlice.auth.user = null;
      currentSlice.auth.token = null;
      currentSlice.auth.userType = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
