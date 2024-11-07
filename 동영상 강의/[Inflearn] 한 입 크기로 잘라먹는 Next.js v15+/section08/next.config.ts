import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  // 요청하는 모든 API를 터미널에서 로깅
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
