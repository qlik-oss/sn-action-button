const defaultValues = {
  Theme: { getCurrent: () => ({ properties: { palettes: { ui: [{ colors: ['none', 'color1', 'color2'] }] } } }) },
  layout: { style: { label: 'testLabel', border: {} } },
  button: { setAttribute: () => {}, removeAttribute: () => {} },
  app: {
    getSheetList: () => [{ qData: { rank: 1 }, qInfo: { qId: 'id1' } }],
    clearAll: () => {},
    getBookmarkList: () => [],
  },
  context: { permissions: ['interact'] },
  senseNavigation: {},
};

export default defaultValues;
