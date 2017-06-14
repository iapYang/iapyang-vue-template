const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config.js');

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../conf/index.template.ejs'),
            title: 'My Template',
            inject: 'body',
            favicon: path.join(process.cwd(), './dev/favicon.ico'),
            minify:{
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
        new CopyWebpackPlugin([
            {
                from: './dev/static',
                to: 'static',
            },
        ]),
    ],
});
