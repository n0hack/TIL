import prisma from '@/lib/prisma';
import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import * as bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Your User Name' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (!user) throw new Error('사용자를 찾을 수 없습니다.');

        if (!credentials?.password) throw new Error('비밀번호 입력이 필요합니다.');

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) throw new Error('비밀번호가 일치하지 않습니다.');

        const { password, ...userWithoutPass } = user;

        return userWithoutPass;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
