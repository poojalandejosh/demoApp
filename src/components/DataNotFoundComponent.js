import React from "react";
import noData from "../assets/images/noData.jpeg";
import TextComponent from "./TextComponent";
import { notFoundStyles } from "./ComponentStyle";
import { useSelector } from "react-redux";

const DataNotFoundComponent = () => {
  const error = useSelector((state) => state.admin.error);

  return (
    <div>
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
    </div>
  );
};

export default DataNotFoundComponent;
