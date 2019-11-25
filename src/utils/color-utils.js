/* eslint-disable no-cond-assign */
import CSSColors from './css-colors';

export const getCurrentTheme = Theme => {
  if (Theme && Theme.getCurrent) {
    return Theme.getCurrent();
  }
  return undefined;
};

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
    const color = input && CSSColors[input.toLowerCase()];
    if (color) {
      const a = color.a !== undefined ? color.a : 1;
      return `rgba(${color.r},${color.g},${color.b},${a})`;
    }
    // invalid
    return 'none';
  },
  resolveColor: (input, palette) => {
    // Resolve color from a palette. We should open Theme API from sense so we can use same functionality
    if (typeof input !== 'undefined' && input !== null) {
      if (input.index !== undefined && input.index !== -1 && palette[input.index]) {
        return palette[input.index];
      }
      if (input.color !== undefined) {
        return !input.color ? 'none' : input.color;
      }
      return typeof input === 'string' ? input : 'none';
    }
    return 'none';
  },
  getPalette: Theme => {
    const current = getCurrentTheme(Theme);
    return (current && current.properties.palettes.ui[0].colors) || [];
  },
  getDefaultColor: Theme => {
    const current = getCurrentTheme(Theme);
    return (current && current.properties.dataColors && current.properties.dataColors.primaryColor) || '#4477aa';
  },
  getFontFamily: Theme => {
    const current = getCurrentTheme(Theme);
    return (current && current.properties.fontFamily) || 'inherit';
  },
  lightenOrDarkenColor: (color, amount) => {
    color = color.slice(1);
    const num = parseInt(color, 16);

    let r = (num >> 16) + amount;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let b = ((num >> 8) & 0x00FF) + amount;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let g = (num & 0x0000FF) + amount;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    const newColor = (g | (b << 8) | (r << 16));

    return `#${newColor === 0 ? '000000' : newColor.toString(16)}`;
  }
};

export default colorUtils;
