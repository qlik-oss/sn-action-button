import themeResolver from './theme-resolver';

let palette = [];

const formatProperty = (path, setting) => `${path}: ${setting};`;

const formatColorProperty = (path, inputColor, defaultColor) => {
  const color = themeResolver.resolveColor(inputColor, palette);
  return `${path}: ${color === 'none' ? defaultColor : color};`;
};

export default {
  getStyles(style, Theme) {
    // TODO: use constants for default values?
    let styles = 'width: 100%;height: 100%;font-weight: bold;';
    if (Theme) {
      palette = Theme.getCurrent().properties.palettes.ui[0].colors;
    }
    styles += formatColorProperty('color', style.fontColor, '#ffffff');
    styles += formatProperty('font-size', style.fontSize ? `${style.fontSize}px` : '12px');
    styles += formatColorProperty('background-color', style.backgroundColor, '#3F8AB3');

    return styles;
  },
};
