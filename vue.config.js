
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {

  // Configure third-party components that are ignored in packaging, introduce them using CDN, and accelerate the first loading speed
  chainWebpack: config => {
    config.externals({
      vue: "Vue",
      axios: "axios",
      "element-ui": "ELEMENT",
      'vue-router': 'VueRouter',
      'vue-i18n': 'VueI18n',
      'vuex': 'Vuex',
      'dayjs': 'dayjs',
      'ethers': 'ethers',
      'numeral': 'numeral',
      'bignumber.js': 'BigNumber',
    });
  },
  // Do not check eslint when saving
  lintOnSave: false,
  productionSourceMap: false,
  // Packaging path
  publicPath: './',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  devServer: {
    disableHostCheck: true,
    open: true,
    hot: true,
    proxy: {
      // '/api': {
      //   target: 'https://apoy.fi',
      //   changeOrigin: true,
      //   ws: true,
      // },
      '/api/43113': {
        target: 'http://<dev.server.ip>', // To replace
        changeOrigin: true,
        ws: true,
      },
      '/api/43114': {
        target: 'https://app.apoy.fi',
        changeOrigin: true,
        ws: true,
      },
    }
  },
  configureWebpack: {
    devtool: 'cheap-module-source-map',
    // devtool: 'source-map',
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
        // deleteOriginalAssets: true, // If want to delete the source file
      })
    ]
  }
}