import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./features/user/userSlice"
import addressReducer from "./features/address/addressSlice";
import paymentMethodsReducer from "./features/paymentMethods/paymentMethodsSlice"
import myOrdersReducer from "./features/myOrders/myOrdersSlice"
import favoritesReducer from "./features/favorites/favoritesSlice";
import cartReducer from "./features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    address: addressReducer,
    paymentMethods: paymentMethodsReducer,
    myOrders: myOrdersReducer,
    favorites:favoritesReducer,
    cart: cartReducer,
  },
});
