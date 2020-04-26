/* eslint-disable no-undef */
require('dotenv').config()
module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    API_URL: process.env.API_URL
  }
}

/*
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
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
*/
