#! /usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// bump qext file
const p = path.resolve(process.cwd(), 'package.json');
const pkg = require(p); // eslint-disable-line import/no-dynamic-require
const vizName = pkg.name.replace('@nebula.js/', '');
const contents = {
  name: vizName,
  description: pkg.description,
  author: pkg.author,
  icon: 'asdf',
  type: 'visualization',
  version: pkg.version,
  supernova: true,
};

fs.writeFileSync(path.resolve(process.cwd(), `assets/${vizName}.qext`), JSON.stringify(contents, null, 2));

// bump spec file
execSync('yarn spec');

// commit
execSync('git commit -am  "chore: bump spec and qext version"');
