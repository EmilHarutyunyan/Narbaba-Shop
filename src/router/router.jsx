import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import TokenService from "../services/token.service";

// Path
import {
  CART,
  ERROR,
  FAVORITES,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ID,
  HOME,
  LOGIN,
  PRODUCTS_CATEGORY,
  PROFILE,
  PROFILE_ACCOUNT,
  PROFILE_ADDRESSES,
  PROFILE_ADDRESSES_ID,
  PROFILE_MY_ORDERS,
  PROFILE_NOTIFICATIONS,
  PROFILE_PASSWORD,
  PROFILE_PAYMENT_HISTORY,
  PROFILE_PAYMENT_METHODS,
  PROFILE_PAYMENT_METHODS_ID,
  REGISTER,
} from "./route-path";

// Pages
import {
  Home,
  Login,
  Register,
  ErrorPage,
  ForgotPass,
  ProfileAccount,
  ProfilePassword,
  ProfileMyOrders,
  ProfileAddresses,
  ProfilePaymentMethods,
  ProfilePaymentHistory,
  ProfileNotifications,
  Favorites,
  Cart,

} from "../pages";

// Layout
import { Layout, ProfileLayout } from "../layout";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/user/userSlice";
import ProtectRouter from "./ProtectedRouter";
import ForgotPassId from "../pages/Auth/ForgotPassId/ForgotPassId";
import Products from "../pages/Products";



const Router = () => {
  const user = TokenService.getUser() || null;
  const location = useLocation();
  const pathName = location.state?.from || "/";
  const dispatch = useDispatch()
  if (user) {
    if (dayjs.unix(user.RefreshTokenExpiresUtc).diff(dayjs()) < 1) {
      dispatch(logout());
    }
  }
  

  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PRODUCTS_CATEGORY} element={<Products />} />
        <Route path={FAVORITES} element={<Favorites />} />
        <Route path={CART} element={<Cart />}/>
        <Route
          path={PROFILE}
          element={
            <ProtectRouter>
              <ProfileLayout />
            </ProtectRouter>
          }
        >
          <Route index path={PROFILE_MY_ORDERS} element={<ProfileMyOrders />} />
          <Route path={PROFILE_ACCOUNT} element={<ProfileAccount />} />
          <Route path={PROFILE_PASSWORD} element={<ProfilePassword />} />
          <Route path={PROFILE_ADDRESSES} element={<ProfileAddresses />} />
          <Route
            path={PROFILE_PAYMENT_METHODS}
            element={<ProfilePaymentMethods />}
          />
          <Route
            path={PROFILE_ADDRESSES_ID}
            element={<ProfileAddresses />}
          />
          <Route
            path={PROFILE_PAYMENT_METHODS_ID}
            element={<ProfilePaymentMethods />}
          />
          <Route
            path={PROFILE_PAYMENT_HISTORY}
            element={<ProfilePaymentHistory />}
          />
          <Route
            path={PROFILE_NOTIFICATIONS}
            element={<ProfileNotifications />}
          />
        </Route>
        <Route path={ERROR} element={<ErrorPage />} />
      </Route>
      {user ? (
        <Route path={LOGIN} element={<Navigate to={pathName} />} />
      ) : (
        <>
          <Route path={LOGIN} element={<Login />} />
          <Route path={FORGOT_PASSWORD} element={<ForgotPass />} />
          <Route path={FORGOT_PASSWORD_ID} element={<ForgotPassId />} />
        </>
      )}
      {user ? (
        <Route path={REGISTER} element={<Navigate to="/" />} />
      ) : (
        <Route path={REGISTER} element={<Register />} />
      )}
    </Routes>
  );
};

export default Router;
