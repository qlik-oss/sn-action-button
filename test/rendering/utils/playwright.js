module.exports = (page) => ({
  async open(url) {
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForSelector(".njs-viz", { state: "attached" });
  },
  async screenshot() {
    return page.screenshot();
  },
});
