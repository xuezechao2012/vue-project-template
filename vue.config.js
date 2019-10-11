'use strict'
const path = require('path')
// const isProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 打包输出文件夹名字
  publicPath: './',
  outputDir: process.env.VUE_APP_OUTPUTDIR, // 根据环境去打包
  // 生产环境的 source map，加速生产环境构建
  productionSourceMap: false,
  chainWebpack: config => {
    // lodash打包优化
    config.module
      .rule('js')
      .test(/\.js$/)
      .exclude.add('/node_modules/')
      .end()
      .use('babel-loader')
      .options({
        plugins: ['lodash'],
        presets: [['@babel/env', { targets: { node: 6 } }]]
      })
      .end()
    // 压缩代码
    config.optimization.minimize(true)
    // 拆包处理
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        elementUI: {
          name: 'chunk-elementUI', // 单独将 elementUI 拆包
          priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('src/components'), // can customize your rules
          minChunks: 3, //  minimum common number
          priority: 5,
          reuseExistingChunk: true
        }
      }
    })
  }
}
