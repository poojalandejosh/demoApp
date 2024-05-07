import React, { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import TextComponent from "./TextComponent";
import ButtonComponent from "./ButtonComponent";

function ErrorComponent({ show, onClick, message, setShowErrPopup }) {
  return (
    <Popup
      open={show}
      trigger={
        show && (
          <ButtonComponent
            onClick={onClick}
            btnText="Login"
            backgroundColor="grey"
            color="black"
            fontWeight="bolder"
            modalOpen="true"
          />
        )
      }
      modal
      nested
    >
      {(close) => (
        <div
          style={{
            fontSize: 14,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <button
            style={{
              position: "absolute",
              right: 10,
              top: 5,
              padding: 5,
              border: "none",
              backgroundColor: "white",
            }}
            className="close"
            onClick={() => {
              setShowErrPopup(false);
            }}
          >
            <IoMdClose size={20} />
          </button>

          <div style={{ padding: 10, marginTop: 20 }} className="content">
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text={message}
              textAlign="center"
              fontSize={16}
              fontWeight="normal"
            />
          </div>

          <div style={styles.actions} className="actions">
            <button
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 5,
                fontSize: 16,
              }}
              className="button"
              onClick={() => {
                setShowErrPopup(false);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ErrorComponent;
const styles = {
  modal: {
    fontSize: 12,
  },
  header: {
    width: "100%",
    borderBottom: "1px solid gray",
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },
  content: {
    width: "100%",
    padding: "10 5",
  },
  actions: {
    width: "100%",
    padding: 10,
    margin: "auto",
    textAlign: "center",
  },
  close: {
    cursor: " pointer",
    position: "absolute",
    display: "block",
    padding: " 2px 5px",
    lineHeight: 20,
    right: -10,
    top: 10,
    fontSize: 24,
    background: "#ffffff",
    borderRadius: 18,
    border: "1px solid #cfcece",
  },
};
