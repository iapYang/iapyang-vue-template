const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');
const fs = require('fs');

const baseWebpackConfig = require('./webpack.base.config.js');

const customizePath = path.join(process.cwd(), './config/webpack.bundle.config.js');

const customizeOptions = fs.existsSync(customizePath) ? require(customizePath) : {};

module.exports = merge(baseWebpackConfig, {
    entry: ['babel-polyfill', './dev/component/src/index.js'],
    output: {
        path: path.join(process.cwd(), 'bundle'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
    ],
}, customizeOptions);
