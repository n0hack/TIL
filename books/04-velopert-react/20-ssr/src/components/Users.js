import React from 'react';
import { Link } from '../../node_modules/react-router-dom/index';

const Users = ({ users }) => {
  if (!users) return null;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
