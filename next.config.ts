import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // This allows all HTTP domains (less secure)
      },
    ],
  },
};

export default nextConfig;
