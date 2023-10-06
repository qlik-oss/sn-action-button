import DEFAULTS from "../style-defaults";
import luiIcons from "./lui-icons";
import {
  adjustFontSizeBehavior,
  getBackgroundStyle,
  getBorderStyle,
  getFontStyle,
  setIconStyle,
  setLabelSpan,
} from "./style-utils";

const formatProperty = (path, setting) => `${path}: ${setting};`;

export default {
  getStyles({ style = {}, disabled, theme, element, app }) {
    let styles =
      "width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;";
    const { font = {}, background = {}, border = {} } = style;
    // enable
    styles += disabled ? formatProperty("opacity", 0.4) : formatProperty("cursor", "pointer");
    styles += getFontStyle(font, DEFAULTS.FONT_COLOR.color, theme, formatProperty);
    styles += getBackgroundStyle(background, theme, app, formatProperty);
    styles += getBorderStyle(element, background, border, theme, formatProperty);
    return styles;
  },
  createLabelAndIcon({ button, theme, style = {}, isSense }) {
    const { icon = {}, font = {}, label = DEFAULTS.LABEL, showLabel = true } = style;
    // text element wrapping label and icon
    const text = document.createElement("text");
    text.style.whiteSpace = "nowrap";
    text.style.fontFamily = style?.font?.fontFamily || theme.getStyle("", "", "fontFamily") || DEFAULTS.FONT_FAMILY;
    const textSpan = setLabelSpan(label, font);
    text.appendChild(textSpan);

    // icon
    const hasIcon = isSense && icon.useIcon && icon.iconType !== "";
    let iconSpan;
    if (hasIcon) {
      iconSpan = setIconStyle(luiIcons, icon);
      icon?.position === "right" ? text.appendChild(iconSpan) : text.insertBefore(iconSpan, textSpan);
    }
    button.innerHTML = "";
    button.appendChild(text);

    adjustFontSizeBehavior(button, font, text, textSpan, hasIcon);

    if (text.style.fontSize === "8px") {
      text.children.forEach((child) => {
        child.style.overflow = "hidden";
      });
    }
    text.style.margin = "0 3%";
    text.style.display = "flex";
    text.style.alignItems = "center";
    text.style.justifyContent = font.align === "left" ? "flex-start" : font.align === "right" ? "flex-end" : "center";
    if (!showLabel) {
      text.style.height = "1px";
      text.style.width = "1px";
      text.style.overflow = "hidden";
    }
  },
};
