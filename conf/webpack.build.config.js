const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config.js');

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './dev/static',
                to: 'static',
            },
        ]),
    ],
});
