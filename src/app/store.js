import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/user/userSlice"
import addressReducer from "./features/address/addressSlice";
import paymentMethodsReducer from "./features/paymentMethods/paymentMethodsSlice"
import myOrdersReducer from "./features/myOrders/myOrdersSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    address: addressReducer,
    paymentMethods: paymentMethodsReducer,
    myOrders: myOrdersReducer,
  },
});
