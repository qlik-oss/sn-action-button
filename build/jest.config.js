"use strict";
module.exports = {
    testEnvironment: "jest-environment-jsdom",
    testRegex: "src/.+\\.(test|spec)\\.[jt]sx?$",
    setupFilesAfterEnv: ["./jest.setup.js"],
    coverageThreshold: {
        global: {
            lines: 78,
        },
    },
    coveragePathIgnorePatterns: [
        "src/__tests__/default-button-props.js",
        "src/data.js",
        "src/utils/lui-icons",
        "src/style-defaults",
    ],
    collectCoverageFrom: ["src/**"],
    jest: {
        preset: "ts-jest",
    },
};
// module.exports = {
//   testEnvironment: "jest-environment-jsdom",
//   testRegex: "src/.+\\.(test|spec)\\.[jt]sx?$",
//   setupFilesAfterEnv: ["./jest.setup.js"],
//   modulePathIgnorePatterns: ["<rootDir>/mashup-example"],
//   transformIgnorePatterns: ["<rootDir>/node_modules/(?!(@qlik-trial)/)"],
//   // coveragePathIgnorePatterns: ["src/__test__/generate-test-data.ts", "src/__test__/test-with-providers.tsx"],
// };
