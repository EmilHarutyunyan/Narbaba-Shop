import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/user/userSlice"
import addressReducer from "./features/address/addressSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    address: addressReducer,
  },
});
