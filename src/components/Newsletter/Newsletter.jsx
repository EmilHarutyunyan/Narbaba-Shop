import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format.")
    .required("Email is a required field"),
});
const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    // onSubmit
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log("data :", data);
  };
  return (
    <>
      <div className="contact-title">Newsletter</div>
      <span className="contact-small-title">
        Sign up for exclusive offers, events and more.
      </span>
      {errors.email?.message ? (
        <span className="text-danger">{errors.email?.message}</span>
      ) : null}
      <form className="email-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          className="email-input"
        />
        <button type="submit" className="subscribe-btn">
          Subscribe
        </button>
      </form>
    </>
  );
};

export default Newsletter;
