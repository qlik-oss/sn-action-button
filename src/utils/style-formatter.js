import colorUtils from './color-utils';
import luiIcons from './lui-icons';
import { getImageUrl } from './url-utils';
import DEFAULTS from '../style-defaults';

const backgroundSize = {
  auto: 'auto auto',
  alwaysFit: 'contain',
  fitWidth: '100% auto',
  fitHeight: 'auto 100%',
  fill: '100% 100%',
  alwaysFill: 'cover',
};

const backgroundPosition = {
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

const formatProperty = (path, setting) => `${path}: ${setting};`;

const getColor = (
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

export default {
  getStyles({ style = {}, disabled, theme, element, app }) {
    let styles =
      'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;';
    const { font = {}, background = {}, border = {} } = style;
    const primaryColor = theme.getDataColorSpecials().primary;
    // enable
    styles += disabled ? formatProperty('opacity', 0.4) : formatProperty('cursor', 'pointer');
    const backgroundColor = getColor(background, primaryColor, theme);
    // font
    styles += formatProperty('color', getColor(font, '#ffffff', theme));
    const fontStyle = font.style || DEFAULTS.FONT_STYLE;
    fontStyle.bold && (styles += formatProperty('font-weight', 'bold'));
    fontStyle.italic && (styles += formatProperty('font-style', 'italic'));
    // background
    styles += formatProperty('background-color', backgroundColor);
    if (background.useImage && background.url.qStaticContentUrl) {
      let bgUrl = background.url.qStaticContentUrl.qUrl;
      if (bgUrl) {
        bgUrl = getImageUrl(bgUrl, app);
        styles += formatProperty('background-image', `url('${bgUrl}')`);
        styles += formatProperty('background-size', backgroundSize[background.size || DEFAULTS.BACKGROUND_SIZE]);
        styles += formatProperty(
          'background-position',
          backgroundPosition[background.position || DEFAULTS.BACKGROUND_POSITION]
        );
        styles += formatProperty('background-repeat', 'no-repeat');
      }
    }
    // border
    if (border.useBorder) {
      const lengthShortSide = Math.min(element.offsetWidth, element.offsetHeight);
      const borderColor = getColor(border, colorUtils.getFadedColor(backgroundColor), theme);
      const borderSize = ((border.width || DEFAULTS.BORDER_WIDTH) * lengthShortSide) / 2;
      styles += formatProperty('border', `${borderSize}px solid ${borderColor}`);
      styles += formatProperty(
        'border-radius',
        `${((border.radius || DEFAULTS.BORDER_RADIUS) * lengthShortSide) / 2}px`
      );
    } else {
      styles += 'border: none;';
    }

    return styles;
  },
  createLabelAndIcon({ button, theme, style = {}, isSense }) {
    const { icon = {}, font = {}, label = DEFAULTS.LABEL } = style;
    // text element wrapping label and icon
    const text = document.createElement('text');
    text.style.whiteSpace = 'nowrap';
    text.style.fontFamily = style.font.fontFamily || theme.getStyle('', '', 'fontFamily') || DEFAULTS.FONT_FAMILY;

    // label
    const textSpan = document.createElement('span');
    textSpan.textContent = label;
    textSpan.style.whiteSpace = 'nowrap';
    textSpan.style.textOverflow = 'ellipsis';
    textSpan.style.overflow = 'visible';
    font.style && font.style.underline && (textSpan.style.textDecoration = 'underline');
    text.appendChild(textSpan);
    // icon
    const hasIcon = isSense && icon.useIcon && icon.iconType !== '';
    if (hasIcon) {
      const iconSpan = document.createElement('span');
      const iconType = luiIcons.find((iconObj) => iconObj.label === icon.iconType || iconObj.value === icon.iconType);
      iconSpan.style.textDecoration = 'none';
      iconSpan.style.fontSize = 'inherit';
      iconSpan.setAttribute('class', `lui-icon lui-icon--${iconType ? iconType.value : ''}`);
      icon.position === 'right' ? text.appendChild(iconSpan) : text.insertBefore(iconSpan, textSpan);
    }
    button.innerHTML = '';
    button.appendChild(text);

    // Calculations on font size.
    // 1. Setting font size to height of button container
    text.style.fontSize = `${button.clientHeight}px`;
    // 2. Adjust the font size to the height ratio between button container and text box
    let newFontsize = (button.clientHeight / text.offsetHeight) * button.clientHeight;
    text.style.fontSize = `${newFontsize}px`;
    // 3. Adjust the font size to the width ratio between button container and text box
    if (text.offsetWidth > button.clientWidth) {
      newFontsize *= button.clientWidth / text.offsetWidth;
    }
    // 4. Setting final font size by scaling with the font size from the layout + other font styling
    const fontScale = font.size || DEFAULTS.FONT_SIZE;
    if (font.style && font.style.italic) {
      if (hasIcon) {
        text.style.fontSize = `${Math.max(newFontsize * fontScale * 0.84, 8)}px`;
        text.children[0].style.marginRight = `${text.offsetWidth * 0.04}px`;
        text.children[1].style.marginRight = `${text.offsetWidth * 0.04}px`;
      } else {
        text.style.fontSize = `${Math.max(newFontsize * fontScale * 0.9, 8)}px`;
        text.children[0].style.marginRight = `${text.offsetWidth * 0.02}px`;
      }
    } else if (hasIcon) {
      text.style.fontSize = `${Math.max(newFontsize * fontScale * 0.88, 8)}px`;
      text.children[0].style.marginRight = `${text.offsetWidth * 0.04}px`;
    } else {
      text.style.fontSize = `${Math.max(newFontsize * fontScale * 0.92, 8)}px`;
    }
    // hide overflow when there can be overflow
    if (text.style.fontSize === '8px') {
      text.children.forEach((child) => {
        child.style.overflow = 'hidden';
      });
    }
    text.style.margin = '0 3%';
    text.style.display = 'flex';
    text.style.alignItems = 'center';
    text.style.justifyContent = font.align === 'left' ? 'flex-start' : font.align === 'right' ? 'flex-end' : 'center';
  },
};
