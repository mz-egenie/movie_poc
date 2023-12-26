import { createSlice } from "@reduxjs/toolkit";

// First, define the reducer and action creators via `createSlice`
const socketSlice = createSlice({
  name: "socket",
  initialState: {
    connected: false,

  },
  reducers: {
    onConnectionChange(state, action) {
      state.connected = action.payload;
    },
  },
});

const { actions, reducer } = socketSlice;

// Destructure and export the plain action creators
export const { onConnectionChange } = actions;

export default reducer;
