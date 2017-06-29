#!/usr/bin/env node

const shell = require('shelljs');
const path = require('path');

const defaultCommand = 'dev';

const cmds = new Set([
    defaultCommand,
    'build',
    'bundle',
    'gh',
    'cli',
]);

let cmd = process.argv[2];

if (cmds.has(cmd)) {
    process.argv.splice(2, 1);
} else {
    cmd = defaultCommand;
}

const webpackCmds = new Set([
    defaultCommand,
    'build',
    'bundle',
]);

const nodeStatus = {
    defaultCommand: 'development',
    build: 'production',
    bundle: 'bundle',
};

if (webpackCmds.has(cmd)) {
    const cmdName = cmd === 'dev' ? 'webpack-dev-server' : 'webpack';
    const fileName = path.join(__dirname, `../conf/webpack.${cmd}.config.js`);
    const command = `NODE_ENV=${nodeStatus.cmd} ${cmdName} --progress --colors --config ${fileName}`;

    shell.exec(command, (code, stdout, stderr) => {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    });
} else {
    require(`./iapvt-${cmd}.js`);
}
