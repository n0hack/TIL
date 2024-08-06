import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      nickname: string;
      profileImage: string | null;
      email: string | null;
      password: string | null;
      provider: string;
      providerId: string;
      createdAt: Date;
    };
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
