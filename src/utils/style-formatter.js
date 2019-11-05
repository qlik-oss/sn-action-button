import themeResolver from './theme-resolver';

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

const formatColorProperty = (path, inputColor, defaultColor) => {
  const color = themeResolver.resolveColor(inputColor, palette);
  return `${path}: ${color === 'none' ? defaultColor : color};`;
};

export default {
  getStyles({ style, disabled, Theme, button }) {
    // TODO: use constants for default values?
    let styles = 'width: 100%;height: 100%;font-weight: bold;cursor:pointer;';

    palette = themeResolver.getPalette(Theme);
    primaryColor = themeResolver.getDefaultColor(Theme);
    styles += formatColorProperty('color', style.fontColor, '#ffffff');
    styles += formatProperty('font-size', !isNaN(style.fontSize) ? `${style.fontSize}px` : '12px');
    styles += formatColorProperty('background-color', style.backgroundColor, primaryColor);
    disabled && (styles += formatProperty('opacity', 0.4));

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
      // TODO add color resolver for expression
      styles += `border: ${style.border.width}px solid ${themeResolver.resolveColor(style.border.color, palette)};`;
      const lengthShortSide = button.clientHeight < button.clientWidth ? button.clientHeight : button.clientWidth;
      styles += formatProperty('border-radius', `${((style.border.radius / 100) * lengthShortSide) / 2}px`);
    } else {
      styles += 'border: none;';
    }

    return styles;
  },
};
