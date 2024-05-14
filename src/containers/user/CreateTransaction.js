import React, { useEffect, useState } from "react";
import InputAndLabel from "../../components/InputAndLabel";
import ButtonComponent from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  clearTransaction,
  craeteTransactionRequest,
  getUserTransaction,
} from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";
import { createTransactionStyle } from "./UserStyles";
import TextComponent from "../../components/TextComponent";

function CreateTransaction() {
  const userData = useSelector((state) => state.admin.customerloginData);
  const createData = useSelector((state) => state.admin.createTransaction);
  const err = useSelector((state) => state.admin.createTransactionErr);
  const token = useSelector((state) => state.admin.userToken);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("credit");
  const data = userData && userData?.data?.data;
  const [bankDetails, setBankDetails] = useState("Netbanking");
  const [amount, setAmount] = useState(0);
  const [accountId, setAccountId] = useState("");
  const navigateScreen = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const transactionCreate = () => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
    if (isNaN(amount)) {
      alert("Please Enter Valid Amount");
    } else if (value == "Debit" && amount < 0) {
      alert("Transaction not possible");
    } else {
      const payload = {
        transaction: {
          transaction_type: capitalizeFirstLetter(value),
          details: bankDetails,
          amount: amount,
          account_id: accountId,
        },
      };
      dispatch(craeteTransactionRequest(token, payload));
    }
  };

  useEffect(() => {
    if (createData?.status == "201") {
      alert("Transaction Created!!");
      navigateScreen("/Transaction history");
    }
  }, [createData?.status == "201"]);

  useEffect(() => {
    if (err?.response) {
      if (err?.response?.status == "404") {
        alert("Data Not found ");
      } else if (err?.response?.status == "422") {
        alert("Transaction can not be proceed");
      } else {
        alert(err?.response?.data);
      }
    }
  }, [err?.response]);

  useEffect(() => {
    dispatch(getUserTransaction(data?.id, token));
  }, [token]);

  useEffect(() => {
    return () => {
      dispatch(clearTransaction());
    };
  }, []);

  return (
    <div role="transactionView" style={createTransactionStyle.container}>
      <div style={{ marginTop: 30 }}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Transaction"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
          fontStyle="inherit"
        />
      </div>

      <div style={createTransactionStyle.transactionDropdown}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Transaction Type"
          textAlign="left"
          fontSize={16}
          fontWeight="normal"
        />
        <select
          style={createTransactionStyle.dropdownView}
          value={value}
          onChange={handleChange}
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <InputAndLabel
        color="black"
        labelName="Details"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={bankDetails}
        onChange={(e) => setBankDetails(e.target.value)}
        width="50%"
      />

      <InputAndLabel
        color="black"
        labelName="Amount"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        width="50%"
      />
      <InputAndLabel
        color="black"
        labelName="Account Id"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        width="50%"
      />
      <div style={{ marginTop: 50 }}>
        <ButtonComponent
          onClick={transactionCreate}
          btnText="Create Transaction"
          backgroundColor="grey"
          color="white"
        />
      </div>
    </div>
  );
}

export default CreateTransaction;
