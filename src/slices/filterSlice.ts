import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterValues {
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface FilterState {
  filterValues: FilterValues;
}

const initialState: FilterState = {
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
    setFilterValues(state, action: PayloadAction<FilterValues>) {
      state.filterValues = action.payload;
    },
  },
});

export const { setFilterValues } = filterSlice.actions;
export default filterSlice.reducer;
