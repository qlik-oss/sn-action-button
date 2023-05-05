import DEFAULTS from "../style-defaults";
import colorUtils from "./color-utils";
import luiIcons from "./lui-icons";
import { adjustFontSizeBehavior, backgroundPosition, backgroundSize } from "./style-utils";
import { getImageUrl } from "./url-utils";
var formatProperty = function (path, setting) { return "".concat(path, ": ").concat(setting, ";"); };
export default {
    getStyles: function (_a) {
        var style = _a.style, disabled = _a.disabled, theme = _a.theme, element = _a.element, app = _a.app;
        var styles = "width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;";
        var font = style.font, background = style.background, border = style.border;
        // enable
        styles += disabled ? formatProperty("opacity", 0.4) : formatProperty("cursor", "pointer");
        // font
        styles += formatProperty("color", colorUtils.getColor(font, DEFAULTS.FONT_COLOR, theme));
        var fontStyle = font.style || DEFAULTS.FONT_STYLE;
        fontStyle.bold && (styles += formatProperty("font-weight", "bold"));
        fontStyle.italic && (styles += formatProperty("font-style", "italic"));
        // background
        var primaryColor = theme.getDataColorSpecials().primary;
        var backgroundColor = colorUtils.getColor(background, primaryColor, theme);
        styles += formatProperty("background-color", backgroundColor);
        // backgroundImage
        if ((background.useImage || background.mode === "media") && background.url.qStaticContentUrl) {
            var bgUrl = background.url.qStaticContentUrl.qUrl;
            if (bgUrl) {
                bgUrl = getImageUrl(bgUrl, app);
                styles += formatProperty("background-image", "url('".concat(bgUrl, "')"));
                styles += formatProperty("background-size", backgroundSize[background.size || DEFAULTS.BACKGROUND_SIZE]);
                styles += formatProperty("background-position", backgroundPosition[background.position || DEFAULTS.BACKGROUND_POSITION]);
                styles += formatProperty("background-repeat", "no-repeat");
            }
        }
        // border
        if (border.useBorder) {
            var lengthShortSide = Math.min(element.offsetWidth, element.offsetHeight);
            var borderColor = colorUtils.getColor(border, colorUtils.getFadedColor(backgroundColor), theme);
            var borderSize = ((border.width || DEFAULTS.BORDER_WIDTH) * lengthShortSide) / 2;
            styles += formatProperty("border", "".concat(borderSize, "px solid ").concat(borderColor));
            styles += formatProperty("border-radius", "".concat(((border.radius || DEFAULTS.BORDER_RADIUS) * lengthShortSide) / 2, "px"));
        }
        else {
            styles += "border: none;";
        }
        return styles;
    },
    createLabelAndIcon: function (_a) {
        var button = _a.button, theme = _a.theme, style = _a.style, isSense = _a.isSense;
        var icon = style.icon, font = style.font, _b = style.label, label = _b === void 0 ? DEFAULTS.LABEL : _b;
        // text element wrapping label and icon
        var text = document.createElement("text");
        text.style.whiteSpace = "pre";
        text.style.fontFamily = style.font.fontFamily || theme.getStyle("", "", "fontFamily") || DEFAULTS.FONT_FAMILY;
        // label
        var textSpan = document.createElement("span");
        textSpan.textContent = label;
        textSpan.style.whiteSpace = "pre";
        textSpan.style.textOverflow = "ellipsis";
        textSpan.style.overflow = "visible";
        font.style && font.style.underline && (textSpan.style.textDecoration = "underline");
        text.appendChild(textSpan);
        // icon
        var hasIcon = isSense && icon.useIcon && icon.iconType !== "";
        if (hasIcon) {
            var iconSpan = document.createElement("span");
            var iconType = luiIcons.find(function (iconObj) { return iconObj.label === icon.iconType || iconObj.value === icon.iconType; });
            iconSpan.style.textDecoration = "none";
            iconSpan.style.fontSize = "inherit";
            iconSpan.setAttribute("class", "lui-icon lui-icon--".concat(iconType ? iconType.value : ""));
            icon.position === "right" ? text.appendChild(iconSpan) : text.insertBefore(iconSpan, textSpan);
        }
        button.innerHTML = "";
        button.appendChild(text);
        adjustFontSizeBehavior(button, font, text, textSpan, hasIcon);
        // hide overflow when there can be overflow
        if (text.style.fontSize === "8px") {
            Array.from(text.children).forEach(function (child) {
                child.style.overflow = "hidden";
            });
        }
        text.style.margin = "0 3%";
        text.style.display = "flex";
        text.style.alignItems = "center";
        text.style.justifyContent = font.align === "left" ? "flex-start" : font.align === "right" ? "flex-end" : "center";
    },
};
