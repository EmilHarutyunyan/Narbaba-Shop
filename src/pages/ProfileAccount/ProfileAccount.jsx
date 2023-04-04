import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUserMessage, selectUser } from "../../app/features/user/userSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userUpdate } from "../../app/features/user/userActions";
import { Spinner,  } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const schema_account = yup.object().shape({
  fullName: yup
    .string()
    .max(40)
    .min(6, "First Name must be at least 6 characters.")
    .required("Required First Name"),
});


const ProfileAccount = () => {
  const { userInfo, loading, error, message } = useSelector(selectUser);
  const dispatch = useDispatch()
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

  const notify = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   
  const onSubmit = async (data) => {
    const { fullName } = data;
    await dispatch(userUpdate({ fullName }));
    reset();
  };

  useEffect(() => {
    if(message) {
      notify(message)
    }
    return () => dispatch(resetUserMessage())
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[message])
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
          <input type="text" placeholder="Phone" />
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
