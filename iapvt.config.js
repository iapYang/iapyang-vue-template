const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cliPath: 'tmp',
    title: 'Index',
    bundle: {
        path: path.resolve('./dev/component/App.vue'),
        name: 'app',
    },
    template: path.resolve(__dirname, './dev/view/demo.html'),
    htmlsOptions: {
        type: 'combine',
        series: [{
            template: path.resolve(__dirname, './dev/view/demo.html'),
            title: 'demo',
            name: 'demo.html',
        }],
    },
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
};
