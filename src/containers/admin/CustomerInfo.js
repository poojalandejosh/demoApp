import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleCustomer } from "../../reduxStore/Actions";
import { useDispatch, useSelector } from "react-redux";
import InputAndLabel from "../../components/InputAndLabel";
import { customerInfoStyle } from "./AdminStyle";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";
import TextComponent from "../../components/TextComponent";

function CustomerInfo(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.admin.singleUserData);
  const token = useSelector((state) => state.admin.token);
  const err = useSelector((state) => state.admin.singleUserDataErr);

  useEffect(() => {
    dispatch(getSingleCustomer(id, token));
  }, []);

  useEffect(() => {
    if (err?.response) {
      if (err?.response?.status == "404") {
        alert("Data Not found ");
      } else {
        alert(err?.response?.data);
      }
    }
  }, [err]);

  return (
    <div role="custInfoView" style={customerInfoStyle.mainView}>
      {err?.response?.status == "404" ? (
        <DataNotFoundComponent err={err} />
      ) : (
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
      )}
    </div>
  );
}

export default CustomerInfo;
