import type { NextConfig } from "next";
import { hostname } from "node:os";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[{
      hostname: "flagsapi.com",
      protocol : "https",
      pathname: "/**",
    }
  ] 
  }
};

export default nextConfig;
