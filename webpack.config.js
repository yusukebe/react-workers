module.exports = {
  target: "webworker",
  entry: "./index.js",
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env'],
      },
    }],
  },
}