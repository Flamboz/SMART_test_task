import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setFilteredUsers } from "./slices/userSlice";
import { setFilterValues } from "./slices/filterSlice";
import { RootState, AppDispatch } from "./store";
import {
  Container,
  Heading,
  Highlight,
  Input,
  Loader,
  LoadingWrapper,
  NoUsersFound,
  Table,
  TableWrapper,
  Td,
  Th,
  ErrorMessage,
} from "./App.styled";
import { User } from "./types";

const useLoadUsers = () => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.user.users);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data: User[] = await response.json();

      dispatch(setUsers(data));
    } catch (error) {
      setError("Failed to fetch users. Please try again later.");
      console.error("Failed to fetch users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, isLoading, error };
};

const useFilterUsers = (users: User[]) => {
  const dispatch = useDispatch<AppDispatch>();

  const filteredUsers = useSelector(
    (state: RootState) => state.user.filteredUsers
  );
  const filterValues = useSelector(
    (state: RootState) => state.filter.filterValues
  );

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

  return { filteredUsers, filterValues, handleFilter };
};

const highlightText = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Highlight key={index}>{part}</Highlight>
        ) : (
          part
        )
      )}
    </span>
  );
};

function App() {
  const { users, isLoading, error } = useLoadUsers();
  const { filteredUsers, filterValues, handleFilter } = useFilterUsers(users);

  return (
    <Container>
      <Heading>User List</Heading>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Filter by name"
                    value={filterValues.name}
                    onChange={handleFilter}
                  />
                </Th>
                <Th>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Filter by username"
                    value={filterValues.username}
                    onChange={handleFilter}
                  />
                </Th>
                <Th>
                  <Input
                    type="text"
                    name="email"
                    placeholder="Filter by email"
                    value={filterValues.email}
                    onChange={handleFilter}
                  />
                </Th>
                <Th>
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Filter by phone"
                    value={filterValues.phone}
                    onChange={handleFilter}
                  />
                </Th>
              </tr>
              <tr>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.length === 0 ? (
                <tr>
                  <NoUsersFound colSpan={4}>No users found</NoUsersFound>
                </tr>
              ) : (
                filteredUsers?.map((user) => (
                  <tr key={user.id}>
                    <Td>{highlightText(user.name, filterValues.name)}</Td>
                    <Td>
                      {highlightText(user.username, filterValues.username)}
                    </Td>
                    <Td>{highlightText(user.email, filterValues.email)}</Td>
                    <Td>{highlightText(user.phone, filterValues.phone)}</Td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </Container>
  );
}

export default App;
