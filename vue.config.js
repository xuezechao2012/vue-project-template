const path = require('path')

module.exports = {
  // 打包输出文件夹名字
  outputDir: 'docs',
  // 预加载配置
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: []
    }
  },
  // 关闭打包生成.map文件
  productionSourceMap: false,
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
