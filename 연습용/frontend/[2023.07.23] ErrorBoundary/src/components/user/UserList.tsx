import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'api/restapi/user';
import { Link } from 'react-router-dom';

const UserList = () => {
  const { data } = useQuery(['users'], getUsers);

  return (
    <ul className="flex flex-col gap-3">
      {data?.data.map((user) => (
        <li key={user.id} className="bg-white hover:bg-orange-100 transition-colors cursor-pointer flex">
          <Link to={`/users/${user.id}`} className="w-full h-full p-4">
            {user.id.toString().padStart(2, '0')}. {user.name} ({user.username})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
