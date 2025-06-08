/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode for better development experience (optional)
  reactStrictMode: true,

  // Environment variables can be used directly here, for example:
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL,
  },

  // Rewrites configuration to proxy requests to your backend
  async rewrites() {
    console.log("DEBUGGING PUBLIC API URL");
    console.log(process.env.NEXT_PUBLIC_API_URL); // Debugging line

    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // Proxy to Backend
      },
    ];
  },

  // Allow data fetching from these remotes
  images: {
    remotePatterns: [new URL("https://placehold.co/**")],
  },
};

export default nextConfig;
