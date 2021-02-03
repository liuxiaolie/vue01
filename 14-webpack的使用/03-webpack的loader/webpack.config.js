const path = require("path")
//commonjs
module.exports={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,"dist"),//获取绝对路径
    filename:'bundle.js',
    publicPath:'dist/' //大于这个limit时，加这个参数就可以找到图片了
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //加载loader时，从右向左加载
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",

          }
      ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于这个大小时，会以base64字符串形式加载图片，大于这个limit时，需要一个file-loader
              limit: 500000,
            },
          },
        ],
      },
    ]
  }

}