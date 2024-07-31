'use client';

import Image from 'next/image';
import React from 'react';
import kakaoImage from '@/public/kakao_login.png';

type LoginButtonProps = {};

const LoginButton = ({}: LoginButtonProps) => {
  const handleClick = () => {
    const currentUrl = window.location.href;
    window.location.href = `http://localhost:4000/auth/kakao/login?redirect_uri=${currentUrl}`;
  };

  return (
    <button onClick={handleClick}>
      <Image src={kakaoImage} alt="로그인" priority />
    </button>
  );
};

export default LoginButton;
