"use strict";
/* eslint-disable no-console */
var path = require("path");
var os = require("os");
var fs = require("fs-extra");
function copyExt() {
    var targetPath = [os.homedir(), "Qlik", "Sense", "Extensions", "sn-action-button-ext"];
    if (os.platform() === "win32") {
        targetPath.splice(1, 0, "Documents");
    }
    var target = path.resolve.apply(path, targetPath);
    fs.copySync(path.resolve(process.cwd(), "sn-action-button-ext"), target);
    console.log("Copied into Extensions folder!");
}
if (require.main === module) {
    // execute if running directly from CLI
    copyExt();
}
module.exports = copyExt;
