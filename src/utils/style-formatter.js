import DEFAULTS from "../style-defaults";
import colorUtils from "./color-utils";
import luiIcons from "./lui-icons";
import { adjustFontSizeBehavior, backgroundPosition, backgroundSize } from "./style-utils";

const formatProperty = (path, setting) => `${path}: ${setting};`;

export default {
  getStyles({ style = {}, disabled, theme, element, imageUrl }) {
    let styles =
      "width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;";
    const { font = {}, background = {}, border = {} } = style;
    // enable
    styles += disabled ? formatProperty("opacity", 0.4) : formatProperty("cursor", "pointer");
    // font
    styles += formatProperty("color", colorUtils.getColor(font, DEFAULTS.FONT_COLOR.color, theme));
    const fontStyle = font.style || DEFAULTS.FONT_STYLE;
    fontStyle.bold && (styles += formatProperty("font-weight", "bold"));
    fontStyle.italic && (styles += formatProperty("font-style", "italic"));
    // background
    const primaryColor = theme.getDataColorSpecials().primary;
    const backgroundColor = colorUtils.getColor(background, primaryColor, theme);
    styles += formatProperty("background-color", backgroundColor);

    // backgroundImage
    if (background.useImage || background.mode === "media") {
      if (imageUrl) {
        styles += formatProperty("background-image", `url('${imageUrl}')`);
        styles += formatProperty("background-size", backgroundSize[background.size || DEFAULTS.BACKGROUND_SIZE]);
        styles += formatProperty(
          "background-position",
          backgroundPosition[background.position || DEFAULTS.BACKGROUND_POSITION]
        );
        styles += formatProperty("background-repeat", "no-repeat");
      }
    }

    // border
    if (border.useBorder) {
      const lengthShortSide = Math.min(element.offsetWidth, element.offsetHeight);
      const borderColor = colorUtils.getColor(border, colorUtils.getFadedColor(backgroundColor), theme);
      const borderSize = ((border.width || DEFAULTS.BORDER_WIDTH) * lengthShortSide) / 2;
      styles += formatProperty("border", `${borderSize}px solid ${borderColor}`);
      styles += formatProperty(
        "border-radius",
        `${((border.radius || DEFAULTS.BORDER_RADIUS) * lengthShortSide) / 2}px`
      );
    } else {
      styles += "border: none;";
    }

    return styles;
  },
  createLabelAndIcon({ button, theme, style = {}, isSense }) {
    const { icon = {}, font = {}, label = DEFAULTS.LABEL, showLabel = true } = style;
    // text element wrapping label and icon
    const text = document.createElement("text");
    text.style.whiteSpace = "nowrap";
    text.style.fontFamily = style.font.fontFamily || theme.getStyle("", "", "fontFamily") || DEFAULTS.FONT_FAMILY;
    // label
    const textSpan = document.createElement("span");
    textSpan.textContent = label;
    textSpan.style.whiteSpace = "nowrap";
    textSpan.style.textOverflow = "ellipsis";
    font.style && font.style.underline && (textSpan.style.textDecoration = "underline");
    text.appendChild(textSpan);
    // icon
    const hasIcon = isSense && icon.useIcon && icon.iconType !== "";
    if (hasIcon) {
      const iconSpan = document.createElement("span");
      const iconType = luiIcons.find((iconObj) => iconObj.label === icon.iconType || iconObj.value === icon.iconType);
      iconSpan.style.textDecoration = "none";
      iconSpan.style.fontSize = "inherit";
      iconSpan.setAttribute("class", `lui-icon lui-icon--${iconType ? iconType.value : ""}`);
      icon.position === "right" ? text.appendChild(iconSpan) : text.insertBefore(iconSpan, textSpan);
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
