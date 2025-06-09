const merge = require('webpack-merge')
const common = require('./webpack.common')
const config = require('./webpack.config')

const devConfig = {
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
        allowedHosts: "all",
        host: "0.0.0.0",
        port: 8080,
    }
};

module.exports = merge(common, config, devConfig);