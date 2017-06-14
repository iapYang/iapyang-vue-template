const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config.js');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../conf/index.template.ejs'),
            title: config.title,
            inject: 'body',
            favicon: path.join(process.cwd(), './dev/favicon.ico'),
            chunksSortMode: (chunck1, chunck2) => {
                if (chunck1.names[0] > chunck2.names[0]) {
                    return 1;
                }
                if (chunck1.names[0] < chunck2.names[0]) {
                    return -1;
                }

                return 0;
            },
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ],
};
