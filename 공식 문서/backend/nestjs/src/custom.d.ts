export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_USER: string;
      DATABASE_PORT: string;
    }
  }
}
