import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  kakao: {
    clientID: process.env.KAKAO_APP_ID,
    clientSecret: process.env.KAKAO_SECRET,
    redirectURI: process.env.KAKAO_REDIRECT_URI,
  },
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  },
}));
