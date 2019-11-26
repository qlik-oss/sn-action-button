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
    let styles = 'width: 100%;height: 100%;padding: 4px;transition: transform .1s ease-in-out;';
    const primaryColor = colorUtils.getDefaultColor(Theme);
    const palette = colorUtils.getPalette(Theme);
    // enable
    disabled && (styles += formatProperty('opacity', 0.4));
    !disabled && (styles += formatProperty('cursor', 'pointer'));
    // font
    styles += formatProperty('color', getColor(style.font, '#ffffff', palette));
    style.font.style.bold && (styles += formatProperty('font-weight', 'bold'));
    style.font.style.italic && (styles += formatProperty('font-style', 'italic'));
    // background
    styles += formatProperty('background-color', getColor(style.background, primaryColor, palette));
    if (style.background.useImage && style.background.url.qStaticContentUrl) {
      let bgUrl = style.background.url.qStaticContentUrl.qUrl;
      if (bgUrl) {
        bgUrl.replace(/^\.\.\//i, '/');
        bgUrl = bgUrl.replace(/"/g, '\\"');
        bgUrl = bgUrl.replace(/'/g, "\\'");
        styles += formatProperty('background-image', `url('${bgUrl}')`);
        styles += formatProperty('background-size', backgroundSize[style.background.size]);
        styles += formatProperty('background-position', backgroundPosition[style.background.position]);
        styles += formatProperty('background-repeat', 'no-repeat');
      }
    }
    // border
    if (style.border.useBorder) {
      const { width, radius } = style.border;
      const { offsetHeight, offsetWidth } = element;
      const lengthShortSide = offsetHeight < offsetWidth ? offsetHeight : offsetWidth;
      styles += formatProperty(
        'border',
        `${((width / 100) * lengthShortSide) / 2}px solid ${getColor(style.border, 'none', palette)}`
      );
      styles += formatProperty('border-radius', `${((radius / 100) * lengthShortSide) / 2}px`);
    } else {
      styles += 'border: none;';
    }

    return styles;
  },
  createLabelAndIcon({ button, Theme, style }) {
    // text element wrapping label and icon
    const text = document.createElement('text');
    text.style.whiteSpace = 'nowrap';
    text.style.fontFamily = colorUtils.getFontFamily(Theme);
    // label
    const textSpan = document.createElement('span');
    textSpan.textContent = style.label;
    style.font.style.underline && (textSpan.style.textDecoration = 'underline');
    text.appendChild(textSpan);
    // icon
    if (style.icon.useIcon && style.icon.iconType !== '') {
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
    if (text.offsetWidth + 8 > button.clientWidth) {
      newFontsize *= (button.clientWidth - 8) / text.offsetWidth;
    }
    // 4. Setting final font size by scaling with the font size from the layout + other font styling
    text.style.fontSize = `${(newFontsize * style.font.size) / 100}px`;
    text.style.display = 'flex';
    text.style.alignItems = 'center';
    text.style.justifyContent = style.font.align;
  },
};
