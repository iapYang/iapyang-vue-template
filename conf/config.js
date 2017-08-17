const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

const isProd = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const customizePath = path.join(process.cwd(), './iapvt.config.js');
const customizeConfig =
    fs.existsSync(customizePath) ? require(customizePath) : {};

module.exports = merge({
    cliPath: 'dev',
    bundle: {
        path: './dev/component/src/index.js',
        name: 'library',
    },
    title: 'Index',
    rules: [{
        test: /\.less$/,
        use: isProd ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
        }) : [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader',
        ],
    }],
}, customizeConfig);
