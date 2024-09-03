import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface UserState {
  users: User[];
  filteredUsers: User[];
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilteredUsers(state, action: PayloadAction<User[]>) {
      state.filteredUsers = action.payload;
    },
  },
});

export const { setUsers, setFilteredUsers } = userSlice.actions;
export default userSlice.reducer;
