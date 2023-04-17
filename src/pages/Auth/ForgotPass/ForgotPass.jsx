import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
// Img
import logoImg from "../../../assets/images/narbaba-logo.png";
import checkMail from "../../../assets/images/checkMail.png"
import { schema_forgot } from "../schema";
import { useDispatch, useSelector } from "react-redux";
import { resetUserMessage, selectUser } from "../../../app/features/user/userSlice";
import { forgotPassword } from "../../../app/features/user/userActions";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const ForgotPass = () => {
  // const [sendForgot, setSendForgot] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const {error,loading,forgotPasswordStatus} = useSelector(selectUser)
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_forgot),
  });

  // const {
  //   register: registerReset,
  //   handleSubmit: handleSubmitReset,
  //   formState: { errors: errorsReset },
  //   reset,
  // } = useForm({
  //   mode: "onBlur",
  //   // onSubmit
  //   resolver: yupResolver(schema_reset),
  // });

  const onSubmit = async (data) => {
    await dispatch(forgotPassword(data));
    reset()
  };

  useEffect(() => {
    return () => dispatch(resetUserMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="login-body">
      {!forgotPasswordStatus ? (
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
            {error && <span className="text-danger">{error}</span>}
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.email?.message ? (
                <span className="text-danger">{errors.email?.message}</span>
              ) : (
                <br />
              )}
              <div className="email-input">
                <input id="email" {...register("email")} placeholder="Email" />
              </div>
              <button className="signIn-btn">
                {loading ? (
                  <Spinner
                    animation="border"
                    variant="light"
                    style={{ width: "1rem", height: "1rem", fontSize: "10px" }}
                  />
                ) : (
                  "Send link to email"
                )}
              </button>
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
          <CheckMailWrap>
            <img src={checkMail} alt={"Check Mail"} />
            <hr className="border-big" />
            <h2 className="title forgot-password-title text-center">
              Check Your Mail
            </h2>
            <hr className="border-lit" />
          </CheckMailWrap>
        </div>
      )}
    </div>
  );
};
const CheckMailWrap = styled.div`
  text-align: center;
  img {
    max-width: 100px;
    width: 100%;
    object-fit: cover;
  }
  .border-big {
    border: 3px solid #d0054e;
    opacity: 1;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 700;
    font-size: 28px;
  }
  .border-lit {
    border: 1px solid #d0054e;
    opacity: 1;
    max-width: 120px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;


export default ForgotPass;
