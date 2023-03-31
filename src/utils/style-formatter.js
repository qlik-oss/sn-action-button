import colorUtils from './color-utils';
import luiIcons from './lui-icons';
import { getImageUrl } from './url-utils';
import DEFAULTS from '../style-defaults';
import { backgroundSize, backgroundPosition, setTextFontSize } from './style-utils';

const formatProperty = (path, setting) => `${path}: ${setting};`;

export default {
  getStyles({ style = {}, disabled, theme, element, app }) {
    let styles =
      'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;';
    const { font = {}, background = {}, border = {} } = style;
    // enable
    styles += disabled ? formatProperty('opacity', 0.4) : formatProperty('cursor', 'pointer');
    // font
    styles += formatProperty('color', colorUtils.getColor(font, DEFAULTS.FONT_COLOR.color, theme));
    const fontStyle = font.style || DEFAULTS.FONT_STYLE;
    fontStyle.bold && (styles += formatProperty('font-weight', 'bold'));
    fontStyle.italic && (styles += formatProperty('font-style', 'italic'));
    // background
    const primaryColor = theme.getDataColorSpecials().primary;
    const backgroundColor = colorUtils.getColor(background, primaryColor, theme);
    styles += formatProperty('background-color', backgroundColor);
    // backgroundImage
    if ((background.useImage || background.mode === 'media') && background.url.qStaticContentUrl) {
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
      const borderColor = colorUtils.getColor(border, colorUtils.getFadedColor(backgroundColor), theme);
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
    text.style.whiteSpace = 'pre';
    text.style.fontFamily = style.font.fontFamily || theme.getStyle('', '', 'fontFamily') || DEFAULTS.FONT_FAMILY;

    // label
    const textSpan = document.createElement('span');
    textSpan.textContent = label;
    textSpan.style.whiteSpace = 'pre';
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

    // font size adapts to the size of the box and the length of text
    if (Object.keys(font).length === 0 || font.sizeBehavior === 'responsive') {
      // 1. Setting font size to height of button container
      text.style.fontSize = `${button.clientHeight}px`;
      // 2. Adjust the font size to the height ratio between button container and text box
      let adjustedFontSize = (button.clientHeight / text.offsetHeight) * button.clientHeight;
      text.style.fontSize = `${adjustedFontSize}px`;
      // 3. Adjust the font size to the width ratio between button container and text box
      if (text.offsetWidth > button.clientWidth) {
        adjustedFontSize *= button.clientWidth / text.offsetWidth;
      }
      // 4. Setting final font size by scaling with the font size from the layout + other font styling
      const textFontSize = adjustedFontSize * (font.size || DEFAULTS.FONT_SIZE);
      setTextFontSize(text, font, textFontSize, hasIcon);
    } // Adjust the font size to the size of the box
    else if (font.sizeBehavior === 'fluid') {
      const layoutFontSize = font.size || DEFAULTS.FONT_SIZE;
      // 40 here is just a hard coded value which seems to work quite well.
      const calculatedWidth = 40 / layoutFontSize;
      const fontSize = Math.min(
        (button.clientWidth / calculatedWidth) * 10,
        button.clientHeight * layoutFontSize * 0.8
      );
      text.style.fontSize = `${fontSize}px`;
      textSpan.style.overflow = 'hidden';
    } else {
      // The font size is independent of the box size and the length of the text
      const textFontSize = (font.size || DEFAULTS.FONT_SIZE) * 100;
      setTextFontSize(text, font, textFontSize, hasIcon);
      textSpan.style.overflow = 'hidden';
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
