import React, { useEffect, useState } from "react";
import CustomerCard from "../../components/CustomerCard";
import { deleteUser, getCustomerList } from "../../reduxStore/Actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../components/LoadingComponent";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";
import InputAndLabel from "../../components/InputAndLabel";
import { transactionRecordStyle } from "./AdminStyle";
import TextComponent from "../../components/TextComponent";

function CustomerList() {
  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.admin.customerList);
  const loading = useSelector((state) => state.admin.customerListLoading);
  const err = useSelector((state) => state.admin.customerListErr);

  const [searchData, setSearchData] = useState(customerList);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    setSearchData(customerList);
  }, [customerList]);

  useEffect(() => {
    if (err?.lenghth) {
      if (err?.response?.status == "401") {
        alert("Unauthorized user");
      }
    }
  }, [err]);

  const token = useSelector((state) => state.admin.token);

  useEffect(() => {
    if (token) {
      dispatch(getCustomerList(token));
    }
  }, [token]);

  const ondeleteClick = (ind) => {
    dispatch(deleteUser(ind));
  };
  const searchFun = () => {
    var dataSearch = customerList?.filter?.((item) => {
      return item?.first_name?.toLowerCase().includes(inputVal);
    });
    setSearchData(dataSearch);
  };

  useEffect(() => {
    searchFun();
  }, [inputVal]);

  return (
    <div role="custListView" style={{ margin: 20 }}>
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

      {searchData?.length <= 0 && err?.response && (
        <DataNotFoundComponent data={searchData} />
      )}

      {searchData &&
        searchData?.map?.((data, ind) => {
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
