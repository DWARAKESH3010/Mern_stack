import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
    </div>
  );
};

export default UserList;
