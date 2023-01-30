import DEFAULTS from '../style-defaults';
import colorUtils from './color-utils';

export const FONT_FAMILIES = [
  'American Typewriter, serif',
  'Andalé Mono, monospace',
  'Arial Black, sans-serif',
  'Arial, sans-serif',
  'Bradley Hand, cursive',
  'Brush Script MT, cursive',
  'Comic Sans MS, cursive',
  'Courier, monospace',
  'Didot, serif',
  'Georgia, serif',
  'Impact, sans-serif',
  'Lucida Console, monospace',
  'Luminari, fantasy',
  'Monaco, monospace',
  'QlikView Sans, sans-serif',
  'Source Sans Pro, sans-serif',
  'Tahoma, sans-serif',
  'Times New Roman, serif',
  'Trebuchet MS, sans-serif',
  'Verdana, sans-serif',
];

export const backgroundSize = {
  originalSize: 'auto auto',
  alwaysFit: 'contain',
  fitWidth: '100% auto',
  fitHeight: 'auto 100%',
  fill: '100% 100%',
  alwaysFill: 'cover',
};

export const backgroundPosition = {
  'top-left': 'top left',
  'center-left': 'center left',
  'bottom-left': 'bottom left',
  'top-center': 'top center',
  'center-center': 'center center',
  'bottom-center': 'bottom center',
  'top-right': 'top right',
  'center-right': 'center right',
  'bottom-right': 'bottom right',
  topLeft: '0% 0%', // top left
  centerLeft: '50% 0%', // center left
  bottomLeft: '100% 0%', // bottom left
  topCenter: '0% 50%', // top center
  centerCenter: '50% 50%', // center center
  bottomCenter: '100% 50%', // bottom center
  topRight: '0% 100%', // top right
  centerRight: '50% 100%', // center right
  bottomRight: '100% 100%', // bottom right
};

export const colorOptions = [
  {
    value: false,
    translation: 'properties.colorMode.primary',
  },
  {
    value: true,
    translation: 'properties.colorMode.byExpression',
  },
];

export const toggleOptions = [
  {
    value: true,
    translation: 'properties.on',
  },
  {
    value: false,
    translation: 'properties.off',
  },
];

const getFirstFont = (s) => s.split(',')[0];
export const fontFamilyOptions = FONT_FAMILIES.map((font) => ({
  value: font,
  label: getFirstFont(font),
}));

export const getColor = (
  { useColorExpression = false, colorExpression = '', color = DEFAULTS.COLOR },
  defaultColor,
  theme
) => {
  let resolvedColor;
  if (useColorExpression) {
    resolvedColor = colorUtils.resolveExpression(colorExpression);
  } else if (typeof color === 'string') {
    resolvedColor = color;
  } else if (color) {
    resolvedColor = theme.getColorPickerColor(color);
  }
  return !resolvedColor || resolvedColor === 'none' ? defaultColor : resolvedColor;
};
