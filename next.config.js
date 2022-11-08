/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            }
        ];
    },
    images: {
        // https://nextjs.org/docs/messages/next-image-unconfigured-host
        domains: ['picsum.photos']
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'picsum.photos',
        //         port: '',
        //         pathname: '/account123/**'
        //     }
        // ]
    }
};

module.exports = nextConfig;
