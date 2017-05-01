#!/usr/bin/env node

const join = require('path').join;

const defaultCommand = 'dev';

const commands = new Set([
    defaultCommand,
    'build',
    'bundle',
]);

let cmd = process.argv[2];

if (commands.has(cmd)) {
    process.argv.splice(2, 1);
} else {
    cmd = defaultCommand;
}

const bin = join(__dirname, `iapvt-${cmd}`);

require(bin);
