const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.config.js');
const htmlWebpackConfig = require('./webpack.html.config.js');

module.exports = merge(baseWebpackConfig, htmlWebpackConfig, {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dev',
        host: '0.0.0.0',
        open: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
