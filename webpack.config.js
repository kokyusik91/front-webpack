// webpack.config.js
// `webpack` command will pick up this config setup by default

// node.js path라는 문법을 들고와서 path라는 변수에 넣어 주었다.





// webpack 해석하기


var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }

// webpack devserver

// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'none',
//   entry: './src/devServer.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'bundling'),
//   },
//   devServer: {
//     port: 9000,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
//       template: 'webpack-devserver.html'
//     }),
//   ],
// };




















// // css loader 실습
// var path = require('path');
// var webpack = require('webpack');

// var MiniCssExtractPlugin = require("mini-css-extract-plugin");


// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [{loader : MiniCssExtractPlugin.loader}, 'css-loader']
//       },
//       // 바벨로더를 돌리겠다.
//       {
//         test : /\.js$/,
//         use : ['babel-loader']
//       }
//     ]
//   },
//   plugins : [
//     new MiniCssExtractPlugin(),
//     new webpack.ProgressPlugin()

//   ]
// }






// 2번째 실습
// var path = require('path');

// module.exports = {
// 	mode: 'none',
// 	entry: './src/app.js',
// 	output: {
// 			path: path.resolve(__dirname, 'build'),
// 			filename: '[chunkhash].hello.bundle.js'
// 	},
// 	module: {
// 		rules: [{
// 			test: /\.m?js$/,
// 			exclude: /(node_modules|bower_components)/,
// 			use: {
// 				loader: 'babel-loader',
// 				options: {
// 					presets: ['@babel/preset-env']
// 				}
// 			}
// 		}]
// 	},
// 	stats: {
// 			colors: true
// 	},
// 	devtool: 'source-map'
// };



// 이전 실습...
// var path = require('path');

// module.exports = {
//   mode: 'none',
//   // entry 파일을 돌려서.......
//   entry: './src/kks.js',
//   // 객체 형태로 전달한다.
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'public')
//   }
// };