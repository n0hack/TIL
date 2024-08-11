import { activateUser } from "@/lib/actions/authActions";

type Props = {
  params: {
    jwt: string;
  };
};

const ActivationPage = async ({ params }: Props) => {
  const result = await activateUser(params.jwt);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {result === "userNotExist" ? (
        <p className="text-red-500 text-2xl">The user does not exist</p>
      ) : result === "alreadyActivated" ? (
        <p className="text-red-500 text-2xl">The user is already activated</p>
      ) : result === "success" ? (
        <p className="text-green-500 text-2xl">Success!</p>
      ) : (
        <p className="text-yellow-500">Oops</p>
      )}
    </div>
  );
};

export default ActivationPage;
