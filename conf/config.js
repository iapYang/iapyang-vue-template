const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

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
    rules:[{}],
}, customizeConfig);
