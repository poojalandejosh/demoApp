import React from "react";
import noData from "../assets/images/noData.jpeg";
import TextComponent from "./TextComponent";
import { notFoundStyles } from "./ComponentStyle";
import { useSelector } from "react-redux";

const DataNotFoundComponent = ({ data }) => {
  const error = useSelector((state) => state.admin.error);

  return (
    <div>
      {data?.length <= 0 || error?.request?.status === "400" ? (
        <div style={notFoundStyles.componentView}>
          <img style={notFoundStyles.imgStyle} src={noData} alt="loading..." />
          <TextComponent
            fontFamily="fantasy"
            color="blue"
            text="Data not available"
            textAlign="left"
            fontSize={20}
            fontWeight="bolder"
          />
        </div>
      ) : null}
    </div>
  );
};

export default DataNotFoundComponent;
