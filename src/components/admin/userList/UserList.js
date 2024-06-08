import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserList.module.css'; // Import styles

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://your-backend-url/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className={styles.userListContainer}>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Username: {user.username}, Email: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
