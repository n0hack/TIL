import Image from 'next/image';
import React from 'react';
import kakaoImage from '@/public/kakao_login.png';

type KakaoLoginButtonProps = {};

const KakaoLoginButton = ({}: KakaoLoginButtonProps) => {
  const clientId = process.env.KAKAO_APP_ID;
  const redirectUri = process.env.KAKAO_REDIRECT_URI;
  const responseType = 'code';
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;

  return (
    <a href={url}>
      <Image src={kakaoImage} alt="로그인" priority />
    </a>
  );
};

export default KakaoLoginButton;
