import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/index';
import UserContainer from '../containers/UserContainer';

const UserPage = () => {
  const { id } = useParams();

  return <UserContainer id={id} />;
};

export default UserPage;
