const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssConfig = require('./postcss.config.js');
const babelOptions = require('./babel');
const plugins = require('./webpack.plugin.config');
const config = require('./config');

const isProd = process.env.NODE_ENV === 'production';

const entry = {};

// donnot forget when muilty js came
config.htmlsOptions.forEach(option => {
    option.entryArray.forEach(obj => {
        entry[obj.name] = obj.path;
    });
});

module.exports = {
    entry,
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'script/[name].[hash].js',
    },
    module: merge.smart({
        rules: [
            {
                test: /\.js(x)?$/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions,
                },
                exclude: /node_module/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: isProd ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                }) : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'static/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'static/[name].[ext]',
                    },
                }],
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        postcss: postcssConfig.plugins,
                        loaders: {
                            sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
                            scss: isProd ? ExtractTextPlugin.extract({
                                use: [
                                    'css-loader',
                                    'postcss-loader',
                                    'sass-loader',
                                ],
                                fallback: 'vue-style-loader',
                            }) : 'style-loader!css-loader!postcss-loader!sass-loader',
                            js: `babel-loader?${JSON.stringify(babelOptions)}`,
                        },
                        cssModules: {
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true,
                        },
                    },
                },
            },
        ],
    }, {
        rules: config.rules,
    }),
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
        },
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcssConfig.plugins,
            },
        }),
        ...plugins[process.env.NODE_ENV],
    ],
};
