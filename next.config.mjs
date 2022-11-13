const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
    loader: 'akamai',
    path:"picsum.photos"
  },
  assetPrefix: './',
};

export default   nextConfig;
