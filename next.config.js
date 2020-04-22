require('dotenv').config()

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
}


module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })

    return config
  }
}