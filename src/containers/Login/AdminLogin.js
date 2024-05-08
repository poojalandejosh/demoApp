import React, { useEffect, useState } from "react";
import { styles } from "./LoginStyle";
import ButtonComponent from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, settingToken } from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from "yup";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function AdminLogin() {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.admin.adminloginData);
  const token = adminData && adminData?.headers?.authorization;
  const navigateScreen = useNavigate();
  const err = useSelector((state) => state.admin.error);
  const [showPassword, setShowPassword] = useState(false);

  const passWordHandler = () => {
    setShowPassword(!showPassword);
  };

  const loginRequest = (user) => {
    const payload = {
      user,
    };
    dispatch(adminLogin(payload));
  };

  useEffect(() => {
    if (token) {
      navigateScreen("Customer List");
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("key", JSON.stringify(token));
      window.localStorage.setItem("adminData", JSON.stringify(adminData));
    }
  }, [token]);

  useEffect(() => {
    let x = JSON.parse(window.localStorage.getItem("key"));
    dispatch(settingToken(x));
  }, [token]);

  useEffect(() => {
    if (err?.response) {
      alert(err?.response?.data);
    }
  }, [err]);

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  return (
    <div style={styles.adminLoginView}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          loginRequest(values);
          resetForm({ name: "" });
        }}
        validationSchema={validationSchema}
      >
        {({ error, touches }) => (
          <Form style={styles.formStyle}>
            <label style={styles.adminLabel} htmlFor="email">
              Email
            </label>
            <div className="form-control border-0  border-bottom border-dark bg-transparent">
              <Field
                name="email"
                className="form-control border-0 shadow-none    bg-transparent text-dark "
              />
            </div>
            <div style={styles.adminEmailErr}>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={styles.adminLabel} htmlFor="password">
              Password
            </label>
            <div
              style={styles.passwordView}
              className="form-control border-0  border-bottom border-dark bg-transparent  "
            >
              <Field
                name="password"
                className="form-control border-0 shadow-none bg-transparent text-dark h-25 "
              />
              <div style={{ right: -10 }}>
                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => passWordHandler()}
                    style={styles.iconStyle}
                  />
                ) : (
                  <IoEyeOffOutline
                    style={styles.iconStyle}
                    onClick={() => passWordHandler()}
                  />
                )}
              </div>
            </div>

            <div style={styles.adminPassErr}>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-danger"
              />
            </div>
            <div style={{ ...styles.btnView, marginBottom: 20 }}>
              <ButtonComponent
                btnText="Login"
                backgroundColor="grey"
                color="black"
                fontWeight="bolder"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default AdminLogin;

