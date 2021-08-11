import "./CustomerAdd.scss";
import { createCustomer } from "../../actions/customer";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { CustomerSchema } from "../../helper/validation";
import { useAlert } from "react-alert";

const CustomerAdd = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const Formik = useFormik({
    initialValues: {
      customernumber: "",
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      birth: "",
      password: "",
      passwordrepeat: "",
    },

    validationSchema: CustomerSchema,

    onSubmit: async (values) => {
      try {
        dispatch(createCustomer(values));
        Formik.handleReset();
        // window.alert('Succsessfully added')
        alert.success("New Customer added successfully!", {
          timeout: 2000,
        });
      } catch (error) {
        console.log(`error`, error.message);
        alert.error("Hooops! There is an error", {
          timeout: 2000,
        });
      }
    },
  });

  return (
    <div className="container">
      <div className="addform">
        <div className="left">
          <img
            src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="fitness"
          />
        </div>
        <div className="right">
          <h1>Add New Customer</h1>

          <form onSubmit={Formik.handleSubmit}>
            <label htmlFor="customernumber">Customer Number</label>
            <input
              type="number"
              name="customernumber"
              placeholder="Customer Number"
              {...Formik.getFieldProps("customernumber")}
            ></input>
            {Formik.touched.customernumber && Formik.errors.customernumber && (
              <span>{Formik.errors.customernumber}</span>
            )}

            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={Formik.values.username}
              {...Formik.getFieldProps("username")}
            ></input>
            {Formik.touched.username && Formik.errors.username && (
              <span>{Formik.errors.username}</span>
            )}

            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={Formik.values.firstname}
              {...Formik.getFieldProps("firstname")}
            ></input>
            {Formik.touched.firstname && Formik.errors.firstname && (
              <span>{Formik.errors.firstname}</span>
            )}

            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={Formik.values.lastname}
              {...Formik.getFieldProps("lastname")}
            ></input>
            {Formik.touched.lastname && Formik.errors.lastname && (
              <span>{Formik.errors.lastname}</span>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={Formik.values.email}
              {...Formik.getFieldProps("email")}
            ></input>
            {Formik.touched.email && Formik.errors.email && (
              <span>{Formik.errors.email}</span>
            )}

            <label htmlFor="birth">Date of Birth</label>
            <input
              type="date"
              name="birth"
              placeholder="Date of Birth"
              value={Formik.values.birth}
              {...Formik.getFieldProps("birth")}
            ></input>
            {Formik.touched.birth && Formik.errors.birth && (
              <span>{Formik.errors.birth}</span>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={Formik.values.password}
              {...Formik.getFieldProps("password")}
            ></input>
            {Formik.touched.password && Formik.errors.password && (
              <span>{Formik.errors.password}</span>
            )}

            <label htmlFor="password-repeat">Repeat Password</label>
            <input
              type="password"
              name="password-repeat"
              placeholder="Repeat Password"
              value={Formik.values.passwordrepeat}
              {...Formik.getFieldProps("passwordrepeat")}
            ></input>
            {Formik.touched.passwordrepeat && Formik.errors.passwordrepeat && (
              <span>{Formik.errors.passwordrepeat}</span>
            )}
            <button type="submit">Add Customer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerAdd;
