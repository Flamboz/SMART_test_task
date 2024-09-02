import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterValues: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValues(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterValues } = filterSlice.actions;
export default filterSlice.reducer;
