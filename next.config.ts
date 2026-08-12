import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* `eslint.ignoreDuringBuilds` was on, which is how the invisible card
     titles, the no-op `animate-fade-in` class and several unused imports
     reached production. Lint runs on build again. */
};

export default nextConfig;
