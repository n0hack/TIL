// process.env의 자동완성을 지원하기 위해 추가
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Kakao
      KAKAO_APP_ID: string;
      KAKAO_REDIRECT_URI: string;
      KAKAO_SECRET: string;

      // JWT
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;

      // Cookie
      ACCESS_TOKEN_COOKIE_NAME: string;
      REFRESH_TOKEN_COOKIE_NAME: string;

      // Database
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_DATABASE: string;

      // Redis
      REDIS_HOST: string;
      REDIS_PORT: string;
    }
  }
}

export {};
