import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { AdminReducer } from "./Reducer";

const rootReducers = combineReducers({
  admin: AdminReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
