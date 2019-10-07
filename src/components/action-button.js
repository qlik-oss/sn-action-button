import themeResolver from '../utils/theme-resolver';

let palette;
const setStyle = (styleString, path, setting) => {
  styleString += `${path}: ${setting};`;
  return styleString;
};

const setStyleColor = (styleString, path, inputColor, defaultColor) => {
  const color = themeResolver.resolveColor(inputColor, palette);
  styleString += `${path}: ${color === 'none' ? defaultColor : color};`;
  return styleString;
};

export default function ActionButton({ layout, button, Theme }) {
  const { style } = layout;
  palette = Theme.getCurrent().properties.palettes.ui[0].colors;
  let styles = 'width: 100%; height: 100%; font-weight: bold;';
  if (style) {
    styles = setStyleColor(styles, 'color', style.fontColor, '#ffffff');
    styles = setStyle(styles, 'font-size', style.fontSize ? `${style.fontSize}px` : '13px');
    styles = setStyleColor(styles, 'background-color', style.backgroundColor, '#3F8AB3');
  } else {
    styles += 'color: #ffffff; font-size: 12px; background-color: #3F8AB3';
  }
  button.setAttribute('style', styles);
  button.textContent = (style && style.label) || 'My Button';
  button.onclick = () => {
    // perform action stack
  };

  return button;
}
