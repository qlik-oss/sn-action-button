import colorUtils from './color-utils';
import luiIcons from './lui-icons';
import urlUtils from './url-utils';
import DEFAULTS from '../style-defaults';

const backgroundSize = {
  auto: 'auto auto',
  alwaysFit: 'contain',
  fitWidth: '100% auto',
  fitHeight: 'auto 100%',
  fill: '100% 100%',
  alwaysFill: 'cover',
};

const imageSizingToCssProperty = {
  originalSize: 'auto auto',
  alwaysFit: 'contain',
  fitWidth: '100% auto',
  fitHeight: 'auto 100%',
  stretchFit: '100% 100%',
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
  console.log("color=>",color,theme?.getColorPickerColor(color),theme.getStyle('', '', 'backgroundColor'))
  let resolvedColor;
  if (useColorExpression) {
    resolvedColor = colorUtils.resolveExpression(colorExpression);
  } else if (typeof color === 'string') {
    console.log("2")
    resolvedColor = color;
  } else if (color) {
    console.log("3")
    resolvedColor = theme.getColorPickerColor(color);
  }
  console.log("getColor resolvedColor return =====>",resolvedColor)
  return !resolvedColor || resolvedColor === 'none' ? defaultColor : resolvedColor;
};

export default {
  getStyles({ style = {}, disabled, theme, element ,layout},flag) {
    console.log("getStyles=========>",theme,style,layout);
    let { font = {}, background = {}, border = {} } = style;
    let styles =
      'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;';


    if(flag.isEnabled("SENSECLIENT_IM_1525_BUTTON") === true){
      //bgcolor - NEW
      const result = layout?.components?.find((comp) => comp.key === 'button-bgcolor');
      console.log("RESULT=>",result)
  
      background = result?.style  ? result?.style?.background : style.background;

      //BgImage and positioning - NEW
      const bgImageComp = layout?.components?.find((comp) => comp.key === 'button-bgimage')?.bgImage;
      console.log("bgImageComp in style-formatter =>",bgImageComp,layout?.components?.find((comp) => comp.key === 'button-bgimage'))
      let mediaUrl = '';
      if (bgImageComp?.mode === 'media') {
        mediaUrl = bgImageComp?.mediaUrl?.qStaticContentUrl?.qUrl
          ? decodeURIComponent(bgImageComp.mediaUrl.qStaticContentUrl.qUrl)
          : undefined;
      } else if (bgImageComp?.mode === 'expression') {
        mediaUrl = bgImageComp?.expressionUrl ? decodeURIComponent(bgImageComp.expressionUrl) : undefined;
      } else {
        mediaUrl = undefined;
      }
      console.log("mediaUrl=>",mediaUrl)
      styles += formatProperty('background-image', `url('${mediaUrl}')`);
      styles += formatProperty('background-size', bgImageComp?.sizing
      ? imageSizingToCssProperty[bgImageComp.sizing]
      : imageSizingToCssProperty.originalSize);
      styles += formatProperty(
        'background-position',
        bgImageComp?.position ? bgImageComp?.position?.replace('-', ' ') : 'center center'
      );
      styles += formatProperty('background-repeat', 'no-repeat');

      //border - NEW
      const bgBorderComp = layout?.components?.find((comp) => comp.key === 'button-border')?.style;
      console.log("bgBorderComp=>",bgBorderComp,bgBorderComp?.border)
      border = (bgBorderComp?.border) ? (bgBorderComp?.border) : style.border;
      console.log("border=>",border)

      //font - NEW
      const btnlabelComp = layout?.components?.find((comp) => comp.key === 'button-label');
      let fontStyleToMap = {bold:false,italic:false,underline:false}
      if(btnlabelComp?.style?.font?.style){
        (btnlabelComp?.style?.font?.style).filter(function(style_name){
          console.log("style_name",style_name)
          if(style_name in fontStyleToMap){
            fontStyleToMap[style_name] = true
          }
        })
      }
      console.log("fontStyleToMap",fontStyleToMap)
      font.style = btnlabelComp?.style?.font?.style  ? fontStyleToMap : style.font.style; // label font styles
      font.color = btnlabelComp?.style?.font?.color  ? btnlabelComp?.style?.font?.color : style.font.color; //label font color

    }

    //const { font = {}, background = {}, border = {} } = style;
    const primaryColor = theme.getDataColorSpecials().primary;
    // enable
    styles += disabled ? formatProperty('opacity', 0.4) : formatProperty('cursor', 'pointer');
    // font
    console.log("FFFFFFFF",font)
    styles += formatProperty('color', getColor(font, '#ff ffff', theme));
    const fontStyle = font.style || DEFAULTS.FONT_STYLE;
    fontStyle.bold && (styles += formatProperty('font-weight', 'bold'));
    fontStyle.italic && (styles += formatProperty('font-style', 'italic'));
    fontStyle.underline && (styles += formatProperty('text-decoration', 'underline'));

    // background
    const backgroundColor = getColor(background, primaryColor, theme);
    styles += formatProperty('background-color', backgroundColor);
    console.log("background===dsd=>",background)




    if (background.useImage && background.url.qStaticContentUrl) {
      let bgUrl = background.url.qStaticContentUrl.qUrl;
      console.log("bgUrl=====>",bgUrl)
      if (bgUrl) {
        bgUrl = urlUtils.getImageUrl(bgUrl);
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
  createLabelAndIcon({ button, theme, style = {}, isSense ,layout},flag) {
    console.log("createLabelAndIcon=>",layout,style)
    let { icon = {}, font = {}, label = DEFAULTS.LABEL } = style;

    if(flag.isEnabled("SENSECLIENT_IM_1525_BUTTON") === true){
      //label align - NEW
      const btnlabelComp = layout?.components?.find((comp) => comp.key === 'button-label');
      console.log("btnlabelComp 2=>",btnlabelComp)
      font = btnlabelComp?.style  ? btnlabelComp?.style?.font : style.font;
      console.log("font=>",font)


      let fontStyleToMap = {bold:false,italic:false,underline:false}
      if(btnlabelComp?.style?.font?.style){
        (btnlabelComp?.style?.font?.style).filter(function(style_name){
          console.log("style_name",style_name)
          if(style_name in fontStyleToMap){
            fontStyleToMap[style_name] = true
          }
        })
      }
      console.log("fontStyleToMap",fontStyleToMap)
      font.style = btnlabelComp?.style?.font?.style  ? fontStyleToMap : style.font.style;


      
    }

    // text element wrapping label and icon
    const text = document.createElement('text');
    text.style.whiteSpace = 'nowrap';
    //text.style.fontFamily = theme.getStyle('', '', 'fontFamily');
    text.style.fontFamily = font?.fontFamily || theme.getStyle('', '', 'fontFamily');
    
    console.log("text.style.fontFamily=>",text.style.fontFamily)
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
    console.log("hasIcon=>",hasIcon)
    if (hasIcon) {
      const iconSpan = document.createElement('span');
      const iconType = luiIcons.find((iconObj) => iconObj.label === icon.iconType || iconObj.value === icon.iconType);
      console.log('iconType=>',iconType)
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

    console.log("font before font size=>",font)
    // 4. Setting final font size by scaling with the font size from the layout + other font styling
    const fontScale = font.size || DEFAULTS.FONT_SIZE;
    console.log("fontScale=newFontsize>",fontScale,newFontsize)
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
      text.style.fontSize = fontScale;
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
