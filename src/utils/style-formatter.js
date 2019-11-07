import colorUtils from './color-utils';

let palette;

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

const getColor = ({ useColorExpression, colorExpression, color }, defaultColor) => {
  const resolvedColor = useColorExpression
    ? colorUtils.resolveExpression(colorExpression)
    : colorUtils.resolveColor(color, palette);
  return resolvedColor === 'none' ? defaultColor : resolvedColor;
};

export default {
  getStyles({ style, disabled, Theme, element }) {
    let styles = 'width: 100%;height: 100%;padding: 4px;';
    const primaryColor = colorUtils.getDefaultColor(Theme);
    palette = colorUtils.getPalette(Theme);
    // enable
    disabled && (styles += formatProperty('opacity', 0.4));
    !disabled && (styles += formatProperty('cursor', 'pointer'));
    // font
    styles += formatProperty('font-size', !isNaN(style.font.size) ? `${style.font.size}px` : '12px');
    styles += formatProperty('color', getColor(style.font, '#ffffff'));
    style.font.style.bold && (styles += formatProperty('font-weight', 'bold'));
    style.font.style.italic && (styles += formatProperty('font-style', 'italic'));
    style.font.style.underline && (styles += formatProperty('text-decoration', 'underline'));
    styles += formatProperty('text-align', style.font.align);
    // background
    styles += formatProperty('background-color', getColor(style.background, primaryColor));
    if (style.background.useImage) {
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
        `${((width / 100) * lengthShortSide) / 2}px solid ${getColor(style.border, 'none')}`
      );
      styles += formatProperty('border-radius', `${((radius / 100) * lengthShortSide) / 2}px`);
    } else {
      styles += 'border: none;';
    }

    return styles;
  },
};
