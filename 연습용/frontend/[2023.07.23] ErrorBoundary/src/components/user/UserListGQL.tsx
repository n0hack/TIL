import { useQuery } from '@apollo/client';
import { User } from 'types/user';
import { GET_USERS_QUERY } from 'api/graphql/user';
import { Link } from 'react-router-dom';

const UserListGQL = () => {
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  return (
    <ul className="flex flex-col gap-3">
      {data?.users.map((user) => (
        <li key={user.id} className="bg-white hover:bg-orange-100 transition-colors cursor-pointer flex">
          <Link to={`/users/${user.id}`} className="w-full h-full p-4">
            {user.id.toString().padStart(2, '0')}. {user.name} ({user.username})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserListGQL;
