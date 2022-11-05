import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState = {
  status: 0,
  message: "Not authenticated",
  token: null,
  username: "anonyme",
  identifier: "",
  expire: -1,
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeAuth: (state, action) => {
      _.assign(state, action.payload);
    },

    purgeAuth: (state) => {
      _.assign(state, initialState);
    },
  },
});

export const { storeAuth, purgeAuth } = authSlice.actions;

export const selectUser = (state) => state.auth;

export default authSlice.reducer;
