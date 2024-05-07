import React, { useEffect, useState } from "react";
import { styles } from "./LoginStyle";
import InputAndLabel from "../../components/InputAndLabel";
import TextComponent from "../../components/TextComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { clearErr, customerLogin } from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent";

function CustomerLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateScreen = useNavigate();
  const err = useSelector((state) => state.admin.error);
  const [showErrPopup, setShowErrPopup] = useState(false);
  const [msg, setMsg] = useState("");

  const customerLoginData = useSelector(
    (state) => state.admin.customerloginData
  );
  const token = customerLoginData && customerLoginData?.headers?.authorization;
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
      dispatch(customerLogin(data));
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
      window.localStorage.setItem("userKey", JSON.stringify(token));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      navigateScreen("UserInfo");
      setShowErrPopup(false);
    }
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
    <div style={styles.loginView}>
      <p style={styles.loginTitle}>Customers Login</p>
      <div style={{ marginTop: 50 }}>
        <InputAndLabel
          color="white"
          labelName="Customer Email"
          type="text"
          borderBottom="2px solid rgb(255, 255, 255)"
          flexDirection="column"
          alignItem="start"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <InputAndLabel
          color="white"
          labelName="Customer Password"
          type="text"
          borderBottom="2px solid rgb(255, 255, 255)"
          flexDirection="column"
          alignItem="start"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isPassward="true"
        />
      </div>
      <div style={styles.btnView}>
        {!showErrPopup ? (
          <ButtonComponent
            onClick={loginRequest}
            btnText="Login"
            backgroundColor="white"
            color="black"
            fontWeight="bolder"
            modalOpen="true"
          />
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default CustomerLogin;
