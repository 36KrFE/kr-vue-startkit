const path = require('path');
module.exports = {
  lintOnSave: true,
  baseUrl: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8988,
    proxy: {
      'operation': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack:config => {
    // config.entry = './src/main.js'
    config.resolve = {
      extensions:['.js', '.vue', '.json'],
      alias: {
        '@': path.resolve(__dirname,'src'),
      }
    };
  }
};
