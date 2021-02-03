const path = require("path")
//commonjs
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,"dist"),//获取绝对路径
    filename:'bundle.js'
  }
}