import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { AdminReducer } from "./Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  admin: AdminReducer,
});
// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(rootReducers, applyMiddleware(thunk));
