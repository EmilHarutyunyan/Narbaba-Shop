import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Img
import logoImg from "../../../assets/images/narbaba-logo.png";
import eyeShow from "../../../assets/images/mdi_eye-outline.png";
import eyeHide from "../../../assets/images/mdi_eye-off-outline.png";
import { schema_signIn } from "../schema";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, userLogin } from "../../../app/features/user/userActions";
import { resetUserMessage } from "../../../app/features/user/userSlice";
import { selectUser } from "../../../app/features/user/userSlice";
import { Spinner } from "react-bootstrap";



const SignIn = () => {

  const { error, loading, user, userInfo } = useSelector(selectUser);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_signIn),
  });
  const onSubmit = async (data) => {
    const { email, password } = data;
    await dispatch(userLogin(({ email, password })));
    reset()
  };

  useEffect(()=> {
    return ()=> dispatch(resetUserMessage());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(() => {
    if (user) {
      dispatch(getUserDetails());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    if (userInfo) {
      navigate(fromPage, { replace: true })
    }
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
        <div className="login-form">
          <h2 className="title">Sign In</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.email?.message ? (
              <span className="text-danger">{errors.email?.message}</span>
            ) : (
              <br />
            )}
            <div className="email-input">
              <input id="email" {...register("email")} placeholder="Email" />
            </div>
            {errors.password?.message ? (
              <span className="text-danger">{errors.password?.message}</span>
            ) : (
              <br />
            )}
            <div className="password-input">
              <span
                className="show-password"
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
                id="password"
                {...register("password")}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
              />
            </div>
            <Link to="/forgot-password" className="forget-password">
              Forgot password?
            </Link>
            <button className="signIn-btn hover-overlay">
              {loading ? (
                <Spinner
                  animation="border"
                  variant="light"
                  style={{ width: "1rem", height: "1rem", fontSize: "10px" }}
                />
              ) : (
                "Sign In"
              )}
            </button>
            <span className="join-us">
              Don’t have an account yet?{" "}
              {/* <Navigate state={{ from: location }}> */}
                <span to={"/register"} onClick={() => {
                  navigate("/register", { state: { from: location?.state?.from } });
        
                }}>Join Us</span>
              {/* </Navigate> */}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
