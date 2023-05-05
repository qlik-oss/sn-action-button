#! /usr/bin/env node
"use strict";
var path = require("path");
var fs = require("fs");
var validate = require("./validate-nebula-package");
var p = path.resolve(process.cwd(), "package.json");
var cleanedPkg = validate(require(p), process.cwd()); // eslint-disable-line
fs.writeFileSync(p, cleanedPkg);
