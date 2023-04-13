import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
// Img
import logoImg from "../../../assets/images/narbaba-logo.png";
import eyeShow from "../../../assets/images/mdi_eye-outline.png";
import eyeHide from "../../../assets/images/mdi_eye-off-outline.png";
import { schema_reset } from "../schema";
import { useDispatch, useSelector } from "react-redux";
import { resetUserMessage, selectUser } from "../../../app/features/user/userSlice";
import { Spinner } from "react-bootstrap";
import { changePasswordWithKey } from "../../../app/features/user/userActions";
import { notify } from "../../../utils/helper/helper";
import { ToastContainer } from "react-toastify";

const ForgotPassId = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false)
  const {error,loading,message} = useSelector(selectUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {temporaryKey} = useParams()
  console.log('temporaryKey :', temporaryKey);

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_reset),
  });

  const onSubmit = async (data) => {
    const {password} = data
    await dispatch(changePasswordWithKey({ temporaryKey, newPassword: password }));
    reset()
  };

   useEffect(() => {
     if (message) {
       notify(message);
       setTimeout(function () {
         navigate("/login")
       }, 3000);
     }
     return () => dispatch(resetUserMessage());
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [message]);
  return (
    <div className="login-body">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="login-box">
        <div className="logo">
          <Link to={"/"}>
            <img src={logoImg} alt="logo" />
          </Link>
        </div>

        <div className="login-form">
          <h2 className="title forgot-password-title">Reset password</h2>
          <span className="get-link">Type your new password here.</span>
          {error && <span className="text-danger">{error}</span>}
          <form onSubmit={handleSubmitReset(onSubmit)}>
            {errors.showPassword?.message ? (
              <span className="text-danger">
                {errors.showPassword?.message}
              </span>
            ) : (
              <br />
            )}
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
                type={showPassword ? "text" : "password"}
              />
            </div>
            {errors.confirmPassword?.message ? (
              <span className="text-danger">
                {errors.confirmPassword?.message}
              </span>
            ) : (
              <br />
            )}
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
                type={confirmPassword ? "text" : "password"}
              />
            </div>
            <button className="signIn-btn" type="submit">
              {loading ? (
                <Spinner
                  animation="border"
                  variant="light"
                  style={{ width: "1rem", height: "1rem", fontSize: "10px" }}
                />
              ) : (
                "Reset password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassId;
