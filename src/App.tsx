import { useEffect } from "react";
import { User } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setFilteredUsers } from "./slices/userSlice";
import { setFilterValues } from "./slices/filterSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const filteredUsers = useSelector((state) => state.user.filteredUsers);
  const filterValues = useSelector((state) => state.filter);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data: User[] = await response.json();
      dispatch(setUsers(data));
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch(setFilterValues({ ...filterValues, [name]: value.toLowerCase() }));
  };

  useEffect(() => {
    if (users) {
      const filteredUsersArr = users.filter(
        (user) =>
          user.name.toLowerCase().includes(filterValues.name) &&
          user.username.toLowerCase().includes(filterValues.username) &&
          user.email.toLowerCase().includes(filterValues.email) &&
          user.phone.toLowerCase().includes(filterValues.phone)
      );
      dispatch(setFilteredUsers(filteredUsersArr));
    }
  }, [filterValues, users, dispatch]);

  return (
    <div>
      <h1>User List</h1>
      {users ? (
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="text"
                  name="name"
                  placeholder="Filter by name"
                  value={filterValues.name}
                  onChange={handleFilter}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="username"
                  placeholder="Filter by username"
                  value={filterValues.username}
                  onChange={handleFilter}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="email"
                  placeholder="Filter by email"
                  value={filterValues.email}
                  onChange={handleFilter}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="phone"
                  placeholder="Filter by phone"
                  value={filterValues.phone}
                  onChange={handleFilter}
                />
              </th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default App;
