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
import { M as E, r as o, j as l, a as t, T as D, t as R, W as x, b as M, c as j } from "./assets/workbench-b198d476.js";
var F = function () { var _a = o.useState([]), s = _a[0], c = _a[1], _b = o.useState([]), h = _b[0], S = _b[1], _c = o.useState(k), g = _c[0], w = _c[1], _d = o.useState({ done: 0, total: 0 }), p = _d[0], m = _d[1], _e = o.useState(!1), y = _e[0], f = _e[1], _f = o.useState(null), T = _f[0], N = _f[1], _g = o.useState(null), u = _g[0], P = _g[1], b = function (e) { var r = [], d = [], a = new URL(window.location.href); for (var i = 0; i < e.length; i++) {
    var n = e.item(i);
    if (!n)
        continue;
    var L = URL.createObjectURL(n);
    r.push(L), d.push(n.name), a.searchParams.append("trace", L), a.searchParams.append("traceFileName", n.name);
} var v = a.toString(); window.history.pushState({}, "", v), c(r), S(d), f(!1), N(null); }, W = function (e) { e.preventDefault(), b(e.dataTransfer.files); }, U = function (e) { e.preventDefault(), e.target.files && b(e.target.files); }; return o.useEffect(function () { var e = new URL(window.location.href).searchParams.getAll("trace"); for (var _i = 0, e_1 = e; _i < e_1.length; _i++) {
    var r = e_1[_i];
    if (r.startsWith("file:")) {
        P(r || null);
        return;
    }
} e.some(function (r) { return r.startsWith("blob:"); }) || c(e); }, [c]), o.useEffect(function () { (function () { return __awaiter(void 0, void 0, void 0, function () { var e, r, a, v, i, n, _a, _b, _c, _d, d; return __generator(this, function (_e) {
    switch (_e.label) {
        case 0:
            if (!s.length) return [3 /*break*/, 8];
            e = function (a) { a.data.method === "progress" && m(a.data.params); };
            navigator.serviceWorker.addEventListener("message", e), m({ done: 0, total: 1 });
            r = [];
            a = 0;
            _e.label = 1;
        case 1:
            if (!(a < s.length)) return [3 /*break*/, 7];
            v = s[a], i = new URLSearchParams;
            i.set("trace", v), h.length && i.set("traceFileName", h[a]);
            return [4 /*yield*/, fetch("contexts?".concat(i.toString()))];
        case 2:
            n = _e.sent();
            if (!!n.ok) return [3 /*break*/, 4];
            c([]);
            _a = N;
            return [4 /*yield*/, n.json()];
        case 3:
            _a.apply(void 0, [(_e.sent()).error]);
            return [2 /*return*/];
        case 4:
            _c = (_b = r.push).apply;
            _d = [r];
            return [4 /*yield*/, n.json()];
        case 5:
            _c.apply(_b, _d.concat([_e.sent()]));
            _e.label = 6;
        case 6:
            a++;
            return [3 /*break*/, 1];
        case 7:
            navigator.serviceWorker.removeEventListener("message", e);
            d = new E(r);
            m({ done: 0, total: 0 }), w(d);
            return [3 /*break*/, 9];
        case 8:
            w(k);
            _e.label = 9;
        case 9: return [2 /*return*/];
    }
}); }); })(); }, [s, h]), l("div", { className: "vbox workbench", onDragOver: function (e) { e.preventDefault(), f(!0); }, children: [l("div", { className: "hbox header", children: [t("div", { className: "logo", children: "🎭" }), t("div", { className: "product", children: "Playwright" }), g.title && t("div", { className: "title", children: g.title }), t("div", { className: "spacer" }), t(D, { icon: "color-mode", title: "Toggle color mode", toggled: !1, onClick: function () { return R(); } })] }), t(x, { model: g }), !!p.total && t("div", { className: "progress", children: t("div", { className: "inner-progress", style: { width: 100 * p.done / p.total + "%" } }) }), u && l("div", { className: "drop-target", children: [t("div", { children: "Trace Viewer uses Service Workers to show traces. To view trace:" }), l("div", { style: { paddingTop: 20 }, children: [l("div", { children: ["1. Click ", t("a", { href: u, children: "here" }), " to put your trace into the download shelf"] }), l("div", { children: ["2. Go to ", t("a", { href: "https://trace.playwright.dev", children: "trace.playwright.dev" })] }), t("div", { children: "3. Drop the trace from the download shelf into the page" })] })] }), !y && !u && (!s.length || T) && l("div", { className: "drop-target", children: [t("div", { className: "processing-error", children: T }), t("div", { className: "title", children: "Drop Playwright Trace to load" }), t("div", { children: "or" }), t("button", { onClick: function () { var e = document.createElement("input"); e.type = "file", e.click(), e.addEventListener("change", function (r) { return U(r); }); }, children: "Select file" }), t("div", { style: { maxWidth: 400 }, children: "Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally." })] }), y && t("div", { className: "drop-target", onDragLeave: function () { f(!1); }, onDrop: function (e) { return W(e); }, children: t("div", { className: "title", children: "Release to analyse the Playwright Trace" }) })] }); }, k = new E([]);
(function () { return __awaiter(void 0, void 0, void 0, function () { var _a, _b, _c; return __generator(this, function (_d) {
    switch (_d.label) {
        case 0:
            M();
            _a = window.location.protocol !== "file:";
            if (!_a) return [3 /*break*/, 5];
            _b = window.location.href.includes("isUnderTest=true");
            if (!_b) return [3 /*break*/, 2];
            return [4 /*yield*/, new Promise(function (s) { return setTimeout(s, 1e3); })];
        case 1:
            _b = (_d.sent());
            _d.label = 2;
        case 2:
            _b, navigator.serviceWorker.register("sw.bundle.js");
            _c = navigator.serviceWorker.controller;
            if (_c) return [3 /*break*/, 4];
            return [4 /*yield*/, new Promise(function (s) { navigator.serviceWorker.oncontrollerchange = function () { return s(); }; })];
        case 3:
            _c = (_d.sent());
            _d.label = 4;
        case 4:
            _a = (_c, setInterval(function () { fetch("ping"); }, 1e4));
            _d.label = 5;
        case 5: return [2 /*return*/, (_a, j.render(t(F, {}), document.querySelector("#root")))];
    }
}); }); })();
