const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config.js');
const htmlWebpackConfig = require('./webpack.html.config.js');

module.exports = merge(baseWebpackConfig, htmlWebpackConfig, {
    plugins: [
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
