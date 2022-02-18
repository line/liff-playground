module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        crypto: false,
        stream: false,
      };
      return webpackConfig;
    },
  },
};