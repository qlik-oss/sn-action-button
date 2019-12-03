import colorUtils from './color-utils';

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

const getColor = ({ useColorExpression, colorExpression, color }, defaultColor, palette) => {
  const resolvedColor = useColorExpression
    ? colorUtils.resolveExpression(colorExpression)
    : colorUtils.resolveColor(color, palette);
  return resolvedColor === 'none' ? defaultColor : resolvedColor;
};

export default {
  getStyles({ style, disabled, Theme, element }) {
    let styles = 'width: 100%;height: 100%;transition: transform .1s ease-in-out;';
    const { font, background, border } = style;
    const primaryColor = colorUtils.getDefaultColor(Theme);
    const palette = colorUtils.getPalette(Theme);
    // enable
    styles += disabled ? formatProperty('opacity', 0.4) : formatProperty('cursor', 'pointer');
    // font
    styles += formatProperty('color', getColor(font, '#ffffff', palette));
    font.style.bold && (styles += formatProperty('font-weight', 'bold'));
    font.style.italic && (styles += formatProperty('font-style', 'italic'));
    // background
    const backgroundColor = getColor(background, primaryColor, palette);
    styles += formatProperty('background-color', backgroundColor);
    if (background.useImage && background.url.qStaticContentUrl) {
      let bgUrl = background.url.qStaticContentUrl.qUrl;
      if (bgUrl) {
        bgUrl.replace(/^\.\.\//i, '/');
        bgUrl = bgUrl.replace(/"/g, '\\"');
        bgUrl = bgUrl.replace(/'/g, "\\'");
        styles += formatProperty('background-image', `url('${bgUrl}')`);
        styles += formatProperty('background-size', backgroundSize[background.size]);
        styles += formatProperty('background-position', backgroundPosition[background.position]);
        styles += formatProperty('background-repeat', 'no-repeat');
      }
    }
    // border
    if (border.useBorder) {
      const lengthShortSide = Math.min(element.offsetWidth, element.offsetHeight);
      const borderColor = getColor(border, colorUtils.getFadedColor(backgroundColor), palette);
      const borderSize = (border.width * lengthShortSide) / 2;
      styles += formatProperty('border', `${borderSize}px solid ${borderColor}`);
      styles += formatProperty('border-radius', `${(border.radius * lengthShortSide) / 2}px`);
    } else {
      styles += 'border: none;';
    }

    return styles;
  },
  createLabelAndIcon({ button, Theme, style, isSense }) {
    // text element wrapping label and icon
    const text = document.createElement('text');
    text.style.whiteSpace = 'nowrap';
    text.style.fontFamily = colorUtils.getFontFamily(Theme);
    // label
    const textSpan = document.createElement('span');
    textSpan.textContent = style.label;
    textSpan.style.whiteSpace = 'nowrap';
    textSpan.style.textOverflow = 'ellipsis';
    textSpan.style.overflow = 'hidden';
    style.font.style.underline && (textSpan.style.textDecoration = 'underline');
    text.appendChild(textSpan);
    // icon
    const hasIcon = isSense && style.icon.useIcon && style.icon.iconType !== '';
    if (hasIcon) {
      const iconSpan = document.createElement('span');
      iconSpan.style.textDecoration = 'none';
      iconSpan.style.fontSize = 'inherit';
      iconSpan.setAttribute('class', `lui-icon lui-icon--${style.icon.iconType}`);
      style.icon.position === 'left' ? text.insertBefore(iconSpan, textSpan) : text.appendChild(iconSpan);
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
    if (hasIcon) {
      text.style.fontSize = `${Math.max(newFontsize * style.font.size * 0.88, 8)}px`;
      text.children[0].style.marginRight = `${text.offsetWidth * 0.04}px`;
    } else {
      text.style.fontSize = `${Math.max(newFontsize * style.font.size * 0.92, 8)}px`;
    }
    text.style.margin = '0 3%';
    text.style.display = 'flex';
    text.style.alignItems = 'center';
    text.style.justifyContent =
      style.font.align === 'left' ? 'flex-start' : style.font.align === 'right' ? 'flex-end' : 'center';
  },
};
