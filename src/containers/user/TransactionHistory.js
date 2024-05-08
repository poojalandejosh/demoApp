import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersTransaction } from "../../reduxStore/Actions";
import TransactionCard from "../../components/TransactionCard";
import CustomerCard from "../../components/CustomerCard";
import { transactionHistoryStyle } from "./UserStyles";

function TransactionHistory() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.admin.customerloginData);
  const token = useSelector((state) => state.admin.userToken);
  const userID = userData?.data?.data?.id;
  const transactionData = useSelector((state) => state.admin.allTransaction);

  useEffect(() => {
    dispatch(getAllUsersTransaction(userID, token));
  }, []);

  return (
    <div>
      <div style={transactionHistoryStyle.componentView}>
        <div style={transactionHistoryStyle.cardView}>
          <CustomerCard data={userData?.data?.data} showBtn="false" />
        </div>
        {transactionData &&
          transactionData?.map((data) => {
            return <TransactionCard data={data} />;
          })}
      </div>
    </div>
  );
}

export default TransactionHistory;
