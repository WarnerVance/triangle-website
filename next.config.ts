// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/test',
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;