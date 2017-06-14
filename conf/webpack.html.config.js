const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../conf/index.template.ejs'),
            title: 'My Template',
            inject: 'body',
            favicon: path.join(process.cwd(), './dev/favicon.ico'),
            minify:{
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ],
};
