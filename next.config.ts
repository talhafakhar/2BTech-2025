import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: "1337",
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.2btechinc.com',
        port: "443",
        pathname: '/uploads/**',
      }
    ],
  },
};

export default nextConfig;
