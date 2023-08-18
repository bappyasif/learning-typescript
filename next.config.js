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
    },
    plugins: [
        // ...
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ]
}

module.exports = nextConfig
