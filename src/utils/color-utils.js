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
  getFadedColor(color) {
    const percent = -0.15;
    let f; let R; let B; let G;
    const t = 0; // percent < 0 ? 0 : 255
    const p = percent * -1; // percent < 0 ? percent * -1 : percent
    if (color.length > 7) {
      f = color.split(',');
      const rgba = f[0].indexOf('a') !== -1;
      R = rgba ? parseInt(f[0].slice(5), 10) : parseInt(f[0].slice(4), 10);
      G = parseInt(f[1], 10);
      B = parseInt(f[2], 10);
      return `${(rgba ? 'rgba(' : 'rgb(') + (Math.round((t - R) * p) + R)},${Math.round((t - G) * p) + G},${Math.round((t - B) * p) + B}${rgba ? `,${f[3]}` : ')'}`;
    }
    f = parseInt(color.slice(1), 16);
    R = f >> 16;
    G = (f >> 8) & 0x00FF;
    B = f & 0x0000FF;
    return `#${(0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)}`;
  }
};

export default colorUtils;
