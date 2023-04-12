import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema_signUp } from "../schema";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  userLogin,
  getUserDetails,
} from "../../../app/features/user/userActions";
import { selectUser } from "../../../app/features/user/userSlice";
import Spinner from "react-bootstrap/Spinner";

// Img
import logoImg from "../../../assets/images/narbaba-logo.png";
import eyeShow from "../../../assets/images/mdi_eye-outline.png";
import eyeHide from "../../../assets/images/mdi_eye-off-outline.png";

const SignUp = () => {
  const { error, loading, success, user, userInfo } = useSelector(selectUser);
  
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const [authLogin, setAuthLogin] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  console.log('fromPage sign up :', fromPage);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_signUp),
    
  });
  const onSubmit = async (data) => {
    const {fullName, email, password} = data
    setAuthLogin({ email, password })
    await dispatch(registerUser({ fullName, email, password }));
    reset()
  };

  useEffect(()=> {
    if(success) {
      dispatch(userLogin(authLogin))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[success])
  useEffect(() => {
    if (user) {
      dispatch(getUserDetails());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    if (userInfo) {
      navigate(fromPage, { replace: true });
    }
    return () => setAuthLogin(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <div className="login-body">
      <div className="login-box">
        <div className="logo">
          <Link to={"/"}>
            <img src={logoImg} alt="logo" />
          </Link>
        </div>

        <div className="login-form sign-up-form">
          <h2 className="title">Sign Up</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="name-input">
              {errors.fullName?.message ? (
                <span className="text-danger">{errors.fullName?.message}</span>
              ) : (
                <br />
              )}
              <input {...register("fullName")} placeholder="Full name" />
            </div>

            <div className="email-input">
              {errors.email?.message ? (
                <span className="text-danger">{errors.email?.message}</span>
              ) : (
                <br />
              )}
              <input id="email" {...register("email")} placeholder="Email" />
            </div>
            {errors.password?.message ? (
              <span className="text-danger">{errors.password?.message}</span>
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
                {...register("password")}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
            </div>
            {errors.repeatPwd?.message ? (
              <span className="text-danger">{errors.repeatPwd?.message}</span>
            ) : (
              <br />
            )}
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
                id="repeatPassword"
                {...register("repeatPwd")}
                type={repeatPassword ? "text" : "password"}
                placeholder="Repeat password"
              />
            </div>
            <span className="click-join">
              By clicking Join, you agree to our{" "}
              <Link to={"/"} className="forget-password">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to={"/"} className="forget-password">
                Privacy.
              </Link>
            </span>
            <button className="signIn-btn">
              {loading ? (
                <Spinner
                  animation="border"
                  variant="light"
                  style={{ width: "1rem", height: "1rem", fontSize: "10px" }}
                />
              ) : (
                "Sign Up"
              )}
            </button>
            <span className="join-us">
              Already have an account? <Link to="/login">Sign In</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
