import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site generation
  assetPrefix: "/Weather-App/",
  basePath: "/Weather-App",
  trailingSlash: true, // Adds a slash at the end of every route
};

export default nextConfig;
