import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import TokenService from "../services/token.service";

// Path
import {
  ERROR,
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  PROFILE,
  PROFILE_ACCOUNT,
  PROFILE_ADDRESSES,
  PROFILE_MY_ORDERS,
  PROFILE_NOTIFICATIONS,
  PROFILE_PASSWORD,
  PROFILE_PAYMENT_HISTORY,
  PROFILE_PAYMENT_METHODS,
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

} from "../pages";

// Layout
import { Layout, ProfileLayout } from "../layout";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { logout } from "../app/features/user/userSlice";
import ProtectRouter from "./ProtectedRouter";



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
            path={PROFILE_ADDRESSES + "/:id"}
            element={<ProfileAddresses />}
          />
          <Route
            path={PROFILE_PAYMENT_METHODS + "/:id"}
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
      </Route>
      {user ? (
        <Route path={LOGIN} element={<Navigate to={pathName} />} />
      ) : (
        <>
          <Route path={LOGIN} element={<Login />} />
          <Route path={FORGOT_PASSWORD} element={<ForgotPass />} />
        </>
      )}
      {user ? (
        <Route path={REGISTER} element={<Navigate to="/" />} />
      ) : (
        <Route path={REGISTER} element={<Register />} />
      )}
      <Route path={ERROR} element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
