/* eslint-disable no-undef */
const artifacts = {
  artifactsPath: "test/integration/__artifacts__",
};

describe("should render an", () => {
  const content = ".njs-viz";
  // const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');

  before(async () => {
    await page.goto(`${process.env.BASE_URL}/render/?snapshot=btn`);
    await page.waitForSelector(content, { visible: true });
  });

  it("Action button", async () => {
    const elem = await page.$(content);
    const img = await elem.screenshot();
    // eslint-disable-next-line jest/valid-expect
    return expect(img).to.matchImageOf("action-button", artifacts);
  });
});
