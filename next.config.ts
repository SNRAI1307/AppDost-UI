// appdost-ui/next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  // No 'images' property is needed here
  // because we are only using local images from /public
  // and Next.js handles those automatically.
};

export default config;