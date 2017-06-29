const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const config = require('./config.js');

module.exports = merge(baseWebpackConfig, {
    entry: ['babel-polyfill', './dev/component/src/index.js'],
    output: {
        path: path.join(process.cwd(), 'bundle'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
}, config.bundle);
