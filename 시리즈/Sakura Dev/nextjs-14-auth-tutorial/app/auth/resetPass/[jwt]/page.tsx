import ResetPasswordForm from "@/app/components/ResetPasswordForm";
import { activateUser } from "@/lib/actions/authActions";
import { verifyJwt } from "@/lib/jwt";

type Props = {
  params: {
    jwt: string;
  };
};

const ResetPasswordPage = async ({ params }: Props) => {
  const payload = verifyJwt(params.jwt);

  if (!payload)
    return <div className="flex items-center justify-center h-screen text-red-500 text-2xl">The URL is not valid!</div>;

  return (
    <div className="justify-center flex">
      <ResetPasswordForm jwtUserId={params.jwt} />
    </div>
  );
};

export default ResetPasswordPage;
