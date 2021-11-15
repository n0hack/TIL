import React from 'react';
import { useParams } from 'react-router-dom';
import UserContainer from '../containers/UserContainer';

const UserPage = () => {
  const params = useParams();
  const { id } = params;
  return <UserContainer id={id} />;
};

export default UserPage;
