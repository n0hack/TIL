'use client';

import { Button } from '@/components/Button';
import InputBox from '@/components/InputBox';
import { BACKEND_URL } from '@/lib/constants';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRef } from 'react';

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const Page = () => {
  const register = async () => {
    try {
      const res = await axios.post(BACKEND_URL + '/auth/register', {
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      });
      alert(`회원가입이 완료되었습니다.`);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 409) {
          alert('이미 존재하는 이메일입니다.');
          return;
        }
      }
    }
  };
  const data = useRef<FormInputs>({
    name: '',
    email: '',
    password: '',
  });

  return (
    <div className="m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">Sign up</div>
      <div className="p-2 flex flex-col gap-6">
        <InputBox
          autoComplete="off"
          name="name"
          labelText="Name"
          required
          onChange={(e) => (data.current.name = e.target.value)}
        />
        <InputBox name="email" labelText="Email" required onChange={(e) => (data.current.email = e.target.value)} />
        <InputBox
          name="password"
          labelText="password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={register}>Submit</Button>
          <Link className="" href={'/'}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
