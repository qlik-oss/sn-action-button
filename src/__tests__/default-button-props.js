const defaultValues = {
  Theme: { getCurrent: () => ({ properties: { palettes: { ui: [{ colors: ['none', 'color1', 'color2'] }] } } }) },
  layout: { style: { label: 'testLabel' } },
  button: { setAttribute: () => {} },
  app: {},
  context: { permissions: ['interact'] },
  Sense: {
    navigation: {},
  },
};

export default defaultValues;
