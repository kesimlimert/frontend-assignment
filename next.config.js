/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["iztek-frontend-assignment.vercel.app"],
  },
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
  },
  transpilePackages: ["react-slider"],
};

module.exports = nextConfig;
