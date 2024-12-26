import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site generation,
  assetPrefix: "/DakshanyaDhanasekaran/",
  basePath: "/DakshanyaDhanasekaran",
  trailingSlash: true
};

export default nextConfig;