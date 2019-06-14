const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,
  configureWebpack: {
    performance: {
      hints: false,
    },
  },
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
}
