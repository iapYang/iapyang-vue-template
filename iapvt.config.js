const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cliPath: 'tmp',
    bundle: {
        path: path.resolve('./dev/component/App.vue'),
        name: 'app',
    },
    htmlsOptions: [{
        title: 'Index',
    }, {
        template: path.resolve(__dirname, './dev/view/demo.html'),
        title: 'demo',
        name: 'demo/index',
        entry: [path.resolve(__dirname, './dev/script/demo.js')],
    }],
    htmlsHandleType: 'combine',
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
