import * as yup from "yup";

export const schema_account = yup.object().shape({
  fullName: yup
    .string()
    .max(40)
    .min(6, "First Name must be at least 6 characters.")
    .required("Required First Name")
});
