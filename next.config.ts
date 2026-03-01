import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.collealberti.com',
            },
            {
                protocol: 'https',
                hostname: 'static11.com-hotel.com',
            },
        ],
    },
};

export default nextConfig;
