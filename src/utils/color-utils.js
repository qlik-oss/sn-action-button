/* eslint-disable no-cond-assign */
import DEFAULTS from "../style-defaults";
import CSSColors from "./css-colors";

const colorUtils = {
  resolveExpression: (input) => {
    // rgb
    let matches = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(input);
    if (matches) {
      return `rgb(${matches[1]},${matches[2]},${matches[3]})`;
    }
    // argb
    matches = /^argb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(input);
    if (matches) {
      const a = Math.round((matches[1] / 255) * 100) / 100;
      return `rgba(${matches[2]},${matches[3]},${matches[4]},${a})`;
    }
    // hex
    matches = /^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/i.exec(input);
    if (matches) {
      return input;
    }
    // css color
    const color = input && CSSColors[input.toLowerCase()];
    if (color) {
      const a = color.a !== undefined ? color.a : 1;
      return `rgba(${color.r},${color.g},${color.b},${a})`;
    }
    // invalid
    return "none";
  },
  getFadedColor(color) {
    const percent = 0.15;
    let f;
    let R;
    let B;
    let G;
    if (color.length > 7) {
      f = color.split(",");
      const rgba = f[0].indexOf("a") !== -1;
      R = rgba ? parseInt(f[0].slice(5), 10) : parseInt(f[0].slice(4), 10);
      G = parseInt(f[1], 10);
      B = parseInt(f[2], 10);
      return `${(rgba ? "rgba(" : "rgb(") + (Math.round((0 - R) * percent) + R)},${Math.round((0 - G) * percent) + G},${
        Math.round((0 - B) * percent) + B
      }${rgba ? `,${f[3]}` : ")"}`;
    }
    f = parseInt(color.slice(1), 16);
    R = f >> 16;
    G = (f >> 8) & 0x00ff;
    B = f & 0x0000ff;
    return `#${(
      0x1000000 +
      (Math.round((0 - R) * percent) + R) * 0x10000 +
      (Math.round((0 - G) * percent) + G) * 0x100 +
      (Math.round((0 - B) * percent) + B)
    )
      .toString(16)
      .slice(1)}`;
  },
  getColor({ useColorExpression = false, colorExpression = "", color = DEFAULTS.COLOR }, defaultColor, theme) {
    let resolvedColor;
    if (useColorExpression) {
      resolvedColor = colorUtils.resolveExpression(colorExpression);
    } else if (typeof color === "string") {
      resolvedColor = color;
    } else if (color) {
      resolvedColor = theme.getColorPickerColor(color);
    }
    return !resolvedColor || resolvedColor === "none" ? defaultColor : resolvedColor;
  },
};

export default colorUtils;
