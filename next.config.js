/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["https://tailwindui.com/", "tailwindui.com"]
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '/img/**',
            },
        ],
    }
}

module.exports = nextConfig
