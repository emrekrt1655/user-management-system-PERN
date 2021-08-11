import * as Yup from "yup";

export const CustomerSchema = Yup.object().shape({
  customernumber: Yup.string("Customer number must be 5 digit")
    .required("Customer number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  username: Yup.string()
    .required("User Name is required")
    .min(3, "Must be more than 3 characters")
    .max(30, "Must be less than 30 characters"),
  firstname: Yup.string()
    .required("First Name is required")
    .min(2, "Must be more than 2 characters")
    .max(150, "Must be less than 150 characters"),
  lastname: Yup.string()
    .required("Last Name is required")
    .min(2, "Must be more than 2 characters")
    .max(150, "Must be less than 150 characters"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required!!")
    .min(2, "Must be more than 2 characters")
    .max(300, "Must be less than 300 characters"),
  password: Yup.string()
    .required("No password provided.")
    .max(150)
    .min(8, "Password is too short - schold be 8 chars minimum. "),
  passwordrepeat: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Password must be matched")
    .required("No password provided.")
    .max(150)
    .min(8),
});
