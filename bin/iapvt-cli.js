const path = require('path');
const fs = require('fs');
const ncp = require('ncp');

ncp.limit = 16;

function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file, index) => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

function arrayToObject(array) {
    return array.map(item => {
        return {
            default: item,
            replace: item.replace('// ', ''),
        };
    });
}

const templatePath = path.join(__dirname, '../template');
const destPath = path.join(process.cwd(), './dev');
const indexJsPath = path.join(destPath, './script/index.js');
const routerPath = path.join(destPath, './router.js');
const storePath = path.join(destPath, './store');

const replacement = {
    router: arrayToObject([
        `// import router from '../router';`,
        `// router,`,
    ]),
    store: arrayToObject([
        `// import store from '../store';`,
        `// store,`,
    ]),
};

function replaceIndexJs(name) {
    const fid = fs.openSync(indexJsPath, 'rs+');
    let content = fs.readFileSync(indexJsPath, 'utf-8');

    replacement[name].forEach(item => {
        content = content.replace(item.default, item.replace);
    });

    fs.writeFileSync(indexJsPath, content, {
        encoding: 'utf-8',
    });

    fs.closeSync(fid);
}

if (fs.existsSync(destPath)) {
    return console.error('The diretory exits! Delete it first!');
}

ncp(templatePath, destPath, err => {
    if (err) {
        return console.error(err);
    }
    console.info('template copy done!');

    const cmds = new Set(process.argv);

    if (cmds.has('-r')) {
        fs.unlinkSync(routerPath);
    } else {
        replaceIndexJs('router');
    }

    if (cmds.has('-s')) {
        deleteFolderRecursive(storePath);
    } else {
        replaceIndexJs('store');
    }
});


