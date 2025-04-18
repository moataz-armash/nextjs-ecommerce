/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'images.unsplash.com', protocol: 'https', port: ''},{hostname: "lh3.googleusercontent.com"}],
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
