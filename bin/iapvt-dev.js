const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./iapvt-base.js');

module.exports = merge(baseWebpackConfig, {
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
