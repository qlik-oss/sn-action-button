import props from '../object-properties';

const defaultValues = sandbox => ({
  theme: {
    getDataColorSpecials: () => ({ primary: 'myPrimaryColor' }),
    getColorPickerColor: sandbox ? sandbox.stub() : () => '',
    getStyle: sandbox ? sandbox.stub() : () => '',
  },
  layout: { style: JSON.parse(JSON.stringify(props.style)) },
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
  constraints: {},
  senseNavigation: {},
});

export default defaultValues;
