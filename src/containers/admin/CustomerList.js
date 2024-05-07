import React, { useEffect, useState } from "react";
import CustomerCard from "../../components/CustomerCard";
import TextComponent from "../../components/TextComponent";
import {
  clearErr,
  deleteCustomer,
  deleteUser,
  getCustomerList,
} from "../../reduxStore/Actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../components/LoadingComponent";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";
import InputAndLabel from "../../components/InputAndLabel";
import { transactionRecordStyle } from "./AdminStyle";
import ErrorComponent from "../../components/ErrorComponent";

function CustomerList() {
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.admin.adminloginData);
  const error = useSelector((state) => state.admin.error);
  const customerList = useSelector((state) => state.admin.customerList);
  const [searchData, setSearchData] = useState(customerList);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    setSearchData(customerList);
  }, [customerList]);

  useEffect(() => {
    const storeData = JSON.parse(window.localStorage.getItem("key"));
  }, []);

  const token = adminData && adminData?.headers?.authorization;
  // const [token, setToken] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(getCustomerList(token));
    }
  }, [token]);

  const ondeleteClick = (ind) => {
    dispatch(deleteUser(ind));
  };
  const searchFun = () => {
    var dataSearch = customerList?.filter((item) => {
      return item?.first_name?.toLowerCase().includes(inputVal);
    });
    setSearchData(dataSearch);
  };

  useEffect(() => {
    searchFun();
  }, [inputVal]);

  return (
    <div style={{ margin: 20 }}>
      <LoadingComponent />

      <div style={transactionRecordStyle.componentView}>
        <InputAndLabel
          color="black"
          labelName="Enter Customer Name"
          type="text"
          borderBottom="2px solid rgb(0, 0, 0)"
          flexDirection="column"
          width="80"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      {searchData?.length ? (
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Customers Details"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
        />
      ) : null}
      <DataNotFoundComponent data={searchData} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      ></div>
      {searchData &&
        searchData?.map((data, ind) => {
          return (
            <CustomerCard
              key={data?.id}
              data={data}
              onClick={() => ondeleteClick(ind)}
            />
          );
        })}
    </div>
  );
}

export default CustomerList;
