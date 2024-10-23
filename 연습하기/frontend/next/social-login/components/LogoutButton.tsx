'use client';

import { AuthContext } from '@/contexts/AuthProvider';
import Image from 'next/image';
import React, { useContext } from 'react';

type LogoutButtonProps = {
  userInfo: { nickname: string; profileImage: string };
};

const LogoutButton = ({ userInfo }: LogoutButtonProps) => {
  // const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    console.log('로그아웃');
    // // logout?>.();
    // const res = await apiClient.post('/auth/logout');
    // console.log('머임?');
    // console.log(res.status);
    // if (res.status === 200) {
    //   window.location.href = '/';
    // }
  };

  return (
    <div className="h-full flex gap-8">
      <div className="flex items-center gap-2 h-full">
        <Image
          src={userInfo.profileImage}
          alt="프로필 이미지"
          className="w-8 h-8 rounded-xl"
          width={120}
          height={120}
        />
        <span className="font-medium">{userInfo.nickname}</span>
      </div>
      <button
        className="h-full flex items-center justify-center px-8 hover:bg-gray-100 transition font-medium"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  );
};

export default LogoutButton;
