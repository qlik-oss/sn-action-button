import colorUtils from './color-utils';
import luiIcons from './lui-icons';
import urlUtils from './url-utils';
import DEFAULTS from '../style-defaults';

const FONT_FAMILIES = [
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

const colorOptions = [
  {
    value: false,
    translation: 'properties.colorMode.primary',
  },
  {
    value: true,
    translation: 'properties.colorMode.byExpression',
  },
];

const toggleOptions = [
  {
    value: true,
    translation: 'properties.on',
  },
  {
    value: false,
    translation: 'properties.off',
  },
];

const formatProperty = (path, setting) => `${path}: ${setting};`;

const getFirstFont = (s) => s.split(',')[0];
const fontFamilyOptions = FONT_FAMILIES.map((font) => ({
  value: font,
  label: getFirstFont(font),
}));

const getFontStyle = (fontStyle) => {
  const styleTemp = { bold: false, italic: false, underline: false };
  if (Array.isArray(fontStyle)) {
    fontStyle.forEach((key) => {
      fontStyle.includes(key) ? (styleTemp[key] = true) : (styleTemp[key] = false);
    });
    return styleTemp;
  }
  return fontStyle;
};

const getBackgroundUrl = (styles, background, app, layout) => {
  if (background.bgImage.mode === 'media' && layout.background.bgImage.mediaUrl.qStaticContentUrlDef) {
    let bgUrl = layout.background.bgImage.mediaUrl.qStaticContentUrlDef;
    if (bgUrl) {
      bgUrl = urlUtils.getImageUrl(bgUrl, app);
      styles += formatProperty('background-image', `url('${bgUrl}')`);
      styles += formatProperty(
        'background-size',
        backgroundSize[
          btnStyleComp?.bgImage?.sizing === 'originalSize'
            ? 'auto'
            : btnStyleComp?.bgImage?.sizing || DEFAULTS.BACKGROUND_POSITION
        ]
      );
      styles += formatProperty(
        'background-position',
        btnStyleComp?.bgImage?.position ? btnStyleComp?.bgImage?.position?.replace('-', ' ') : 'center center'
      );
      return (styles += formatProperty('background-repeat', 'no-repeat'));
    }
  }
};

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
  colorOptions,
  toggleOptions,
  fontFamilyOptions,
  getStyles({ style = {}, disabled, theme, element, app, layout }) {
    let styles =
      'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;';
    const { font = {}, background = {}, border = {} } = style;
    const primaryColor = theme.getDataColorSpecials().primary;
    // enable
    styles += disabled ? formatProperty('opacity', 0.4) : formatProperty('cursor', 'pointer');
    // font
    styles += formatProperty('color', getColor(font, '#ffffff', theme));

    const fontStyle = getFontStyle(font.style) || DEFAULTS.FONT_STYLE;
    fontStyle.bold && (styles += formatProperty('font-weight', 'bold'));
    fontStyle.italic && (styles += formatProperty('font-style', 'italic'));

    // background
    const backgroundColor = getColor(background, primaryColor, theme);
    styles += formatProperty('background-color', backgroundColor);
    // getBackgroundUrl(styles, background, app, layout);
    // bgImage && getBackgroundUrl(styles, bgImage, app);
    if (
      (background.useImage && background.url.qStaticContentUrl) ||
      (background.bgImage.mode === 'media' && layout.background.bgImage.mediaUrl.qStaticContentUrl)
    ) {
      let bgUrl = background.url.qStaticContentUrl.qUrl || layout.background.bgImage.mediaUrl.qStaticContentUrl.qUrl;
      if (bgUrl) {
        bgUrl = urlUtils.getImageUrl(bgUrl, app);
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
    getFontStyle(font.style).underline && (textSpan.style.textDecoration = 'underline');
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
