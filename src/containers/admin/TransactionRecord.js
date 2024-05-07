import React, { useEffect, useState } from "react";
import InputAndLabel from "../../components/InputAndLabel";
import { useDispatch, useSelector } from "react-redux";
import { clearErr, getTransaction } from "../../reduxStore/Actions";
import TransactionCard from "../../components/TransactionCard";
import LoadingComponent from "../../components/LoadingComponent";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";
import { IoSearch } from "react-icons/io5";
import { transactionRecordStyle } from "./AdminStyle";

function TransactionRecord() {
  const [custId, setCustId] = useState("");
  const dispatch = useDispatch();
  const transactionData = useSelector((state) => state.admin.transactionsData);
  const adminData = useSelector((state) => state.admin.adminloginData);
  // const token = adminData && adminData?.headers?.authorization;
  const token = useSelector((state) => state.admin.token);

  const error = useSelector((state) => state.admin.error);

  const searchHandler = () => {
    dispatch(getTransaction(custId, token));
  };

  const setCustomerId = (val) => {
    setCustId(val);
  };

  return (
    <div style={transactionRecordStyle.mainView}>
      <LoadingComponent />
      <div style={transactionRecordStyle.componentView}>
        <InputAndLabel
          color="black"
          labelName="Customer Id"
          type="text"
          borderBottom="2px solid rgb(0, 0, 0)"
          flexDirection="column"
          width="80"
          value={custId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <div style={transactionRecordStyle.searchView}>
          <IoSearch onClick={searchHandler} size={20} />
        </div>
      </div>
      {transactionData && <DataNotFoundComponent data={transactionData} />}

      <div style={transactionRecordStyle.transactionView}>
        {transactionData &&
          transactionData?.map((data) => {
            return <TransactionCard data={data} />;
          })}
      </div>
    </div>
  );
}

export default TransactionRecord;
