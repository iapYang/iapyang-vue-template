const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

const customizePath = path.join(process.cwd(), './iapvt.config.js');
const customizeConfig =
    fs.existsSync(customizePath) ? require(customizePath) : {};

const defaultHtml = {
    template: path.join(__dirname, '../conf/index.template.ejs'),
    title: 'index',
    name: 'index',
};

let htmls;

if (customizeConfig.htmlsOptions) {
    if (customizeConfig.htmlsOptions.type === 'cover') {
        htmls = customizeConfig.htmlsOptions.series.map(html => {
            const sep = path.sep(html.template);

            return merge(defaultHtml, html);
        });
    } else {
        htmls = [defaultHtml, ...customizeConfig.htmlsOptions.series];
    }
} else {
    htmls = [{
        template: customizeConfig.template,
        title: customizeConfig.title || 'index',
        name: 'index',
    }];
}

module.exports = merge({
    cliPath: 'dev',
    bundle: {
        path: './dev/component/src/index.js',
        name: 'library',
    },
    htmls,
    rules: [{}],
}, customizeConfig);
