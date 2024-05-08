import React, { useEffect, useState } from "react";
import { styles } from "./LoginStyle";
import ButtonComponent from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { customerLogin, settingUserToken } from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as yup from "yup";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function CustomerLogin() {
  const dispatch = useDispatch();
  const navigateScreen = useNavigate();
  const err = useSelector((state) => state.admin.error);
  const [showPassword, setShowPassword] = useState(false);

  const passWordHandler = () => {
    setShowPassword(!showPassword);
  };

  const customerLoginData = useSelector(
    (state) => state.admin.customerloginData
  );
  const token = customerLoginData && customerLoginData?.headers?.authorization;
  const loginRequest = (user) => {
    const payload = {
      user,
    };
    dispatch(customerLogin(payload));
  };

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("userkey", JSON.stringify(token));
      window.localStorage.setItem(
        "userData",
        JSON.stringify(customerLoginData)
      );
    }
  }, [token]);

  useEffect(() => {
    let x = JSON.parse(window.localStorage.getItem("userkey"));
    dispatch(settingUserToken(x));
  }, [token]);

  useEffect(() => {
    if (token) {
      navigateScreen("UserInfo");
    }
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
    <div style={styles.loginView}>
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
            <label style={styles.emailLabel} htmlFor="email">
              Email
            </label>
            <div className="form-control border-0  border-bottom border-light bg-transparent">
              <Field
                name="email"
                className="form-control border-0 shadow-none bg-transparent text-light "
              />
            </div>
            <div style={styles.userEmailErr}>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={styles.userPassLabel} htmlFor="password">
              Password
            </label>
            <div
              style={styles.passwordView}
              className="form-control border-0  border-bottom border-light bg-transparent  "
            >
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control border-0 shadow-none bg-transparent text-light h-25 "
              />
              <div style={{ right: -10 }}>
                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => passWordHandler()}
                    style={{ ...styles.iconStyle, color: "white" }}
                  />
                ) : (
                  <IoEyeOffOutline
                    style={{ ...styles.iconStyle, color: "white" }}
                    onClick={() => passWordHandler()}
                  />
                )}
              </div>
            </div>

            <div style={{ marginTop: 5, marginBottom: 5 }}>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-danger"
              />
            </div>
            <div style={{ ...styles.btnView, marginBottom: 20 }}>
              <ButtonComponent
                btnText="Login"
                backgroundColor="white"
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

export default CustomerLogin;
