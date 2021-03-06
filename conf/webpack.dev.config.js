const merge = require('webpack-merge');
const webpack = require('webpack');
const os = require('os');
const ip = require('ip');

const baseWebpackConfig = require('./webpack.base.config.js');

module.exports = merge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dev',
        host: os.type() === 'Windows_NT' ? ip.address() : '0.0.0.0',
        open: true,
        hot: true,
        disableHostCheck: true,
        openPage: '',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
