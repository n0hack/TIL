'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

type SignInButtonProps = {};

const SignInButton = ({}: SignInButtonProps) => {
  const { data: session } = useSession();

  console.log(session);

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-purple-700">{session.user.name}</p>
        <Link href={'/api/auth/signout'} className="flex gap-4 ml-auto text-red-600">
          로그아웃
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-4 ml-auto items-center">
      <Link href={'/api/auth/signin'} className="flex gap-4 ml-auto text-purple-600">
        로그인
      </Link>
      <Link href={'/signup'} className="flex gap-4 ml-auto bg-purple-700 text-white p-2 rounded">
        회원가입
      </Link>
    </div>
  );
};

export default SignInButton;
