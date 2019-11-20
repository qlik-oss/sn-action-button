import colorUtils from './color-utils';

const backgroundSize = {
  auto: 'auto auto',
  alwaysFit: 'contain',
  fitWidth: '100% auto',
  fitHeight: 'auto 100%',
  fill: '100% 100%',
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

const setFontsize = (textElement, newFontsize, fontFamily, addFlex, alignment) => {
  textElement.setAttribute(
    'style',
    `${
      addFlex ? `display: flex; align-items: center; justify-content: ${alignment};` : ''
    } font-size: ${newFontsize}px; font-family: ${fontFamily};`
  );
};

export default {
  getStyles({ style, disabled, Theme, element }) {
    let styles = 'width: 100%;height: 100%;padding: 4px;';
    const primaryColor = colorUtils.getDefaultColor(Theme);
    const palette = colorUtils.getPalette(Theme);
    // enable
    disabled && (styles += formatProperty('opacity', 0.4));
    !disabled && (styles += formatProperty('cursor', 'pointer'));
    // font
    styles += formatProperty('color', getColor(style.font, '#ffffff', palette));
    style.font.style.bold && (styles += formatProperty('font-weight', 'bold'));
    style.font.style.italic && (styles += formatProperty('font-style', 'italic'));
    style.font.style.underline && (styles += formatProperty('text-decoration', 'underline'));
    styles += formatProperty('text-align', style.font.align);
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
  setFontSizeAndFamily({ button, Theme, layout }) {
    const { style } = layout;
    button.innerHTML = '';
    const text = document.createElement('text');
    const textSpan = document.createElement('span');
    textSpan.setAttribute('style', 'white-space: nowrap;');
    textSpan.textContent = style.label;
    if (style.icon.useIcon && style.icon.iconType !== '') {
      const iconSpan = document.createElement('span');
      iconSpan.setAttribute('style', 'font-size: inherit;');
      iconSpan.setAttribute('class', `lui-icon lui-icon--${style.icon.iconType}`);
      style.icon.position === 'left'
        ? text.appendChild(iconSpan) && text.appendChild(textSpan)
        : text.appendChild(textSpan) && text.appendChild(iconSpan);
    } else {
      text.appendChild(textSpan);
    }
    button.appendChild(text);
    const fontFamily = colorUtils.getFontFamily(Theme);
    setFontsize(text, button.clientHeight, fontFamily);
    let newFontsize = (button.clientHeight / text.offsetHeight) * button.clientHeight;
    setFontsize(text, newFontsize, fontFamily);
    if (text.offsetWidth + 8 > button.clientWidth) {
      newFontsize *= (button.clientWidth - 8) / text.offsetWidth;
    }
    setFontsize(text, (newFontsize * style.font.size) / 100, fontFamily, true, style.font.align);
  },
};
