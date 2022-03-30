import React from 'react';
import { Outlet } from '../../node_modules/react-router-dom/index';
import UsersContainer from '../containers/UsersContainer';

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Outlet />
    </>
  );
};

export default UsersPage;
