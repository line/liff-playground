// eslint-disable-next-line @typescript-eslint/no-var-requires
const devcert = require('devcert')

module.exports = async () => {
  let key = undefined
  let cert = undefined
  if (process.env.HTTPS === 'true') {
    const certs = await devcert.certificateFor('localhost')
    key = certs.key
    cert = certs.cert
  }

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
      if (process.env.HTTPS === 'true') {
        devServerConfig.https = {
          key,
          cert,
        }
      }
      return devServerConfig
    },
  }
}
