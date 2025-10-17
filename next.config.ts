import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/next-landing-template',
  assetPrefix: '/next-landing-template',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
