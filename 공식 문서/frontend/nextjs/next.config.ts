import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://i.namu.wiki/**")],
  },
};

export default nextConfig;
