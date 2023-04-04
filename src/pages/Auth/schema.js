import * as yup from "yup";


export const schema_signUp = yup.object().shape({
  fullName: yup
    .string()
    .max(40)
    .min(6, "First Name must be at least 6 characters.")
    .required("Required First Name"),
  email: yup
    .string()
    .email("Email should have correct format.")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //   "Minimum 8 characters, at least one letter and one number"
    // ),
  repeatPwd: yup
    .string()
    .required("No password provided.")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export const schema_signIn = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const schema_forgot = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Required"),
});
export const schema_reset = yup.object().shape({
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPwd: yup
    .string()
    .required("Password is mandatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
