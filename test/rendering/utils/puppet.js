export default (page) => ({
  async open(url) {
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForSelector('.njs-viz', { visible: true });
  },
  async screenshot() {
    return page.screenshot();
  },
});
