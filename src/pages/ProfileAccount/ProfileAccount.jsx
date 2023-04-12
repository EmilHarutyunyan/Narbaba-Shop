import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetUserMessage,
  selectUser,
} from "../../app/features/user/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userUpdate } from "../../app/features/user/userActions";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { schema_account } from "./schema";
import { notify } from "../../utils/helper/helper";

const ProfileAccount = () => {
  const { userInfo, loading, error, message } = useSelector(selectUser);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema_account),
  });

 

  const onSubmit = async (data) => {
    const { fullName, phone } = data;
    await dispatch(userUpdate({ fullName, phone }));
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
    <div className="right-side">
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
      <h1 className="title">Account</h1>
      {error && <p className="text-danger text-center">{error}</p>}
      <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          {errors.fullName?.message ? (
            <span className="text-danger">{errors.fullName?.message}</span>
          ) : (
            <br />
          )}
          <input
            type="text"
            {...register("fullName")}
            defaultValue={userInfo?.fullName || ""}
          />
        </div>
        <div className="email">
          <input type="text" defaultValue={userInfo?.email || ""} disabled />
        </div>
        <div className="phone">
          {errors.phone?.message ? (
            <span className="text-danger">{errors.phone?.message}</span>
          ) : (
            <br />
          )}
          <input
            type="text"
            placeholder={"Phone"}
            {...register("phone")}
            defaultValue={userInfo?.phone || ""}
          />
        </div>
        <div className="account-buttons">
          <button type="button" className="discard-btn" onClick={() => reset()}>
            Discard
          </button>
          <button className="saveChanges-btn">
            {loading ? (
              <Spinner
                animation="border"
                variant="light"
                style={{ width: "1rem", height: "1rem", fontSize: "10px" }}
              />
            ) : (
              "Save changes"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileAccount;
