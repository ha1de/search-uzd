import React from "react";
import UserCard from "./UserCard";

interface UserListProps {
  users: any[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      <div className="user-list-container">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
