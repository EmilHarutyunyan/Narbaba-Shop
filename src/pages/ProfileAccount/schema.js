import * as yup from "yup";

export const schema_account = yup.object().shape({
  fullName: yup
    .string()
    .max(40)
    .min(6, "First Name must be at least 6 characters.")
    .required("Required First Name"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/,
      "Invalid phone number"
    ),
});
