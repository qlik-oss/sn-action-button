var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// playwright.config.ts
import { devices } from "@playwright/test";
var config = {
    use: {
        // Run the browser in headless mode
        // headless: false,
        // Record trace for each test, but remove it from successful test runs.
        trace: "retain-on-failure",
    },
    // Look for test files in the "test/rendering" directory, relative to this configuration file
    testDir: "test/rendering",
    testMatch: /.*\.render\.ts/,
    outputDir: "./test/rendering/artifacts/",
    reporter: [
        ["list"],
        [
            "html",
            {
                outputFolder: "./test/rendering/test-report",
                open: process.env.CI ? "never" : "on-failure",
            },
        ],
    ],
    // Forbid test.only on CI
    forbidOnly: !!process.env.CI,
    // The maximum number of retry attempts per test, two retries on CI
    retries: process.env.CI ? 2 : 0,
    // Limit the number of workers
    workers: 1,
    // Multiple "projects" can run your tests in multiple browsers and configurations
    projects: [
        {
            name: "chromium",
            use: __assign({}, devices["Desktop Chrome"]),
        },
        {
            name: "firefox",
            use: __assign({}, devices["Desktop Firefox"]),
        },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
    ],
    expect: {
        toMatchSnapshot: { threshold: 0.1 },
    },
};
export default config;
