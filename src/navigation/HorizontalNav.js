import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogout, customerLogout } from "../reduxStore/Actions";
import { IoMdLogOut } from "react-icons/io";
import { styles } from "./NavStyle";
function HorizontalNav() {
  const token = useSelector((state) => state.admin.token);
  const userToken = useSelector((state) => state.admin.userToken);

  return (
    <div style={styles.container}>
      <ul style={styles.unOrderList}>
        {token ? <AdminNav /> : userToken ? <CustomerNav /> : <LoginNav />}
      </ul>
    </div>
  );
}

export default HorizontalNav;

const LoginNav = () => {
  return (
    <div>
      <li style={styles.loginView}>
        <Link style={styles.loginLink} to="/">
          Login
        </Link>
      </li>
    </div>
  );
};
const AdminNav = () => {
  const dispatch = useDispatch();

  const logoutAdmin = () => {
    window.localStorage.clear();
    dispatch(adminLogout());
  };
  return (
    <>
      <div style={styles.adminView}>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="/Customer List">
            Customer List
          </Link>
        </li>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="Transaction">
            Transaction
          </Link>
        </li>
        <li style={styles.bottomStyle}>
          <Link style={styles.linkStyle} to="/Create User">
            create user
          </Link>
        </li>
        <li style={styles.bottomStyle}>
          <Link style={styles.linkStyle} to="/" onClick={() => logoutAdmin()}>
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
    window.localStorage.clear();
    dispatch(customerLogout());
  };
  return (
    <>
      <div style={styles.customerNavView}>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="UserInfo">
            Profile
          </Link>
        </li>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="/Make Transaction">
            Transaction
          </Link>
        </li>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="/Transaction history">
            Transaction History
          </Link>
        </li>
        <li style={styles.bottomStyle}>
          <Link
            style={styles.linkStyle}
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
