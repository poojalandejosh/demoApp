import React from "react";
import { styles } from "../containers/Login/LoginStyle";
import ErrorComponent from "./ErrorComponent";

function ButtonComponent({
  btnText,
  backgroundColor,
  onClick,
  color,
  fontWeight,
}) {
  return (
    <button
      onClick={onClick}
      style={{ ...styles.loginBtnStyle, backgroundColor, color, fontWeight }}
    >
      {btnText}
    </button>
  );
}

export default ButtonComponent;
