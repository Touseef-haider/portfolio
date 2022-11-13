const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default   nextConfig;
