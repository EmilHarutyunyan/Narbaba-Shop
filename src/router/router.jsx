import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
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
  PROFILE_NEW_ADDRESSES,
  PROFILE_PASSWORD,
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
  ProfileNewAddresses,
} from "../pages";

// Layout
import { Layout, ProfileLayout } from "../layout";


const Router = () => {
  const user = TokenService.getUser() || null;
  const location = useLocation();

  const pathName = location.state?.from || "/";

  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={PROFILE}
          element={
            <PrivateRouter>
              <ProfileLayout />
            </PrivateRouter>
          }
        >
          <Route index path={PROFILE_MY_ORDERS} element={<ProfileMyOrders />} />
          <Route path={PROFILE_ACCOUNT} element={<ProfileAccount />} />
          <Route path={PROFILE_PASSWORD} element={<ProfilePassword />} />
          <Route path={PROFILE_ADDRESSES} element={<ProfileAddresses />} />
          <Route path={PROFILE_ADDRESSES+'/:id'} element={<ProfileAddresses />} />
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
