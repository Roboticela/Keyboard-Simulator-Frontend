import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/support',
        destination: 'https://roboticela.com/support/keyboard-simulator',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
