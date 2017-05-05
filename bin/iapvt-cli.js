const path = require('path');
const fs = require('fs');
const ncp = require('ncp');

ncp.limit = 16;

const templatePath = path.join(__dirname, '../template');
const destPath = path.join(process.cwd(), './tmp');
const indexPath = path.join(destPath, './script/index.js');

const replaceContent = {
    imStore: `import store from '../store/index';`,
    usStore: `store,`,
    imRouter: `import router from '../router';`,
    usRouter: `store,`,
};

function replaceIndex(name) {
    // name is Store or Router
    fs.accessSync(indexPath);
    const content = fs.readFileSync(indexPath, 'utf-8');

    const replacement = content.replace(`// im${name}`, replaceContent[`im${name}`]).replace(`// us${name}`, replaceContent[`us${name}`]);
}

ncp(templatePath, destPath, err => {
    if (err) {
        return console.error(err);
    }
    console.log('template copy done!');

    fs.unlinkSync(path.join(destPath, './router.js'));
});


