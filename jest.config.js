module.exports = {
  testEnvironment: "jsdom",
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
    "src/style-defaults",
  ],
  collectCoverageFrom: ["src/**"],
};
