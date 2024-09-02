import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  filteredUsers: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilteredUsers(state, action) {
      state.filteredUsers = action.payload;
    },
  },
});

export const { setUsers, setFilteredUsers } = userSlice.actions;
export default userSlice.reducer;
