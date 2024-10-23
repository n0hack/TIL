import { signIn } from '@/auth';
import React from 'react';

const SignIn = () => {
  return (
    <form
      action={async () => {
        'use server';
        // await signIn("github");
      }}
    >
      <p>로그인 상태가 아닙니다.</p>
      <button type="submit">GitHub 로그인</button>
    </form>
  );
};

const SignOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <form
      action={async () => {
        'use server';
        // await signOut()
      }}
    >
      <p>{children}</p>
      <button type="submit">로그아웃</button>
    </form>
  );
};

const Page = async () => {
  const session = null;
  const user = '';

  console.log(signIn);

  return (
    <section>
      <h1>Next-Auth</h1>
      <div>{user ? <SignOut>{`어서오세요! ${user}님`}</SignOut> : <SignIn />}</div>
    </section>
  );
};

export default Page;
