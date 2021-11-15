import React from 'react';
import UsersContainer from '../containers/UsersContainer';
import { Outlet } from 'react-router-dom';

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Outlet />
    </>
  );
};

export default UsersPage;
