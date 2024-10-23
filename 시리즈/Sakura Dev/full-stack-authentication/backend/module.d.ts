declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    JWT_SECRET: string;
    JWT_REFRESH: string;
  }
}
