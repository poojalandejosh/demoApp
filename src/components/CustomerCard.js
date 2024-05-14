import React from "react";
import { Link } from "react-router-dom";
import { custCardstyles } from "./ComponentStyle";
import TextComponent from "./TextComponent";

function CustomerCard({ data, onClick, showBtn, key }) {
  return (
    <div role="cardView" style={custCardstyles.mainView} key={key}>
      <div style={custCardstyles.componentView}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text={`${data?.first_name}  ${data?.last_name}`}
          textAlign="left"
          fontSize={18}
        />
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text={`Mobile No: ${data?.contact_no}`}
          textAlign="left"
          fontSize={16}
        />

        <TextComponent
          fontFamily="fantasy"
          color="black"
          text={`Address: ${data?.address}`}
          textAlign="left"
          fontSize={16}
        />
        {!showBtn && (
          <>
            <button style={custCardstyles.deleteBtn} onClick={onClick}>
              Delete
            </button>
            <Link
              to={`/CustomerInfo/${data?.id}`}
              style={{ textDecoration: "none" }}
            >
              <button style={custCardstyles.viewBtn}>View</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default CustomerCard;
