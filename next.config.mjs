const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
    loader: 'akamai',
  },
  assetPrefix: './',
};

export default   nextConfig;
