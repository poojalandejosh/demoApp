import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EntryScreen from "../containers/Login/EntryScreen";
import CustomerLogin from "../containers/Login/CustomerLogin";
import AdminLogin from "../containers/Login/AdminLogin";
import CustomerList from "../containers/admin/CustomerList";
import HorizontalNav from "./HorizontalNav";
import TransactionRecord from "../containers/admin/TransactionRecord";
import CustomerInfo from "../containers/admin/CustomerInfo";
import UserInfo from "../containers/user/UserInfo";
import UpdateUser from "../containers/user/UpdateUser";
import CreateTransaction from "../containers/user/CreateTransaction";
import TransactionHistory from "../containers/user/TransactionHistory";
import CreateUser from "../containers/admin/CreateUser";

function RootNav() {
  return (
    <Router>
      <HorizontalNav />
      <Routes>
        <Route path="/" element={<EntryScreen />} />
        <Route path="Customer Login" element={<CustomerLogin />} />
        <Route path="Admin Login" element={<AdminLogin />} />
        <Route path="/Customer List" element={<CustomerList />} />
        <Route path="Transaction" element={<TransactionRecord />} />
        <Route path="/CustomerInfo/:id" element={<CustomerInfo />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/Update user" element={<UpdateUser />} />
        <Route path="/Make Transaction" element={<CreateTransaction />} />
        <Route path="/Transaction history" element={<TransactionHistory />} />
        <Route path="/Create User" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default RootNav;

const LoginNav = () => {
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
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
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
      </ul>
    </div>
  );
};
