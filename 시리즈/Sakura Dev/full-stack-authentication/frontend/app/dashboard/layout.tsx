import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="flex">
      <div className="w-[200px] border-r shadow h-screen p-4">
        <Link
          className="p-3 rounded hover:bg-emerald-600 hover:text-white hover:shadow transition "
          href={`/dashboard/user/${session?.user.id}`}
        >
          User Profile
        </Link>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;
