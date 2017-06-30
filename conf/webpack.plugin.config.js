const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, '../conf/index.template.ejs'),
    title: config.title,
    inject: 'body',
    favicon: path.join(process.cwd(), './dev/favicon.ico'),
    minify: {
        removeComments: true,
        collapseWhitespace: true,
    },
});

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
        warnings: false,
        drop_console: true,
    },
});

const commonsChunkPlugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks(module) {
            return module.context && module.context.includes('node_modules');
        },
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest', // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),
];

module.exports = {
    production: [
        ...commonsChunkPlugins,
        htmlWebpackPlugin,
        new ExtractTextPlugin('index.css'),
        uglifyJsPlugin,
    ],
    development: [
        ...commonsChunkPlugins,
        htmlWebpackPlugin,
    ],
    bundle: [
        uglifyJsPlugin,
    ],
};
