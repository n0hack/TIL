import { apiClient } from '@/api';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
  cookies().set('hi', 'zz', {
    httpOnly: true,
    maxAge: 1000 * 60 * 3,
  });

  return NextResponse.json({ message: 'Hello World!' });
  // const authorization = req.headers.get('authorization') ?? '';

  // try {
  //   const res = await apiClient.post(
  //     '/auth/refresh',
  //     {},
  //     {
  //       headers: {
  //         Authorization: authorization,
  //       },
  //     },
  //   );
  //   const setCookies = res.headers['set-cookie'];
  //   const response = NextResponse.json({ message: '토큰 발급 성공', ...res.data });
  //   // setCookies?.forEach((cookie) => {
  //   //   response.headers.append('set-cookie', cookie);
  //   // });
  //   cookies().set('hi', 'zz');

  //   return response;
  // } catch (e: any) {
  //   console.log(e.response.data);
  // }

  // return NextResponse.json(
  //   { message: 'Hello World!', error: 'ㅋㅋ', statusCode: 401 },
  //   {
  //     status: 401,
  //   },
  // );
};
