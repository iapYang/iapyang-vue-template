const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Options
module.exports = {
    rules: [{
        test: /\.less$/,
        // in order to extra style file when build
        // you need download less & less-loader modules by yourself
        // standard css compile rule demo
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
};
