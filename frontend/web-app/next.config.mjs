/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
               protocol: "https",
               hostname: 'cdn.pixabay.com'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            }
        ],
    },
   
};

export default nextConfig;
