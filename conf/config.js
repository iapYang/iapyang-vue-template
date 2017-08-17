const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

const customizePath = path.join(process.cwd(), './iapvt.config.js');
const customizeConfig =
    fs.existsSync(customizePath) ? require(customizePath) : {};

const defaultHtml = {
    template: path.join(__dirname, '../conf/index.template.ejs'),
    title: 'index',
    name: 'index.html',
};

let htmls;

if (customizeConfig.htmlsOptions) {
    if (customizeConfig.htmlsOptions.type === 'cover') {
        htmls = customizeConfig.htmlsOptions.series.map(html =>
            merge(defaultHtml, html)
        );
    } else {
        htmls = [defaultHtml, ...customizeConfig.htmlsOptions.series];
    }
} else {
    htmls = [defaultHtml];
}

const combinedConfig = merge({
    cliPath: 'dev',
    bundle: {
        path: './dev/component/src/index.js',
        name: 'library',
    },
    htmls,
    rules: [{}],
}, customizeConfig);

module.exports = combinedConfig;
