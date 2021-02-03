const path = require("path")
//commonjs
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,"dist"),//获取绝对路径
    filename:'bundle.js'
  },
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
  }

}