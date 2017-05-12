const path = require('path');
const fs = require('fs');
const ncp = require('ncp');

ncp.limit = 16;

const templatePath = path.join(__dirname, '../template');
const destPath = path.join(process.cwd(), './tmp');
const indexPath = path.join(destPath, './script/index.js');
const routerPath = path.join(destPath, './router.js');
const storePath = path.join(destPath, './store');

const replaceContent = {
    imStore: `import store from '../store/index';`,
    usStore: `store,`,
    imRouter: `import router from '../router';`,
    usRouter: `router,`,
};

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

function replaceIndex(name) {
    // name is Store or Router
    const fid = fs.openSync(indexPath, 'rs+');
    const content = fs.readFileSync(indexPath, 'utf-8');

    const replacement = content.replace(`// im${name}`, replaceContent[`im${name}`]).replace(`// us${name}`, replaceContent[`us${name}`]);

    fs.writeFileSync(indexPath, replacement, {
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
        replaceIndex('Router');
    }

    if (cmds.has('-s')) {
        deleteFolderRecursive(storePath);
    } else {
        replaceIndex('Store');
    }
});


