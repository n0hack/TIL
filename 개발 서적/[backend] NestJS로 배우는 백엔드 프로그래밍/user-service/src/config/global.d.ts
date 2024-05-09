export declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      EMAIL_SERVICE: string;
      EMAIL_AUTH_USER: string;
      EMAIL_AUTH_PASSWORD: string;
      EMAIL_BASE_URL: string;
      NODE_ENV: string;
    }
  }
}
