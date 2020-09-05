const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
        }
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true //For some reason, this allows to browser /thoughts, CSR??
    }
})