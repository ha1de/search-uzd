import React, { useState, useMemo, useCallback, useEffect } from "react";
import { faker } from '@faker-js/faker';
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import './App.css'; 


const generateFakeUsers = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    address: { city: faker.address.city() },
  }));
};

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadUsers = () => {
      setLoading(true);
      const data = generateFakeUsers(100);
      setUsers(data);
      setLoading(false);
    };

    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, users]);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="app">
      <h1 className="app-title">User Search</h1>
      <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} onClear={clearSearch} />
      {searchQuery && (
        <>
          {loading ? <p>Loading...</p> : (
            <UserList users={filteredUsers} />
          )}
          {filteredUsers.length === 0 && <p>No users found.</p>}
        </>
      )}
    </div>
  );
};

export default App;
