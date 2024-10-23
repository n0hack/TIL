declare namespace NodeJS {
  interface ProcessEnv {
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;

    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    JWT_ACCESS_EXPIRATION: string;
    JWT_REFRESH_EXPIRATION: string;
  }
}
