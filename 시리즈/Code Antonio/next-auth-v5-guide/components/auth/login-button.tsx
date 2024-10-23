'use client';

import { useRouter } from 'next/navigation';

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
};

const LoginButton = ({ children, asChild, mode = 'redirect' }: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth/login');
  };

  if (mode === 'modal') {
    return <span>TODO: implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
