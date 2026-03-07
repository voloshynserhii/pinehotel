import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule: any) =>
            rule.test instanceof RegExp && rule.test.test('.svg'),
        );

        if (fileLoaderRule) {
            config.module.rules.push(
                {
                    ...fileLoaderRule,
                    test: /\.svg$/i,
                    resourceQuery: /url/, // *.svg?url
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    resourceQuery: { not: /url/ }, // exclude if *.svg?url
                    use: ['@svgr/webpack'],
                },
            );
            fileLoaderRule.exclude = /\.svg$/i;
        }

        return config;
    },
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
    headers: async () => {
        return [
            {
                source: '/videos/:path*',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'video/mp4',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
