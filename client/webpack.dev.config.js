/* eslint comma-dangle: ["error",
 {"functions": "never", "arrays": "only-multiline", "objects":
 "only-multiline"} ] */

const webpack = require('webpack')
const config = require('./webpack.base.config.js')

config.entry.push(
  './app/bundles/officialSite/startup/registration',
  './app/assets/styles/home/index.scss'
)

config.devtool = 'eval-source-map'

config.plugins.push(
  new webpack.EnvironmentPlugin({ 
    NODE_ENV: 'development',
    HOT: false,
  })
)

module.exports = config

console.log('\x1b[32m%s\x1b[0m', 'Webpack dev build for Rails');  // eslint-disable-line no-console
