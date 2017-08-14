const path = require('path');

module.exports = {
    cliPath: 'tmp',
    title: 'Index',
    bundle: {
        path: path.resolve('./dev/component/App.vue'),
        name: 'app',
    },
};
