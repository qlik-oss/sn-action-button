module.exports = {
  testEnvironment: 'jsdom',
  testRegex: 'src/.+\\.(test|spec)\\.[jt]sx?$',
  coverageThreshold: {
    global: {
      lines: 78,
    },
  },
  coveragePathIgnorePatterns: ['src/__tests__/default-button-props.js'],
  collectCoverageFrom: ['src/**'],
};
