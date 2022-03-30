/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  webpack(config) {
    // Enable SVG inlining
    // https://dev.to/dolearning/importing-svgs-to-next-js-nna#svgr
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
