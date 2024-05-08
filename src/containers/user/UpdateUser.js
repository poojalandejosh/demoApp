import React, { useEffect, useState } from "react";
import TextComponent from "../../components/TextComponent";
import InputAndLabel from "../../components/InputAndLabel";
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErr,
  getSingleCustomer,
  updateUserInfo,
} from "../../reduxStore/Actions";
import { updateUserStyle } from "./UserStyles";

function UpdateUser(props) {
  const userData = useSelector((state) => state.admin.customerloginData);
  const data = useSelector((state) => state.admin.singleUserData);
  const [firstName, setFirstname] = useState(data?.first_name);
  const [firstNameErr, setFirstnameErr] = useState("");
  const [lastName, setLastName] = useState(data?.last_name);
  const [lastNameErr, setLastNameErr] = useState("");
  const [number, setNumber] = useState(data?.contact_no);
  const [numberErr, setNumberErr] = useState("");
  const [address, setAddress] = useState(data?.address);
  const [dob, setDOB] = useState(data?.dob);
  const [gender, setGender] = useState(data?.gender);
  const navigateScreen = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.admin.userToken);
  const userID = userData?.data?.data?.id;
  const userInfo = useSelector((state) => state.admin.singleUserData);

  const updateClick = () => {
    const NAME_REGEX = /^[a-zA-Z]+$/;
    const NUMBER_REGEX = /^[0-9]+$/;
    const payload = {
      user: {
        first_name: firstName,
        last_name: lastName,
        contact_no: number,
        address: address,
        dob: dob,
        gender: gender,
      },
    };
    if (!NAME_REGEX.test(firstName)) {
      setFirstnameErr("Please Enter valid First Name");
    } else if (!NAME_REGEX.test(lastName)) {
      setLastNameErr("Please Enter valid Last Name");
    } else if (!NUMBER_REGEX.test(number)) {
      setNumberErr("Please Enter Valid Number");
    } else {
      if (
        firstName == userInfo?.first_name &&
        lastName == userInfo?.last_name &&
        number == userInfo?.contact_no &&
        address == userInfo?.address &&
        dob == userInfo?.dob &&
        gender == userInfo?.gender
      ) {
        navigateScreen("/UserInfo");
      } else {
        dispatch(updateUserInfo(token, payload, userID));
        setFirstnameErr("");
        setLastNameErr("");
        setNumberErr("");
        navigateScreen("/UserInfo");
      }
    }
  };

  return (
    <div style={updateUserStyle.container}>
      <TextComponent
        fontFamily="fantasy"
        color="black"
        text="Update Information"
        textAlign="left"
        fontSize={20}
        fontWeight="bolder"
        fontStyle="inherit"
      />
      <InputAndLabel
        color="black"
        labelName="First Name"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
        width="50%"
      />
      {firstNameErr && (
        <TextComponent
          fontFamily="fantasy"
          color="red"
          text={firstNameErr}
          textAlign="left"
          fontSize={14}
          fontWeight="normal"
        />
      )}
      <InputAndLabel
        color="black"
        labelName="Last Name"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        width="50%"
      />
      {lastNameErr && (
        <TextComponent
          fontFamily="fantasy"
          color="red"
          text={lastNameErr}
          textAlign="left"
          fontSize={14}
          fontWeight="normal"
        />
      )}
      <InputAndLabel
        color="black"
        labelName="Contact Number"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        width="50%"
      />
      {numberErr && (
        <TextComponent
          fontFamily="fantasy"
          color="red"
          text={numberErr}
          textAlign="left"
          fontSize={14}
          fontWeight="normal"
        />
      )}
      <InputAndLabel
        color="black"
        labelName="Address"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        width="50%"
      />
      <InputAndLabel
        color="black"
        labelName="Date of Birth"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
        width="50%"
      />
      <InputAndLabel
        color="black"
        labelName="Gender"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        width="50%"
      />
      <div style={{ marginTop: 60, marginBottom: 20 }}>
        <ButtonComponent
          onClick={updateClick}
          btnText="Update Profile"
          backgroundColor="grey"
          color="white"
        />
      </div>
    </div>
  );
}

export default UpdateUser;
