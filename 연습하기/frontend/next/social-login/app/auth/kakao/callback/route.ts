import { apiClient } from '@/api';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  const res = await apiClient.post(`/auth/kakao?code=${code}`);
  // const setCookies = res.headers['set-cookie'];

  apiClient.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;

  cookies().set('BLISS_ATOKEN_V1', res.data.accessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 3,
  });
  cookies().set('BLISS_RTOKEN_V1', res.data.refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 10,
  });

  const response = NextResponse.redirect(new URL('/', 'http://localhost:3000'));

  // setCookies?.forEach((cookie) => {
  //   console.log('발급 쿠키:', cookie);
  //   response.headers.append('set-cookie', cookie);
  // });

  return response;
};
