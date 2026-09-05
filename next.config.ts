import type { NextConfig } from "next";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "https://pagead2.googlesyndication.com",
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
].join(" ");

const connectSrc = [
  "'self'",
  "https:",
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://pagead2.googlesyndication.com",
].join(" ");

const frameSrc = [
  "'self'",
  "https://googleads.g.doubleclick.net",
  "https://tpc.googlesyndication.com",
  "https://pagead2.googlesyndication.com",
].join(" ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "healthy-community-navy.vercel.app" }],
        destination: "https://www.healthycommunity.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value:
              `default-src 'self'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; object-src 'none'; img-src 'self' data: https:; font-src 'self' https: data:; style-src 'self' 'unsafe-inline'; script-src ${scriptSrc}; connect-src ${connectSrc}; frame-src ${frameSrc}; upgrade-insecure-requests`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
