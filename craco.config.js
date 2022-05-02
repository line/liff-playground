// eslint-disable-next-line @typescript-eslint/no-var-requires
const devcert = require('devcert')

module.exports = async () => {
  const { key, cert } = await devcert.certificateFor('localhost')

  return {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          crypto: false,
          stream: false,
        }
        return webpackConfig
      },
    },
    devServer: (devServerConfig) => {
      devServerConfig.https = {
        key,
        cert,
      }
      return devServerConfig
    },
  }
}
