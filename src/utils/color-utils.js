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
  lightenOrDarkenColor(color, percent) {
    const f = parseInt(color.slice(1), 16);
    const t = percent < 0 ? 0 : 255;
    const p = percent < 0 ? percent * -1 : percent;
    const R = f >> 16;
    const G = (f >> 8) & 0x00FF;
    const B = f & 0x0000FF;
    return `#${(0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)}`;
  }
};

export default colorUtils;
