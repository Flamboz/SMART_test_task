import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
});

export default store;
