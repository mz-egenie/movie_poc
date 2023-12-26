import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import socketReducer from "./socketSlice";

const { REACT_APP_ENV } = process.env;

const store = configureStore({
  reducer: {
    app: appReducer,
    socket: socketReducer,
  },
  devTools: REACT_APP_ENV && REACT_APP_ENV !== "production",
});

export default store;
