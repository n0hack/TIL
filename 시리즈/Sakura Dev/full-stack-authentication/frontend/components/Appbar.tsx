import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';

type AppbarProps = {};

const Appbar = ({}: AppbarProps) => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={'/'}>
        홈
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={'/dashboard'}>
        대시보드
      </Link>
      <SignInButton />
    </header>
  );
};

export default Appbar;
