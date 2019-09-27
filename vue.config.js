const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  // 打包输出文件夹名字
  publicPath: '/',
  outputDir: process.env.VUE_APP_OUTPUTDIR, // 根据环境去打包
  // 关闭打包生成.map文件
  productionSourceMap: false
}
