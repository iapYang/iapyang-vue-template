const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

const customizePath = path.join(process.cwd(), './iapvt.config.js');
const customizeConfig =
    fs.existsSync(customizePath) ? require(customizePath) : {};

const defaultOption = {
    template: path.join(__dirname, '../conf/index.template.ejs'),
    title: 'index',
    name: 'index',
    entry: [path.resolve(process.cwd(), '../dev/script/index.js')],
};

if (!customizeConfig.htmlsOptions) {
    customizeConfig.htmlsOptions = [{}];
}

if (customizeConfig.htmlsHandleType === 'combine') {
    customizeConfig.htmlsOptions.unshift(defaultOption);
}

customizeConfig.htmlsOptions = customizeConfig
    .htmlsOptions.map(option => {
        return {
            template: option.template || defaultOption.template,
            title: option.title || defaultOption.title,
            name: option.name || defaultOption.name,
            entry: option.entry || defaultOption.entry,
        };
    });

// generate js name
customizeConfig.htmlsOptions.forEach(option => {
    option.entryArray = option.entry.map(entry => {
        const parse = path.parse(entry);

        return {
            path: entry,
            name: parse.name,
        };
    });
});

module.exports = merge({
    cliPath: 'dev',
    bundle: {
        path: './dev/component/src/index.js',
        name: 'library',
    },
    rules: [{}],
}, customizeConfig);
