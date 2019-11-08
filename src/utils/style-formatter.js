import colorUtils from './color-utils';

let palette;
let primaryColor;

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

const getColor = (inputColor, defaultColor, isExpression) => {
  const color = isExpression ? colorUtils.resolveExpression(inputColor) : colorUtils.resolveColor(inputColor, palette);
  return `${color === 'none' ? defaultColor : color}`;
};

export default {
  getStyles({ style, disabled, Theme, element }) {
    // TODO: use constants for default values?
    let styles = 'width: 100%;height: 100%;font-weight: bold;';
    const fontColor = style.useFontColorExpression ? style.fontColorExpression : style.fontColor;
    const backgroundColor = style.useBackgroundColorExpression
      ? style.backgroundColorExpression
      : style.backgroundColor;

    palette = colorUtils.getPalette(Theme);
    primaryColor = colorUtils.getDefaultColor(Theme);
    styles += formatProperty('color', getColor(fontColor, '#ffffff', style.useFontColorExpression));
    styles += formatProperty(
      'background-color',
      getColor(backgroundColor, primaryColor, style.useBackgroundColorExpression)
    );
    disabled && (styles += formatProperty('opacity', 0.4));
    !disabled && (styles += formatProperty('cursor', 'pointer'));

    if (style.background && style.background.isUsed) {
      let bgUrl = style.background.url.qStaticContentUrl.qUrl;
      bgUrl.replace(/^\.\.\//i, '/');
      bgUrl = bgUrl.replace(/"/g, '\\"');
      bgUrl = bgUrl.replace(/'/g, "\\'");
      styles += formatProperty('background-image', `url('${bgUrl}')`);
      styles += formatProperty('background-size', backgroundSize[style.background.size] || backgroundSize.auto);
      styles += formatProperty(
        'background-position',
        backgroundPosition[style.background.position] || backgroundPosition.topLeft
      );
      styles += formatProperty('background-repeat', 'no-repeat');
    }
    if (style.border.isUsed) {
      const { width, useExpression, radius, color, colorExpression } = style.border;
      const borderColor = useExpression ? colorExpression : color;
      const { offsetHeight, offsetWidth } = element;
      const lengthShortSide = offsetHeight < offsetWidth ? offsetHeight : offsetWidth;
      styles += formatProperty(
        'border',
        `${((width / 100) * lengthShortSide) / 2}px solid ${getColor(borderColor, 'none', useExpression)}`
      );
      styles += formatProperty('border-radius', `${((radius / 100) * lengthShortSide) / 2}px`);
    } else {
      styles += 'border: none;';
    }

    return styles;
  },
  setFontSize(button, style) {
    function setFontsize(textElement, newFontsize) {
      textElement.setAttribute('style', `white-space: nowrap; font-size: ${newFontsize}px;`);
    }
    const text = button.firstElementChild;
    text.textContent = style.label;
    setFontsize(text, button.clientHeight);
    let newFontsize = (button.clientHeight / text.offsetHeight) * button.clientHeight;
    setFontsize(text, newFontsize);
    if (text.offsetWidth + 8 > button.clientWidth) {
      newFontsize *= (button.clientWidth - 8) / text.offsetWidth;
    }
    setFontsize(text, (newFontsize * style.fontSize) / 100);
  },
};
