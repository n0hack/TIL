import NextAuth from 'next-auth';
import { User } from './types';

declare module 'next-auth' {
  interface Session {
    user: User;
    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}
