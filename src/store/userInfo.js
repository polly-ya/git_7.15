import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: [
    { username: "Joe", email: "joe@gmail.com", password: "123456" },
    { username: "Allen", email: "allen@gmail.com", password: "123456" },
  ],
};

const userInfoStore = createSlice({
  name: "userInfoStore",
  initialState,
  reducers: {
    signupFn: (state, action) => {
      console.log(action);
      state.userInfo.push(action.payload);
      console.log("userInfo.js - userInfo", state.userInfo);
    },
  },
});
export const { signupFn } = userInfoStore.actions;
export default userInfoStore.reducer;
