import { getSession, login, logout } from '@/lib';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();

  return (
    <section>
      <form
        action={async (formData) => {
          'use server';

          await login(formData);
          redirect('/');
        }}
      >
        <input name="email" placeholder="이메일" />
        <br />
        <button type="submit">로그인</button>
      </form>
      <form
        action={async () => {
          'use server';

          await logout();
          redirect('/');
        }}
      >
        <button type="submit">로그아웃</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
