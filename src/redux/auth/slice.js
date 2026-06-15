import { createSlice } from '@reduxjs/toolkit';
import {
  confirmGoogleOAuth,
  login,
  logOut,
  refreshUser,
  register,
  resetPassword,
  sendResetEmail,
} from './operations.js';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,

    isLoading: false,
    isGoogleLoading: false,
    isResetEmailLoading: false,
    isResetPasswordLoading: false,
  },

  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(confirmGoogleOAuth.pending, (state) => {
        state.isGoogleLoading = true;
      })
      .addCase(confirmGoogleOAuth.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isGoogleLoading = false;
      })
      .addCase(confirmGoogleOAuth.rejected, (state) => {
        state.isGoogleLoading = false;
      })
      .addCase(sendResetEmail.pending, (state) => {
        state.isResetEmailLoading = true;
      })
      .addCase(sendResetEmail.fulfilled, (state) => {
        state.isResetEmailLoading = false;
      })
      .addCase(sendResetEmail.rejected, (state) => {
        state.isResetEmailLoading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isResetPasswordLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isResetPasswordLoading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isResetPasswordLoading = false;
      });
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
