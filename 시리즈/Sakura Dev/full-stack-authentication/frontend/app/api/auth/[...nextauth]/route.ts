import { BACKEND_URL } from '@/lib/constants';
import axios, { AxiosError } from 'axios';
import ky from 'ky';
import { NextAuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await axios.post(
    `${BACKEND_URL}/auth/refresh`,
    {},
    {
      headers: {
        Authorization: `Refresh ${token.backendTokens.refreshToken}`,
      },
    },
  );

  console.log('토큰이 갱신되었습니다.', {
    ...token,
    backendTokens: res,
  });

  return {
    ...token,
    backendTokens: res.data,
  };
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: '이메일을 입력해주세요.',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) return null;

        const { username, password } = credentials;

        try {
          const res = await axios.post(`${BACKEND_URL}/auth/login`, {
            username,
            password,
          });

          return res.data;
        } catch (e) {
          if (e instanceof AxiosError) {
            console.log('에러: ', e.response?.data);
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt 콜백', { token, user });
      if (user) return { ...token, ...user };

      if (new Date().getTime() < token.backendTokens.expiresIn) return token;

      return await refreshToken(token);
    },
    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
