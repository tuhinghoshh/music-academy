import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave blank if there’s no port
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
