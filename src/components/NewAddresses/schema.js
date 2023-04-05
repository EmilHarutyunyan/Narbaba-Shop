import * as yup from "yup";

export const schema_address = yup.object().shape({
  // country: yup.string().required("Select an Country"),
  // state: yup.string().required("Select an State"),
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  address2: yup.string().required("Address is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$/,
      "Invalid phone number"
    ),
  zip: yup
    .string()
    .length(5, "ZIP/Postal Code must be exactly 5 characters")
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/)
    .required(),
  email: yup
    .string()
    .email("Email should have correct format.")
    .required("Email is a required field"),
});
