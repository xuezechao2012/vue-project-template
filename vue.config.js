'use strict'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  // 打包输出文件夹名字
  publicPath: '/',
  outputDir: process.env.VUE_APP_OUTPUTDIR, // 根据环境去打包
  // 生产环境的 source map，加速生产环境构建
  productionSourceMap: false,
  chainWebpack: config => {
    if (isProduction) {
      // 删除预加载
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  },
  configureWebpack: config => {
    // 为生产环境修改配置...
    if (isProduction) {
      config.plugins.push(
        //生产环境压缩J S
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
            compress: {
              drop_debugger: true, // 删除所有的 `debugger` 语句
              drop_console: true // 删除所有的 `console` 语句
            }
          },
          sourceMap: false,
          parallel: true //开启并行压缩，充分利用cpu
        })
      )
    }
  }
}
