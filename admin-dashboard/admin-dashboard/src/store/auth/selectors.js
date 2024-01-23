// selectors.js
import { createSelector } from 'reselect';

const getUserData = state => state.user.data;
const getIsLoggedIn = state => state.user.isLoggedIn;

export const selectUserData = createSelector(
    [getUserData],
    userData => userData
);

export const selectIsLoggedIn = createSelector(
     [getIsLoggedIn],
     isLoggedIn => isLoggedIn
);
