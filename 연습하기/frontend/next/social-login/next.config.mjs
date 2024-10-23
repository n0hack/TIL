/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'k.kakaocdn.net',
      },
    ],
  },
};

export default nextConfig;
