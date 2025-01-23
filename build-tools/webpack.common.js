const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
        {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
        }, {

            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
             test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }, {
            test: /(\.svg$|\.jpeg|\.pdf$)/,
            use: [
                {
                    loader: 'url-loader',
                }
            ]
        }
    ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/assets/images/eyelids.svg',
            title: 'Samuel Nishimwe - Official Site',
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname , '../', 'dist'),
    }
}