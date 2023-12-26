import { createSlice } from "@reduxjs/toolkit";

// First, define the reducer and action creators via `createSlice`
const appSlice = createSlice({
  name: "app",
  initialState: {
    userInfo: null,
  },
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

// Destructure and export the plain action creators
export const { setUser } = actions;

export default reducer;
