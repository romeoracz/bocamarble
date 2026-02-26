import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200" },
          { key: "Content-Type", value: "application/xml" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=86400" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/estimate", destination: "/free-estimate", permanent: true },
      { source: "/quote", destination: "/free-estimate", permanent: true },
      { source: "/marble", destination: "/services/marble-countertops", permanent: true },
      { source: "/granite", destination: "/services/granite-countertops", permanent: true },
      { source: "/quartz", destination: "/services/quartz-countertops", permanent: true },
      { source: "/quartzite", destination: "/services/quartzite-countertops", permanent: true },
      { source: "/kitchen", destination: "/services/kitchen-countertops", permanent: true },
      { source: "/bathroom", destination: "/services/bathroom-countertops", permanent: true },
      { source: "/outdoor", destination: "/services/outdoor-countertops", permanent: true },
      { source: "/installation", destination: "/services/countertop-installation", permanent: true },
      { source: "/fabrication", destination: "/services/countertop-fabrication", permanent: true },
      { source: "/commercial", destination: "/services/commercial-countertops", permanent: true },
    ];
  },
};

export default nextConfig;
