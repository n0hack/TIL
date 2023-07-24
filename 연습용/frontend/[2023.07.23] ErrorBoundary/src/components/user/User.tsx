import { useQuery } from '@tanstack/react-query';
import { getUser } from 'api/restapi/user';
import React from 'react';

type UserProps = {
  id?: string;
};

const User = ({ id }: UserProps) => {
  const { data } = useQuery(['user', id], () => getUser(id!), { enabled: !!id });

  return (
    <div>
      {data?.data.id.toString().padStart(2, '0')}. {data?.data.name} ({data?.data.username})
    </div>
  );
};

export default User;
