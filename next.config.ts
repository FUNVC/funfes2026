import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/2026",
  async redirects() {
    return [
      {
        // basePath: false で basePath の自動付与を無効化し、ルート (/) を /2026 へ転送
        source: "/",
        destination: "/2026",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
