// Inform Webpack to include js in the bundle
module.exports = {
  entry: './src/index.js',
 resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true //For some reason, this allows to browser /thoughts, CSR??
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
