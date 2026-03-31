import type { NextConfig } from "next";

const remotePatterns: any[] = [
    {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
    },
];
if (process.env.STRAPI_URL) {
    remotePatterns.push({
        protocol: "https",
        hostname: new URL(process.env.STRAPI_URL).hostname,
        port: "",
        pathname: "/**",
    });
}

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns,
        domains: ["via.placeholder.com"],
    },
};

export default nextConfig;
