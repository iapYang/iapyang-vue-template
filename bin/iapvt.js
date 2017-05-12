#!/usr/bin/env node

const shell = require('shelljs');
const path = require('path');

const defaultCommand = 'dev';

const commands = new Set([
    defaultCommand,
    'build',
    'bundle',
    'gh',
]);
u

let cmd = process.argv[2];

if (commands.has(cmd)) {
    process.argv.splice(2, 1);
} else {
    cmd = defaultCommand;
}

let cmdLine = '';
let fileName = '';

if (cmd === 'gh') {
    fileName = path.join(__dirname, `../conf/deploy.js`);
    cmdLine = `node ${fileName}`;
} else {
    const cmdTitle = cmd === defaultCommand ? 'webpack-dev-server' : 'webpack';
    fileName = path.join(__dirname, `../conf/webpack.${cmd}.config.js`);
    cmdLine = `${cmdTitle} --progress --colors --config ${fileName}`;
}

shell.exec(cmdLine, (code, stdout, stderr) => {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
});
