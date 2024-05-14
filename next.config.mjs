import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const rule = config.module.rules.find((rule) => 
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: rule.issuer,
                resourceQuery: { not: [...rule.resourceQuery.not, /url/] },
                use: ['@svgr/webpack']
            }
        )

        rule.exclude = /\.svg$/i
        return config
    },

    output: 'export',
    distDir: 'dist',
    sassOptions: {
        includePaths: ['./src/app/styles']
    },
};

export default nextConfig;
