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
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
          pathname: '/**', // Permite qualquer caminho de imagem
        },
      ],
    },
  };
  
  export default nextConfig;
  