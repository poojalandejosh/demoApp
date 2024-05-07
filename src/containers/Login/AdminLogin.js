import React, { useEffect, useState } from "react";
import { styles } from "./LoginStyle";
import InputAndLabel from "../../components/InputAndLabel";
import ButtonComponent from "../../components/ButtonComponent";
import TextComponent from "../../components/TextComponent";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, clearErr } from "../../reduxStore/Actions";
import { Link, useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import Popup from "reactjs-popup";

function AdminLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminData = useSelector((state) => state.admin.adminloginData);
  const token = adminData && adminData?.headers?.authorization;
  const navigateScreen = useNavigate();
  const err = useSelector((state) => state.admin.error);
  const [showErrPopup, setShowErrPopup] = useState(false);
  const [msg, setMsg] = useState("");
  const [item, setItem] = useState();

  const loginRequest = () => {
    const adminVal =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!adminVal.test(email)) {
      setShowErrPopup(true);
      setMsg("Please Enter valid email");
    } else if (password.length < 8) {
      setShowErrPopup(true);
      setMsg("Please Enter valid password");
    } else {
      const data = {
        user: {
          email: email,
          password: password,
        },
      };
      dispatch(adminLogin(data));
      setEmail("");
      setPassword("");
      setMsg("");
      setShowErrPopup(false);
    }
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    if (token) {
      navigateScreen("Customer List");
      setShowErrPopup(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("key", JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    let x = JSON.parse(window.localStorage.getItem("key"));
  }, [token]);

  useEffect(() => {
    if (err?.response) {
      setMsg(err?.response?.data);
      setShowErrPopup(true);
      setEmail("");
      setPassword("");
    }
  }, [err]);

  return (
    <div style={styles.adminLoginView}>
      <LoadingComponent />
      <TextComponent
        fontFamily="fantasy"
        color="black"
        text="Admin Login"
        textAlign="center"
        fontSize={20}
        fontWeight="bolder"
      />

      <div style={{ marginTop: 50 }}>
        <InputAndLabel
          color="black"
          labelName="Admin Email"
          type="text"
          borderBottom="2px solid rgb(0, 0, 0)"
          flexDirection="column"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputAndLabel
          labelName="Admin Password"
          type="text"
          borderBottom="2px solid rgb(0, 0, 0)"
          flexDirection="column"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isPassward="true"
          isPassword="true"
        />
      </div>
      <div style={styles.btnView}>
        {showErrPopup ? (
          <ErrorComponent
            onClick={loginRequest}
            btnText="Login"
            backgroundColor="grey"
            color="black"
            fontWeight="bolder"
            modalOpen="true"
            show={showErrPopup}
            message={msg}
            setShowErrPopup={setShowErrPopup}
          />
        ) : (
          <ButtonComponent
            onClick={loginRequest}
            btnText="Login"
            backgroundColor="grey"
            color="black"
            fontWeight="bolder"
            modalOpen="true"
          />
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
<img src={"one.jpeg"} />;
