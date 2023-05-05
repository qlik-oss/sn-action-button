"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fs = require("fs");
var path = require("path");
var validateScripts = function (pkg) {
    if (pkg.scripts.build !== "node ./tools/build.js --core --ext") {
        throw new Error("package.json does not have correct build script");
    }
    if (pkg.scripts.prepublishOnly !== "NODE_ENV=production yarn run build && yarn spec") {
        throw new Error("package.json does not have correct prepublishOnly script");
    }
    if (pkg.scripts.prepack !== "./tools/prepare-sn-pack.js") {
        throw new Error("package.json does not have correct prepack script");
    }
};
var validatePackageJsonContent = function (pkg) {
    // == VALIDATE package.json contents ==
    // package name
    // eslint-disable-next-line no-console
    console.log(pkg.name);
    if (!pkg.name.match(/^@nebula\.js\/sn-/)) {
        throw new Error("Bad package name. Package name should match '@nebula.js/sn-'");
    }
    if (!pkg.scripts) {
        throw new Error("package.json does not have any build script");
    }
    if (/--native/.test(pkg.scripts.build)) {
        throw new Error("package.json build script is not allowed to use '--native' for a chart that is not a known native chart in Qlik Sense");
    }
    validateScripts(pkg);
};
var validateFiles = function (pkg) {
    var whitelist = [
        "name",
        "version",
        "description",
        "author",
        "license",
        "keywords",
        "publishConfig",
        "repository",
        "files",
        "engines",
        "main",
        "scripts",
        "devDependencies",
        "peerDependencies",
    ];
    // files
    var mustHaveFiles = ["dist", "core", "api-specifications", "sn-action-button-ext"];
    var allowedFiles = __spreadArray(["assets"], mustHaveFiles, true);
    var missing = mustHaveFiles.filter(function (f) { return (pkg.files || []).indexOf(f) === -1; });
    if (missing.length) {
        throw new Error("package.json is missing files: ".concat(missing.join(", ")));
    }
    var violates = (pkg.files || []).filter(function (f) { return allowedFiles.indexOf(f) === -1; });
    if (violates.length) {
        throw new Error("package.json must not contain files: ".concat(violates.join(", ")));
    }
    Object.keys(pkg).forEach(function (key) {
        if (whitelist.indexOf(key) === -1) {
            delete pkg[key];
        }
    });
};
// known charts that are native (build time) in Sense
var validate = function (pkg, dir) {
    validatePackageJsonContent(pkg);
    validateFiles(pkg);
    var cleanedPkg = JSON.stringify(pkg, null, 2);
    // version format
    if (!/\d+\.\d+\.\d+/.test(pkg.version)) {
        throw new Error("Bad package version. Package version should match x.y.z");
    }
    // author
    if (pkg.author !== "QlikTech International AB") {
        throw new Error("Author must be 'QlikTech International AB'");
    }
    // license
    if (pkg.license !== "MIT") {
        throw new Error("License must be MIT");
    }
    if (!fs.existsSync(path.resolve(dir, "LICENSE"))) {
        throw new Error("Missing LICENSE file");
    }
    // readme
    if (!fs.existsSync(path.resolve(dir, "README.md"))) {
        throw new Error("Missing README.md file");
    }
    return cleanedPkg;
};
module.exports = validate;
