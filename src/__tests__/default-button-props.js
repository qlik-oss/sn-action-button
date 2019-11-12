import props from '../object-properties';

const defaultValues = {
  Theme: { getCurrent: () => ({ properties: { palettes: { ui: [{ colors: ['none', 'color1', 'color2'] }] } } }) },
  layout: { style: props.style },
  button: {
    setAttribute: () => {},
    removeAttribute: () => {},
    firstElementChild: { setAttribute: () => {} },
    someProps: () => {},
  },
  app: {
    getSheetList: () => [{ qData: { rank: 1 }, qInfo: { qId: 'id1' } }],
    clearAll: () => {},
  },
  context: { permissions: ['interact'] },
  senseNavigation: {},
};

export default defaultValues;
