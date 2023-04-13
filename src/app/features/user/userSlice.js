import { createSlice } from '@reduxjs/toolkit'
import { changePasswordWithKey, forgotPassword, getUserDetails, registerUser, userLogin, userUpdate, userUpdatePassword } from './userActions'
import TokenService from "../../../services/token.service";
// initialize userToken from local storage

const userToken =  TokenService.getLocalAccessToken() || null
const userInfo =  TokenService.getUserInfo() || null
const user = TokenService.getUser() || null;
const initialState = {
  loading: false,
  user,
  userInfo,
  userToken,
  error: null,
  success: false,
  message: null,
  forgotPassword: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      // delete token from storage
      TokenService.removeUser();
      TokenService.removeUserInfo();
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.user = null;
      state.error = null;
      state.message = null;
    },
    resetUserMessage: (state) => {
      state.error = null;
      state.message = null;
    },
    forgotPasswordStatus: (state, { payload }) => {
      state.forgotPassword = payload;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.userToken = payload.JwtToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get user details
    [getUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userUpdate.pending]: (state) => {
      state.loading = true;
    },
    [userUpdate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.message = "Changes Accepted";
    },
    [userUpdate.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userUpdatePassword.pending]: (state) => {
      state.loading = true;
    },
    [userUpdatePassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = "Change Password";
    },
    [userUpdatePassword.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [forgotPassword.pending]: (state) => {
      state.loading = true;
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.forgotPasswordStatus = payload;
    },
    [forgotPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [changePasswordWithKey.pending]: (state) => {
      state.loading = true;
    },
    [changePasswordWithKey.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    [changePasswordWithKey.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, resetUserMessage, forgotPasswordStatus } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer
