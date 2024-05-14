import React from "react";
import noData from "../assets/images/noData.jpeg";
import { notFoundStyles } from "./ComponentStyle";
import { useSelector } from "react-redux";
import TextComponent from "./TextComponent";

const DataNotFoundComponent = () => {
  const error = useSelector((state) => state.admin.error);

  return (
    <div role="dataNotFoundView">
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
