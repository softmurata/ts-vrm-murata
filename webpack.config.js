module.exports = {
  // development or production
  mode: 'development',
  devtool: 'eval-source-map',

  entry: './src/facetracking.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
