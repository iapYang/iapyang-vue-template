const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');

const htmlWebpackPlugins = config.htmls.map(html => {
    console.log(html);

    return new HtmlWebpackPlugin({
        template: html.template,
        title: html.title,
        filename: `${html.name}.html`,
        inject: 'body',
        favicon: path.join(process.cwd(), './dev/favicon.ico'),
        minify: {
            removeComments: true,
            collapseWhitespace: true,
        },
    });
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
        ...htmlWebpackPlugins,
        new ExtractTextPlugin('index.css'),
        uglifyJsPlugin,
    ],
    development: [
        ...commonsChunkPlugins,
        ...htmlWebpackPlugins,
    ],
    bundle: [
        uglifyJsPlugin,
    ],
};
