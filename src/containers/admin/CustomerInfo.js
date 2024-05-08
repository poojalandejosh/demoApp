import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clearErr, getSingleCustomer } from "../../reduxStore/Actions";
import { useDispatch, useSelector } from "react-redux";
import TextComponent from "../../components/TextComponent";
import InputAndLabel from "../../components/InputAndLabel";
import { customerInfoStyle } from "./AdminStyle";

function CustomerInfo(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.admin.singleUserData);
  const adminData = useSelector((state) => state.admin.adminloginData);
  // const token = adminData && adminData?.headers?.authorization;
  const token = useSelector((state) => state.admin.token);

  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    dispatch(getSingleCustomer(id, token));
  }, []);

  return (
    <div style={customerInfoStyle.mainView}>
      <div style={customerInfoStyle.componentView}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Customer info"
          textAlign="center"
          fontSize={20}
          fontWeight="bolder"
        />
        <div style={customerInfoStyle.inputAndLabelView}>
          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Name"
            type="text"
            alignItems="start"
            value={`${user?.first_name} ${user?.last_name}`}
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />

          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Email"
            type="text"
            alignItems="start"
            value={user?.email}
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />
          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Contact"
            type="text"
            alignItems="start"
            value={user?.contact_no}
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />
          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Address"
            type="text"
            alignItems="start"
            value={user?.address}
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />
          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Date of Birth"
            type="text"
            alignItems="start"
            value={user?.dob}
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />
          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Gender"
            type="text"
            alignItems="start"
            value={user?.gender}
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />
          <InputAndLabel
            flexDirection="column"
            color="black"
            labelName="Role"
            type="text"
            alignItems="start"
            value="Customer"
            borderBottom="1px solid rgb(128, 128, 128)"
            width="80%"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
