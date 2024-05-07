import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogout, customerLogout } from "../reduxStore/Actions";
import { IoMdLogOut } from "react-icons/io";

function HorizontalNav() {
  const adminData = useSelector((state) => state.admin.adminloginData);
  const userData = useSelector((state) => state.admin.customerloginData);

  const adminRole = adminData && adminData?.data?.data?.role_id;
  const userRole = userData && userData?.data?.data?.role_id;

  // useEffect(() => {
  //   const  = JSON.parse(window.localStorage.getItem("key"));
  //   console.log("storeData...", storeData);
  // }, []);

  return (
    <div
      style={{
        maxWidth: "100%",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
          paddingBottom: 5,
          margin: 0,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",

          // paddingRight: 10,
        }}
      >
        {adminRole ? <AdminNav /> : userRole ? <CustomerNav /> : <LoginNav />}
      </ul>
    </div>
  );
}

export default HorizontalNav;

const LoginNav = () => {
  return (
    <div>
      <li style={{ padding: 15 }}>
        <Link
          style={{
            textDecoration: "none",
            textDecorationColor: "black",
            color: "white",
          }}
          to="/"
        >
          Login
        </Link>
      </li>
    </div>
  );
};
const AdminNav = () => {
  const dispatch = useDispatch();

  const logoutAdmin = () => {
    dispatch(adminLogout());
  };
  return (
    <>
      <div
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <li style={{ padding: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="/Customer List"
          >
            Customer List
          </Link>
        </li>
        <li style={{ padding: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="Transaction"
          >
            Transaction
          </Link>
        </li>
        <li style={{ paddingTop: 16, paddingLeft: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="/Create User"
          >
            create user
          </Link>
        </li>
        <li style={{ paddingTop: 16, paddingLeft: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="/"
            onClick={() => logoutAdmin()}
          >
            <IoMdLogOut size={20} />
          </Link>
        </li>
      </div>
    </>
  );
};

const CustomerNav = () => {
  const dispatch = useDispatch();

  const logoutcustomer = () => {
    dispatch(customerLogout());
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          paddingRight: 10,
          // width: "100vh",
          // maxWidth: "100%",
          flexDirection: "row",
        }}
      >
        <li style={{ padding: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="UserInfo"
          >
            Profile
          </Link>
        </li>
        {/* <li style={{ padding: 20 }}>
        <Link
          style={{
            textDecoration: "none",
            textDecorationColor: "black",
            color: "white",
          }}
          to="/Update user"
        >
          Update Profile
        </Link>
      </li> */}
        <li style={{ padding: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="/Make Transaction"
          >
            Transaction
          </Link>
        </li>
        <li style={{ padding: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="/Transaction history"
          >
            Transaction History
          </Link>
        </li>
        <li style={{ paddingTop: 16, paddingLeft: 15 }}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationColor: "black",
              color: "white",
            }}
            to="/"
            onClick={() => logoutcustomer()}
          >
            <IoMdLogOut size={20} />
          </Link>
        </li>
      </div>
    </>
  );
};
