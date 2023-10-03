module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testRegex: "src/.+\\.(test|spec)\\.[jt]sx?$",
  coverageThreshold: {
    global: {
      lines: 78,
    },
  },
  coveragePathIgnorePatterns: [
    "src/__tests__/default-button-props.js",
    "src/data.js",
    "src/utils/lui-icons",
    "src/style-defaults.ts",
  ],
  collectCoverageFrom: ["src/**", "**/*.ts*"],
};
