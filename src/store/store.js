import isLogin from "./isLogin";
import userInfo from "./userInfo";
import cartInfo from "./cartInfo";
import dataInfo from "./dataInfo";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";  // defaults to localStorage for web

const reducers = combineReducers({
  isLoginStore: isLogin,
  userInfoStore: userInfo,
  cartInfoStore: cartInfo,
  dataInfoStore: dataInfo,
});

const persitConfig = {
  key: "root",
  storage,
  whitelist: [
    "isLoginStore",
    "userInfoStore",
    "cartInfoStore",
    "dataInfoStore",
  ],
};

const store = configureStore({
  reducer: persistReducer(persitConfig, reducers),
});
console.log('store',store);
export const persistor = persistStore(store);
export default store;
