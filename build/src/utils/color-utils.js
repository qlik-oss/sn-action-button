/* eslint-disable no-cond-assign */
import DEFAULTS from "../style-defaults";
import CSSColors from "./css-colors";
var colorUtils = {
    resolveExpression: function (input) {
        // rgb
        var matches = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(input);
        if (matches) {
            return "rgb(".concat(matches[1], ",").concat(matches[2], ",").concat(matches[3], ")");
        }
        // argb
        matches = /^argb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i.exec(input);
        if (matches) {
            var a = Math.round((matches[1] / 255) * 100) / 100;
            return "rgba(".concat(matches[2], ",").concat(matches[3], ",").concat(matches[4], ",").concat(a, ")");
        }
        // hex
        matches = /^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/i.exec(input);
        if (matches) {
            return input;
        }
        // css color
        var color = input && CSSColors[input.toLowerCase()];
        if (color) {
            var a = color.a !== undefined ? color.a : 1;
            return "rgba(".concat(color.r, ",").concat(color.g, ",").concat(color.b, ",").concat(a, ")");
        }
        // invalid
        return "none";
    },
    getFadedColor: function (color) {
        var percent = 0.15;
        var f;
        var R;
        var B;
        var G;
        if (color.length > 7) {
            f = color.split(",");
            var rgba = f[0].indexOf("a") !== -1;
            R = rgba ? parseInt(f[0].slice(5), 10) : parseInt(f[0].slice(4), 10);
            G = parseInt(f[1], 10);
            B = parseInt(f[2], 10);
            return "".concat((rgba ? "rgba(" : "rgb(") + (Math.round((0 - R) * percent) + R), ",").concat(Math.round((0 - G) * percent) + G, ",").concat(Math.round((0 - B) * percent) + B).concat(rgba ? ",".concat(f[3]) : ")");
        }
        f = parseInt(color.slice(1), 16);
        R = f >> 16;
        G = (f >> 8) & 0x00ff;
        B = f & 0x0000ff;
        return "#".concat((0x1000000 +
            (Math.round((0 - R) * percent) + R) * 0x10000 +
            (Math.round((0 - G) * percent) + G) * 0x100 +
            (Math.round((0 - B) * percent) + B))
            .toString(16)
            .slice(1));
    },
    getColor: function (_a, defaultColor, theme) {
        var _b = _a.useColorExpression, useColorExpression = _b === void 0 ? false : _b, _c = _a.colorExpression, colorExpression = _c === void 0 ? "" : _c, _d = _a.color, color = _d === void 0 ? DEFAULTS.COLOR : _d;
        var resolvedColor;
        if (useColorExpression) {
            resolvedColor = colorUtils.resolveExpression(colorExpression);
        }
        else if (typeof color === "string") {
            resolvedColor = color;
        }
        else {
            theme.resolvedColor = theme.getColorPickerColor(color);
        }
        return !resolvedColor || resolvedColor.color === "none" ? defaultColor : resolvedColor;
    },
};
export default colorUtils;
