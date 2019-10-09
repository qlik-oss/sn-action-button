const defaultValues = {
  Theme: { getCurrent: () => ({ properties: { palettes: { ui: [{ color: ['color1', 'color2'] }] } } }) },
  layout: { style: { label: 'testLabel' } },
  button: { setAttribute: () => {} },
  engineApp: {},
  context: { permissions: ['interact'] },
};

export default defaultValues;
