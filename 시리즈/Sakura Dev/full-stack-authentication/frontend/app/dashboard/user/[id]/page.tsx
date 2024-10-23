import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { BACKEND_URL } from '@/lib/constants';
import { User } from '@/lib/types';
import axios from 'axios';
import { getServerSession } from 'next-auth';

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const res = await axios.get<User>(BACKEND_URL + `/user/${props.params.id}`, {
    headers: {
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  });
  const user = res.data;

  return (
    <div className="m-2 border rounded shadow overflow-hidden">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 text-center">User Profile</div>

      <div className="grid grid-cols-2  p-2 gap-2">
        <p className="p-2 text-slate-400">Name:</p>
        <p className="p-2 text-slate-950">{user.name}</p>
        <p className="p-2 text-slate-400">Email:</p>
        <p className="p-2 text-slate-950">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
