var path = require('path');


module.exports = {
  mode: 'none',
  entry: './src/kks.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  }
};