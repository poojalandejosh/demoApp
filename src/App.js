import React from "react";
import "./App.css";
import RootNav from "./navigation/RootNav";
import { Provider } from "react-redux";
import { store } from "../src/reduxStore/Store";

function App() {
  return (
    <Provider store={store}>
      <div role="appRoot" style={{ padding: "20" }}>
        <RootNav />
      </div>
    </Provider>
  );
}

export default App;
