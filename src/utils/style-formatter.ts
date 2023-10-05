import { stardust } from "@nebula.js/stardust";
import DEFAULTS from "../style-defaults";
import type { Style } from "../types";
import luiIcons from "./lui-icons.js";
import {
  adjustFontSizeBehavior,
  backgroundPosition,
  backgroundSize,
  getBackgroundStyle,
  getBorderStyle,
  getFontStyle,
  setIconStyle,
  setLabelSpan,
} from "./style-utils.js";

const formatProperty = (path: string, setting: number | string) => `${path}: ${setting};`;

export default {
  getStyles({
    style,
    disabled,
    theme,
    element,
    app,
  }: {
    style?: Style;
    disabled: boolean;
    theme: stardust.Theme;
    element: HTMLDivElement;
    app?: EngineAPI.IApp;
  }) {
    let styles =
      "width: 100%;height: 100%;transition: transform .1s ease-in-out;position: absolute;bottom: 0;left: 0; top: 0;right: 0;margin: auto;";
    const { font, background, border } = style ?? {};
    // enable
    styles += disabled ? formatProperty("opacity", 0.4) : formatProperty("cursor", "pointer");
    styles += getFontStyle(font, DEFAULTS.FONT_COLOR.color, theme);
    styles += getBackgroundStyle(background, theme, app, formatProperty);
    styles += getBorderStyle(element, background, border, theme, formatProperty);
    return styles;
  },
  createLabelAndIcon({
    button,
    theme,
    style,
    isSense,
  }: {
    button: HTMLButtonElement;
    theme: stardust.Theme;
    style?: Style;
    isSense: boolean;
  }) {
    const { icon, font, label = DEFAULTS.LABEL, showLabel = true } = style ?? {};
    // text element wrapping label and icon
    const text = document.createElement("text");
    text.style.whiteSpace = "nowrap";
    text.style.fontFamily = style?.font?.fontFamily || theme.getStyle("", "", "fontFamily") || DEFAULTS.FONT_FAMILY;
    const textSpan = setLabelSpan(label, font);
    text.appendChild(textSpan);

    // icon
    const hasIcon = isSense && icon?.useIcon && icon.iconType !== "";
    if (hasIcon) {
      let iconSpan: HTMLElement;
      iconSpan = setIconStyle(luiIcons, icon);
      icon?.position === "right" ? text.appendChild(iconSpan) : text.insertBefore(iconSpan, textSpan);
    }
    button.innerHTML = "";
    button.appendChild(text);

    adjustFontSizeBehavior(button, font, text, textSpan, hasIcon);

    if (text.style.fontSize === "8px") {
      const element = document.querySelectorAll("span");
      if (element) {
        element.forEach((child) => {
          child.style.overflow = "hidden";
        });
      }
    }
    text.style.margin = "0 3%";
    text.style.display = "flex";
    text.style.alignItems = "center";
    text.style.justifyContent =
      font && font.align === "left" ? "flex-start" : font && font.align === "right" ? "flex-end" : "center";
    if (!showLabel) {
      text.style.height = "1px";
      text.style.width = "1px";
      text.style.overflow = "hidden";
    }
  },
};
