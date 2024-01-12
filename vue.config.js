const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
  devServer: {
    open: true, //配置自动启动浏览器
    host: "localhost",
    port: 8082,
    // 配置跨域-请求后端的接口
    // proxy: {
    //   // "/api": {
    //   //   target: "http://172.20.10.3:80", //对应自己的接口
    //   //   changeOrigin: true,
    //   //   ws: true,
    //   //   pathRewrite: {
    //   //     "^/api": ""
    //   //   }
    //   // }
    // }
  }
}
