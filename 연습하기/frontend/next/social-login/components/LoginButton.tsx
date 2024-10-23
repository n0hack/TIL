'use client';

import React from 'react';

type LoginButtonProps = {};

const LoginButton = ({}: LoginButtonProps) => {
  const handleLogin = () => {
    // // auth 페이지인지 체크
    // if (window.location.pathname.includes('/auth')) {
    //   return;
    // }

    const currentUrl = window.location.href;
    window.location.href = '/auth';
  };

  return (
    <button
      className="h-full flex items-center justify-center px-8 hover:bg-gray-100 transition font-medium"
      onClick={handleLogin}
    >
      로그인
    </button>
  );
};

export default LoginButton;
