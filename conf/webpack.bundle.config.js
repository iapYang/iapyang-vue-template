const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config.js');
const {bundle} = require('./config.js');

module.exports = merge(baseWebpackConfig, {
    entry: ['babel-polyfill', bundle.path],
    output: {
        path: path.join(process.cwd(), 'bundle'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: bundle.name,
    },
});
