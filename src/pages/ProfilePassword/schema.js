import * as yup from "yup";

export const schema_password = yup.object().shape({
  currentPassword: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum 8 characters, at least one letter and one number"
  ),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum 8 characters, at least one letter and one number"
    ),
  repeatPwd: yup
    .string()
    .required("No password provided.")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
