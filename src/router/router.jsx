import React from 'react'
import {Navigate, Route,Routes, useLocation} from "react-router-dom"
import PrivateRouter from './PrivateRouter'

import Layout from '../layout/Layout'
// Pages
import Home from '../pages/Home'
import Login from "../pages/Auth/SignIn"
import Register from "../pages/Auth/SignUp";

import TokenService from '../services/token.service'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import ForgotPass from '../pages/Auth/ForgotPass'
import ProfileLayout from '../layout/ProfileLayout/ProfileLayout'
import ProfileAccount from '../pages/ProfileAccount/ProfileAccount'
import ProfilePassword from '../pages/ProfilePassword/ProfilePassword'

const Router = () => {
  const user = TokenService.getUser() || null
  const location = useLocation()
 
  const pathName = location.state?.from || '/'

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route
          path="/profile"
          element={
            <PrivateRouter>
              <ProfileLayout />
            </PrivateRouter>
          }
        >
          <Route index path={"my-orders"} element={<>Profile</>} />
          <Route path="account" element={<ProfileAccount />} />
          <Route path="password" element={<ProfilePassword />} />
        </Route>
      </Route>
      {user ? (
        <Route path="/login" element={<Navigate to={pathName} />} />
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </>
      )}

      {user ? (
        <Route path="/register" element={<Navigate to="/" />} />
      ) : (
        <Route path="/register" element={<Register />} />
      )}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router