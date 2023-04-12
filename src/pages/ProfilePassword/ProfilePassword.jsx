import React, { useEffect, useState } from "react";
// Img
import eyeShow from "../../assets/images/mdi_eye-outline.png";
import eyeHide from "../../assets/images/mdi_eye-off-outline.png";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_password } from "./schema";
import { userUpdatePassword } from "../../app/features/user/userActions";
import { ToastContainer } from "react-toastify";
import { resetUserMessage, selectUser } from "../../app/features/user/userSlice";
import { Spinner } from "react-bootstrap";
import { notify } from "../../utils/helper/helper";

const ProfilePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const { message, loading } = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_password),
  });

  const onSubmit = async (data) => {
    const { currentPassword: oldPassword, password: newPassword } = data;
    await dispatch(userUpdatePassword({ oldPassword, newPassword }));
    reset();
  };


  useEffect(() => {
    if (message) {
      notify(message);
    }
    return () => dispatch(resetUserMessage());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <div className="right-side password">
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
      <h1 className="title">Password</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.currentPassword?.message ? (
          <span className="text-danger">{errors.currentPassword?.message}</span>
        ) : null}
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
            id="currentPassword"
            {...register("currentPassword")}
            type={showPassword ? "text" : "password"}
            placeholder="Current password"
          />
        </div>
        {errors.password?.message ? (
          <span className="text-danger">{errors.password?.message}</span>
        ) : null}
        <div className="password-input">
          <span
            className="show-repeat-password"
            onClick={() => setNewPassword(!newPassword)}
          >
            {newPassword ? (
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
            {...register("password")}
            type={newPassword ? "text" : "password"}
            placeholder="New password"
          />
        </div>
        {errors.repeatPwd?.message ? (
          <span className="text-danger">{errors.repeatPwd?.message}</span>
        ) : null}
        <div className="password-input">
          <span
            className="show-repeat-password"
            onClick={() => setRepeatPassword(!repeatPassword)}
          >
            {repeatPassword ? (
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
            id="repeatNewPassword"
            {...register("repeatPwd")}
            type={repeatPassword ? "text" : "password"}
            placeholder="Repeat new password"
          />
        </div>
        <div className="payment-methods-buttons">
          <button type="button" className="discard-btn" onClick={() => reset()}>
            Discard
          </button>
          <button className="change-password">
            {loading ? (
              <Spinner
                animation="border"
                variant="light"
                style={{ width: "1rem", height: "1rem", fontSize: "10px" }}
              />
            ) : (
              " Change password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePassword;
