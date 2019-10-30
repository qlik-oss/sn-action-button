/* eslint-disable no-cond-assign */
import CSSColors from './css-colors';

// Resolve color from a palette. We should open Theme API from sense so we can use same functionality
const colorUtils = {
  resolveExpression: input => {
    // rgb
    let matches = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(input);
    if (matches) {
      return `rgb(${matches[1]},${matches[2]},${matches[3]})`;
    }
    // argb
    matches = /^argb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(input);
    if (matches) {
      const a = Math.round((matches[1] / 255) * 100) / 100;
      return `rgba(${matches[2]},${matches[3]},${matches[4]},${a})`;
    }
    // hex
    matches = /^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/i.exec(input);
    if (matches) {
      return input;
    }
    // css color
    const color = CSSColors[input.toLowerCase()];
    if (color) {
      return `rgba(${color.r},${color.g},${color.b},${color.a || 1})`;
    }
    // invalid
    return 'none';
  },
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
  getDefaultColor: Theme => {
    let result = '';
    if (Theme && Theme.getCurrent) {
      const current = Theme.getCurrent();
      result = current && current.properties.dataColors && current.properties.dataColors.primaryColor;
    }
    return result || '#4477aa';
  },
};

export default colorUtils;
