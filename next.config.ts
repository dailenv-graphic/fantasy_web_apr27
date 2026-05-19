import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/reservations/special-offers",
        destination: "/special-offers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
