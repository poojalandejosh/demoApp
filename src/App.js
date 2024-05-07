import logo from './logo.svg';
import './App.css';
import Login from "./containers/Login/CustomerLogin";
import EntryScreen from "./containers/Login/EntryScreen";
import RootNav from "./navigation/RootNav";
import { useEffect, useState } from "react";

function App() {
  const [key, setKey] = useState("");
  const [userToken, setUserToken] = useState("");
  console.log("ok");
  useEffect(() => {
    console.log("pooj");
    setKey(JSON.parse(window.localStorage.getItem("key")));
  }, []);

  return (
    <div style={{ padding: "20" }}>
      <RootNav />
    </div>
  );
}

export default App;
