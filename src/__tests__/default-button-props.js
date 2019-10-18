const defaultValues = {
  Theme: { getCurrent: () => ({ properties: { palettes: { ui: [{ colors: ['none', 'color1', 'color2'] }] } } }) },
  layout: { style: { label: 'testLabel' } },
  button: { setAttribute: () => {} },
  app: {
    getSheetList: () => [{ qData: { rank: 1 }, qInfo: { qId: 'id1' } }],
    clearAll: () => {},
  },
  context: { permissions: ['interact'] },
  Sense: {
    navigation: {},
  },
};

export default defaultValues;
