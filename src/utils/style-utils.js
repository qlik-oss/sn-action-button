import DEFAULTS from "../style-defaults.ts";
import colorUtils from "./color-utils";
import { getImageUrl } from "./url-utils.js";

export const backgroundSize = {
  auto: "auto auto",
  alwaysFit: "contain",
  fitWidth: "100% auto",
  fitHeight: "auto 100%",
  fill: "100% 100%",
  alwaysFill: "cover",
  stretchFit: "100% 100%",
};

export const backgroundPosition = {
  "top-left": "top left",
  "center-left": "center left",
  "bottom-left": "bottom left",
  "top-center": "top center",
  "center-center": "center center",
  "bottom-center": "bottom center",
  "top-right": "top right",
  "center-right": "center right",
  "bottom-right": "bottom right",
  topLeft: "0% 0%", // top left
  centerLeft: "50% 0%", // center left
  bottomLeft: "100% 0%", // bottom left
  topCenter: "0% 50%", // top center
  centerCenter: "50% 50%", // center center
  bottomCenter: "100% 50%", // bottom center
  topRight: "0% 100%", // top right
  centerRight: "50% 100%", // center right
  bottomRight: "100% 100%", // bottom right
};

export const colorOptions = [
  {
    value: false,
    translation: "properties.colorMode.primary",
  },
  {
    value: true,
    translation: "properties.colorMode.byExpression",
  },
];

export const toggleOptions = [
  {
    value: true,
    translation: "properties.on",
  },
  {
    value: false,
    translation: "properties.off",
  },
];

export const sizeBehaviorOptions = [
  {
    value: "responsive",
    translation: "properties.responsive",
  },
  {
    value: "relative",
    translation: "properties.fluid",
  },
  {
    value: "fixed",
    translation: "properties.fixed",
  },
];

const trimDecimal = (num) => (num % 1 !== 0 ? num.toFixed(2) : num);

export const setTextFontSize = (text, font, textFontSize, hasIcon) => {
  if (font.style && font.style.italic) {
    if (hasIcon) {
      text.style.fontSize = `${trimDecimal(Math.max(textFontSize * 0.84, 8))}px`;
      text.children[0].style.marginRight = `${trimDecimal(text.offsetWidth * 0.04)}px`;
      text.children[1].style.marginRight = `${trimDecimal(text.offsetWidth * 0.04)}px`;
    } else {
      text.style.fontSize = `${trimDecimal(Math.max(textFontSize * 0.9, 8))}px`;
      text.children[0].style.marginRight = `${trimDecimal(text.offsetWidth * 0.02)}px`;
    }
  } else if (hasIcon) {
    text.style.fontSize = `${trimDecimal(Math.max(textFontSize * 0.88, 8))}px`;
    text.children[0].style.marginRight = `${trimDecimal(text.offsetWidth * 0.04)}px`;
  } else {
    text.style.fontSize = `${trimDecimal(Math.max(textFontSize * 0.92, 8))}px`;
  }
};

export const setFontSizeBehaviorStyle = (button, text, textSpan, hasIcon) => {
  text.offsetWidth <= button.clientWidth ? (textSpan.style.overflow = "visible") : (textSpan.style.overflow = "hidden");
  if (hasIcon) {
    text.children[0].style.marginRight = `${trimDecimal(text.offsetWidth * 0.04)}px`;
  }
};

export const adjustFontSizeBehavior = (button, font, text, textSpan, hasIcon) => {
  if (font.sizeBehavior === "fixed") {
    // The font size is independent of the box size and the length of the text
    text.style.fontSize = `${font.sizeFixed || DEFAULTS.FONT_SIZE_FIXED}px`;
    setFontSizeBehaviorStyle(button, text, textSpan, hasIcon);
  } else if (font.sizeBehavior === "relative") {
    const layoutFontSize = font.size || DEFAULTS.FONT_SIZE;
    // 40 here is just a hard coded value which seems to work quite well.
    const calculatedWidth = 40 / layoutFontSize;
    const fontSize = Math.min((button.clientWidth / calculatedWidth) * 10, button.clientHeight * layoutFontSize * 0.8);
    text.style.fontSize = `${fontSize}px`;
    setFontSizeBehaviorStyle(button, text, textSpan, hasIcon);
  } else {
    // 1. Setting font size to height of button container
    text.style.fontSize = `${button.clientHeight}px`;
    // 2. Adjust the font size to the height ratio between button container and text box
    let adjustedFontSize = (button.clientHeight / text.offsetHeight) * button.clientHeight;
    text.style.fontSize = `${adjustedFontSize}px`;
    // 3. Adjust the font size to the width ratio between button container and text box
    if (text.offsetWidth > button.clientWidth) {
      adjustedFontSize *= button.clientWidth / text.offsetWidth;
    }
    // 4. Setting final font size by scaling with the font size from the layout + other font styling
    const textFontSize = adjustedFontSize * (font.size || DEFAULTS.FONT_SIZE);
    setTextFontSize(text, font, textFontSize, hasIcon);
  }
};

export const getFontStyle = (font, fontColor, theme, formatProperty) => {
  let styles;
  if (!font) return undefined;
  styles += formatProperty("color", colorUtils.getColor(font, fontColor, theme));
  const fontStyle = font.style || DEFAULTS.FONT_STYLE;
  fontStyle.bold && (styles = formatProperty("font-weight", "bold"));
  fontStyle.italic && (styles += formatProperty("font-style", "italic"));
  return styles;
};

const getBackgroundColor = (background, theme) => {
  const primaryColor = theme.getDataColorSpecials().primary;
  return colorUtils.getColor(background, primaryColor, theme);
};

export const getBackgroundStyle = (background, theme, app, formatProperty) => {
  if (!background) return undefined;
  let styles;
  // Background color
  styles += formatProperty("background-color", getBackgroundColor(background, theme));
  // backgroundImage
  if ((background.useImage || background.mode === "media") && background.url.qStaticContentUrl) {
    let bgUrl = background.url.qStaticContentUrl.qUrl;
    if (bgUrl) {
      bgUrl = getImageUrl(bgUrl, app);
      styles += formatProperty("background-image", `url('${bgUrl}')`);
      styles += formatProperty("background-size", backgroundSize[background.size || DEFAULTS.BACKGROUND_SIZE]);
      styles += formatProperty(
        "background-position",
        backgroundPosition[background.position || DEFAULTS.BACKGROUND_POSITION]
      );
      styles += formatProperty("background-repeat", "no-repeat");
    }
  }
  return styles;
};

export const getBorderStyle = (element, background, border, theme, formatProperty) => {
  let styles;
  if (!border?.useBorder) styles = "border: none;";
  const backgroundColor = getBackgroundColor(background, theme);
  const lengthShortSide = Math.min(element.offsetWidth, element.offsetHeight);
  const borderColor = colorUtils.getColor(border, colorUtils.getFadedColor(backgroundColor), theme);
  const borderSize = ((border.width || DEFAULTS.BORDER_WIDTH) * lengthShortSide) / 2;
  styles += formatProperty("border", `${borderSize}px solid ${borderColor}`);
  styles += formatProperty("border-radius", `${((border.radius || DEFAULTS.BORDER_RADIUS) * lengthShortSide) / 2}px`);
  return styles;
};

export const setLabelSpan = (text, label, font) => {
  const textSpan = document.createElement("span");
  textSpan.textContent = label;
  textSpan.style.whiteSpace = "nowrap";
  textSpan.style.textOverflow = "ellipsis";
  font?.style && font.style.underline && (textSpan.style.textDecoration = "underline");
  return textSpan;
};

export const setIconStyle = (luiIcons, icon) => {
  const iconSpan = document.createElement("span");
  const iconType = luiIcons.find((iconObj) => iconObj.label === icon.iconType || iconObj.value === icon.iconType);
  iconSpan.style.textDecoration = "none";
  iconSpan.style.fontSize = "inherit";
  iconSpan.setAttribute("class", `lui-icon lui-icon--${iconType ? iconType.value : ""}`);
  return iconSpan;
};
