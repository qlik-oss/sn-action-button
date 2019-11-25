import props from '../object-properties';

const defaultValues = {
  Theme: {
    getCurrent: () => ({
      properties: {
        palettes: { ui: [{ colors: ['none', 'color1', 'color2'] }] },
        dataColors: { primaryColor: 'myPrimaryColor' },
        fontFamily: 'myFont',
      },
    }),
  },
  layout: { style: props.style },
  element: {
    firstElementChild: {
      setAttribute: () => {},
      removeAttribute: () => {},
      firstElementChild: { setAttribute: () => {}, text: {} },
      someProps: () => {},
      appendChild: () => {},
    },
  },
  app: {
    getSheetList: () => [{ qData: { rank: 1 }, qInfo: { qId: 'id1' } }],
    getBookmarkList: () => [],
  },
  context: { permissions: ['interact'] },
  senseNavigation: {},
};

export default defaultValues;
