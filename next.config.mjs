/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',         
          destination: '/vote', 
          permanent: true,      
        },
      ];
    },
  };
  
  export default nextConfig;
  