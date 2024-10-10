/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',         // Quando o usuário acessar a rota raiz
          destination: '/vote', // Redireciona para /home
          permanent: true,      // Redirecionamento permanente (301), pode ser false para temporário (302)
        },
      ];
    },
  };
  
  export default nextConfig;
  