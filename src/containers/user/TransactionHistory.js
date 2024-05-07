import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErr, getAllUsersTransaction } from "../../reduxStore/Actions";
import InputAndLabel from "../../components/InputAndLabel";
import { IoSearch } from "react-icons/io5";
import TextComponent from "../../components/TextComponent";
import TransactionCard from "../../components/TransactionCard";
import CustomerCard from "../../components/CustomerCard";
import { transactionHistoryStyle } from "./UserStyles";

function TransactionHistory() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.admin.customerloginData);
  // const token = userData && userData?.headers?.authorization;
  const token = useSelector((state) => state.admin.userToken);

  const userID = userData?.data?.data?.id;
  const error = useSelector((state) => state.admin.error);

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
