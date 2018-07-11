const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(jpe?g|png|gif|svg)$/i, use: [{
                   loader: 'file-loader',
                   options: {
                       name: '[path][name].[ext]',
                       context: 'app/'
                   }
               }]},
            {test: /\.html$/, use: [{
                loader: "html-loader",
                options: {
                    ignoreCustomFragments: [/\{\{.*?}}/],
                    root: path.resolve(__dirname, 'assets'),
                    attrs: ['img:src', 'link:href']
                }
                }]},
           /* {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 100
                }
            }*/
        ]
    },
    mode: "development",
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};