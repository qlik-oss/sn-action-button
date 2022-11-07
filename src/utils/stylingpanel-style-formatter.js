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
    getStyles({ style = {}, disabled, theme, element, layout }) {
        let styles =
            'width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;';

        let { font = {}, background = {}, border = {} } = style;

        //bgcolor
        const bgColorComp = layout?.components?.find((comp) => comp.key === 'button-bgcolor');
        background = bgColorComp?.style ? bgColorComp?.style?.background : style.background;

        //BgImage and positioning
        const bgImageComp = layout?.components?.find((comp) => comp.key === 'button-bgimage')?.bgImage;
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
        styles += formatProperty('background-image', `url('${mediaUrl}')`);
        styles += formatProperty('background-size', bgImageComp?.sizing
            ? imageSizingToCssProperty[bgImageComp.sizing]
            : imageSizingToCssProperty.originalSize);
        styles += formatProperty(
            'background-position',
            bgImageComp?.position ? bgImageComp?.position?.replace('-', ' ') : 'center center'
        );
        styles += formatProperty('background-repeat', 'no-repeat');

        //border
        const bgBorderComp = layout?.components?.find((comp) => comp.key === 'button-border')?.style;
        border = (bgBorderComp?.border) ? (bgBorderComp?.border) : style.border;

        //font
        const btnlabelComp = layout?.components?.find((comp) => comp.key === 'button-label');
        let fontStyleToMap = { bold: false, italic: false, underline: false }
        if (btnlabelComp?.style?.font?.style) {
            (btnlabelComp?.style?.font?.style).filter(function (style_name) {
                if (style_name in fontStyleToMap) {
                    fontStyleToMap[style_name] = true
                }
            })
        }
        font.style = btnlabelComp?.style?.font?.style ? fontStyleToMap : style.font.style; // label font styles
        font.color = btnlabelComp?.style?.font?.color ? btnlabelComp?.style?.font?.color : style.font.color; //label font color

        const primaryColor = theme.getDataColorSpecials().primary;
        // enable
        styles += disabled ? formatProperty('opacity', 0.4) : formatProperty('cursor', 'pointer');
        // font
        styles += formatProperty('color', getColor(font, '#ff ffff', theme));
        const fontStyle = font.style || DEFAULTS.FONT_STYLE;
        fontStyle.bold && (styles += formatProperty('font-weight', 'bold'));
        fontStyle.italic && (styles += formatProperty('font-style', 'italic'));
        fontStyle.underline && (styles += formatProperty('text-decoration', 'underline'));

        // background
        const backgroundColor = getColor(background, primaryColor, theme);
        styles += formatProperty('background-color', backgroundColor);

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
    createLabelAndIcon({ button, theme, style = {}, isSense, layout }) {
        let { icon = {}, font = {}, label = DEFAULTS.LABEL } = style;
        const btnlabelComp = layout?.components?.find((comp) => comp.key === 'button-label');
        font = btnlabelComp?.style ? btnlabelComp?.style?.font : style.font;

        let fontStyleToMap = { bold: false, italic: false, underline: false }
        if (btnlabelComp?.style?.font?.style) {
            (btnlabelComp?.style?.font?.style).filter(function (style_name) {
                if (style_name in fontStyleToMap) {
                    fontStyleToMap[style_name] = true
                }
            })
        }
        font.style = btnlabelComp?.style?.font?.style ? fontStyleToMap : style.font.style;

        // text element wrapping label and icon
        const text = document.createElement('text');
        text.style.whiteSpace = 'nowrap';
        text.style.fontFamily = font?.fontFamily || theme.getStyle('', '', 'fontFamily');

        console.log("text.style.fontFamily=>", text.style.fontFamily)
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
        const fontScale = font.size || DEFAULTS.FONT_SIZE;
        text.style.fontSize = fontScale;
        text.style.margin = '0 3%';
        text.style.display = 'flex';
        text.style.alignItems = 'center';
        text.style.justifyContent = font.align === 'left' ? 'flex-start' : font.align === 'right' ? 'flex-end' : 'center';
    },
};
