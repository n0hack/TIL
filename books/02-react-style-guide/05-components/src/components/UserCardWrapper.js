import React from 'react';
import UserCard from './UserCard';

const UserCardWrapper = () => {
  return (
    <div>
      <UserCard name="Taro" onClickFunction={() => console.log('UserCard')} />
    </div>
  );
};

export default UserCardWrapper;
