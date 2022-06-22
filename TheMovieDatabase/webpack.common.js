const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            }
            ]
        }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
        }),
        new CopyWebpackPlugin({
        patterns: [
            {
            from: path.resolve(__dirname, 'src/asset/'),
            to: path.resolve(__dirname, 'dist/'),
            },
            ],
        }),
    ]
}