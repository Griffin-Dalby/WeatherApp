import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    sassOptions: {
        includePaths: ['./src/app/styles']
    }
};

export default nextConfig;
