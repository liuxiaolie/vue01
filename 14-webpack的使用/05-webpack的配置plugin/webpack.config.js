const path = require("path")
const webpack = require("webpack")
const htmlwenpackplugin =  require("html-webpack-plugin")
//commonjs
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,"dist"),//获取绝对路径
    filename:'bundle.js'
  },
  plugins:[
new webpack.BannerPlugin("最终版权归刘小列所有"),
      //在打包dist目录下生成index.html文件
      new htmlwenpackplugin({
        template:'index.html'
      })
  ],
  module: {
    rules: [
      {
        test: /.vue$/,
        use:['vue-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  //搭建本地服务器，安装 webpack-dev-server插件
  devServer:{
    contentBase:'./dist',
    inline:true
  }

}