const merge = require('webpack-merge')
const common = require('./build-tools/webpack.common')

module.exports = merge( common, {
    mode: 'production'
})