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
    usRouter: `store,`,
};

function rmdir(dir) {
    const list = fs.readdirSync(dir);
    for (let i = 0; i < list.length; i++) {
        const filename = path.join(dir, list[i]);
        const stat = fs.statSync(filename);

        if (filename === '.' || filename === '..') {
            // pass these files
        } else if (stat.isDirectory()) {
            // rmdir recursively
            rmdir(filename);
        } else {
            // rm fiilename
            fs.unlinkSync(filename);
        }
    }
    fs.rmdirSync(dir);
}

function replaceIndex(name) {
    // name is Store or Router
    const fid = fs.openSync(indexPath, 'w+');
    const content = fs.readFileSync(indexPath, 'utf-8');

    console.log(content);

    const replacement = content.replace(`// im${name}`, replaceContent[`im${name}`]).replace(`// us${name}`, replaceContent[`us${name}`]);

    console.log(replacement);

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
    console.log('template copy done!');

    const cmds = new Set(process.argv);

    if (cmds.has('-r')) {
        fs.unlinkSync(routerPath);
    } else {
        replaceIndex('Router');
    }
     
    // if (cmds.has('-s')) {
    //     fs.rmdir(storePath);
    // } else {
    //     replaceIndex('Store');
    // }
});


