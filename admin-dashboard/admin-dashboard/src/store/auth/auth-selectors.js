// selectors.js
export const selectUser = (store) => ({
    user: store.authSlice.auth.user,
    token: store.authSlice.auth.token,
    userType:store.authSlice.auth.userType,
  });
  