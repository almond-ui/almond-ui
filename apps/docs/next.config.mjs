import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

export default withContentlayer(nextConfig)
