const path = require('path');

/*
    before v0.6.0 
*/
const oldVersion = {
    template: path.resolve(__dirname, './dev/view/demo.html'),
    title: 'demo',
};

/*
    v0.6.0 
*/
const newVersion = {
    htmlsOptions: [{
        template: path.resolve(__dirname, './dev/view/demo.html'),
        title: 'demo',
        name: 'demo/index',
        entry: [path.resolve(__dirname, './dev/script/demo.js')],
    }],
    htmlsHandleType: 'combine',
};

/*
    Attenation! For update
    use old version as a demo
*/
module.exports = {
    htmlsOptions: [{
        // your template file path
        template: path.resolve(__dirname, './dev/view/demo.html'),
        // your html title
        title: 'demo',
    }],
};
