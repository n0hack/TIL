export declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      // Email
      EMAIL_SERVICE: string;
      EMAIL_AUTH_USER: string;
      EMAIL_AUTH_PASSWORD: string;
      EMAIL_BASE_URL: string;
      // Database
      DB_HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_SYNCHRONIZE: string;
      // JWT
      JWT_SECRET: string;
      // Etc
      NODE_ENV: 'development' | 'production';
    }
  }
}
