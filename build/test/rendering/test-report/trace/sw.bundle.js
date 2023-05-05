"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Sn = Object.defineProperty;
var An = function (T, s, l) { return s in T ? Sn(T, s, { enumerable: !0, configurable: !0, writable: !0, value: l }) : T[s] = l; };
var Z = function (T, s, l) { return (An(T, typeof s != "symbol" ? s + "" : s, l), l); };
var Rn = /** @class */ (function () {
    function Rn() {
        Z(this, "_map");
        this._map = new Map;
    }
    Rn.prototype.set = function (s, l) { var _ = this._map.get(s); _ || (_ = [], this._map.set(s, _)), _.push(l); };
    Rn.prototype.get = function (s) { return this._map.get(s) || []; };
    Rn.prototype.has = function (s) { return this._map.has(s); };
    Rn.prototype.delete = function (s, l) { var _ = this._map.get(s); _ && _.includes(l) && this._map.set(s, _.filter(function (b) { return l !== b; })); };
    Rn.prototype.deleteAll = function (s) { this._map.delete(s); };
    Rn.prototype.hasValue = function (s, l) { var _ = this._map.get(s); return _ ? _.includes(l) : !1; };
    Object.defineProperty(Rn.prototype, "size", {
        get: function () { return this._map.size; },
        enumerable: false,
        configurable: true
    });
    Rn.prototype[Symbol.iterator] = function () { return this._map[Symbol.iterator](); };
    Rn.prototype.keys = function () { return this._map.keys(); };
    Rn.prototype.values = function () { var s = []; for (var _i = 0, _a = this.keys(); _i < _a.length; _i++) {
        var l = _a[_i];
        s.push.apply(s, this.get(l));
    } return s; };
    Rn.prototype.clear = function () { this._map.clear(); };
    return Rn;
}());
var En = /** @class */ (function () {
    function En(s, l, _) {
        Z(this, "_snapshots");
        Z(this, "_index");
        Z(this, "snapshotName");
        Z(this, "_resources");
        Z(this, "_snapshot");
        Z(this, "_callId");
        this._resources = s, this._snapshots = l, this._index = _, this._snapshot = l[_], this._callId = l[_].callId, this.snapshotName = l[_].snapshotName;
    }
    En.prototype.snapshot = function () { return this._snapshots[this._index]; };
    En.prototype.viewport = function () { return this._snapshots[this._index].viewport; };
    En.prototype.render = function () {
        var _this = this;
        var s = function (C, H, D) { if (typeof C == "string") {
            var F = Cn(C);
            return D === "STYLE" || D === "style" ? Fn(F) : F;
        } if (!C._string)
            if (Array.isArray(C[0])) {
                var F = H - C[0][0];
                if (F >= 0 && F <= H) {
                    var j = In(_this._snapshots[F]), L = C[0][1];
                    L >= 0 && L < j.length && (C._string = s(j[L], F, D));
                }
            }
            else if (typeof C[0] == "string") {
                var F = [];
                F.push("<", C[0]);
                var j = C[0] === "IFRAME" || C[0] === "FRAME", L = C[0] === "A";
                for (var _i = 0, _a = Object.entries(C[1] || {}); _i < _a.length; _i++) {
                    var _b = _a[_i], G = _b[0], V = _b[1];
                    var Y = j && G.toLowerCase() === "src" ? "__playwright_src__" : G;
                    var st = V;
                    (G.toLowerCase() === "href" || G.toLowerCase() === "src") && (L ? st = "link://" + V : st = Vt(V)), F.push(" ", Y, '="', Un(st), '"');
                }
                F.push(">");
                for (var G = 2; G < C.length; G++)
                    F.push(s(C[G], H, C[0]));
                Tn.has(C[0]) || F.push("</", C[0], ">"), C._string = F.join("");
            }
            else
                C._string = ""; return C._string; }, l = this._snapshot;
        var _ = s(l.html, this._index, void 0);
        return _ ? (_ = (l.doctype ? "<!DOCTYPE ".concat(l.doctype, ">") : "") + ["<style>*,*::before,*::after { visibility: hidden }</style>", "<style>*[__playwright_target__=\"".concat(this.snapshotName, "\"] { outline: 2px solid #006ab1 !important; background-color: #6fa8dc7f !important; }</style>"), "<style>*[__playwright_target__=\"".concat(this._callId, "\"] { outline: 2px solid #006ab1 !important; background-color: #6fa8dc7f !important; }</style>"), "<script>".concat(zn(), "</script>")].join("") + _, { html: _, pageId: l.pageId, frameId: l.frameId, index: this._index }) : { html: "", pageId: l.pageId, frameId: l.frameId, index: this._index };
    };
    En.prototype.resourceByUrl = function (s) { var l = this._snapshot; var _; for (var _i = 0, _a = this._resources; _i < _a.length; _i++) {
        var b = _a[_i];
        if (typeof b._monotonicTime == "number" && b._monotonicTime >= l.timestamp)
            break;
        if (b._frameref === l.frameId && b.request.url === s) {
            _ = b;
            break;
        }
    } if (!_)
        for (var _b = 0, _c = this._resources; _b < _c.length; _b++) {
            var b = _c[_b];
            if (typeof b._monotonicTime == "number" && b._monotonicTime >= l.timestamp)
                break;
            if (b.request.url === s)
                return b;
        } if (_) {
        for (var _d = 0, _g = l.resourceOverrides; _d < _g.length; _d++) {
            var b = _g[_d];
            if (s === b.url && b.sha1) {
                _ = __assign(__assign({}, _), { response: __assign(__assign({}, _.response), { content: __assign(__assign({}, _.response.content), { _sha1: b.sha1 }) }) });
                break;
            }
        }
    } return _; };
    return En;
}());
var Tn = new Set(["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "MENUITEM", "META", "PARAM", "SOURCE", "TRACK", "WBR"]), Qe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function Un(T) { return T.replace(/[&<>"']/ug, function (s) { return Qe[s]; }); }
function Cn(T) { return T.replace(/[&<]/ug, function (s) { return Qe[s]; }); }
function In(T) { if (!T._nodes) {
    var s_1 = [], l_1 = function (_) { if (typeof _ == "string")
        s_1.push(_);
    else if (typeof _[0] == "string") {
        for (var b = 2; b < _.length; b++)
            l_1(_[b]);
        s_1.push(_);
    } };
    l_1(T.html), T._nodes = s_1;
} return T._nodes; }
function zn() {
    function T(s) { var l = [], _ = [], b = function (D) { for (var _i = 0, _a = D.querySelectorAll("[__playwright_scroll_top_]"); _i < _a.length; _i++) {
        var F = _a[_i];
        l.push(F);
    } for (var _b = 0, _c = D.querySelectorAll("[__playwright_scroll_left_]"); _b < _c.length; _b++) {
        var F = _c[_b];
        _.push(F);
    } for (var _d = 0, _g = D.querySelectorAll("[__playwright_value_]"); _d < _g.length; _d++) {
        var F = _g[_d];
        F.value = F.getAttribute("__playwright_value_"), F.removeAttribute("__playwright_value_");
    } for (var _j = 0, _k = D.querySelectorAll("[__playwright_checked_]"); _j < _k.length; _j++) {
        var F = _k[_j];
        F.checked = F.getAttribute("__playwright_checked_") === "true", F.removeAttribute("__playwright_checked_");
    } for (var _l = 0, _m = D.querySelectorAll("[__playwright_selected_]"); _l < _m.length; _l++) {
        var F = _m[_l];
        F.selected = F.getAttribute("__playwright_selected_") === "true", F.removeAttribute("__playwright_selected_");
    } for (var _o = 0, _p = D.querySelectorAll("iframe, frame"); _o < _p.length; _o++) {
        var F = _p[_o];
        var j = F.getAttribute("__playwright_src__");
        if (!j)
            F.setAttribute("src", 'data:text/html,<body style="background: #ddd"></body>');
        else {
            var L = new URL(s(window.location.href));
            L.searchParams.delete("pointX"), L.searchParams.delete("pointY");
            var G = L.pathname.lastIndexOf("/snapshot/");
            G !== -1 && (L.pathname = L.pathname.substring(0, G + 1)), L.pathname += j.substring(1), F.setAttribute("src", L.toString());
        }
    } {
        var F = D.querySelector("body[__playwright_custom_elements__]");
        if (F && window.customElements) {
            var j = (F.getAttribute("__playwright_custom_elements__") || "").split(",");
            for (var _q = 0, j_1 = j; _q < j_1.length; _q++) {
                var L = j_1[_q];
                window.customElements.define(L, /** @class */ (function (_super) {
                    __extends(class_1, _super);
                    function class_1() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return class_1;
                }(HTMLElement)));
            }
        }
    } for (var _r = 0, _s = D.querySelectorAll("template[__playwright_shadow_root_]"); _r < _s.length; _r++) {
        var F = _s[_r];
        var j = F, L = j.parentElement.attachShadow({ mode: "open" });
        L.appendChild(j.content), j.remove(), b(L);
    } if ("adoptedStyleSheets" in D) {
        var F = __spreadArray([], D.adoptedStyleSheets, true);
        for (var _u = 0, _v = D.querySelectorAll("template[__playwright_style_sheet_]"); _u < _v.length; _u++) {
            var j = _v[_u];
            var L = j, G = new CSSStyleSheet;
            G.replaceSync(L.getAttribute("__playwright_style_sheet_")), F.push(G);
        }
        D.adoptedStyleSheets = F;
    } }, C = function () { window.removeEventListener("load", C); for (var _i = 0, l_2 = l; _i < l_2.length; _i++) {
        var L = l_2[_i];
        L.scrollTop = +L.getAttribute("__playwright_scroll_top_"), L.removeAttribute("__playwright_scroll_top_");
    } for (var _a = 0, _1 = _; _a < _1.length; _a++) {
        var L = _1[_a];
        L.scrollLeft = +L.getAttribute("__playwright_scroll_left_"), L.removeAttribute("__playwright_scroll_left_");
    } var D = new URL(window.location.href).searchParams, F = D.get("pointX"), j = D.get("pointY"); if (F) {
        var L = document.createElement("x-pw-pointer");
        L.style.position = "fixed", L.style.backgroundColor = "#f44336", L.style.width = "20px", L.style.height = "20px", L.style.borderRadius = "10px", L.style.margin = "-10px 0 0 -10px", L.style.zIndex = "2147483647", L.style.left = F + "px", L.style.top = j + "px", document.documentElement.appendChild(L);
    } document.styleSheets[0].disabled = !0; }, H = function () { return b(document); }; window.addEventListener("load", C), window.addEventListener("DOMContentLoaded", H); }
    return "\n(".concat(T.toString(), ")(").concat($t.toString(), ")");
}
var Ye = ["about:", "blob:", "data:", "file:", "ftp:", "http:", "https:", "mailto:", "sftp:", "ws:", "wss:"], Ke = "http://playwright.bloburl/#";
function Vt(T) { T.startsWith(Ke) && (T = T.substring(Ke.length)); try {
    var s = new URL(T);
    if (s.protocol === "javascript:" || s.protocol === "vbscript:")
        return "javascript:void(0)";
    if (!(s.protocol === "blob:") && Ye.includes(s.protocol))
        return T;
    var _ = "pw-" + s.protocol.slice(0, s.protocol.length - 1);
    return s.protocol = "https:", s.hostname = s.hostname ? "".concat(_, "--").concat(s.hostname) : _, s.toString();
}
catch (_a) {
    return T;
} }
var Mn = /url\(['"]?([\w-]+:)\/\//ig;
function Fn(T) { return T.replace(Mn, function (s, l) { return !(l === "blob:") && Ye.includes(l) ? s : s.replace(l + "//", "https://pw-".concat(l.slice(0, -1), "--")); }); }
function $t(T) { var s = new URL(T); return s.pathname.endsWith("/popout.html") ? s.searchParams.get("r") : T; }
var Dn = /** @class */ (function () {
    function Dn(s) {
        Z(this, "_snapshotStorage");
        Z(this, "_snapshotIds", new Map);
        this._snapshotStorage = s;
    }
    Dn.prototype.serveSnapshot = function (s, l, _) { var b = this._snapshot(s.substring(9), l); if (!b)
        return new Response(null, { status: 404 }); var C = b.render(); return this._snapshotIds.set(_, b), new Response(C.html, { status: 200, headers: { "Content-Type": "text/html" } }); };
    Dn.prototype.serveSnapshotInfo = function (s, l) { var _ = this._snapshot(s.substring(13), l); return this._respondWithJson(_ ? { viewport: _.viewport(), url: _.snapshot().frameUrl } : { error: "No snapshot found" }); };
    Dn.prototype._snapshot = function (s, l) { var _ = l.get("name"); return this._snapshotStorage.snapshotByName(s.slice(1), _); };
    Dn.prototype._respondWithJson = function (s) { return new Response(JSON.stringify(s), { status: 200, headers: { "Cache-Control": "public, max-age=31536000", "Content-Type": "application/json" } }); };
    Dn.prototype.serveResource = function (s, l) {
        return __awaiter(this, void 0, void 0, function () { var _, b, _i, s_2, V, C, H, _a, D, j, _b, _c, _d, V, Y, L, G; return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    b = this._snapshotIds.get(l);
                    for (_i = 0, s_2 = s; _i < s_2.length; _i++) {
                        V = s_2[_i];
                        if (_ = b == null ? void 0 : b.resourceByUrl(Ln(V)), _)
                            break;
                    }
                    if (!_)
                        return [2 /*return*/, new Response(null, { status: 404 })];
                    C = _.response.content._sha1;
                    if (!C) return [3 /*break*/, 2];
                    return [4 /*yield*/, this._snapshotStorage.resourceContent(C)];
                case 1:
                    _a = (_g.sent()) || new Blob([]);
                    return [3 /*break*/, 3];
                case 2:
                    _a = new Blob([]);
                    _g.label = 3;
                case 3:
                    H = _a;
                    D = _.response.content.mimeType;
                    /^text\/|^application\/(javascript|json)/.test(D) && !D.includes("charset") && (D = "".concat(D, "; charset=utf-8"));
                    j = new Headers;
                    j.set("Content-Type", D);
                    for (_b = 0, _c = _.response.headers; _b < _c.length; _b++) {
                        _d = _c[_b], V = _d.name, Y = _d.value;
                        j.set(V, Y);
                    }
                    j.delete("Content-Encoding"), j.delete("Access-Control-Allow-Origin"), j.set("Access-Control-Allow-Origin", "*"), j.delete("Content-Length"), j.set("Content-Length", String(H.size)), j.set("Cache-Control", "public, max-age=31536000");
                    L = _.response.status, G = L === 101 || L === 204 || L === 205 || L === 304;
                    return [2 /*return*/, new Response(G ? null : H, { headers: j, status: _.response.status, statusText: _.response.statusText })];
            }
        }); });
    };
    return Dn;
}());
function Ln(T) { try {
    var s = new URL(T);
    return s.hash = "", s.toString();
}
catch (_a) {
    return T;
} }
function On(T) { var s = new Map, l = T.files, _ = T.stacks; for (var _i = 0, _2 = _; _i < _2.length; _i++) {
    var b = _2[_i];
    var C = b[0], H = b[1];
    s.set("call@".concat(C), H.map(function (D) { return ({ file: l[D[0]], line: D[1], column: D[2], function: D[3] }); }));
} return s; }
var Nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bn(T) { return T && T.__esModule && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T; }
var Et = {}, Wn = { get exports() { return Et; }, set exports(T) { Et = T; } };
(function (T, s) { (function (l, _) { _(s); })(Nn, function (l) { var H = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], D = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255], F = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112], G = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], Y = 15; function st() { var n, e, t, r, o, d; function u(x, m, S, I, W, N, a, p, i, c, h) { var g, A, v, y, f, k, z, U, E, R, M, B, $, O, q; R = 0, f = S; do
    t[x[m + R]]++, R++, f--;
while (f !== 0); if (t[0] == S)
    return a[0] = -1, p[0] = 0, 0; for (U = p[0], k = 1; k <= Y && t[k] === 0; k++)
    ; for (z = k, U < k && (U = k), f = Y; f !== 0 && t[f] === 0; f--)
    ; for (v = f, U > f && (U = f), p[0] = U, O = 1 << k; k < f; k++, O <<= 1)
    if ((O -= t[k]) < 0)
        return -3; if ((O -= t[f]) < 0)
    return -3; for (t[f] += O, d[1] = k = 0, R = 1, $ = 2; --f != 0;)
    d[$] = k += t[R], $++, R++; f = 0, R = 0; do
    (k = x[m + R]) !== 0 && (h[d[k]++] = f), R++;
while (++f < S); for (S = d[v], d[0] = f = 0, R = 0, y = -1, B = -U, o[0] = 0, M = 0, q = 0; z <= v; z++)
    for (g = t[z]; g-- != 0;) {
        for (; z > B + U;) {
            if (y++, B += U, q = v - B, q = q > U ? U : q, (A = 1 << (k = z - B)) > g + 1 && (A -= g + 1, $ = z, k < q))
                for (; ++k < q && !((A <<= 1) <= t[++$]);)
                    A -= t[$];
            if (q = 1 << k, c[0] + q > 1440)
                return -3;
            o[y] = M = c[0], c[0] += q, y !== 0 ? (d[y] = f, r[0] = k, r[1] = U, k = f >>> B - U, r[2] = M - o[y - 1] - k, i.set(r, 3 * (o[y - 1] + k))) : a[0] = M;
        }
        for (r[1] = z - B, R >= S ? r[0] = 192 : h[R] < I ? (r[0] = h[R] < 256 ? 0 : 96, r[2] = h[R++]) : (r[0] = N[h[R] - I] + 16 + 64, r[2] = W[h[R++] - I]), A = 1 << z - B, k = f >>> B; k < q; k += A)
            i.set(r, 3 * (M + k));
        for (k = 1 << z - 1; f & k; k >>>= 1)
            f ^= k;
        for (f ^= k, E = (1 << B) - 1; (f & E) != d[y];)
            y--, B -= U, E = (1 << B) - 1;
    } return O !== 0 && v != 1 ? -5 : 0; } function w(x) { var m; for (n || (n = [], e = [], t = new Int32Array(16), r = [], o = new Int32Array(Y), d = new Int32Array(16)), e.length < x && (e = []), m = 0; m < x; m++)
    e[m] = 0; for (m = 0; m < 16; m++)
    t[m] = 0; for (m = 0; m < 3; m++)
    r[m] = 0; o.set(t.subarray(0, Y), 0), d.set(t.subarray(0, 16), 0); } this.inflate_trees_bits = function (x, m, S, I, W) { var N; return w(19), n[0] = 0, N = u(x, 0, 19, 19, null, null, S, m, I, n, e), N == -3 ? W.msg = "oversubscribed dynamic bit lengths tree" : N != -5 && m[0] !== 0 || (W.msg = "incomplete dynamic bit lengths tree", N = -3), N; }, this.inflate_trees_dynamic = function (x, m, S, I, W, N, a, p, i) { var c; return w(288), n[0] = 0, c = u(S, 0, x, 257, j, L, N, I, p, n, e), c != 0 || I[0] === 0 ? (c == -3 ? i.msg = "oversubscribed literal/length tree" : c != -4 && (i.msg = "incomplete literal/length tree", c = -3), c) : (w(288), c = u(S, x, m, 0, G, V, a, W, p, n, e), c != 0 || W[0] === 0 && x > 257 ? (c == -3 ? i.msg = "oversubscribed distance tree" : c == -5 ? (i.msg = "incomplete distance tree", c = -3) : c != -4 && (i.msg = "empty distance tree with lengths", c = -3), c) : 0); }; } st.inflate_trees_fixed = function (n, e, t, r) { return n[0] = 9, e[0] = 5, t[0] = D, r[0] = F, 0; }; function Je() { var n = this; var e, t, r, o, d = 0, u = 0, w = 0, x = 0, m = 0, S = 0, I = 0, W = 0, N = 0, a = 0; function p(i, c, h, g, A, v, y, f) { var k, z, U, E, R, M, B, $, O, q, dt, ut, P, wt, K, Q; B = f.next_in_index, $ = f.avail_in, R = y.bitb, M = y.bitk, O = y.write, q = O < y.read ? y.read - O - 1 : y.end - O, dt = H[i], ut = H[c]; do {
    for (; M < 20;)
        $--, R |= (255 & f.read_byte(B++)) << M, M += 8;
    if (k = R & dt, z = h, U = g, Q = 3 * (U + k), (E = z[Q]) !== 0)
        for (;;) {
            if (R >>= z[Q + 1], M -= z[Q + 1], (16 & E) != 0) {
                for (E &= 15, P = z[Q + 2] + (R & H[E]), R >>= E, M -= E; M < 15;)
                    $--, R |= (255 & f.read_byte(B++)) << M, M += 8;
                for (k = R & ut, z = A, U = v, Q = 3 * (U + k), E = z[Q];;) {
                    if (R >>= z[Q + 1], M -= z[Q + 1], (16 & E) != 0) {
                        for (E &= 15; M < E;)
                            $--, R |= (255 & f.read_byte(B++)) << M, M += 8;
                        if (wt = z[Q + 2] + (R & H[E]), R >>= E, M -= E, q -= P, O >= wt)
                            K = O - wt, O - K > 0 && 2 > O - K ? (y.window[O++] = y.window[K++], y.window[O++] = y.window[K++], P -= 2) : (y.window.set(y.window.subarray(K, K + 2), O), O += 2, K += 2, P -= 2);
                        else {
                            K = O - wt;
                            do
                                K += y.end;
                            while (K < 0);
                            if (E = y.end - K, P > E) {
                                if (P -= E, O - K > 0 && E > O - K)
                                    do
                                        y.window[O++] = y.window[K++];
                                    while (--E != 0);
                                else
                                    y.window.set(y.window.subarray(K, K + E), O), O += E, K += E, E = 0;
                                K = 0;
                            }
                        }
                        if (O - K > 0 && P > O - K)
                            do
                                y.window[O++] = y.window[K++];
                            while (--P != 0);
                        else
                            y.window.set(y.window.subarray(K, K + P), O), O += P, K += P, P = 0;
                        break;
                    }
                    if (64 & E)
                        return f.msg = "invalid distance code", P = f.avail_in - $, P = M >> 3 < P ? M >> 3 : P, $ += P, B -= P, M -= P << 3, y.bitb = R, y.bitk = M, f.avail_in = $, f.total_in += B - f.next_in_index, f.next_in_index = B, y.write = O, -3;
                    k += z[Q + 2], k += R & H[E], Q = 3 * (U + k), E = z[Q];
                }
                break;
            }
            if (64 & E)
                return 32 & E ? (P = f.avail_in - $, P = M >> 3 < P ? M >> 3 : P, $ += P, B -= P, M -= P << 3, y.bitb = R, y.bitk = M, f.avail_in = $, f.total_in += B - f.next_in_index, f.next_in_index = B, y.write = O, 1) : (f.msg = "invalid literal/length code", P = f.avail_in - $, P = M >> 3 < P ? M >> 3 : P, $ += P, B -= P, M -= P << 3, y.bitb = R, y.bitk = M, f.avail_in = $, f.total_in += B - f.next_in_index, f.next_in_index = B, y.write = O, -3);
            if (k += z[Q + 2], k += R & H[E], Q = 3 * (U + k), (E = z[Q]) === 0) {
                R >>= z[Q + 1], M -= z[Q + 1], y.window[O++] = z[Q + 2], q--;
                break;
            }
        }
    else
        R >>= z[Q + 1], M -= z[Q + 1], y.window[O++] = z[Q + 2], q--;
} while (q >= 258 && $ >= 10); return P = f.avail_in - $, P = M >> 3 < P ? M >> 3 : P, $ += P, B -= P, M -= P << 3, y.bitb = R, y.bitk = M, f.avail_in = $, f.total_in += B - f.next_in_index, f.next_in_index = B, y.write = O, 0; } n.init = function (i, c, h, g, A, v) { e = 0, I = i, W = c, r = h, N = g, o = A, a = v, t = null; }, n.proc = function (i, c, h) { var g, A, v, y, f, k, z, U = 0, E = 0, R = 0; for (R = c.next_in_index, y = c.avail_in, U = i.bitb, E = i.bitk, f = i.write, k = f < i.read ? i.read - f - 1 : i.end - f;;)
    switch (e) {
        case 0:
            if (k >= 258 && y >= 10 && (i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, h = p(I, W, r, N, o, a, i, c), R = c.next_in_index, y = c.avail_in, U = i.bitb, E = i.bitk, f = i.write, k = f < i.read ? i.read - f - 1 : i.end - f, h != 0)) {
                e = h == 1 ? 7 : 9;
                break;
            }
            w = I, t = r, u = N, e = 1;
        case 1:
            for (g = w; E < g;) {
                if (y === 0)
                    return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
                h = 0, y--, U |= (255 & c.read_byte(R++)) << E, E += 8;
            }
            if (A = 3 * (u + (U & H[g])), U >>>= t[A + 1], E -= t[A + 1], v = t[A], v === 0) {
                x = t[A + 2], e = 6;
                break;
            }
            if (16 & v) {
                m = 15 & v, d = t[A + 2], e = 2;
                break;
            }
            if (!(64 & v)) {
                w = v, u = A / 3 + t[A + 2];
                break;
            }
            if (32 & v) {
                e = 7;
                break;
            }
            return e = 9, c.msg = "invalid literal/length code", h = -3, i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
        case 2:
            for (g = m; E < g;) {
                if (y === 0)
                    return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
                h = 0, y--, U |= (255 & c.read_byte(R++)) << E, E += 8;
            }
            d += U & H[g], U >>= g, E -= g, w = W, t = o, u = a, e = 3;
        case 3:
            for (g = w; E < g;) {
                if (y === 0)
                    return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
                h = 0, y--, U |= (255 & c.read_byte(R++)) << E, E += 8;
            }
            if (A = 3 * (u + (U & H[g])), U >>= t[A + 1], E -= t[A + 1], v = t[A], (16 & v) != 0) {
                m = 15 & v, S = t[A + 2], e = 4;
                break;
            }
            if (!(64 & v)) {
                w = v, u = A / 3 + t[A + 2];
                break;
            }
            return e = 9, c.msg = "invalid distance code", h = -3, i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
        case 4:
            for (g = m; E < g;) {
                if (y === 0)
                    return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
                h = 0, y--, U |= (255 & c.read_byte(R++)) << E, E += 8;
            }
            S += U & H[g], U >>= g, E -= g, e = 5;
        case 5:
            for (z = f - S; z < 0;)
                z += i.end;
            for (; d !== 0;) {
                if (k === 0 && (f == i.end && i.read !== 0 && (f = 0, k = f < i.read ? i.read - f - 1 : i.end - f), k === 0 && (i.write = f, h = i.inflate_flush(c, h), f = i.write, k = f < i.read ? i.read - f - 1 : i.end - f, f == i.end && i.read !== 0 && (f = 0, k = f < i.read ? i.read - f - 1 : i.end - f), k === 0)))
                    return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
                i.window[f++] = i.window[z++], k--, z == i.end && (z = 0), d--;
            }
            e = 0;
            break;
        case 6:
            if (k === 0 && (f == i.end && i.read !== 0 && (f = 0, k = f < i.read ? i.read - f - 1 : i.end - f), k === 0 && (i.write = f, h = i.inflate_flush(c, h), f = i.write, k = f < i.read ? i.read - f - 1 : i.end - f, f == i.end && i.read !== 0 && (f = 0, k = f < i.read ? i.read - f - 1 : i.end - f), k === 0)))
                return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
            h = 0, i.window[f++] = x, k--, e = 0;
            break;
        case 7:
            if (E > 7 && (E -= 8, y++, R--), i.write = f, h = i.inflate_flush(c, h), f = i.write, k = f < i.read ? i.read - f - 1 : i.end - f, i.read != i.write)
                return i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
            e = 8;
        case 8: return h = 1, i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
        case 9: return h = -3, i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
        default: return h = -2, i.bitb = U, i.bitk = E, c.avail_in = y, c.total_in += R - c.next_in_index, c.next_in_index = R, i.write = f, i.inflate_flush(c, h);
    } }, n.free = function () { }; } var Kt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]; function Xe(n, e) { var t = this; var r, o = 0, d = 0, u = 0, w = 0; var x = [0], m = [0], S = new Je; var I = 0, W = new Int32Array(4320); var N = new st; t.bitk = 0, t.bitb = 0, t.window = new Uint8Array(e), t.end = e, t.read = 0, t.write = 0, t.reset = function (a, p) { p && (p[0] = 0), o == 6 && S.free(a), o = 0, t.bitk = 0, t.bitb = 0, t.read = t.write = 0; }, t.reset(n, null), t.inflate_flush = function (a, p) { var i, c, h; return c = a.next_out_index, h = t.read, i = (h <= t.write ? t.write : t.end) - h, i > a.avail_out && (i = a.avail_out), i !== 0 && p == -5 && (p = 0), a.avail_out -= i, a.total_out += i, a.next_out.set(t.window.subarray(h, h + i), c), c += i, h += i, h == t.end && (h = 0, t.write == t.end && (t.write = 0), i = t.write - h, i > a.avail_out && (i = a.avail_out), i !== 0 && p == -5 && (p = 0), a.avail_out -= i, a.total_out += i, a.next_out.set(t.window.subarray(h, h + i), c), c += i, h += i), a.next_out_index = c, t.read = h, p; }, t.proc = function (a, p) { var i, c, h, g, A, v, y, f; for (g = a.next_in_index, A = a.avail_in, c = t.bitb, h = t.bitk, v = t.write, y = v < t.read ? t.read - v - 1 : t.end - v;;) {
    var k = void 0, z = void 0, U = void 0, E = void 0, R = void 0, M = void 0, B = void 0, $ = void 0;
    switch (o) {
        case 0:
            for (; h < 3;) {
                if (A === 0)
                    return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                p = 0, A--, c |= (255 & a.read_byte(g++)) << h, h += 8;
            }
            switch (i = 7 & c, I = 1 & i, i >>> 1) {
                case 0:
                    c >>>= 3, h -= 3, i = 7 & h, c >>>= i, h -= i, o = 1;
                    break;
                case 1:
                    k = [], z = [], U = [[]], E = [[]], st.inflate_trees_fixed(k, z, U, E), S.init(k[0], z[0], U[0], 0, E[0], 0), c >>>= 3, h -= 3, o = 6;
                    break;
                case 2:
                    c >>>= 3, h -= 3, o = 3;
                    break;
                case 3: return c >>>= 3, h -= 3, o = 9, a.msg = "invalid block type", p = -3, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            }
            break;
        case 1:
            for (; h < 32;) {
                if (A === 0)
                    return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                p = 0, A--, c |= (255 & a.read_byte(g++)) << h, h += 8;
            }
            if ((~c >>> 16 & 65535) != (65535 & c))
                return o = 9, a.msg = "invalid stored block lengths", p = -3, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            d = 65535 & c, c = h = 0, o = d !== 0 ? 2 : I !== 0 ? 7 : 0;
            break;
        case 2:
            if (A === 0 || y === 0 && (v == t.end && t.read !== 0 && (v = 0, y = v < t.read ? t.read - v - 1 : t.end - v), y === 0 && (t.write = v, p = t.inflate_flush(a, p), v = t.write, y = v < t.read ? t.read - v - 1 : t.end - v, v == t.end && t.read !== 0 && (v = 0, y = v < t.read ? t.read - v - 1 : t.end - v), y === 0)))
                return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            if (p = 0, i = d, i > A && (i = A), i > y && (i = y), t.window.set(a.read_buf(g, i), v), g += i, A -= i, v += i, y -= i, (d -= i) != 0)
                break;
            o = I !== 0 ? 7 : 0;
            break;
        case 3:
            for (; h < 14;) {
                if (A === 0)
                    return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                p = 0, A--, c |= (255 & a.read_byte(g++)) << h, h += 8;
            }
            if (u = i = 16383 & c, (31 & i) > 29 || (i >> 5 & 31) > 29)
                return o = 9, a.msg = "too many length or distance symbols", p = -3, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            if (i = 258 + (31 & i) + (i >> 5 & 31), !r || r.length < i)
                r = [];
            else
                for (f = 0; f < i; f++)
                    r[f] = 0;
            c >>>= 14, h -= 14, w = 0, o = 4;
        case 4:
            for (; w < 4 + (u >>> 10);) {
                for (; h < 3;) {
                    if (A === 0)
                        return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                    p = 0, A--, c |= (255 & a.read_byte(g++)) << h, h += 8;
                }
                r[Kt[w++]] = 7 & c, c >>>= 3, h -= 3;
            }
            for (; w < 19;)
                r[Kt[w++]] = 0;
            if (x[0] = 7, i = N.inflate_trees_bits(r, x, m, W, a), i != 0)
                return (p = i) == -3 && (r = null, o = 9), t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            w = 0, o = 5;
        case 5:
            for (; i = u, !(w >= 258 + (31 & i) + (i >> 5 & 31));) {
                var O = void 0, q = void 0;
                for (i = x[0]; h < i;) {
                    if (A === 0)
                        return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                    p = 0, A--, c |= (255 & a.read_byte(g++)) << h, h += 8;
                }
                if (i = W[3 * (m[0] + (c & H[i])) + 1], q = W[3 * (m[0] + (c & H[i])) + 2], q < 16)
                    c >>>= i, h -= i, r[w++] = q;
                else {
                    for (f = q == 18 ? 7 : q - 14, O = q == 18 ? 11 : 3; h < i + f;) {
                        if (A === 0)
                            return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                        p = 0, A--, c |= (255 & a.read_byte(g++)) << h, h += 8;
                    }
                    if (c >>>= i, h -= i, O += c & H[f], c >>>= f, h -= f, f = w, i = u, f + O > 258 + (31 & i) + (i >> 5 & 31) || q == 16 && f < 1)
                        return r = null, o = 9, a.msg = "invalid bit length repeat", p = -3, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
                    q = q == 16 ? r[f - 1] : 0;
                    do
                        r[f++] = q;
                    while (--O != 0);
                    w = f;
                }
            }
            if (m[0] = -1, R = [], M = [], B = [], $ = [], R[0] = 9, M[0] = 6, i = u, i = N.inflate_trees_dynamic(257 + (31 & i), 1 + (i >> 5 & 31), r, R, M, B, $, W, a), i != 0)
                return i == -3 && (r = null, o = 9), p = i, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            S.init(R[0], M[0], W, B[0], W, $[0]), o = 6;
        case 6:
            if (t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, (p = S.proc(t, a, p)) != 1)
                return t.inflate_flush(a, p);
            if (p = 0, S.free(a), g = a.next_in_index, A = a.avail_in, c = t.bitb, h = t.bitk, v = t.write, y = v < t.read ? t.read - v - 1 : t.end - v, I === 0) {
                o = 0;
                break;
            }
            o = 7;
        case 7:
            if (t.write = v, p = t.inflate_flush(a, p), v = t.write, y = v < t.read ? t.read - v - 1 : t.end - v, t.read != t.write)
                return t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
            o = 8;
        case 8: return p = 1, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
        case 9: return p = -3, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
        default: return p = -2, t.bitb = c, t.bitk = h, a.avail_in = A, a.total_in += g - a.next_in_index, a.next_in_index = g, t.write = v, t.inflate_flush(a, p);
    }
} }, t.free = function (a) { t.reset(a, null), t.window = null, W = null; }, t.set_dictionary = function (a, p, i) { t.window.set(a.subarray(p, p + i), 0), t.read = t.write = i; }, t.sync_point = function () { return o == 1 ? 1 : 0; }; } var at = 13, tn = [0, 0, 255, 255]; function en() { var n = this; function e(t) { return t && t.istate ? (t.total_in = t.total_out = 0, t.msg = null, t.istate.mode = 7, t.istate.blocks.reset(t, null), 0) : -2; } n.mode = 0, n.method = 0, n.was = [0], n.need = 0, n.marker = 0, n.wbits = 0, n.inflateEnd = function (t) { return n.blocks && n.blocks.free(t), n.blocks = null, 0; }, n.inflateInit = function (t, r) { return t.msg = null, n.blocks = null, r < 8 || r > 15 ? (n.inflateEnd(t), -2) : (n.wbits = r, t.istate.blocks = new Xe(t, 1 << r), e(t), 0); }, n.inflate = function (t, r) { var o, d; if (!t || !t.istate || !t.next_in)
    return -2; var u = t.istate; for (r = r == 4 ? -5 : 0, o = -5;;)
    switch (u.mode) {
        case 0:
            if (t.avail_in === 0)
                return o;
            if (o = r, t.avail_in--, t.total_in++, (15 & (u.method = t.read_byte(t.next_in_index++))) != 8) {
                u.mode = at, t.msg = "unknown compression method", u.marker = 5;
                break;
            }
            if (8 + (u.method >> 4) > u.wbits) {
                u.mode = at, t.msg = "invalid window size", u.marker = 5;
                break;
            }
            u.mode = 1;
        case 1:
            if (t.avail_in === 0)
                return o;
            if (o = r, t.avail_in--, t.total_in++, d = 255 & t.read_byte(t.next_in_index++), ((u.method << 8) + d) % 31 != 0) {
                u.mode = at, t.msg = "incorrect header check", u.marker = 5;
                break;
            }
            if (!(32 & d)) {
                u.mode = 7;
                break;
            }
            u.mode = 2;
        case 2:
            if (t.avail_in === 0)
                return o;
            o = r, t.avail_in--, t.total_in++, u.need = (255 & t.read_byte(t.next_in_index++)) << 24 & 4278190080, u.mode = 3;
        case 3:
            if (t.avail_in === 0)
                return o;
            o = r, t.avail_in--, t.total_in++, u.need += (255 & t.read_byte(t.next_in_index++)) << 16 & 16711680, u.mode = 4;
        case 4:
            if (t.avail_in === 0)
                return o;
            o = r, t.avail_in--, t.total_in++, u.need += (255 & t.read_byte(t.next_in_index++)) << 8 & 65280, u.mode = 5;
        case 5: return t.avail_in === 0 ? o : (o = r, t.avail_in--, t.total_in++, u.need += 255 & t.read_byte(t.next_in_index++), u.mode = 6, 2);
        case 6: return u.mode = at, t.msg = "need dictionary", u.marker = 0, -2;
        case 7:
            if (o = u.blocks.proc(t, o), o == -3) {
                u.mode = at, u.marker = 0;
                break;
            }
            if (o == 0 && (o = r), o != 1)
                return o;
            o = r, u.blocks.reset(t, u.was), u.mode = 12;
        case 12: return 1;
        case at: return -3;
        default: return -2;
    } }, n.inflateSetDictionary = function (t, r, o) { var d = 0, u = o; if (!t || !t.istate || t.istate.mode != 6)
    return -2; var w = t.istate; return u >= 1 << w.wbits && (u = (1 << w.wbits) - 1, d = o - u), w.blocks.set_dictionary(r, d, u), w.mode = 7, 0; }, n.inflateSync = function (t) { var r, o, d, u, w; if (!t || !t.istate)
    return -2; var x = t.istate; if (x.mode != at && (x.mode = at, x.marker = 0), (r = t.avail_in) === 0)
    return -5; for (o = t.next_in_index, d = x.marker; r !== 0 && d < 4;)
    t.read_byte(o) == tn[d] ? d++ : d = t.read_byte(o) !== 0 ? 0 : 4 - d, o++, r--; return t.total_in += o - t.next_in_index, t.next_in_index = o, t.avail_in = r, x.marker = d, d != 4 ? -3 : (u = t.total_in, w = t.total_out, e(t), t.total_in = u, t.total_out = w, x.mode = 7, 0); }, n.inflateSyncPoint = function (t) { return t && t.istate && t.istate.blocks ? t.istate.blocks.sync_point() : -2; }; } function Zt() { } Zt.prototype = { inflateInit: function (n) { var e = this; return e.istate = new en, n || (n = 15), e.istate.inflateInit(e, n); }, inflate: function (n) { var e = this; return e.istate ? e.istate.inflate(e, n) : -2; }, inflateEnd: function () { var n = this; if (!n.istate)
        return -2; var e = n.istate.inflateEnd(n); return n.istate = null, e; }, inflateSync: function () { var n = this; return n.istate ? n.istate.inflateSync(n) : -2; }, inflateSetDictionary: function (n, e) { var t = this; return t.istate ? t.istate.inflateSetDictionary(t, n, e) : -2; }, read_byte: function (n) { return this.next_in[n]; }, read_buf: function (n, e) { return this.next_in.subarray(n, n + e); } }; var nn = { chunkSize: 524288, maxWorkers: typeof navigator < "u" && navigator.hardwareConcurrency || 2, terminateWorkerTimeout: 5e3, useWebWorkers: !0, workerScripts: void 0 }, tt = Object.assign({}, nn); function Qt(n) { if (n.baseURL !== void 0 && (tt.baseURL = n.baseURL), n.chunkSize !== void 0 && (tt.chunkSize = n.chunkSize), n.maxWorkers !== void 0 && (tt.maxWorkers = n.maxWorkers), n.terminateWorkerTimeout !== void 0 && (tt.terminateWorkerTimeout = n.terminateWorkerTimeout), n.useWebWorkers !== void 0 && (tt.useWebWorkers = n.useWebWorkers), n.Deflate !== void 0 && (tt.Deflate = n.Deflate), n.Inflate !== void 0 && (tt.Inflate = n.Inflate), n.workerScripts !== void 0) {
    if (n.workerScripts.deflate) {
        if (!Array.isArray(n.workerScripts.deflate))
            throw new Error("workerScripts.deflate must be an array");
        tt.workerScripts || (tt.workerScripts = {}), tt.workerScripts.deflate = n.workerScripts.deflate;
    }
    if (n.workerScripts.inflate) {
        if (!Array.isArray(n.workerScripts.inflate))
            throw new Error("workerScripts.inflate must be an array");
        tt.workerScripts || (tt.workerScripts = {}), tt.workerScripts.inflate = n.workerScripts.inflate;
    }
} } var Yt = "Abort error"; function Tt(n, e) { if (n && n.aborted)
    throw e.flush(), new Error(Yt); } function Jt(n, e) {
    return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = e.length;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, n.writeUint8Array(e)];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2: return [2 /*return*/, (_a, e.length)];
        }
    }); });
} var Xt = "HTTP error ", Ut = "HTTP Range not supported", Ct = "text/plain", It = "GET", rn = "bytes";
    var te = /** @class */ (function () {
        function te() {
            this.size = 0;
        }
        te.prototype.init = function () { this.initialized = !0; };
        return te;
    }()); 
    var ot = /** @class */ (function (_super) {
        __extends(ot, _super);
        function ot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ot;
    }(te)); 
    var mt = /** @class */ (function (_super) {
        __extends(mt, _super);
        function mt() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        mt.prototype.writeUint8Array = function (e) { this.size += e.length; };
        return mt;
    }(te)); 
    var ee = /** @class */ (function (_super) {
        __extends(ee, _super);
        function ee(e) {
            var _this = this;
            _this = _super.call(this) || this, _this.blob = e, _this.size = e.size;
            return _this;
        }
        ee.prototype.readUint8Array = function (e, t) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, r_1;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.blob.arrayBuffer) return [3 /*break*/, 2];
                            _a = Uint8Array.bind;
                            return [4 /*yield*/, this.blob.slice(e, e + t).arrayBuffer()];
                        case 1: return [2 /*return*/, new (_a.apply(Uint8Array, [void 0, _b.sent()]))()];
                        case 2:
                            {
                                r_1 = new FileReader;
                                return [2 /*return*/, new Promise(function (o, d) { r_1.onload = function (u) { return o(new Uint8Array(u.target.result)); }, r_1.onerror = function () { return d(r_1.error); }, r_1.readAsArrayBuffer(_this.blob.slice(e, e + t)); })];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return ee;
    }(ot)); 
    var sn = /** @class */ (function (_super) {
        __extends(sn, _super);
        function sn(e, t) {
            var _this = this;
            _this = _super.call(this) || this, _this.url = e, _this.preventHeadRequest = t.preventHeadRequest, _this.useRangeHeader = t.useRangeHeader, _this.forceRangeRequests = t.forceRangeRequests, _this.options = Object.assign({}, t), delete _this.options.preventHeadRequest, delete _this.options.useRangeHeader, delete _this.options.forceRangeRequests, delete _this.options.useXHR;
            return _this;
        }
        sn.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.init.call(this);
                        return [4 /*yield*/, ne(this, Mt, se)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); });
        };
        sn.prototype.readUint8Array = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, re(this, e, t, Mt, se)];
            }); });
        };
        return sn;
    }(ot)); 
    var an = /** @class */ (function (_super) {
        __extends(an, _super);
        function an(e, t) {
            var _this = this;
            _this = _super.call(this) || this, _this.url = e, _this.preventHeadRequest = t.preventHeadRequest, _this.useRangeHeader = t.useRangeHeader, _this.forceRangeRequests = t.forceRangeRequests, _this.options = t;
            return _this;
        }
        an.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.init.call(this);
                        return [4 /*yield*/, ne(this, Ft, ae)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); });
        };
        an.prototype.readUint8Array = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, re(this, e, t, Ft, ae)];
            }); });
        };
        return an;
    }(ot));  function ne(n, e, t) {
    return __awaiter(this, void 0, void 0, function () { var r, o, d, u, w, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(function (r) { if (typeof document < "u") {
                    var o = document.createElement("a");
                    return o.href = r, o.protocol == "http:" || o.protocol == "https:";
                } return /^https?:\/\//i.test(r); }(n.url) && (n.useRangeHeader || n.forceRangeRequests))) return [3 /*break*/, 5];
                return [4 /*yield*/, e(It, n, ie(n))];
            case 1:
                r = _b.sent();
                if (!n.forceRangeRequests && r.headers.get("Accept-Ranges") != rn)
                    throw new Error(Ut);
                o = void 0;
                d = r.headers.get("Content-Range");
                if (d) {
                    u = d.trim().split(/\s*\/\s*/);
                    if (u.length) {
                        w = u[1];
                        w && w != "*" && (o = Number(w));
                    }
                }
                if (!(o === void 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, ce(n, e, t)];
            case 2:
                _a = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                _a = n.size = o;
                _b.label = 4;
            case 4:
                _a;
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, ce(n, e, t)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [2 /*return*/];
        }
    }); });
} function re(n, e, t, r, o) {
    return __awaiter(this, void 0, void 0, function () { var d, _a, _b; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(n.useRangeHeader || n.forceRangeRequests)) return [3 /*break*/, 3];
                return [4 /*yield*/, r(It, n, ie(n, e, t))];
            case 1:
                d = _c.sent();
                if (d.status != 206)
                    throw new Error(Ut);
                _a = Uint8Array.bind;
                return [4 /*yield*/, d.arrayBuffer()];
            case 2: return [2 /*return*/, new (_a.apply(Uint8Array, [void 0, _c.sent()]))()];
            case 3:
                _b = n.data;
                if (_b) return [3 /*break*/, 5];
                return [4 /*yield*/, o(n, n.options)];
            case 4:
                _b = (_c.sent());
                _c.label = 5;
            case 5: return [2 /*return*/, (_b, new Uint8Array(n.data.subarray(e, e + t)))];
        }
    }); });
} function ie(n, e, t) {
    if (e === void 0) { e = 0; }
    if (t === void 0) { t = 1; }
    return Object.assign({}, zt(n), { Range: "bytes=" + e + "-" + (e + t - 1) });
} function zt(n) { var e = n.options.headers; if (e)
    return Symbol.iterator in e ? Object.fromEntries(e) : e; } function se(n) {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, oe(n, Mt)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    }); });
} function ae(n) {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, oe(n, Ft)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    }); });
} function oe(n, e) {
    return __awaiter(this, void 0, void 0, function () { var t, _a, _b; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, e(It, n, zt(n))];
            case 1:
                t = _c.sent();
                _a = n;
                _b = Uint8Array.bind;
                return [4 /*yield*/, t.arrayBuffer()];
            case 2:
                _a.data = new (_b.apply(Uint8Array, [void 0, _c.sent()]))(), n.size || (n.size = n.data.length);
                return [2 /*return*/];
        }
    }); });
} function ce(n, e, t) {
    return __awaiter(this, void 0, void 0, function () { var r, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!n.preventHeadRequest) return [3 /*break*/, 2];
                return [4 /*yield*/, t(n, n.options)];
            case 1:
                _b.sent();
                return [3 /*break*/, 7];
            case 2: return [4 /*yield*/, e("HEAD", n, zt(n))];
            case 3:
                r = (_b.sent()).headers.get("Content-Length");
                if (!r) return [3 /*break*/, 4];
                _a = n.size = Number(r);
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, t(n, n.options)];
            case 5:
                _a = _b.sent();
                _b.label = 6;
            case 6:
                _a;
                _b.label = 7;
            case 7: return [2 /*return*/];
        }
    }); });
} function Mt(n, _a, r) {
    var e = _a.options, t = _a.url;
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch(t, Object.assign({}, e, { method: n, headers: r }))];
            case 1:
                o = _b.sent();
                if (o.status < 400)
                    return [2 /*return*/, o];
                throw new Error(Xt + (o.statusText || o.status));
        }
    }); });
} function Ft(n, _a, t) {
    var e = _a.url;
    return new Promise(function (r, o) { var d = new XMLHttpRequest; if (d.addEventListener("load", function () { if (d.status < 400) {
        var u_1 = [];
        d.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(function (w) { var x = w.trim().split(/\s*:\s*/); x[0] = x[0].trim().replace(/^[a-z]|-[a-z]/g, function (m) { return m.toUpperCase(); }), u_1.push(x); }), r({ status: d.status, arrayBuffer: function () { return d.response; }, headers: new Map(u_1) });
    }
    else
        o(new Error(Xt + (d.statusText || d.status))); }, !1), d.addEventListener("error", function (u) { return o(u.detail.error); }, !1), d.open(n, e), t)
        for (var _i = 0, _a = Object.entries(t); _i < _a.length; _i++) {
            var u = _a[_i];
            d.setRequestHeader(u[0], u[1]);
        } d.responseType = "arraybuffer", d.send(); });
}
    var le = /** @class */ (function (_super) {
        __extends(le, _super);
        function le(e, t) {
            if (t === void 0) { t = {}; }
            var _this = this;
            _this = _super.call(this) || this, _this.url = e, t.useXHR ? _this.reader = new an(e, t) : _this.reader = new sn(e, t);
            return _this;
        }
        Object.defineProperty(le.prototype, "size", {
            get: function () { return this.reader.size; },
            set: function (e) { },
            enumerable: false,
            configurable: true
        });
        le.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.init.call(this);
                        return [4 /*yield*/, this.reader.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            }); });
        };
        le.prototype.readUint8Array = function (e, t) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.reader.readUint8Array(e, t)];
            }); });
        };
        return le;
    }(ot));  var kt = 4294967295, de = 33639248, ue = 101075792, he = []; for (var n = 0; n < 256; n++) {
    var e = n;
    for (var t = 0; t < 8; t++)
        1 & e ? e = e >>> 1 ^ 3988292384 : e >>>= 1;
    he[n] = e;
}
    var bt = /** @class */ (function () {
        function bt(e) {
            this.crc = e || -1;
        }
        bt.prototype.append = function (e) { var t = 0 | this.crc; for (var r = 0, o = 0 | e.length; r < o; r++)
            t = t >>> 8 ^ he[255 & (t ^ e[r])]; this.crc = t; };
        bt.prototype.get = function () { return ~this.crc; };
        return bt;
    }());  var et = { concat: function (n, e) { if (n.length === 0 || e.length === 0)
        return n.concat(e); var t = n[n.length - 1], r = et.getPartial(t); return r === 32 ? n.concat(e) : et._shiftRight(e, r, 0 | t, n.slice(0, n.length - 1)); }, bitLength: function (n) { var e = n.length; if (e === 0)
        return 0; var t = n[e - 1]; return 32 * (e - 1) + et.getPartial(t); }, clamp: function (n, e) { if (32 * n.length < e)
        return n; var t = (n = n.slice(0, Math.ceil(e / 32))).length; return e &= 31, t > 0 && e && (n[t - 1] = et.partial(e, n[t - 1] & 2147483648 >> e - 1, 1)), n; }, partial: function (n, e, t) { return n === 32 ? e : (t ? 0 | e : e << 32 - n) + 1099511627776 * n; }, getPartial: function (n) { return Math.round(n / 1099511627776) || 32; }, _shiftRight: function (n, e, t, r) { for (r === void 0 && (r = []); e >= 32; e -= 32)
        r.push(t), t = 0; if (e === 0)
        return r.concat(n); for (var u = 0; u < n.length; u++)
        r.push(t | n[u] >>> e), t = n[u] << 32 - e; var o = n.length ? n[n.length - 1] : 0, d = et.getPartial(o); return r.push(et.partial(e + d & 31, e + d > 32 ? t : r.pop(), 1)), r; } }, fe = { bytes: { fromBits: function (n) { var e = et.bitLength(n) / 8, t = new Uint8Array(e); var r; for (var o = 0; o < e; o++)
            !(3 & o) && (r = n[o / 4]), t[o] = r >>> 24, r <<= 8; return t; }, toBits: function (n) { var e = []; var t, r = 0; for (t = 0; t < n.length; t++)
            r = r << 8 | n[t], (3 & t) == 3 && (e.push(r), r = 0); return 3 & t && e.push(et.partial(8 * (3 & t), r)), e; } } }, pe = { sha1: function (n) { n ? (this._h = n._h.slice(0), this._buffer = n._buffer.slice(0), this._length = n._length) : this.reset(); } }; pe.sha1.prototype = { blockSize: 512, reset: function () { var n = this; return n._h = this._init.slice(0), n._buffer = [], n._length = 0, n; }, update: function (n) { var e = this; typeof n == "string" && (n = fe.utf8String.toBits(n)); var t = e._buffer = et.concat(e._buffer, n), r = e._length, o = e._length = r + et.bitLength(n); if (o > 9007199254740991)
        throw new Error("Cannot hash more than 2^53 - 1 bits"); var d = new Uint32Array(t); var u = 0; for (var w = e.blockSize + r - (e.blockSize + r & e.blockSize - 1); w <= o; w += e.blockSize)
        e._block(d.subarray(16 * u, 16 * (u + 1))), u += 1; return t.splice(0, 16 * u), e; }, finalize: function () { var n = this; var e = n._buffer; var t = n._h; e = et.concat(e, [et.partial(1, 1)]); for (var r = e.length + 2; 15 & r; r++)
        e.push(0); for (e.push(Math.floor(n._length / 4294967296)), e.push(0 | n._length); e.length;)
        n._block(e.splice(0, 16)); return n.reset(), t; }, _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520], _key: [1518500249, 1859775393, 2400959708, 3395469782], _f: function (n, e, t, r) { return n <= 19 ? e & t | ~e & r : n <= 39 ? e ^ t ^ r : n <= 59 ? e & t | e & r | t & r : n <= 79 ? e ^ t ^ r : void 0; }, _S: function (n, e) { return e << n | e >>> 32 - n; }, _block: function (n) { var e = this, t = e._h, r = Array(80); for (var m = 0; m < 16; m++)
        r[m] = n[m]; var o = t[0], d = t[1], u = t[2], w = t[3], x = t[4]; for (var m = 0; m <= 79; m++) {
        m >= 16 && (r[m] = e._S(1, r[m - 3] ^ r[m - 8] ^ r[m - 14] ^ r[m - 16]));
        var S = e._S(5, o) + e._f(m, d, u, w) + x + r[m] + e._key[Math.floor(m / 20)] | 0;
        x = w, w = u, u = e._S(30, d), d = o, o = S;
    } t[0] = t[0] + o | 0, t[1] = t[1] + d | 0, t[2] = t[2] + u | 0, t[3] = t[3] + w | 0, t[4] = t[4] + x | 0; } }; var on = { aes: /** @class */ (function () {
        function aes(n) {
            var e = this;
            e._tables = [[[], [], [], [], []], [[], [], [], [], []]], e._tables[0][0][0] || e._precompute();
            var t = e._tables[0][4], r = e._tables[1], o = n.length;
            var d, u, w, x = 1;
            if (o !== 4 && o !== 6 && o !== 8)
                throw new Error("invalid aes key size");
            for (e._key = [u = n.slice(0), w = []], d = o; d < 4 * o + 28; d++) {
                var m = u[d - 1];
                (d % o == 0 || o === 8 && d % o == 4) && (m = t[m >>> 24] << 24 ^ t[m >> 16 & 255] << 16 ^ t[m >> 8 & 255] << 8 ^ t[255 & m], d % o == 0 && (m = m << 8 ^ m >>> 24 ^ x << 24, x = x << 1 ^ 283 * (x >> 7))), u[d] = u[d - o] ^ m;
            }
            for (var m = 0; d; m++, d--) {
                var S = u[3 & m ? d : d - 4];
                w[m] = d <= 4 || m < 4 ? S : r[0][t[S >>> 24]] ^ r[1][t[S >> 16 & 255]] ^ r[2][t[S >> 8 & 255]] ^ r[3][t[255 & S]];
            }
        }
        aes.prototype.encrypt = function (n) { return this._crypt(n, 0); };
        aes.prototype.decrypt = function (n) { return this._crypt(n, 1); };
        aes.prototype._precompute = function () { var n = this._tables[0], e = this._tables[1], t = n[4], r = e[4], o = [], d = []; var u, w, x, m; for (var S = 0; S < 256; S++)
            d[(o[S] = S << 1 ^ 283 * (S >> 7)) ^ S] = S; for (var S = u = 0; !t[S]; S ^= w || 1, u = d[u] || 1) {
            var I = u ^ u << 1 ^ u << 2 ^ u << 3 ^ u << 4;
            I = I >> 8 ^ 255 & I ^ 99, t[S] = I, r[I] = S, m = o[x = o[w = o[S]]];
            var W = 16843009 * m ^ 65537 * x ^ 257 * w ^ 16843008 * S, N = 257 * o[I] ^ 16843008 * I;
            for (var a = 0; a < 4; a++)
                n[a][S] = N = N << 24 ^ N >>> 8, e[a][I] = W = W << 24 ^ W >>> 8;
        } for (var S = 0; S < 5; S++)
            n[S] = n[S].slice(0), e[S] = e[S].slice(0); };
        aes.prototype._crypt = function (n, e) { if (n.length !== 4)
            throw new Error("invalid aes block size"); var t = this._key[e], r = t.length / 4 - 2, o = [0, 0, 0, 0], d = this._tables[e], u = d[0], w = d[1], x = d[2], m = d[3], S = d[4]; var I, W, N, a = n[0] ^ t[0], p = n[e ? 3 : 1] ^ t[1], i = n[2] ^ t[2], c = n[e ? 1 : 3] ^ t[3], h = 4; for (var g = 0; g < r; g++)
            I = u[a >>> 24] ^ w[p >> 16 & 255] ^ x[i >> 8 & 255] ^ m[255 & c] ^ t[h], W = u[p >>> 24] ^ w[i >> 16 & 255] ^ x[c >> 8 & 255] ^ m[255 & a] ^ t[h + 1], N = u[i >>> 24] ^ w[c >> 16 & 255] ^ x[a >> 8 & 255] ^ m[255 & p] ^ t[h + 2], c = u[c >>> 24] ^ w[a >> 16 & 255] ^ x[p >> 8 & 255] ^ m[255 & i] ^ t[h + 3], h += 4, a = I, p = W, i = N; for (var g = 0; g < 4; g++)
            o[e ? 3 & -g : g] = S[a >>> 24] << 24 ^ S[p >> 16 & 255] << 16 ^ S[i >> 8 & 255] << 8 ^ S[255 & c] ^ t[h++], I = a, a = p, p = i, i = c, c = I; return o; };
        return aes;
    }()) }, cn = { ctrGladman: /** @class */ (function () {
        function ctrGladman(n, e) {
            this._prf = n, this._initIv = e, this._iv = e;
        }
        ctrGladman.prototype.reset = function () { this._iv = this._initIv; };
        ctrGladman.prototype.update = function (n) { return this.calculate(this._prf, n, this._iv); };
        ctrGladman.prototype.incWord = function (n) { if ((n >> 24 & 255) == 255) {
            var e = n >> 16 & 255, t = n >> 8 & 255, r = 255 & n;
            e === 255 ? (e = 0, t === 255 ? (t = 0, r === 255 ? r = 0 : ++r) : ++t) : ++e, n = 0, n += e << 16, n += t << 8, n += r;
        }
        else
            n += 1 << 24; return n; };
        ctrGladman.prototype.incCounter = function (n) { (n[0] = this.incWord(n[0])) === 0 && (n[1] = this.incWord(n[1])); };
        ctrGladman.prototype.calculate = function (n, e, t) { var r; if (!(r = e.length))
            return []; var o = et.bitLength(e); for (var d = 0; d < r; d += 4) {
            this.incCounter(t);
            var u = n.encrypt(t);
            e[d] ^= u[0], e[d + 1] ^= u[1], e[d + 2] ^= u[2], e[d + 3] ^= u[3];
        } return et.clamp(e, o); };
        return ctrGladman;
    }()) }, ln = { hmacSha1: /** @class */ (function () {
        function hmacSha1(n) {
            var e = this, t = e._hash = pe.sha1, r = [[], []], o = t.prototype.blockSize / 32;
            e._baseHash = [new t, new t], n.length > o && (n = t.hash(n));
            for (var d = 0; d < o; d++)
                r[0][d] = 909522486 ^ n[d], r[1][d] = 1549556828 ^ n[d];
            e._baseHash[0].update(r[0]), e._baseHash[1].update(r[1]), e._resultHash = new t(e._baseHash[0]);
        }
        hmacSha1.prototype.reset = function () { var n = this; n._resultHash = new n._hash(n._baseHash[0]), n._updated = !1; };
        hmacSha1.prototype.update = function (n) { this._updated = !0, this._resultHash.update(n); };
        hmacSha1.prototype.digest = function () { var n = this, e = n._resultHash.finalize(), t = new n._hash(n._baseHash[1]).update(e).finalize(); return n.reset(), t; };
        return hmacSha1;
    }()) }, Dt = "Invalid pasword", ft = 16, _e = { name: "PBKDF2" }, dn = Object.assign({ hash: { name: "HMAC" } }, _e), un = Object.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, _e), hn = ["deriveBits"], yt = [8, 12, 16], xt = [16, 24, 32], ct = 10, we = [0, 0, 0, 0], it = fe.bytes, ge = on.aes, me = cn.ctrGladman, be = ln.hmacSha1;
    var fn = /** @class */ (function () {
        function fn(e, t, r) {
            Object.assign(this, { password: e, signed: t, strength: r - 1, pendingInput: new Uint8Array(0) });
        }
        fn.prototype.append = function (e) {
            return __awaiter(this, void 0, void 0, function () { var t, r; return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = this;
                        if (!t.password) return [3 /*break*/, 2];
                        r = nt(e, 0, yt[t.strength] + 2);
                        return [4 /*yield*/, function (o, d, u) {
                                return __awaiter(this, void 0, void 0, function () { var w, x; return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, xe(o, u, nt(d, 0, yt[o.strength]))];
                                        case 1:
                                            _a.sent();
                                            w = nt(d, yt[o.strength]), x = o.keys.passwordVerification;
                                            if (x[0] != w[0] || x[1] != w[1])
                                                throw new Error(Dt);
                                            return [2 /*return*/];
                                    }
                                }); });
                            }(t, r, t.password)];
                    case 1:
                        _a.sent(), t.password = null, t.aesCtrGladman = new me(new ge(t.keys.key), Array.from(we)), t.hmac = new be(t.keys.authentication), e = nt(e, yt[t.strength] + 2);
                        _a.label = 2;
                    case 2: return [2 /*return*/, ye(t, e, new Uint8Array(e.length - ct - (e.length - ct) % ft), 0, ct, !0)];
                }
            }); });
        };
        fn.prototype.flush = function () { var e = this, t = e.pendingInput, r = nt(t, 0, t.length - ct), o = nt(t, t.length - ct); var d = new Uint8Array(0); if (r.length) {
            var w = it.toBits(r);
            e.hmac.update(w);
            var x = e.aesCtrGladman.update(w);
            d = it.fromBits(x);
        } var u = !0; if (e.signed) {
            var w = nt(it.fromBits(e.hmac.digest()), 0, ct);
            for (var x = 0; x < ct; x++)
                w[x] != o[x] && (u = !1);
        } return { valid: u, data: d }; };
        return fn;
    }()); 
    var pn = /** @class */ (function () {
        function pn(e, t) {
            Object.assign(this, { password: e, strength: t - 1, pendingInput: new Uint8Array(0) });
        }
        pn.prototype.append = function (e) {
            return __awaiter(this, void 0, void 0, function () { var t, r, _a, o; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        t = this;
                        r = new Uint8Array(0);
                        _a = t.password;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, function (d, u) {
                                return __awaiter(this, void 0, void 0, function () { var w; return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            w = crypto.getRandomValues(new Uint8Array(yt[d.strength]));
                                            return [4 /*yield*/, xe(d, u, w)];
                                        case 1: return [2 /*return*/, (_a.sent(), Lt(w, d.keys.passwordVerification))];
                                    }
                                }); });
                            }(t, t.password)];
                    case 1:
                        _a = (r = _b.sent(), t.password = null, t.aesCtrGladman = new me(new ge(t.keys.key), Array.from(we)), t.hmac = new be(t.keys.authentication));
                        _b.label = 2;
                    case 2:
                        _a;
                        o = new Uint8Array(r.length + e.length - e.length % ft);
                        return [2 /*return*/, (o.set(r, 0), ye(t, e, o, r.length, 0))];
                }
            }); });
        };
        pn.prototype.flush = function () { var e = this; var t = new Uint8Array(0); if (e.pendingInput.length) {
            var o = e.aesCtrGladman.update(it.toBits(e.pendingInput));
            e.hmac.update(o), t = it.fromBits(o);
        } var r = nt(it.fromBits(e.hmac.digest()), 0, ct); return { data: Lt(t, r), signature: r }; };
        return pn;
    }());  function ye(n, e, t, r, o, d) { var u = e.length - o; var w; for (n.pendingInput.length && (e = Lt(n.pendingInput, e), t = function (x, m) { if (m && m > x.length) {
    var S = x;
    (x = new Uint8Array(m)).set(S, 0);
} return x; }(t, u - u % ft)), w = 0; w <= u - ft; w += ft) {
    var x = it.toBits(nt(e, w, w + ft));
    d && n.hmac.update(x);
    var m = n.aesCtrGladman.update(x);
    d || n.hmac.update(m), t.set(it.fromBits(m), w + r);
} return n.pendingInput = nt(e, w), t; } function xe(n, e, t) {
    return __awaiter(this, void 0, void 0, function () { var r, o, d, u; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = function (w) { if (typeof TextEncoder > "u") {
                    w = unescape(encodeURIComponent(w));
                    var x = new Uint8Array(w.length);
                    for (var m = 0; m < x.length; m++)
                        x[m] = w.charCodeAt(m);
                    return x;
                } return new TextEncoder().encode(w); }(e);
                return [4 /*yield*/, crypto.subtle.importKey("raw", r, dn, !1, hn)];
            case 1:
                o = _a.sent();
                return [4 /*yield*/, crypto.subtle.deriveBits(Object.assign({ salt: t }, un), o, 8 * (2 * xt[n.strength] + 2))];
            case 2:
                d = _a.sent(), u = new Uint8Array(d);
                n.keys = { key: it.toBits(nt(u, 0, xt[n.strength])), authentication: it.toBits(nt(u, xt[n.strength], 2 * xt[n.strength])), passwordVerification: nt(u, 2 * xt[n.strength]) };
                return [2 /*return*/];
        }
    }); });
} function Lt(n, e) { var t = n; return n.length + e.length && (t = new Uint8Array(n.length + e.length), t.set(n, 0), t.set(e, n.length)), t; } function nt(n, e, t) { return n.subarray(e, t); } var vt = 12;
    var _n = /** @class */ (function () {
        function _n(e, t) {
            Object.assign(this, { password: e, passwordVerification: t }), Se(this, e);
        }
        _n.prototype.append = function (e) { var t = this; if (t.password) {
            var r = ke(t, e.subarray(0, vt));
            if (t.password = null, r[11] != t.passwordVerification)
                throw new Error(Dt);
            e = e.subarray(vt);
        } return ke(t, e); };
        _n.prototype.flush = function () { return { valid: !0, data: new Uint8Array(0) }; };
        return _n;
    }()); 
    var wn = /** @class */ (function () {
        function wn(e, t) {
            Object.assign(this, { password: e, passwordVerification: t }), Se(this, e);
        }
        wn.prototype.append = function (e) { var t = this; var r, o; if (t.password) {
            t.password = null;
            var d = crypto.getRandomValues(new Uint8Array(vt));
            d[11] = t.passwordVerification, r = new Uint8Array(e.length + d.length), r.set(ve(t, d), 0), o = vt;
        }
        else
            r = new Uint8Array(e.length), o = 0; return r.set(ve(t, e), o), r; };
        wn.prototype.flush = function () { return { data: new Uint8Array(0) }; };
        return wn;
    }());  function ke(n, e) { var t = new Uint8Array(e.length); for (var r = 0; r < e.length; r++)
    t[r] = Ae(n) ^ e[r], Ot(n, t[r]); return t; } function ve(n, e) { var t = new Uint8Array(e.length); for (var r = 0; r < e.length; r++)
    t[r] = Ae(n) ^ e[r], Ot(n, e[r]); return t; } function Se(n, e) { n.keys = [305419896, 591751049, 878082192], n.crcKey0 = new bt(n.keys[0]), n.crcKey2 = new bt(n.keys[2]); for (var t = 0; t < e.length; t++)
    Ot(n, e.charCodeAt(t)); } function Ot(n, e) { n.crcKey0.append([e]), n.keys[0] = ~n.crcKey0.get(), n.keys[1] = Ee(n.keys[1] + Re(n.keys[0])), n.keys[1] = Ee(Math.imul(n.keys[1], 134775813) + 1), n.crcKey2.append([n.keys[1] >>> 24]), n.keys[2] = ~n.crcKey2.get(); } function Ae(n) { var e = 2 | n.keys[2]; return Re(Math.imul(e, 1 ^ e) >>> 8); } function Re(n) { return 255 & n; } function Ee(n) { return 4294967295 & n; } var Te = "inflate", Nt = "Invalid signature";
    var gn = /** @class */ (function () {
        function gn(e, _a, _b) {
            var t = _a.signature, r = _a.password, o = _a.signed, d = _a.compressed, u = _a.zipCrypto, w = _a.passwordVerification, x = _a.encryptionStrength;
            var m = _b.chunkSize;
            var S = Boolean(r);
            Object.assign(this, { signature: t, encrypted: S, signed: o, compressed: d, inflate: d && new e({ chunkSize: m }), crc32: o && new bt, zipCrypto: u, decrypt: S && u ? new _n(r, w) : new fn(r, o, x) });
        }
        gn.prototype.append = function (e) {
            return __awaiter(this, void 0, void 0, function () { var t, _a, _b; return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = this;
                        _a = t.encrypted && e.length;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, t.decrypt.append(e)];
                    case 1:
                        _a = (e = _c.sent());
                        _c.label = 2;
                    case 2:
                        _a;
                        _b = t.compressed && e.length;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, t.inflate.append(e)];
                    case 3:
                        _b = (e = _c.sent());
                        _c.label = 4;
                    case 4: return [2 /*return*/, (_b, (!t.encrypted || t.zipCrypto) && t.signed && e.length && t.crc32.append(e), e)];
                }
            }); });
        };
        gn.prototype.flush = function () {
            return __awaiter(this, void 0, void 0, function () { var e, t, r, o, o, _a; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e = this;
                        r = new Uint8Array(0);
                        if (e.encrypted) {
                            o = e.decrypt.flush();
                            if (!o.valid)
                                throw new Error(Nt);
                            r = o.data;
                        }
                        if ((!e.encrypted || e.zipCrypto) && e.signed) {
                            o = new DataView(new Uint8Array(4).buffer);
                            if (t = e.crc32.get(), o.setUint32(0, t), e.signature != o.getUint32(0, !1))
                                throw new Error(Nt);
                        }
                        _a = e.compressed;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, e.inflate.append(r)];
                    case 1:
                        r = (_b.sent()) || new Uint8Array(0);
                        return [4 /*yield*/, e.inflate.flush()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3: return [2 /*return*/, (_a, { data: r, signature: t })];
                }
            }); });
        };
        return gn;
    }()); 
    var mn = /** @class */ (function () {
        function mn(e, _a, _b) {
            var t = _a.encrypted, r = _a.signed, o = _a.compressed, d = _a.level, u = _a.zipCrypto, w = _a.password, x = _a.passwordVerification, m = _a.encryptionStrength;
            var S = _b.chunkSize;
            Object.assign(this, { encrypted: t, signed: r, compressed: o, deflate: o && new e({ level: d || 5, chunkSize: S }), crc32: r && new bt, zipCrypto: u, encrypt: t && u ? new wn(w, x) : new pn(w, m) });
        }
        mn.prototype.append = function (e) {
            return __awaiter(this, void 0, void 0, function () { var t, r, _a, _b; return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        t = this;
                        r = e;
                        _a = t.compressed && e.length;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, t.deflate.append(e)];
                    case 1:
                        _a = (r = _c.sent());
                        _c.label = 2;
                    case 2:
                        _a;
                        _b = t.encrypted && r.length;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, t.encrypt.append(r)];
                    case 3:
                        _b = (r = _c.sent());
                        _c.label = 4;
                    case 4: return [2 /*return*/, (_b, (!t.encrypted || t.zipCrypto) && t.signed && e.length && t.crc32.append(e), r)];
                }
            }); });
        };
        mn.prototype.flush = function () {
            return __awaiter(this, void 0, void 0, function () { var e, t, r, _a, o, d; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e = this;
                        r = new Uint8Array(0);
                        _a = e.compressed;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, e.deflate.flush()];
                    case 1:
                        _a = (r = (_b.sent()) || new Uint8Array(0));
                        _b.label = 2;
                    case 2:
                        if (!(_a, e.encrypted)) return [3 /*break*/, 4];
                        return [4 /*yield*/, e.encrypt.append(r)];
                    case 3:
                        r = _b.sent();
                        o = e.encrypt.flush();
                        t = o.signature;
                        d = new Uint8Array(r.length + o.data.length);
                        d.set(r, 0), d.set(o.data, r.length), r = d;
                        _b.label = 4;
                    case 4: return [2 /*return*/, (e.encrypted && !e.zipCrypto || !e.signed || (t = e.crc32.get()), { data: r, signature: t })];
                }
            }); });
        };
        return mn;
    }());  var Ue = "init", Ce = "append", Bt = "flush", bn = "message"; var Ie = !0; var Wt = function (n, e, t, r, o, d, u) { return (Object.assign(n, { busy: !0, codecConstructor: e, options: Object.assign({}, t), scripts: u, terminate: function () { n.worker && !n.busy && (n.worker.terminate(), n.interface = null); }, onTaskFinished: function () { n.busy = !1, o(n); } }), d ? function (w, x) { var m; var S = { type: "module" }; if (!w.interface) {
    if (Ie)
        try {
            w.worker = I({}, x.baseURL);
        }
        catch (_a) {
            Ie = !1, w.worker = I(S, x.baseURL);
        }
    else
        w.worker = I(S, x.baseURL);
    w.worker.addEventListener(bn, a, !1), w.interface = { append: function (p) { return W({ type: Ce, data: p }); }, flush: function () { return W({ type: Bt }); } };
} return w.interface; function I(p, i) { var c; try {
    c = new URL(w.scripts[0], i);
}
catch (_a) {
    c = w.scripts[0];
} return new Worker(c, p); } function W(p) {
    return __awaiter(this, void 0, void 0, function () { var i, c; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!m) return [3 /*break*/, 2];
                i = w.options, c = w.scripts.slice(1);
                return [4 /*yield*/, N({ scripts: c, type: Ue, options: i, config: { chunkSize: x.chunkSize } })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, N(p)];
        }
    }); });
} function N(p) { var i = w.worker, c = new Promise(function (h, g) { return m = { resolve: h, reject: g }; }); try {
    if (p.data)
        try {
            p.data = p.data.buffer, i.postMessage(p, [p.data]);
        }
        catch (_a) {
            i.postMessage(p);
        }
    else
        i.postMessage(p);
}
catch (h) {
    m.reject(h), m = null, w.onTaskFinished();
} return c; } function a(p) { var i = p.data; if (m) {
    var c = i.error, h = i.type;
    if (c) {
        var g = new Error(c.message);
        g.stack = c.stack, m.reject(g), m = null, w.onTaskFinished();
    }
    else if (h == Ue || h == Bt || h == Ce) {
        var g = i.data;
        h == Bt ? (m.resolve({ data: new Uint8Array(g), signature: i.signature }), m = null, w.onTaskFinished()) : m.resolve(g && new Uint8Array(g));
    }
} } }(n, r) : function (w, x) { var m = function (S, I, W) { return I.codecType.startsWith("deflate") ? new mn(S, I, W) : I.codecType.startsWith(Te) ? new gn(S, I, W) : void 0; }(w.codecConstructor, w.options, x); return { append: function (S) {
        return __awaiter(this, void 0, void 0, function () { var I_1; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, m.append(S)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    I_1 = _a.sent();
                    throw w.onTaskFinished(), I_1;
                case 3: return [2 /*return*/];
            }
        }); });
    }, flush: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, , 2, 3]);
                    return [4 /*yield*/, m.flush()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    w.onTaskFinished();
                    return [7 /*endfinally*/];
                case 3: return [2 /*return*/];
            }
        }); });
    } }; }(n, r)); }; var ht = [], Pt = []; function ze(n) { n.terminateTimeout && (clearTimeout(n.terminateTimeout), n.terminateTimeout = null); } var yn = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""); function Ht(n, e) {
    return __awaiter(this, void 0, void 0, function () { var t_1; return __generator(this, function (_a) {
        if (e && e.trim().toLowerCase() == "cp437")
            return [2 /*return*/, (function (t) { var r = ""; for (var o = 0; o < t.length; o++)
                    r += yn[t[o]]; return r; })(n)];
        if (typeof TextDecoder > "u") {
            t_1 = new FileReader;
            return [2 /*return*/, new Promise(function (r, o) { t_1.onload = function (d) { return r(d.target.result); }, t_1.onerror = function () { return o(t_1.error); }, t_1.readAsText(new Blob([n])); })];
        }
        return [2 /*return*/, new TextDecoder(e).decode(n)];
    }); });
} var xn = ["filename", "rawFilename", "directory", "encrypted", "compressedSize", "uncompressedSize", "lastModDate", "rawLastModDate", "comment", "rawComment", "signature", "extraField", "rawExtraField", "bitFlag", "extraFieldZip64", "extraFieldUnicodePath", "extraFieldUnicodeComment", "extraFieldAES", "filenameUTF8", "commentUTF8", "offset", "zip64", "compressionMethod", "extraFieldNTFS", "lastAccessDate", "creationDate", "extraFieldExtendedTimestamp", "version", "versionMadeBy", "msDosCompatible", "internalFileAttribute", "externalFileAttribute"];
    var Me = /** @class */ (function () {
        function Me(e) {
            var _this = this;
            xn.forEach(function (t) { return _this[t] = e[t]; });
        }
        return Me;
    }());  var St = "File format is not recognized", Fe = "End of central directory not found", De = "End of Zip64 central directory not found", Le = "End of Zip64 central directory locator not found", Oe = "Central directory header not found", Ne = "Local file header not found", Be = "Zip64 extra field not found", We = "File contains encrypted entry", Pe = "Encryption method not supported", jt = "Compression method not supported", He = "utf-8", je = "cp437", qe = ["uncompressedSize", "compressedSize", "offset"];
    var kn = /** @class */ (function () {
        function kn(e, t, r) {
            Object.assign(this, { reader: e, config: t, options: r });
        }
        kn.prototype.getData = function (e, t, r) {
            if (r === void 0) { r = {}; }
            return __awaiter(this, void 0, void 0, function () { var o, d, u, w, x, m, S, I, W, N, a, _a, p, i, c, h, g, A, _b, v, y; return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        o = this, d = o.reader, u = o.offset, w = o.extraFieldAES, x = o.compressionMethod, m = o.config, S = o.bitFlag, I = o.signature, W = o.rawLastModDate, N = o.compressedSize, a = o.localDirectory = {};
                        _a = d.initialized;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, d.init()];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a;
                        return [4 /*yield*/, lt(d, u, 30)];
                    case 3:
                        p = _c.sent();
                        i = X(p);
                        c = pt(o, r, "password");
                        if (c = c && c.length && c, w && w.originalCompressionMethod != 99)
                            throw new Error(jt);
                        if (x != 0 && x != 8)
                            throw new Error(jt);
                        if (J(i, 0) != 67324752)
                            throw new Error(Ne);
                        Ve(a, i, 4);
                        return [4 /*yield*/, lt(d, u, 30 + a.filenameLength + a.extraFieldLength)];
                    case 4:
                        p = _c.sent(), a.rawExtraField = p.subarray(30 + a.filenameLength);
                        return [4 /*yield*/, $e(o, a, i, 4)];
                    case 5:
                        _c.sent(), t.lastAccessDate = a.lastAccessDate, t.creationDate = a.creationDate;
                        h = o.encrypted && a.encrypted, g = h && !w;
                        if (h) {
                            if (!g && w.strength === void 0)
                                throw new Error(Pe);
                            if (!c)
                                throw new Error(We);
                        }
                        return [4 /*yield*/, function (f, k, z) { var U = !(!k.compressed && !k.signed && !k.encrypted) && (k.useWebWorkers || k.useWebWorkers === void 0 && z.useWebWorkers), E = U && z.workerScripts ? z.workerScripts[k.codecType] : []; if (ht.length < z.maxWorkers) {
                                var M = {};
                                return ht.push(M), Wt(M, f, k, z, R, U, E);
                            } {
                                var M = ht.find(function (B) { return !B.busy; });
                                return M ? (ze(M), Wt(M, f, k, z, R, U, E)) : new Promise(function (B) { return Pt.push({ resolve: B, codecConstructor: f, options: k, webWorker: U, scripts: E }); });
                            } function R(M) { if (Pt.length) {
                                var _a = Pt.splice(0, 1)[0], B = _a.resolve, $ = _a.codecConstructor, O = _a.options, q = _a.webWorker, dt = _a.scripts;
                                B(Wt(M, $, O, z, R, q, dt));
                            }
                            else
                                M.worker ? (ze(M), Number.isFinite(z.terminateWorkerTimeout) && z.terminateWorkerTimeout >= 0 && (M.terminateTimeout = setTimeout(function () { ht = ht.filter(function (B) { return B != M; }), M.terminate(); }, z.terminateWorkerTimeout))) : ht = ht.filter(function (B) { return B != M; }); } }(m.Inflate, { codecType: Te, password: c, zipCrypto: g, encryptionStrength: w && w.strength, signed: pt(o, r, "checkSignature"), passwordVerification: g && (S.dataDescriptor ? W >>> 8 & 255 : I >>> 24 & 255), signature: I, compressed: x != 0, encrypted: h, useWebWorkers: pt(o, r, "useWebWorkers") }, m)];
                    case 6:
                        A = _c.sent();
                        _b = e.initialized;
                        if (_b) return [3 /*break*/, 8];
                        return [4 /*yield*/, e.init()];
                    case 7:
                        _b = (_c.sent());
                        _c.label = 8;
                    case 8:
                        _b;
                        v = pt(o, r, "signal"), y = u + 30 + a.filenameLength + a.extraFieldLength;
                        return [4 /*yield*/, function (f, k, z, U, E, R, M) {
                                return __awaiter(this, void 0, void 0, function () { var B; return __generator(this, function (_a) {
                                    B = Math.max(R.chunkSize, 64);
                                    return [2 /*return*/, function $(O, q) {
                                            if (O === void 0) { O = 0; }
                                            if (q === void 0) { q = 0; }
                                            return __awaiter(this, void 0, void 0, function () { var dt, ut, P, wt, _a, ut, _b; return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        dt = M.signal;
                                                        if (!(O < E)) return [3 /*break*/, 4];
                                                        Tt(dt, f);
                                                        return [4 /*yield*/, k.readUint8Array(O + U, Math.min(B, E - O))];
                                                    case 1:
                                                        ut = _c.sent(), P = ut.length;
                                                        Tt(dt, f);
                                                        return [4 /*yield*/, f.append(ut)];
                                                    case 2:
                                                        wt = _c.sent();
                                                        Tt(dt, f);
                                                        _a = q;
                                                        return [4 /*yield*/, Jt(z, wt)];
                                                    case 3:
                                                        if (q = _a + _c.sent(), M.onprogress)
                                                            try {
                                                                M.onprogress(O + P, E);
                                                            }
                                                            catch (_d) { }
                                                        return [2 /*return*/, $(O + B, q)];
                                                    case 4: return [4 /*yield*/, f.flush()];
                                                    case 5:
                                                        ut = _c.sent();
                                                        _b = q;
                                                        return [4 /*yield*/, Jt(z, ut.data)];
                                                    case 6: return [2 /*return*/, (q = _b + _c.sent(), { signature: ut.signature, length: q })];
                                                }
                                            }); });
                                        }()];
                                }); });
                            }(A, d, e, y, N, m, { onprogress: r.onprogress, signal: v })];
                    case 9: return [2 /*return*/, (_c.sent(), e.getData())];
                }
            }); });
        };
        return kn;
    }());  function Ve(n, e, t) { var r = n.rawBitFlag = rt(e, t + 2), o = (1 & r) == 1, d = J(e, t + 6); Object.assign(n, { encrypted: o, version: rt(e, t), bitFlag: { level: (6 & r) >> 1, dataDescriptor: (8 & r) == 8, languageEncodingFlag: (2048 & r) == 2048 }, rawLastModDate: d, lastModDate: vn(d), filenameLength: rt(e, t + 22), extraFieldLength: rt(e, t + 24) }); } function $e(n, e, t, r) {
    return __awaiter(this, void 0, void 0, function () { var o, d, u, w, p, i, x, m, S, _a, I, _b, W, N, a; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                o = e.rawExtraField, d = e.extraField = new Map, u = X(new Uint8Array(o));
                w = 0;
                try {
                    for (; w < o.length;) {
                        p = rt(u, w), i = rt(u, w + 2);
                        d.set(p, { type: p, data: o.slice(w + 4, w + 4 + i) }), w += 4 + i;
                    }
                }
                catch (_d) { }
                x = rt(t, r + 4);
                e.signature = J(t, r + 10), e.uncompressedSize = J(t, r + 18), e.compressedSize = J(t, r + 14);
                m = d.get(1);
                m && (function (p, i) { i.zip64 = !0; var c = X(p.data); p.values = []; for (var g = 0; g < Math.floor(p.data.length / 8); g++)
                    p.values.push(At(c, 0 + 8 * g)); var h = qe.filter(function (g) { return i[g] == kt; }); for (var g = 0; g < h.length; g++)
                    p[h[g]] = p.values[g]; qe.forEach(function (g) { if (i[g] == kt) {
                    if (p[g] === void 0)
                        throw new Error(Be);
                    i[g] = p[g];
                } }); }(m, e), e.extraFieldZip64 = m);
                S = d.get(28789);
                _a = S;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, Ge(S, "filename", "rawFilename", e, n)];
            case 1:
                _a = (_c.sent(), e.extraFieldUnicodePath = S);
                _c.label = 2;
            case 2:
                _a;
                I = d.get(25461);
                _b = I;
                if (!_b) return [3 /*break*/, 4];
                return [4 /*yield*/, Ge(I, "comment", "rawComment", e, n)];
            case 3:
                _b = (_c.sent(), e.extraFieldUnicodeComment = I);
                _c.label = 4;
            case 4:
                _b;
                W = d.get(39169);
                W ? (function (p, i, c) { var h = X(p.data); p.vendorVersion = _t(h, 0), p.vendorId = _t(h, 2); var g = _t(h, 4); p.strength = g, p.originalCompressionMethod = c, i.compressionMethod = p.compressionMethod = rt(h, 5); }(W, e, x), e.extraFieldAES = W) : e.compressionMethod = x;
                N = d.get(10);
                N && (function (p, i) { var c = X(p.data); var h, g = 4; try {
                    for (; g < p.data.length && !h;) {
                        var A = rt(c, g), v = rt(c, g + 2);
                        A == 1 && (h = p.data.slice(g + 4, g + 4 + v)), g += 4 + v;
                    }
                }
                catch (_a) { } try {
                    if (h && h.length == 24) {
                        var A = X(h), v = A.getBigUint64(0, !0), y = A.getBigUint64(8, !0), f = A.getBigUint64(16, !0);
                        Object.assign(p, { rawLastModDate: v, rawLastAccessDate: y, rawCreationDate: f });
                        var k = qt(v), z = qt(y), U = { lastModDate: k, lastAccessDate: z, creationDate: qt(f) };
                        Object.assign(p, U), Object.assign(i, U);
                    }
                }
                catch (_b) { } }(N, e), e.extraFieldNTFS = N);
                a = d.get(21589);
                a && (function (p, i) { var c = X(p.data), h = _t(c, 0), g = [], A = []; (1 & h) == 1 && (g.push("lastModDate"), A.push("rawLastModDate")), (2 & h) == 2 && (g.push("lastAccessDate"), A.push("rawLastAccessDate")), (4 & h) == 4 && (g.push("creationDate"), A.push("rawCreationDate")); var v = 1; g.forEach(function (y, f) { if (p.data.length >= v + 4) {
                    var k = J(c, v);
                    i[y] = p[y] = new Date(1e3 * k);
                    var z = A[f];
                    p[z] = k;
                } v += 4; }); }(a, e), e.extraFieldExtendedTimestamp = a);
                return [2 /*return*/];
        }
    }); });
} function Ge(n, e, t, r, o) {
    return __awaiter(this, void 0, void 0, function () { var d, u, w, _a, _b; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                d = X(n.data);
                n.version = _t(d, 0), n.signature = J(d, 1);
                u = new bt;
                u.append(o[t]);
                w = X(new Uint8Array(4));
                w.setUint32(0, u.get(), !0);
                _a = n;
                _b = e;
                return [4 /*yield*/, Ht(n.data.subarray(5))];
            case 1:
                _a[_b] = _c.sent(), n.valid = !o.bitFlag.languageEncodingFlag && n.signature == J(w, 0), n.valid && (r[e] = n[e], r[e + "UTF8"] = !0);
                return [2 /*return*/];
        }
    }); });
} function pt(n, e, t) { return e[t] === void 0 ? n.options[t] : e[t]; } function vn(n) { var e = (4294901760 & n) >> 16, t = 65535 & n; try {
    return new Date(1980 + ((65024 & e) >> 9), ((480 & e) >> 5) - 1, 31 & e, (63488 & t) >> 11, (2016 & t) >> 5, 2 * (31 & t), 0);
}
catch (_a) { } } function qt(n) { return new Date(Number(n / BigInt(1e4) - BigInt(116444736e5))); } function _t(n, e) { return n.getUint8(e); } function rt(n, e) { return n.getUint16(e, !0); } function J(n, e) { return n.getUint32(e, !0); } function At(n, e) { return Number(n.getBigUint64(e, !0)); } function X(n) { return new DataView(n.buffer); } function lt(n, e, t) { return n.readUint8Array(e, t); } Qt({ Inflate: function (n) { var e = new Zt, t = n && n.chunkSize ? Math.floor(2 * n.chunkSize) : 131072, r = new Uint8Array(t); var o = !1; e.inflateInit(), e.next_out = r, this.append = function (d, u) { var w = []; var x, m, S = 0, I = 0, W = 0; if (d.length !== 0) {
        e.next_in_index = 0, e.next_in = d, e.avail_in = d.length;
        do {
            if (e.next_out_index = 0, e.avail_out = t, e.avail_in !== 0 || o || (e.next_in_index = 0, o = !0), x = e.inflate(0), o && x === -5) {
                if (e.avail_in !== 0)
                    throw new Error("inflating: bad input");
            }
            else if (x !== 0 && x !== 1)
                throw new Error("inflating: " + e.msg);
            if ((o || x === 1) && e.avail_in === d.length)
                throw new Error("inflating: bad input");
            e.next_out_index && (e.next_out_index === t ? w.push(new Uint8Array(r)) : w.push(r.slice(0, e.next_out_index))), W += e.next_out_index, u && e.next_in_index > 0 && e.next_in_index != S && (u(e.next_in_index), S = e.next_in_index);
        } while (e.avail_in > 0 || e.avail_out === 0);
        return w.length > 1 ? (m = new Uint8Array(W), w.forEach(function (N) { m.set(N, I), I += N.length; })) : m = w[0] || new Uint8Array(0), m;
    } }, this.flush = function () { e.inflateEnd(); }; } }), l.BlobReader = ee, l.BlobWriter = /** @class */ (function (_super) {
    __extends(class_2, _super);
    function class_2(n) {
        var _this = this;
        _this = _super.call(this) || this, _this.contentType = n, _this.arrayBuffers = [];
        return _this;
    }
    class_2.prototype.writeUint8Array = function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            _super.prototype.writeUint8Array.call(this, n), this.arrayBuffers.push(n.buffer);
            return [2 /*return*/];
        }); });
    };
    class_2.prototype.getData = function () { return this.blob || (this.blob = new Blob(this.arrayBuffers, { type: this.contentType })), this.blob; };
    return class_2;
}(mt)), l.Data64URIReader = /** @class */ (function (_super) {
    __extends(class_3, _super);
    function class_3(n) {
        var _this = this;
        _this = _super.call(this) || this, _this.dataURI = n;
        var e = n.length;
        for (; n.charAt(e - 1) == "=";)
            e--;
        _this.dataStart = n.indexOf(",") + 1, _this.size = Math.floor(.75 * (e - _this.dataStart));
        return _this;
    }
    class_3.prototype.readUint8Array = function (n, e) {
        return __awaiter(this, void 0, void 0, function () { var t, r, o, d, u; return __generator(this, function (_a) {
            t = new Uint8Array(e), r = 4 * Math.floor(n / 3), o = atob(this.dataURI.substring(r + this.dataStart, 4 * Math.ceil((n + e) / 3) + this.dataStart)), d = n - 3 * Math.floor(r / 4);
            for (u = d; u < d + e; u++)
                t[u - d] = o.charCodeAt(u);
            return [2 /*return*/, t];
        }); });
    };
    return class_3;
}(ot)), l.Data64URIWriter = /** @class */ (function (_super) {
    __extends(class_4, _super);
    function class_4(n) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = "data:" + (n || "") + ";base64,", _this.pending = [];
        return _this;
    }
    class_4.prototype.writeUint8Array = function (n) {
        return __awaiter(this, void 0, void 0, function () { var e, t, r; return __generator(this, function (_a) {
            _super.prototype.writeUint8Array.call(this, n);
            e = 0, t = this.pending;
            r = this.pending.length;
            for (this.pending = "", e = 0; e < 3 * Math.floor((r + n.length) / 3) - r; e++)
                t += String.fromCharCode(n[e]);
            for (; e < n.length; e++)
                this.pending += String.fromCharCode(n[e]);
            t.length > 2 ? this.data += btoa(t) : this.pending = t;
            return [2 /*return*/];
        }); });
    };
    class_4.prototype.getData = function () { return this.data + btoa(this.pending); };
    return class_4;
}(mt)), l.ERR_ABORT = Yt, l.ERR_BAD_FORMAT = St, l.ERR_CENTRAL_DIRECTORY_NOT_FOUND = Oe, l.ERR_ENCRYPTED = We, l.ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = Le, l.ERR_EOCDR_NOT_FOUND = Fe, l.ERR_EOCDR_ZIP64_NOT_FOUND = De, l.ERR_EXTRAFIELD_ZIP64_NOT_FOUND = Be, l.ERR_HTTP_RANGE = Ut, l.ERR_INVALID_PASSWORD = Dt, l.ERR_INVALID_SIGNATURE = Nt, l.ERR_LOCAL_FILE_HEADER_NOT_FOUND = Ne, l.ERR_UNSUPPORTED_COMPRESSION = jt, l.ERR_UNSUPPORTED_ENCRYPTION = Pe, l.HttpRangeReader = /** @class */ (function (_super) {
    __extends(HttpRangeReader, _super);
    function HttpRangeReader(n, e) {
        if (e === void 0) { e = {}; }
        var _this = this;
        e.useRangeHeader = !0, _this = _super.call(this, n, e) || this;
        return _this;
    }
    return HttpRangeReader;
}(le)), l.HttpReader = le, l.Reader = ot, l.TextReader = /** @class */ (function (_super) {
    __extends(class_5, _super);
    function class_5(n) {
        var _this = this;
        _this = _super.call(this) || this, _this.blobReader = new ee(new Blob([n], { type: Ct }));
        return _this;
    }
    class_5.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            _super.prototype.init.call(this), this.blobReader.init(), this.size = this.blobReader.size;
            return [2 /*return*/];
        }); });
    };
    class_5.prototype.readUint8Array = function (n, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.blobReader.readUint8Array(n, e)];
        }); });
    };
    return class_5;
}(ot)), l.TextWriter = /** @class */ (function (_super) {
    __extends(class_6, _super);
    function class_6(n) {
        var _this = this;
        _this = _super.call(this) || this, _this.encoding = n, _this.blob = new Blob([], { type: Ct });
        return _this;
    }
    class_6.prototype.writeUint8Array = function (n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            _super.prototype.writeUint8Array.call(this, n), this.blob = new Blob([this.blob, n.buffer], { type: Ct });
            return [2 /*return*/];
        }); });
    };
    class_6.prototype.getData = function () {
        var _this = this;
        if (this.blob.text)
            return this.blob.text();
        {
            var n_1 = new FileReader;
            return new Promise(function (e, t) { n_1.onload = function (r) { return e(r.target.result); }, n_1.onerror = function () { return t(n_1.error); }, n_1.readAsText(_this.blob, _this.encoding); });
        }
    };
    return class_6;
}(mt)), l.Uint8ArrayReader = /** @class */ (function (_super) {
    __extends(class_7, _super);
    function class_7(n) {
        var _this = this;
        _this = _super.call(this) || this, _this.array = n, _this.size = n.length;
        return _this;
    }
    class_7.prototype.readUint8Array = function (n, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this.array.slice(n, n + e)];
        }); });
    };
    return class_7;
}(ot)), l.Uint8ArrayWriter = /** @class */ (function (_super) {
    __extends(class_8, _super);
    function class_8() {
        var _this = this;
        _this = _super.call(this) || this, _this.array = new Uint8Array(0);
        return _this;
    }
    class_8.prototype.writeUint8Array = function (n) {
        return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
            _super.prototype.writeUint8Array.call(this, n);
            e = this.array;
            this.array = new Uint8Array(e.length + n.length), this.array.set(e), this.array.set(n, e.length);
            return [2 /*return*/];
        }); });
    };
    class_8.prototype.getData = function () { return this.array; };
    return class_8;
}(mt)), l.Writer = mt, l.ZipReader = /** @class */ (function () {
    function class_9(n, e) {
        if (e === void 0) { e = {}; }
        Object.assign(this, { reader: n, options: e, config: tt });
    }
    class_9.prototype.getEntries = function (n) {
        if (n === void 0) { n = {}; }
        return __awaiter(this, void 0, void 0, function () { var e, t, _a, r, o, d, u, w, x, N, _b, a, p, i, c, m, S, I, N, a, W, _loop_1, N; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    e = this, t = e.reader;
                    _a = t.initialized;
                    if (_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, t.init()];
                case 1:
                    _a = (_c.sent());
                    _c.label = 2;
                case 2:
                    if (_a, t.size < 22)
                        throw new Error(St);
                    return [4 /*yield*/, function (N, a, p, i, c) {
                            return __awaiter(this, void 0, void 0, function () { function A(v) {
                                return __awaiter(this, void 0, void 0, function () { var y, f, k; return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            y = p - v;
                                            return [4 /*yield*/, lt(N, y, v)];
                                        case 1:
                                            f = _a.sent();
                                            for (k = f.length - i; k >= 0; k--)
                                                if (f[k] == h[0] && f[k + 1] == h[1] && f[k + 2] == h[2] && f[k + 3] == h[3])
                                                    return [2 /*return*/, { offset: y + k, buffer: f.slice(k, k + i).buffer }];
                                            return [2 /*return*/];
                                    }
                                }); });
                            } var h, g, _a; return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        h = new Uint8Array(4);
                                        (function (v, y, f) { v.setUint32(y, f, !0); })(X(h), 0, a);
                                        g = i + c;
                                        return [4 /*yield*/, A(i)];
                                    case 1:
                                        _a = (_b.sent());
                                        if (_a) return [3 /*break*/, 3];
                                        return [4 /*yield*/, A(Math.min(g, p))];
                                    case 2:
                                        _a = (_b.sent());
                                        _b.label = 3;
                                    case 3: return [2 /*return*/, _a];
                                }
                            }); });
                        }(t, 101010256, t.size, 22, 1048560)];
                case 3:
                    r = _c.sent();
                    if (!r)
                        throw new Error(Fe);
                    o = X(r);
                    d = J(o, 12), u = J(o, 16), w = rt(o, 8), x = 0;
                    if (!(u == kt || d == kt || w == 65535)) return [3 /*break*/, 8];
                    _b = X;
                    return [4 /*yield*/, lt(t, r.offset - 20, 20)];
                case 4:
                    N = _b.apply(void 0, [_c.sent()]);
                    if (J(N, 0) != 117853008)
                        throw new Error(De);
                    u = At(N, 8);
                    return [4 /*yield*/, lt(t, u, 56)];
                case 5:
                    a = _c.sent(), p = X(a);
                    i = r.offset - 20 - 56;
                    if (!(J(p, 0) != ue && u != i)) return [3 /*break*/, 7];
                    c = u;
                    u = i, x = u - c;
                    return [4 /*yield*/, lt(t, u, 56)];
                case 6:
                    a = _c.sent(), p = X(a);
                    _c.label = 7;
                case 7:
                    if (J(p, 0) != ue)
                        throw new Error(Le);
                    w = At(p, 32), d = At(p, 40), u -= d;
                    _c.label = 8;
                case 8:
                    if (u < 0 || u >= t.size)
                        throw new Error(St);
                    m = 0;
                    return [4 /*yield*/, lt(t, u, d)];
                case 9:
                    S = _c.sent(), I = X(S);
                    if (!d) return [3 /*break*/, 11];
                    N = r.offset - d;
                    if (!(J(I, m) != de && u != N)) return [3 /*break*/, 11];
                    a = u;
                    u = N, x = u - a;
                    return [4 /*yield*/, lt(t, u, d)];
                case 10:
                    S = _c.sent(), I = X(S);
                    _c.label = 11;
                case 11:
                    if (u < 0 || u >= t.size)
                        throw new Error(St);
                    W = [];
                    _loop_1 = function (N) {
                        var a, p, i, c, h, g, A, v, y, f, _d, k, z, U;
                        return __generator(this, function (_g) {
                            switch (_g.label) {
                                case 0:
                                    a = new kn(t, e.config, e.options);
                                    if (J(I, m) != de)
                                        throw new Error(Oe);
                                    Ve(a, I, m + 6);
                                    p = Boolean(a.bitFlag.languageEncodingFlag), i = m + 46, c = i + a.filenameLength, h = c + a.extraFieldLength, g = rt(I, m + 4), A = (0 & g) == 0;
                                    Object.assign(a, { versionMadeBy: g, msDosCompatible: A, compressedSize: 0, uncompressedSize: 0, commentLength: rt(I, m + 32), directory: A && (16 & _t(I, m + 38)) == 16, offset: J(I, m + 42) + x, internalFileAttribute: J(I, m + 34), externalFileAttribute: J(I, m + 38), rawFilename: S.subarray(i, c), filenameUTF8: p, commentUTF8: p, rawExtraField: S.subarray(c, h) });
                                    v = h + a.commentLength;
                                    a.rawComment = S.subarray(h, v);
                                    y = pt(e, n, "filenameEncoding"), f = pt(e, n, "commentEncoding");
                                    return [4 /*yield*/, Promise.all([Ht(a.rawFilename, a.filenameUTF8 ? He : y || je), Ht(a.rawComment, a.commentUTF8 ? He : f || je)])];
                                case 1:
                                    _d = _g.sent(), k = _d[0], z = _d[1];
                                    a.filename = k, a.comment = z, !a.directory && a.filename.endsWith("/") && (a.directory = !0);
                                    return [4 /*yield*/, $e(a, a, I, m + 6)];
                                case 2:
                                    _g.sent();
                                    U = new Me(a);
                                    if (U.getData = function (E, R) { return a.getData(E, U, R); }, W.push(U), m = v, n.onprogress)
                                        try {
                                            n.onprogress(N + 1, w, new Me(a));
                                        }
                                        catch (_j) { }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    N = 0;
                    _c.label = 12;
                case 12:
                    if (!(N < w)) return [3 /*break*/, 15];
                    return [5 /*yield**/, _loop_1(N)];
                case 13:
                    _c.sent();
                    _c.label = 14;
                case 14:
                    N++;
                    return [3 /*break*/, 12];
                case 15: return [2 /*return*/, W];
            }
        }); });
    };
    class_9.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return class_9;
}()), l.configure = Qt, l.getMimeType = function () { return "application/octet-stream"; }, Object.defineProperty(l, "__esModule", { value: !0 }); }); })(Wn, Et);
var Pn = Bn(Et);
function Hn() { return { traceUrl: "", startTime: Number.MAX_SAFE_INTEGER, endTime: 0, browserName: "", options: { deviceScaleFactor: 1, isMobile: !1, viewport: { width: 1280, height: 800 } }, pages: [], resources: [], actions: [], events: [], initializers: {}, hasSource: !1 }; }
var Ze;
(function (T) { function s(l) { for (var _i = 0, _a = l.splice(0); _i < _a.length; _i++) {
    var _ = _a[_i];
    _.dispose();
} } T.disposeAll = s; })(Ze || (Ze = {}));
var jn = /** @class */ (function () {
    function jn() {
        var _this = this;
        Z(this, "event");
        Z(this, "_deliveryQueue");
        Z(this, "_listeners", new Set);
        this.event = function (s, l) { _this._listeners.add(s); var _ = !1; var b = _this, C = { dispose: function () { _ || (_ = !0, b._listeners.delete(s)); } }; return l && l.push(C), C; };
    }
    jn.prototype.fire = function (s) { var l = !this._deliveryQueue; this._deliveryQueue || (this._deliveryQueue = []); for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
        var _ = _a[_i];
        this._deliveryQueue.push({ listener: _, event: s });
    } if (l) {
        for (var _ = 0; _ < this._deliveryQueue.length; _++) {
            var _b = this._deliveryQueue[_], b = _b.listener, C = _b.event;
            b.call(null, C);
        }
        this._deliveryQueue = void 0;
    } };
    jn.prototype.dispose = function () { this._listeners.clear(), this._deliveryQueue && (this._deliveryQueue = []); };
    return jn;
}());
var qn = /** @class */ (function () {
    function qn() {
        Z(this, "_resources", []);
        Z(this, "_frameSnapshots", new Map);
        Z(this, "_didSnapshot", new jn);
        Z(this, "onSnapshotEvent", this._didSnapshot.event);
    }
    qn.prototype.clear = function () { this._resources = [], this._frameSnapshots.clear(); };
    qn.prototype.addResource = function (s) { s.request.url = Vt(s.request.url), this._resources.push(s); };
    qn.prototype.addFrameSnapshot = function (s) { for (var _i = 0, _a = s.resourceOverrides; _i < _a.length; _i++) {
        var b = _a[_i];
        b.url = Vt(b.url);
    } var l = this._frameSnapshots.get(s.frameId); l || (l = { raw: [], renderer: [] }, this._frameSnapshots.set(s.frameId, l), s.isMainFrame && this._frameSnapshots.set(s.pageId, l)), l.raw.push(s); var _ = new En(this._resources, l.raw, l.raw.length - 1); l.renderer.push(_), this._didSnapshot.fire(_); };
    qn.prototype.resources = function () { return this._resources.slice(); };
    qn.prototype.snapshotByName = function (s, l) { var _ = this._frameSnapshots.get(s); return _ == null ? void 0 : _.renderer.find(function (b) { return b.snapshotName === l; }); };
    qn.prototype.snapshotByIndex = function (s, l) { var _ = this._frameSnapshots.get(s); return _ == null ? void 0 : _.renderer[l]; };
    return qn;
}());
var Rt = Pn;
var Vn = /** @class */ (function () {
    function Vn() {
        Z(this, "contextEntries", []);
        Z(this, "pageEntries", new Map);
        Z(this, "_snapshotStorage");
        Z(this, "_version");
        Z(this, "_backend");
    }
    Vn.prototype.load = function (s, l) {
        return __awaiter(this, void 0, void 0, function () {
            var _, b, C, _i, _a, H, D, _b, b_1, H, D, F, j, _c, _d, V, L, _g, _j, V, _k, _l, V, G, V, _m, _o, Y;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        _ = s.endsWith("json");
                        this._backend = _ ? new Gn(s) : new $n(s, l);
                        b = [];
                        C = !1;
                        _i = 0;
                        return [4 /*yield*/, this._backend.entryNames()];
                    case 1:
                        _a = _p.sent();
                        _p.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        H = _a[_i];
                        D = H.match(/(.+-)?trace\.trace/);
                        D && b.push(D[1] || ""), H.includes("src@") && (C = !0);
                        _p.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 2];
                    case 4:
                        if (!b.length)
                            throw new Error("Cannot find .trace file");
                        this._snapshotStorage = new Kn(this._backend);
                        _b = 0, b_1 = b;
                        _p.label = 5;
                    case 5:
                        if (!(_b < b_1.length)) return [3 /*break*/, 10];
                        H = b_1[_b];
                        D = Hn(), F = new Map;
                        D.traceUrl = s, D.hasSource = C;
                        return [4 /*yield*/, this._backend.readText(H + "trace.trace")];
                    case 6:
                        j = (_p.sent()) || "";
                        for (_c = 0, _d = j.split("\n"); _c < _d.length; _c++) {
                            V = _d[_c];
                            this.appendEvent(D, F, V);
                        }
                        return [4 /*yield*/, this._backend.readText(H + "trace.network")];
                    case 7:
                        L = (_p.sent()) || "";
                        for (_g = 0, _j = L.split("\n"); _g < _j.length; _g++) {
                            V = _j[_g];
                            this.appendEvent(D, F, V);
                        }
                        if (D.actions = __spreadArray([], F.values(), true).sort(function (V, Y) { return V.startTime - Y.startTime; }), !_)
                            for (_k = 0, _l = D.actions; _k < _l.length; _k++) {
                                V = _l[_k];
                                !V.endTime && !V.error && (V.error = { name: "Error", message: "Timed out" });
                            }
                        return [4 /*yield*/, this._backend.readText(H + "trace.stacks")];
                    case 8:
                        G = _p.sent();
                        if (G) {
                            V = On(JSON.parse(G));
                            for (_m = 0, _o = D.actions; _m < _o.length; _m++) {
                                Y = _o[_m];
                                Y.stack = Y.stack || V.get(Y.callId);
                            }
                        }
                        this.contextEntries.push(D);
                        _p.label = 9;
                    case 9:
                        _b++;
                        return [3 /*break*/, 5];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Vn.prototype.hasEntry = function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this._backend.hasEntry(s)];
        }); });
    };
    Vn.prototype.resourceForSha1 = function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this._backend.readBlob("resources/" + s)];
        }); });
    };
    Vn.prototype.storage = function () { return this._snapshotStorage; };
    Vn.prototype._pageEntry = function (s, l) { var _ = this.pageEntries.get(l); return _ || (_ = { screencastFrames: [] }, this.pageEntries.set(l, _), s.pages.push(_)), _; };
    Vn.prototype.appendEvent = function (s, l, _) { if (!_)
        return; var b = this._modernize(JSON.parse(_)); if (b) {
        switch (b.type) {
            case "context-options": {
                this._version = b.version, s.browserName = b.browserName, s.title = b.title, s.platform = b.platform, s.wallTime = b.wallTime, s.sdkLanguage = b.sdkLanguage, s.options = b.options, s.testIdAttributeName = b.testIdAttributeName;
                break;
            }
            case "screencast-frame": {
                this._pageEntry(s, b.pageId).screencastFrames.push(b);
                break;
            }
            case "before": {
                l.set(b.callId, __assign(__assign({}, b), { type: "action", endTime: 0, log: [] }));
                break;
            }
            case "input": {
                var C = l.get(b.callId);
                C.inputSnapshot = b.inputSnapshot, C.point = b.point;
                break;
            }
            case "after": {
                var C = l.get(b.callId);
                C.afterSnapshot = b.afterSnapshot, C.endTime = b.endTime, C.log = b.log, C.result = b.result, C.error = b.error;
                break;
            }
            case "action": {
                l.set(b.callId, b);
                break;
            }
            case "event": {
                s.events.push(b);
                break;
            }
            case "object": {
                s.initializers[b.guid] = b.initializer;
                break;
            }
            case "resource-snapshot":
                this._snapshotStorage.addResource(b.snapshot), s.resources.push(b.snapshot);
                break;
            case "frame-snapshot":
                this._snapshotStorage.addFrameSnapshot(b.snapshot);
                break;
        }
        (b.type === "action" || b.type === "before") && (s.startTime = Math.min(s.startTime, b.startTime)), (b.type === "action" || b.type === "after") && (s.endTime = Math.max(s.endTime, b.endTime)), b.type === "event" && (s.startTime = Math.min(s.startTime, b.time), s.endTime = Math.max(s.endTime, b.time)), b.type === "screencast-frame" && (s.startTime = Math.min(s.startTime, b.timestamp), s.endTime = Math.max(s.endTime, b.timestamp));
    } };
    Vn.prototype._modernize = function (s) { if (this._version === void 0)
        return s; var l = 4; for (var _ = this._version; _ < l; ++_)
        s = this["_modernize_".concat(_, "_to_").concat(_ + 1)].call(this, s); return s; };
    Vn.prototype._modernize_0_to_1 = function (s) { return s.type === "action" && typeof s.metadata.error == "string" && (s.metadata.error = { error: { name: "Error", message: s.metadata.error } }), s; };
    Vn.prototype._modernize_1_to_2 = function (s) { var l, _; return s.type === "frame-snapshot" && s.snapshot.isMainFrame && (s.snapshot.viewport = ((_ = (l = this.contextEntries[0]) == null ? void 0 : l.options) == null ? void 0 : _.viewport) || { width: 1280, height: 720 }), s; };
    Vn.prototype._modernize_2_to_3 = function (s) { if (s.type === "resource-snapshot" && !s.snapshot.request) {
        var l = s.snapshot;
        s.snapshot = { _frameref: l.frameId, request: { url: l.url, method: l.method, headers: l.requestHeaders, postData: l.requestSha1 ? { _sha1: l.requestSha1 } : void 0 }, response: { status: l.status, headers: l.responseHeaders, content: { mimeType: l.contentType, _sha1: l.responseSha1 } }, _monotonicTime: l.timestamp };
    } return s; };
    Vn.prototype._modernize_3_to_4 = function (s) { var _, b, C, H; if (s.type !== "action" && s.type !== "event")
        return s; var l = s.metadata; return l.internal || l.method.startsWith("tracing") ? null : s.type === "event" ? l.method === "__create__" && l.type === "ConsoleMessage" ? { type: "object", class: l.type, guid: l.params.guid, initializer: l.params.initializer } : { type: "event", time: l.startTime, class: l.type, method: l.method, params: l.params, pageId: l.pageId } : { type: "action", callId: l.id, startTime: l.startTime, endTime: l.endTime, apiName: l.apiName || l.type + "." + l.method, class: l.type, method: l.method, params: l.params, wallTime: l.wallTime || Date.now(), log: l.log, beforeSnapshot: (_ = l.snapshots.find(function (D) { return D.title === "before"; })) == null ? void 0 : _.snapshotName, inputSnapshot: (b = l.snapshots.find(function (D) { return D.title === "input"; })) == null ? void 0 : b.snapshotName, afterSnapshot: (C = l.snapshots.find(function (D) { return D.title === "after"; })) == null ? void 0 : C.snapshotName, error: (H = l.error) == null ? void 0 : H.error, result: l.result, point: l.point, pageId: l.pageId }; };
    return Vn;
}());
var $n = /** @class */ (function () {
    function $n(s, l) {
        Z(this, "_zipReader");
        Z(this, "_entriesPromise");
        this._zipReader = new Rt.ZipReader(new Rt.HttpReader(Zn(s), { mode: "cors", preventHeadRequest: !0 }), { useWebWorkers: !1 }), this._entriesPromise = this._zipReader.getEntries({ onprogress: l }).then(function (_) { var b = new Map; for (var _i = 0, _3 = _; _i < _3.length; _i++) {
            var C = _3[_i];
            b.set(C.filename, C);
        } return b; });
    }
    $n.prototype.entryNames = function () {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = [[]];
                    return [4 /*yield*/, this._entriesPromise];
                case 1: return [2 /*return*/, __spreadArray.apply(void 0, _a.concat([(_b.sent()).keys(), true]))];
            }
        }); });
    };
    $n.prototype.hasEntry = function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._entriesPromise];
                case 1: return [2 /*return*/, (_a.sent()).has(s)];
            }
        }); });
    };
    $n.prototype.readText = function (s) {
        return __awaiter(this, void 0, void 0, function () { var C, _, b; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._entriesPromise];
                case 1:
                    _ = (_a.sent()).get(s);
                    if (!_)
                        return [2 /*return*/];
                    b = new Rt.TextWriter;
                    return [4 /*yield*/, ((C = _.getData) == null ? void 0 : C.call(_, b))];
                case 2: return [2 /*return*/, (_a.sent(), b.getData())];
            }
        }); });
    };
    $n.prototype.readBlob = function (s) {
        return __awaiter(this, void 0, void 0, function () { var _, b; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._entriesPromise];
                case 1:
                    _ = (_a.sent()).get(s);
                    if (!_)
                        return [2 /*return*/];
                    b = new Rt.BlobWriter;
                    return [4 /*yield*/, _.getData(b)];
                case 2: return [2 /*return*/, (_a.sent(), b.getData())];
            }
        }); });
    };
    return $n;
}());
var Gn = /** @class */ (function () {
    function Gn(s) {
        var _this = this;
        Z(this, "_entriesPromise");
        this._entriesPromise = fetch("/trace/file?path=" + encodeURI(s)).then(function (l) { return __awaiter(_this, void 0, void 0, function () { var _, b, _a, _b, _i, _c, C; return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, l.text()];
                case 1:
                    _ = _b.apply(_a, [_d.sent()]), b = new Map;
                    for (_i = 0, _c = _.entries; _i < _c.length; _i++) {
                        C = _c[_i];
                        b.set(C.name, C.path);
                    }
                    return [2 /*return*/, b];
            }
        }); }); });
    }
    Gn.prototype.entryNames = function () {
        return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = [[]];
                    return [4 /*yield*/, this._entriesPromise];
                case 1: return [2 /*return*/, __spreadArray.apply(void 0, _a.concat([(_b.sent()).keys(), true]))];
            }
        }); });
    };
    Gn.prototype.hasEntry = function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._entriesPromise];
                case 1: return [2 /*return*/, (_a.sent()).has(s)];
            }
        }); });
    };
    Gn.prototype.readText = function (s) {
        return __awaiter(this, void 0, void 0, function () { var l; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._readEntry(s)];
                case 1:
                    l = _a.sent();
                    return [2 /*return*/, l == null ? void 0 : l.text()];
            }
        }); });
    };
    Gn.prototype.readBlob = function (s) {
        return __awaiter(this, void 0, void 0, function () { var l; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._readEntry(s)];
                case 1:
                    l = _a.sent();
                    return [2 /*return*/, l == null ? void 0 : l.blob()];
            }
        }); });
    };
    Gn.prototype._readEntry = function (s) {
        return __awaiter(this, void 0, void 0, function () { var _; return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this._entriesPromise];
                case 1:
                    _ = (_a.sent()).get(s);
                    if (_)
                        return [2 /*return*/, fetch("/trace/file?path=" + encodeURI(_))];
                    return [2 /*return*/];
            }
        }); });
    };
    return Gn;
}());
var Kn = /** @class */ (function (_super) {
    __extends(Kn, _super);
    function Kn(l) {
        var _this = _super.call(this) || this;
        Z(_this, "_backend");
        _this._backend = l;
        return _this;
    }
    Kn.prototype.resourceContent = function (l) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, this._backend.readBlob("resources/" + l)];
        }); });
    };
    return Kn;
}(qn));
function Zn(T) { var s = T.startsWith("http") || T.startsWith("blob") ? T : "file?path=".concat(T); return s.startsWith("https://www.dropbox.com/") && (s = "https://dl.dropboxusercontent.com/" + s.substring(24)), s; }
self.addEventListener("install", function (T) { self.skipWaiting(); });
self.addEventListener("activate", function (T) { T.waitUntil(self.clients.claim()); });
var Qn = new URL(self.registration.scope).pathname, gt = new Map, Gt = new Rn;
function Yn(T, s, l, _) {
    return __awaiter(this, void 0, void 0, function () { var H, b, D_1, _a, C; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                Gt.set(l, T);
                b = new Vn;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 6]);
                return [4 /*yield*/, b.load(T, _)];
            case 2:
                _b.sent();
                return [3 /*break*/, 6];
            case 3:
                D_1 = _b.sent();
                _a = (H = D_1 == null ? void 0 : D_1.message) != null && H.includes("Cannot find .trace file");
                if (!_a) return [3 /*break*/, 5];
                return [4 /*yield*/, b.hasEntry("index.html")];
            case 4:
                _a = (_b.sent());
                _b.label = 5;
            case 5: throw _a ? new Error("Could not load trace. Did you upload a Playwright HTML report instead? Make sure to extract the archive first and then double-click the index.html file or put it on a web server.") : (console.error(D_1), s ? new Error("Could not load trace from ".concat(s, ". Make sure to upload a valid Playwright trace.")) : new Error("Could not load trace from ".concat(T, ". Make sure a valid Playwright Trace is accessible over this url.")));
            case 6:
                C = new Dn(b.storage());
                return [2 /*return*/, (gt.set(T, { traceModel: b, snapshotServer: C }), b)];
        }
    }); });
}
function Jn(T) {
    return __awaiter(this, void 0, void 0, function () { var s, l, _, F, j, L, G, V, V_1, V, _i, _a, V, Y, b, C, H, D; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                s = T.request;
                return [4 /*yield*/, self.clients.get(T.clientId)];
            case 1:
                l = _b.sent(), _ = self.registration.scope.startsWith("https://");
                if (!s.url.startsWith(self.registration.scope)) return [3 /*break*/, 13];
                F = new URL($t(s.url)), j = F.pathname.substring(Qn.length - 1);
                if (!(j === "/ping")) return [3 /*break*/, 3];
                return [4 /*yield*/, Xn()];
            case 2: return [2 /*return*/, (_b.sent(), new Response(null, { status: 200 }))];
            case 3:
                L = F.searchParams.get("trace"), G = (gt.get(L) || {}).snapshotServer;
                if (!(j === "/contexts")) return [3 /*break*/, 7];
                _b.label = 4;
            case 4:
                _b.trys.push([4, 6, , 7]);
                return [4 /*yield*/, Yn(L, F.searchParams.get("traceFileName"), T.clientId, function (Y, st) { l.postMessage({ method: "progress", params: { done: Y, total: st } }); })];
            case 5:
                V = _b.sent();
                return [2 /*return*/, new Response(JSON.stringify(V.contextEntries), { status: 200, headers: { "Content-Type": "application/json" } })];
            case 6:
                V_1 = _b.sent();
                return [2 /*return*/, new Response(JSON.stringify({ error: V_1 == null ? void 0 : V_1.message }), { status: 500, headers: { "Content-Type": "application/json" } })];
            case 7:
                if (j.startsWith("/snapshotInfo/"))
                    return [2 /*return*/, G ? G.serveSnapshotInfo(j, F.searchParams) : new Response(null, { status: 404 })];
                if (j.startsWith("/snapshot/")) {
                    if (!G)
                        return [2 /*return*/, new Response(null, { status: 404 })];
                    V = G.serveSnapshot(j, F.searchParams, F.href);
                    return [2 /*return*/, (_ && V.headers.set("Content-Security-Policy", "upgrade-insecure-requests"), V)];
                }
                if (!j.startsWith("/sha1/")) return [3 /*break*/, 12];
                _i = 0, _a = gt.values();
                _b.label = 8;
            case 8:
                if (!(_i < _a.length)) return [3 /*break*/, 11];
                V = _a[_i].traceModel;
                return [4 /*yield*/, V.resourceForSha1(j.slice(6))];
            case 9:
                Y = _b.sent();
                if (Y)
                    return [2 /*return*/, new Response(Y, { status: 200 })];
                _b.label = 10;
            case 10:
                _i++;
                return [3 /*break*/, 8];
            case 11: return [2 /*return*/, new Response(null, { status: 404 })];
            case 12: return [2 /*return*/, fetch(T.request)];
            case 13:
                b = $t(l.url), C = new URL(b).searchParams.get("trace"), H = (gt.get(C) || {}).snapshotServer;
                if (!H)
                    return [2 /*return*/, new Response(null, { status: 404 })];
                D = [s.url];
                return [2 /*return*/, (_ && s.url.startsWith("https://") && D.push(s.url.replace(/^https/, "http")), H.serveResource(D, b))];
        }
    }); });
}
function Xn() {
    return __awaiter(this, void 0, void 0, function () { var T, s, _loop_2, _i, Gt_1, _a, l, _, _b, _c, l; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, self.clients.matchAll()];
            case 1:
                T = _d.sent(), s = new Set;
                _loop_2 = function (l, _) {
                    T.find(function (b) { return b.id === l; }) ? _.forEach(function (b) { return s.add(b); }) : Gt.deleteAll(l);
                };
                for (_i = 0, Gt_1 = Gt; _i < Gt_1.length; _i++) {
                    _a = Gt_1[_i], l = _a[0], _ = _a[1];
                    _loop_2(l, _);
                }
                for (_b = 0, _c = gt.keys(); _b < _c.length; _b++) {
                    l = _c[_b];
                    s.has(l) || gt.delete(l);
                }
                return [2 /*return*/];
        }
    }); });
}
self.addEventListener("fetch", function (T) { T.respondWith(Jn(T)); });
