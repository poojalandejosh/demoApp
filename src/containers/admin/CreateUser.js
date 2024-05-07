import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErr,
  craeteUserAction,
  getSingleCustomer,
} from "../../reduxStore/Actions";
import { useDispatch, useSelector } from "react-redux";
import TextComponent from "../../components/TextComponent";
import InputAndLabel from "../../components/InputAndLabel";
import { customerInfoStyle } from "./AdminStyle";
import { styles } from "../Login/LoginStyle";
import ButtonComponent from "../../components/ButtonComponent";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

function CreateUser(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const createUser = useSelector((state) => state.admin.createUserRes);
  const adminData = useSelector((state) => state.admin.adminloginData);
  const token = adminData && adminData?.headers?.authorization;

  const error = useSelector((state) => state.admin.error);
  const navigateScreen = useNavigate();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    gender: "",
    role_id: "",
    contact_no: "",
  };
  const validationSchema = yup.object({
    first_name: yup
      .string()
      .required("First Name is a required field")
      .min(3, "First Name must be at least 3 characters")
      .matches(/^[A-Za-z]+$/, "Please remove any number or special character"),
    last_name: yup
      .string()
      .required()
      .min(5)
      .matches(/^[A-Za-z]+$/, "Please remove any number or special character"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    address: yup.string().required(),
    dob: yup.string().required(),
    gender: yup.string().required(),
    role_id: yup.number().required(),
    contact_no: yup.number().required().min(10, "Envalid Number"),
  });

  const createUserRequest = (user) => {
    const payload = {
      user,
    };
    dispatch(craeteUserAction(token, payload));
    navigateScreen("/Customer List");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: 30 }}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Customer info"
          textAlign="center"
          fontSize={20}
          fontWeight="bolder"
        />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          createUserRequest(values);
          resetForm({ name: "" });
        }}
        validationSchema={validationSchema}
      >
        {({ error, touches }) => (
          <Form
            style={{
              flexDirection: "column",
              display: "flex",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}
          >
            <label
              style={{ marginBottom: 5, marginTop: 5 }}
              htmlFor="first_name"
            >
              First Name
            </label>

            <Field
              name="first_name"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginTop: 5, marginBottom: 5 }}>
              <ErrorMessage
                name="first_name"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label
              style={{ marginBottom: 5, marginTop: 5 }}
              htmlFor="last_name"
            >
              Last Name
            </label>
            <Field
              name="last_name"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="last_name"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={{ marginBottom: 5, marginTop: 5 }} htmlFor="assignee">
              Email
            </label>
            <Field
              name="email"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={{ marginBottom: 5, marginTop: 5 }} htmlFor="due_date">
              Password
            </label>
            <Field
              name="password"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={{ marginBottom: 5, marginTop: 5 }} htmlFor="due_date">
              Address
            </label>
            <Field
              name="address"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="address"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={{ marginBottom: 5, marginTop: 5 }} htmlFor="due_date">
              Date of Birth
            </label>
            <Field
              name="dob"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="dob"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={{ marginBottom: 5, marginTop: 5 }} htmlFor="due_date">
              Gender
            </label>
            <Field
              name="gender"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="gender"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={{ marginBottom: 5, marginTop: 5 }} htmlFor="role_id">
              Role Id
            </label>
            <Field
              name="role_id"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="role_id"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label
              style={{ marginBottom: 5, marginTop: 5 }}
              htmlFor="contact_no"
            >
              Phone Number
            </label>
            <Field
              name="contact_no"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="contact_no"
                component={"div"}
                className="text-danger"
              />
            </div>

            <div style={{ ...styles.btnView, marginBottom: 20 }}>
              <ButtonComponent
                btnText="create User"
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

export default CreateUser;
