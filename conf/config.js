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
    entry: [path.resolve(__dirname, '../dev/script/index.js')],
};

let htmls;

console.log(customizeConfig.htmlsOptions);

if (customizeConfig.htmlsOptions) {
    if (customizeConfig.htmlsOptions.type === 'cover') {
        htmls = [...customizeConfig.htmlsOptions.series.map(html => merge(defaultHtml, html))];
    } else {
        htmls = [defaultHtml, ...customizeConfig.htmlsOptions
            .series.map(html => merge(defaultHtml, html))];
    }
} else {
    htmls = [{
        template: customizeConfig.template,
        title: customizeConfig.title || 'index',
        name: 'index',
        entry: [defaultHtml.entry],
    }];
}

// generate js name
htmls.forEach(html => {
    html.entryArray = html.entry.map(entry => {
        const parse = path.parse(entry);

        return {
            path: entry,
            name: parse.name,
        };
    });

    console.log('html', html);
});

module.exports = merge({
    cliPath: 'dev',
    bundle: {
        path: './dev/component/src/index.js',
        name: 'library',
    },
    htmls,
    rules: [{}],
}, customizeConfig);
