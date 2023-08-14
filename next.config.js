/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
            // {
            //     protocol: 'https',
            //     hostname: 'images.unsplash.com',
            //     port: '',
            //     pathname: '/photo-**',
            // }
            // {
            //     hostname: 'images.unsplash.com',
            //     //in my case i used cdn.pixabay.com
            // },
        ],
        domains: ["images.unsplash.com", "source.unsplash.com"]
    },
}

module.exports = nextConfig
