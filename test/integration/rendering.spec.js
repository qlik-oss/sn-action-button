const artifacts = {
  artifactsPath: 'test/integration/__artifacts__',
};

describe('should render an', () => {
  const content = '.nebulajs-sn[data-render-count="1"]';
  // const app = encodeURIComponent(process.env.APP_ID || '/apps/Executive_Dashboard.qvf');

  before(async () => {
    await page.goto(`${process.env.BASE_URL}/render/?snapshot=btn`);
    await page.waitForSelector(content, { visible: true });
  });

  it('Action button', async () => {
    const elem = await page.$(content);
    const img = await elem.screenshot();
    return expect(img).to.matchImageOf('action-button', artifacts);
  });
});
