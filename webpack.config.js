const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'cheap-source-map',
  entry: './src/index.js',
  stats: 'minimal',
  output: {
    "path": __dirname + '/dist',
    "filename": "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
};
