// Inform Webpack to include js in the bundle
const CWP = require('copy-webpack-plugin')
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
    hot: true,
    historyApiFallback: true //For some reason, this allows to browser /thoughts, CSR??
  },
    plugins: [
        new CWP({
          patterns: [
            {from: 'public', to: 'public'}
          ]
        })
      ]
};