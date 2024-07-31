import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  kakao: {
    client_id: process.env.KAKAO_ID,
    redirect_uri: process.env.KAKAO_REDIRECT_URI,
    client_secret: process.env.KAKAO_SECRET,
  },
}));
