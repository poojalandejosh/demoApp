import React from "react";
import { transactionCardStyle } from "./ComponentStyle";
import TextComponent from "./TextComponent";

function TransactionCard({ data }) {
  return (
    <div role="tranCardView" style={transactionCardStyle.mainView}>
      <div style={transactionCardStyle.firstRow}>
        <div style={transactionCardStyle.accountNumberView}>
          <TextComponent
            fontFamily="cursive"
            color="black"
            text={`Account Number : ${data?.account_id}`}
            textAlign="start"
          />
        </div>
        <div style={transactionCardStyle.amountView}>
          <TextComponent
            fontFamily="cursive"
            color="black"
            text={`Amount ${data?.transaction_type} : ${data?.amount}`}
            textAlign="start"
          />
        </div>
      </div>
      <div style={transactionCardStyle.secondRow}>
        <div style={transactionCardStyle.balanceView}>
          <TextComponent
            fontFamily="cursive"
            color="black"
            text={`Available Amount: ${data?.balance}`}
            textAlign="start"
          />
        </div>
        <div style={transactionCardStyle.detailsView}>
          <TextComponent
            fontFamily="cursive"
            color="black"
            text={`Transaction Details: ${data?.details}`}
            textAlign="start"
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;
