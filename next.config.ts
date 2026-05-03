import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wtmigremo.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
