/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_BASE_API: process.env.NEXT_PUBLIC_BASE_API,
  },
}

module.exports = nextConfig
