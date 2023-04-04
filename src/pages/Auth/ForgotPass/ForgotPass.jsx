import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
// Img
import logoImg from "../../../assets/images/narbaba-logo.png";
import eyeShow from "../../../assets/images/mdi_eye-outline.png";
import eyeHide from "../../../assets/images/mdi_eye-off-outline.png";
import { schema_forgot, schema_reset } from "../schema";

const ForgotPass = () => {

  const [sendForgot, setSendForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_forgot),
  });

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: errorsReset },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_reset),
  });

  
  const onSubmit = (data) => {
    
    setSendForgot(true);
  };
  const onSubmitReset = (data) => {
    
    setSendForgot(false);
  };
  return (
    <div className="login-body">
      {!sendForgot ? (
        // Forgot
        <div className="login-box">
          <div className="logo">
            <Link to={"/"}>
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="login-form">
            <h2 className="title forgot-password-title">Forgot password?</h2>
            <span className="get-link">Get password reset link via email.</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.email?.message ? (
                <span className="text-danger">{errors.email?.message}</span>
              ) : (
                <br />
              )}
              <div className="email-input">
                <input id="email" {...register("email")} placeholder="Email" />
              </div>
              <button className="signIn-btn">Send link to email</button>
            </form>
          </div>
        </div>
      ) : (
        // Reset Pass
        <div className="login-box">
          <div className="logo">
            <Link to={"/"}>
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <h2 className="title forgot-password-title text-center">Check Your Mail</h2>
          {/* <div className="login-form">
            <h2 className="title forgot-password-title">Reset password</h2>
            <span className="get-link">Type your new password here.</span>
            <form action onSubmit={handleSubmitReset(onSubmitReset)}>
              <div className="password-input">
                <span
                  className="show-reset-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img
                      src={eyeShow}
                      className="show-password-eye"
                      alt="show password eye"
                    />
                  ) : (
                    <img
                      src={eyeHide}
                      className="hide-password-eye"
                      alt="hide password eye"
                    />
                  )}
                </span>
                <input
                  id="newPassword"
                  {...registerReset("password")}
                  placeholder="New password"
                />
              </div>
              <div className="password-input">
                <span
                  className="show-repeat-password"
                  onClick={() => setConfirmPassword(!confirmPassword)}
                >
                  {confirmPassword ? (
                    <img
                      src={eyeShow}
                      className="show-password-eye"
                      alt="show password eye"
                    />
                  ) : (
                    <img
                      src={eyeHide}
                      className="hide-password-eye"
                      alt="hide password eye"
                    />
                  )}
                </span>
                <input
                  id="repeatPassword"
                  {...registerReset("confirmPwd")}
                  placeholder="Repeat new password"
                />
              </div>
              <button className="signIn-btn">Send link to email</button>
            </form>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ForgotPass;
