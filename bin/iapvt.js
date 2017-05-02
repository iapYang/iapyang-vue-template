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

let cmd = process.argv[2];

if (commands.has(cmd)) {
    process.argv.splice(2, 1);
} else {
    cmd = defaultCommand;
}

let commandLine = '';
let fileName = '';

switch (cmd) {
    case 'dev':
        fileName = path.join(__dirname, '../conf/webpack.dev.config.js');
        commandLine = `webpack-dev-server --progress --colors --config ${fileName}`;
        break;
    case 'build':
        fileName = path.join(__dirname, '../conf/webpack.dev.config.js');
        commandLine = `webpack-dev-server --progress --colors --config ${fileName}`;
        break;
    default:
        break;
}

shell.exec(commandLine, (code, stdout, stderr) => {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
});
