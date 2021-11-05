const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        index: './src/index.js'
    },  

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),   
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
        
    ],

    devServer: {
        static: './dist',
        hot: true
    },
}