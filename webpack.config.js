const path = require('path');

module.exports = {
  entry: './scripts/main.ts',
  devtool: 'inline-source-map',
  watch: true,
  optimization: {
    minimize: true
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include:[path.resolve(__dirname,'scripts')],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};