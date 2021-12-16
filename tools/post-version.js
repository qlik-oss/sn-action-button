#! /usr/bin/env node

const { execSync } = require('child_process');

execSync('yarn spec');
execSync('git commit -am  "chore: bump spec version"');
execSync('git push');
