import type { NextConfig } from 'next';

const indexNowKey = process.env.INDEXNOW_KEY;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/support',
        destination: 'https://roboticela.com/support/keyboard-simulator',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    if (!indexNowKey) return [];

    return [
      {
        source: `/${indexNowKey}.txt`,
        destination: '/api/indexnow-key',
      },
    ];
  },
};

export default nextConfig;
