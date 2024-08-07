import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cookies } from 'next/headers';
import axios, { AxiosError } from 'axios';
import LoginButton from '@/components/LoginButton';
import LogoutButton from '@/components/LogoutButton';
import AuthProvider from '@/contexts/AuthProvider';
import { SessionProvider } from 'next-auth/react';
import { apiClient } from '@/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const f = async () => {
    console.log('리페치');
    return apiClient.get('/users/15');
  };

  let userInfo = {
    data: {
      nickname: '',
      profileImage: '',
    },
  };

  try {
    const result = await f();
    userInfo = result;
  } catch (e: any) {
    console.log('[Layout] 캐치');

    if (e.response.data.message === '액세스 토큰이 필요합니다.') {
      const { data } = await axios.post('http://localhost:3000/auth/refresh', {});
      console.log(data);
    }
    // // const statusCode = (e as AxiosError).response?.status;

    // const refreshToken = cookies().get('BLISS_RTOKEN_V1')?.value;
    // apiClient
    //   .post('http://localhost:3000/auth/refresh', {}, { headers: { Authorization: `Refresh ${refreshToken}` } })
    //   .then((res) => {
    //     console.log('갱신 완');
    //     // console.log(res.headers);
    //   })
    //   .catch((e) => {
    //     console.log('머임');
    //     // console.log(e);
    //   });
  }

  // console.log(userInfo.data);

  return (
    <html lang="ko">
      <body>
        <Header
          Component={
            <>
              <LoginButton />
              <LogoutButton
                userInfo={{ nickname: userInfo.data.nickname ?? '', profileImage: userInfo.data.profileImage ?? '' }}
              />
            </>
          }
        />
        <main className="p-12">{children}</main>
      </body>
    </html>
  );
}
