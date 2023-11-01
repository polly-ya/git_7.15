import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: false,
};

const isLoginStore = createSlice({
  name: "isLoginStore",
  initialState,
  reducers: {
    loginFn: (state) => {
      state.isLogin = true;
      console.log("login.js - isLogin", state.isLogin);
    },
    logoutFn: (state) => {
      state.isLogin = false;
      console.log("login.js - isLogin", state.isLogin);
    },
  },
});
export const { loginFn, logoutFn } = isLoginStore.actions;
export default isLoginStore.reducer;
