const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const postcssConfig = require('./postcss.config.js');
const config = require('./config.js');
const babelOptions = require('./babel');

const isProd = process.env.NODE_ENV === 'production';

const entry = {};
// sync all js files
const jsFiles = glob.sync('./dev/script/*.js');
jsFiles.forEach((file, i) => {
    entry[path.basename(file, '.js')] = ['babel-polyfill', file];
});

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

const plugins = {
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

module.exports = {
    entry,
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'script/[name].[hash].js',
    },
    module: {
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
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
        ],
    },
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
