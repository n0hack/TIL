'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import apiClient from '../api';

export default function Home() {
  const [profile, setProfile] = useState<any>();

  const handleClick = async () => {
    try {
      const res = await apiClient.get('/auth/profile');
      console.log(res.data);
    } catch (e) {
      console.log('??');
    }
  };

  return (
    <div className="">
      <Header />
      <button onClick={handleClick}>테스트 버튼</button>
    </div>
  );
}
