import serve from "@nebula.js/cli-serve";
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";

import events from "./utils/events";
import createPlaywright from "./utils/playwright";
import createNebulaRoutes from "./utils/routes";

const paths = {
  artifacts: path.join(__dirname, "__artifacts__"),
  fixtures: path.join(__dirname, "__fixtures__"),
};

test.describe("sn action button: Rendering tests", () => {
  let nebulaServer;
  let playwright;
  let route;

  test.beforeAll(async () => {
    nebulaServer = await serve({
      entry: path.resolve(__dirname, "../../"),
      type: "sn-action-button",
      open: false,
      build: false,
      themes: [],
      fixturePath: "test/rendering/__fixtures__",
    });

    route = createNebulaRoutes(nebulaServer.url);
  });

  test.afterAll(async () => {
    nebulaServer.close();
  });

  test.beforeEach(({ page }) => {
    events.addListeners(page);
  });

  test.afterEach(({ page }) => {
    events.removeListeners(page);
  });

  fs.readdirSync(paths.fixtures).forEach((file) => {
    const name = file.replace(".fix.js", "");
    const fixturePath = `./${file}`;

    test(name, async ({ page }) => {
      playwright = createPlaywright(page);
      const renderUrl = await route.renderFixture(fixturePath);
      // Open page in Nebula which renders fixture
      await playwright.open(renderUrl);
      // Capture screenshot
      const img = await playwright.screenshot();
      // Compare screenshot with baseline image
      expect(img).toMatchSnapshot(`${name}.png`);
    });
  });
});
