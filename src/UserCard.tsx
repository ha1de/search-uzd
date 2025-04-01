import React from "react";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
    address: { city: string };
  };
}

const UserCard: React.FC<UserCardProps> = React.memo(({ user }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <p className="user-email">Email: {user.email}</p>
      <p className="user-city">City: {user.address.city}</p>
    </div>
  );
});

export default UserCard;
