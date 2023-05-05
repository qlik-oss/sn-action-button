"use strict";
// module.exports = {
//   env: {
//     test: {
//       presets: [["@babel/preset-env", { targets: { node: "current" } }]],
//     },
//   },
// };
module.exports = function (api) {
    var isTest = api.env("test");
    if (isTest) {
        return {
            presets: [
                ["@babel/preset-env", { targets: { node: "current" } }],
                "@babel/preset-react",
                "@babel/preset-typescript",
            ],
        };
    }
    return {
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
    };
};
