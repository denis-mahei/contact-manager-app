export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuthLoading = (state) => state.auth.isLoading;

export const selectGoogleLoading = (state) => state.auth.isGoogleLoading;

export const selectResetEmailLoading = (state) =>
  state.auth.isResetEmailLoading;

export const selectResetPasswordLoading = (state) =>
  state.auth.isResetPasswordLoading;
