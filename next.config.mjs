/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "sanchezbrothersac.com",
          port: "", // Leave empty if not using a custom port
          pathname: "/wp-content/uploads/2025/01/dryer-certified.webp",
        },
      ],
    },
  };
  
  export default nextConfig;