// Resolve color from a palette. We should open Theme API from sense so we can use same functionality
const themeResolver = {
  resolveColor: (input, palette) => {
    if (typeof input !== 'undefined' && input !== null) {
      if (input.index !== undefined && input.index !== -1 && palette[input.index]) {
        return palette[input.index];
      }
      if (input.color !== undefined) {
        return !input.color ? 'none' : input.color;
      }
      return !input ? 'none' : input;
    }
    return 'none';
  },
  getPalette: Theme => {
    let result = [];
    if (Theme && Theme.getCurrent) {
      const current = Theme.getCurrent();
      result = current && current.properties.palettes.ui[0].colors;
    }
    return result;
  },
};
export default themeResolver;
