import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../App";

interface UserState {
  users: User[] | null;
  filteredUsers: User[] | null;
}

const initialState: UserState = {
  users: null,
  filteredUsers: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[] | null>) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilteredUsers(state, action: PayloadAction<User[] | null>) {
      state.filteredUsers = action.payload;
    },
  },
});

export const { setUsers, setFilteredUsers } = userSlice.actions;
export default userSlice.reducer;
