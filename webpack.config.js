// webpack.config.js
// `webpack` command will pick up this config setup by default

// node.js path라는 문법을 들고와서 path라는 변수에 넣어 주었다.
var path = require('path');

module.exports = {
  mode: 'none',
  // entry 파일을 돌려서.......
  entry: './src/kks.js',
  // 객체 형태로 전달한다.
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  }
};