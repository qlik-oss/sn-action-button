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
var vp = Object.defineProperty;
var yp = function (e, t, n) { return t in e ? vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n; };
var ve = function (e, t, n) { return (yp(e, typeof t != "symbol" ? t + "" : t, n), n); };
(function () { var t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload"))
    return; for (var _10 = 0, _11 = document.querySelectorAll('link[rel="modulepreload"]'); _10 < _11.length; _10++) {
    var o = _11[_10];
    r(o);
} new MutationObserver(function (o) { for (var _10 = 0, o_1 = o; _10 < o_1.length; _10++) {
    var s = o_1[_10];
    if (s.type === "childList")
        for (var _11 = 0, _12 = s.addedNodes; _11 < _12.length; _11++) {
            var i = _12[_11];
            i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }
} }).observe(document, { childList: !0, subtree: !0 }); function n(o) { var s = {}; return o.integrity && (s.integrity = o.integrity), o.referrerpolicy && (s.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? s.credentials = "include" : o.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s; } function r(o) { if (o.ep)
    return; o.ep = !0; var s = n(o); fetch(o.href, s); } })();
var Rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wp(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Sr = {}, Sp = { get exports() { return Sr; }, set exports(e) { Sr = e; } }, vs = {}, $ = {}, Ep = { get exports() { return $; }, set exports(e) { $ = e; } }, I = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr = Symbol.for("react.element"), kp = Symbol.for("react.portal"), xp = Symbol.for("react.fragment"), Tp = Symbol.for("react.strict_mode"), bp = Symbol.for("react.profiler"), _p = Symbol.for("react.provider"), Np = Symbol.for("react.context"), Cp = Symbol.for("react.forward_ref"), Lp = Symbol.for("react.suspense"), Ap = Symbol.for("react.memo"), qp = Symbol.for("react.lazy"), bc = Symbol.iterator;
function Rp(e) { return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"], typeof e == "function" ? e : null); }
var wu = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Su = Object.assign, Eu = {};
function Hn(e, t, n) { this.props = e, this.context = t, this.refs = Eu, this.updater = n || wu; }
Hn.prototype.isReactComponent = {};
Hn.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); };
Hn.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function ku() { }
ku.prototype = Hn.prototype;
function _l(e, t, n) { this.props = e, this.context = t, this.refs = Eu, this.updater = n || wu; }
var Nl = _l.prototype = new ku;
Nl.constructor = _l;
Su(Nl, Hn.prototype);
Nl.isPureReactComponent = !0;
var _c = Array.isArray, xu = Object.prototype.hasOwnProperty, Cl = { current: null }, Tu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) { var r, o = {}, s = null, i = null; if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t)
        xu.call(t, r) && !Tu.hasOwnProperty(r) && (o[r] = t[r]); var l = arguments.length - 2; if (l === 1)
    o.children = n;
else if (1 < l) {
    for (var c = Array(l), a = 0; a < l; a++)
        c[a] = arguments[a + 2];
    o.children = c;
} if (e && e.defaultProps)
    for (r in l = e.defaultProps, l)
        o[r] === void 0 && (o[r] = l[r]); return { $$typeof: zr, type: e, key: s, ref: i, props: o, _owner: Cl.current }; }
function Dp(e, t) { return { $$typeof: zr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }
function Ll(e) { return typeof e == "object" && e !== null && e.$$typeof === zr; }
function $p(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return t[n]; }); }
var Nc = /\/+/g;
function Fs(e, t) { return typeof e == "object" && e !== null && e.key != null ? $p("" + e.key) : t.toString(36); }
function Eo(e, t, n, r, o) { var s = typeof e; (s === "undefined" || s === "boolean") && (e = null); var i = !1; if (e === null)
    i = !0;
else
    switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object": switch (e.$$typeof) {
            case zr:
            case kp: i = !0;
        }
    } if (i)
    return i = e, o = o(i), e = r === "" ? "." + Fs(i, 0) : r, _c(o) ? (n = "", e != null && (n = e.replace(Nc, "$&/") + "/"), Eo(o, t, n, "", function (a) { return a; })) : o != null && (Ll(o) && (o = Dp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Nc, "$&/") + "/") + e)), t.push(o)), 1; if (i = 0, r = r === "" ? "." : r + ":", _c(e))
    for (var l = 0; l < e.length; l++) {
        s = e[l];
        var c = r + Fs(s, l);
        i += Eo(s, t, n, c, o);
    }
else if (c = Rp(e), typeof c == "function")
    for (e = c.call(e), l = 0; !(s = e.next()).done;)
        s = s.value, c = r + Fs(s, l++), i += Eo(s, t, n, c, o);
else if (s === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return i; }
function Xr(e, t, n) { if (e == null)
    return e; var r = [], o = 0; return Eo(e, r, "", "", function (s) { return t.call(n, s, o++); }), r; }
function Pp(e) { if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = t);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Se = { current: null }, ko = { transition: null }, Mp = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ko, ReactCurrentOwner: Cl };
I.Children = { map: Xr, forEach: function (e, t, n) { Xr(e, function () { t.apply(this, arguments); }, n); }, count: function (e) { var t = 0; return Xr(e, function () { t++; }), t; }, toArray: function (e) { return Xr(e, function (t) { return t; }) || []; }, only: function (e) { if (!Ll(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
I.Component = Hn;
I.Fragment = xp;
I.Profiler = bp;
I.PureComponent = _l;
I.StrictMode = Tp;
I.Suspense = Lp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp;
I.cloneElement = function (e, t, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Su({}, e.props), o = e.key, s = e.ref, i = e._owner; if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = Cl.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var l = e.type.defaultProps;
    for (c in t)
        xu.call(t, c) && !Tu.hasOwnProperty(c) && (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
} var c = arguments.length - 2; if (c === 1)
    r.children = n;
else if (1 < c) {
    l = Array(c);
    for (var a = 0; a < c; a++)
        l[a] = arguments[a + 2];
    r.children = l;
} return { $$typeof: zr, type: e.type, key: o, ref: s, props: r, _owner: i }; };
I.createContext = function (e) { return e = { $$typeof: Np, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: _p, _context: e }, e.Consumer = e; };
I.createElement = bu;
I.createFactory = function (e) { var t = bu.bind(null, e); return t.type = e, t; };
I.createRef = function () { return { current: null }; };
I.forwardRef = function (e) { return { $$typeof: Cp, render: e }; };
I.isValidElement = Ll;
I.lazy = function (e) { return { $$typeof: qp, _payload: { _status: -1, _result: e }, _init: Pp }; };
I.memo = function (e, t) { return { $$typeof: Ap, type: e, compare: t === void 0 ? null : t }; };
I.startTransition = function (e) { var t = ko.transition; ko.transition = {}; try {
    e();
}
finally {
    ko.transition = t;
} };
I.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); };
I.useCallback = function (e, t) { return Se.current.useCallback(e, t); };
I.useContext = function (e) { return Se.current.useContext(e); };
I.useDebugValue = function () { };
I.useDeferredValue = function (e) { return Se.current.useDeferredValue(e); };
I.useEffect = function (e, t) { return Se.current.useEffect(e, t); };
I.useId = function () { return Se.current.useId(); };
I.useImperativeHandle = function (e, t, n) { return Se.current.useImperativeHandle(e, t, n); };
I.useInsertionEffect = function (e, t) { return Se.current.useInsertionEffect(e, t); };
I.useLayoutEffect = function (e, t) { return Se.current.useLayoutEffect(e, t); };
I.useMemo = function (e, t) { return Se.current.useMemo(e, t); };
I.useReducer = function (e, t, n) { return Se.current.useReducer(e, t, n); };
I.useRef = function (e) { return Se.current.useRef(e); };
I.useState = function (e) { return Se.current.useState(e); };
I.useSyncExternalStore = function (e, t, n) { return Se.current.useSyncExternalStore(e, t, n); };
I.useTransition = function () { return Se.current.useTransition(); };
I.version = "18.1.0";
(function (e) { e.exports = I; })(Ep);
var Tn = wp($); /**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ip = $, Op = Symbol.for("react.element"), Up = Symbol.for("react.fragment"), Fp = Object.prototype.hasOwnProperty, zp = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hp = { key: !0, ref: !0, __self: !0, __source: !0 };
function _u(e, t, n) { var r, o = {}, s = null, i = null; n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref); for (r in t)
    Fp.call(t, r) && !Hp.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
        o[r] === void 0 && (o[r] = t[r]); return { $$typeof: Op, type: e, key: s, ref: i, props: o, _owner: zp.current }; }
vs.Fragment = Up;
vs.jsx = _u;
vs.jsxs = _u;
(function (e) { e.exports = vs; })(Sp);
var Hr = Sr.Fragment, S = Sr.jsx, D = Sr.jsxs;
function Bp(e, t, n, r) { var _10 = Tn.useState(n), o = _10[0], s = _10[1]; return Tn.useEffect(function () { var i = !1; return r !== void 0 && s(r), e().then(function (l) { i || s(l); }), function () { i = !0; }; }, t), o; }
function ys() { var e = Tn.useRef(null), _10 = Tn.useState(new DOMRect(0, 0, 10, 10)), t = _10[0], n = _10[1]; return Tn.useLayoutEffect(function () { var r = e.current; if (!r)
    return; var o = new ResizeObserver(function (s) { var i = s[s.length - 1]; i && i.contentRect && n(i.contentRect); }); return o.observe(r), function () { return o.disconnect(); }; }, [e]), [t, e]; }
function Dn(e) { if (!isFinite(e))
    return "-"; if (e === 0)
    return "0"; if (e < 1e3)
    return e.toFixed(0) + "ms"; var t = e / 1e3; if (t < 60)
    return t.toFixed(1) + "s"; var n = t / 60; if (n < 60)
    return n.toFixed(1) + "m"; var r = n / 60; return r < 24 ? r.toFixed(1) + "h" : (r / 24).toFixed(1) + "d"; }
function Nu(e, t, n, r, o) { var s = r || 0, i = o !== void 0 ? o : e.length; for (; s < i;) {
    var l = s + i >> 1;
    n(t, e[l]) >= 0 ? s = l + 1 : i = l;
} return i; }
function jp(e) { var t = document.createElement("textarea"); t.style.position = "absolute", t.style.zIndex = "-1000", t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove(); }
function yY(e, t) { var n = Er.getObject(e, t), _10 = Tn.useState(n), r = _10[0], o = _10[1]; return [r, function (i) { Er.setObject(e, i), o(i); }]; }
var Vp = /** @class */ (function () {
    function Vp() {
    }
    Vp.prototype.getString = function (t, n) { return localStorage[t] || n; };
    Vp.prototype.setString = function (t, n) { localStorage[t] = n, window.saveSettings && window.saveSettings(); };
    Vp.prototype.getObject = function (t, n) { if (!localStorage[t])
        return n; try {
        return JSON.parse(localStorage[t]);
    }
    catch (_10) {
        return n;
    } };
    Vp.prototype.setObject = function (t, n) { localStorage[t] = JSON.stringify(n), window.saveSettings && window.saveSettings(); };
    return Vp;
}());
var Er = new Vp;
function wY() { if (document.playwrightThemeInitialized)
    return; document.playwrightThemeInitialized = !0, document.defaultView.addEventListener("focus", function (n) { n.target.document.nodeType === Node.DOCUMENT_NODE && document.body.classList.remove("inactive"); }, !1), document.defaultView.addEventListener("blur", function (n) { document.body.classList.add("inactive"); }, !1); var e = Er.getString("theme", "light-mode"), t = window.matchMedia("(prefers-color-scheme: dark)"); (e === "dark-mode" || t.matches) && document.body.classList.add("dark-mode"); }
var Al = new Set;
function SY() { var e = Er.getString("theme", "light-mode"); var t; e === "dark-mode" ? t = "light-mode" : t = "dark-mode", e && document.body.classList.remove(e), document.body.classList.add(t), Er.setString("theme", t); for (var _10 = 0, Al_1 = Al; _10 < Al_1.length; _10++) {
    var n = Al_1[_10];
    n(t);
} }
function EY(e) { Al.add(e); }
function kY(e) { Al.delete(e); }
function xY() { return document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode"; }
var Cc = {}, Wp = { get exports() { return Cc; }, set exports(e) { Cc = e; } }, Oe = {}, Ei = {}, Gp = { get exports() { return Ei; }, set exports(e) { Ei = e; } }, Cu = {}; /**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function (e) { function t(C, P) { var M = C.length; C.push(P); e: for (; 0 < M;) {
    var V = M - 1 >>> 1, ie = C[V];
    if (0 < o(ie, P))
        C[V] = P, C[M] = ie, M = V;
    else
        break e;
} } function n(C) { return C.length === 0 ? null : C[0]; } function r(C) { if (C.length === 0)
    return null; var P = C[0], M = C.pop(); if (M !== P) {
    C[0] = M;
    e: for (var V = 0, ie = C.length, Qr = ie >>> 1; V < Qr;) {
        var jt = 2 * (V + 1) - 1, Us = C[jt], Vt = jt + 1, Kr = C[Vt];
        if (0 > o(Us, M))
            Vt < ie && 0 > o(Kr, Us) ? (C[V] = Kr, C[Vt] = M, V = Vt) : (C[V] = Us, C[jt] = M, V = jt);
        else if (Vt < ie && 0 > o(Kr, M))
            C[V] = Kr, C[Vt] = M, V = Vt;
        else
            break e;
    }
} return P; } function o(C, P) { var M = C.sortIndex - P.sortIndex; return M !== 0 ? M : C.id - P.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () { return s.now(); };
}
else {
    var i = Date, l = i.now();
    e.unstable_now = function () { return i.now() - l; };
} var c = [], a = [], u = 1, p = null, d = 3, m = !1, y = !1, T = !1, k = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function g(C) { for (var P = n(a); P !== null;) {
    if (P.callback === null)
        r(a);
    else if (P.startTime <= C)
        r(a), P.sortIndex = P.expirationTime, t(c, P);
    else
        break;
    P = n(a);
} } function v(C) { if (T = !1, g(C), !y)
    if (n(c) !== null)
        y = !0, ke(E);
    else {
        var P = n(a);
        P !== null && Re(v, P.startTime - C);
    } } function E(C, P) { y = !1, T && (T = !1, h(N), N = -1), m = !0; var M = d; try {
    for (g(P), p = n(c); p !== null && (!(p.expirationTime > P) || C && !j());) {
        var V = p.callback;
        if (typeof V == "function") {
            p.callback = null, d = p.priorityLevel;
            var ie = V(p.expirationTime <= P);
            P = e.unstable_now(), typeof ie == "function" ? p.callback = ie : p === n(c) && r(c), g(P);
        }
        else
            r(c);
        p = n(c);
    }
    if (p !== null)
        var Qr = !0;
    else {
        var jt = n(a);
        jt !== null && Re(v, jt.startTime - P), Qr = !1;
    }
    return Qr;
}
finally {
    p = null, d = M, m = !1;
} } var b = !1, w = null, N = -1, R = 5, q = -1; function j() { return !(e.unstable_now() - q < R); } function x() { if (w !== null) {
    var C = e.unstable_now();
    q = C;
    var P = !0;
    try {
        P = w(!0, C);
    }
    finally {
        P ? A() : (b = !1, w = null);
    }
}
else
    b = !1; } var A; if (typeof f == "function")
    A = function () { f(x); };
else if (typeof MessageChannel < "u") {
    var F = new MessageChannel, Z = F.port2;
    F.port1.onmessage = x, A = function () { Z.postMessage(null); };
}
else
    A = function () { k(x, 0); }; function ke(C) { w = C, b || (b = !0, A()); } function Re(C, P) { N = k(function () { C(e.unstable_now()); }, P); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (C) { C.callback = null; }, e.unstable_continueExecution = function () { y || m || (y = !0, ke(E)); }, e.unstable_forceFrameRate = function (C) { 0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < C ? Math.floor(1e3 / C) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return d; }, e.unstable_getFirstCallbackNode = function () { return n(c); }, e.unstable_next = function (C) { switch (d) {
    case 1:
    case 2:
    case 3:
        var P = 3;
        break;
    default: P = d;
} var M = d; d = P; try {
    return C();
}
finally {
    d = M;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (C, P) { switch (C) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: C = 3;
} var M = d; d = C; try {
    return P();
}
finally {
    d = M;
} }, e.unstable_scheduleCallback = function (C, P, M) { var V = e.unstable_now(); switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? V + M : V) : M = V, C) {
    case 1:
        var ie = -1;
        break;
    case 2:
        ie = 250;
        break;
    case 5:
        ie = 1073741823;
        break;
    case 4:
        ie = 1e4;
        break;
    default: ie = 5e3;
} return ie = M + ie, C = { id: u++, callback: P, priorityLevel: C, startTime: M, expirationTime: ie, sortIndex: -1 }, M > V ? (C.sortIndex = M, t(a, C), n(c) === null && C === n(a) && (T ? (h(N), N = -1) : T = !0, Re(v, M - V))) : (C.sortIndex = ie, t(c, C), y || m || (y = !0, ke(E))), C; }, e.unstable_shouldYield = j, e.unstable_wrapCallback = function (C) { var P = d; return function () { var M = d; d = P; try {
    return C.apply(this, arguments);
}
finally {
    d = M;
} }; }; })(Cu);
(function (e) { e.exports = Cu; })(Gp); /**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Lu = $, Ie = Ei;
function _(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var Au = new Set, kr = {};
function ln(e, t) { $n(e, t), $n(e + "Capture", t); }
function $n(e, t) { for (kr[e] = t, e = 0; e < t.length; e++)
    Au.add(t[e]); }
var wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ki = Object.prototype.hasOwnProperty, Qp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Lc = {}, Ac = {};
function Kp(e) { return ki.call(Ac, e) ? !0 : ki.call(Lc, e) ? !1 : Qp.test(e) ? Ac[e] = !0 : (Lc[e] = !0, !1); }
function Xp(e, t, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof t) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Yp(e, t, n, r) { if (t === null || typeof t > "u" || Xp(e, t, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !t;
        case 4: return t === !1;
        case 5: return isNaN(t);
        case 6: return isNaN(t) || 1 > t;
    } return !1; }
function Ee(e, t, n, r, o, s, i) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i; }
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { ue[e] = new Ee(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; ue[t] = new Ee(t, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { ue[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { ue[e] = new Ee(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { ue[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { ue[e] = new Ee(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { ue[e] = new Ee(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { ue[e] = new Ee(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { ue[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var ql = /[\-:]([a-z])/g;
function Rl(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(ql, Rl); ue[t] = new Ee(t, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(ql, Rl); ue[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(ql, Rl); ue[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { ue[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1); });
ue.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { ue[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function Dl(e, t, n, r) { var o = ue.hasOwnProperty(t) ? ue[t] : null; (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yp(t, n, o, r) && (n = null), r || o === null ? Kp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
var kt = Lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), dn = Symbol.for("react.portal"), hn = Symbol.for("react.fragment"), $l = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), qu = Symbol.for("react.provider"), Ru = Symbol.for("react.context"), Pl = Symbol.for("react.forward_ref"), Ti = Symbol.for("react.suspense"), bi = Symbol.for("react.suspense_list"), Ml = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Du = Symbol.for("react.offscreen"), qc = Symbol.iterator;
function Qn(e) { return e === null || typeof e != "object" ? null : (e = qc && e[qc] || e["@@iterator"], typeof e == "function" ? e : null); }
var K = Object.assign, zs;
function sr(e) {
    if (zs === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            zs = t && t[1] || "";
        }
    return "\n" + zs + e;
}
var Hs = !1;
function Bs(e, t) {
    if (!e || Hs)
        return "";
    Hs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                }
                catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            }
            else {
                try {
                    t.call();
                }
                catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (a) {
                r = a;
            }
            e();
        }
    }
    catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var o = a.stack.split("\n"), s = r.stack.split("\n"), i = o.length - 1, l = s.length - 1; 1 <= i && 0 <= l && o[i] !== s[l];)
                l--;
            for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== s[l]) {
                    if (i !== 1 || l !== 1)
                        do
                            if (i--, l--, 0 > l || o[i] !== s[l]) {
                                var c = "\n" + o[i].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
                            }
                        while (1 <= i && 0 <= l);
                    break;
                }
        }
    }
    finally {
        Hs = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function Jp(e) { switch (e.tag) {
    case 5: return sr(e.type);
    case 16: return sr("Lazy");
    case 13: return sr("Suspense");
    case 19: return sr("SuspenseList");
    case 0:
    case 2:
    case 15: return e = Bs(e.type, !1), e;
    case 11: return e = Bs(e.type.render, !1), e;
    case 1: return e = Bs(e.type, !0), e;
    default: return "";
} }
function _i(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case hn: return "Fragment";
    case dn: return "Portal";
    case xi: return "Profiler";
    case $l: return "StrictMode";
    case Ti: return "Suspense";
    case bi: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case Ru: return (e.displayName || "Context") + ".Consumer";
        case qu: return (e._context.displayName || "Context") + ".Provider";
        case Pl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ml: return t = e.displayName || null, t !== null ? t : _i(e.type) || "Memo";
        case bt:
            t = e._payload, e = e._init;
            try {
                return _i(e(t));
            }
            catch (_10) { }
    } return null; }
function Zp(e) { var t = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (t.displayName || "Context") + ".Consumer";
    case 10: return (t._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return t;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return _i(t);
    case 8: return t === $l ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
} return null; }
function Ot(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function $u(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
function em(e) { var t = $u(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function () { return o.call(this); }, set: function (i) { r = "" + i, s.call(this, i); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (i) { r = "" + i; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
} }
function Jr(e) { e._valueTracker || (e._valueTracker = em(e)); }
function Pu(e) { if (!e)
    return !1; var t = e._valueTracker; if (!t)
    return !0; var n = t.getValue(), r = ""; return e && (r = $u(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1; }
function zo(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch (_10) {
    return e.body;
} }
function Ni(e, t) { var n = t.checked; return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked }); }
function Rc(e, t) { var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked; n = Ot(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null }; }
function Mu(e, t) { t = t.checked, t != null && Dl(e, "checked", t, !1); }
function Ci(e, t) { Mu(e, t); var n = Ot(t.value), r = t.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} t.hasOwnProperty("value") ? Li(e, t.type, n) : t.hasOwnProperty("defaultValue") && Li(e, t.type, Ot(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked); }
function Dc(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function Li(e, t, n) { (t !== "number" || zo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var ir = Array.isArray;
function bn(e, t, n, r) { if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + Ot(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
            e[o].selected = !0, r && (e[o].defaultSelected = !0);
            return;
        }
        t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
} }
function Ai(e, t) { if (t.dangerouslySetInnerHTML != null)
    throw Error(_(91)); return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function $c(e, t) { var n = t.value; if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
            throw Error(_(92));
        if (ir(n)) {
            if (1 < n.length)
                throw Error(_(93));
            n = n[0];
        }
        t = n;
    }
    t == null && (t = ""), n = t;
} e._wrapperState = { initialValue: Ot(n) }; }
function Iu(e, t) { var n = Ot(t.value), r = Ot(t.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function Pc(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t); }
function Ou(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function qi(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Ou(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var Zr, Uu = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, r, o); }); } : e; }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
else {
    for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zr.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; t.firstChild;)
        e.appendChild(t.firstChild);
} });
function xr(e, t) { if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
    }
} e.textContent = t; }
var fr = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(fr).forEach(function (e) { tm.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), fr[t] = fr[e]; }); });
function Fu(e, t, n) { return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fr.hasOwnProperty(e) && fr[e] ? ("" + t).trim() : t + "px"; }
function zu(e, t) { e = e.style; for (var n in t)
    if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = Fu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    } }
var nm = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ri(e, t) { if (t) {
    if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
            throw Error(_(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
            throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object")
        throw Error(_(62));
} }
function Di(e, t) { if (e.indexOf("-") === -1)
    return typeof t.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var $i = null;
function Il(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var Pi = null, _n = null, Nn = null;
function Mc(e) { if (e = Vr(e)) {
    if (typeof Pi != "function")
        throw Error(_(280));
    var t = e.stateNode;
    t && (t = xs(t), Pi(e.stateNode, e.type, t));
} }
function Hu(e) { _n ? Nn ? Nn.push(e) : Nn = [e] : _n = e; }
function Bu() { if (_n) {
    var e = _n, t = Nn;
    if (Nn = _n = null, Mc(e), t)
        for (e = 0; e < t.length; e++)
            Mc(t[e]);
} }
function ju(e, t) { return e(t); }
function Vu() { }
var js = !1;
function Wu(e, t, n) { if (js)
    return e(t, n); js = !0; try {
    return ju(e, t, n);
}
finally {
    js = !1, (_n !== null || Nn !== null) && (Vu(), Bu());
} }
function Tr(e, t) { var n = e.stateNode; if (n === null)
    return null; var r = xs(n); if (r === null)
    return null; n = r[t]; e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(_(231, t, typeof n)); return n; }
var Mi = !1;
if (wt)
    try {
        var Kn = {};
        Object.defineProperty(Kn, "passive", { get: function () { Mi = !0; } }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
    }
    catch (_10) {
        Mi = !1;
    }
function rm(e, t, n, r, o, s, i, l, c) { var a = Array.prototype.slice.call(arguments, 3); try {
    t.apply(n, a);
}
catch (u) {
    this.onError(u);
} }
var dr = !1, Ho = null, Bo = !1, Ii = null, om = { onError: function (e) { dr = !0, Ho = e; } };
function sm(e, t, n, r, o, s, i, l, c) { dr = !1, Ho = null, rm.apply(om, arguments); }
function im(e, t, n, r, o, s, i, l, c) { if (sm.apply(this, arguments), dr) {
    if (dr) {
        var a = Ho;
        dr = !1, Ho = null;
    }
    else
        throw Error(_(198));
    Bo || (Bo = !0, Ii = a);
} }
function cn(e) { var t = e, n = e; if (e.alternate)
    for (; t.return;)
        t = t.return;
else {
    e = t;
    do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
} return t.tag === 3 ? n : null; }
function Gu(e) { if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
} return null; }
function Ic(e) { if (cn(e) !== e)
    throw Error(_(188)); }
function lm(e) { var t = e.alternate; if (!t) {
    if (t = cn(e), t === null)
        throw Error(_(188));
    return t !== e ? null : e;
} for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null)
        break;
    var s = o.alternate;
    if (s === null) {
        if (r = o.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (o.child === s.child) {
        for (s = o.child; s;) {
            if (s === n)
                return Ic(o), e;
            if (s === r)
                return Ic(o), t;
            s = s.sibling;
        }
        throw Error(_(188));
    }
    if (n.return !== r.return)
        n = o, r = s;
    else {
        for (var i = !1, l = o.child; l;) {
            if (l === n) {
                i = !0, n = o, r = s;
                break;
            }
            if (l === r) {
                i = !0, r = o, n = s;
                break;
            }
            l = l.sibling;
        }
        if (!i) {
            for (l = s.child; l;) {
                if (l === n) {
                    i = !0, n = s, r = o;
                    break;
                }
                if (l === r) {
                    i = !0, r = s, n = o;
                    break;
                }
                l = l.sibling;
            }
            if (!i)
                throw Error(_(189));
        }
    }
    if (n.alternate !== r)
        throw Error(_(190));
} if (n.tag !== 3)
    throw Error(_(188)); return n.stateNode.current === n ? e : t; }
function Qu(e) { return e = lm(e), e !== null ? Ku(e) : null; }
function Ku(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var t = Ku(e);
    if (t !== null)
        return t;
    e = e.sibling;
} return null; }
var Xu = Ie.unstable_scheduleCallback, Oc = Ie.unstable_cancelCallback, cm = Ie.unstable_shouldYield, am = Ie.unstable_requestPaint, Y = Ie.unstable_now, um = Ie.unstable_getCurrentPriorityLevel, Ol = Ie.unstable_ImmediatePriority, Yu = Ie.unstable_UserBlockingPriority, jo = Ie.unstable_NormalPriority, fm = Ie.unstable_LowPriority, Ju = Ie.unstable_IdlePriority, ws = null, at = null;
function dm(e) { if (at && typeof at.onCommitFiberRoot == "function")
    try {
        at.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128);
    }
    catch (_10) { } }
var tt = Math.clz32 ? Math.clz32 : mm, hm = Math.log, pm = Math.LN2;
function mm(e) { return e >>>= 0, e === 0 ? 32 : 31 - (hm(e) / pm | 0) | 0; }
var eo = 64, to = 4194304;
function lr(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function Vo(e, t) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455; if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? r = lr(l) : (s &= i, s !== 0 && (r = lr(s)));
}
else
    i = n & ~o, i !== 0 ? r = lr(i) : s !== 0 && (r = lr(s)); if (r === 0)
    return 0; if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0))
    return t; if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;)
        n = 31 - tt(t), o = 1 << n, r |= e[n], t &= ~o; return r; }
function gm(e, t) { switch (e) {
    case 1:
    case 2:
    case 4: return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152: return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function vm(e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
    var i = 31 - tt(s), l = 1 << i, c = o[i];
    c === -1 ? (!(l & n) || l & r) && (o[i] = gm(l, t)) : c <= t && (e.expiredLanes |= l), s &= ~l;
} }
function Oi(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function Zu() { var e = eo; return eo <<= 1, !(eo & 4194240) && (eo = 64), e; }
function Vs(e) { for (var t = [], n = 0; 31 > n; n++)
    t.push(e); return t; }
function Br(e, t, n) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n; }
function ym(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - tt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
} }
function Ul(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
    var r = 31 - tt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
} }
var U = 0;
function ef(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var tf, Fl, nf, rf, of, Ui = !1, no = [], Rt = null, Dt = null, $t = null, br = new Map, _r = new Map, Nt = [], wm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Uc(e, t) { switch (e) {
    case "focusin":
    case "focusout":
        Rt = null;
        break;
    case "dragenter":
    case "dragleave":
        Dt = null;
        break;
    case "mouseover":
    case "mouseout":
        $t = null;
        break;
    case "pointerover":
    case "pointerout":
        br.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": _r.delete(t.pointerId);
} }
function Xn(e, t, n, r, o, s) { return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = Vr(t), t !== null && Fl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e); }
function Sm(e, t, n, r, o) { switch (t) {
    case "focusin": return Rt = Xn(Rt, e, t, n, r, o), !0;
    case "dragenter": return Dt = Xn(Dt, e, t, n, r, o), !0;
    case "mouseover": return $t = Xn($t, e, t, n, r, o), !0;
    case "pointerover":
        var s = o.pointerId;
        return br.set(s, Xn(br.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture": return s = o.pointerId, _r.set(s, Xn(_r.get(s) || null, e, t, n, r, o)), !0;
} return !1; }
function sf(e) { var t = Kt(e.target); if (t !== null) {
    var n = cn(t);
    if (n !== null) {
        if (t = n.tag, t === 13) {
            if (t = Gu(n), t !== null) {
                e.blockedOn = t, of(e.priority, function () { nf(n); });
                return;
            }
        }
        else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function xo(e) { if (e.blockedOn !== null)
    return !1; for (var t = e.targetContainers; 0 < t.length;) {
    var n = Fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $i = r, n.target.dispatchEvent(r), $i = null;
    }
    else
        return t = Vr(n), t !== null && Fl(t), e.blockedOn = n, !1;
    t.shift();
} return !0; }
function Fc(e, t, n) { xo(e) && n.delete(t); }
function Em() { Ui = !1, Rt !== null && xo(Rt) && (Rt = null), Dt !== null && xo(Dt) && (Dt = null), $t !== null && xo($t) && ($t = null), br.forEach(Fc), _r.forEach(Fc); }
function Yn(e, t) { e.blockedOn === t && (e.blockedOn = null, Ui || (Ui = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Em))); }
function Nr(e) { function t(o) { return Yn(o, e); } if (0 < no.length) {
    Yn(no[0], e);
    for (var n = 1; n < no.length; n++) {
        var r = no[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Rt !== null && Yn(Rt, e), Dt !== null && Yn(Dt, e), $t !== null && Yn($t, e), br.forEach(t), _r.forEach(t), n = 0; n < Nt.length; n++)
    r = Nt[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Nt.length && (n = Nt[0], n.blockedOn === null);)
    sf(n), n.blockedOn === null && Nt.shift(); }
var Cn = kt.ReactCurrentBatchConfig, Wo = !0;
function km(e, t, n, r) { var o = U, s = Cn.transition; Cn.transition = null; try {
    U = 1, zl(e, t, n, r);
}
finally {
    U = o, Cn.transition = s;
} }
function xm(e, t, n, r) { var o = U, s = Cn.transition; Cn.transition = null; try {
    U = 4, zl(e, t, n, r);
}
finally {
    U = o, Cn.transition = s;
} }
function zl(e, t, n, r) { if (Wo) {
    var o = Fi(e, t, n, r);
    if (o === null)
        ti(e, t, r, Go, n), Uc(e, r);
    else if (Sm(o, e, t, n, r))
        r.stopPropagation();
    else if (Uc(e, r), t & 4 && -1 < wm.indexOf(e)) {
        for (; o !== null;) {
            var s = Vr(o);
            if (s !== null && tf(s), s = Fi(e, t, n, r), s === null && ti(e, t, r, Go, n), s === o)
                break;
            o = s;
        }
        o !== null && r.stopPropagation();
    }
    else
        ti(e, t, r, null, n);
} }
var Go = null;
function Fi(e, t, n, r) { if (Go = null, e = Il(r), e = Kt(e), e !== null)
    if (t = cn(e), t === null)
        e = null;
    else if (n = t.tag, n === 13) {
        if (e = Gu(t), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
    }
    else
        t !== e && (e = null); return Go = e, null; }
function lf(e) { switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart": return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave": return 4;
    case "message": switch (um()) {
        case Ol: return 1;
        case Yu: return 4;
        case jo:
        case fm: return 16;
        case Ju: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var At = null, Hl = null, To = null;
function cf() { if (To)
    return To; var e, t = Hl, n = t.length, r, o = "value" in At ? At.value : At.textContent, s = o.length; for (e = 0; e < n && t[e] === o[e]; e++)
    ; var i = n - e; for (r = 1; r <= i && t[n - r] === o[s - r]; r++)
    ; return To = o.slice(e, 1 < r ? 1 - r : void 0); }
function bo(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function ro() { return !0; }
function zc() { return !1; }
function Ue(e) { function t(n, r, o, s, i) { this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null; for (var l in e)
    e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]); return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ro : zc, this.isPropagationStopped = zc, this; } return K(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ro); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ro); }, persist: function () { }, isPersistent: ro }), t; }
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Bl = Ue(Bn), jr = K({}, Bn, { view: 0, detail: 0 }), Tm = Ue(jr), Ws, Gs, Jn, Ss = K({}, jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: jl, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (Ws = e.screenX - Jn.screenX, Gs = e.screenY - Jn.screenY) : Gs = Ws = 0, Jn = e), Ws); }, movementY: function (e) { return "movementY" in e ? e.movementY : Gs; } }), Hc = Ue(Ss), bm = K({}, Ss, { dataTransfer: 0 }), _m = Ue(bm), Nm = K({}, jr, { relatedTarget: 0 }), Qs = Ue(Nm), Cm = K({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lm = Ue(Cm), Am = K({}, Bn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), qm = Ue(Am), Rm = K({}, Bn, { data: 0 }), Bc = Ue(Rm), Dm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, $m = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Pm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Mm(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = Pm[e]) ? !!t[e] : !1; }
function jl() { return Mm; }
var Im = K({}, jr, { key: function (e) { if (e.key) {
        var t = Dm[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } return e.type === "keypress" ? (e = bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $m[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: jl, charCode: function (e) { return e.type === "keypress" ? bo(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Om = Ue(Im), Um = K({}, Ss, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), jc = Ue(Um), Fm = K({}, jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: jl }), zm = Ue(Fm), Hm = K({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bm = Ue(Hm), jm = K({}, Ss, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Vm = Ue(jm), Wm = [9, 13, 27, 32], Vl = wt && "CompositionEvent" in window, hr = null;
wt && "documentMode" in document && (hr = document.documentMode);
var Gm = wt && "TextEvent" in window && !hr, af = wt && (!Vl || hr && 8 < hr && 11 >= hr), Vc = String.fromCharCode(32), Wc = !1;
function uf(e, t) { switch (e) {
    case "keyup": return Wm.indexOf(t.keyCode) !== -1;
    case "keydown": return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function ff(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var pn = !1;
function Qm(e, t) { switch (e) {
    case "compositionend": return ff(t);
    case "keypress": return t.which !== 32 ? null : (Wc = !0, Vc);
    case "textInput": return e = t.data, e === Vc && Wc ? null : e;
    default: return null;
} }
function Km(e, t) { if (pn)
    return e === "compositionend" || !Vl && uf(e, t) ? (e = cf(), To = Hl = At = null, pn = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which);
        }
        return null;
    case "compositionend": return af && t.locale !== "ko" ? null : t.data;
    default: return null;
} }
var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Gc(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Xm[e.type] : t === "textarea"; }
function df(e, t, n, r) { Hu(r), t = Qo(t, "onChange"), 0 < t.length && (n = new Bl("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
var pr = null, Cr = null;
function Ym(e) { xf(e, 0); }
function Es(e) { var t = vn(e); if (Pu(t))
    return e; }
function Jm(e, t) { if (e === "change")
    return t; }
var hf = !1;
if (wt) {
    var Ks;
    if (wt) {
        var Xs = "oninput" in document;
        if (!Xs) {
            var Qc = document.createElement("div");
            Qc.setAttribute("oninput", "return;"), Xs = typeof Qc.oninput == "function";
        }
        Ks = Xs;
    }
    else
        Ks = !1;
    hf = Ks && (!document.documentMode || 9 < document.documentMode);
}
function Kc() { pr && (pr.detachEvent("onpropertychange", pf), Cr = pr = null); }
function pf(e) { if (e.propertyName === "value" && Es(Cr)) {
    var t = [];
    df(t, Cr, e, Il(e)), Wu(Ym, t);
} }
function Zm(e, t, n) { e === "focusin" ? (Kc(), pr = t, Cr = n, pr.attachEvent("onpropertychange", pf)) : e === "focusout" && Kc(); }
function eg(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Es(Cr); }
function tg(e, t) { if (e === "click")
    return Es(t); }
function ng(e, t) { if (e === "input" || e === "change")
    return Es(t); }
function rg(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
var nt = typeof Object.is == "function" ? Object.is : rg;
function Lr(e, t) { if (nt(e, t))
    return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ki.call(t, o) || !nt(e[o], t[o]))
        return !1;
} return !0; }
function Xc(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Yc(e, t) { var n = Xc(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
            return { node: n, offset: t - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Xc(n);
} }
function mf(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1; }
function gf() { for (var e = window, t = zo(); t instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof t.contentWindow.location.href == "string";
    }
    catch (_10) {
        n = !1;
    }
    if (n)
        e = t.contentWindow;
    else
        break;
    t = zo(e.document);
} return t; }
function Wl(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
function og(e) { var t = gf(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && mf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
            n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var o = n.textContent.length, s = Math.min(r.start, o);
            r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Yc(n, s);
            var i = Yc(n, r);
            o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
    }
    for (t = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var sg = wt && "documentMode" in document && 11 >= document.documentMode, mn = null, zi = null, mr = null, Hi = !1;
function Jc(e, t, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Hi || mn == null || mn !== zo(r) || (r = mn, "selectionStart" in r && Wl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), mr && Lr(mr, r) || (mr = r, r = Qo(zi, "onSelect"), 0 < r.length && (t = new Bl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn))); }
function oo(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
var gn = { animationend: oo("Animation", "AnimationEnd"), animationiteration: oo("Animation", "AnimationIteration"), animationstart: oo("Animation", "AnimationStart"), transitionend: oo("Transition", "TransitionEnd") }, Ys = {}, vf = {};
wt && (vf = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
function ks(e) { if (Ys[e])
    return Ys[e]; if (!gn[e])
    return e; var t = gn[e], n; for (n in t)
    if (t.hasOwnProperty(n) && n in vf)
        return Ys[e] = t[n]; return e; }
var yf = ks("animationend"), wf = ks("animationiteration"), Sf = ks("animationstart"), Ef = ks("transitionend"), kf = new Map, Zc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function zt(e, t) { kf.set(e, t), ln(t, [e]); }
for (var Js = 0; Js < Zc.length; Js++) {
    var Zs = Zc[Js], ig = Zs.toLowerCase(), lg = Zs[0].toUpperCase() + Zs.slice(1);
    zt(ig, "on" + lg);
}
zt(yf, "onAnimationEnd");
zt(wf, "onAnimationIteration");
zt(Sf, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(Ef, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), cg = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function ea(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, im(r, t, void 0, e), e.currentTarget = null; }
function xf(e, t) { t = (t & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
        var s = void 0;
        if (t)
            for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i], c = l.instance, a = l.currentTarget;
                if (l = l.listener, c !== s && o.isPropagationStopped())
                    break e;
                ea(o, l, a), s = c;
            }
        else
            for (i = 0; i < r.length; i++) {
                if (l = r[i], c = l.instance, a = l.currentTarget, l = l.listener, c !== s && o.isPropagationStopped())
                    break e;
                ea(o, l, a), s = c;
            }
    }
} if (Bo)
    throw e = Ii, Bo = !1, Ii = null, e; }
function H(e, t) { var n = t[Gi]; n === void 0 && (n = t[Gi] = new Set); var r = e + "__bubble"; n.has(r) || (Tf(t, e, 2, !1), n.add(r)); }
function ei(e, t, n) { var r = 0; t && (r |= 4), Tf(n, e, r, t); }
var so = "_reactListening" + Math.random().toString(36).slice(2);
function Ar(e) { if (!e[so]) {
    e[so] = !0, Au.forEach(function (n) { n !== "selectionchange" && (cg.has(n) || ei(n, !1, e), ei(n, !0, e)); });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || (t[so] = !0, ei("selectionchange", !1, t));
} }
function Tf(e, t, n, r) { switch (lf(t)) {
    case 1:
        var o = km;
        break;
    case 4:
        o = xm;
        break;
    default: o = zl;
} n = o.bind(null, t, n, e), o = void 0, !Mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1); }
function ti(e, t, n, r, o) { var s = r; if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o)
                break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var c = i.tag;
                    if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o))
                        return;
                    i = i.return;
                }
            for (; l !== null;) {
                if (i = Kt(l), i === null)
                    return;
                if (c = i.tag, c === 5 || c === 6) {
                    r = s = i;
                    continue e;
                }
                l = l.parentNode;
            }
        }
        r = r.return;
    } Wu(function () { var a = s, u = Il(n), p = []; e: {
    var d = kf.get(e);
    if (d !== void 0) {
        var m = Bl, y = e;
        switch (e) {
            case "keypress": if (bo(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                m = Om;
                break;
            case "focusin":
                y = "focus", m = Qs;
                break;
            case "focusout":
                y = "blur", m = Qs;
                break;
            case "beforeblur":
            case "afterblur":
                m = Qs;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                m = Hc;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                m = _m;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                m = zm;
                break;
            case yf:
            case wf:
            case Sf:
                m = Lm;
                break;
            case Ef:
                m = Bm;
                break;
            case "scroll":
                m = Tm;
                break;
            case "wheel":
                m = Vm;
                break;
            case "copy":
            case "cut":
            case "paste":
                m = qm;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": m = jc;
        }
        var T = (t & 4) !== 0, k = !T && e === "scroll", h = T ? d !== null ? d + "Capture" : null : d;
        T = [];
        for (var f = a, g; f !== null;) {
            g = f;
            var v = g.stateNode;
            if (g.tag === 5 && v !== null && (g = v, h !== null && (v = Tr(f, h), v != null && T.push(qr(f, v, g)))), k)
                break;
            f = f.return;
        }
        0 < T.length && (d = new m(d, y, null, n, u), p.push({ event: d, listeners: T }));
    }
} if (!(t & 7)) {
    e: {
        if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && n !== $i && (y = n.relatedTarget || n.fromElement) && (Kt(y) || y[St]))
            break e;
        if ((m || d) && (d = u.window === u ? u : (d = u.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (y = n.relatedTarget || n.toElement, m = a, y = y ? Kt(y) : null, y !== null && (k = cn(y), y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null, y = a), m !== y)) {
            if (T = Hc, v = "onMouseLeave", h = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (T = jc, v = "onPointerLeave", h = "onPointerEnter", f = "pointer"), k = m == null ? d : vn(m), g = y == null ? d : vn(y), d = new T(v, f + "leave", m, n, u), d.target = k, d.relatedTarget = g, v = null, Kt(u) === a && (T = new T(h, f + "enter", y, n, u), T.target = g, T.relatedTarget = k, v = T), k = v, m && y)
                t: {
                    for (T = m, h = y, f = 0, g = T; g; g = an(g))
                        f++;
                    for (g = 0, v = h; v; v = an(v))
                        g++;
                    for (; 0 < f - g;)
                        T = an(T), f--;
                    for (; 0 < g - f;)
                        h = an(h), g--;
                    for (; f--;) {
                        if (T === h || h !== null && T === h.alternate)
                            break t;
                        T = an(T), h = an(h);
                    }
                    T = null;
                }
            else
                T = null;
            m !== null && ta(p, d, m, T, !1), y !== null && k !== null && ta(p, k, y, T, !0);
        }
    }
    e: {
        if (d = a ? vn(a) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file")
            var E = Jm;
        else if (Gc(d))
            if (hf)
                E = ng;
            else {
                E = eg;
                var b = Zm;
            }
        else
            (m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = tg);
        if (E && (E = E(e, a))) {
            df(p, E, n, u);
            break e;
        }
        b && b(e, d, a), e === "focusout" && (b = d._wrapperState) && b.controlled && d.type === "number" && Li(d, "number", d.value);
    }
    switch (b = a ? vn(a) : window, e) {
        case "focusin":
            (Gc(b) || b.contentEditable === "true") && (mn = b, zi = a, mr = null);
            break;
        case "focusout":
            mr = zi = mn = null;
            break;
        case "mousedown":
            Hi = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Hi = !1, Jc(p, n, u);
            break;
        case "selectionchange": if (sg)
            break;
        case "keydown":
        case "keyup": Jc(p, n, u);
    }
    var w;
    if (Vl)
        e: {
            switch (e) {
                case "compositionstart":
                    var N = "onCompositionStart";
                    break e;
                case "compositionend":
                    N = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    N = "onCompositionUpdate";
                    break e;
            }
            N = void 0;
        }
    else
        pn ? uf(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
    N && (af && n.locale !== "ko" && (pn || N !== "onCompositionStart" ? N === "onCompositionEnd" && pn && (w = cf()) : (At = u, Hl = "value" in At ? At.value : At.textContent, pn = !0)), b = Qo(a, N), 0 < b.length && (N = new Bc(N, e, null, n, u), p.push({ event: N, listeners: b }), w ? N.data = w : (w = ff(n), w !== null && (N.data = w)))), (w = Gm ? Qm(e, n) : Km(e, n)) && (a = Qo(a, "onBeforeInput"), 0 < a.length && (u = new Bc("onBeforeInput", "beforeinput", null, n, u), p.push({ event: u, listeners: a }), u.data = w));
} xf(p, t); }); }
function qr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
function Qo(e, t) { for (var n = t + "Capture", r = []; e !== null;) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Tr(e, n), s != null && r.unshift(qr(e, s, o)), s = Tr(e, t), s != null && r.push(qr(e, s, o))), e = e.return;
} return r; }
function an(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function ta(e, t, n, r, o) { for (var s = t._reactName, i = []; n !== null && n !== r;) {
    var l = n, c = l.alternate, a = l.stateNode;
    if (c !== null && c === r)
        break;
    l.tag === 5 && a !== null && (l = a, o ? (c = Tr(n, s), c != null && i.unshift(qr(n, c, l))) : o || (c = Tr(n, s), c != null && i.push(qr(n, c, l)))), n = n.return;
} i.length !== 0 && e.push({ event: t, listeners: i }); }
var ag = /\r\n?/g, ug = /\u0000|\uFFFD/g;
function na(e) {
    return (typeof e == "string" ? e : "" + e).replace(ag, "\n").replace(ug, "");
}
function io(e, t, n) { if (t = na(t), na(e) !== t && n)
    throw Error(_(425)); }
function Ko() { }
var Bi = null, ji = null;
function Vi(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
var Wi = typeof setTimeout == "function" ? setTimeout : void 0, fg = typeof clearTimeout == "function" ? clearTimeout : void 0, ra = typeof Promise == "function" ? Promise : void 0, dg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ra < "u" ? function (e) { return ra.resolve(null).then(e).catch(hg); } : Wi;
function hg(e) { setTimeout(function () { throw e; }); }
function ni(e, t) { var n = t, r = 0; do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$") {
            if (r === 0) {
                e.removeChild(o), Nr(t);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
} while (n); Nr(t); }
function pt(e) { for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
        break;
    if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
            break;
        if (t === "/$")
            return null;
    }
} return e; }
function oa(e) { e = e.previousSibling; for (var t = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0)
                return e;
            t--;
        }
        else
            n === "/$" && t++;
    }
    e = e.previousSibling;
} return null; }
var jn = Math.random().toString(36).slice(2), it = "__reactFiber$" + jn, Rr = "__reactProps$" + jn, St = "__reactContainer$" + jn, Gi = "__reactEvents$" + jn, pg = "__reactListeners$" + jn, mg = "__reactHandles$" + jn;
function Kt(e) { var t = e[it]; if (t)
    return t; for (var n = e.parentNode; n;) {
    if (t = n[St] || n[it]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
            for (e = oa(e); e !== null;) {
                if (n = e[it])
                    return n;
                e = oa(e);
            }
        return t;
    }
    e = n, n = e.parentNode;
} return null; }
function Vr(e) { return e = e[it] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function vn(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(_(33)); }
function xs(e) { return e[Rr] || null; }
var Qi = [], yn = -1;
function Ht(e) { return { current: e }; }
function B(e) { 0 > yn || (e.current = Qi[yn], Qi[yn] = null, yn--); }
function z(e, t) { yn++, Qi[yn] = e.current, e.current = t; }
var Ut = {}, ge = Ht(Ut), Ce = Ht(!1), en = Ut;
function Pn(e, t) { var n = e.type.contextTypes; if (!n)
    return Ut; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext; var o = {}, s; for (s in n)
    o[s] = t[s]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; }
function Le(e) { return e = e.childContextTypes, e != null; }
function Xo() { B(Ce), B(ge); }
function sa(e, t, n) { if (ge.current !== Ut)
    throw Error(_(168)); z(ge, t), z(Ce, n); }
function bf(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var o in r)
    if (!(o in t))
        throw Error(_(108, Zp(e) || "Unknown", o)); return K({}, n, r); }
function Yo(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, en = ge.current, z(ge, e), z(Ce, Ce.current), !0; }
function ia(e, t, n) { var r = e.stateNode; if (!r)
    throw Error(_(169)); n ? (e = bf(e, t, en), r.__reactInternalMemoizedMergedChildContext = e, B(Ce), B(ge), z(ge, e)) : B(Ce), z(Ce, n); }
var ht = null, Ts = !1, ri = !1;
function _f(e) { ht === null ? ht = [e] : ht.push(e); }
function gg(e) { Ts = !0, _f(e); }
function Bt() { if (!ri && ht !== null) {
    ri = !0;
    var e = 0, t = U;
    try {
        var n = ht;
        for (U = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        ht = null, Ts = !1;
    }
    catch (o) {
        throw ht !== null && (ht = ht.slice(e + 1)), Xu(Ol, Bt), o;
    }
    finally {
        U = t, ri = !1;
    }
} return null; }
var vg = kt.ReactCurrentBatchConfig;
function Ye(e, t) { if (e && e.defaultProps) {
    t = K({}, t), e = e.defaultProps;
    for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
    return t;
} return t; }
var Jo = Ht(null), Zo = null, wn = null, Gl = null;
function Ql() { Gl = wn = Zo = null; }
function Kl(e) { var t = Jo.current; B(Jo), e._currentValue = t; }
function Ki(e, t, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
    e = e.return;
} }
function Ln(e, t) { Zo = e, Gl = wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null); }
function Ge(e) { var t = e._currentValue; if (Gl !== e)
    if (e = { context: e, memoizedValue: t, next: null }, wn === null) {
        if (Zo === null)
            throw Error(_(308));
        wn = e, Zo.dependencies = { lanes: 0, firstContext: e };
    }
    else
        wn = wn.next = e; return t; }
var et = null, _t = !1;
function Xl(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function Nf(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function vt(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
function Pt(e, t) { var n = e.updateQueue; n !== null && (n = n.shared, gd(e) ? (e = n.interleaved, e === null ? (t.next = t, et === null ? et = [n] : et.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (e = n.pending, e === null ? t.next = t : (t.next = e.next, e.next = t), n.pending = t)); }
function _o(e, t, n) { if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ul(e, n);
} }
function la(e, t) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            s === null ? o = s = i : s = s.next = i, n = n.next;
        } while (n !== null);
        s === null ? o = s = t : s = s.next = t;
    }
    else
        o = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
function es(e, t, n, r) { var o = e.updateQueue; _t = !1; var s = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending; if (l !== null) {
    o.shared.pending = null;
    var c = l, a = c.next;
    c.next = null, i === null ? s = a : i.next = a, i = c;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, l = u.lastBaseUpdate, l !== i && (l === null ? u.firstBaseUpdate = a : l.next = a, u.lastBaseUpdate = c));
} if (s !== null) {
    var p = o.baseState;
    i = 0, u = a = c = null, l = s;
    do {
        var d = l.lane, m = l.eventTime;
        if ((r & d) === d) {
            u !== null && (u = u.next = { eventTime: m, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
            e: {
                var y = e, T = l;
                switch (d = t, m = n, T.tag) {
                    case 1:
                        if (y = T.payload, typeof y == "function") {
                            p = y.call(m, p, d);
                            break e;
                        }
                        p = y;
                        break e;
                    case 3: y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = T.payload, d = typeof y == "function" ? y.call(m, p, d) : y, d == null)
                            break e;
                        p = K({}, p, d);
                        break e;
                    case 2: _t = !0;
                }
            }
            l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [l] : d.push(l));
        }
        else
            m = { eventTime: m, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, u === null ? (a = u = m, c = p) : u = u.next = m, i |= d;
        if (l = l.next, l === null) {
            if (l = o.shared.pending, l === null)
                break;
            d = l, l = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
        }
    } while (1);
    if (u === null && (c = p), o.baseState = c, o.firstBaseUpdate = a, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
        o = t;
        do
            i |= o.lane, o = o.next;
        while (o !== t);
    }
    else
        s === null && (o.shared.lanes = 0);
    rn |= i, e.lanes = i, e.memoizedState = p;
} }
function ca(e, t, n) { if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
            if (r.callback = null, r = n, typeof o != "function")
                throw Error(_(191, o));
            o.call(r);
        }
    } }
var Cf = new Lu.Component().refs;
function Xi(e, t, n, r) { t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var bs = { isMounted: function (e) { return (e = e._reactInternals) ? cn(e) === e : !1; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = we(), o = It(e), s = vt(r, o); s.payload = t, n != null && (s.callback = n), Pt(e, s), t = Ve(e, o, r), t !== null && _o(t, e, o); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = we(), o = It(e), s = vt(r, o); s.tag = 1, s.payload = t, n != null && (s.callback = n), Pt(e, s), t = Ve(e, o, r), t !== null && _o(t, e, o); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = we(), r = It(e), o = vt(n, r); o.tag = 2, t != null && (o.callback = t), Pt(e, o), t = Ve(e, r, n), t !== null && _o(t, e, r); } };
function aa(e, t, n, r, o, s, i) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(o, s) : !0; }
function Lf(e, t, n) { var r = !1, o = Ut, s = t.contextType; return typeof s == "object" && s !== null ? s = Ge(s) : (o = Le(t) ? en : ge.current, r = t.contextTypes, s = (r = r != null) ? Pn(e, o) : Ut), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t; }
function ua(e, t, n, r) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bs.enqueueReplaceState(t, t.state, null); }
function Yi(e, t, n, r) { var o = e.stateNode; o.props = n, o.state = e.memoizedState, o.refs = Cf, Xl(e); var s = t.contextType; typeof s == "object" && s !== null ? o.context = Ge(s) : (s = Le(t) ? en : ge.current, o.context = Pn(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Xi(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && bs.enqueueReplaceState(o, o.state, null), es(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308); }
var Sn = [], En = 0, ts = null, ns = 0, Fe = [], ze = 0, tn = null, mt = 1, gt = "";
function Wt(e, t) { Sn[En++] = ns, Sn[En++] = ts, ts = e, ns = t; }
function Af(e, t, n) { Fe[ze++] = mt, Fe[ze++] = gt, Fe[ze++] = tn, tn = e; var r = mt; e = gt; var o = 32 - tt(r) - 1; r &= ~(1 << o), n += 1; var s = 32 - tt(t) + o; if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, mt = 1 << 32 - tt(t) + o | n << o | r, gt = s + e;
}
else
    mt = 1 << s | n << o | r, gt = e; }
function Yl(e) { e.return !== null && (Wt(e, 1), Af(e, 1, 0)); }
function Jl(e) { for (; e === ts;)
    ts = Sn[--En], Sn[En] = null, ns = Sn[--En], Sn[En] = null; for (; e === tn;)
    tn = Fe[--ze], Fe[ze] = null, gt = Fe[--ze], Fe[ze] = null, mt = Fe[--ze], Fe[ze] = null; }
var Me = null, be = null, W = !1, Ze = null;
function qf(e, t) { var n = He(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n); }
function fa(e, t) { switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, be = pt(t.firstChild), !0) : !1;
    case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, be = null, !0) : !1;
    case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (n = tn !== null ? { id: mt, overflow: gt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, be = null, !0) : !1;
    default: return !1;
} }
function Ji(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function Zi(e) { if (W) {
    var t = be;
    if (t) {
        var n = t;
        if (!fa(e, t)) {
            if (Ji(e))
                throw Error(_(418));
            t = pt(n.nextSibling);
            var r = Me;
            t && fa(e, t) ? qf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Me = e);
        }
    }
    else {
        if (Ji(e))
            throw Error(_(418));
        e.flags = e.flags & -4097 | 2, W = !1, Me = e;
    }
} }
function da(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Me = e; }
function Zn(e) { if (e !== Me)
    return !1; if (!W)
    return da(e), W = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vi(e.type, e.memoizedProps)), t && (t = be)) {
    if (Ji(e)) {
        for (e = be; e;)
            e = pt(e.nextSibling);
        throw Error(_(418));
    }
    for (; t;)
        qf(e, t), t = pt(t.nextSibling);
} if (da(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(_(317));
    e: {
        for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (t === 0) {
                        be = pt(e.nextSibling);
                        break e;
                    }
                    t--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || t++;
            }
            e = e.nextSibling;
        }
        be = null;
    }
}
else
    be = Me ? pt(e.stateNode.nextSibling) : null; return !0; }
function Mn() { be = Me = null, W = !1; }
function Zl(e) { Ze === null ? Ze = [e] : Ze.push(e); }
function er(e, t, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(_(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(_(147, e));
        var o = r, s = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (i) { var l = o.refs; l === Cf && (l = o.refs = {}), i === null ? delete l[s] : l[s] = i; }, t._stringRef = s, t);
    }
    if (typeof e != "string")
        throw Error(_(284));
    if (!n._owner)
        throw Error(_(290, e));
} return e; }
function lo(e, t) { throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); }
function ha(e) { var t = e._init; return t(e._payload); }
function Rf(e) { function t(h, f) { if (e) {
    var g = h.deletions;
    g === null ? (h.deletions = [f], h.flags |= 16) : g.push(f);
} } function n(h, f) { if (!e)
    return null; for (; f !== null;)
    t(h, f), f = f.sibling; return null; } function r(h, f) { for (h = new Map; f !== null;)
    f.key !== null ? h.set(f.key, f) : h.set(f.index, f), f = f.sibling; return h; } function o(h, f) { return h = Ft(h, f), h.index = 0, h.sibling = null, h; } function s(h, f, g) { return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < f ? (h.flags |= 2, f) : g) : (h.flags |= 2, f)) : (h.flags |= 1048576, f); } function i(h) { return e && h.alternate === null && (h.flags |= 2), h; } function l(h, f, g, v) { return f === null || f.tag !== 6 ? (f = ai(g, h.mode, v), f.return = h, f) : (f = o(f, g), f.return = h, f); } function c(h, f, g, v) { var E = g.type; return E === hn ? u(h, f, g.props.children, v, g.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === bt && ha(E) === f.type) ? (v = o(f, g.props), v.ref = er(h, f, g), v.return = h, v) : (v = qo(g.type, g.key, g.props, null, h.mode, v), v.ref = er(h, f, g), v.return = h, v); } function a(h, f, g, v) { return f === null || f.tag !== 4 || f.stateNode.containerInfo !== g.containerInfo || f.stateNode.implementation !== g.implementation ? (f = ui(g, h.mode, v), f.return = h, f) : (f = o(f, g.children || []), f.return = h, f); } function u(h, f, g, v, E) { return f === null || f.tag !== 7 ? (f = Jt(g, h.mode, v, E), f.return = h, f) : (f = o(f, g), f.return = h, f); } function p(h, f, g) { if (typeof f == "string" && f !== "" || typeof f == "number")
    return f = ai("" + f, h.mode, g), f.return = h, f; if (typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case Yr: return g = qo(f.type, f.key, f.props, null, h.mode, g), g.ref = er(h, null, f), g.return = h, g;
        case dn: return f = ui(f, h.mode, g), f.return = h, f;
        case bt:
            var v = f._init;
            return p(h, v(f._payload), g);
    }
    if (ir(f) || Qn(f))
        return f = Jt(f, h.mode, g, null), f.return = h, f;
    lo(h, f);
} return null; } function d(h, f, g, v) { var E = f !== null ? f.key : null; if (typeof g == "string" && g !== "" || typeof g == "number")
    return E !== null ? null : l(h, f, "" + g, v); if (typeof g == "object" && g !== null) {
    switch (g.$$typeof) {
        case Yr: return g.key === E ? c(h, f, g, v) : null;
        case dn: return g.key === E ? a(h, f, g, v) : null;
        case bt: return E = g._init, d(h, f, E(g._payload), v);
    }
    if (ir(g) || Qn(g))
        return E !== null ? null : u(h, f, g, v, null);
    lo(h, g);
} return null; } function m(h, f, g, v, E) { if (typeof v == "string" && v !== "" || typeof v == "number")
    return h = h.get(g) || null, l(f, h, "" + v, E); if (typeof v == "object" && v !== null) {
    switch (v.$$typeof) {
        case Yr: return h = h.get(v.key === null ? g : v.key) || null, c(f, h, v, E);
        case dn: return h = h.get(v.key === null ? g : v.key) || null, a(f, h, v, E);
        case bt:
            var b = v._init;
            return m(h, f, g, b(v._payload), E);
    }
    if (ir(v) || Qn(v))
        return h = h.get(g) || null, u(f, h, v, E, null);
    lo(f, v);
} return null; } function y(h, f, g, v) { for (var E = null, b = null, w = f, N = f = 0, R = null; w !== null && N < g.length; N++) {
    w.index > N ? (R = w, w = null) : R = w.sibling;
    var q = d(h, w, g[N], v);
    if (q === null) {
        w === null && (w = R);
        break;
    }
    e && w && q.alternate === null && t(h, w), f = s(q, f, N), b === null ? E = q : b.sibling = q, b = q, w = R;
} if (N === g.length)
    return n(h, w), W && Wt(h, N), E; if (w === null) {
    for (; N < g.length; N++)
        w = p(h, g[N], v), w !== null && (f = s(w, f, N), b === null ? E = w : b.sibling = w, b = w);
    return W && Wt(h, N), E;
} for (w = r(h, w); N < g.length; N++)
    R = m(w, h, N, g[N], v), R !== null && (e && R.alternate !== null && w.delete(R.key === null ? N : R.key), f = s(R, f, N), b === null ? E = R : b.sibling = R, b = R); return e && w.forEach(function (j) { return t(h, j); }), W && Wt(h, N), E; } function T(h, f, g, v) { var E = Qn(g); if (typeof E != "function")
    throw Error(_(150)); if (g = E.call(g), g == null)
    throw Error(_(151)); for (var b = E = null, w = f, N = f = 0, R = null, q = g.next(); w !== null && !q.done; N++, q = g.next()) {
    w.index > N ? (R = w, w = null) : R = w.sibling;
    var j = d(h, w, q.value, v);
    if (j === null) {
        w === null && (w = R);
        break;
    }
    e && w && j.alternate === null && t(h, w), f = s(j, f, N), b === null ? E = j : b.sibling = j, b = j, w = R;
} if (q.done)
    return n(h, w), W && Wt(h, N), E; if (w === null) {
    for (; !q.done; N++, q = g.next())
        q = p(h, q.value, v), q !== null && (f = s(q, f, N), b === null ? E = q : b.sibling = q, b = q);
    return W && Wt(h, N), E;
} for (w = r(h, w); !q.done; N++, q = g.next())
    q = m(w, h, N, q.value, v), q !== null && (e && q.alternate !== null && w.delete(q.key === null ? N : q.key), f = s(q, f, N), b === null ? E = q : b.sibling = q, b = q); return e && w.forEach(function (x) { return t(h, x); }), W && Wt(h, N), E; } function k(h, f, g, v) { if (typeof g == "object" && g !== null && g.type === hn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
    switch (g.$$typeof) {
        case Yr:
            e: {
                for (var E = g.key, b = f; b !== null;) {
                    if (b.key === E) {
                        if (E = g.type, E === hn) {
                            if (b.tag === 7) {
                                n(h, b.sibling), f = o(b, g.props.children), f.return = h, h = f;
                                break e;
                            }
                        }
                        else if (b.elementType === E || typeof E == "object" && E !== null && E.$$typeof === bt && ha(E) === b.type) {
                            n(h, b.sibling), f = o(b, g.props), f.ref = er(h, b, g), f.return = h, h = f;
                            break e;
                        }
                        n(h, b);
                        break;
                    }
                    else
                        t(h, b);
                    b = b.sibling;
                }
                g.type === hn ? (f = Jt(g.props.children, h.mode, v, g.key), f.return = h, h = f) : (v = qo(g.type, g.key, g.props, null, h.mode, v), v.ref = er(h, f, g), v.return = h, h = v);
            }
            return i(h);
        case dn:
            e: {
                for (b = g.key; f !== null;) {
                    if (f.key === b)
                        if (f.tag === 4 && f.stateNode.containerInfo === g.containerInfo && f.stateNode.implementation === g.implementation) {
                            n(h, f.sibling), f = o(f, g.children || []), f.return = h, h = f;
                            break e;
                        }
                        else {
                            n(h, f);
                            break;
                        }
                    else
                        t(h, f);
                    f = f.sibling;
                }
                f = ui(g, h.mode, v), f.return = h, h = f;
            }
            return i(h);
        case bt: return b = g._init, k(h, f, b(g._payload), v);
    }
    if (ir(g))
        return y(h, f, g, v);
    if (Qn(g))
        return T(h, f, g, v);
    lo(h, g);
} return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, f !== null && f.tag === 6 ? (n(h, f.sibling), f = o(f, g), f.return = h, h = f) : (n(h, f), f = ai(g, h.mode, v), f.return = h, h = f), i(h)) : n(h, f); } return k; }
var In = Rf(!0), Df = Rf(!1), Wr = {}, ut = Ht(Wr), Dr = Ht(Wr), $r = Ht(Wr);
function Xt(e) { if (e === Wr)
    throw Error(_(174)); return e; }
function ec(e, t) { switch (z($r, t), z(Dr, e), z(ut, Wr), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : qi(null, "");
        break;
    default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qi(t, e);
} B(ut), z(ut, t); }
function On() { B(ut), B(Dr), B($r); }
function $f(e) { Xt($r.current); var t = Xt(ut.current), n = qi(t, e.type); t !== n && (z(Dr, e), z(ut, n)); }
function tc(e) { Dr.current === e && (B(ut), B(Dr)); }
var G = Ht(0);
function rs(e) { for (var t = e; t !== null;) {
    if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return t;
    }
    else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
            return t;
    }
    else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
    }
    if (t === e)
        break;
    for (; t.sibling === null;) {
        if (t.return === null || t.return === e)
            return null;
        t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
} return null; }
var oi = [];
function nc() { for (var e = 0; e < oi.length; e++)
    oi[e]._workInProgressVersionPrimary = null; oi.length = 0; }
var No = kt.ReactCurrentDispatcher, si = kt.ReactCurrentBatchConfig, nn = 0, Q = null, re = null, le = null, os = !1, gr = !1, Pr = 0, yg = 0;
function fe() { throw Error(_(321)); }
function rc(e, t) { if (t === null)
    return !1; for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n]))
        return !1; return !0; }
function oc(e, t, n, r, o, s) { if (nn = s, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, No.current = e === null || e.memoizedState === null ? kg : xg, e = n(r, o), gr) {
    s = 0;
    do {
        if (gr = !1, Pr = 0, 25 <= s)
            throw Error(_(301));
        s += 1, le = re = null, t.updateQueue = null, No.current = Tg, e = n(r, o);
    } while (gr);
} if (No.current = ss, t = re !== null && re.next !== null, nn = 0, le = re = Q = null, os = !1, t)
    throw Error(_(300)); return e; }
function sc() { var e = Pr !== 0; return Pr = 0, e; }
function st() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return le === null ? Q.memoizedState = le = e : le = le.next = e, le; }
function Qe() { if (re === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = re.next; var t = le === null ? Q.memoizedState : le.next; if (t !== null)
    le = t, re = e;
else {
    if (e === null)
        throw Error(_(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, le === null ? Q.memoizedState = le = e : le = le.next = e;
} return le; }
function Mr(e, t) { return typeof t == "function" ? t(e) : t; }
function ii(e) { var t = Qe(), n = t.queue; if (n === null)
    throw Error(_(311)); n.lastRenderedReducer = e; var r = re, o = r.baseQueue, s = n.pending; if (s !== null) {
    if (o !== null) {
        var i = o.next;
        o.next = s.next, s.next = i;
    }
    r.baseQueue = o = s, n.pending = null;
} if (o !== null) {
    s = o.next, r = r.baseState;
    var l = i = null, c = null, a = s;
    do {
        var u = a.lane;
        if ((nn & u) === u)
            c !== null && (c = c.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
        else {
            var p = { lane: u, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null };
            c === null ? (l = c = p, i = r) : c = c.next = p, Q.lanes |= u, rn |= u;
        }
        a = a.next;
    } while (a !== null && a !== s);
    c === null ? i = r : c.next = l, nt(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    o = e;
    do
        s = o.lane, Q.lanes |= s, rn |= s, o = o.next;
    while (o !== e);
}
else
    o === null && (n.lanes = 0); return [t.memoizedState, n.dispatch]; }
function li(e) { var t = Qe(), n = t.queue; if (n === null)
    throw Error(_(311)); n.lastRenderedReducer = e; var r = n.dispatch, o = n.pending, s = t.memoizedState; if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
        s = e(s, i.action), i = i.next;
    while (i !== o);
    nt(s, t.memoizedState) || (_e = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
} return [s, r]; }
function Pf() { }
function Mf(e, t) { var n = Q, r = Qe(), o = t(), s = !nt(r.memoizedState, o); if (s && (r.memoizedState = o, _e = !0), r = r.queue, ic(Uf.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ir(9, Of.bind(null, n, r, o, t), void 0, null), se === null)
        throw Error(_(349));
    nn & 30 || If(n, t, o);
} return o; }
function If(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e)); }
function Of(e, t, n, r) { t.value = n, t.getSnapshot = r, Ff(t) && Ve(e, 1, -1); }
function Uf(e, t, n) { return n(function () { Ff(t) && Ve(e, 1, -1); }); }
function Ff(e) { var t = e.getSnapshot; e = e.value; try {
    var n = t();
    return !nt(e, n);
}
catch (_10) {
    return !0;
} }
function pa(e) { var t = st(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Mr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Eg.bind(null, Q, e), [t.memoizedState, e]; }
function Ir(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e; }
function zf() { return Qe().memoizedState; }
function Co(e, t, n, r) { var o = st(); Q.flags |= e, o.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r); }
function _s(e, t, n, r) { var o = Qe(); r = r === void 0 ? null : r; var s = void 0; if (re !== null) {
    var i = re.memoizedState;
    if (s = i.destroy, r !== null && rc(r, i.deps)) {
        o.memoizedState = Ir(t, n, s, r);
        return;
    }
} Q.flags |= e, o.memoizedState = Ir(1 | t, n, s, r); }
function ma(e, t) { return Co(8390656, 8, e, t); }
function ic(e, t) { return _s(2048, 8, e, t); }
function Hf(e, t) { return _s(4, 2, e, t); }
function Bf(e, t) { return _s(4, 4, e, t); }
function jf(e, t) { if (typeof t == "function")
    return e = e(), t(e), function () { t(null); }; if (t != null)
    return e = e(), t.current = e, function () { t.current = null; }; }
function Vf(e, t, n) { return n = n != null ? n.concat([e]) : null, _s(4, 4, jf.bind(null, t, e), n); }
function lc() { }
function Wf(e, t) { var n = Qe(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && rc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
function Gf(e, t) { var n = Qe(); t = t === void 0 ? null : t; var r = n.memoizedState; return r !== null && t !== null && rc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
function Qf(e, t, n) { return nn & 21 ? (nt(n, t) || (n = Zu(), Q.lanes |= n, rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n); }
function wg(e, t) { var n = U; U = n !== 0 && 4 > n ? n : 4, e(!0); var r = si.transition; si.transition = {}; try {
    e(!1), t();
}
finally {
    U = n, si.transition = r;
} }
function Kf() { return Qe().memoizedState; }
function Sg(e, t, n) { var r = It(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xf(e) ? Yf(t, n) : (Jf(e, t, n), n = we(), e = Ve(e, r, n), e !== null && Zf(e, t, r)); }
function Eg(e, t, n) { var r = It(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (Xf(e))
    Yf(t, o);
else {
    Jf(e, t, o);
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null))
        try {
            var i = t.lastRenderedState, l = s(i, n);
            if (o.hasEagerState = !0, o.eagerState = l, nt(l, i))
                return;
        }
        catch (_10) { }
        finally { }
    n = we(), e = Ve(e, r, n), e !== null && Zf(e, t, r);
} }
function Xf(e) { var t = e.alternate; return e === Q || t !== null && t === Q; }
function Yf(e, t) { gr = os = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
function Jf(e, t, n) { gd(e) ? (e = t.interleaved, e === null ? (n.next = n, et === null ? et = [t] : et.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (e = t.pending, e === null ? n.next = n : (n.next = e.next, e.next = n), t.pending = n); }
function Zf(e, t, n) { if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ul(e, n);
} }
var ss = { readContext: Ge, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 }, kg = { readContext: Ge, useCallback: function (e, t) { return st().memoizedState = [e, t === void 0 ? null : t], e; }, useContext: Ge, useEffect: ma, useImperativeHandle: function (e, t, n) { return n = n != null ? n.concat([e]) : null, Co(4194308, 4, jf.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Co(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Co(4, 2, e, t); }, useMemo: function (e, t) { var n = st(); return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = st(); return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Sg.bind(null, Q, e), [r.memoizedState, e]; }, useRef: function (e) { var t = st(); return e = { current: e }, t.memoizedState = e; }, useState: pa, useDebugValue: lc, useDeferredValue: function (e) { return st().memoizedState = e; }, useTransition: function () { var e = pa(!1), t = e[0]; return e = wg.bind(null, e[1]), st().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = Q, o = st(); if (W) {
        if (n === void 0)
            throw Error(_(407));
        n = n();
    }
    else {
        if (n = t(), se === null)
            throw Error(_(349));
        nn & 30 || If(r, t, n);
    } o.memoizedState = n; var s = { value: n, getSnapshot: t }; return o.queue = s, ma(Uf.bind(null, r, s, e), [e]), r.flags |= 2048, Ir(9, Of.bind(null, r, s, n, t), void 0, null), n; }, useId: function () { var e = st(), t = se.identifierPrefix; if (W) {
        var n = gt, r = mt;
        n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    }
    else
        n = yg++, t = ":" + t + "r" + n.toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, xg = { readContext: Ge, useCallback: Wf, useContext: Ge, useEffect: ic, useImperativeHandle: Vf, useInsertionEffect: Hf, useLayoutEffect: Bf, useMemo: Gf, useReducer: ii, useRef: zf, useState: function () { return ii(Mr); }, useDebugValue: lc, useDeferredValue: function (e) { var t = Qe(); return Qf(t, re.memoizedState, e); }, useTransition: function () { var e = ii(Mr)[0], t = Qe().memoizedState; return [e, t]; }, useMutableSource: Pf, useSyncExternalStore: Mf, useId: Kf, unstable_isNewReconciler: !1 }, Tg = { readContext: Ge, useCallback: Wf, useContext: Ge, useEffect: ic, useImperativeHandle: Vf, useInsertionEffect: Hf, useLayoutEffect: Bf, useMemo: Gf, useReducer: li, useRef: zf, useState: function () { return li(Mr); }, useDebugValue: lc, useDeferredValue: function (e) { var t = Qe(); return re === null ? t.memoizedState = e : Qf(t, re.memoizedState, e); }, useTransition: function () { var e = li(Mr)[0], t = Qe().memoizedState; return [e, t]; }, useMutableSource: Pf, useSyncExternalStore: Mf, useId: Kf, unstable_isNewReconciler: !1 };
function cc(e, t) {
    try {
        var n = "", r = t;
        do
            n += Jp(r), r = r.return;
        while (r);
        var o = n;
    }
    catch (s) {
        o = "\nError generating stack: " + s.message + "\n" + s.stack;
    }
    return { value: e, source: t, stack: o };
}
function el(e, t) { try {
    console.error(t.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var bg = typeof WeakMap == "function" ? WeakMap : Map;
function ed(e, t, n) { n = vt(-1, n), n.tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { ls || (ls = !0, al = r), el(e, t); }, n; }
function td(e, t, n) { n = vt(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var o = t.value;
    n.payload = function () { return r(o); }, n.callback = function () { el(e, t); };
} var s = e.stateNode; return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () { el(e, t), typeof r != "function" && (Mt === null ? Mt = new Set([this]) : Mt.add(this)); var i = t.stack; this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" }); }), n; }
function ga(e, t, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new bg;
    var o = new Set;
    r.set(t, o);
}
else
    o = r.get(t), o === void 0 && (o = new Set, r.set(t, o)); o.has(n) || (o.add(n), e = Og.bind(null, e, t, n), t.then(e, e)); }
function va(e) { do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
    e = e.return;
} while (e !== null); return null; }
function ya(e, t, n, r, o) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, Pt(n, t))), n.lanes |= 1), e); }
var nd, tl, rd, od;
nd = function (e, t) { for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === t)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
tl = function () { };
rd = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
    e = t.stateNode, Xt(ut.current);
    var s = null;
    switch (n) {
        case "input":
            o = Ni(e, o), r = Ni(e, r), s = [];
            break;
        case "select":
            o = K({}, o, { value: void 0 }), r = K({}, r, { value: void 0 }), s = [];
            break;
        case "textarea":
            o = Ai(e, o), r = Ai(e, r), s = [];
            break;
        default: typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ko);
    }
    Ri(n, r);
    var i;
    n = null;
    for (a in o)
        if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
            if (a === "style") {
                var l = o[a];
                for (i in l)
                    l.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            }
            else
                a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (kr.hasOwnProperty(a) ? s || (s = []) : (s = s || []).push(a, null));
    for (a in r) {
        var c = r[a];
        if (l = o != null ? o[a] : void 0, r.hasOwnProperty(a) && c !== l && (c != null || l != null))
            if (a === "style")
                if (l) {
                    for (i in l)
                        !l.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for (i in c)
                        c.hasOwnProperty(i) && l[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
                }
                else
                    n || (s || (s = []), s.push(a, n)), n = c;
            else
                a === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, c != null && l !== c && (s = s || []).push(a, c)) : a === "children" ? typeof c != "string" && typeof c != "number" || (s = s || []).push(a, "" + c) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (kr.hasOwnProperty(a) ? (c != null && a === "onScroll" && H("scroll", e), s || l === c || (s = [])) : (s = s || []).push(a, c));
    }
    n && (s = s || []).push("style", n);
    var a = s;
    (t.updateQueue = a) && (t.flags |= 4);
} };
od = function (e, t, n, r) { n !== r && (t.flags |= 4); };
function tr(e, t) { if (!W)
    switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function de(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (t)
    for (var o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
else
    for (o = e.child; o !== null;)
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; }
function _g(e, t, n) { var r = t.pendingProps; switch (Jl(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return de(t), null;
    case 1: return Le(t.type) && Xo(), de(t), null;
    case 3: return r = t.stateNode, On(), B(Ce), B(ge), nc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zn(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (dl(Ze), Ze = null))), tl(e, t), de(t), null;
    case 5:
        tc(t);
        var o = Xt($r.current);
        if (n = t.type, e !== null && t.stateNode != null)
            rd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return de(t), null;
            }
            if (e = Xt(ut.current), Zn(t)) {
                r = t.stateNode, n = t.type;
                var s = t.memoizedProps;
                switch (r[it] = t, r[Rr] = s, e = (t.mode & 1) !== 0, n) {
                    case "dialog":
                        H("cancel", r), H("close", r);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        H("load", r);
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < cr.length; o++)
                            H(cr[o], r);
                        break;
                    case "source":
                        H("error", r);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        H("error", r), H("load", r);
                        break;
                    case "details":
                        H("toggle", r);
                        break;
                    case "input":
                        Rc(r, s), H("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!s.multiple }, H("invalid", r);
                        break;
                    case "textarea": $c(r, s), H("invalid", r);
                }
                Ri(n, s), o = null;
                for (var i in s)
                    if (s.hasOwnProperty(i)) {
                        var l = s[i];
                        i === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && io(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && io(r.textContent, l, e), o = ["children", "" + l]) : kr.hasOwnProperty(i) && l != null && i === "onScroll" && H("scroll", r);
                    }
                switch (n) {
                    case "input":
                        Jr(r), Dc(r, s, !0);
                        break;
                    case "textarea":
                        Jr(r), Pc(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof s.onClick == "function" && (r.onclick = Ko);
                }
                r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
            }
            else {
                i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ou(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[it] = t, e[Rr] = r, nd(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (i = Di(n, r), n) {
                        case "dialog":
                            H("cancel", e), H("close", e), o = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", e), o = r;
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < cr.length; o++)
                                H(cr[o], e);
                            o = r;
                            break;
                        case "source":
                            H("error", e), o = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", e), H("load", e), o = r;
                            break;
                        case "details":
                            H("toggle", e), o = r;
                            break;
                        case "input":
                            Rc(e, r), o = Ni(e, r), H("invalid", e);
                            break;
                        case "option":
                            o = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, o = K({}, r, { value: void 0 }), H("invalid", e);
                            break;
                        case "textarea":
                            $c(e, r), o = Ai(e, r), H("invalid", e);
                            break;
                        default: o = r;
                    }
                    Ri(n, o), l = o;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var c = l[s];
                            s === "style" ? zu(e, c) : s === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Uu(e, c)) : s === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && xr(e, c) : typeof c == "number" && xr(e, "" + c) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (kr.hasOwnProperty(s) ? c != null && s === "onScroll" && H("scroll", e) : c != null && Dl(e, s, c, i));
                        }
                    switch (n) {
                        case "input":
                            Jr(e), Dc(e, r, !1);
                            break;
                        case "textarea":
                            Jr(e), Pc(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + Ot(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, s = r.value, s != null ? bn(e, !!r.multiple, s, !1) : r.defaultValue != null && bn(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof o.onClick == "function" && (e.onclick = Ko);
                    }
                    switch (n) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            r = !!r.autoFocus;
                            break e;
                        case "img":
                            r = !0;
                            break e;
                        default: r = !1;
                    }
                }
                r && (t.flags |= 4);
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return de(t), null;
    case 6:
        if (e && t.stateNode != null)
            od(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = Xt($r.current), Xt(ut.current), Zn(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (s = r.nodeValue !== n) && (e = Me, e !== null))
                    switch (e.tag) {
                        case 3:
                            io(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && io(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                s && (t.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
        }
        return de(t), null;
    case 13:
        if (B(G), r = t.memoizedState, W && be !== null && t.mode & 1 && !(t.flags & 128)) {
            for (r = be; r;)
                r = pt(r.nextSibling);
            return Mn(), t.flags |= 98560, t;
        }
        if (r !== null && r.dehydrated !== null) {
            if (r = Zn(t), e === null) {
                if (!r)
                    throw Error(_(318));
                if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r)
                    throw Error(_(317));
                r[it] = t;
            }
            else
                Mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            return de(t), null;
        }
        return Ze !== null && (dl(Ze), Ze = null), t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? Zn(t) : n = e.memoizedState !== null, r !== n && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? oe === 0 && (oe = 3) : pc())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4: return On(), tl(e, t), e === null && Ar(t.stateNode.containerInfo), de(t), null;
    case 10: return Kl(t.type._context), de(t), null;
    case 17: return Le(t.type) && Xo(), de(t), null;
    case 19:
        if (B(G), s = t.memoizedState, s === null)
            return de(t), null;
        if (r = (t.flags & 128) !== 0, i = s.rendering, i === null)
            if (r)
                tr(s, !1);
            else {
                if (oe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (i = rs(e), i !== null) {
                            for (t.flags |= 128, tr(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return z(G, G.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                s.tail !== null && Y() > Un && (t.flags |= 128, r = !0, tr(s, !1), t.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = rs(i), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !W)
                        return de(t), null;
                }
                else
                    2 * Y() - s.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, tr(s, !1), t.lanes = 4194304);
            s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
        }
        return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Y(), t.sibling = null, n = G.current, z(G, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23: return hc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24: return null;
    case 25: return null;
} throw Error(_(156, t.tag)); }
var Ng = kt.ReactCurrentOwner, _e = !1;
function ye(e, t, n, r) { t.child = e === null ? Df(t, null, n, r) : In(t, e.child, n, r); }
function wa(e, t, n, r, o) { n = n.render; var s = t.ref; return Ln(t, o), r = oc(e, t, n, r, s, o), n = sc(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Et(e, t, o)) : (W && n && Yl(t), t.flags |= 1, ye(e, t, r, o), t.child); }
function Sa(e, t, n, r, o) { if (e === null) {
    var s = n.type;
    return typeof s == "function" && !mc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, sd(e, t, s, r, o)) : (e = qo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
} if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Lr, n(i, r) && e.ref === t.ref)
        return Et(e, t, o);
} return t.flags |= 1, e = Ft(s, r), e.ref = t.ref, e.return = t, t.child = e; }
function sd(e, t, n, r, o) { if (e !== null) {
    var s = e.memoizedProps;
    if (Lr(s, r) && e.ref === t.ref)
        if (_e = !1, t.pendingProps = r = s, (e.lanes & o) !== 0)
            e.flags & 131072 && (_e = !0);
        else
            return t.lanes = e.lanes, Et(e, t, o);
} return nl(e, t, n, r, o); }
function id(e, t, n) { var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, z(xn, $e), $e |= n;
    else if (n & 1073741824)
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, z(xn, $e), $e |= r;
    else
        return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, z(xn, $e), $e |= e, null;
else
    s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, z(xn, $e), $e |= r; return ye(e, t, o, n), t.child; }
function ld(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); }
function nl(e, t, n, r, o) { var s = Le(n) ? en : ge.current; return s = Pn(t, s), Ln(t, o), n = oc(e, t, n, r, s, o), r = sc(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Et(e, t, o)) : (W && r && Yl(t), t.flags |= 1, ye(e, t, n, o), t.child); }
function Ea(e, t, n, r, o) { if (Le(n)) {
    var s = !0;
    Yo(t);
}
else
    s = !1; if (Ln(t, o), t.stateNode === null)
    e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Lf(t, n, r), Yi(t, n, r, o), r = !0;
else if (e === null) {
    var i = t.stateNode, l = t.memoizedProps;
    i.props = l;
    var c = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ge(a) : (a = Le(n) ? en : ge.current, a = Pn(t, a));
    var u = n.getDerivedStateFromProps, p = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || c !== a) && ua(t, i, r, a), _t = !1;
    var d = t.memoizedState;
    i.state = d, es(t, r, i, o), c = t.memoizedState, l !== r || d !== c || Ce.current || _t ? (typeof u == "function" && (Xi(t, n, u, r), c = t.memoizedState), (l = _t || aa(t, n, l, r, d, c, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = a, r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
}
else {
    i = t.stateNode, Nf(e, t), l = t.memoizedProps, a = t.type === t.elementType ? l : Ye(t.type, l), i.props = a, p = t.pendingProps, d = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = Ge(c) : (c = Le(n) ? en : ge.current, c = Pn(t, c));
    var m = n.getDerivedStateFromProps;
    (u = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== p || d !== c) && ua(t, i, r, c), _t = !1, d = t.memoizedState, i.state = d, es(t, r, i, o);
    var y = t.memoizedState;
    l !== p || d !== y || Ce.current || _t ? (typeof m == "function" && (Xi(t, n, m, r), y = t.memoizedState), (a = _t || aa(t, n, a, r, d, y, c) || !1) ? (u || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = c, r = a) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
} return rl(e, t, n, r, s, o); }
function rl(e, t, n, r, o, s) { ld(e, t); var i = (t.flags & 128) !== 0; if (!r && !i)
    return o && ia(t, n, !1), Et(e, t, s); r = t.stateNode, Ng.current = t; var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return t.flags |= 1, e !== null && i ? (t.child = In(t, e.child, null, s), t.child = In(t, null, l, s)) : ye(e, t, l, s), t.memoizedState = r.state, o && ia(t, n, !0), t.child; }
function cd(e) { var t = e.stateNode; t.pendingContext ? sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sa(e, t.context, !1), ec(e, t.containerInfo); }
function ka(e, t, n, r, o) { return Mn(), Zl(o), t.flags |= 256, ye(e, t, n, r), t.child; }
var co = { dehydrated: null, treeContext: null, retryLane: 0 };
function ao(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function xa(e, t) { return { baseLanes: e.baseLanes | t, cachePool: null, transitions: e.transitions }; }
function ad(e, t, n) { var r = t.pendingProps, o = G.current, s = !1, i = (t.flags & 128) !== 0, l; if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), z(G, o & 1), e === null)
    return Zi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = us(o, r, 0, null), e = Jt(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ao(n), t.memoizedState = co, e) : ol(t, o)); if (o = e.memoizedState, o !== null) {
    if (l = o.dehydrated, l !== null) {
        if (i)
            return t.flags & 256 ? (t.flags &= -257, uo(e, t, n, Error(_(422)))) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = us({ mode: "visible", children: r.children }, o, 0, null), s = Jt(s, o, n, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && In(t, e.child, null, n), t.child.memoizedState = ao(n), t.memoizedState = co, s);
        if (!(t.mode & 1))
            t = uo(e, t, n, null);
        else if (l.data === "$!")
            t = uo(e, t, n, Error(_(419)));
        else if (r = (n & e.childLanes) !== 0, _e || r) {
            if (r = se, r !== null) {
                switch (n & -n) {
                    case 4:
                        s = 2;
                        break;
                    case 16:
                        s = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        s = 32;
                        break;
                    case 536870912:
                        s = 268435456;
                        break;
                    default: s = 0;
                }
                r = s & (r.suspendedLanes | n) ? 0 : s, r !== 0 && r !== o.retryLane && (o.retryLane = r, Ve(e, r, -1));
            }
            pc(), t = uo(e, t, n, Error(_(421)));
        }
        else
            l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ug.bind(null, e), l._reactRetry = t, t = null) : (n = o.treeContext, be = pt(l.nextSibling), Me = t, W = !0, Ze = null, n !== null && (Fe[ze++] = mt, Fe[ze++] = gt, Fe[ze++] = tn, mt = n.id, gt = n.overflow, tn = t), t = ol(t, t.pendingProps.children), t.flags |= 4096);
        return t;
    }
    return s ? (r = ba(e, t, r.children, r.fallback, n), s = t.child, o = e.child.memoizedState, s.memoizedState = o === null ? ao(n) : xa(o, n), s.childLanes = e.childLanes & ~n, t.memoizedState = co, r) : (n = Ta(e, t, r.children, n), t.memoizedState = null, n);
} return s ? (r = ba(e, t, r.children, r.fallback, n), s = t.child, o = e.child.memoizedState, s.memoizedState = o === null ? ao(n) : xa(o, n), s.childLanes = e.childLanes & ~n, t.memoizedState = co, r) : (n = Ta(e, t, r.children, n), t.memoizedState = null, n); }
function ol(e, t) { return t = us({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t; }
function Ta(e, t, n, r) { var o = e.child; return e = o.sibling, n = Ft(o, { mode: "visible", children: n }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n; }
function ba(e, t, n, r, o) { var s = t.mode; e = e.child; var i = e.sibling, l = { mode: "hidden", children: n }; return !(s & 1) && t.child !== e ? (n = t.child, n.childLanes = 0, n.pendingProps = l, t.deletions = null) : (n = Ft(e, l), n.subtreeFlags = e.subtreeFlags & 14680064), i !== null ? r = Ft(i, r) : (r = Jt(r, s, o, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r; }
function uo(e, t, n, r) { return r !== null && Zl(r), In(t, e.child, null, n), e = ol(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e; }
function _a(e, t, n) { e.lanes |= t; var r = e.alternate; r !== null && (r.lanes |= t), Ki(e.return, t, n); }
function ci(e, t, n, r, o) { var s = e.memoizedState; s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o); }
function ud(e, t, n) { var r = t.pendingProps, o = r.revealOrder, s = r.tail; if (ye(e, t, r.children, n), r = G.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && _a(e, n, t);
            else if (e.tag === 19)
                _a(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === t)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (z(G, r), !(t.mode & 1))
    t.memoizedState = null;
else
    switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;)
                e = n.alternate, e !== null && rs(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ci(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && rs(e) === null) {
                    t.child = o;
                    break;
                }
                e = o.sibling, o.sibling = n, n = o, o = e;
            }
            ci(t, !0, n, null, s);
            break;
        case "together":
            ci(t, !1, null, null, void 0);
            break;
        default: t.memoizedState = null;
    } return t.child; }
function Et(e, t, n) { if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, !(n & t.childLanes))
    return null; if (e !== null && t.child !== e.child)
    throw Error(_(153)); if (t.child !== null) {
    for (e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        e = e.sibling, n = n.sibling = Ft(e, e.pendingProps), n.return = t;
    n.sibling = null;
} return t.child; }
function Cg(e, t, n) { switch (t.tag) {
    case 3:
        cd(t), Mn();
        break;
    case 5:
        $f(t);
        break;
    case 1:
        Le(t.type) && Yo(t);
        break;
    case 4:
        ec(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        z(Jo, r._currentValue), r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (z(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ad(e, t, n) : (z(G, G.current & 1), e = Et(e, t, n), e !== null ? e.sibling : null);
        z(G, G.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
            if (r)
                return ud(e, t, n);
            t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), z(G, G.current), r)
            break;
        return null;
    case 22:
    case 23: return t.lanes = 0, id(e, t, n);
} return Et(e, t, n); }
function Lg(e, t) { switch (Jl(t), t.tag) {
    case 1: return Le(t.type) && Xo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3: return On(), B(Ce), B(ge), nc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5: return tc(t), null;
    case 13:
        if (B(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            Mn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19: return B(G), null;
    case 4: return On(), null;
    case 10: return Kl(t.type._context), null;
    case 22:
    case 23: return hc(), null;
    case 24: return null;
    default: return null;
} }
var fo = !1, pe = !1, Ag = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function kn(e, t) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            X(e, t, r);
        }
    else
        n.current = null; }
function sl(e, t, n) { try {
    n();
}
catch (r) {
    X(e, t, r);
} }
var Na = !1;
function qg(e, t) { if (Bi = Wo, e = gf(), Wl(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset, s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType;
                }
                catch (_10) {
                    n = null;
                    break e;
                }
                var i = 0, l = -1, c = -1, a = 0, u = 0, p = e, d = null;
                t: for (;;) {
                    for (var m; p !== n || o !== 0 && p.nodeType !== 3 || (l = i + o), p !== s || r !== 0 && p.nodeType !== 3 || (c = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (m = p.firstChild) !== null;)
                        d = p, p = m;
                    for (;;) {
                        if (p === e)
                            break t;
                        if (d === n && ++a === o && (l = i), d === s && ++u === r && (c = i), (m = p.nextSibling) !== null)
                            break;
                        p = d, d = p.parentNode;
                    }
                    p = m;
                }
                n = l === -1 || c === -1 ? null : { start: l, end: c };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (ji = { focusedElem: e, selectionRange: n }, Wo = !1, L = t; L !== null;)
    if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, L = e;
    else
        for (; L !== null;) {
            t = L;
            try {
                var y = t.alternate;
                if (t.flags & 1024)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (y !== null) {
                                var T = y.memoizedProps, k = y.memoizedState, h = t.stateNode, f = h.getSnapshotBeforeUpdate(t.elementType === t.type ? T : Ye(t.type, T), k);
                                h.__reactInternalSnapshotBeforeUpdate = f;
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            if (g.nodeType === 1)
                                g.textContent = "";
                            else if (g.nodeType === 9) {
                                var v = g.body;
                                v != null && (v.textContent = "");
                            }
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(_(163));
                    }
            }
            catch (E) {
                X(t, t.return, E);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, L = e;
                break;
            }
            L = t.return;
        } return y = Na, Na = !1, y; }
function vr(e, t, n) { var r = t.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
        if ((o.tag & e) === e) {
            var s = o.destroy;
            o.destroy = void 0, s !== void 0 && sl(t, n, s);
        }
        o = o.next;
    } while (o !== r);
} }
function Ns(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== t);
} }
function il(e) { var t = e.ref; if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
} }
function fd(e) { var t = e.alternate; t !== null && (e.alternate = null, fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[Rr], delete t[Gi], delete t[pg], delete t[mg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function dd(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function Ca(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || dd(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function ll(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ko));
else if (r !== 4 && (e = e.child, e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null;)
        ll(e, t, n), e = e.sibling; }
function cl(e, t, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (cl(e, t, n), e = e.sibling; e !== null;)
        cl(e, t, n), e = e.sibling; }
var ce = null, Je = !1;
function xt(e, t, n) { for (n = n.child; n !== null;)
    hd(e, t, n), n = n.sibling; }
function hd(e, t, n) { if (at && typeof at.onCommitFiberUnmount == "function")
    try {
        at.onCommitFiberUnmount(ws, n);
    }
    catch (_10) { } switch (n.tag) {
    case 5: pe || kn(n, t);
    case 6:
        var r = ce, o = Je;
        ce = null, xt(e, t, n), ce = r, Je = o, ce !== null && (Je ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
        break;
    case 18:
        ce !== null && (Je ? (e = ce, n = n.stateNode, e.nodeType === 8 ? ni(e.parentNode, n) : e.nodeType === 1 && ni(e, n), Nr(e)) : ni(ce, n.stateNode));
        break;
    case 4:
        r = ce, o = Je, ce = n.stateNode.containerInfo, Je = !0, xt(e, t, n), ce = r, Je = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            o = r = r.next;
            do {
                var s = o, i = s.destroy;
                s = s.tag, i !== void 0 && (s & 2 || s & 4) && sl(n, t, i), o = o.next;
            } while (o !== r);
        }
        xt(e, t, n);
        break;
    case 1:
        if (!pe && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (l) {
                X(n, t, l);
            }
        xt(e, t, n);
        break;
    case 21:
        xt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, xt(e, t, n), pe = r) : xt(e, t, n);
        break;
    default: xt(e, t, n);
} }
function La(e) { var t = e.updateQueue; if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ag), t.forEach(function (r) { var o = Fg.bind(null, e, r); n.has(r) || (n.add(r), r.then(o, o)); });
} }
function Ke(e, t) { var n = t.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
            var s = e, i = t, l = i;
            e: for (; l !== null;) {
                switch (l.tag) {
                    case 5:
                        ce = l.stateNode, Je = !1;
                        break e;
                    case 3:
                        ce = l.stateNode.containerInfo, Je = !0;
                        break e;
                    case 4:
                        ce = l.stateNode.containerInfo, Je = !0;
                        break e;
                }
                l = l.return;
            }
            if (ce === null)
                throw Error(_(160));
            hd(s, i, o), ce = null, Je = !1;
            var c = o.alternate;
            c !== null && (c.return = null), o.return = null;
        }
        catch (a) {
            X(o, t, a);
        }
    } if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;)
        pd(t, e), t = t.sibling; }
function pd(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ke(t, e), rt(e), r & 4) {
            try {
                vr(3, e, e.return), Ns(3, e);
            }
            catch (y) {
                X(e, e.return, y);
            }
            try {
                vr(5, e, e.return);
            }
            catch (y) {
                X(e, e.return, y);
            }
        }
        break;
    case 1:
        Ke(t, e), rt(e), r & 512 && n !== null && kn(n, n.return);
        break;
    case 5:
        if (Ke(t, e), rt(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                xr(o, "");
            }
            catch (y) {
                X(e, e.return, y);
            }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
            var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, l = e.type, c = e.updateQueue;
            if (e.updateQueue = null, c !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && Mu(o, s), Di(l, i);
                    var a = Di(l, s);
                    for (i = 0; i < c.length; i += 2) {
                        var u = c[i], p = c[i + 1];
                        u === "style" ? zu(o, p) : u === "dangerouslySetInnerHTML" ? Uu(o, p) : u === "children" ? xr(o, p) : Dl(o, u, p, a);
                    }
                    switch (l) {
                        case "input":
                            Ci(o, s);
                            break;
                        case "textarea":
                            Iu(o, s);
                            break;
                        case "select":
                            var d = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!s.multiple;
                            var m = s.value;
                            m != null ? bn(o, !!s.multiple, m, !1) : d !== !!s.multiple && (s.defaultValue != null ? bn(o, !!s.multiple, s.defaultValue, !0) : bn(o, !!s.multiple, s.multiple ? [] : "", !1));
                    }
                    o[Rr] = s;
                }
                catch (y) {
                    X(e, e.return, y);
                }
        }
        break;
    case 6:
        if (Ke(t, e), rt(e), r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            a = e.stateNode, u = e.memoizedProps;
            try {
                a.nodeValue = u;
            }
            catch (y) {
                X(e, e.return, y);
            }
        }
        break;
    case 3:
        if (Ke(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Nr(t.containerInfo);
            }
            catch (y) {
                X(e, e.return, y);
            }
        break;
    case 4:
        Ke(t, e), rt(e);
        break;
    case 13:
        Ke(t, e), rt(e), a = e.child, a.flags & 8192 && a.memoizedState !== null && (a.alternate === null || a.alternate.memoizedState === null) && (fc = Y()), r & 4 && La(e);
        break;
    case 22:
        if (a = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || a, Ke(t, e), pe = u) : Ke(t, e), rt(e), r & 8192) {
            u = e.memoizedState !== null;
            e: for (p = null, d = e;;) {
                if (d.tag === 5) {
                    if (p === null) {
                        p = d;
                        try {
                            o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = d.stateNode, c = d.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = Fu("display", i));
                        }
                        catch (y) {
                            X(e, e.return, y);
                        }
                    }
                }
                else if (d.tag === 6) {
                    if (p === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                        }
                        catch (y) {
                            X(e, e.return, y);
                        }
                }
                else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d, d = d.child;
                    continue;
                }
                if (d === e)
                    break e;
                for (; d.sibling === null;) {
                    if (d.return === null || d.return === e)
                        break e;
                    p === d && (p = null), d = d.return;
                }
                p === d && (p = null), d.sibling.return = d.return, d = d.sibling;
            }
            if (u && !a && e.mode & 1)
                for (L = e, e = e.child; e !== null;) {
                    for (a = L = e; L !== null;) {
                        switch (u = L, p = u.child, u.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                vr(4, u, u.return);
                                break;
                            case 1:
                                if (kn(u, u.return), s = u.stateNode, typeof s.componentWillUnmount == "function") {
                                    d = u, m = u.return;
                                    try {
                                        o = d, s.props = o.memoizedProps, s.state = o.memoizedState, s.componentWillUnmount();
                                    }
                                    catch (y) {
                                        X(d, m, y);
                                    }
                                }
                                break;
                            case 5:
                                kn(u, u.return);
                                break;
                            case 22: if (u.memoizedState !== null) {
                                qa(a);
                                continue;
                            }
                        }
                        p !== null ? (p.return = u, L = p) : qa(a);
                    }
                    e = e.sibling;
                }
        }
        break;
    case 19:
        Ke(t, e), rt(e), r & 4 && La(e);
        break;
    case 21: break;
    default: Ke(t, e), rt(e);
} }
function rt(e) { var t = e.flags; if (t & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (dd(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(_(160));
        }
        switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (xr(o, ""), r.flags &= -33);
                var s = Ca(e);
                cl(e, s, o);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo, l = Ca(e);
                ll(e, l, i);
                break;
            default: throw Error(_(161));
        }
    }
    catch (c) {
        X(e, e.return, c);
    }
    e.flags &= -3;
} t & 4096 && (e.flags &= -4097); }
function Rg(e, t, n) { L = e, md(e); }
function md(e, t, n) { for (var r = (e.mode & 1) !== 0; L !== null;) {
    var o = L, s = o.child;
    if (o.tag === 22 && r) {
        var i = o.memoizedState !== null || fo;
        if (!i) {
            var l = o.alternate, c = l !== null && l.memoizedState !== null || pe;
            l = fo;
            var a = pe;
            if (fo = i, (pe = c) && !a)
                for (L = o; L !== null;)
                    i = L, c = i.child, i.tag === 22 && i.memoizedState !== null ? Ra(o) : c !== null ? (c.return = i, L = c) : Ra(o);
            for (; s !== null;)
                L = s, md(s), s = s.sibling;
            L = o, fo = l, pe = a;
        }
        Aa(e);
    }
    else
        o.subtreeFlags & 8772 && s !== null ? (s.return = o, L = s) : Aa(e);
} }
function Aa(e) { for (; L !== null;) {
    var t = L;
    if (t.flags & 8772) {
        var n = t.alternate;
        try {
            if (t.flags & 8772)
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Ns(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var s = t.updateQueue;
                        s !== null && ca(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1: n = t.child.stateNode;
                                }
                            ca(t, i, n);
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var c = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    c.autoFocus && n.focus();
                                    break;
                                case "img": c.src && (n.src = c.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var u = a.memoizedState;
                                if (u !== null) {
                                    var p = u.dehydrated;
                                    p !== null && Nr(p);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23: break;
                    default: throw Error(_(163));
                }
            pe || t.flags & 512 && il(t);
        }
        catch (d) {
            X(t, t.return, d);
        }
    }
    if (t === e) {
        L = null;
        break;
    }
    if (n = t.sibling, n !== null) {
        n.return = t.return, L = n;
        break;
    }
    L = t.return;
} }
function qa(e) { for (; L !== null;) {
    var t = L;
    if (t === e) {
        L = null;
        break;
    }
    var n = t.sibling;
    if (n !== null) {
        n.return = t.return, L = n;
        break;
    }
    L = t.return;
} }
function Ra(e) { for (; L !== null;) {
    var t = L;
    try {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ns(4, t);
                }
                catch (c) {
                    X(t, n, c);
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (c) {
                        X(t, o, c);
                    }
                }
                var s = t.return;
                try {
                    il(t);
                }
                catch (c) {
                    X(t, s, c);
                }
                break;
            case 5:
                var i = t.return;
                try {
                    il(t);
                }
                catch (c) {
                    X(t, i, c);
                }
        }
    }
    catch (c) {
        X(t, t.return, c);
    }
    if (t === e) {
        L = null;
        break;
    }
    var l = t.sibling;
    if (l !== null) {
        l.return = t.return, L = l;
        break;
    }
    L = t.return;
} }
var Dg = Math.ceil, is = kt.ReactCurrentDispatcher, ac = kt.ReactCurrentOwner, je = kt.ReactCurrentBatchConfig, O = 0, se = null, te = null, ae = 0, $e = 0, xn = Ht(0), oe = 0, Or = null, rn = 0, Cs = 0, uc = 0, yr = null, Te = null, fc = 0, Un = 1 / 0, dt = null, ls = !1, al = null, Mt = null, ho = !1, qt = null, cs = 0, wr = 0, ul = null, Lo = -1, Ao = 0;
function we() { return O & 6 ? Y() : Lo !== -1 ? Lo : Lo = Y(); }
function It(e) { return e.mode & 1 ? O & 2 && ae !== 0 ? ae & -ae : vg.transition !== null ? (Ao === 0 && (Ao = Zu()), Ao) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lf(e.type)), e) : 1; }
function Ve(e, t, n) { if (50 < wr)
    throw wr = 0, ul = null, Error(_(185)); var r = Ls(e, t); return r === null ? null : (Br(r, t, n), (!(O & 2) || r !== se) && (r === se && (!(O & 2) && (Cs |= t), oe === 4 && Ct(r, ae)), Ae(r, n), t === 1 && O === 0 && !(e.mode & 1) && (Un = Y() + 500, Ts && Bt())), r); }
function Ls(e, t) { e.lanes |= t; var n = e.alternate; for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
function gd(e) { return (se !== null || et !== null) && (e.mode & 1) !== 0 && (O & 2) === 0; }
function Ae(e, t) { var n = e.callbackNode; vm(e, t); var r = Vo(e, e === se ? ae : 0); if (r === 0)
    n !== null && Oc(n), e.callbackNode = null, e.callbackPriority = 0;
else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Oc(n), t === 1)
        e.tag === 0 ? gg(Da.bind(null, e)) : _f(Da.bind(null, e)), dg(function () { O === 0 && Bt(); }), n = null;
    else {
        switch (ef(r)) {
            case 1:
                n = Ol;
                break;
            case 4:
                n = Yu;
                break;
            case 16:
                n = jo;
                break;
            case 536870912:
                n = Ju;
                break;
            default: n = jo;
        }
        n = Td(n, vd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
} }
function vd(e, t) { if (Lo = -1, Ao = 0, O & 6)
    throw Error(_(327)); var n = e.callbackNode; if (An() && e.callbackNode !== n)
    return null; var r = Vo(e, e === se ? ae : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || t)
    t = as(e, r);
else {
    t = r;
    var o = O;
    O |= 2;
    var s = wd();
    (se !== e || ae !== t) && (dt = null, Un = Y() + 500, Yt(e, t));
    do
        try {
            Mg();
            break;
        }
        catch (l) {
            yd(e, l);
        }
    while (1);
    Ql(), is.current = s, O = o, te !== null ? t = 0 : (se = null, ae = 0, t = oe);
} if (t !== 0) {
    if (t === 2 && (o = Oi(e), o !== 0 && (r = o, t = fl(e, o))), t === 1)
        throw n = Or, Yt(e, 0), Ct(e, r), Ae(e, Y()), n;
    if (t === 6)
        Ct(e, r);
    else {
        if (o = e.current.alternate, !(r & 30) && !$g(o) && (t = as(e, r), t === 2 && (s = Oi(e), s !== 0 && (r = s, t = fl(e, s))), t === 1))
            throw n = Or, Yt(e, 0), Ct(e, r), Ae(e, Y()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
            case 0:
            case 1: throw Error(_(345));
            case 2:
                Gt(e, Te, dt);
                break;
            case 3:
                if (Ct(e, r), (r & 130023424) === r && (t = fc + 500 - Y(), 10 < t)) {
                    if (Vo(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        we(), e.pingedLanes |= e.suspendedLanes & o;
                        break;
                    }
                    e.timeoutHandle = Wi(Gt.bind(null, e, Te, dt), t);
                    break;
                }
                Gt(e, Te, dt);
                break;
            case 4:
                if (Ct(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                    var i = 31 - tt(r);
                    s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
                }
                if (r = o, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Dg(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = Wi(Gt.bind(null, e, Te, dt), r);
                    break;
                }
                Gt(e, Te, dt);
                break;
            case 5:
                Gt(e, Te, dt);
                break;
            default: throw Error(_(329));
        }
    }
} return Ae(e, Y()), e.callbackNode === n ? vd.bind(null, e) : null; }
function fl(e, t) { var n = yr; return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = as(e, t), e !== 2 && (t = Te, Te = n, t !== null && dl(t)), e; }
function dl(e) { Te === null ? Te = e : Te.push.apply(Te, e); }
function $g(e) { for (var t = e;;) {
    if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var o = n[r], s = o.getSnapshot;
                o = o.value;
                try {
                    if (!nt(s(), o))
                        return !1;
                }
                catch (_10) {
                    return !1;
                }
            }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
    else {
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    }
} return !0; }
function Ct(e, t) { for (t &= ~uc, t &= ~Cs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
} }
function Da(e) { if (O & 6)
    throw Error(_(327)); An(); var t = Vo(e, 0); if (!(t & 1))
    return Ae(e, Y()), null; var n = as(e, t); if (e.tag !== 0 && n === 2) {
    var r = Oi(e);
    r !== 0 && (t = r, n = fl(e, r));
} if (n === 1)
    throw n = Or, Yt(e, 0), Ct(e, t), Ae(e, Y()), n; if (n === 6)
    throw Error(_(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, Te, dt), Ae(e, Y()), null; }
function dc(e, t) { var n = O; O |= 1; try {
    return e(t);
}
finally {
    O = n, O === 0 && (Un = Y() + 500, Ts && Bt());
} }
function on(e) { qt !== null && qt.tag === 0 && !(O & 6) && An(); var t = O; O |= 1; var n = je.transition, r = U; try {
    if (je.transition = null, U = 1, e)
        return e();
}
finally {
    U = r, je.transition = n, O = t, !(O & 6) && Bt();
} }
function hc() { $e = xn.current, B(xn); }
function Yt(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, fg(n)), te !== null)
    for (n = te.return; n !== null;) {
        var r = n;
        switch (Jl(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && Xo();
                break;
            case 3:
                On(), B(Ce), B(ge), nc();
                break;
            case 5:
                tc(r);
                break;
            case 4:
                On();
                break;
            case 13:
                B(G);
                break;
            case 19:
                B(G);
                break;
            case 10:
                Kl(r.type._context);
                break;
            case 22:
            case 23: hc();
        }
        n = n.return;
    } if (se = e, te = e = Ft(e.current, null), ae = $e = t, oe = 0, Or = null, uc = Cs = rn = 0, Te = yr = null, et !== null) {
    for (t = 0; t < et.length; t++)
        if (n = et[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var o = r.next, s = n.pending;
            if (s !== null) {
                var i = s.next;
                s.next = o, r.next = i;
            }
            n.pending = r;
        }
    et = null;
} return e; }
function yd(e, t) { do {
    var n = te;
    try {
        if (Ql(), No.current = ss, os) {
            for (var r = Q.memoizedState; r !== null;) {
                var o = r.queue;
                o !== null && (o.pending = null), r = r.next;
            }
            os = !1;
        }
        if (nn = 0, le = re = Q = null, gr = !1, Pr = 0, ac.current = null, n === null || n.return === null) {
            oe = 1, Or = t, te = null;
            break;
        }
        e: {
            var s = e, i = n.return, l = n, c = t;
            if (t = ae, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                var a = c, u = l, p = u.tag;
                if (!(u.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                    var d = u.alternate;
                    d ? (u.updateQueue = d.updateQueue, u.memoizedState = d.memoizedState, u.lanes = d.lanes) : (u.updateQueue = null, u.memoizedState = null);
                }
                var m = va(i);
                if (m !== null) {
                    m.flags &= -257, ya(m, i, l, s, t), m.mode & 1 && ga(s, a, t), t = m, c = a;
                    var y = t.updateQueue;
                    if (y === null) {
                        var T = new Set;
                        T.add(c), t.updateQueue = T;
                    }
                    else
                        y.add(c);
                    break e;
                }
                else {
                    if (!(t & 1)) {
                        ga(s, a, t), pc();
                        break e;
                    }
                    c = Error(_(426));
                }
            }
            else if (W && l.mode & 1) {
                var k = va(i);
                if (k !== null) {
                    !(k.flags & 65536) && (k.flags |= 256), ya(k, i, l, s, t), Zl(c);
                    break e;
                }
            }
            s = c, oe !== 4 && (oe = 2), yr === null ? yr = [s] : yr.push(s), c = cc(c, l), l = i;
            do {
                switch (l.tag) {
                    case 3:
                        l.flags |= 65536, t &= -t, l.lanes |= t;
                        var h = ed(l, c, t);
                        la(l, h);
                        break e;
                    case 1:
                        s = c;
                        var f = l.type, g = l.stateNode;
                        if (!(l.flags & 128) && (typeof f.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Mt === null || !Mt.has(g)))) {
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var v = td(l, s, t);
                            la(l, v);
                            break e;
                        }
                }
                l = l.return;
            } while (l !== null);
        }
        Ed(n);
    }
    catch (E) {
        t = E, te === n && n !== null && (te = n = n.return);
        continue;
    }
    break;
} while (1); }
function wd() { var e = is.current; return is.current = ss, e === null ? ss : e; }
function pc() { (oe === 0 || oe === 3 || oe === 2) && (oe = 4), se === null || !(rn & 268435455) && !(Cs & 268435455) || Ct(se, ae); }
function as(e, t) { var n = O; O |= 2; var r = wd(); (se !== e || ae !== t) && (dt = null, Yt(e, t)); do
    try {
        Pg();
        break;
    }
    catch (o) {
        yd(e, o);
    }
while (1); if (Ql(), O = n, is.current = r, te !== null)
    throw Error(_(261)); return se = null, ae = 0, oe; }
function Pg() { for (; te !== null;)
    Sd(te); }
function Mg() { for (; te !== null && !cm();)
    Sd(te); }
function Sd(e) { var t = xd(e.alternate, e, $e); e.memoizedProps = e.pendingProps, t === null ? Ed(e) : te = t, ac.current = null; }
function Ed(e) { var t = e; do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
        if (n = Lg(n, t), n !== null) {
            n.flags &= 32767, te = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            oe = 6, te = null;
            return;
        }
    }
    else if (n = _g(n, t, $e), n !== null) {
        te = n;
        return;
    }
    if (t = t.sibling, t !== null) {
        te = t;
        return;
    }
    te = t = e;
} while (t !== null); oe === 0 && (oe = 5); }
function Gt(e, t, n) { var r = U, o = je.transition; try {
    je.transition = null, U = 1, Ig(e, t, n, r);
}
finally {
    je.transition = o, U = r;
} return null; }
function Ig(e, t, n, r) { do
    An();
while (qt !== null); if (O & 6)
    throw Error(_(327)); n = e.finishedWork; var o = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(_(177)); e.callbackNode = null, e.callbackPriority = 0; var s = n.lanes | n.childLanes; if (ym(e, s), e === se && (te = se = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ho || (ho = !0, Td(jo, function () { return An(), null; })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = je.transition, je.transition = null;
    var i = U;
    U = 1;
    var l = O;
    O |= 4, ac.current = null, qg(e, n), pd(n, e), og(ji), Wo = !!Bi, ji = Bi = null, e.current = n, Rg(n), am(), O = l, U = i, je.transition = s;
}
else
    e.current = n; if (ho && (ho = !1, qt = e, cs = o), s = e.pendingLanes, s === 0 && (Mt = null), dm(n.stateNode), Ae(e, Y()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        r(t[n]); if (ls)
    throw ls = !1, e = al, al = null, e; return cs & 1 && e.tag !== 0 && An(), s = e.pendingLanes, s & 1 ? e === ul ? wr++ : (wr = 0, ul = e) : wr = 0, Bt(), null; }
function An() { if (qt !== null) {
    var e = ef(cs), t = je.transition, n = U;
    try {
        if (je.transition = null, U = 16 > e ? 16 : e, qt === null)
            var r = !1;
        else {
            if (e = qt, qt = null, cs = 0, O & 6)
                throw Error(_(331));
            var o = O;
            for (O |= 4, L = e.current; L !== null;) {
                var s = L, i = s.child;
                if (L.flags & 16) {
                    var l = s.deletions;
                    if (l !== null) {
                        for (var c = 0; c < l.length; c++) {
                            var a = l[c];
                            for (L = a; L !== null;) {
                                var u = L;
                                switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15: vr(8, u, s);
                                }
                                var p = u.child;
                                if (p !== null)
                                    p.return = u, L = p;
                                else
                                    for (; L !== null;) {
                                        u = L;
                                        var d = u.sibling, m = u.return;
                                        if (fd(u), u === a) {
                                            L = null;
                                            break;
                                        }
                                        if (d !== null) {
                                            d.return = m, L = d;
                                            break;
                                        }
                                        L = m;
                                    }
                            }
                        }
                        var y = s.alternate;
                        if (y !== null) {
                            var T = y.child;
                            if (T !== null) {
                                y.child = null;
                                do {
                                    var k = T.sibling;
                                    T.sibling = null, T = k;
                                } while (T !== null);
                            }
                        }
                        L = s;
                    }
                }
                if (s.subtreeFlags & 2064 && i !== null)
                    i.return = s, L = i;
                else
                    e: for (; L !== null;) {
                        if (s = L, s.flags & 2048)
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15: vr(9, s, s.return);
                            }
                        var h = s.sibling;
                        if (h !== null) {
                            h.return = s.return, L = h;
                            break e;
                        }
                        L = s.return;
                    }
            }
            var f = e.current;
            for (L = f; L !== null;) {
                i = L;
                var g = i.child;
                if (i.subtreeFlags & 2064 && g !== null)
                    g.return = i, L = g;
                else
                    e: for (i = f; L !== null;) {
                        if (l = L, l.flags & 2048)
                            try {
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Ns(9, l);
                                }
                            }
                            catch (E) {
                                X(l, l.return, E);
                            }
                        if (l === i) {
                            L = null;
                            break e;
                        }
                        var v = l.sibling;
                        if (v !== null) {
                            v.return = l.return, L = v;
                            break e;
                        }
                        L = l.return;
                    }
            }
            if (O = o, Bt(), at && typeof at.onPostCommitFiberRoot == "function")
                try {
                    at.onPostCommitFiberRoot(ws, e);
                }
                catch (_10) { }
            r = !0;
        }
        return r;
    }
    finally {
        U = n, je.transition = t;
    }
} return !1; }
function $a(e, t, n) { t = cc(n, t), t = ed(e, t, 1), Pt(e, t), t = we(), e = Ls(e, 1), e !== null && (Br(e, 1, t), Ae(e, t)); }
function X(e, t, n) { if (e.tag === 3)
    $a(e, e, n);
else
    for (; t !== null;) {
        if (t.tag === 3) {
            $a(t, e, n);
            break;
        }
        else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mt === null || !Mt.has(r))) {
                e = cc(n, e), e = td(t, e, 1), Pt(t, e), e = we(), t = Ls(t, 1), t !== null && (Br(t, 1, e), Ae(t, e));
                break;
            }
        }
        t = t.return;
    } }
function Og(e, t, n) { var r = e.pingCache; r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ae & n) === n && (oe === 4 || oe === 3 && (ae & 130023424) === ae && 500 > Y() - fc ? Yt(e, 0) : uc |= n), Ae(e, t); }
function kd(e, t) { t === 0 && (e.mode & 1 ? (t = to, to <<= 1, !(to & 130023424) && (to = 4194304)) : t = 1); var n = we(); e = Ls(e, t), e !== null && (Br(e, t, n), Ae(e, n)); }
function Ug(e) { var t = e.memoizedState, n = 0; t !== null && (n = t.retryLane), kd(e, n); }
function Fg(e, t) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(_(314));
} r !== null && r.delete(t), kd(e, n); }
var xd;
xd = function (e, t, n) { if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current)
        _e = !0;
    else {
        if (!(e.lanes & n) && !(t.flags & 128))
            return _e = !1, Cg(e, t, n);
        _e = !!(e.flags & 131072);
    }
else
    _e = !1, W && t.flags & 1048576 && Af(t, ns, t.index); switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
        var o = Pn(t, ge.current);
        Ln(t, n), o = oc(null, t, r, e, o, n);
        var s = sc();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(r) ? (s = !0, Yo(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Xl(t), o.updater = bs, t.stateNode = o, o._reactInternals = t, Yi(t, r, e, n), t = rl(null, t, r, !0, s, n)) : (t.tag = 0, W && s && Yl(t), ye(null, t, o, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e: {
            switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Hg(r), e = Ye(r, e), o) {
                case 0:
                    t = nl(null, t, r, e, n);
                    break e;
                case 1:
                    t = Ea(null, t, r, e, n);
                    break e;
                case 11:
                    t = wa(null, t, r, e, n);
                    break e;
                case 14:
                    t = Sa(null, t, r, Ye(r.type, e), n);
                    break e;
            }
            throw Error(_(306, r, ""));
        }
        return t;
    case 0: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ye(r, o), nl(e, t, r, o, n);
    case 1: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ye(r, o), Ea(e, t, r, o, n);
    case 3:
        e: {
            if (cd(t), e === null)
                throw Error(_(387));
            r = t.pendingProps, s = t.memoizedState, o = s.element, Nf(e, t), es(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element, s.isDehydrated)
                if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                    o = Error(_(423)), t = ka(e, t, r, n, o);
                    break e;
                }
                else if (r !== o) {
                    o = Error(_(424)), t = ka(e, t, r, n, o);
                    break e;
                }
                else
                    for (be = pt(t.stateNode.containerInfo.firstChild), Me = t, W = !0, Ze = null, n = Df(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (Mn(), r === o) {
                    t = Et(e, t, n);
                    break e;
                }
                ye(e, t, r, n);
            }
            t = t.child;
        }
        return t;
    case 5: return $f(t), e === null && Zi(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, Vi(r, o) ? i = null : s !== null && Vi(r, s) && (t.flags |= 32), ld(e, t), ye(e, t, i, n), t.child;
    case 6: return e === null && Zi(t), null;
    case 13: return ad(e, t, n);
    case 4: return ec(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : ye(e, t, r, n), t.child;
    case 11: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ye(r, o), wa(e, t, r, o, n);
    case 7: return ye(e, t, t.pendingProps, n), t.child;
    case 8: return ye(e, t, t.pendingProps.children, n), t.child;
    case 12: return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e: {
            if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, z(Jo, r._currentValue), r._currentValue = i, s !== null)
                if (nt(s.value, i)) {
                    if (s.children === o.children && !Ce.current) {
                        t = Et(e, t, n);
                        break e;
                    }
                }
                else
                    for (s = t.child, s !== null && (s.return = t); s !== null;) {
                        var l = s.dependencies;
                        if (l !== null) {
                            i = s.child;
                            for (var c = l.firstContext; c !== null;) {
                                if (c.context === r) {
                                    if (s.tag === 1) {
                                        c = vt(-1, n & -n), c.tag = 2;
                                        var a = s.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var u = a.pending;
                                            u === null ? c.next = c : (c.next = u.next, u.next = c), a.pending = c;
                                        }
                                    }
                                    s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Ki(s.return, n, t), l.lanes |= n;
                                    break;
                                }
                                c = c.next;
                            }
                        }
                        else if (s.tag === 10)
                            i = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (i = s.return, i === null)
                                throw Error(_(341));
                            i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Ki(i, n, t), i = s.sibling;
                        }
                        else
                            i = s.child;
                        if (i !== null)
                            i.return = s;
                        else
                            for (i = s; i !== null;) {
                                if (i === t) {
                                    i = null;
                                    break;
                                }
                                if (s = i.sibling, s !== null) {
                                    s.return = i.return, i = s;
                                    break;
                                }
                                i = i.return;
                            }
                        s = i;
                    }
            ye(e, t, o.children, n), t = t.child;
        }
        return t;
    case 9: return o = t.type, r = t.pendingProps.children, Ln(t, n), o = Ge(o), r = r(o), t.flags |= 1, ye(e, t, r, n), t.child;
    case 14: return r = t.type, o = Ye(r, t.pendingProps), o = Ye(r.type, o), Sa(e, t, r, o, n);
    case 15: return sd(e, t, t.type, t.pendingProps, n);
    case 17: return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ye(r, o), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, Le(r) ? (e = !0, Yo(t)) : e = !1, Ln(t, n), Lf(t, r, o), Yi(t, r, o, n), rl(null, t, r, !0, e, n);
    case 19: return ud(e, t, n);
    case 22: return id(e, t, n);
} throw Error(_(156, t.tag)); };
function Td(e, t) { return Xu(e, t); }
function zg(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function He(e, t, n, r) { return new zg(e, t, n, r); }
function mc(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function Hg(e) { if (typeof e == "function")
    return mc(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === Pl)
        return 11;
    if (e === Ml)
        return 14;
} return 2; }
function Ft(e, t) { var n = e.alternate; return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function qo(e, t, n, r, o, s) { var i = 2; if (r = e, typeof e == "function")
    mc(e) && (i = 1);
else if (typeof e == "string")
    i = 5;
else
    e: switch (e) {
        case hn: return Jt(n.children, o, s, t);
        case $l:
            i = 8, o |= 8;
            break;
        case xi: return e = He(12, n, t, o | 2), e.elementType = xi, e.lanes = s, e;
        case Ti: return e = He(13, n, t, o), e.elementType = Ti, e.lanes = s, e;
        case bi: return e = He(19, n, t, o), e.elementType = bi, e.lanes = s, e;
        case Du: return us(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case qu:
                        i = 10;
                        break e;
                    case Ru:
                        i = 9;
                        break e;
                    case Pl:
                        i = 11;
                        break e;
                    case Ml:
                        i = 14;
                        break e;
                    case bt:
                        i = 16, r = null;
                        break e;
                }
            throw Error(_(130, e == null ? e : typeof e, ""));
    } return t = He(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t; }
function Jt(e, t, n, r) { return e = He(7, e, r, t), e.lanes = n, e; }
function us(e, t, n, r) { return e = He(22, e, r, t), e.elementType = Du, e.lanes = n, e.stateNode = {}, e; }
function ai(e, t, n) { return e = He(6, e, null, t), e.lanes = n, e; }
function ui(e, t, n) { return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
function Bg(e, t, n, r, o) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vs(0), this.expirationTimes = Vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null; }
function gc(e, t, n, r, o, s, i, l, c) { return e = new Bg(e, t, n, l, c), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = He(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xl(s), e; }
function jg(e, t, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }; }
function bd(e) { if (!e)
    return Ut; e = e._reactInternals; e: {
    if (cn(e) !== e || e.tag !== 1)
        throw Error(_(170));
    var t = e;
    do {
        switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1: if (Le(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        t = t.return;
    } while (t !== null);
    throw Error(_(171));
} if (e.tag === 1) {
    var n = e.type;
    if (Le(n))
        return bf(e, n, t);
} return t; }
function _d(e, t, n, r, o, s, i, l, c) { return e = gc(n, r, !0, e, o, s, i, l, c), e.context = bd(null), n = e.current, r = we(), o = It(n), s = vt(r, o), s.callback = t !== null && t !== void 0 ? t : null, Pt(n, s), e.current.lanes = o, Br(e, o, r), Ae(e, r), e; }
function As(e, t, n, r) { var o = t.current, s = we(), i = It(o); return n = bd(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Pt(o, t), e = Ve(o, i, s), e !== null && _o(e, o, i), i; }
function fs(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function Pa(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
} }
function vc(e, t) { Pa(e, t), (e = e.alternate) && Pa(e, t); }
function Vg() { return null; }
var Nd = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function yc(e) { this._internalRoot = e; }
qs.prototype.render = yc.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
    throw Error(_(409)); As(e, t, null, null); };
qs.prototype.unmount = yc.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    on(function () { As(null, e, null, null); }), t[St] = null;
} };
function qs(e) { this._internalRoot = e; }
qs.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var t = rf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++)
        ;
    Nt.splice(n, 0, e), n === 0 && sf(e);
} };
function wc(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function Rs(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function Ma() { }
function Wg(e, t, n, r, o) { if (o) {
    if (typeof r == "function") {
        var s = r;
        r = function () { var a = fs(i); s.call(a); };
    }
    var i = _d(t, r, e, 0, null, !1, !1, "", Ma);
    return e._reactRootContainer = i, e[St] = i.current, Ar(e.nodeType === 8 ? e.parentNode : e), on(), i;
} for (; o = e.lastChild;)
    e.removeChild(o); if (typeof r == "function") {
    var l = r;
    r = function () { var a = fs(c); l.call(a); };
} var c = gc(e, 0, !1, null, null, !1, !1, "", Ma); return e._reactRootContainer = c, e[St] = c.current, Ar(e.nodeType === 8 ? e.parentNode : e), on(function () { As(t, c, n, r); }), c; }
function Ds(e, t, n, r, o) { var s = n._reactRootContainer; if (s) {
    var i = s;
    if (typeof o == "function") {
        var l = o;
        o = function () { var c = fs(i); l.call(c); };
    }
    As(t, i, e, o);
}
else
    i = Wg(n, t, e, o, r); return fs(i); }
tf = function (e) { switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = lr(t.pendingLanes);
            n !== 0 && (Ul(t, n | 1), Ae(t, Y()), !(O & 6) && (Un = Y() + 500, Bt()));
        }
        break;
    case 13:
        var r = we();
        on(function () { return Ve(e, 1, r); }), vc(e, 1);
} };
Fl = function (e) { if (e.tag === 13) {
    var t = we();
    Ve(e, 134217728, t), vc(e, 134217728);
} };
nf = function (e) { if (e.tag === 13) {
    var t = we(), n = It(e);
    Ve(e, n, t), vc(e, n);
} };
rf = function () { return U; };
of = function (e, t) { var n = U; try {
    return U = e, t();
}
finally {
    U = n;
} };
Pi = function (e, t, n) { switch (t) {
    case "input":
        if (Ci(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = xs(r);
                    if (!o)
                        throw Error(_(90));
                    Pu(r), Ci(r, o);
                }
            }
        }
        break;
    case "textarea":
        Iu(e, n);
        break;
    case "select": t = n.value, t != null && bn(e, !!n.multiple, t, !1);
} };
ju = dc;
Vu = on;
var Gg = { usingClientEntryPoint: !1, Events: [Vr, vn, xs, Hu, Bu, dc] }, nr = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" }, Qg = { bundleType: nr.bundleType, version: nr.version, rendererPackageName: nr.rendererPackageName, rendererConfig: nr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: kt.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Qu(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: nr.findFiberByHostInstance || Vg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!po.isDisabled && po.supportsFiber)
        try {
            ws = po.inject(Qg), at = po;
        }
        catch (_11) { }
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg;
Oe.createPortal = function (e, t) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!wc(t))
    throw Error(_(200)); return jg(e, t, null, n); };
Oe.createRoot = function (e, t) { if (!wc(e))
    throw Error(_(299)); var n = !1, r = "", o = Nd; return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = gc(e, 1, !1, null, null, n, !1, r, o), e[St] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new yc(t); };
Oe.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var t = e._reactInternals; if (t === void 0)
    throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e))); return e = Qu(t), e = e === null ? null : e.stateNode, e; };
Oe.flushSync = function (e) { return on(e); };
Oe.hydrate = function (e, t, n) { if (!Rs(t))
    throw Error(_(200)); return Ds(null, e, t, !0, n); };
Oe.hydrateRoot = function (e, t, n) { if (!wc(e))
    throw Error(_(405)); var r = n != null && n.hydratedSources || null, o = !1, s = "", i = Nd; if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = _d(t, null, e, 1, n !== null && n !== void 0 ? n : null, o, !1, s, i), e[St] = t.current, Ar(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o); return new qs(t); };
Oe.render = function (e, t, n) { if (!Rs(t))
    throw Error(_(200)); return Ds(null, e, t, !1, n); };
Oe.unmountComponentAtNode = function (e) { if (!Rs(e))
    throw Error(_(40)); return e._reactRootContainer ? (on(function () { Ds(null, null, e, !1, function () { e._reactRootContainer = null, e[St] = null; }); }), !0) : !1; };
Oe.unstable_batchedUpdates = dc;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Rs(n))
    throw Error(_(200)); if (e == null || e._reactInternals === void 0)
    throw Error(_(38)); return Ds(e, t, n, !1, r); };
Oe.version = "18.1.0-next-22edb9f77-20220426";
(function (e) { function t() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
    }
    catch (n) {
        console.error(n);
    } } t(), e.exports = Oe; })(Wp);
var mo = function (_10) {
    var e = _10.children, _11 = _10.title, t = _11 === void 0 ? "" : _11, n = _10.icon, _12 = _10.disabled, r = _12 === void 0 ? !1 : _12, _13 = _10.toggled, o = _13 === void 0 ? !1 : _13, _14 = _10.onClick, s = _14 === void 0 ? function () { } : _14;
    var i = "toolbar-button ".concat(n);
    return o && (i += " toggled"), D("button", { className: i, onMouseDown: Ia, onClick: s, onDoubleClick: Ia, title: t, disabled: !!r, children: [n && S("span", { className: "codicon codicon-".concat(n), style: e ? { marginRight: 5 } : {} }), e] });
}, Ia = function (e) { e.stopPropagation(), e.preventDefault(); }, Ro = Symbol("context"), Cd = Symbol("next"), Ld = Symbol("prev"), Oa = Symbol("events"), Ua = Symbol("resources");
var TY = /** @class */ (function () {
    function TY(t) {
        ve(this, "startTime");
        ve(this, "endTime");
        ve(this, "browserName");
        ve(this, "platform");
        ve(this, "wallTime");
        ve(this, "title");
        ve(this, "options");
        ve(this, "pages");
        ve(this, "actions");
        ve(this, "events");
        ve(this, "hasSource");
        ve(this, "sdkLanguage");
        ve(this, "testIdAttributeName");
        ve(this, "sources");
        var n, r, o, s, i, l;
        t.forEach(function (c) { return Kg(c); }), this.browserName = ((n = t[0]) == null ? void 0 : n.browserName) || "", this.sdkLanguage = (r = t[0]) == null ? void 0 : r.sdkLanguage, this.testIdAttributeName = (o = t[0]) == null ? void 0 : o.testIdAttributeName, this.platform = ((s = t[0]) == null ? void 0 : s.platform) || "", this.title = ((i = t[0]) == null ? void 0 : i.title) || "", this.options = ((l = t[0]) == null ? void 0 : l.options) || {}, this.wallTime = t.map(function (c) { return c.wallTime; }).reduce(function (c, a) { return Math.min(c || Number.MAX_VALUE, a); }, Number.MAX_VALUE), this.startTime = t.map(function (c) { return c.startTime; }).reduce(function (c, a) { return Math.min(c, a); }, Number.MAX_VALUE), this.endTime = t.map(function (c) { return c.endTime; }).reduce(function (c, a) { return Math.max(c, a); }, Number.MIN_VALUE), this.pages = [].concat.apply([], t.map(function (c) { return c.pages; })), this.actions = [].concat.apply([], t.map(function (c) { return c.actions; })), this.events = [].concat.apply([], t.map(function (c) { return c.events; })), this.hasSource = t.some(function (c) { return c.hasSource; }), this.events.sort(function (c, a) { return c.time - a.time; }), this.actions = Xg(this.actions), this.sources = Jg(this.actions);
    }
    return TY;
}());
function Kg(e) { for (var _10 = 0, _11 = e.pages; _10 < _11.length; _10++) {
    var t = _11[_10];
    t[Ro] = e;
} for (var t = 0; t < e.actions.length; ++t) {
    var n = e.actions[t];
    n[Ro] = e, n[Cd] = e.actions[t + 1];
} for (var _12 = 0, _13 = e.events; _12 < _13.length; _12++) {
    var t = _13[_12];
    t[Ro] = e;
} }
function Xg(e) { var t = e.filter(function (s) { return s.callId.startsWith("call@"); }), n = e.filter(function (s) { return s.callId.startsWith("expect@"); }); if (t.length && n.length) {
    var s = t[0].startTime - t[0].wallTime;
    for (var _10 = 0, n_1 = n; _10 < n_1.length; _10++) {
        var i = n_1[_10];
        var l = i.endTime - i.startTime;
        i.startTime = i.wallTime + s, i.endTime = i.startTime + l;
    }
} var r = new Map; for (var _11 = 0, t_1 = t; _11 < t_1.length; _11++) {
    var s = t_1[_11];
    r.set(s.apiName + "@" + s.wallTime, s);
} var o = __spreadArray([], t, true); for (var _12 = 0, n_2 = n; _12 < n_2.length; _12++) {
    var s = n_2[_12];
    var i = r.get(s.apiName + "@" + s.wallTime);
    if (i) {
        s.error && (i.error = s.error);
        continue;
    }
    o.push(s);
} o.sort(function (s, i) { return s.wallTime - i.wallTime; }); for (var s = 1; s < o.length; ++s)
    o[s][Ld] = o[s - 1]; return o; }
function Fn(e) { return e[Ro]; }
function Ad(e) { return e[Cd]; }
function Yg(e) { return e[Ld]; }
function qd(e) { var o; var t = 0, n = 0; var r = Fn(e); for (var _10 = 0, _11 = Rd(e); _10 < _11.length; _10++) {
    var s = _11[_10];
    if (s.method === "console") {
        var i = s.params.message.guid, l = (o = r.initializers[i]) == null ? void 0 : o.type;
        l === "warning" ? ++n : l === "error" && ++t;
    }
    s.method === "pageError" && ++t;
} return { errors: t, warnings: n }; }
function Rd(e) { var t = e[Oa]; if (t)
    return t; var n = Ad(e); return t = Fn(e).events.filter(function (r) { return r.time >= e.startTime && (!n || r.time < n.startTime); }), e[Oa] = t, t; }
function Dd(e) { var t = e[Ua]; if (t)
    return t; var n = Ad(e); return t = Fn(e).resources.filter(function (r) { return typeof r._monotonicTime == "number" && r._monotonicTime > e.startTime && (!n || r._monotonicTime < n.startTime); }), e[Ua] = t, t; }
function Jg(e) { var n, r; var t = new Map; for (var _10 = 0, e_1 = e; _10 < e_1.length; _10++) {
    var o = e_1[_10];
    for (var _11 = 0, _12 = o.stack || []; _11 < _12.length; _11++) {
        var s = _12[_11];
        var i = t.get(s.file);
        i || (i = { errors: [], content: void 0 }, t.set(s.file, i));
    }
    o.error && ((n = o.stack) != null && n[0]) && t.get(o.stack[0].file).errors.push({ error: o.error, location: (r = o.stack) == null ? void 0 : r[0] });
} return t; }
var fi = 50, hl = function (_10) {
    var e = _10.sidebarSize, _11 = _10.sidebarHidden, t = _11 === void 0 ? !1 : _11, _12 = _10.sidebarIsFirst, n = _12 === void 0 ? !1 : _12, _13 = _10.orientation, r = _13 === void 0 ? "vertical" : _13, o = _10.children;
    var _14 = $.useState(Math.max(fi, e)), s = _14[0], i = _14[1], _15 = $.useState(null), l = _15[0], c = _15[1], a = $.Children.toArray(o);
    document.body.style.userSelect = l ? "none" : "inherit";
    var u = {};
    return r === "vertical" ? n ? u = { top: l ? 0 : s - 4, bottom: l ? 0 : void 0, height: l ? "initial" : 8 } : u = { bottom: l ? 0 : s - 4, top: l ? 0 : void 0, height: l ? "initial" : 8 } : n ? u = { left: l ? 0 : s - 4, right: l ? 0 : void 0, width: l ? "initial" : 8 } : u = { right: l ? 0 : s - 4, left: l ? 0 : void 0, width: l ? "initial" : 8 }, D("div", { className: "split-view " + r + (n ? " sidebar-first" : ""), children: [S("div", { className: "split-view-main", children: a[0] }), !t && S("div", { style: { flexBasis: s }, className: "split-view-sidebar", children: a[1] }), !t && S("div", { style: u, className: "split-view-resizer", onMouseDown: function (p) { return c({ offset: r === "vertical" ? p.clientY : p.clientX, size: s }); }, onMouseUp: function () { return c(null); }, onMouseMove: function (p) { if (!p.buttons)
                    c(null);
                else if (l) {
                    var m = (r === "vertical" ? p.clientY : p.clientX) - l.offset, y = n ? l.size + m : l.size - m, k = p.target.parentElement.getBoundingClientRect(), h = Math.min(Math.max(fi, y), (r === "vertical" ? k.height : k.width) - fi);
                    i(h);
                } } })] });
};
function $d(_10) {
    var _11 = _10.items, e = _11 === void 0 ? [] : _11, t = _10.id, n = _10.render, r = _10.icon, o = _10.isError, s = _10.indent, i = _10.selectedItem, l = _10.onAccepted, c = _10.onSelected, a = _10.onLeftArrow, u = _10.onRightArrow, p = _10.onHighlighted, d = _10.onIconClicked, m = _10.noItemsMessage, y = _10.dataTestId;
    var T = $.useRef(null), _12 = $.useState(), k = _12[0], h = _12[1];
    return $.useEffect(function () { p == null || p(k); }, [p, k]), S("div", { className: "list-view vbox", role: "list", "data-testid": y, children: D("div", { className: "list-view-content", tabIndex: 0, onDoubleClick: function () { return i && (l == null ? void 0 : l(i)); }, onKeyDown: function (f) { var b; if (i && f.key === "Enter") {
                l == null || l(i);
                return;
            } if (f.key !== "ArrowDown" && f.key !== "ArrowUp" && f.key !== "ArrowLeft" && f.key !== "ArrowRight")
                return; if (f.stopPropagation(), f.preventDefault(), i && f.key === "ArrowLeft") {
                a == null || a(i);
                return;
            } if (i && f.key === "ArrowRight") {
                u == null || u(i);
                return;
            } var g = i ? e.indexOf(i) : -1; var v = g; f.key === "ArrowDown" && (g === -1 ? v = 0 : v = Math.min(g + 1, e.length - 1)), f.key === "ArrowUp" && (g === -1 ? v = e.length - 1 : v = Math.max(g - 1, 0)); var E = (b = T.current) == null ? void 0 : b.children.item(v); Zg(E || void 0), p == null || p(void 0), c == null || c(e[v]); }, ref: T, children: [m && e.length === 0 && S("div", { className: "list-view-empty", children: m }), e.map(function (f, g) { var v = i === f ? " selected" : "", E = k === f ? " highlighted" : "", b = o != null && o(f) ? " error" : "", w = (s == null ? void 0 : s(f)) || 0, N = n(f); return D("div", { role: "listitem", className: "list-view-entry" + v + E + b, onClick: function () { return c == null ? void 0 : c(f); }, onMouseEnter: function () { return h(f); }, onMouseLeave: function () { return h(void 0); }, children: [w ? new Array(w).fill(0).map(function () { return S("div", { className: "list-view-indent" }); }) : void 0, r && S("div", { className: "codicon " + (r(f) || "codicon-blank"), style: { minWidth: 16, marginRight: 4 }, onDoubleClick: function (R) { R.preventDefault(), R.stopPropagation(); }, onClick: function (R) { R.stopPropagation(), R.preventDefault(), d == null || d(f); } }), typeof N == "string" ? S("div", { style: { textOverflow: "ellipsis", overflow: "hidden" }, children: N }) : N] }, (t == null ? void 0 : t(f)) || g); })] }) });
}
function Zg(e) { e && (e != null && e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e == null || e.scrollIntoView()); }
function $s(e, t) {
    if (t === void 0) { t = "'"; }
    var n = JSON.stringify(e), r = n.substring(1, n.length - 1).replace(/\\"/g, '"');
    if (t === "'")
        return t + r.replace(/[']/g, "\\'") + t;
    if (t === '"')
        return t + r.replace(/["]/g, '\\"') + t;
    if (t === "`")
        return t + r.replace(/[`]/g, "`") + t;
    throw new Error("Invalid escape char");
}
function ds(e) { return e.charAt(0).toUpperCase() + e.substring(1); }
function Pd(e) { return e.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").toLowerCase(); }
function lt(e) { var t = ""; for (var n = 0; n < e.length; n++)
    t += ev(e, n); return t; }
function ev(e, t) { var n = e.charCodeAt(t); return n === 0 ? "�" : n >= 1 && n <= 31 || n >= 48 && n <= 57 && (t === 0 || t === 1 && e.charCodeAt(0) === 45) ? "\\" + n.toString(16) + " " : t === 0 && n === 45 && e.length === 1 ? "\\" + e.charAt(t) : n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? e.charAt(t) : "\\" + e.charAt(t); }
function Ne(e) { return e.replace(/\u200b/g, "").trim().replace(/\s+/g, " "); }
function zn(e, t) { return typeof e != "string" ? String(e) : "".concat(JSON.stringify(e)).concat(t ? "s" : "i"); }
function De(e, t) { return "\"".concat(e.replace(/\\/g, "\\\\").replace(/["]/g, '\\"'), "\"").concat(t ? "s" : "i"); }
var ee = function (e, t, n) { return e >= t && e <= n; };
function xe(e) { return ee(e, 48, 57); }
function Fa(e) { return xe(e) || ee(e, 65, 70) || ee(e, 97, 102); }
function tv(e) { return ee(e, 65, 90); }
function nv(e) { return ee(e, 97, 122); }
function rv(e) { return tv(e) || nv(e); }
function ov(e) { return e >= 128; }
function Do(e) { return rv(e) || ov(e) || e === 95; }
function za(e) { return Do(e) || xe(e) || e === 45; }
function sv(e) { return ee(e, 0, 8) || e === 11 || ee(e, 14, 31) || e === 127; }
function $o(e) { return e === 10; }
function ft(e) { return $o(e) || e === 9 || e === 32; }
var iv = 1114111;
var Sc = /** @class */ (function (_super) {
    __extends(Sc, _super);
    function Sc(t) {
        var _this = this;
        _this = _super.call(this, t) || this, _this.name = "InvalidCharacterError";
        return _this;
    }
    return Sc;
}(Error));
function lv(e) { var t = []; for (var n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r === 13 && e.charCodeAt(n + 1) === 10 && (r = 10, n++), (r === 13 || r === 12) && (r = 10), r === 0 && (r = 65533), ee(r, 55296, 56319) && ee(e.charCodeAt(n + 1), 56320, 57343)) {
        var o = r - 55296, s = e.charCodeAt(n + 1) - 56320;
        r = Math.pow(2, 16) + o * Math.pow(2, 10) + s, n++;
    }
    t.push(r);
} return t; }
function ne(e) { if (e <= 65535)
    return String.fromCharCode(e); e -= Math.pow(2, 16); var t = Math.floor(e / Math.pow(2, 10)) + 55296, n = e % Math.pow(2, 10) + 56320; return String.fromCharCode(t) + String.fromCharCode(n); }
function cv(e) { var t = lv(e); var n = -1; var r = []; var o; var s = function (x) { return x >= t.length ? -1 : t[x]; }, i = function (x) { if (x === void 0 && (x = 1), x > 3)
    throw "Spec Error: no more than three codepoints of lookahead."; return s(n + x); }, l = function (x) { return x === void 0 && (x = 1), n += x, o = s(n), !0; }, c = function () { return n -= 1, !0; }, a = function (x) { return x === void 0 && (x = o), x === -1; }, u = function () { if (p(), l(), ft(o)) {
    for (; ft(i());)
        l();
    return new pl;
}
else {
    if (o === 34)
        return y();
    if (o === 35)
        if (za(i()) || h(i(1), i(2))) {
            var x = new Kd("");
            return g(i(1), i(2), i(3)) && (x.type = "id"), x.value = w(), x;
        }
        else
            return new he(o);
    else
        return o === 36 ? i() === 61 ? (l(), new hv) : new he(o) : o === 39 ? y() : o === 40 ? new av : o === 41 ? new Vd : o === 42 ? i() === 61 ? (l(), new pv) : new he(o) : o === 43 ? b() ? (c(), d()) : new he(o) : o === 44 ? new zd : o === 45 ? b() ? (c(), d()) : i(1) === 45 && i(2) === 62 ? (l(2), new Od) : v() ? (c(), m()) : new he(o) : o === 46 ? b() ? (c(), d()) : new he(o) : o === 58 ? new Ud : o === 59 ? new Fd : o === 60 ? i(1) === 33 && i(2) === 45 && i(3) === 45 ? (l(3), new Id) : new he(o) : o === 64 ? g(i(1), i(2), i(3)) ? new Qd(w()) : new he(o) : o === 91 ? new jd : o === 92 ? f() ? (c(), m()) : new he(o) : o === 93 ? new ml : o === 94 ? i() === 61 ? (l(), new dv) : new he(o) : o === 123 ? new Hd : o === 124 ? i() === 61 ? (l(), new fv) : i() === 124 ? (l(), new Wd) : new he(o) : o === 125 ? new Bd : o === 126 ? i() === 61 ? (l(), new uv) : new he(o) : xe(o) ? (c(), d()) : Do(o) ? (c(), m()) : a() ? new Mo : new he(o);
} }, p = function () { for (; i(1) === 47 && i(2) === 42;)
    for (l(2);;)
        if (l(), o === 42 && i() === 47) {
            l();
            break;
        }
        else if (a())
            return; }, d = function () { var x = N(); if (g(i(1), i(2), i(3))) {
    var A = new mv;
    return A.value = x.value, A.repr = x.repr, A.type = x.type, A.unit = w(), A;
}
else if (i() === 37) {
    l();
    var A = new Zd;
    return A.value = x.value, A.repr = x.repr, A;
}
else {
    var A = new Jd;
    return A.value = x.value, A.repr = x.repr, A.type = x.type, A;
} }, m = function () { var x = w(); if (x.toLowerCase() === "url" && i() === 40) {
    for (l(); ft(i(1)) && ft(i(2));)
        l();
    return i() === 34 || i() === 39 ? new Io(x) : ft(i()) && (i(2) === 34 || i(2) === 39) ? new Io(x) : T();
}
else
    return i() === 40 ? (l(), new Io(x)) : new Gd(x); }, y = function (x) { x === void 0 && (x = o); var A = ""; for (; l();) {
    if (o === x || a())
        return new Xd(A);
    if ($o(o))
        return c(), new Md;
    o === 92 ? a(i()) || ($o(i()) ? l() : A += ne(k())) : A += ne(o);
} throw new Error("Internal error"); }, T = function () { var x = new Yd(""); for (; ft(i());)
    l(); if (a(i()))
    return x; for (; l();) {
    if (o === 41 || a())
        return x;
    if (ft(o)) {
        for (; ft(i());)
            l();
        return i() === 41 || a(i()) ? (l(), x) : (q(), new Po);
    }
    else {
        if (o === 34 || o === 39 || o === 40 || sv(o))
            return q(), new Po;
        if (o === 92)
            if (f())
                x.value += ne(k());
            else
                return q(), new Po;
        else
            x.value += ne(o);
    }
} throw new Error("Internal error"); }, k = function () { if (l(), Fa(o)) {
    var x = [o];
    for (var F = 0; F < 5 && Fa(i()); F++)
        l(), x.push(o);
    ft(i()) && l();
    var A = parseInt(x.map(function (F) { return String.fromCharCode(F); }).join(""), 16);
    return A > iv && (A = 65533), A;
}
else
    return a() ? 65533 : o; }, h = function (x, A) { return !(x !== 92 || $o(A)); }, f = function () { return h(o, i()); }, g = function (x, A, F) { return x === 45 ? Do(A) || A === 45 || h(A, F) : Do(x) ? !0 : x === 92 ? h(x, A) : !1; }, v = function () { return g(o, i(1), i(2)); }, E = function (x, A, F) { return x === 43 || x === 45 ? !!(xe(A) || A === 46 && xe(F)) : x === 46 ? !!xe(A) : !!xe(x); }, b = function () { return E(o, i(1), i(2)); }, w = function () { var x = ""; for (; l();)
    if (za(o))
        x += ne(o);
    else if (f())
        x += ne(k());
    else
        return c(), x; throw new Error("Internal parse error"); }, N = function () { var x = "", A = "integer"; for ((i() === 43 || i() === 45) && (l(), x += ne(o)); xe(i());)
    l(), x += ne(o); if (i(1) === 46 && xe(i(2)))
    for (l(), x += ne(o), l(), x += ne(o), A = "number"; xe(i());)
        l(), x += ne(o); var F = i(1), Z = i(2), ke = i(3); if ((F === 69 || F === 101) && xe(Z))
    for (l(), x += ne(o), l(), x += ne(o), A = "number"; xe(i());)
        l(), x += ne(o);
else if ((F === 69 || F === 101) && (Z === 43 || Z === 45) && xe(ke))
    for (l(), x += ne(o), l(), x += ne(o), l(), x += ne(o), A = "number"; xe(i());)
        l(), x += ne(o); var Re = R(x); return { type: A, value: Re, repr: x }; }, R = function (x) { return +x; }, q = function () { for (; l();) {
    if (o === 41 || a())
        return;
    f() && k();
} }; var j = 0; for (; !a(i());)
    if (r.push(u()), j++, j > t.length * 2)
        throw new Error("I'm infinite-looping!"); return r; }
var J = /** @class */ (function () {
    function J() {
        this.tokenType = "";
    }
    J.prototype.toJSON = function () { return { token: this.tokenType }; };
    J.prototype.toString = function () { return this.tokenType; };
    J.prototype.toSource = function () { return "" + this; };
    return J;
}());
var Md = /** @class */ (function (_super) {
    __extends(Md, _super);
    function Md() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "BADSTRING";
        return _this;
    }
    return Md;
}(J));
var Po = /** @class */ (function (_super) {
    __extends(Po, _super);
    function Po() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "BADURL";
        return _this;
    }
    return Po;
}(J));
var pl = /** @class */ (function (_super) {
    __extends(pl, _super);
    function pl() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "WHITESPACE";
        return _this;
    }
    pl.prototype.toString = function () { return "WS"; };
    pl.prototype.toSource = function () { return " "; };
    return pl;
}(J));
var Id = /** @class */ (function (_super) {
    __extends(Id, _super);
    function Id() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "CDO";
        return _this;
    }
    Id.prototype.toSource = function () { return "<!--"; };
    return Id;
}(J));
var Od = /** @class */ (function (_super) {
    __extends(Od, _super);
    function Od() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "CDC";
        return _this;
    }
    Od.prototype.toSource = function () { return "-->"; };
    return Od;
}(J));
var Ud = /** @class */ (function (_super) {
    __extends(Ud, _super);
    function Ud() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = ":";
        return _this;
    }
    return Ud;
}(J));
var Fd = /** @class */ (function (_super) {
    __extends(Fd, _super);
    function Fd() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = ";";
        return _this;
    }
    return Fd;
}(J));
var zd = /** @class */ (function (_super) {
    __extends(zd, _super);
    function zd() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = ",";
        return _this;
    }
    return zd;
}(J));
var Vn = /** @class */ (function (_super) {
    __extends(Vn, _super);
    function Vn() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.value = "", _this.mirror = "";
        return _this;
    }
    return Vn;
}(J));
var Hd = /** @class */ (function (_super) {
    __extends(Hd, _super);
    function Hd() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "{", _this.value = "{", _this.mirror = "}";
        return _this;
    }
    return Hd;
}(Vn));
var Bd = /** @class */ (function (_super) {
    __extends(Bd, _super);
    function Bd() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "}", _this.value = "}", _this.mirror = "{";
        return _this;
    }
    return Bd;
}(Vn));
var jd = /** @class */ (function (_super) {
    __extends(jd, _super);
    function jd() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "[", _this.value = "[", _this.mirror = "]";
        return _this;
    }
    return jd;
}(Vn));
var ml = /** @class */ (function (_super) {
    __extends(ml, _super);
    function ml() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "]", _this.value = "]", _this.mirror = "[";
        return _this;
    }
    return ml;
}(Vn));
var av = /** @class */ (function (_super) {
    __extends(av, _super);
    function av() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "(", _this.value = "(", _this.mirror = ")";
        return _this;
    }
    return av;
}(Vn));
var Vd = /** @class */ (function (_super) {
    __extends(Vd, _super);
    function Vd() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = ")", _this.value = ")", _this.mirror = "(";
        return _this;
    }
    return Vd;
}(Vn));
var uv = /** @class */ (function (_super) {
    __extends(uv, _super);
    function uv() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "~=";
        return _this;
    }
    return uv;
}(J));
var fv = /** @class */ (function (_super) {
    __extends(fv, _super);
    function fv() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "|=";
        return _this;
    }
    return fv;
}(J));
var dv = /** @class */ (function (_super) {
    __extends(dv, _super);
    function dv() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "^=";
        return _this;
    }
    return dv;
}(J));
var hv = /** @class */ (function (_super) {
    __extends(hv, _super);
    function hv() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "$=";
        return _this;
    }
    return hv;
}(J));
var pv = /** @class */ (function (_super) {
    __extends(pv, _super);
    function pv() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "*=";
        return _this;
    }
    return pv;
}(J));
var Wd = /** @class */ (function (_super) {
    __extends(Wd, _super);
    function Wd() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "||";
        return _this;
    }
    return Wd;
}(J));
var Mo = /** @class */ (function (_super) {
    __extends(Mo, _super);
    function Mo() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.tokenType = "EOF";
        return _this;
    }
    Mo.prototype.toSource = function () { return ""; };
    return Mo;
}(J));
var he = /** @class */ (function (_super) {
    __extends(he, _super);
    function he(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "DELIM", _this.value = "", _this.value = ne(t);
        return _this;
    }
    he.prototype.toString = function () { return "DELIM(" + this.value + ")"; };
    he.prototype.toJSON = function () { var t = this.constructor.prototype.constructor.prototype.toJSON.call(this); return t.value = this.value, t; };
    he.prototype.toSource = function () {
        return this.value === "\\" ? "\\\n" : this.value;
    };
    return he;
}(J));
var Wn = /** @class */ (function (_super) {
    __extends(Wn, _super);
    function Wn() {
        var _this = this;
        _this = _super.apply(this, arguments) || this, _this.value = "";
        return _this;
    }
    Wn.prototype.ASCIIMatch = function (t) { return this.value.toLowerCase() === t.toLowerCase(); };
    Wn.prototype.toJSON = function () { var t = this.constructor.prototype.constructor.prototype.toJSON.call(this); return t.value = this.value, t; };
    return Wn;
}(J));
var Gd = /** @class */ (function (_super) {
    __extends(Gd, _super);
    function Gd(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "IDENT", _this.value = t;
        return _this;
    }
    Gd.prototype.toString = function () { return "IDENT(" + this.value + ")"; };
    Gd.prototype.toSource = function () { return Gr(this.value); };
    return Gd;
}(Wn));
var Io = /** @class */ (function (_super) {
    __extends(Io, _super);
    function Io(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "FUNCTION", _this.value = t, _this.mirror = ")";
        return _this;
    }
    Io.prototype.toString = function () { return "FUNCTION(" + this.value + ")"; };
    Io.prototype.toSource = function () { return Gr(this.value) + "("; };
    return Io;
}(Wn));
var Qd = /** @class */ (function (_super) {
    __extends(Qd, _super);
    function Qd(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "AT-KEYWORD", _this.value = t;
        return _this;
    }
    Qd.prototype.toString = function () { return "AT(" + this.value + ")"; };
    Qd.prototype.toSource = function () { return "@" + Gr(this.value); };
    return Qd;
}(Wn));
var Kd = /** @class */ (function (_super) {
    __extends(Kd, _super);
    function Kd(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "HASH", _this.value = t, _this.type = "unrestricted";
        return _this;
    }
    Kd.prototype.toString = function () { return "HASH(" + this.value + ")"; };
    Kd.prototype.toJSON = function () { var t = this.constructor.prototype.constructor.prototype.toJSON.call(this); return t.value = this.value, t.type = this.type, t; };
    Kd.prototype.toSource = function () { return this.type === "id" ? "#" + Gr(this.value) : "#" + gv(this.value); };
    return Kd;
}(Wn));
var Xd = /** @class */ (function (_super) {
    __extends(Xd, _super);
    function Xd(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "STRING", _this.value = t;
        return _this;
    }
    Xd.prototype.toString = function () { return '"' + eh(this.value) + '"'; };
    return Xd;
}(Wn));
var Yd = /** @class */ (function (_super) {
    __extends(Yd, _super);
    function Yd(t) {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "URL", _this.value = t;
        return _this;
    }
    Yd.prototype.toString = function () { return "URL(" + this.value + ")"; };
    Yd.prototype.toSource = function () { return 'url("' + eh(this.value) + '")'; };
    return Yd;
}(Wn));
var Jd = /** @class */ (function (_super) {
    __extends(Jd, _super);
    function Jd() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "NUMBER", _this.type = "integer", _this.repr = "";
        return _this;
    }
    Jd.prototype.toString = function () { return this.type === "integer" ? "INT(" + this.value + ")" : "NUMBER(" + this.value + ")"; };
    Jd.prototype.toJSON = function () { var t = _super.prototype.toJSON.call(this); return t.value = this.value, t.type = this.type, t.repr = this.repr, t; };
    Jd.prototype.toSource = function () { return this.repr; };
    return Jd;
}(J));
var Zd = /** @class */ (function (_super) {
    __extends(Zd, _super);
    function Zd() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "PERCENTAGE", _this.repr = "";
        return _this;
    }
    Zd.prototype.toString = function () { return "PERCENTAGE(" + this.value + ")"; };
    Zd.prototype.toJSON = function () { var t = this.constructor.prototype.constructor.prototype.toJSON.call(this); return t.value = this.value, t.repr = this.repr, t; };
    Zd.prototype.toSource = function () { return this.repr + "%"; };
    return Zd;
}(J));
var mv = /** @class */ (function (_super) {
    __extends(mv, _super);
    function mv() {
        var _this = this;
        _this = _super.call(this) || this, _this.tokenType = "DIMENSION", _this.type = "integer", _this.repr = "", _this.unit = "";
        return _this;
    }
    mv.prototype.toString = function () { return "DIM(" + this.value + "," + this.unit + ")"; };
    mv.prototype.toJSON = function () { var t = this.constructor.prototype.constructor.prototype.toJSON.call(this); return t.value = this.value, t.type = this.type, t.repr = this.repr, t.unit = this.unit, t; };
    mv.prototype.toSource = function () { var t = this.repr; var n = Gr(this.unit); return n[0].toLowerCase() === "e" && (n[1] === "-" || ee(n.charCodeAt(1), 48, 57)) && (n = "\\65 " + n.slice(1, n.length)), t + n; };
    return mv;
}(J));
function Gr(e) { e = "" + e; var t = ""; var n = e.charCodeAt(0); for (var r = 0; r < e.length; r++) {
    var o = e.charCodeAt(r);
    if (o === 0)
        throw new Sc("Invalid character: the input contains U+0000.");
    ee(o, 1, 31) || o === 127 || r === 0 && ee(o, 48, 57) || r === 1 && ee(o, 48, 57) && n === 45 ? t += "\\" + o.toString(16) + " " : o >= 128 || o === 45 || o === 95 || ee(o, 48, 57) || ee(o, 65, 90) || ee(o, 97, 122) ? t += e[r] : t += "\\" + e[r];
} return t; }
function gv(e) { e = "" + e; var t = ""; for (var n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r === 0)
        throw new Sc("Invalid character: the input contains U+0000.");
    r >= 128 || r === 45 || r === 95 || ee(r, 48, 57) || ee(r, 65, 90) || ee(r, 97, 122) ? t += e[n] : t += "\\" + r.toString(16) + " ";
} return t; }
function eh(e) { e = "" + e; var t = ""; for (var n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r === 0)
        throw new Sc("Invalid character: the input contains U+0000.");
    ee(r, 1, 31) || r === 127 ? t += "\\" + r.toString(16) + " " : r === 34 || r === 92 ? t += "\\" + e[n] : t += e[n];
} return t; }
var me = /** @class */ (function (_super) {
    __extends(me, _super);
    function me() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return me;
}(Error));
function vv(e, t) { var n; try {
    n = cv(e), n[n.length - 1] instanceof Mo || n.push(new Mo);
}
catch (w) {
    var N = w.message + " while parsing selector \"".concat(e, "\""), R = (w.stack || "").indexOf(w.message);
    throw R !== -1 && (w.stack = w.stack.substring(0, R) + N + w.stack.substring(R + w.message.length)), w.message = N, w;
} var r = n.find(function (w) { return w instanceof Qd || w instanceof Md || w instanceof Po || w instanceof Wd || w instanceof Id || w instanceof Od || w instanceof Fd || w instanceof Hd || w instanceof Bd || w instanceof Yd || w instanceof Zd; }); if (r)
    throw new me("Unsupported token \"".concat(r.toSource(), "\" while parsing selector \"").concat(e, "\"")); var o = 0; var s = new Set; function i() { return new me("Unexpected token \"".concat(n[o].toSource(), "\" while parsing selector \"").concat(e, "\"")); } function l() { for (; n[o] instanceof pl;)
    o++; } function c(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof Gd;
} function a(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof Xd;
} function u(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof Jd;
} function p(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof zd;
} function d(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof Vd;
} function m(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof he && n[w].value === "*";
} function y(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof Mo;
} function T(w) {
    if (w === void 0) { w = o; }
    return n[w] instanceof he && [">", "+", "~"].includes(n[w].value);
} function k(w) {
    if (w === void 0) { w = o; }
    return p(w) || d(w) || y(w) || T(w) || n[w] instanceof pl;
} function h() { var w = [f()]; for (; l(), !!p();)
    o++, w.push(f()); return w; } function f() { return l(), u() || a() ? n[o++].value : g(); } function g() { var w = { simples: [] }; for (l(), T() ? w.simples.push({ selector: { functions: [{ name: "scope", args: [] }] }, combinator: "" }) : w.simples.push({ selector: v(), combinator: "" });;) {
    if (l(), T())
        w.simples[w.simples.length - 1].combinator = n[o++].value, l();
    else if (k())
        break;
    w.simples.push({ combinator: "", selector: v() });
} return w; } function v() { var w = ""; var N = []; for (; !k();)
    if (c() || m())
        w += n[o++].toSource();
    else if (n[o] instanceof Kd)
        w += n[o++].toSource();
    else if (n[o] instanceof he && n[o].value === ".")
        if (o++, c())
            w += "." + n[o++].toSource();
        else
            throw i();
    else if (n[o] instanceof Ud)
        if (o++, c())
            if (!t.has(n[o].value.toLowerCase()))
                w += ":" + n[o++].toSource();
            else {
                var R = n[o++].value.toLowerCase();
                N.push({ name: R, args: [] }), s.add(R);
            }
        else if (n[o] instanceof Io) {
            var R = n[o++].value.toLowerCase();
            if (t.has(R) ? (N.push({ name: R, args: h() }), s.add(R)) : w += ":".concat(R, "(").concat(E(), ")"), l(), !d())
                throw i();
            o++;
        }
        else
            throw i();
    else if (n[o] instanceof jd) {
        for (w += "[", o++; !(n[o] instanceof ml) && !y();)
            w += n[o++].toSource();
        if (!(n[o] instanceof ml))
            throw i();
        w += "]", o++;
    }
    else
        throw i(); if (!w && !N.length)
    throw i(); return { css: w || void 0, functions: N }; } function E() { var w = ""; for (; !d() && !y();)
    w += n[o++].toSource(); return w; } var b = h(); if (!y())
    throw new me("Error while parsing selector \"".concat(e, "\"")); if (b.some(function (w) { return typeof w != "object" || !("simples" in w); }))
    throw new me("Error while parsing selector \"".concat(e, "\"")); return { selector: b, names: Array.from(s) }; }
var gl = new Set(["internal:has", "left-of", "right-of", "above", "below", "near"]), yv = new Set(["left-of", "right-of", "above", "below", "near"]), th = new Set(["not", "is", "where", "has", "scope", "light", "visible", "text", "text-matches", "text-is", "has-text", "above", "below", "right-of", "left-of", "near", "nth-match"]);
function Ur(e) { var t = Sv(e), n = t.parts.map(function (r) { if (r.name === "css" || r.name === "css:light")
    return r.name === "css:light" && (r.body = ":light(" + r.body + ")"), { name: "css", body: vv(r.body, th).selector, source: r.body }; if (gl.has(r.name)) {
    var o = void 0, s = void 0;
    try {
        var l = JSON.parse("[" + r.body + "]");
        if (!Array.isArray(l) || l.length < 1 || l.length > 2 || typeof l[0] != "string")
            throw new me("Malformed selector: ".concat(r.name, "=") + r.body);
        if (o = l[0], l.length === 2) {
            if (typeof l[1] != "number" || !yv.has(r.name))
                throw new me("Malformed selector: ".concat(r.name, "=") + r.body);
            s = l[1];
        }
    }
    catch (_10) {
        throw new me("Malformed selector: ".concat(r.name, "=") + r.body);
    }
    var i = { name: r.name, source: r.body, body: { parsed: Ur(o), distance: s } };
    if (i.body.parsed.parts.some(function (l) { return l.name === "internal:control" && l.body === "enter-frame"; }))
        throw new me("Frames are not allowed inside \"".concat(r.name, "\" selectors"));
    return i;
} return __assign(__assign({}, r), { source: r.body }); }); if (gl.has(n[0].name))
    throw new me("\"".concat(n[0].name, "\" selector cannot be first")); return { capture: t.capture, parts: n }; }
function hs(e) { return typeof e == "string" ? e : e.parts.map(function (t, n) { var r = t.name === "css" ? "" : t.name + "="; return "".concat(n === e.capture ? "*" : "").concat(r).concat(t.source); }).join(" >> "); }
function wv(e) { var t = new Set, n = function (r) { for (var _10 = 0, _11 = r.parts; _10 < _11.length; _10++) {
    var o = _11[_10];
    t.add(o.name), gl.has(o.name) && n(o.body.parsed);
} }; return n(e), t; }
function Sv(e) { var t = 0, n, r = 0; var o = { parts: [] }, s = function () { var l = e.substring(r, t).trim(), c = l.indexOf("="); var a, u; c !== -1 && l.substring(0, c).trim().match(/^[a-zA-Z_0-9-+:*]+$/) ? (a = l.substring(0, c).trim(), u = l.substring(c + 1)) : l.length > 1 && l[0] === '"' && l[l.length - 1] === '"' || l.length > 1 && l[0] === "'" && l[l.length - 1] === "'" ? (a = "text", u = l) : /^\(*\/\//.test(l) || l.startsWith("..") ? (a = "xpath", u = l) : (a = "css", u = l); var p = !1; if (a[0] === "*" && (p = !0, a = a.substring(1)), o.parts.push({ name: a, body: u }), p) {
    if (o.capture !== void 0)
        throw new me("Only one of the selectors can capture using * modifier");
    o.capture = o.parts.length - 1;
} }; if (!e.includes(">>"))
    return t = e.length, s(), o; var i = function () { var c = e.substring(r, t).match(/^\s*text\s*=(.*)$/); return !!c && !!c[1]; }; for (; t < e.length;) {
    var l = e[t];
    l === "\\" && t + 1 < e.length ? t += 2 : l === n ? (n = void 0, t++) : !n && (l === '"' || l === "'" || l === "`") && !i() ? (n = l, t++) : !n && l === ">" && e[t + 1] === ">" ? (s(), t += 2, r = t) : t++;
} return s(), o; }
function Zt(e, t) { var n = 0, r = e.length === 0; var o = function () { return e[n] || ""; }, s = function () { var k = o(); return ++n, r = n >= e.length, k; }, i = function (k) { throw r ? new me("Unexpected end of selector while parsing selector `".concat(e, "`")) : new me("Error while parsing selector `".concat(e, "` - unexpected symbol \"").concat(o(), "\" at position ").concat(n) + (k ? " during " + k : "")); }; function l() { for (; !r && /\s/.test(o());)
    s(); } function c(k) { return k >= "" || k >= "0" && k <= "9" || k >= "A" && k <= "Z" || k >= "a" && k <= "z" || k >= "0" && k <= "9" || k === "_" || k === "-"; } function a() { var k = ""; for (l(); !r && c(o());)
    k += s(); return k; } function u(k) { var h = s(); for (h !== k && i("parsing quoted string"); !r && o() !== k;)
    o() === "\\" && s(), h += s(); return o() !== k && i("parsing quoted string"), h += s(), h; } function p() { s() !== "/" && i("parsing regular expression"); var k = "", h = !1; for (; !r;) {
    if (o() === "\\")
        k += s(), r && i("parsing regular expressiion");
    else if (h && o() === "]")
        h = !1;
    else if (!h && o() === "[")
        h = !0;
    else if (!h && o() === "/")
        break;
    k += s();
} s() !== "/" && i("parsing regular expression"); var f = ""; for (; !r && o().match(/[dgimsuy]/);)
    f += s(); try {
    return new RegExp(k, f);
}
catch (g) {
    throw new me("Error while parsing selector `".concat(e, "`: ").concat(g.message));
} } function d() { var k = ""; return l(), o() === "'" || o() === '"' ? k = u(o()).slice(1, -1) : k = a(), k || i("parsing property path"), k; } function m() { l(); var k = ""; return r || (k += s()), !r && k !== "=" && (k += s()), ["=", "*=", "^=", "$=", "|=", "~="].includes(k) || i("parsing operator"), k; } function y() { s(); var k = []; for (k.push(d()), l(); o() === ".";)
    s(), k.push(d()), l(); if (o() === "]")
    return s(), { name: k.join("."), jsonPath: k, op: "<truthy>", value: null, caseSensitive: !1 }; var h = m(); var f, g = !0; if (l(), o() === "/") {
    if (h !== "=")
        throw new me("Error while parsing selector `".concat(e, "` - cannot use ").concat(h, " in attribute with regular expression"));
    f = p();
}
else if (o() === "'" || o() === '"')
    f = u(o()).slice(1, -1), l(), o() === "i" || o() === "I" ? (g = !1, s()) : (o() === "s" || o() === "S") && (g = !0, s());
else {
    for (f = ""; !r && (c(o()) || o() === "+" || o() === ".");)
        f += s();
    f === "true" ? f = !0 : f === "false" ? f = !1 : t || (f = +f, Number.isNaN(f) && i("parsing attribute value"));
} if (l(), o() !== "]" && i("parsing attribute value"), s(), h !== "=" && typeof f != "string")
    throw new me("Error while parsing selector `".concat(e, "` - cannot use ").concat(h, " in attribute with non-string matching value - ").concat(f)); return { name: k.join("."), jsonPath: k, op: h, value: f, caseSensitive: g }; } var T = { name: "", attributes: [] }; for (T.name = a(), l(); o() === "[";)
    T.attributes.push(y()), l(); if (r || i(void 0), !T.name && !T.attributes.length)
    throw new me("Error while parsing selector `".concat(e, "` - selector cannot be empty")); return T; }
function sn(e, t, n, r) {
    if (n === void 0) { n = !1; }
    if (r === void 0) { r = !1; }
    if (r)
        try {
            return vl(Ha[e], Ur(t), n);
        }
        catch (_10) {
            return t;
        }
    else
        return vl(Ha[e], Ur(t), n);
}
function vl(e, t, n) {
    if (n === void 0) { n = !1; }
    var r = __spreadArray([], t.parts, true);
    for (var i = 0; i < r.length - 1; i++)
        if (r[i].name === "nth" && r[i + 1].name === "internal:control" && r[i + 1].body === "enter-frame") {
            var l = r.splice(i, 1)[0];
            r.splice(i + 1, 0, l);
        }
    var o = [];
    var s = n ? "frame-locator" : "page";
    for (var i = 0; i < r.length; i++) {
        var l = r[i], c = s;
        if (s = "locator", l.name === "nth") {
            l.body === "0" ? o.push(e.generateLocator(c, "first", "")) : l.body === "-1" ? o.push(e.generateLocator(c, "last", "")) : o.push(e.generateLocator(c, "nth", l.body));
            continue;
        }
        if (l.name === "internal:text") {
            var _10 = di(l.body), d = _10.exact, m = _10.text;
            o.push(e.generateLocator(c, "text", m, { exact: d }));
            continue;
        }
        if (l.name === "internal:has-text") {
            var _11 = di(l.body), d = _11.exact, m = _11.text;
            if (!d) {
                o.push(e.generateLocator(c, "has-text", m, { exact: d }));
                continue;
            }
        }
        if (l.name === "internal:has") {
            var d = vl(e, l.body.parsed);
            o.push(e.generateLocator(c, "has", d));
            continue;
        }
        if (l.name === "internal:label") {
            var _12 = di(l.body), d = _12.exact, m = _12.text;
            o.push(e.generateLocator(c, "label", m, { exact: d }));
            continue;
        }
        if (l.name === "internal:role") {
            var d = Zt(l.body, !0), m = { attrs: [] };
            for (var _13 = 0, _14 = d.attributes; _13 < _14.length; _13++) {
                var y = _14[_13];
                y.name === "name" ? (m.exact = y.caseSensitive, m.name = y.value) : (y.name === "level" && typeof y.value == "string" && (y.value = +y.value), m.attrs.push({ name: y.name === "include-hidden" ? "includeHidden" : y.name, value: y.value }));
            }
            o.push(e.generateLocator(c, "role", d.name, m));
            continue;
        }
        if (l.name === "internal:testid") {
            var d = Zt(l.body, !0), m = d.attributes[0].value;
            o.push(e.generateLocator(c, "test-id", m));
            continue;
        }
        if (l.name === "internal:attr") {
            var d = Zt(l.body, !0), _15 = d.attributes[0], m = _15.name, y = _15.value, T = _15.caseSensitive, k = y, h = !!T;
            if (m === "placeholder") {
                o.push(e.generateLocator(c, "placeholder", k, { exact: h }));
                continue;
            }
            if (m === "alt") {
                o.push(e.generateLocator(c, "alt", k, { exact: h }));
                continue;
            }
            if (m === "title") {
                o.push(e.generateLocator(c, "title", k, { exact: h }));
                continue;
            }
        }
        var a = "default";
        var u = r[i + 1];
        u && u.name === "internal:control" && u.body === "enter-frame" && (a = "frame", s = "frame-locator", i++);
        var p = { parts: [l] };
        o.push(e.generateLocator(c, a, hs(p)));
    }
    return o.join(".");
}
function di(e) { var t = !1; var n = e.match(/^\/(.*)\/([igm]*)$/); return n ? { text: new RegExp(n[1], n[2]) } : (e.endsWith('"') ? (e = JSON.parse(e), t = !0) : e.endsWith('"s') ? (e = JSON.parse(e.substring(0, e.length - 1)), t = !0) : e.endsWith('"i') && (e = JSON.parse(e.substring(0, e.length - 1)), t = !1), { exact: t, text: e }); }
var Ev = /** @class */ (function () {
    function Ev() {
    }
    Ev.prototype.generateLocator = function (t, n, r, o) {
        if (o === void 0) { o = {}; }
        switch (n) {
            case "default": return "locator(".concat(this.quote(r), ")");
            case "frame": return "frameLocator(".concat(this.quote(r), ")");
            case "nth": return "nth(".concat(r, ")");
            case "first": return "first()";
            case "last": return "last()";
            case "role":
                var s = [];
                We(o.name) ? s.push("name: ".concat(o.name)) : typeof o.name == "string" && (s.push("name: ".concat(this.quote(o.name))), o.exact && s.push("exact: true"));
                for (var _10 = 0, _11 = o.attrs; _10 < _11.length; _10++) {
                    var _12 = _11[_10], l = _12.name, c = _12.value;
                    s.push("".concat(l, ": ").concat(typeof c == "string" ? this.quote(c) : c));
                }
                var i = s.length ? ", { ".concat(s.join(", "), " }") : "";
                return "getByRole(".concat(this.quote(r)).concat(i, ")");
            case "has-text": return "filter({ hasText: ".concat(this.toHasText(r), " })");
            case "has": return "filter({ has: ".concat(r, " })");
            case "test-id": return "getByTestId(".concat(this.quote(r), ")");
            case "text": return this.toCallWithExact("getByText", r, !!o.exact);
            case "alt": return this.toCallWithExact("getByAltText", r, !!o.exact);
            case "placeholder": return this.toCallWithExact("getByPlaceholder", r, !!o.exact);
            case "label": return this.toCallWithExact("getByLabel", r, !!o.exact);
            case "title": return this.toCallWithExact("getByTitle", r, !!o.exact);
            default: throw new Error("Unknown selector kind " + n);
        }
    };
    Ev.prototype.toCallWithExact = function (t, n, r) { return We(n) ? "".concat(t, "(").concat(n, ")") : r ? "".concat(t, "(").concat(this.quote(n), ", { exact: true })") : "".concat(t, "(").concat(this.quote(n), ")"); };
    Ev.prototype.toHasText = function (t) { return We(t) ? String(t) : this.quote(t); };
    Ev.prototype.quote = function (t) { return $s(t, "'"); };
    return Ev;
}());
var kv = /** @class */ (function () {
    function kv() {
    }
    kv.prototype.generateLocator = function (t, n, r, o) {
        if (o === void 0) { o = {}; }
        switch (n) {
            case "default": return "locator(".concat(this.quote(r), ")");
            case "frame": return "frame_locator(".concat(this.quote(r), ")");
            case "nth": return "nth(".concat(r, ")");
            case "first": return "first";
            case "last": return "last";
            case "role":
                var s = [];
                We(o.name) ? s.push("name=".concat(this.regexToString(o.name))) : typeof o.name == "string" && (s.push("name=".concat(this.quote(o.name))), o.exact && s.push("exact=True"));
                for (var _10 = 0, _11 = o.attrs; _10 < _11.length; _10++) {
                    var _12 = _11[_10], l = _12.name, c = _12.value;
                    var a = typeof c == "string" ? this.quote(c) : c;
                    typeof c == "boolean" && (a = c ? "True" : "False"), s.push("".concat(Pd(l), "=").concat(a));
                }
                var i = s.length ? ", ".concat(s.join(", ")) : "";
                return "get_by_role(".concat(this.quote(r)).concat(i, ")");
            case "has-text": return "filter(has_text=".concat(this.toHasText(r), ")");
            case "has": return "filter(has=".concat(r, ")");
            case "test-id": return "get_by_test_id(".concat(this.quote(r), ")");
            case "text": return this.toCallWithExact("get_by_text", r, !!o.exact);
            case "alt": return this.toCallWithExact("get_by_alt_text", r, !!o.exact);
            case "placeholder": return this.toCallWithExact("get_by_placeholder", r, !!o.exact);
            case "label": return this.toCallWithExact("get_by_label", r, !!o.exact);
            case "title": return this.toCallWithExact("get_by_title", r, !!o.exact);
            default: throw new Error("Unknown selector kind " + n);
        }
    };
    kv.prototype.regexToString = function (t) { var n = t.flags.includes("i") ? ", re.IGNORECASE" : ""; return "re.compile(r\"".concat(t.source.replace(/\\\//, "/").replace(/"/g, '\\"'), "\"").concat(n, ")"); };
    kv.prototype.toCallWithExact = function (t, n, r) { return We(n) ? "".concat(t, "(").concat(this.regexToString(n), ")") : r ? "".concat(t, "(").concat(this.quote(n), ", exact=True)") : "".concat(t, "(").concat(this.quote(n), ")"); };
    kv.prototype.toHasText = function (t) { return We(t) ? this.regexToString(t) : "".concat(this.quote(t)); };
    kv.prototype.quote = function (t) { return $s(t, '"'); };
    return kv;
}());
var xv = /** @class */ (function () {
    function xv() {
    }
    xv.prototype.generateLocator = function (t, n, r, o) {
        if (o === void 0) { o = {}; }
        var s;
        switch (t) {
            case "page":
                s = "Page";
                break;
            case "frame-locator":
                s = "FrameLocator";
                break;
            case "locator":
                s = "Locator";
                break;
        }
        switch (n) {
            case "default": return "locator(".concat(this.quote(r), ")");
            case "frame": return "frameLocator(".concat(this.quote(r), ")");
            case "nth": return "nth(".concat(r, ")");
            case "first": return "first()";
            case "last": return "last()";
            case "role":
                var i = [];
                We(o.name) ? i.push(".setName(".concat(this.regexToString(o.name), ")")) : typeof o.name == "string" && (i.push(".setName(".concat(this.quote(o.name), ")")), o.exact && i.push(".setExact(true)"));
                for (var _10 = 0, _11 = o.attrs; _10 < _11.length; _10++) {
                    var _12 = _11[_10], c = _12.name, a = _12.value;
                    i.push(".set".concat(ds(c), "(").concat(typeof a == "string" ? this.quote(a) : a, ")"));
                }
                var l = i.length ? ", new ".concat(s, ".GetByRoleOptions()").concat(i.join("")) : "";
                return "getByRole(AriaRole.".concat(Pd(r).toUpperCase()).concat(l, ")");
            case "has-text": return "filter(new ".concat(s, ".FilterOptions().setHasText(").concat(this.toHasText(r), "))");
            case "has": return "filter(new ".concat(s, ".FilterOptions().setHas(").concat(r, "))");
            case "test-id": return "getByTestId(".concat(this.quote(r), ")");
            case "text": return this.toCallWithExact(s, "getByText", r, !!o.exact);
            case "alt": return this.toCallWithExact(s, "getByAltText", r, !!o.exact);
            case "placeholder": return this.toCallWithExact(s, "getByPlaceholder", r, !!o.exact);
            case "label": return this.toCallWithExact(s, "getByLabel", r, !!o.exact);
            case "title": return this.toCallWithExact(s, "getByTitle", r, !!o.exact);
            default: throw new Error("Unknown selector kind " + n);
        }
    };
    xv.prototype.regexToString = function (t) { var n = t.flags.includes("i") ? ", Pattern.CASE_INSENSITIVE" : ""; return "Pattern.compile(".concat(this.quote(t.source)).concat(n, ")"); };
    xv.prototype.toCallWithExact = function (t, n, r, o) { return We(r) ? "".concat(n, "(").concat(this.regexToString(r), ")") : o ? "".concat(n, "(").concat(this.quote(r), ", new ").concat(t, ".").concat(ds(n), "Options().setExact(true))") : "".concat(n, "(").concat(this.quote(r), ")"); };
    xv.prototype.toHasText = function (t) { return We(t) ? this.regexToString(t) : this.quote(t); };
    xv.prototype.quote = function (t) { return $s(t, '"'); };
    return xv;
}());
var Tv = /** @class */ (function () {
    function Tv() {
    }
    Tv.prototype.generateLocator = function (t, n, r, o) {
        if (o === void 0) { o = {}; }
        switch (n) {
            case "default": return "Locator(".concat(this.quote(r), ")");
            case "frame": return "FrameLocator(".concat(this.quote(r), ")");
            case "nth": return "Nth(".concat(r, ")");
            case "first": return "First";
            case "last": return "Last";
            case "role":
                var s = [];
                We(o.name) ? s.push("NameRegex = ".concat(this.regexToString(o.name))) : typeof o.name == "string" && (s.push("Name = ".concat(this.quote(o.name))), o.exact && s.push("Exact = true"));
                for (var _10 = 0, _11 = o.attrs; _10 < _11.length; _10++) {
                    var _12 = _11[_10], l = _12.name, c = _12.value;
                    s.push("".concat(ds(l), " = ").concat(typeof c == "string" ? this.quote(c) : c));
                }
                var i = s.length ? ", new() { ".concat(s.join(", "), " }") : "";
                return "GetByRole(AriaRole.".concat(ds(r)).concat(i, ")");
            case "has-text": return "Filter(new() { ".concat(this.toHasText(r), " })");
            case "has": return "Filter(new() { Has = ".concat(r, " })");
            case "test-id": return "GetByTestId(".concat(this.quote(r), ")");
            case "text": return this.toCallWithExact("GetByText", r, !!o.exact);
            case "alt": return this.toCallWithExact("GetByAltText", r, !!o.exact);
            case "placeholder": return this.toCallWithExact("GetByPlaceholder", r, !!o.exact);
            case "label": return this.toCallWithExact("GetByLabel", r, !!o.exact);
            case "title": return this.toCallWithExact("GetByTitle", r, !!o.exact);
            default: throw new Error("Unknown selector kind " + n);
        }
    };
    Tv.prototype.regexToString = function (t) { var n = t.flags.includes("i") ? ", RegexOptions.IgnoreCase" : ""; return "new Regex(".concat(this.quote(t.source)).concat(n, ")"); };
    Tv.prototype.toCallWithExact = function (t, n, r) { return We(n) ? "".concat(t, "(").concat(this.regexToString(n), ")") : r ? "".concat(t, "(").concat(this.quote(n), ", new() { Exact = true })") : "".concat(t, "(").concat(this.quote(n), ")"); };
    Tv.prototype.toHasText = function (t) { return We(t) ? "HasTextRegex = ".concat(this.regexToString(t)) : "HasText = ".concat(this.quote(t)); };
    Tv.prototype.quote = function (t) { return $s(t, '"'); };
    return Tv;
}());
var Ha = { javascript: new Ev, python: new kv, java: new xv, csharp: new Tv };
function We(e) { return e instanceof RegExp; }
var bv = $d, _v = function (_10) {
    var _11 = _10.actions, e = _11 === void 0 ? [] : _11, t = _10.selectedAction, n = _10.sdkLanguage, _12 = _10.onSelected, r = _12 === void 0 ? function () { } : _12, _13 = _10.onHighlighted, o = _13 === void 0 ? function () { } : _13, _14 = _10.revealConsole, s = _14 === void 0 ? function () { } : _14;
    return S(bv, { dataTestId: "action-list", items: e, id: function (i) { return i.callId; }, selectedItem: t, onSelected: r, onHighlighted: o, isError: function (i) { var l; return !!((l = i.error) != null && l.message); }, render: function (i) { return Nv(i, n, s); } });
}, Nv = function (e, t, n) { var _10 = qd(e), r = _10.errors, o = _10.warnings, s = e.params.selector ? sn(t || "javascript", e.params.selector, !1, !0) : void 0; var i = ""; return e.endTime ? i = Dn(e.endTime - e.startTime) : e.error && (i = "Timed out"), D(Hr, { children: [D("div", { className: "action-title", children: [S("span", { children: e.apiName }), s && S("div", { className: "action-selector", title: s, children: s }), e.method === "goto" && e.params.url && S("div", { className: "action-url", title: e.params.url, children: e.params.url })] }), S("div", { className: "action-duration", style: { flex: "none" }, children: i || S("span", { className: "codicon codicon-loading" }) }), D("div", { className: "action-icons", onClick: function () { return n(); }, children: [!!r && D("div", { className: "action-icon", children: [S("span", { className: "codicon codicon-error" }), S("span", { className: "action-icon-value", children: r })] }), !!o && D("div", { className: "action-icon", children: [S("span", { className: "codicon codicon-warning" }), S("span", { className: "action-icon-value", children: o })] })] })] }); };
var Cv = function (_10) {
    var e = _10.value;
    var _11 = $.useState("codicon-clippy"), t = _11[0], n = _11[1], r = $.useCallback(function () { navigator.clipboard.writeText(e).then(function () { n("codicon-check"), setTimeout(function () { n("codicon-clippy"); }, 3e3); }, function () { n("codicon-close"); }); }, [e]);
    return S("span", { className: "copy-icon codicon ".concat(t), onClick: r });
};
var nh = {}, yt = {};
var Lv = "Á", Av = "á", qv = "Ă", Rv = "ă", Dv = "∾", $v = "∿", Pv = "∾̳", Mv = "Â", Iv = "â", Ov = "´", Uv = "А", Fv = "а", zv = "Æ", Hv = "æ", Bv = "⁡", jv = "𝔄", Vv = "𝔞", Wv = "À", Gv = "à", Qv = "ℵ", Kv = "ℵ", Xv = "Α", Yv = "α", Jv = "Ā", Zv = "ā", ey = "⨿", ty = "&", ny = "&", ry = "⩕", oy = "⩓", sy = "∧", iy = "⩜", ly = "⩘", cy = "⩚", ay = "∠", uy = "⦤", fy = "∠", dy = "⦨", hy = "⦩", py = "⦪", my = "⦫", gy = "⦬", vy = "⦭", yy = "⦮", wy = "⦯", Sy = "∡", Ey = "∟", ky = "⊾", xy = "⦝", Ty = "∢", by = "Å", _y = "⍼", Ny = "Ą", Cy = "ą", Ly = "𝔸", Ay = "𝕒", qy = "⩯", Ry = "≈", Dy = "⩰", $y = "≊", Py = "≋", My = "'", Iy = "⁡", Oy = "≈", Uy = "≊", Fy = "Å", zy = "å", Hy = "𝒜", By = "𝒶", jy = "≔", Vy = "*", Wy = "≈", Gy = "≍", Qy = "Ã", Ky = "ã", Xy = "Ä", Yy = "ä", Jy = "∳", Zy = "⨑", ew = "≌", tw = "϶", nw = "‵", rw = "∽", ow = "⋍", sw = "∖", iw = "⫧", lw = "⊽", cw = "⌅", aw = "⌆", uw = "⌅", fw = "⎵", dw = "⎶", hw = "≌", pw = "Б", mw = "б", gw = "„", vw = "∵", yw = "∵", ww = "∵", Sw = "⦰", Ew = "϶", kw = "ℬ", xw = "ℬ", Tw = "Β", bw = "β", _w = "ℶ", Nw = "≬", Cw = "𝔅", Lw = "𝔟", Aw = "⋂", qw = "◯", Rw = "⋃", Dw = "⨀", $w = "⨁", Pw = "⨂", Mw = "⨆", Iw = "★", Ow = "▽", Uw = "△", Fw = "⨄", zw = "⋁", Hw = "⋀", Bw = "⤍", jw = "⧫", Vw = "▪", Ww = "▴", Gw = "▾", Qw = "◂", Kw = "▸", Xw = "␣", Yw = "▒", Jw = "░", Zw = "▓", e0 = "█", t0 = "=⃥", n0 = "≡⃥", r0 = "⫭", o0 = "⌐", s0 = "𝔹", i0 = "𝕓", l0 = "⊥", c0 = "⊥", a0 = "⋈", u0 = "⧉", f0 = "┐", d0 = "╕", h0 = "╖", p0 = "╗", m0 = "┌", g0 = "╒", v0 = "╓", y0 = "╔", w0 = "─", S0 = "═", E0 = "┬", k0 = "╤", x0 = "╥", T0 = "╦", b0 = "┴", _0 = "╧", N0 = "╨", C0 = "╩", L0 = "⊟", A0 = "⊞", q0 = "⊠", R0 = "┘", D0 = "╛", $0 = "╜", P0 = "╝", M0 = "└", I0 = "╘", O0 = "╙", U0 = "╚", F0 = "│", z0 = "║", H0 = "┼", B0 = "╪", j0 = "╫", V0 = "╬", W0 = "┤", G0 = "╡", Q0 = "╢", K0 = "╣", X0 = "├", Y0 = "╞", J0 = "╟", Z0 = "╠", e1 = "‵", t1 = "˘", n1 = "˘", r1 = "¦", o1 = "𝒷", s1 = "ℬ", i1 = "⁏", l1 = "∽", c1 = "⋍", a1 = "⧅", u1 = "\\", f1 = "⟈", d1 = "•", h1 = "•", p1 = "≎", m1 = "⪮", g1 = "≏", v1 = "≎", y1 = "≏", w1 = "Ć", S1 = "ć", E1 = "⩄", k1 = "⩉", x1 = "⩋", T1 = "∩", b1 = "⋒", _1 = "⩇", N1 = "⩀", C1 = "ⅅ", L1 = "∩︀", A1 = "⁁", q1 = "ˇ", R1 = "ℭ", D1 = "⩍", $1 = "Č", P1 = "č", M1 = "Ç", I1 = "ç", O1 = "Ĉ", U1 = "ĉ", F1 = "∰", z1 = "⩌", H1 = "⩐", B1 = "Ċ", j1 = "ċ", V1 = "¸", W1 = "¸", G1 = "⦲", Q1 = "¢", K1 = "·", X1 = "·", Y1 = "𝔠", J1 = "ℭ", Z1 = "Ч", eS = "ч", tS = "✓", nS = "✓", rS = "Χ", oS = "χ", sS = "ˆ", iS = "≗", lS = "↺", cS = "↻", aS = "⊛", uS = "⊚", fS = "⊝", dS = "⊙", hS = "®", pS = "Ⓢ", mS = "⊖", gS = "⊕", vS = "⊗", yS = "○", wS = "⧃", SS = "≗", ES = "⨐", kS = "⫯", xS = "⧂", TS = "∲", bS = "”", _S = "’", NS = "♣", CS = "♣", LS = ":", AS = "∷", qS = "⩴", RS = "≔", DS = "≔", $S = ",", PS = "@", MS = "∁", IS = "∘", OS = "∁", US = "ℂ", FS = "≅", zS = "⩭", HS = "≡", BS = "∮", jS = "∯", VS = "∮", WS = "𝕔", GS = "ℂ", QS = "∐", KS = "∐", XS = "©", YS = "©", JS = "℗", ZS = "∳", eE = "↵", tE = "✗", nE = "⨯", rE = "𝒞", oE = "𝒸", sE = "⫏", iE = "⫑", lE = "⫐", cE = "⫒", aE = "⋯", uE = "⤸", fE = "⤵", dE = "⋞", hE = "⋟", pE = "↶", mE = "⤽", gE = "⩈", vE = "⩆", yE = "≍", wE = "∪", SE = "⋓", EE = "⩊", kE = "⊍", xE = "⩅", TE = "∪︀", bE = "↷", _E = "⤼", NE = "⋞", CE = "⋟", LE = "⋎", AE = "⋏", qE = "¤", RE = "↶", DE = "↷", $E = "⋎", PE = "⋏", ME = "∲", IE = "∱", OE = "⌭", UE = "†", FE = "‡", zE = "ℸ", HE = "↓", BE = "↡", jE = "⇓", VE = "‐", WE = "⫤", GE = "⊣", QE = "⤏", KE = "˝", XE = "Ď", YE = "ď", JE = "Д", ZE = "д", ek = "‡", tk = "⇊", nk = "ⅅ", rk = "ⅆ", ok = "⤑", sk = "⩷", ik = "°", lk = "∇", ck = "Δ", ak = "δ", uk = "⦱", fk = "⥿", dk = "𝔇", hk = "𝔡", pk = "⥥", mk = "⇃", gk = "⇂", vk = "´", yk = "˙", wk = "˝", Sk = "`", Ek = "˜", kk = "⋄", xk = "⋄", Tk = "⋄", bk = "♦", _k = "♦", Nk = "¨", Ck = "ⅆ", Lk = "ϝ", Ak = "⋲", qk = "÷", Rk = "÷", Dk = "⋇", $k = "⋇", Pk = "Ђ", Mk = "ђ", Ik = "⌞", Ok = "⌍", Uk = "$", Fk = "𝔻", zk = "𝕕", Hk = "¨", Bk = "˙", jk = "⃜", Vk = "≐", Wk = "≑", Gk = "≐", Qk = "∸", Kk = "∔", Xk = "⊡", Yk = "⌆", Jk = "∯", Zk = "¨", ex = "⇓", tx = "⇐", nx = "⇔", rx = "⫤", ox = "⟸", sx = "⟺", ix = "⟹", lx = "⇒", cx = "⊨", ax = "⇑", ux = "⇕", fx = "∥", dx = "⤓", hx = "↓", px = "↓", mx = "⇓", gx = "⇵", vx = "̑", yx = "⇊", wx = "⇃", Sx = "⇂", Ex = "⥐", kx = "⥞", xx = "⥖", Tx = "↽", bx = "⥟", _x = "⥗", Nx = "⇁", Cx = "↧", Lx = "⊤", Ax = "⤐", qx = "⌟", Rx = "⌌", Dx = "𝒟", $x = "𝒹", Px = "Ѕ", Mx = "ѕ", Ix = "⧶", Ox = "Đ", Ux = "đ", Fx = "⋱", zx = "▿", Hx = "▾", Bx = "⇵", jx = "⥯", Vx = "⦦", Wx = "Џ", Gx = "џ", Qx = "⟿", Kx = "É", Xx = "é", Yx = "⩮", Jx = "Ě", Zx = "ě", eT = "Ê", tT = "ê", nT = "≖", rT = "≕", oT = "Э", sT = "э", iT = "⩷", lT = "Ė", cT = "ė", aT = "≑", uT = "ⅇ", fT = "≒", dT = "𝔈", hT = "𝔢", pT = "⪚", mT = "È", gT = "è", vT = "⪖", yT = "⪘", wT = "⪙", ST = "∈", ET = "⏧", kT = "ℓ", xT = "⪕", TT = "⪗", bT = "Ē", _T = "ē", NT = "∅", CT = "∅", LT = "◻", AT = "∅", qT = "▫", RT = " ", DT = " ", $T = " ", PT = "Ŋ", MT = "ŋ", IT = " ", OT = "Ę", UT = "ę", FT = "𝔼", zT = "𝕖", HT = "⋕", BT = "⧣", jT = "⩱", VT = "ε", WT = "Ε", GT = "ε", QT = "ϵ", KT = "≖", XT = "≕", YT = "≂", JT = "⪖", ZT = "⪕", eb = "⩵", tb = "=", nb = "≂", rb = "≟", ob = "⇌", sb = "≡", ib = "⩸", lb = "⧥", cb = "⥱", ab = "≓", ub = "ℯ", fb = "ℰ", db = "≐", hb = "⩳", pb = "≂", mb = "Η", gb = "η", vb = "Ð", yb = "ð", wb = "Ë", Sb = "ë", Eb = "€", kb = "!", xb = "∃", Tb = "∃", bb = "ℰ", _b = "ⅇ", Nb = "ⅇ", Cb = "≒", Lb = "Ф", Ab = "ф", qb = "♀", Rb = "ﬃ", Db = "ﬀ", $b = "ﬄ", Pb = "𝔉", Mb = "𝔣", Ib = "ﬁ", Ob = "◼", Ub = "▪", Fb = "fj", zb = "♭", Hb = "ﬂ", Bb = "▱", jb = "ƒ", Vb = "𝔽", Wb = "𝕗", Gb = "∀", Qb = "∀", Kb = "⋔", Xb = "⫙", Yb = "ℱ", Jb = "⨍", Zb = "½", e_ = "⅓", t_ = "¼", n_ = "⅕", r_ = "⅙", o_ = "⅛", s_ = "⅔", i_ = "⅖", l_ = "¾", c_ = "⅗", a_ = "⅜", u_ = "⅘", f_ = "⅚", d_ = "⅝", h_ = "⅞", p_ = "⁄", m_ = "⌢", g_ = "𝒻", v_ = "ℱ", y_ = "ǵ", w_ = "Γ", S_ = "γ", E_ = "Ϝ", k_ = "ϝ", x_ = "⪆", T_ = "Ğ", b_ = "ğ", __ = "Ģ", N_ = "Ĝ", C_ = "ĝ", L_ = "Г", A_ = "г", q_ = "Ġ", R_ = "ġ", D_ = "≥", $_ = "≧", P_ = "⪌", M_ = "⋛", I_ = "≥", O_ = "≧", U_ = "⩾", F_ = "⪩", z_ = "⩾", H_ = "⪀", B_ = "⪂", j_ = "⪄", V_ = "⋛︀", W_ = "⪔", G_ = "𝔊", Q_ = "𝔤", K_ = "≫", X_ = "⋙", Y_ = "⋙", J_ = "ℷ", Z_ = "Ѓ", eN = "ѓ", tN = "⪥", nN = "≷", rN = "⪒", oN = "⪤", sN = "⪊", iN = "⪊", lN = "⪈", cN = "≩", aN = "⪈", uN = "≩", fN = "⋧", dN = "𝔾", hN = "𝕘", pN = "`", mN = "≥", gN = "⋛", vN = "≧", yN = "⪢", wN = "≷", SN = "⩾", EN = "≳", kN = "𝒢", xN = "ℊ", TN = "≳", bN = "⪎", _N = "⪐", NN = "⪧", CN = "⩺", LN = ">", AN = ">", qN = "≫", RN = "⋗", DN = "⦕", $N = "⩼", PN = "⪆", MN = "⥸", IN = "⋗", ON = "⋛", UN = "⪌", FN = "≷", zN = "≳", HN = "≩︀", BN = "≩︀", jN = "ˇ", VN = " ", WN = "½", GN = "ℋ", QN = "Ъ", KN = "ъ", XN = "⥈", YN = "↔", JN = "⇔", ZN = "↭", eC = "^", tC = "ℏ", nC = "Ĥ", rC = "ĥ", oC = "♥", sC = "♥", iC = "…", lC = "⊹", cC = "𝔥", aC = "ℌ", uC = "ℋ", fC = "⤥", dC = "⤦", hC = "⇿", pC = "∻", mC = "↩", gC = "↪", vC = "𝕙", yC = "ℍ", wC = "―", SC = "─", EC = "𝒽", kC = "ℋ", xC = "ℏ", TC = "Ħ", bC = "ħ", _C = "≎", NC = "≏", CC = "⁃", LC = "‐", AC = "Í", qC = "í", RC = "⁣", DC = "Î", $C = "î", PC = "И", MC = "и", IC = "İ", OC = "Е", UC = "е", FC = "¡", zC = "⇔", HC = "𝔦", BC = "ℑ", jC = "Ì", VC = "ì", WC = "ⅈ", GC = "⨌", QC = "∭", KC = "⧜", XC = "℩", YC = "Ĳ", JC = "ĳ", ZC = "Ī", eL = "ī", tL = "ℑ", nL = "ⅈ", rL = "ℐ", oL = "ℑ", sL = "ı", iL = "ℑ", lL = "⊷", cL = "Ƶ", aL = "⇒", uL = "℅", fL = "∞", dL = "⧝", hL = "ı", pL = "⊺", mL = "∫", gL = "∬", vL = "ℤ", yL = "∫", wL = "⊺", SL = "⋂", EL = "⨗", kL = "⨼", xL = "⁣", TL = "⁢", bL = "Ё", _L = "ё", NL = "Į", CL = "į", LL = "𝕀", AL = "𝕚", qL = "Ι", RL = "ι", DL = "⨼", $L = "¿", PL = "𝒾", ML = "ℐ", IL = "∈", OL = "⋵", UL = "⋹", FL = "⋴", zL = "⋳", HL = "∈", BL = "⁢", jL = "Ĩ", VL = "ĩ", WL = "І", GL = "і", QL = "Ï", KL = "ï", XL = "Ĵ", YL = "ĵ", JL = "Й", ZL = "й", eA = "𝔍", tA = "𝔧", nA = "ȷ", rA = "𝕁", oA = "𝕛", sA = "𝒥", iA = "𝒿", lA = "Ј", cA = "ј", aA = "Є", uA = "є", fA = "Κ", dA = "κ", hA = "ϰ", pA = "Ķ", mA = "ķ", gA = "К", vA = "к", yA = "𝔎", wA = "𝔨", SA = "ĸ", EA = "Х", kA = "х", xA = "Ќ", TA = "ќ", bA = "𝕂", _A = "𝕜", NA = "𝒦", CA = "𝓀", LA = "⇚", AA = "Ĺ", qA = "ĺ", RA = "⦴", DA = "ℒ", $A = "Λ", PA = "λ", MA = "⟨", IA = "⟪", OA = "⦑", UA = "⟨", FA = "⪅", zA = "ℒ", HA = "«", BA = "⇤", jA = "⤟", VA = "←", WA = "↞", GA = "⇐", QA = "⤝", KA = "↩", XA = "↫", YA = "⤹", JA = "⥳", ZA = "↢", eq = "⤙", tq = "⤛", nq = "⪫", rq = "⪭", oq = "⪭︀", sq = "⤌", iq = "⤎", lq = "❲", cq = "{", aq = "[", uq = "⦋", fq = "⦏", dq = "⦍", hq = "Ľ", pq = "ľ", mq = "Ļ", gq = "ļ", vq = "⌈", yq = "{", wq = "Л", Sq = "л", Eq = "⤶", kq = "“", xq = "„", Tq = "⥧", bq = "⥋", _q = "↲", Nq = "≤", Cq = "≦", Lq = "⟨", Aq = "⇤", qq = "←", Rq = "←", Dq = "⇐", $q = "⇆", Pq = "↢", Mq = "⌈", Iq = "⟦", Oq = "⥡", Uq = "⥙", Fq = "⇃", zq = "⌊", Hq = "↽", Bq = "↼", jq = "⇇", Vq = "↔", Wq = "↔", Gq = "⇔", Qq = "⇆", Kq = "⇋", Xq = "↭", Yq = "⥎", Jq = "↤", Zq = "⊣", eR = "⥚", tR = "⋋", nR = "⧏", rR = "⊲", oR = "⊴", sR = "⥑", iR = "⥠", lR = "⥘", cR = "↿", aR = "⥒", uR = "↼", fR = "⪋", dR = "⋚", hR = "≤", pR = "≦", mR = "⩽", gR = "⪨", vR = "⩽", yR = "⩿", wR = "⪁", SR = "⪃", ER = "⋚︀", kR = "⪓", xR = "⪅", TR = "⋖", bR = "⋚", _R = "⪋", NR = "⋚", CR = "≦", LR = "≶", AR = "≶", qR = "⪡", RR = "≲", DR = "⩽", $R = "≲", PR = "⥼", MR = "⌊", IR = "𝔏", OR = "𝔩", UR = "≶", FR = "⪑", zR = "⥢", HR = "↽", BR = "↼", jR = "⥪", VR = "▄", WR = "Љ", GR = "љ", QR = "⇇", KR = "≪", XR = "⋘", YR = "⌞", JR = "⇚", ZR = "⥫", e2 = "◺", t2 = "Ŀ", n2 = "ŀ", r2 = "⎰", o2 = "⎰", s2 = "⪉", i2 = "⪉", l2 = "⪇", c2 = "≨", a2 = "⪇", u2 = "≨", f2 = "⋦", d2 = "⟬", h2 = "⇽", p2 = "⟦", m2 = "⟵", g2 = "⟵", v2 = "⟸", y2 = "⟷", w2 = "⟷", S2 = "⟺", E2 = "⟼", k2 = "⟶", x2 = "⟶", T2 = "⟹", b2 = "↫", _2 = "↬", N2 = "⦅", C2 = "𝕃", L2 = "𝕝", A2 = "⨭", q2 = "⨴", R2 = "∗", D2 = "_", $2 = "↙", P2 = "↘", M2 = "◊", I2 = "◊", O2 = "⧫", U2 = "(", F2 = "⦓", z2 = "⇆", H2 = "⌟", B2 = "⇋", j2 = "⥭", V2 = "‎", W2 = "⊿", G2 = "‹", Q2 = "𝓁", K2 = "ℒ", X2 = "↰", Y2 = "↰", J2 = "≲", Z2 = "⪍", eD = "⪏", tD = "[", nD = "‘", rD = "‚", oD = "Ł", sD = "ł", iD = "⪦", lD = "⩹", cD = "<", aD = "<", uD = "≪", fD = "⋖", dD = "⋋", hD = "⋉", pD = "⥶", mD = "⩻", gD = "◃", vD = "⊴", yD = "◂", wD = "⦖", SD = "⥊", ED = "⥦", kD = "≨︀", xD = "≨︀", TD = "¯", bD = "♂", _D = "✠", ND = "✠", CD = "↦", LD = "↦", AD = "↧", qD = "↤", RD = "↥", DD = "▮", $D = "⨩", PD = "М", MD = "м", ID = "—", OD = "∺", UD = "∡", FD = " ", zD = "ℳ", HD = "𝔐", BD = "𝔪", jD = "℧", VD = "µ", WD = "*", GD = "⫰", QD = "∣", KD = "·", XD = "⊟", YD = "−", JD = "∸", ZD = "⨪", e$ = "∓", t$ = "⫛", n$ = "…", r$ = "∓", o$ = "⊧", s$ = "𝕄", i$ = "𝕞", l$ = "∓", c$ = "𝓂", a$ = "ℳ", u$ = "∾", f$ = "Μ", d$ = "μ", h$ = "⊸", p$ = "⊸", m$ = "∇", g$ = "Ń", v$ = "ń", y$ = "∠⃒", w$ = "≉", S$ = "⩰̸", E$ = "≋̸", k$ = "ŉ", x$ = "≉", T$ = "♮", b$ = "ℕ", _$ = "♮", N$ = " ", C$ = "≎̸", L$ = "≏̸", A$ = "⩃", q$ = "Ň", R$ = "ň", D$ = "Ņ", $$ = "ņ", P$ = "≇", M$ = "⩭̸", I$ = "⩂", O$ = "Н", U$ = "н", F$ = "–", z$ = "⤤", H$ = "↗", B$ = "⇗", j$ = "↗", V$ = "≠", W$ = "≐̸", G$ = "​", Q$ = "​", K$ = "​", X$ = "​", Y$ = "≢", J$ = "⤨", Z$ = "≂̸", eP = "≫", tP = "≪", nP = "\n", rP = "∄", oP = "∄", sP = "𝔑", iP = "𝔫", lP = "≧̸", cP = "≱", aP = "≱", uP = "≧̸", fP = "⩾̸", dP = "⩾̸", hP = "⋙̸", pP = "≵", mP = "≫⃒", gP = "≯", vP = "≯", yP = "≫̸", wP = "↮", SP = "⇎", EP = "⫲", kP = "∋", xP = "⋼", TP = "⋺", bP = "∋", _P = "Њ", NP = "њ", CP = "↚", LP = "⇍", AP = "‥", qP = "≦̸", RP = "≰", DP = "↚", $P = "⇍", PP = "↮", MP = "⇎", IP = "≰", OP = "≦̸", UP = "⩽̸", FP = "⩽̸", zP = "≮", HP = "⋘̸", BP = "≴", jP = "≪⃒", VP = "≮", WP = "⋪", GP = "⋬", QP = "≪̸", KP = "∤", XP = "⁠", YP = " ", JP = "𝕟", ZP = "ℕ", eM = "⫬", tM = "¬", nM = "≢", rM = "≭", oM = "∦", sM = "∉", iM = "≠", lM = "≂̸", cM = "∄", aM = "≯", uM = "≱", fM = "≧̸", dM = "≫̸", hM = "≹", pM = "⩾̸", mM = "≵", gM = "≎̸", vM = "≏̸", yM = "∉", wM = "⋵̸", SM = "⋹̸", EM = "∉", kM = "⋷", xM = "⋶", TM = "⧏̸", bM = "⋪", _M = "⋬", NM = "≮", CM = "≰", LM = "≸", AM = "≪̸", qM = "⩽̸", RM = "≴", DM = "⪢̸", $M = "⪡̸", PM = "∌", MM = "∌", IM = "⋾", OM = "⋽", UM = "⊀", FM = "⪯̸", zM = "⋠", HM = "∌", BM = "⧐̸", jM = "⋫", VM = "⋭", WM = "⊏̸", GM = "⋢", QM = "⊐̸", KM = "⋣", XM = "⊂⃒", YM = "⊈", JM = "⊁", ZM = "⪰̸", eI = "⋡", tI = "≿̸", nI = "⊃⃒", rI = "⊉", oI = "≁", sI = "≄", iI = "≇", lI = "≉", cI = "∤", aI = "∦", uI = "∦", fI = "⫽⃥", dI = "∂̸", hI = "⨔", pI = "⊀", mI = "⋠", gI = "⊀", vI = "⪯̸", yI = "⪯̸", wI = "⤳̸", SI = "↛", EI = "⇏", kI = "↝̸", xI = "↛", TI = "⇏", bI = "⋫", _I = "⋭", NI = "⊁", CI = "⋡", LI = "⪰̸", AI = "𝒩", qI = "𝓃", RI = "∤", DI = "∦", $I = "≁", PI = "≄", MI = "≄", II = "∤", OI = "∦", UI = "⋢", FI = "⋣", zI = "⊄", HI = "⫅̸", BI = "⊈", jI = "⊂⃒", VI = "⊈", WI = "⫅̸", GI = "⊁", QI = "⪰̸", KI = "⊅", XI = "⫆̸", YI = "⊉", JI = "⊃⃒", ZI = "⊉", eO = "⫆̸", tO = "≹", nO = "Ñ", rO = "ñ", oO = "≸", sO = "⋪", iO = "⋬", lO = "⋫", cO = "⋭", aO = "Ν", uO = "ν", fO = "#", dO = "№", hO = " ", pO = "≍⃒", mO = "⊬", gO = "⊭", vO = "⊮", yO = "⊯", wO = "≥⃒", SO = ">⃒", EO = "⤄", kO = "⧞", xO = "⤂", TO = "≤⃒", bO = "<⃒", _O = "⊴⃒", NO = "⤃", CO = "⊵⃒", LO = "∼⃒", AO = "⤣", qO = "↖", RO = "⇖", DO = "↖", $O = "⤧", PO = "Ó", MO = "ó", IO = "⊛", OO = "Ô", UO = "ô", FO = "⊚", zO = "О", HO = "о", BO = "⊝", jO = "Ő", VO = "ő", WO = "⨸", GO = "⊙", QO = "⦼", KO = "Œ", XO = "œ", YO = "⦿", JO = "𝔒", ZO = "𝔬", e3 = "˛", t3 = "Ò", n3 = "ò", r3 = "⧁", o3 = "⦵", s3 = "Ω", i3 = "∮", l3 = "↺", c3 = "⦾", a3 = "⦻", u3 = "‾", f3 = "⧀", d3 = "Ō", h3 = "ō", p3 = "Ω", m3 = "ω", g3 = "Ο", v3 = "ο", y3 = "⦶", w3 = "⊖", S3 = "𝕆", E3 = "𝕠", k3 = "⦷", x3 = "“", T3 = "‘", b3 = "⦹", _3 = "⊕", N3 = "↻", C3 = "⩔", L3 = "∨", A3 = "⩝", q3 = "ℴ", R3 = "ℴ", D3 = "ª", $3 = "º", P3 = "⊶", M3 = "⩖", I3 = "⩗", O3 = "⩛", U3 = "Ⓢ", F3 = "𝒪", z3 = "ℴ", H3 = "Ø", B3 = "ø", j3 = "⊘", V3 = "Õ", W3 = "õ", G3 = "⨶", Q3 = "⨷", K3 = "⊗", X3 = "Ö", Y3 = "ö", J3 = "⌽", Z3 = "‾", e4 = "⏞", t4 = "⎴", n4 = "⏜", r4 = "¶", o4 = "∥", s4 = "∥", i4 = "⫳", l4 = "⫽", c4 = "∂", a4 = "∂", u4 = "П", f4 = "п", d4 = "%", h4 = ".", p4 = "‰", m4 = "⊥", g4 = "‱", v4 = "𝔓", y4 = "𝔭", w4 = "Φ", S4 = "φ", E4 = "ϕ", k4 = "ℳ", x4 = "☎", T4 = "Π", b4 = "π", _4 = "⋔", N4 = "ϖ", C4 = "ℏ", L4 = "ℎ", A4 = "ℏ", q4 = "⨣", R4 = "⊞", D4 = "⨢", $4 = "+", P4 = "∔", M4 = "⨥", I4 = "⩲", O4 = "±", U4 = "±", F4 = "⨦", z4 = "⨧", H4 = "±", B4 = "ℌ", j4 = "⨕", V4 = "𝕡", W4 = "ℙ", G4 = "£", Q4 = "⪷", K4 = "⪻", X4 = "≺", Y4 = "≼", J4 = "⪷", Z4 = "≺", e5 = "≼", t5 = "≺", n5 = "⪯", r5 = "≼", o5 = "≾", s5 = "⪯", i5 = "⪹", l5 = "⪵", c5 = "⋨", a5 = "⪯", u5 = "⪳", f5 = "≾", d5 = "′", h5 = "″", p5 = "ℙ", m5 = "⪹", g5 = "⪵", v5 = "⋨", y5 = "∏", w5 = "∏", S5 = "⌮", E5 = "⌒", k5 = "⌓", x5 = "∝", T5 = "∝", b5 = "∷", _5 = "∝", N5 = "≾", C5 = "⊰", L5 = "𝒫", A5 = "𝓅", q5 = "Ψ", R5 = "ψ", D5 = " ", $5 = "𝔔", P5 = "𝔮", M5 = "⨌", I5 = "𝕢", O5 = "ℚ", U5 = "⁗", F5 = "𝒬", z5 = "𝓆", H5 = "ℍ", B5 = "⨖", j5 = "?", V5 = "≟", W5 = '"', G5 = '"', Q5 = "⇛", K5 = "∽̱", X5 = "Ŕ", Y5 = "ŕ", J5 = "√", Z5 = "⦳", eU = "⟩", tU = "⟫", nU = "⦒", rU = "⦥", oU = "⟩", sU = "»", iU = "⥵", lU = "⇥", cU = "⤠", aU = "⤳", uU = "→", fU = "↠", dU = "⇒", hU = "⤞", pU = "↪", mU = "↬", gU = "⥅", vU = "⥴", yU = "⤖", wU = "↣", SU = "↝", EU = "⤚", kU = "⤜", xU = "∶", TU = "ℚ", bU = "⤍", _U = "⤏", NU = "⤐", CU = "❳", LU = "}", AU = "]", qU = "⦌", RU = "⦎", DU = "⦐", $U = "Ř", PU = "ř", MU = "Ŗ", IU = "ŗ", OU = "⌉", UU = "}", FU = "Р", zU = "р", HU = "⤷", BU = "⥩", jU = "”", VU = "”", WU = "↳", GU = "ℜ", QU = "ℛ", KU = "ℜ", XU = "ℝ", YU = "ℜ", JU = "▭", ZU = "®", eF = "®", tF = "∋", nF = "⇋", rF = "⥯", oF = "⥽", sF = "⌋", iF = "𝔯", lF = "ℜ", cF = "⥤", aF = "⇁", uF = "⇀", fF = "⥬", dF = "Ρ", hF = "ρ", pF = "ϱ", mF = "⟩", gF = "⇥", vF = "→", yF = "→", wF = "⇒", SF = "⇄", EF = "↣", kF = "⌉", xF = "⟧", TF = "⥝", bF = "⥕", _F = "⇂", NF = "⌋", CF = "⇁", LF = "⇀", AF = "⇄", qF = "⇌", RF = "⇉", DF = "↝", $F = "↦", PF = "⊢", MF = "⥛", IF = "⋌", OF = "⧐", UF = "⊳", FF = "⊵", zF = "⥏", HF = "⥜", BF = "⥔", jF = "↾", VF = "⥓", WF = "⇀", GF = "˚", QF = "≓", KF = "⇄", XF = "⇌", YF = "‏", JF = "⎱", ZF = "⎱", ez = "⫮", tz = "⟭", nz = "⇾", rz = "⟧", oz = "⦆", sz = "𝕣", iz = "ℝ", lz = "⨮", cz = "⨵", az = "⥰", uz = ")", fz = "⦔", dz = "⨒", hz = "⇉", pz = "⇛", mz = "›", gz = "𝓇", vz = "ℛ", yz = "↱", wz = "↱", Sz = "]", Ez = "’", kz = "’", xz = "⋌", Tz = "⋊", bz = "▹", _z = "⊵", Nz = "▸", Cz = "⧎", Lz = "⧴", Az = "⥨", qz = "℞", Rz = "Ś", Dz = "ś", $z = "‚", Pz = "⪸", Mz = "Š", Iz = "š", Oz = "⪼", Uz = "≻", Fz = "≽", zz = "⪰", Hz = "⪴", Bz = "Ş", jz = "ş", Vz = "Ŝ", Wz = "ŝ", Gz = "⪺", Qz = "⪶", Kz = "⋩", Xz = "⨓", Yz = "≿", Jz = "С", Zz = "с", e8 = "⊡", t8 = "⋅", n8 = "⩦", r8 = "⤥", o8 = "↘", s8 = "⇘", i8 = "↘", l8 = "§", c8 = ";", a8 = "⤩", u8 = "∖", f8 = "∖", d8 = "✶", h8 = "𝔖", p8 = "𝔰", m8 = "⌢", g8 = "♯", v8 = "Щ", y8 = "щ", w8 = "Ш", S8 = "ш", E8 = "↓", k8 = "←", x8 = "∣", T8 = "∥", b8 = "→", _8 = "↑", N8 = "­", C8 = "Σ", L8 = "σ", A8 = "ς", q8 = "ς", R8 = "∼", D8 = "⩪", $8 = "≃", P8 = "≃", M8 = "⪞", I8 = "⪠", O8 = "⪝", U8 = "⪟", F8 = "≆", z8 = "⨤", H8 = "⥲", B8 = "←", j8 = "∘", V8 = "∖", W8 = "⨳", G8 = "⧤", Q8 = "∣", K8 = "⌣", X8 = "⪪", Y8 = "⪬", J8 = "⪬︀", Z8 = "Ь", eH = "ь", tH = "⌿", nH = "⧄", rH = "/", oH = "𝕊", sH = "𝕤", iH = "♠", lH = "♠", cH = "∥", aH = "⊓", uH = "⊓︀", fH = "⊔", dH = "⊔︀", hH = "√", pH = "⊏", mH = "⊑", gH = "⊏", vH = "⊑", yH = "⊐", wH = "⊒", SH = "⊐", EH = "⊒", kH = "□", xH = "□", TH = "⊓", bH = "⊏", _H = "⊑", NH = "⊐", CH = "⊒", LH = "⊔", AH = "▪", qH = "□", RH = "▪", DH = "→", $H = "𝒮", PH = "𝓈", MH = "∖", IH = "⌣", OH = "⋆", UH = "⋆", FH = "☆", zH = "★", HH = "ϵ", BH = "ϕ", jH = "¯", VH = "⊂", WH = "⋐", GH = "⪽", QH = "⫅", KH = "⊆", XH = "⫃", YH = "⫁", JH = "⫋", ZH = "⊊", e6 = "⪿", t6 = "⥹", n6 = "⊂", r6 = "⋐", o6 = "⊆", s6 = "⫅", i6 = "⊆", l6 = "⊊", c6 = "⫋", a6 = "⫇", u6 = "⫕", f6 = "⫓", d6 = "⪸", h6 = "≻", p6 = "≽", m6 = "≻", g6 = "⪰", v6 = "≽", y6 = "≿", w6 = "⪰", S6 = "⪺", E6 = "⪶", k6 = "⋩", x6 = "≿", T6 = "∋", b6 = "∑", _6 = "∑", N6 = "♪", C6 = "¹", L6 = "²", A6 = "³", q6 = "⊃", R6 = "⋑", D6 = "⪾", $6 = "⫘", P6 = "⫆", M6 = "⊇", I6 = "⫄", O6 = "⊃", U6 = "⊇", F6 = "⟉", z6 = "⫗", H6 = "⥻", B6 = "⫂", j6 = "⫌", V6 = "⊋", W6 = "⫀", G6 = "⊃", Q6 = "⋑", K6 = "⊇", X6 = "⫆", Y6 = "⊋", J6 = "⫌", Z6 = "⫈", eB = "⫔", tB = "⫖", nB = "⤦", rB = "↙", oB = "⇙", sB = "↙", iB = "⤪", lB = "ß", cB = "	", aB = "⌖", uB = "Τ", fB = "τ", dB = "⎴", hB = "Ť", pB = "ť", mB = "Ţ", gB = "ţ", vB = "Т", yB = "т", wB = "⃛", SB = "⌕", EB = "𝔗", kB = "𝔱", xB = "∴", TB = "∴", bB = "∴", _B = "Θ", NB = "θ", CB = "ϑ", LB = "ϑ", AB = "≈", qB = "∼", RB = "  ", DB = " ", $B = " ", PB = "≈", MB = "∼", IB = "Þ", OB = "þ", UB = "˜", FB = "∼", zB = "≃", HB = "≅", BB = "≈", jB = "⨱", VB = "⊠", WB = "×", GB = "⨰", QB = "∭", KB = "⤨", XB = "⌶", YB = "⫱", JB = "⊤", ZB = "𝕋", ej = "𝕥", tj = "⫚", nj = "⤩", rj = "‴", oj = "™", sj = "™", ij = "▵", lj = "▿", cj = "◃", aj = "⊴", uj = "≜", fj = "▹", dj = "⊵", hj = "◬", pj = "≜", mj = "⨺", gj = "⃛", vj = "⨹", yj = "⧍", wj = "⨻", Sj = "⏢", Ej = "𝒯", kj = "𝓉", xj = "Ц", Tj = "ц", bj = "Ћ", _j = "ћ", Nj = "Ŧ", Cj = "ŧ", Lj = "≬", Aj = "↞", qj = "↠", Rj = "Ú", Dj = "ú", $j = "↑", Pj = "↟", Mj = "⇑", Ij = "⥉", Oj = "Ў", Uj = "ў", Fj = "Ŭ", zj = "ŭ", Hj = "Û", Bj = "û", jj = "У", Vj = "у", Wj = "⇅", Gj = "Ű", Qj = "ű", Kj = "⥮", Xj = "⥾", Yj = "𝔘", Jj = "𝔲", Zj = "Ù", eV = "ù", tV = "⥣", nV = "↿", rV = "↾", oV = "▀", sV = "⌜", iV = "⌜", lV = "⌏", cV = "◸", aV = "Ū", uV = "ū", fV = "¨", dV = "_", hV = "⏟", pV = "⎵", mV = "⏝", gV = "⋃", vV = "⊎", yV = "Ų", wV = "ų", SV = "𝕌", EV = "𝕦", kV = "⤒", xV = "↑", TV = "↑", bV = "⇑", _V = "⇅", NV = "↕", CV = "↕", LV = "⇕", AV = "⥮", qV = "↿", RV = "↾", DV = "⊎", $V = "↖", PV = "↗", MV = "υ", IV = "ϒ", OV = "ϒ", UV = "Υ", FV = "υ", zV = "↥", HV = "⊥", BV = "⇈", jV = "⌝", VV = "⌝", WV = "⌎", GV = "Ů", QV = "ů", KV = "◹", XV = "𝒰", YV = "𝓊", JV = "⋰", ZV = "Ũ", e9 = "ũ", t9 = "▵", n9 = "▴", r9 = "⇈", o9 = "Ü", s9 = "ü", i9 = "⦧", l9 = "⦜", c9 = "ϵ", a9 = "ϰ", u9 = "∅", f9 = "ϕ", d9 = "ϖ", h9 = "∝", p9 = "↕", m9 = "⇕", g9 = "ϱ", v9 = "ς", y9 = "⊊︀", w9 = "⫋︀", S9 = "⊋︀", E9 = "⫌︀", k9 = "ϑ", x9 = "⊲", T9 = "⊳", b9 = "⫨", _9 = "⫫", N9 = "⫩", C9 = "В", L9 = "в", A9 = "⊢", q9 = "⊨", R9 = "⊩", D9 = "⊫", $9 = "⫦", P9 = "⊻", M9 = "∨", I9 = "⋁", O9 = "≚", U9 = "⋮", F9 = "|", z9 = "‖", H9 = "|", B9 = "‖", j9 = "∣", V9 = "|", W9 = "❘", G9 = "≀", Q9 = " ", K9 = "𝔙", X9 = "𝔳", Y9 = "⊲", J9 = "⊂⃒", Z9 = "⊃⃒", eW = "𝕍", tW = "𝕧", nW = "∝", rW = "⊳", oW = "𝒱", sW = "𝓋", iW = "⫋︀", lW = "⊊︀", cW = "⫌︀", aW = "⊋︀", uW = "⊪", fW = "⦚", dW = "Ŵ", hW = "ŵ", pW = "⩟", mW = "∧", gW = "⋀", vW = "≙", yW = "℘", wW = "𝔚", SW = "𝔴", EW = "𝕎", kW = "𝕨", xW = "℘", TW = "≀", bW = "≀", _W = "𝒲", NW = "𝓌", CW = "⋂", LW = "◯", AW = "⋃", qW = "▽", RW = "𝔛", DW = "𝔵", $W = "⟷", PW = "⟺", MW = "Ξ", IW = "ξ", OW = "⟵", UW = "⟸", FW = "⟼", zW = "⋻", HW = "⨀", BW = "𝕏", jW = "𝕩", VW = "⨁", WW = "⨂", GW = "⟶", QW = "⟹", KW = "𝒳", XW = "𝓍", YW = "⨆", JW = "⨄", ZW = "△", e7 = "⋁", t7 = "⋀", n7 = "Ý", r7 = "ý", o7 = "Я", s7 = "я", i7 = "Ŷ", l7 = "ŷ", c7 = "Ы", a7 = "ы", u7 = "¥", f7 = "𝔜", d7 = "𝔶", h7 = "Ї", p7 = "ї", m7 = "𝕐", g7 = "𝕪", v7 = "𝒴", y7 = "𝓎", w7 = "Ю", S7 = "ю", E7 = "ÿ", k7 = "Ÿ", x7 = "Ź", T7 = "ź", b7 = "Ž", _7 = "ž", N7 = "З", C7 = "з", L7 = "Ż", A7 = "ż", q7 = "ℨ", R7 = "​", D7 = "Ζ", $7 = "ζ", P7 = "𝔷", M7 = "ℨ", I7 = "Ж", O7 = "ж", U7 = "⇝", F7 = "𝕫", z7 = "ℤ", H7 = "𝒵", B7 = "𝓏", j7 = "‍", V7 = "‌", rh = { Aacute: Lv, aacute: Av, Abreve: qv, abreve: Rv, ac: Dv, acd: $v, acE: Pv, Acirc: Mv, acirc: Iv, acute: Ov, Acy: Uv, acy: Fv, AElig: zv, aelig: Hv, af: Bv, Afr: jv, afr: Vv, Agrave: Wv, agrave: Gv, alefsym: Qv, aleph: Kv, Alpha: Xv, alpha: Yv, Amacr: Jv, amacr: Zv, amalg: ey, amp: ty, AMP: ny, andand: ry, And: oy, and: sy, andd: iy, andslope: ly, andv: cy, ang: ay, ange: uy, angle: fy, angmsdaa: dy, angmsdab: hy, angmsdac: py, angmsdad: my, angmsdae: gy, angmsdaf: vy, angmsdag: yy, angmsdah: wy, angmsd: Sy, angrt: Ey, angrtvb: ky, angrtvbd: xy, angsph: Ty, angst: by, angzarr: _y, Aogon: Ny, aogon: Cy, Aopf: Ly, aopf: Ay, apacir: qy, ap: Ry, apE: Dy, ape: $y, apid: Py, apos: My, ApplyFunction: Iy, approx: Oy, approxeq: Uy, Aring: Fy, aring: zy, Ascr: Hy, ascr: By, Assign: jy, ast: Vy, asymp: Wy, asympeq: Gy, Atilde: Qy, atilde: Ky, Auml: Xy, auml: Yy, awconint: Jy, awint: Zy, backcong: ew, backepsilon: tw, backprime: nw, backsim: rw, backsimeq: ow, Backslash: sw, Barv: iw, barvee: lw, barwed: cw, Barwed: aw, barwedge: uw, bbrk: fw, bbrktbrk: dw, bcong: hw, Bcy: pw, bcy: mw, bdquo: gw, becaus: vw, because: yw, Because: ww, bemptyv: Sw, bepsi: Ew, bernou: kw, Bernoullis: xw, Beta: Tw, beta: bw, beth: _w, between: Nw, Bfr: Cw, bfr: Lw, bigcap: Aw, bigcirc: qw, bigcup: Rw, bigodot: Dw, bigoplus: $w, bigotimes: Pw, bigsqcup: Mw, bigstar: Iw, bigtriangledown: Ow, bigtriangleup: Uw, biguplus: Fw, bigvee: zw, bigwedge: Hw, bkarow: Bw, blacklozenge: jw, blacksquare: Vw, blacktriangle: Ww, blacktriangledown: Gw, blacktriangleleft: Qw, blacktriangleright: Kw, blank: Xw, blk12: Yw, blk14: Jw, blk34: Zw, block: e0, bne: t0, bnequiv: n0, bNot: r0, bnot: o0, Bopf: s0, bopf: i0, bot: l0, bottom: c0, bowtie: a0, boxbox: u0, boxdl: f0, boxdL: d0, boxDl: h0, boxDL: p0, boxdr: m0, boxdR: g0, boxDr: v0, boxDR: y0, boxh: w0, boxH: S0, boxhd: E0, boxHd: k0, boxhD: x0, boxHD: T0, boxhu: b0, boxHu: _0, boxhU: N0, boxHU: C0, boxminus: L0, boxplus: A0, boxtimes: q0, boxul: R0, boxuL: D0, boxUl: $0, boxUL: P0, boxur: M0, boxuR: I0, boxUr: O0, boxUR: U0, boxv: F0, boxV: z0, boxvh: H0, boxvH: B0, boxVh: j0, boxVH: V0, boxvl: W0, boxvL: G0, boxVl: Q0, boxVL: K0, boxvr: X0, boxvR: Y0, boxVr: J0, boxVR: Z0, bprime: e1, breve: t1, Breve: n1, brvbar: r1, bscr: o1, Bscr: s1, bsemi: i1, bsim: l1, bsime: c1, bsolb: a1, bsol: u1, bsolhsub: f1, bull: d1, bullet: h1, bump: p1, bumpE: m1, bumpe: g1, Bumpeq: v1, bumpeq: y1, Cacute: w1, cacute: S1, capand: E1, capbrcup: k1, capcap: x1, cap: T1, Cap: b1, capcup: _1, capdot: N1, CapitalDifferentialD: C1, caps: L1, caret: A1, caron: q1, Cayleys: R1, ccaps: D1, Ccaron: $1, ccaron: P1, Ccedil: M1, ccedil: I1, Ccirc: O1, ccirc: U1, Cconint: F1, ccups: z1, ccupssm: H1, Cdot: B1, cdot: j1, cedil: V1, Cedilla: W1, cemptyv: G1, cent: Q1, centerdot: K1, CenterDot: X1, cfr: Y1, Cfr: J1, CHcy: Z1, chcy: eS, check: tS, checkmark: nS, Chi: rS, chi: oS, circ: sS, circeq: iS, circlearrowleft: lS, circlearrowright: cS, circledast: aS, circledcirc: uS, circleddash: fS, CircleDot: dS, circledR: hS, circledS: pS, CircleMinus: mS, CirclePlus: gS, CircleTimes: vS, cir: yS, cirE: wS, cire: SS, cirfnint: ES, cirmid: kS, cirscir: xS, ClockwiseContourIntegral: TS, CloseCurlyDoubleQuote: bS, CloseCurlyQuote: _S, clubs: NS, clubsuit: CS, colon: LS, Colon: AS, Colone: qS, colone: RS, coloneq: DS, comma: $S, commat: PS, comp: MS, compfn: IS, complement: OS, complexes: US, cong: FS, congdot: zS, Congruent: HS, conint: BS, Conint: jS, ContourIntegral: VS, copf: WS, Copf: GS, coprod: QS, Coproduct: KS, copy: XS, COPY: YS, copysr: JS, CounterClockwiseContourIntegral: ZS, crarr: eE, cross: tE, Cross: nE, Cscr: rE, cscr: oE, csub: sE, csube: iE, csup: lE, csupe: cE, ctdot: aE, cudarrl: uE, cudarrr: fE, cuepr: dE, cuesc: hE, cularr: pE, cularrp: mE, cupbrcap: gE, cupcap: vE, CupCap: yE, cup: wE, Cup: SE, cupcup: EE, cupdot: kE, cupor: xE, cups: TE, curarr: bE, curarrm: _E, curlyeqprec: NE, curlyeqsucc: CE, curlyvee: LE, curlywedge: AE, curren: qE, curvearrowleft: RE, curvearrowright: DE, cuvee: $E, cuwed: PE, cwconint: ME, cwint: IE, cylcty: OE, dagger: UE, Dagger: FE, daleth: zE, darr: HE, Darr: BE, dArr: jE, dash: VE, Dashv: WE, dashv: GE, dbkarow: QE, dblac: KE, Dcaron: XE, dcaron: YE, Dcy: JE, dcy: ZE, ddagger: ek, ddarr: tk, DD: nk, dd: rk, DDotrahd: ok, ddotseq: sk, deg: ik, Del: lk, Delta: ck, delta: ak, demptyv: uk, dfisht: fk, Dfr: dk, dfr: hk, dHar: pk, dharl: mk, dharr: gk, DiacriticalAcute: vk, DiacriticalDot: yk, DiacriticalDoubleAcute: wk, DiacriticalGrave: Sk, DiacriticalTilde: Ek, diam: kk, diamond: xk, Diamond: Tk, diamondsuit: bk, diams: _k, die: Nk, DifferentialD: Ck, digamma: Lk, disin: Ak, div: qk, divide: Rk, divideontimes: Dk, divonx: $k, DJcy: Pk, djcy: Mk, dlcorn: Ik, dlcrop: Ok, dollar: Uk, Dopf: Fk, dopf: zk, Dot: Hk, dot: Bk, DotDot: jk, doteq: Vk, doteqdot: Wk, DotEqual: Gk, dotminus: Qk, dotplus: Kk, dotsquare: Xk, doublebarwedge: Yk, DoubleContourIntegral: Jk, DoubleDot: Zk, DoubleDownArrow: ex, DoubleLeftArrow: tx, DoubleLeftRightArrow: nx, DoubleLeftTee: rx, DoubleLongLeftArrow: ox, DoubleLongLeftRightArrow: sx, DoubleLongRightArrow: ix, DoubleRightArrow: lx, DoubleRightTee: cx, DoubleUpArrow: ax, DoubleUpDownArrow: ux, DoubleVerticalBar: fx, DownArrowBar: dx, downarrow: hx, DownArrow: px, Downarrow: mx, DownArrowUpArrow: gx, DownBreve: vx, downdownarrows: yx, downharpoonleft: wx, downharpoonright: Sx, DownLeftRightVector: Ex, DownLeftTeeVector: kx, DownLeftVectorBar: xx, DownLeftVector: Tx, DownRightTeeVector: bx, DownRightVectorBar: _x, DownRightVector: Nx, DownTeeArrow: Cx, DownTee: Lx, drbkarow: Ax, drcorn: qx, drcrop: Rx, Dscr: Dx, dscr: $x, DScy: Px, dscy: Mx, dsol: Ix, Dstrok: Ox, dstrok: Ux, dtdot: Fx, dtri: zx, dtrif: Hx, duarr: Bx, duhar: jx, dwangle: Vx, DZcy: Wx, dzcy: Gx, dzigrarr: Qx, Eacute: Kx, eacute: Xx, easter: Yx, Ecaron: Jx, ecaron: Zx, Ecirc: eT, ecirc: tT, ecir: nT, ecolon: rT, Ecy: oT, ecy: sT, eDDot: iT, Edot: lT, edot: cT, eDot: aT, ee: uT, efDot: fT, Efr: dT, efr: hT, eg: pT, Egrave: mT, egrave: gT, egs: vT, egsdot: yT, el: wT, Element: ST, elinters: ET, ell: kT, els: xT, elsdot: TT, Emacr: bT, emacr: _T, empty: NT, emptyset: CT, EmptySmallSquare: LT, emptyv: AT, EmptyVerySmallSquare: qT, emsp13: RT, emsp14: DT, emsp: $T, ENG: PT, eng: MT, ensp: IT, Eogon: OT, eogon: UT, Eopf: FT, eopf: zT, epar: HT, eparsl: BT, eplus: jT, epsi: VT, Epsilon: WT, epsilon: GT, epsiv: QT, eqcirc: KT, eqcolon: XT, eqsim: YT, eqslantgtr: JT, eqslantless: ZT, Equal: eb, equals: tb, EqualTilde: nb, equest: rb, Equilibrium: ob, equiv: sb, equivDD: ib, eqvparsl: lb, erarr: cb, erDot: ab, escr: ub, Escr: fb, esdot: db, Esim: hb, esim: pb, Eta: mb, eta: gb, ETH: vb, eth: yb, Euml: wb, euml: Sb, euro: Eb, excl: kb, exist: xb, Exists: Tb, expectation: bb, exponentiale: _b, ExponentialE: Nb, fallingdotseq: Cb, Fcy: Lb, fcy: Ab, female: qb, ffilig: Rb, fflig: Db, ffllig: $b, Ffr: Pb, ffr: Mb, filig: Ib, FilledSmallSquare: Ob, FilledVerySmallSquare: Ub, fjlig: Fb, flat: zb, fllig: Hb, fltns: Bb, fnof: jb, Fopf: Vb, fopf: Wb, forall: Gb, ForAll: Qb, fork: Kb, forkv: Xb, Fouriertrf: Yb, fpartint: Jb, frac12: Zb, frac13: e_, frac14: t_, frac15: n_, frac16: r_, frac18: o_, frac23: s_, frac25: i_, frac34: l_, frac35: c_, frac38: a_, frac45: u_, frac56: f_, frac58: d_, frac78: h_, frasl: p_, frown: m_, fscr: g_, Fscr: v_, gacute: y_, Gamma: w_, gamma: S_, Gammad: E_, gammad: k_, gap: x_, Gbreve: T_, gbreve: b_, Gcedil: __, Gcirc: N_, gcirc: C_, Gcy: L_, gcy: A_, Gdot: q_, gdot: R_, ge: D_, gE: $_, gEl: P_, gel: M_, geq: I_, geqq: O_, geqslant: U_, gescc: F_, ges: z_, gesdot: H_, gesdoto: B_, gesdotol: j_, gesl: V_, gesles: W_, Gfr: G_, gfr: Q_, gg: K_, Gg: X_, ggg: Y_, gimel: J_, GJcy: Z_, gjcy: eN, gla: tN, gl: nN, glE: rN, glj: oN, gnap: sN, gnapprox: iN, gne: lN, gnE: cN, gneq: aN, gneqq: uN, gnsim: fN, Gopf: dN, gopf: hN, grave: pN, GreaterEqual: mN, GreaterEqualLess: gN, GreaterFullEqual: vN, GreaterGreater: yN, GreaterLess: wN, GreaterSlantEqual: SN, GreaterTilde: EN, Gscr: kN, gscr: xN, gsim: TN, gsime: bN, gsiml: _N, gtcc: NN, gtcir: CN, gt: LN, GT: AN, Gt: qN, gtdot: RN, gtlPar: DN, gtquest: $N, gtrapprox: PN, gtrarr: MN, gtrdot: IN, gtreqless: ON, gtreqqless: UN, gtrless: FN, gtrsim: zN, gvertneqq: HN, gvnE: BN, Hacek: jN, hairsp: VN, half: WN, hamilt: GN, HARDcy: QN, hardcy: KN, harrcir: XN, harr: YN, hArr: JN, harrw: ZN, Hat: eC, hbar: tC, Hcirc: nC, hcirc: rC, hearts: oC, heartsuit: sC, hellip: iC, hercon: lC, hfr: cC, Hfr: aC, HilbertSpace: uC, hksearow: fC, hkswarow: dC, hoarr: hC, homtht: pC, hookleftarrow: mC, hookrightarrow: gC, hopf: vC, Hopf: yC, horbar: wC, HorizontalLine: SC, hscr: EC, Hscr: kC, hslash: xC, Hstrok: TC, hstrok: bC, HumpDownHump: _C, HumpEqual: NC, hybull: CC, hyphen: LC, Iacute: AC, iacute: qC, ic: RC, Icirc: DC, icirc: $C, Icy: PC, icy: MC, Idot: IC, IEcy: OC, iecy: UC, iexcl: FC, iff: zC, ifr: HC, Ifr: BC, Igrave: jC, igrave: VC, ii: WC, iiiint: GC, iiint: QC, iinfin: KC, iiota: XC, IJlig: YC, ijlig: JC, Imacr: ZC, imacr: eL, image: tL, ImaginaryI: nL, imagline: rL, imagpart: oL, imath: sL, Im: iL, imof: lL, imped: cL, Implies: aL, incare: uL, in: "∈", infin: fL, infintie: dL, inodot: hL, intcal: pL, int: mL, Int: gL, integers: vL, Integral: yL, intercal: wL, Intersection: SL, intlarhk: EL, intprod: kL, InvisibleComma: xL, InvisibleTimes: TL, IOcy: bL, iocy: _L, Iogon: NL, iogon: CL, Iopf: LL, iopf: AL, Iota: qL, iota: RL, iprod: DL, iquest: $L, iscr: PL, Iscr: ML, isin: IL, isindot: OL, isinE: UL, isins: FL, isinsv: zL, isinv: HL, it: BL, Itilde: jL, itilde: VL, Iukcy: WL, iukcy: GL, Iuml: QL, iuml: KL, Jcirc: XL, jcirc: YL, Jcy: JL, jcy: ZL, Jfr: eA, jfr: tA, jmath: nA, Jopf: rA, jopf: oA, Jscr: sA, jscr: iA, Jsercy: lA, jsercy: cA, Jukcy: aA, jukcy: uA, Kappa: fA, kappa: dA, kappav: hA, Kcedil: pA, kcedil: mA, Kcy: gA, kcy: vA, Kfr: yA, kfr: wA, kgreen: SA, KHcy: EA, khcy: kA, KJcy: xA, kjcy: TA, Kopf: bA, kopf: _A, Kscr: NA, kscr: CA, lAarr: LA, Lacute: AA, lacute: qA, laemptyv: RA, lagran: DA, Lambda: $A, lambda: PA, lang: MA, Lang: IA, langd: OA, langle: UA, lap: FA, Laplacetrf: zA, laquo: HA, larrb: BA, larrbfs: jA, larr: VA, Larr: WA, lArr: GA, larrfs: QA, larrhk: KA, larrlp: XA, larrpl: YA, larrsim: JA, larrtl: ZA, latail: eq, lAtail: tq, lat: nq, late: rq, lates: oq, lbarr: sq, lBarr: iq, lbbrk: lq, lbrace: cq, lbrack: aq, lbrke: uq, lbrksld: fq, lbrkslu: dq, Lcaron: hq, lcaron: pq, Lcedil: mq, lcedil: gq, lceil: vq, lcub: yq, Lcy: wq, lcy: Sq, ldca: Eq, ldquo: kq, ldquor: xq, ldrdhar: Tq, ldrushar: bq, ldsh: _q, le: Nq, lE: Cq, LeftAngleBracket: Lq, LeftArrowBar: Aq, leftarrow: qq, LeftArrow: Rq, Leftarrow: Dq, LeftArrowRightArrow: $q, leftarrowtail: Pq, LeftCeiling: Mq, LeftDoubleBracket: Iq, LeftDownTeeVector: Oq, LeftDownVectorBar: Uq, LeftDownVector: Fq, LeftFloor: zq, leftharpoondown: Hq, leftharpoonup: Bq, leftleftarrows: jq, leftrightarrow: Vq, LeftRightArrow: Wq, Leftrightarrow: Gq, leftrightarrows: Qq, leftrightharpoons: Kq, leftrightsquigarrow: Xq, LeftRightVector: Yq, LeftTeeArrow: Jq, LeftTee: Zq, LeftTeeVector: eR, leftthreetimes: tR, LeftTriangleBar: nR, LeftTriangle: rR, LeftTriangleEqual: oR, LeftUpDownVector: sR, LeftUpTeeVector: iR, LeftUpVectorBar: lR, LeftUpVector: cR, LeftVectorBar: aR, LeftVector: uR, lEg: fR, leg: dR, leq: hR, leqq: pR, leqslant: mR, lescc: gR, les: vR, lesdot: yR, lesdoto: wR, lesdotor: SR, lesg: ER, lesges: kR, lessapprox: xR, lessdot: TR, lesseqgtr: bR, lesseqqgtr: _R, LessEqualGreater: NR, LessFullEqual: CR, LessGreater: LR, lessgtr: AR, LessLess: qR, lesssim: RR, LessSlantEqual: DR, LessTilde: $R, lfisht: PR, lfloor: MR, Lfr: IR, lfr: OR, lg: UR, lgE: FR, lHar: zR, lhard: HR, lharu: BR, lharul: jR, lhblk: VR, LJcy: WR, ljcy: GR, llarr: QR, ll: KR, Ll: XR, llcorner: YR, Lleftarrow: JR, llhard: ZR, lltri: e2, Lmidot: t2, lmidot: n2, lmoustache: r2, lmoust: o2, lnap: s2, lnapprox: i2, lne: l2, lnE: c2, lneq: a2, lneqq: u2, lnsim: f2, loang: d2, loarr: h2, lobrk: p2, longleftarrow: m2, LongLeftArrow: g2, Longleftarrow: v2, longleftrightarrow: y2, LongLeftRightArrow: w2, Longleftrightarrow: S2, longmapsto: E2, longrightarrow: k2, LongRightArrow: x2, Longrightarrow: T2, looparrowleft: b2, looparrowright: _2, lopar: N2, Lopf: C2, lopf: L2, loplus: A2, lotimes: q2, lowast: R2, lowbar: D2, LowerLeftArrow: $2, LowerRightArrow: P2, loz: M2, lozenge: I2, lozf: O2, lpar: U2, lparlt: F2, lrarr: z2, lrcorner: H2, lrhar: B2, lrhard: j2, lrm: V2, lrtri: W2, lsaquo: G2, lscr: Q2, Lscr: K2, lsh: X2, Lsh: Y2, lsim: J2, lsime: Z2, lsimg: eD, lsqb: tD, lsquo: nD, lsquor: rD, Lstrok: oD, lstrok: sD, ltcc: iD, ltcir: lD, lt: cD, LT: aD, Lt: uD, ltdot: fD, lthree: dD, ltimes: hD, ltlarr: pD, ltquest: mD, ltri: gD, ltrie: vD, ltrif: yD, ltrPar: wD, lurdshar: SD, luruhar: ED, lvertneqq: kD, lvnE: xD, macr: TD, male: bD, malt: _D, maltese: ND, Map: "⤅", map: CD, mapsto: LD, mapstodown: AD, mapstoleft: qD, mapstoup: RD, marker: DD, mcomma: $D, Mcy: PD, mcy: MD, mdash: ID, mDDot: OD, measuredangle: UD, MediumSpace: FD, Mellintrf: zD, Mfr: HD, mfr: BD, mho: jD, micro: VD, midast: WD, midcir: GD, mid: QD, middot: KD, minusb: XD, minus: YD, minusd: JD, minusdu: ZD, MinusPlus: e$, mlcp: t$, mldr: n$, mnplus: r$, models: o$, Mopf: s$, mopf: i$, mp: l$, mscr: c$, Mscr: a$, mstpos: u$, Mu: f$, mu: d$, multimap: h$, mumap: p$, nabla: m$, Nacute: g$, nacute: v$, nang: y$, nap: w$, napE: S$, napid: E$, napos: k$, napprox: x$, natural: T$, naturals: b$, natur: _$, nbsp: N$, nbump: C$, nbumpe: L$, ncap: A$, Ncaron: q$, ncaron: R$, Ncedil: D$, ncedil: $$, ncong: P$, ncongdot: M$, ncup: I$, Ncy: O$, ncy: U$, ndash: F$, nearhk: z$, nearr: H$, neArr: B$, nearrow: j$, ne: V$, nedot: W$, NegativeMediumSpace: G$, NegativeThickSpace: Q$, NegativeThinSpace: K$, NegativeVeryThinSpace: X$, nequiv: Y$, nesear: J$, nesim: Z$, NestedGreaterGreater: eP, NestedLessLess: tP, NewLine: nP, nexist: rP, nexists: oP, Nfr: sP, nfr: iP, ngE: lP, nge: cP, ngeq: aP, ngeqq: uP, ngeqslant: fP, nges: dP, nGg: hP, ngsim: pP, nGt: mP, ngt: gP, ngtr: vP, nGtv: yP, nharr: wP, nhArr: SP, nhpar: EP, ni: kP, nis: xP, nisd: TP, niv: bP, NJcy: _P, njcy: NP, nlarr: CP, nlArr: LP, nldr: AP, nlE: qP, nle: RP, nleftarrow: DP, nLeftarrow: $P, nleftrightarrow: PP, nLeftrightarrow: MP, nleq: IP, nleqq: OP, nleqslant: UP, nles: FP, nless: zP, nLl: HP, nlsim: BP, nLt: jP, nlt: VP, nltri: WP, nltrie: GP, nLtv: QP, nmid: KP, NoBreak: XP, NonBreakingSpace: YP, nopf: JP, Nopf: ZP, Not: eM, not: tM, NotCongruent: nM, NotCupCap: rM, NotDoubleVerticalBar: oM, NotElement: sM, NotEqual: iM, NotEqualTilde: lM, NotExists: cM, NotGreater: aM, NotGreaterEqual: uM, NotGreaterFullEqual: fM, NotGreaterGreater: dM, NotGreaterLess: hM, NotGreaterSlantEqual: pM, NotGreaterTilde: mM, NotHumpDownHump: gM, NotHumpEqual: vM, notin: yM, notindot: wM, notinE: SM, notinva: EM, notinvb: kM, notinvc: xM, NotLeftTriangleBar: TM, NotLeftTriangle: bM, NotLeftTriangleEqual: _M, NotLess: NM, NotLessEqual: CM, NotLessGreater: LM, NotLessLess: AM, NotLessSlantEqual: qM, NotLessTilde: RM, NotNestedGreaterGreater: DM, NotNestedLessLess: $M, notni: PM, notniva: MM, notnivb: IM, notnivc: OM, NotPrecedes: UM, NotPrecedesEqual: FM, NotPrecedesSlantEqual: zM, NotReverseElement: HM, NotRightTriangleBar: BM, NotRightTriangle: jM, NotRightTriangleEqual: VM, NotSquareSubset: WM, NotSquareSubsetEqual: GM, NotSquareSuperset: QM, NotSquareSupersetEqual: KM, NotSubset: XM, NotSubsetEqual: YM, NotSucceeds: JM, NotSucceedsEqual: ZM, NotSucceedsSlantEqual: eI, NotSucceedsTilde: tI, NotSuperset: nI, NotSupersetEqual: rI, NotTilde: oI, NotTildeEqual: sI, NotTildeFullEqual: iI, NotTildeTilde: lI, NotVerticalBar: cI, nparallel: aI, npar: uI, nparsl: fI, npart: dI, npolint: hI, npr: pI, nprcue: mI, nprec: gI, npreceq: vI, npre: yI, nrarrc: wI, nrarr: SI, nrArr: EI, nrarrw: kI, nrightarrow: xI, nRightarrow: TI, nrtri: bI, nrtrie: _I, nsc: NI, nsccue: CI, nsce: LI, Nscr: AI, nscr: qI, nshortmid: RI, nshortparallel: DI, nsim: $I, nsime: PI, nsimeq: MI, nsmid: II, nspar: OI, nsqsube: UI, nsqsupe: FI, nsub: zI, nsubE: HI, nsube: BI, nsubset: jI, nsubseteq: VI, nsubseteqq: WI, nsucc: GI, nsucceq: QI, nsup: KI, nsupE: XI, nsupe: YI, nsupset: JI, nsupseteq: ZI, nsupseteqq: eO, ntgl: tO, Ntilde: nO, ntilde: rO, ntlg: oO, ntriangleleft: sO, ntrianglelefteq: iO, ntriangleright: lO, ntrianglerighteq: cO, Nu: aO, nu: uO, num: fO, numero: dO, numsp: hO, nvap: pO, nvdash: mO, nvDash: gO, nVdash: vO, nVDash: yO, nvge: wO, nvgt: SO, nvHarr: EO, nvinfin: kO, nvlArr: xO, nvle: TO, nvlt: bO, nvltrie: _O, nvrArr: NO, nvrtrie: CO, nvsim: LO, nwarhk: AO, nwarr: qO, nwArr: RO, nwarrow: DO, nwnear: $O, Oacute: PO, oacute: MO, oast: IO, Ocirc: OO, ocirc: UO, ocir: FO, Ocy: zO, ocy: HO, odash: BO, Odblac: jO, odblac: VO, odiv: WO, odot: GO, odsold: QO, OElig: KO, oelig: XO, ofcir: YO, Ofr: JO, ofr: ZO, ogon: e3, Ograve: t3, ograve: n3, ogt: r3, ohbar: o3, ohm: s3, oint: i3, olarr: l3, olcir: c3, olcross: a3, oline: u3, olt: f3, Omacr: d3, omacr: h3, Omega: p3, omega: m3, Omicron: g3, omicron: v3, omid: y3, ominus: w3, Oopf: S3, oopf: E3, opar: k3, OpenCurlyDoubleQuote: x3, OpenCurlyQuote: T3, operp: b3, oplus: _3, orarr: N3, Or: C3, or: L3, ord: A3, order: q3, orderof: R3, ordf: D3, ordm: $3, origof: P3, oror: M3, orslope: I3, orv: O3, oS: U3, Oscr: F3, oscr: z3, Oslash: H3, oslash: B3, osol: j3, Otilde: V3, otilde: W3, otimesas: G3, Otimes: Q3, otimes: K3, Ouml: X3, ouml: Y3, ovbar: J3, OverBar: Z3, OverBrace: e4, OverBracket: t4, OverParenthesis: n4, para: r4, parallel: o4, par: s4, parsim: i4, parsl: l4, part: c4, PartialD: a4, Pcy: u4, pcy: f4, percnt: d4, period: h4, permil: p4, perp: m4, pertenk: g4, Pfr: v4, pfr: y4, Phi: w4, phi: S4, phiv: E4, phmmat: k4, phone: x4, Pi: T4, pi: b4, pitchfork: _4, piv: N4, planck: C4, planckh: L4, plankv: A4, plusacir: q4, plusb: R4, pluscir: D4, plus: $4, plusdo: P4, plusdu: M4, pluse: I4, PlusMinus: O4, plusmn: U4, plussim: F4, plustwo: z4, pm: H4, Poincareplane: B4, pointint: j4, popf: V4, Popf: W4, pound: G4, prap: Q4, Pr: K4, pr: X4, prcue: Y4, precapprox: J4, prec: Z4, preccurlyeq: e5, Precedes: t5, PrecedesEqual: n5, PrecedesSlantEqual: r5, PrecedesTilde: o5, preceq: s5, precnapprox: i5, precneqq: l5, precnsim: c5, pre: a5, prE: u5, precsim: f5, prime: d5, Prime: h5, primes: p5, prnap: m5, prnE: g5, prnsim: v5, prod: y5, Product: w5, profalar: S5, profline: E5, profsurf: k5, prop: x5, Proportional: T5, Proportion: b5, propto: _5, prsim: N5, prurel: C5, Pscr: L5, pscr: A5, Psi: q5, psi: R5, puncsp: D5, Qfr: $5, qfr: P5, qint: M5, qopf: I5, Qopf: O5, qprime: U5, Qscr: F5, qscr: z5, quaternions: H5, quatint: B5, quest: j5, questeq: V5, quot: W5, QUOT: G5, rAarr: Q5, race: K5, Racute: X5, racute: Y5, radic: J5, raemptyv: Z5, rang: eU, Rang: tU, rangd: nU, range: rU, rangle: oU, raquo: sU, rarrap: iU, rarrb: lU, rarrbfs: cU, rarrc: aU, rarr: uU, Rarr: fU, rArr: dU, rarrfs: hU, rarrhk: pU, rarrlp: mU, rarrpl: gU, rarrsim: vU, Rarrtl: yU, rarrtl: wU, rarrw: SU, ratail: EU, rAtail: kU, ratio: xU, rationals: TU, rbarr: bU, rBarr: _U, RBarr: NU, rbbrk: CU, rbrace: LU, rbrack: AU, rbrke: qU, rbrksld: RU, rbrkslu: DU, Rcaron: $U, rcaron: PU, Rcedil: MU, rcedil: IU, rceil: OU, rcub: UU, Rcy: FU, rcy: zU, rdca: HU, rdldhar: BU, rdquo: jU, rdquor: VU, rdsh: WU, real: GU, realine: QU, realpart: KU, reals: XU, Re: YU, rect: JU, reg: ZU, REG: eF, ReverseElement: tF, ReverseEquilibrium: nF, ReverseUpEquilibrium: rF, rfisht: oF, rfloor: sF, rfr: iF, Rfr: lF, rHar: cF, rhard: aF, rharu: uF, rharul: fF, Rho: dF, rho: hF, rhov: pF, RightAngleBracket: mF, RightArrowBar: gF, rightarrow: vF, RightArrow: yF, Rightarrow: wF, RightArrowLeftArrow: SF, rightarrowtail: EF, RightCeiling: kF, RightDoubleBracket: xF, RightDownTeeVector: TF, RightDownVectorBar: bF, RightDownVector: _F, RightFloor: NF, rightharpoondown: CF, rightharpoonup: LF, rightleftarrows: AF, rightleftharpoons: qF, rightrightarrows: RF, rightsquigarrow: DF, RightTeeArrow: $F, RightTee: PF, RightTeeVector: MF, rightthreetimes: IF, RightTriangleBar: OF, RightTriangle: UF, RightTriangleEqual: FF, RightUpDownVector: zF, RightUpTeeVector: HF, RightUpVectorBar: BF, RightUpVector: jF, RightVectorBar: VF, RightVector: WF, ring: GF, risingdotseq: QF, rlarr: KF, rlhar: XF, rlm: YF, rmoustache: JF, rmoust: ZF, rnmid: ez, roang: tz, roarr: nz, robrk: rz, ropar: oz, ropf: sz, Ropf: iz, roplus: lz, rotimes: cz, RoundImplies: az, rpar: uz, rpargt: fz, rppolint: dz, rrarr: hz, Rrightarrow: pz, rsaquo: mz, rscr: gz, Rscr: vz, rsh: yz, Rsh: wz, rsqb: Sz, rsquo: Ez, rsquor: kz, rthree: xz, rtimes: Tz, rtri: bz, rtrie: _z, rtrif: Nz, rtriltri: Cz, RuleDelayed: Lz, ruluhar: Az, rx: qz, Sacute: Rz, sacute: Dz, sbquo: $z, scap: Pz, Scaron: Mz, scaron: Iz, Sc: Oz, sc: Uz, sccue: Fz, sce: zz, scE: Hz, Scedil: Bz, scedil: jz, Scirc: Vz, scirc: Wz, scnap: Gz, scnE: Qz, scnsim: Kz, scpolint: Xz, scsim: Yz, Scy: Jz, scy: Zz, sdotb: e8, sdot: t8, sdote: n8, searhk: r8, searr: o8, seArr: s8, searrow: i8, sect: l8, semi: c8, seswar: a8, setminus: u8, setmn: f8, sext: d8, Sfr: h8, sfr: p8, sfrown: m8, sharp: g8, SHCHcy: v8, shchcy: y8, SHcy: w8, shcy: S8, ShortDownArrow: E8, ShortLeftArrow: k8, shortmid: x8, shortparallel: T8, ShortRightArrow: b8, ShortUpArrow: _8, shy: N8, Sigma: C8, sigma: L8, sigmaf: A8, sigmav: q8, sim: R8, simdot: D8, sime: $8, simeq: P8, simg: M8, simgE: I8, siml: O8, simlE: U8, simne: F8, simplus: z8, simrarr: H8, slarr: B8, SmallCircle: j8, smallsetminus: V8, smashp: W8, smeparsl: G8, smid: Q8, smile: K8, smt: X8, smte: Y8, smtes: J8, SOFTcy: Z8, softcy: eH, solbar: tH, solb: nH, sol: rH, Sopf: oH, sopf: sH, spades: iH, spadesuit: lH, spar: cH, sqcap: aH, sqcaps: uH, sqcup: fH, sqcups: dH, Sqrt: hH, sqsub: pH, sqsube: mH, sqsubset: gH, sqsubseteq: vH, sqsup: yH, sqsupe: wH, sqsupset: SH, sqsupseteq: EH, square: kH, Square: xH, SquareIntersection: TH, SquareSubset: bH, SquareSubsetEqual: _H, SquareSuperset: NH, SquareSupersetEqual: CH, SquareUnion: LH, squarf: AH, squ: qH, squf: RH, srarr: DH, Sscr: $H, sscr: PH, ssetmn: MH, ssmile: IH, sstarf: OH, Star: UH, star: FH, starf: zH, straightepsilon: HH, straightphi: BH, strns: jH, sub: VH, Sub: WH, subdot: GH, subE: QH, sube: KH, subedot: XH, submult: YH, subnE: JH, subne: ZH, subplus: e6, subrarr: t6, subset: n6, Subset: r6, subseteq: o6, subseteqq: s6, SubsetEqual: i6, subsetneq: l6, subsetneqq: c6, subsim: a6, subsub: u6, subsup: f6, succapprox: d6, succ: h6, succcurlyeq: p6, Succeeds: m6, SucceedsEqual: g6, SucceedsSlantEqual: v6, SucceedsTilde: y6, succeq: w6, succnapprox: S6, succneqq: E6, succnsim: k6, succsim: x6, SuchThat: T6, sum: b6, Sum: _6, sung: N6, sup1: C6, sup2: L6, sup3: A6, sup: q6, Sup: R6, supdot: D6, supdsub: $6, supE: P6, supe: M6, supedot: I6, Superset: O6, SupersetEqual: U6, suphsol: F6, suphsub: z6, suplarr: H6, supmult: B6, supnE: j6, supne: V6, supplus: W6, supset: G6, Supset: Q6, supseteq: K6, supseteqq: X6, supsetneq: Y6, supsetneqq: J6, supsim: Z6, supsub: eB, supsup: tB, swarhk: nB, swarr: rB, swArr: oB, swarrow: sB, swnwar: iB, szlig: lB, Tab: cB, target: aB, Tau: uB, tau: fB, tbrk: dB, Tcaron: hB, tcaron: pB, Tcedil: mB, tcedil: gB, Tcy: vB, tcy: yB, tdot: wB, telrec: SB, Tfr: EB, tfr: kB, there4: xB, therefore: TB, Therefore: bB, Theta: _B, theta: NB, thetasym: CB, thetav: LB, thickapprox: AB, thicksim: qB, ThickSpace: RB, ThinSpace: DB, thinsp: $B, thkap: PB, thksim: MB, THORN: IB, thorn: OB, tilde: UB, Tilde: FB, TildeEqual: zB, TildeFullEqual: HB, TildeTilde: BB, timesbar: jB, timesb: VB, times: WB, timesd: GB, tint: QB, toea: KB, topbot: XB, topcir: YB, top: JB, Topf: ZB, topf: ej, topfork: tj, tosa: nj, tprime: rj, trade: oj, TRADE: sj, triangle: ij, triangledown: lj, triangleleft: cj, trianglelefteq: aj, triangleq: uj, triangleright: fj, trianglerighteq: dj, tridot: hj, trie: pj, triminus: mj, TripleDot: gj, triplus: vj, trisb: yj, tritime: wj, trpezium: Sj, Tscr: Ej, tscr: kj, TScy: xj, tscy: Tj, TSHcy: bj, tshcy: _j, Tstrok: Nj, tstrok: Cj, twixt: Lj, twoheadleftarrow: Aj, twoheadrightarrow: qj, Uacute: Rj, uacute: Dj, uarr: $j, Uarr: Pj, uArr: Mj, Uarrocir: Ij, Ubrcy: Oj, ubrcy: Uj, Ubreve: Fj, ubreve: zj, Ucirc: Hj, ucirc: Bj, Ucy: jj, ucy: Vj, udarr: Wj, Udblac: Gj, udblac: Qj, udhar: Kj, ufisht: Xj, Ufr: Yj, ufr: Jj, Ugrave: Zj, ugrave: eV, uHar: tV, uharl: nV, uharr: rV, uhblk: oV, ulcorn: sV, ulcorner: iV, ulcrop: lV, ultri: cV, Umacr: aV, umacr: uV, uml: fV, UnderBar: dV, UnderBrace: hV, UnderBracket: pV, UnderParenthesis: mV, Union: gV, UnionPlus: vV, Uogon: yV, uogon: wV, Uopf: SV, uopf: EV, UpArrowBar: kV, uparrow: xV, UpArrow: TV, Uparrow: bV, UpArrowDownArrow: _V, updownarrow: NV, UpDownArrow: CV, Updownarrow: LV, UpEquilibrium: AV, upharpoonleft: qV, upharpoonright: RV, uplus: DV, UpperLeftArrow: $V, UpperRightArrow: PV, upsi: MV, Upsi: IV, upsih: OV, Upsilon: UV, upsilon: FV, UpTeeArrow: zV, UpTee: HV, upuparrows: BV, urcorn: jV, urcorner: VV, urcrop: WV, Uring: GV, uring: QV, urtri: KV, Uscr: XV, uscr: YV, utdot: JV, Utilde: ZV, utilde: e9, utri: t9, utrif: n9, uuarr: r9, Uuml: o9, uuml: s9, uwangle: i9, vangrt: l9, varepsilon: c9, varkappa: a9, varnothing: u9, varphi: f9, varpi: d9, varpropto: h9, varr: p9, vArr: m9, varrho: g9, varsigma: v9, varsubsetneq: y9, varsubsetneqq: w9, varsupsetneq: S9, varsupsetneqq: E9, vartheta: k9, vartriangleleft: x9, vartriangleright: T9, vBar: b9, Vbar: _9, vBarv: N9, Vcy: C9, vcy: L9, vdash: A9, vDash: q9, Vdash: R9, VDash: D9, Vdashl: $9, veebar: P9, vee: M9, Vee: I9, veeeq: O9, vellip: U9, verbar: F9, Verbar: z9, vert: H9, Vert: B9, VerticalBar: j9, VerticalLine: V9, VerticalSeparator: W9, VerticalTilde: G9, VeryThinSpace: Q9, Vfr: K9, vfr: X9, vltri: Y9, vnsub: J9, vnsup: Z9, Vopf: eW, vopf: tW, vprop: nW, vrtri: rW, Vscr: oW, vscr: sW, vsubnE: iW, vsubne: lW, vsupnE: cW, vsupne: aW, Vvdash: uW, vzigzag: fW, Wcirc: dW, wcirc: hW, wedbar: pW, wedge: mW, Wedge: gW, wedgeq: vW, weierp: yW, Wfr: wW, wfr: SW, Wopf: EW, wopf: kW, wp: xW, wr: TW, wreath: bW, Wscr: _W, wscr: NW, xcap: CW, xcirc: LW, xcup: AW, xdtri: qW, Xfr: RW, xfr: DW, xharr: $W, xhArr: PW, Xi: MW, xi: IW, xlarr: OW, xlArr: UW, xmap: FW, xnis: zW, xodot: HW, Xopf: BW, xopf: jW, xoplus: VW, xotime: WW, xrarr: GW, xrArr: QW, Xscr: KW, xscr: XW, xsqcup: YW, xuplus: JW, xutri: ZW, xvee: e7, xwedge: t7, Yacute: n7, yacute: r7, YAcy: o7, yacy: s7, Ycirc: i7, ycirc: l7, Ycy: c7, ycy: a7, yen: u7, Yfr: f7, yfr: d7, YIcy: h7, yicy: p7, Yopf: m7, yopf: g7, Yscr: v7, yscr: y7, YUcy: w7, yucy: S7, yuml: E7, Yuml: k7, Zacute: x7, zacute: T7, Zcaron: b7, zcaron: _7, Zcy: N7, zcy: C7, Zdot: L7, zdot: A7, zeetrf: q7, ZeroWidthSpace: R7, Zeta: D7, zeta: $7, zfr: P7, Zfr: M7, ZHcy: I7, zhcy: O7, zigrarr: U7, zopf: F7, Zopf: z7, Zscr: H7, zscr: B7, zwj: j7, zwnj: V7 }, W7 = "Á", G7 = "á", Q7 = "Â", K7 = "â", X7 = "´", Y7 = "Æ", J7 = "æ", Z7 = "À", eG = "à", tG = "&", nG = "&", rG = "Å", oG = "å", sG = "Ã", iG = "ã", lG = "Ä", cG = "ä", aG = "¦", uG = "Ç", fG = "ç", dG = "¸", hG = "¢", pG = "©", mG = "©", gG = "¤", vG = "°", yG = "÷", wG = "É", SG = "é", EG = "Ê", kG = "ê", xG = "È", TG = "è", bG = "Ð", _G = "ð", NG = "Ë", CG = "ë", LG = "½", AG = "¼", qG = "¾", RG = ">", DG = ">", $G = "Í", PG = "í", MG = "Î", IG = "î", OG = "¡", UG = "Ì", FG = "ì", zG = "¿", HG = "Ï", BG = "ï", jG = "«", VG = "<", WG = "<", GG = "¯", QG = "µ", KG = "·", XG = " ", YG = "¬", JG = "Ñ", ZG = "ñ", eQ = "Ó", tQ = "ó", nQ = "Ô", rQ = "ô", oQ = "Ò", sQ = "ò", iQ = "ª", lQ = "º", cQ = "Ø", aQ = "ø", uQ = "Õ", fQ = "õ", dQ = "Ö", hQ = "ö", pQ = "¶", mQ = "±", gQ = "£", vQ = '"', yQ = '"', wQ = "»", SQ = "®", EQ = "®", kQ = "§", xQ = "­", TQ = "¹", bQ = "²", _Q = "³", NQ = "ß", CQ = "Þ", LQ = "þ", AQ = "×", qQ = "Ú", RQ = "ú", DQ = "Û", $Q = "û", PQ = "Ù", MQ = "ù", IQ = "¨", OQ = "Ü", UQ = "ü", FQ = "Ý", zQ = "ý", HQ = "¥", BQ = "ÿ", jQ = { Aacute: W7, aacute: G7, Acirc: Q7, acirc: K7, acute: X7, AElig: Y7, aelig: J7, Agrave: Z7, agrave: eG, amp: tG, AMP: nG, Aring: rG, aring: oG, Atilde: sG, atilde: iG, Auml: lG, auml: cG, brvbar: aG, Ccedil: uG, ccedil: fG, cedil: dG, cent: hG, copy: pG, COPY: mG, curren: gG, deg: vG, divide: yG, Eacute: wG, eacute: SG, Ecirc: EG, ecirc: kG, Egrave: xG, egrave: TG, ETH: bG, eth: _G, Euml: NG, euml: CG, frac12: LG, frac14: AG, frac34: qG, gt: RG, GT: DG, Iacute: $G, iacute: PG, Icirc: MG, icirc: IG, iexcl: OG, Igrave: UG, igrave: FG, iquest: zG, Iuml: HG, iuml: BG, laquo: jG, lt: VG, LT: WG, macr: GG, micro: QG, middot: KG, nbsp: XG, not: YG, Ntilde: JG, ntilde: ZG, Oacute: eQ, oacute: tQ, Ocirc: nQ, ocirc: rQ, Ograve: oQ, ograve: sQ, ordf: iQ, ordm: lQ, Oslash: cQ, oslash: aQ, Otilde: uQ, otilde: fQ, Ouml: dQ, ouml: hQ, para: pQ, plusmn: mQ, pound: gQ, quot: vQ, QUOT: yQ, raquo: wQ, reg: SQ, REG: EQ, sect: kQ, shy: xQ, sup1: TQ, sup2: bQ, sup3: _Q, szlig: NQ, THORN: CQ, thorn: LQ, times: AQ, Uacute: qQ, uacute: RQ, Ucirc: DQ, ucirc: $Q, Ugrave: PQ, ugrave: MQ, uml: IQ, Uuml: OQ, uuml: UQ, Yacute: FQ, yacute: zQ, yen: HQ, yuml: BQ }, VQ = "&", WQ = "'", GQ = ">", QQ = "<", KQ = '"', oh = { amp: VQ, apos: WQ, gt: GQ, lt: QQ, quot: KQ };
var Ec = {};
var XQ = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
var YQ = Rn && Rn.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(Ec, "__esModule", { value: !0 });
var Ba = YQ(XQ), JQ = String.fromCodePoint || function (e) { var t = ""; return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t; };
function ZQ(e) { return e >= 55296 && e <= 57343 || e > 1114111 ? "�" : (e in Ba.default && (e = Ba.default[e]), JQ(e)); }
Ec.default = ZQ;
var Ps = Rn && Rn.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.decodeHTML = yt.decodeHTMLStrict = yt.decodeXML = void 0;
var yl = Ps(rh), eK = Ps(jQ), tK = Ps(oh), ja = Ps(Ec), nK = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
yt.decodeXML = sh(tK.default);
yt.decodeHTMLStrict = sh(yl.default);
function sh(e) { var t = ih(e); return function (n) { return String(n).replace(nK, t); }; }
var Va = function (e, t) { return e < t ? 1 : -1; };
yt.decodeHTML = function () { for (var e = Object.keys(eK.default).sort(Va), t = Object.keys(yl.default).sort(Va), n = 0, r = 0; n < t.length; n++)
    e[r] === t[n] ? (t[n] += ";?", r++) : t[n] += ";"; var o = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), s = ih(yl.default); function i(l) { return l.substr(-1) !== ";" && (l += ";"), s(l); } return function (l) { return String(l).replace(o, i); }; }();
function ih(e) { return function (n) { if (n.charAt(1) === "#") {
    var r = n.charAt(2);
    return r === "X" || r === "x" ? ja.default(parseInt(n.substr(3), 16)) : ja.default(parseInt(n.substr(2), 10));
} return e[n.slice(1, -1)] || n; }; }
var Pe = {}, lh = Rn && Rn.__importDefault || function (e) { return e && e.__esModule ? e : { default: e }; };
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.escapeUTF8 = Pe.escape = Pe.encodeNonAsciiHTML = Pe.encodeHTML = Pe.encodeXML = void 0;
var rK = lh(oh), ch = uh(rK.default), ah = fh(ch);
Pe.encodeXML = ph(ch);
var oK = lh(rh), kc = uh(oK.default), sK = fh(kc);
Pe.encodeHTML = lK(kc, sK);
Pe.encodeNonAsciiHTML = ph(kc);
function uh(e) { return Object.keys(e).sort().reduce(function (t, n) { return t[e[n]] = "&" + n + ";", t; }, {}); }
function fh(e) { for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
    var s = o[r];
    s.length === 1 ? t.push("\\" + s) : n.push(s);
} t.sort(); for (var i = 0; i < t.length - 1; i++) {
    for (var l = i; l < t.length - 1 && t[l].charCodeAt(1) + 1 === t[l + 1].charCodeAt(1);)
        l += 1;
    var c = 1 + l - i;
    c < 3 || t.splice(i, c, t[i] + "-" + t[l]);
} return n.unshift("[" + t.join("") + "]"), new RegExp(n.join("|"), "g"); }
var dh = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, iK = String.prototype.codePointAt != null ? function (e) { return e.codePointAt(0); } : function (e) { return (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536; };
function Ms(e) { return "&#x" + (e.length > 1 ? iK(e) : e.charCodeAt(0)).toString(16).toUpperCase() + ";"; }
function lK(e, t) { return function (n) { return n.replace(t, function (r) { return e[r]; }).replace(dh, Ms); }; }
var hh = new RegExp(ah.source + "|" + dh.source, "g");
function cK(e) { return e.replace(hh, Ms); }
Pe.escape = cK;
function aK(e) { return e.replace(ah, Ms); }
Pe.escapeUTF8 = aK;
function ph(e) { return function (t) { return t.replace(hh, function (n) { return e[n] || Ms(n); }); }; }
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.encodeHTML5 = e.encodeHTML4 = e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = e.encode = e.decodeStrict = e.decode = void 0; var t = yt, n = Pe; function r(c, a) { return (!a || a <= 0 ? t.decodeXML : t.decodeHTML)(c); } e.decode = r; function o(c, a) { return (!a || a <= 0 ? t.decodeXML : t.decodeHTMLStrict)(c); } e.decodeStrict = o; function s(c, a) { return (!a || a <= 0 ? n.encodeXML : n.encodeHTML)(c); } e.encode = s; var i = Pe; Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function () { return i.encodeXML; } }), Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function () { return i.encodeHTML; } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function () { return i.encodeNonAsciiHTML; } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function () { return i.escape; } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function () { return i.escapeUTF8; } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function () { return i.encodeHTML; } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function () { return i.encodeHTML; } }); var l = yt; Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function () { return l.decodeXML; } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function () { return l.decodeHTML; } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function () { return l.decodeHTMLStrict; } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function () { return l.decodeHTML; } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function () { return l.decodeHTML; } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function () { return l.decodeHTMLStrict; } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function () { return l.decodeHTMLStrict; } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function () { return l.decodeXML; } }); })(nh);
function uK(e, t) { if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function"); }
function Wa(e, t) { for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function fK(e, t, n) { return t && Wa(e.prototype, t), n && Wa(e, n), e; }
function mh(e, t) {
    var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
        if (Array.isArray(e) || (n = dK(e)) || t && e && typeof e.length == "number") {
            n && (e = n);
            var r = 0, o = function () { };
            return { s: o, n: function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e: function (a) { throw a; }, f: o };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s = !0, i = !1, l;
    return { s: function () { n = n.call(e); }, n: function () { var a = n.next(); return s = a.done, a; }, e: function (a) { i = !0, l = a; }, f: function () { try {
            !s && n.return != null && n.return();
        }
        finally {
            if (i)
                throw l;
        } } };
}
function dK(e, t) { if (e) {
    if (typeof e == "string")
        return Ga(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
        return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return Ga(e, t);
} }
function Ga(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n]; return r; }
var hK = nh, Qa = { fg: "#FFF", bg: "#000", newline: !1, escapeXML: !1, stream: !1, colors: pK() };
function pK() { var e = { 0: "#000", 1: "#A00", 2: "#0A0", 3: "#A50", 4: "#00A", 5: "#A0A", 6: "#0AA", 7: "#AAA", 8: "#555", 9: "#F55", 10: "#5F5", 11: "#FF5", 12: "#55F", 13: "#F5F", 14: "#5FF", 15: "#FFF" }; return go(0, 5).forEach(function (t) { go(0, 5).forEach(function (n) { go(0, 5).forEach(function (r) { return mK(t, n, r, e); }); }); }), go(0, 23).forEach(function (t) { var n = t + 232, r = gh(t * 10 + 8); e[n] = "#" + r + r + r; }), e; }
function mK(e, t, n, r) { var o = 16 + e * 36 + t * 6 + n, s = e > 0 ? e * 40 + 55 : 0, i = t > 0 ? t * 40 + 55 : 0, l = n > 0 ? n * 40 + 55 : 0; r[o] = gK([s, i, l]); }
function gh(e) { for (var t = e.toString(16); t.length < 2;)
    t = "0" + t; return t; }
function gK(e) { var t = [], n = mh(e), r; try {
    for (n.s(); !(r = n.n()).done;) {
        var o = r.value;
        t.push(gh(o));
    }
}
catch (s) {
    n.e(s);
}
finally {
    n.f();
} return "#" + t.join(""); }
function Ka(e, t, n, r) { var o; return t === "text" ? o = SK(n, r) : t === "display" ? o = yK(e, n, r) : t === "xterm256Foreground" ? o = Uo(e, r.colors[n]) : t === "xterm256Background" ? o = Fo(e, r.colors[n]) : t === "rgb" && (o = vK(e, n)), o; }
function vK(e, t) { t = t.substring(2).slice(0, -1); var n = +t.substr(0, 2), r = t.substring(5).split(";"), o = r.map(function (s) { return ("0" + Number(s).toString(16)).substr(-2); }).join(""); return Oo(e, (n === 38 ? "color:#" : "background-color:#") + o); }
function yK(e, t, n) { t = parseInt(t, 10); var r = { "-1": function () { return "<br/>"; }, 0: function () { return e.length && vh(e); }, 1: function () { return Lt(e, "b"); }, 3: function () { return Lt(e, "i"); }, 4: function () { return Lt(e, "u"); }, 8: function () { return Oo(e, "display:none"); }, 9: function () { return Lt(e, "strike"); }, 22: function () { return Oo(e, "font-weight:normal;text-decoration:none;font-style:normal"); }, 23: function () { return Ya(e, "i"); }, 24: function () { return Ya(e, "u"); }, 39: function () { return Uo(e, n.fg); }, 49: function () { return Fo(e, n.bg); }, 53: function () { return Oo(e, "text-decoration:overline"); } }, o; return r[t] ? o = r[t]() : 4 < t && t < 7 ? o = Lt(e, "blink") : 29 < t && t < 38 ? o = Uo(e, n.colors[t - 30]) : 39 < t && t < 48 ? o = Fo(e, n.colors[t - 40]) : 89 < t && t < 98 ? o = Uo(e, n.colors[8 + (t - 90)]) : 99 < t && t < 108 && (o = Fo(e, n.colors[8 + (t - 100)])), o; }
function vh(e) { var t = e.slice(0); return e.length = 0, t.reverse().map(function (n) { return "</" + n + ">"; }).join(""); }
function go(e, t) { for (var n = [], r = e; r <= t; r++)
    n.push(r); return n; }
function wK(e) { return function (t) { return (e === null || t.category !== e) && e !== "all"; }; }
function Xa(e) { e = parseInt(e, 10); var t = null; return e === 0 ? t = "all" : e === 1 ? t = "bold" : 2 < e && e < 5 ? t = "underline" : 4 < e && e < 7 ? t = "blink" : e === 8 ? t = "hide" : e === 9 ? t = "strike" : 29 < e && e < 38 || e === 39 || 89 < e && e < 98 ? t = "foreground-color" : (39 < e && e < 48 || e === 49 || 99 < e && e < 108) && (t = "background-color"), t; }
function SK(e, t) { return t.escapeXML ? hK.encodeXML(e) : e; }
function Lt(e, t, n) { return n || (n = ""), e.push(t), "<".concat(t).concat(n ? ' style="'.concat(n, '"') : "", ">"); }
function Oo(e, t) { return Lt(e, "span", t); }
function Uo(e, t) { return Lt(e, "span", "color:" + t); }
function Fo(e, t) { return Lt(e, "span", "background-color:" + t); }
function Ya(e, t) { var n; if (e.slice(-1)[0] === t && (n = e.pop()), n)
    return "</" + t + ">"; }
function EK(e, t, n) { var r = !1, o = 3; function s() { return ""; } function i(E, b) { return n("xterm256Foreground", b), ""; } function l(E, b) { return n("xterm256Background", b), ""; } function c(E) { return t.newline ? n("display", -1) : n("text", E), ""; } function a(E, b) { r = !0, b.trim().length === 0 && (b = "0"), b = b.trimRight(";").split(";"); var w = mh(b), N; try {
    for (w.s(); !(N = w.n()).done;) {
        var R = N.value;
        n("display", R);
    }
}
catch (q) {
    w.e(q);
}
finally {
    w.f();
} return ""; } function u(E) { return n("text", E), ""; } function p(E) { return n("rgb", E), ""; } var d = [{ pattern: /^\x08+/, sub: s }, { pattern: /^\x1b\[[012]?K/, sub: s }, { pattern: /^\x1b\[\(B/, sub: s }, { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: p }, { pattern: /^\x1b\[38;5;(\d+)m/, sub: i }, { pattern: /^\x1b\[48;5;(\d+)m/, sub: l }, { pattern: /^\n/, sub: c }, { pattern: /^\r+\n/, sub: c }, { pattern: /^\r/, sub: c }, { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: a }, { pattern: /^\x1b\[\d?J/, sub: s }, { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: s }, { pattern: /^\x1b\[?[\d;]{0,3}/, sub: s }, { pattern: /^(([^\x1b\x08\r\n])+)/, sub: u }]; function m(E, b) { b > o && r || (r = !1, e = e.replace(E.pattern, E.sub)); } var y = [], T = e, k = T.length; e: for (; k > 0;) {
    for (var h = 0, f = 0, g = d.length; f < g; h = ++f) {
        var v = d[h];
        if (m(v, h), e.length !== k) {
            k = e.length;
            continue e;
        }
    }
    if (e.length === k)
        break;
    y.push(0), k = e.length;
} return y; }
function kK(e, t, n) { return t !== "text" && (e = e.filter(wK(Xa(n))), e.push({ token: t, data: n, category: Xa(n) })), e; }
var xK = function () { function e(t) { uK(this, e), t = t || {}, t.colors && (t.colors = Object.assign({}, Qa.colors, t.colors)), this.options = Object.assign({}, Qa, t), this.stack = [], this.stickyStack = []; } return fK(e, [{ key: "toHtml", value: function (n) { var r = this; n = typeof n == "string" ? [n] : n; var o = this.stack, s = this.options, i = []; return this.stickyStack.forEach(function (l) { var c = Ka(o, l.token, l.data, s); c && i.push(c); }), EK(n.join(""), s, function (l, c) { var a = Ka(o, l, c, s); a && i.push(a), s.stream && (r.stickyStack = kK(r.stickyStack, l, c)); }), o.length && i.push(vh(o)), i.join(""); } }]), e; }(), TK = xK;
var bK = function (_10) {
    var e = _10.error;
    var t = $.useMemo(function () { return yh(e); }, [e]);
    return S("div", { className: "error-message", dangerouslySetInnerHTML: { __html: t || "" } });
};
function yh(e) { var t = { bg: "var(--vscode-panel-background)", fg: "var(--vscode-foreground)" }; return t.colors = _K, new TK(t).toHtml(NK(e)); }
var _K = { 0: "#000", 1: "#C00", 2: "#0C0", 3: "#C50", 4: "#00C", 5: "#C0C", 6: "#0CC", 7: "#CCC", 8: "#555", 9: "#F55", 10: "#5F5", 11: "#FF5", 12: "#55F", 13: "#F5F", 14: "#5FF", 15: "#FFF" };
function NK(e) { return e.replace(/[&"<>]/g, function (t) { return ({ "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" })[t]; }); }
var CK = function (_10) {
    var e = _10.action, t = _10.sdkLanguage;
    var c;
    if (!e)
        return null;
    var n = e.log, r = (c = e.error) == null ? void 0 : c.message, o = __assign({}, e.params);
    delete o.info;
    var s = Object.keys(o), i = e.wallTime ? new Date(e.wallTime).toLocaleString() : null, l = e.endTime ? Dn(e.endTime - e.startTime) : "Timed Out";
    return D("div", { className: "call-tab", children: [!!r && S(bK, { error: r }), !!r && S("div", { className: "call-section", children: "Call" }), S("div", { className: "call-line", children: e.apiName }), D(Hr, { children: [S("div", { className: "call-section", children: "Time" }), i && D("div", { className: "call-line", children: ["wall time:", S("span", { className: "call-value datetime", title: i, children: i })] }), D("div", { className: "call-line", children: ["duration:", S("span", { className: "call-value datetime", title: l, children: l })] })] }), !!s.length && S("div", { className: "call-section", children: "Parameters" }), !!s.length && s.map(function (a, u) { return Ja(Za(e, a, o[a], t), "param-" + u); }), !!e.result && S("div", { className: "call-section", children: "Return value" }), !!e.result && Object.keys(e.result).map(function (a, u) { return Ja(Za(e, a, e.result[a], t), "result-" + u); }), S("div", { className: "call-section", children: "Log" }), n.map(function (a, u) { return S("div", { className: "call-line", children: a }, u); })] });
};
function Ja(e, t) { var n = e.text.replace(/\n/g, "↵"); return e.type === "string" && (n = "\"".concat(n, "\"")), D("div", { className: "call-line", children: [e.name, ":", S("span", { className: "call-value ".concat(e.type), title: e.text, children: n }), ["string", "number", "object", "locator"].includes(e.type) && S(Cv, { value: e.text })] }, t); }
function Za(e, t, n, r) { var o = e.method.includes("eval") || e.method === "waitForFunction"; if ((t === "eventInit" || t === "expectedValue" || t === "arg" && o) && (n = ps(n.value, new Array(10).fill({ handle: "<handle>" }))), (t === "value" && o || t === "received" && e.method === "expect") && (n = ps(n, new Array(10).fill({ handle: "<handle>" }))), t === "selector")
    return { text: sn(r || "javascript", e.params.selector, !1, !0), type: "locator", name: "locator" }; var s = typeof n; return s !== "object" || n === null ? { text: String(n), type: s, name: t } : n.guid ? { text: "<handle>", type: "handle", name: t } : { text: JSON.stringify(n), type: "object", name: t }; }
function ps(e, t) { if (e.n !== void 0)
    return e.n; if (e.s !== void 0)
    return e.s; if (e.b !== void 0)
    return e.b; if (e.v !== void 0) {
    if (e.v === "undefined")
        return;
    if (e.v === "null")
        return null;
    if (e.v === "NaN")
        return NaN;
    if (e.v === "Infinity")
        return 1 / 0;
    if (e.v === "-Infinity")
        return -1 / 0;
    if (e.v === "-0")
        return -0;
} if (e.d !== void 0)
    return new Date(e.d); if (e.r !== void 0)
    return new RegExp(e.r.p, e.r.f); if (e.a !== void 0)
    return e.a.map(function (n) { return ps(n, t); }); if (e.o !== void 0) {
    var n = {};
    for (var _10 = 0, _11 = e.o; _10 < _11.length; _10++) {
        var _12 = _11[_10], r = _12.k, o = _12.v;
        n[r] = ps(o, t);
    }
    return n;
} return e.h !== void 0 ? t === void 0 ? "<object>" : t[e.h] : "<object>"; }
var LK = function (_10) {
    var e = _10.action;
    var t = $.useMemo(function () { if (!e)
        return []; var n = [], r = Fn(e); for (var _10 = 0, _11 = Rd(e); _10 < _11.length; _10++) {
        var o = _11[_10];
        if (!(o.method !== "console" && o.method !== "pageError")) {
            if (o.method === "console") {
                var s = o.params.message.guid;
                n.push({ message: r.initializers[s] });
            }
            o.method === "pageError" && n.push({ error: o.params.error });
        }
    } return n; }, [e]);
    return S("div", { className: "console-tab", children: t.map(function (n, r) { var o = n.message, s = n.error; if (o) {
            var i = o.location.url, l = i ? i.substring(i.lastIndexOf("/") + 1) : "<anonymous>";
            return D("div", { className: "console-line " + o.type, children: [D("span", { className: "console-location", children: [l, ":", o.location.lineNumber] }), S("span", { className: "codicon codicon-" + AK(o) }), S("span", { className: "console-line-message", children: o.text })] }, r);
        } if (s) {
            var i = s.error, l = s.value;
            return i ? D("div", { className: "console-line error", children: [S("span", { className: "codicon codicon-error" }), S("span", { className: "console-line-message", children: i.message }), S("div", { className: "console-stack", children: i.stack })] }, r) : D("div", { className: "console-line error", children: [S("span", { className: "codicon codicon-error" }), S("span", { className: "console-line-message", children: String(l) })] }, r);
        } return null; }) });
};
function AK(e) { switch (e.type) {
    case "error": return "error";
    case "warning": return "warning";
} return "blank"; }
var qK = function (_10) {
    var e = _10.title, t = _10.children, n = _10.setExpanded, r = _10.expanded;
    return D("div", { className: "expandable" + (r ? " expanded" : ""), children: [D("div", { className: "expandable-title", children: [S("div", { className: "codicon codicon-" + (r ? "chevron-down" : "chevron-right"), style: { cursor: "pointer", color: "var(--vscode-foreground)", marginLeft: "5px" }, onClick: function () { return n(!r); } }), e] }), r && S("div", { style: { marginLeft: 25 }, children: t })] });
};
var RK = function (_10) {
    var e = _10.resource, t = _10.index, n = _10.selected, r = _10.setSelected;
    var _11 = $.useState(!1), o = _11[0], s = _11[1], _12 = $.useState(null), i = _12[0], l = _12[1], _13 = $.useState(null), c = _13[0], a = _13[1];
    $.useEffect(function () { s(!1), r(-1); }, [e, r]), $.useEffect(function () { (function () { return __awaiter(void 0, void 0, void 0, function () {
        var v, g, v, E, b_1, w, _10, _11;
        var _12, _13;
        return __generator(this, function (_14) {
            switch (_14.label) {
                case 0:
                    if (!e.request.postData) return [3 /*break*/, 4];
                    if (!e.request.postData._sha1) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("sha1/".concat(e.request.postData._sha1))];
                case 1: return [4 /*yield*/, (_14.sent()).text()];
                case 2:
                    v = _14.sent();
                    l(v);
                    return [3 /*break*/, 4];
                case 3:
                    l(e.request.postData.text);
                    _14.label = 4;
                case 4:
                    if (!e.response.content._sha1) return [3 /*break*/, 10];
                    g = e.response.content.mimeType.includes("image");
                    return [4 /*yield*/, fetch("sha1/".concat(e.response.content._sha1))];
                case 5:
                    v = _14.sent();
                    if (!g) return [3 /*break*/, 8];
                    return [4 /*yield*/, v.blob()];
                case 6:
                    E = _14.sent(), b_1 = new FileReader, w = new Promise(function (N) { return b_1.onload = N; });
                    b_1.readAsDataURL(E);
                    _10 = a;
                    _12 = {};
                    return [4 /*yield*/, w];
                case 7:
                    _10.apply(void 0, [(_12.dataUrl = (_14.sent()).target.result, _12)]);
                    return [3 /*break*/, 10];
                case 8:
                    _11 = a;
                    _13 = {};
                    return [4 /*yield*/, v.text()];
                case 9:
                    _11.apply(void 0, [(_13.text = _14.sent(), _13)]);
                    _14.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    }); })(); }, [o, e]);
    function u(f, g) { if (f === null)
        return "Loading..."; var v = f; if (v === "")
        return "<Empty>"; if (g.includes("application/json"))
        try {
            return JSON.stringify(JSON.parse(v), null, 2);
        }
        catch (_10) {
            return v;
        } return g.includes("application/x-www-form-urlencoded") ? decodeURIComponent(v) : v; }
    function p(f) { return f >= 200 && f < 400 ? "status-success" : f >= 400 ? "status-failure" : "status-neutral"; }
    var d = e.request.headers.find(function (f) { return f.name === "Content-Type"; }), m = d ? d.value : "", y = e.request.url.substring(e.request.url.lastIndexOf("/") + 1);
    var T = e.response.content.mimeType;
    var k = T.match(/^(.*);\s*charset=.*$/);
    k && (T = k[1]);
    var h = function () { return e.response._failureText ? D("div", { className: "network-request-title", children: [S("div", { className: "network-request-title-status status-failure", children: e.response._failureText }), S("div", { className: "network-request-title-method", children: e.request.method }), S("div", { className: "network-request-title-url", children: e.request.url })] }) : D("div", { className: "network-request-title", children: [S("div", { className: "network-request-title-status " + p(e.response.status), children: e.response.status }), S("div", { className: "network-request-title-method", children: e.request.method }), S("div", { className: "network-request-title-url", children: y }), S("div", { className: "network-request-title-content-type", children: T })] }); };
    return S("div", { className: "network-request " + (n ? "selected" : ""), onClick: function () { return r(t); }, children: S(qK, { expanded: o, setExpanded: s, title: h(), children: D("div", { className: "network-request-details", children: [D("div", { className: "network-request-details-time", children: [e.time, "ms"] }), S("div", { className: "network-request-details-header", children: "URL" }), S("div", { className: "network-request-details-url", children: e.request.url }), S("div", { className: "network-request-details-header", children: "Request Headers" }), S("div", { className: "network-request-headers", children: e.request.headers.map(function (f) { return "".concat(f.name, ": ").concat(f.value); }).join("\n") }), S("div", { className: "network-request-details-header", children: "Response Headers" }), S("div", { className: "network-request-headers", children: e.response.headers.map(function (f) { return "".concat(f.name, ": ").concat(f.value); }).join("\n") }), e.request.postData ? S("div", { className: "network-request-details-header", children: "Request Body" }) : "", e.request.postData ? S("div", { className: "network-request-body", children: u(i, m) }) : "", S("div", { className: "network-request-details-header", children: "Response Body" }), e.response.content._sha1 ? "" : S("div", { className: "network-request-response-body", children: "Response body is not available for this request." }), c !== null && c.dataUrl ? S("img", { src: c.dataUrl }) : "", c !== null && c.text ? S("div", { className: "network-request-response-body", children: u(c.text, e.response.content.mimeType) }) : ""] }) }) });
};
var DK = function (_10) {
    var e = _10.action;
    var _11 = $.useState(0), t = _11[0], n = _11[1], r = e ? Dd(e) : [];
    return S("div", { className: "network-tab", children: r.map(function (o, s) { return S(RK, { resource: o, index: s, selected: t === s, setSelected: n }, s); }) });
};
var $K = "modulepreload", PK = function (e, t) { return new URL(e, t).href; }, eu = {}, MK = function (t, n, r) { if (!n || n.length === 0)
    return t(); var o = document.getElementsByTagName("link"); return Promise.all(n.map(function (s) { if (s = PK(s, r), s in eu)
    return; eu[s] = !0; var i = s.endsWith(".css"), l = i ? '[rel="stylesheet"]' : ""; if (!!r)
    for (var u = o.length - 1; u >= 0; u--) {
        var p = o[u];
        if (p.href === s && (!i || p.rel === "stylesheet"))
            return;
    }
else if (document.querySelector("link[href=\"".concat(s, "\"]").concat(l)))
    return; var a = document.createElement("link"); if (a.rel = i ? "stylesheet" : $K, i || (a.as = "script", a.crossOrigin = ""), a.href = s, document.head.appendChild(a), i)
    return new Promise(function (u, p) { a.addEventListener("load", u), a.addEventListener("error", function () { return p(new Error("Unable to preload CSS for ".concat(s))); }); }); })).then(function () { return t(); }); };
var wh = function (_10) {
    var e = _10.text, t = _10.language, n = _10.readOnly, r = _10.highlight, o = _10.revealLine, s = _10.lineNumbers, i = _10.focusOnChange, l = _10.wrapLines, c = _10.onChange;
    var _11 = ys(), a = _11[0], u = _11[1], p = $.useState(MK(function () { return import("./codeMirrorModule-3678cec2.js"); }, ["./codeMirrorModule-3678cec2.js", "../codeMirrorModule.5d0f417c.css"], import.meta.url).then(function (T) { return T.default; }))[0], d = $.useRef(null), _12 = $.useState(), m = _12[0], y = _12[1];
    return $.useEffect(function () { (function () { return __awaiter(void 0, void 0, void 0, function () { var g, v, T, k, h, f; return __generator(this, function (_10) {
        switch (_10.label) {
            case 0: return [4 /*yield*/, p];
            case 1:
                T = _10.sent(), k = u.current;
                if (!k)
                    return [2 /*return*/];
                h = "javascript";
                if (t === "python" && (h = "python"), t === "java" && (h = "text/x-java"), t === "csharp" && (h = "text/x-csharp"), d.current && h === d.current.cm.getOption("mode") && !!n === d.current.cm.getOption("readOnly") && s === d.current.cm.getOption("lineNumbers") && l === d.current.cm.getOption("lineWrapping"))
                    return [2 /*return*/];
                (v = (g = d.current) == null ? void 0 : g.cm) == null || v.getWrapperElement().remove();
                f = T(k, { value: "", mode: h, readOnly: !!n, lineNumbers: s, lineWrapping: l });
                return [2 /*return*/, (d.current = { cm: f }, y(f), f)];
        }
    }); }); })(); }, [p, m, u, t, s, l, n]), $.useEffect(function () { d.current && d.current.cm.setSize(a.width, a.height); }, [a]), $.useEffect(function () { var k; if (!m)
        return; m.off("change", m.listenerSymbol), m[hi] = void 0, c && (m[hi] = function () { return c(m.getValue()); }, m.on("change", m[hi])); var T = !1; if (m.getValue() !== e && (m.setValue(e), T = !0, i && (m.execCommand("selectAll"), m.focus())), T || JSON.stringify(r) !== JSON.stringify(d.current.highlight)) {
        for (var _10 = 0, _11 = d.current.highlight || []; _10 < _11.length; _10++) {
            var f = _11[_10];
            m.removeLineClass(f.line - 1, "wrap");
        }
        for (var _12 = 0, _13 = r || []; _12 < _13.length; _12++) {
            var f = _13[_12];
            m.addLineClass(f.line - 1, "wrap", "source-line-".concat(f.type));
        }
        for (var _14 = 0, _15 = d.current.widgets || []; _14 < _15.length; _14++) {
            var f = _15[_14];
            m.removeLineWidget(f);
        }
        var h = [];
        for (var _16 = 0, _17 = r || []; _16 < _17.length; _16++) {
            var f = _17[_16];
            if (f.type !== "error")
                continue;
            var g = (k = d.current) == null ? void 0 : k.cm.getLine(f.line - 1);
            if (g) {
                var E = document.createElement("div");
                E.className = "source-line-error-underline", E.innerHTML = "&nbsp;".repeat(g.length || 1), h.push(m.addLineWidget(f.line, E, { above: !0, coverGutter: !1 }));
            }
            var v = document.createElement("div");
            v.innerHTML = yh(f.message || ""), v.className = "source-line-error-widget", h.push(m.addLineWidget(f.line, v, { above: !0, coverGutter: !1 }));
        }
        d.current.highlight = r, d.current.widgets = h;
    } typeof o == "number" && d.current.cm.lineCount() >= o && m.scrollIntoView({ line: Math.max(0, o - 1), ch: 0 }, 50); }, [m, e, r, o, i, c]), S("div", { className: "cm-wrapper", ref: u });
}, hi = Symbol("listener");
var wl = function (_10) {
    var e = _10.noShadow, t = _10.children, n = _10.noMinHeight;
    return S("div", { className: "toolbar" + (e ? " no-shadow" : "") + (n ? " no-min-height" : ""), children: t });
}, tu = { queryAll: function (e, t) { t.startsWith("/") && (t = "." + t); var n = [], r = e.ownerDocument || e; if (!r)
        return n; var o = r.evaluate(t, e, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE); for (var s = o.iterateNext(); s; s = o.iterateNext())
        s.nodeType === Node.ELEMENT_NODE && n.push(s); return n; } };
function Sh(e, t) { for (; t;) {
    if (e.contains(t))
        return !0;
    t = kh(t);
} return !1; }
function ct(e) { if (e.parentElement)
    return e.parentElement; if (e.parentNode && e.parentNode.nodeType === 11 && e.parentNode.host)
    return e.parentNode.host; }
function Eh(e) { var t = e; for (; t.parentNode;)
    t = t.parentNode; if (t.nodeType === 11 || t.nodeType === 9)
    return t; }
function kh(e) { for (; e.parentElement;)
    e = e.parentElement; return ct(e); }
function vo(e, t) { for (; e;) {
    var n = e.closest(t);
    if (n)
        return n;
    e = kh(e);
} }
function qn(e, t) { return e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, t) : void 0; }
function xh(e, t) { if (t = t !== null && t !== void 0 ? t : qn(e), !t)
    return !0; if (Element.prototype.checkVisibility) {
    if (!e.checkVisibility({ checkOpacity: !1, checkVisibilityCSS: !1 }))
        return !1;
}
else {
    var n = e.closest("details,summary");
    if (n !== e && (n == null ? void 0 : n.nodeName) === "DETAILS" && !n.open)
        return !1;
} return t.visibility === "visible"; }
function ms(e) { var t = qn(e); if (!t)
    return !0; if (t.display === "contents") {
    for (var r = e.firstChild; r; r = r.nextSibling)
        if (r.nodeType === 1 && ms(r) || r.nodeType === 3 && IK(r))
            return !0;
    return !1;
} if (!xh(e, t))
    return !1; var n = e.getBoundingClientRect(); return n.width > 0 && n.height > 0; }
function IK(e) { var t = e.ownerDocument.createRange(); t.selectNode(e); var n = t.getBoundingClientRect(); return n.width > 0 && n.height > 0; }
function Th(e, t) { for (var _10 = 0, _11 = t.jsonPath; _10 < _11.length; _10++) {
    var n = _11[_10];
    e != null && (e = e[n]);
} return bh(e, t); }
function bh(e, t) { var n = typeof e == "string" && !t.caseSensitive ? e.toUpperCase() : e, r = typeof t.value == "string" && !t.caseSensitive ? t.value.toUpperCase() : t.value; return t.op === "<truthy>" ? !!n : t.op === "=" ? r instanceof RegExp ? typeof n == "string" && !!n.match(r) : n === r : typeof n != "string" || typeof r != "string" ? !1 : t.op === "*=" ? n.includes(r) : t.op === "^=" ? n.startsWith(r) : t.op === "$=" ? n.endsWith(r) : t.op === "|=" ? n === r || n.startsWith(r + "-") : t.op === "~=" ? n.split(" ").includes(r) : !1; }
function xc(e) { var t = e.ownerDocument; return e.nodeName === "SCRIPT" || e.nodeName === "NOSCRIPT" || e.nodeName === "STYLE" || t.head && t.head.contains(e); }
function Be(e, t) { var n = e.get(t); if (n === void 0) {
    if (n = { full: "", immediate: [] }, !xc(t)) {
        var r = "";
        if (t instanceof HTMLInputElement && (t.type === "submit" || t.type === "button"))
            n = { full: t.value, immediate: [t.value] };
        else {
            for (var o = t.firstChild; o; o = o.nextSibling)
                o.nodeType === Node.TEXT_NODE ? (n.full += o.nodeValue || "", r += o.nodeValue || "") : (r && n.immediate.push(r), r = "", o.nodeType === Node.ELEMENT_NODE && (n.full += Be(e, o).full));
            r && n.immediate.push(r), t.shadowRoot && (n.full += Be(e, t.shadowRoot).full);
        }
    }
    e.set(t, n);
} return n; }
function Is(e, t, n) { if (xc(t) || !n(Be(e, t)))
    return "none"; for (var r = t.firstChild; r; r = r.nextSibling)
    if (r.nodeType === Node.ELEMENT_NODE && n(Be(e, r)))
        return "selfAndChildren"; return t.shadowRoot && n(Be(e, t.shadowRoot)) ? "selfAndChildren" : "self"; }
function OK(e) { if (typeof e.type == "function")
    return e.type.displayName || e.type.name || "Anonymous"; if (typeof e.type == "string")
    return e.type; if (e._currentElement) {
    var t = e._currentElement.type;
    if (typeof t == "string")
        return t;
    if (typeof t == "function")
        return t.displayName || t.name || "Anonymous";
} return ""; }
function UK(e) { var _10; var t; return (_10 = e.key) !== null && _10 !== void 0 ? _10 : ((t = e._currentElement) == null ? void 0 : t.key); }
function FK(e) { if (e.child) {
    var n = [];
    for (var r = e.child; r; r = r.sibling)
        n.push(r);
    return n;
} if (!e._currentElement)
    return []; var t = function (n) { var o; var r = (o = n._currentElement) == null ? void 0 : o.type; return typeof r == "function" || typeof r == "string"; }; if (e._renderedComponent) {
    var n = e._renderedComponent;
    return t(n) ? [n] : [];
} return e._renderedChildren ? __spreadArray([], Object.values(e._renderedChildren), true).filter(t) : []; }
function zK(e) { var r; var t = e.memoizedProps || ((r = e._currentElement) == null ? void 0 : r.props); if (!t || typeof t == "string")
    return t; var n = __assign({}, t); return delete n.children, n; }
function _h(e) {
    var _10;
    var r;
    var t = { key: UK(e), name: OK(e), children: FK(e).map(_h), rootElements: [], props: zK(e) }, n = e.stateNode || e._hostNode || ((r = e._renderedComponent) == null ? void 0 : r._hostNode);
    if (n instanceof Element)
        t.rootElements.push(n);
    else
        for (var _11 = 0, _12 = t.children; _11 < _12.length; _11++) {
            var o = _12[_11];
            (_10 = t.rootElements).push.apply(_10, o.rootElements);
        }
    return t;
}
function Nh(e, t, n) {
    if (n === void 0) { n = []; }
    t(e) && n.push(e);
    for (var _10 = 0, _11 = e.children; _10 < _11.length; _10++) {
        var r = _11[_10];
        Nh(r, t, n);
    }
    return n;
}
function Ch(e, t) {
    if (t === void 0) { t = []; }
    var r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
    do {
        var o = r.currentNode, s = Object.keys(o).find(function (l) { return l.startsWith("__reactContainer"); });
        if (s ? t.push(o[s].stateNode.current) : o.hasOwnProperty("_reactRootContainer") && t.push(o._reactRootContainer._internalRoot.current), o instanceof Element && o.hasAttribute("data-reactroot"))
            for (var _10 = 0, _11 = Object.keys(o); _10 < _11.length; _10++) {
                var l = _11[_10];
                (l.startsWith("__reactInternalInstance") || l.startsWith("__reactFiber")) && t.push(o[l]);
            }
        var i = o instanceof Element ? o.shadowRoot : null;
        i && Ch(i, t);
    } while (r.nextNode());
    return t;
}
var HK = { queryAll: function (e, t) { var _10 = Zt(t, !1), n = _10.name, r = _10.attributes, i = Ch(e.ownerDocument || e).map(function (c) { return _h(c); }).map(function (c) { return Nh(c, function (a) { var _10; var u = (_10 = a.props) !== null && _10 !== void 0 ? _10 : {}; if (a.key !== void 0 && (u.key = a.key), n && a.name !== n || a.rootElements.some(function (p) { return !Sh(e, p); }))
        return !1; for (var _11 = 0, r_1 = r; _11 < r_1.length; _11++) {
        var p = r_1[_11];
        if (!Th(u, p))
            return !1;
    } return !0; }); }).flat(), l = new Set; for (var _11 = 0, i_1 = i; _11 < i_1.length; _11++) {
        var c = i_1[_11];
        for (var _12 = 0, _13 = c.rootElements; _12 < _13.length; _12++) {
            var a = _13[_12];
            l.add(a);
        }
    } return __spreadArray([], l, true); } };
function Lh(e, t) { var n = e.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/"); var r = n.substring(n.lastIndexOf("/") + 1); return t && r.endsWith(t) && (r = r.substring(0, r.length - t.length)), r; }
function BK(e, t) { return t ? t.toUpperCase() : ""; }
var jK = /(?:^|[-_/])(\w)/g, Ah = function (e) { return e && e.replace(jK, BK); };
function VK(e) { function t(u) { var p = u.name || u._componentTag || u.__playwright_guessedName; if (p)
    return p; var d = u.__file; if (d)
    return Ah(Lh(d, ".vue")); } function n(u, p) { return u.type.__playwright_guessedName = p, p; } function r(u) { var d, m, y, T; var p = t(u.type || {}); if (p)
    return p; if (u.root === u)
    return "Root"; for (var k in (m = (d = u.parent) == null ? void 0 : d.type) == null ? void 0 : m.components)
    if (((y = u.parent) == null ? void 0 : y.type.components[k]) === u.type)
        return n(u, k); for (var k in (T = u.appContext) == null ? void 0 : T.components)
    if (u.appContext.components[k] === u.type)
        return n(u, k); return "Anonymous Component"; } function o(u) { return u._isBeingDestroyed || u.isUnmounted; } function s(u) { return u.subTree.type.toString() === "Symbol(Fragment)"; } function i(u) { var p = []; return u.component && p.push(u.component), u.suspense && p.push.apply(p, i(u.suspense.activeBranch)), Array.isArray(u.children) && u.children.forEach(function (d) { d.component ? p.push(d.component) : p.push.apply(p, i(d)); }), p.filter(function (d) { var m; return !o(d) && !((m = d.type.devtools) != null && m.hide); }); } function l(u) { return s(u) ? c(u.subTree) : [u.subTree.el]; } function c(u) { if (!u.children)
    return []; var p = []; for (var d = 0, m = u.children.length; d < m; d++) {
    var y = u.children[d];
    y.component ? p.push.apply(p, l(y.component)) : y.el && p.push(y.el);
} return p; } function a(u) { return { name: r(u), children: i(u.subTree).map(a), rootElements: l(u), props: u.props }; } return a(e); }
function WK(e) { function t(s) { var i = s.displayName || s.name || s._componentTag; if (i)
    return i; var l = s.__file; if (l)
    return Ah(Lh(l, ".vue")); } function n(s) { var i = t(s.$options || s.fnOptions || {}); return i || (s.$root === s ? "Root" : "Anonymous Component"); } function r(s) { return s.$children ? s.$children : Array.isArray(s.subTree.children) ? s.subTree.children.filter(function (i) { return !!i.component; }).map(function (i) { return i.component; }) : []; } function o(s) { return { name: n(s), children: r(s).map(o), rootElements: [s.$el], props: s._props }; } return o(e); }
function qh(e, t, n) {
    if (n === void 0) { n = []; }
    t(e) && n.push(e);
    for (var _10 = 0, _11 = e.children; _10 < _11.length; _10++) {
        var r = _11[_10];
        qh(r, t, n);
    }
    return n;
}
function Rh(e, t) {
    if (t === void 0) { t = []; }
    var r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT), o = new Set;
    do {
        var s = r.currentNode;
        s.__vue__ && o.add(s.__vue__.$root), s.__vue_app__ && s._vnode && s._vnode.component && t.push({ root: s._vnode.component, version: 3 });
        var i = s instanceof Element ? s.shadowRoot : null;
        i && Rh(i, t);
    } while (r.nextNode());
    for (var _10 = 0, o_2 = o; _10 < o_2.length; _10++) {
        var s = o_2[_10];
        t.push({ version: 2, root: s });
    }
    return t;
}
var GK = { queryAll: function (e, t) { var n = e.ownerDocument || e, _10 = Zt(t, !1), r = _10.name, o = _10.attributes, l = Rh(n).map(function (a) { return a.version === 3 ? VK(a.root) : WK(a.root); }).map(function (a) { return qh(a, function (u) { if (r && u.name !== r || u.rootElements.some(function (p) { return !Sh(e, p); }))
        return !1; for (var _10 = 0, o_3 = o; _10 < o_3.length; _10++) {
        var p = o_3[_10];
        if (!Th(u.props, p))
            return !1;
    } return !0; }); }).flat(), c = new Set; for (var _11 = 0, l_1 = l; _11 < l_1.length; _11++) {
        var a = l_1[_11];
        for (var _12 = 0, _13 = a.rootElements; _12 < _13.length; _12++) {
            var u = _13[_12];
            c.add(u);
        }
    } return __spreadArray([], c, true); } };
function nu(e) { return e.hasAttribute("aria-label") || e.hasAttribute("aria-labelledby"); }
var ru = "article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]", QK = ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-errormessage", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"];
function Dh(e) { return QK.some(function (t) { return e.hasAttribute(t); }); }
var pi = { A: function (e) { return e.hasAttribute("href") ? "link" : null; }, AREA: function (e) { return e.hasAttribute("href") ? "link" : null; }, ARTICLE: function () { return "article"; }, ASIDE: function () { return "complementary"; }, BLOCKQUOTE: function () { return "blockquote"; }, BUTTON: function () { return "button"; }, CAPTION: function () { return "caption"; }, CODE: function () { return "code"; }, DATALIST: function () { return "listbox"; }, DD: function () { return "definition"; }, DEL: function () { return "deletion"; }, DETAILS: function () { return "group"; }, DFN: function () { return "term"; }, DIALOG: function () { return "dialog"; }, DT: function () { return "term"; }, EM: function () { return "emphasis"; }, FIELDSET: function () { return "group"; }, FIGURE: function () { return "figure"; }, FOOTER: function (e) { return vo(e, ru) ? null : "contentinfo"; }, FORM: function (e) { return nu(e) ? "form" : null; }, H1: function () { return "heading"; }, H2: function () { return "heading"; }, H3: function () { return "heading"; }, H4: function () { return "heading"; }, H5: function () { return "heading"; }, H6: function () { return "heading"; }, HEADER: function (e) { return vo(e, ru) ? null : "banner"; }, HR: function () { return "separator"; }, HTML: function () { return "document"; }, IMG: function (e) { return e.getAttribute("alt") === "" && !Dh(e) && Number.isNaN(Number(String(e.getAttribute("tabindex")))) ? "presentation" : "img"; }, INPUT: function (e) { var t = e.type.toLowerCase(); if (t === "search")
        return e.hasAttribute("list") ? "combobox" : "searchbox"; if (["email", "tel", "text", "url", ""].includes(t)) {
        var n = Fr(e, e.getAttribute("list"))[0];
        return n && n.tagName === "DATALIST" ? "combobox" : "textbox";
    } return t === "hidden" ? "" : { button: "button", checkbox: "checkbox", image: "button", number: "spinbutton", radio: "radio", range: "slider", reset: "button", submit: "button" }[t] || "textbox"; }, INS: function () { return "insertion"; }, LI: function () { return "listitem"; }, MAIN: function () { return "main"; }, MARK: function () { return "mark"; }, MATH: function () { return "math"; }, MENU: function () { return "list"; }, METER: function () { return "meter"; }, NAV: function () { return "navigation"; }, OL: function () { return "list"; }, OPTGROUP: function () { return "group"; }, OPTION: function () { return "option"; }, OUTPUT: function () { return "status"; }, P: function () { return "paragraph"; }, PROGRESS: function () { return "progressbar"; }, SECTION: function (e) { return nu(e) ? "region" : null; }, SELECT: function (e) { return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox"; }, STRONG: function () { return "strong"; }, SUB: function () { return "subscript"; }, SUP: function () { return "superscript"; }, TABLE: function () { return "table"; }, TBODY: function () { return "rowgroup"; }, TD: function (e) { var t = vo(e, "table"), n = t ? gs(t) : ""; return n === "grid" || n === "treegrid" ? "gridcell" : "cell"; }, TEXTAREA: function () { return "textbox"; }, TFOOT: function () { return "rowgroup"; }, TH: function (e) { if (e.getAttribute("scope") === "col")
        return "columnheader"; if (e.getAttribute("scope") === "row")
        return "rowheader"; var t = vo(e, "table"), n = t ? gs(t) : ""; return n === "grid" || n === "treegrid" ? "gridcell" : "cell"; }, THEAD: function () { return "rowgroup"; }, TIME: function () { return "time"; }, TR: function () { return "row"; }, UL: function () { return "list"; } }, KK = { DD: ["DL", "DIV"], DIV: ["DL"], DT: ["DL", "DIV"], LI: ["OL", "UL"], TBODY: ["TABLE"], TD: ["TR"], TFOOT: ["TABLE"], TH: ["TR"], THEAD: ["TABLE"], TR: ["THEAD", "TBODY", "TFOOT", "TABLE"] };
function ou(e) { var r; var t = ((r = pi[e.tagName]) == null ? void 0 : r.call(pi, e)) || ""; if (!t)
    return null; var n = e; for (; n;) {
    var o = ct(n), s = KK[n.tagName];
    if (!s || !o || !s.includes(o.tagName))
        break;
    var i = gs(o);
    if ((i === "none" || i === "presentation") && !$h(o))
        return i;
    n = o;
} return t; }
var XK = ["alert", "alertdialog", "application", "article", "banner", "blockquote", "button", "caption", "cell", "checkbox", "code", "columnheader", "combobox", "command", "complementary", "composite", "contentinfo", "definition", "deletion", "dialog", "directory", "document", "emphasis", "feed", "figure", "form", "generic", "grid", "gridcell", "group", "heading", "img", "input", "insertion", "landmark", "link", "list", "listbox", "listitem", "log", "main", "marquee", "math", "meter", "menu", "menubar", "menuitem", "menuitemcheckbox", "menuitemradio", "navigation", "none", "note", "option", "paragraph", "presentation", "progressbar", "radio", "radiogroup", "range", "region", "roletype", "row", "rowgroup", "rowheader", "scrollbar", "search", "searchbox", "section", "sectionhead", "select", "separator", "slider", "spinbutton", "status", "strong", "structure", "subscript", "superscript", "switch", "tab", "table", "tablist", "tabpanel", "term", "textbox", "time", "timer", "toolbar", "tooltip", "tree", "treegrid", "treeitem", "widget", "window"], YK = ["command", "composite", "input", "landmark", "range", "roletype", "section", "sectionhead", "select", "structure", "widget", "window"], JK = XK.filter(function (e) { return !YK.includes(e); });
function gs(e) { return (e.getAttribute("role") || "").split(" ").map(function (n) { return n.trim(); }).find(function (n) { return JK.includes(n); }) || null; }
function $h(e) { return !Dh(e); }
function qe(e) { var t = gs(e); return !t || (t === "none" || t === "presentation") && $h(e) ? ou(e) : t; }
function Ph(e) { return e === null ? void 0 : e.toLowerCase() === "true"; }
function Mh(e, t) { if (["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"].includes(e.tagName))
    return !0; var n = e.nodeName === "OPTION" && !!e.closest("select"), r = e.nodeName === "SLOT"; return !n && !r && !xh(e) ? !0 : Ih(e, t); }
function Ih(e, t) { if (!t.has(e)) {
    var n = qn(e);
    var r = !n || n.display === "none" || Ph(e.getAttribute("aria-hidden")) === !0;
    if (!r) {
        var o = ct(e);
        o && (r = r || Ih(o, t));
    }
    t.set(e, r);
} return t.get(e); }
function Fr(e, t) { if (!t)
    return []; var n = Eh(e); if (!n)
    return []; try {
    var r = t.split(" ").filter(function (s) { return !!s; }), o = new Set;
    for (var _10 = 0, r_2 = r; _10 < r_2.length; _10++) {
        var s = r_2[_10];
        var i = n.querySelector("#" + CSS.escape(s));
        i && o.add(i);
    }
    return __spreadArray([], o, true);
}
catch (_11) {
    return [];
} }
function ZK(e) {
    return e.replace(/\r\n/g, "\n").replace(/\u00A0/g, " ").replace(/\s\s+/g, " ").trim();
}
function su(e, t) { var n = __spreadArray([], e.querySelectorAll(t), true); for (var _10 = 0, _11 = Fr(e, e.getAttribute("aria-owns")); _10 < _11.length; _10++) {
    var r = _11[_10];
    r.matches(t) && n.push(r), n.push.apply(n, r.querySelectorAll(t));
} return n; }
function iu(e) { if (!e)
    return ""; var t = e.getPropertyValue("content"); if (t[0] === "'" && t[t.length - 1] === "'" || t[0] === '"' && t[t.length - 1] === '"') {
    var n = t.substring(1, t.length - 1);
    return (e.getPropertyValue("display") || "inline") !== "inline" ? " " + n + " " : n;
} return ""; }
function Oh(e) { var t = e.getAttribute("aria-labelledby"); return t === null ? null : Fr(e, t); }
function eX(e, t) { var n = ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"].includes(e), r = t && ["", "caption", "code", "contentinfo", "definition", "deletion", "emphasis", "insertion", "list", "listitem", "mark", "none", "paragraph", "presentation", "region", "row", "rowgroup", "section", "strong", "subscript", "superscript", "table", "term", "time"].includes(e); return n || r; }
function Os(e, t, n) { return ["caption", "code", "definition", "deletion", "emphasis", "generic", "insertion", "mark", "paragraph", "presentation", "strong", "subscript", "suggestion", "superscript", "term", "time"].includes(qe(e) || "") ? "" : ZK(ot(e, { includeHidden: t, hiddenCache: n, visitedElements: new Set, embeddedInLabelledBy: "none", embeddedInLabel: "none", embeddedInTextAlternativeElement: !1, embeddedInTargetElement: "self" })); }
function ot(e, t) { if (t.visitedElements.has(e))
    return ""; var n = __assign(__assign({}, t), { embeddedInLabel: t.embeddedInLabel === "self" ? "descendant" : t.embeddedInLabel, embeddedInLabelledBy: t.embeddedInLabelledBy === "self" ? "descendant" : t.embeddedInLabelledBy, embeddedInTargetElement: t.embeddedInTargetElement === "self" ? "descendant" : t.embeddedInTargetElement }); if (!t.includeHidden && t.embeddedInLabelledBy !== "self" && Mh(e, t.hiddenCache))
    return t.visitedElements.add(e), ""; if (t.embeddedInLabelledBy === "none") {
    var i = (Oh(e) || []).map(function (l) { return ot(l, __assign(__assign({}, t), { embeddedInLabelledBy: "self", embeddedInTargetElement: "none", embeddedInLabel: "none", embeddedInTextAlternativeElement: !1 })); }).join(" ");
    if (i)
        return i;
} var r = qe(e) || ""; if (t.embeddedInLabel !== "none" || t.embeddedInLabelledBy !== "none") {
    var s = __spreadArray([], e.labels || [], true).includes(e), i = Fr(e, e.getAttribute("aria-labelledby")).includes(e);
    if (!s && !i) {
        if (r === "textbox")
            return t.visitedElements.add(e), e.tagName === "INPUT" || e.tagName === "TEXTAREA" ? e.value : e.textContent || "";
        if (["combobox", "listbox"].includes(r)) {
            t.visitedElements.add(e);
            var l = void 0;
            if (e.tagName === "SELECT")
                l = __spreadArray([], e.selectedOptions, true), !l.length && e.options.length && l.push(e.options[0]);
            else {
                var c = r === "combobox" ? su(e, "*").find(function (a) { return qe(a) === "listbox"; }) : e;
                l = c ? su(c, '[aria-selected="true"]').filter(function (a) { return qe(a) === "option"; }) : [];
            }
            return l.map(function (c) { return ot(c, n); }).join(" ");
        }
        if (["progressbar", "scrollbar", "slider", "spinbutton", "meter"].includes(r))
            return t.visitedElements.add(e), e.hasAttribute("aria-valuetext") ? e.getAttribute("aria-valuetext") || "" : e.hasAttribute("aria-valuenow") ? e.getAttribute("aria-valuenow") || "" : e.getAttribute("value") || "";
        if (["menu"].includes(r))
            return t.visitedElements.add(e), "";
    }
} var o = e.getAttribute("aria-label") || ""; if (o.trim())
    return t.visitedElements.add(e), o; if (!["presentation", "none"].includes(r)) {
    if (e.tagName === "INPUT" && ["button", "submit", "reset"].includes(e.type)) {
        t.visitedElements.add(e);
        var s = e.value || "";
        return s.trim() ? s : e.type === "submit" ? "Submit" : e.type === "reset" ? "Reset" : e.getAttribute("title") || "";
    }
    if (e.tagName === "INPUT" && e.type === "image") {
        t.visitedElements.add(e);
        var s = e.getAttribute("alt") || "";
        if (s.trim())
            return s;
        var i = e.labels || [];
        if (i.length)
            return __spreadArray([], i, true).map(function (c) { return ot(c, __assign(__assign({}, t), { embeddedInLabel: "self", embeddedInTextAlternativeElement: !1, embeddedInLabelledBy: "none", embeddedInTargetElement: "none" })); }).filter(function (c) { return !!c; }).join(" ");
        var l = e.getAttribute("title") || "";
        return l.trim() ? l : "Submit";
    }
    if (e.tagName === "TEXTAREA" || e.tagName === "SELECT" || e.tagName === "INPUT") {
        t.visitedElements.add(e);
        var s = e.labels || [];
        if (s.length)
            return __spreadArray([], s, true).map(function (a) { return ot(a, __assign(__assign({}, t), { embeddedInLabel: "self", embeddedInTextAlternativeElement: !1, embeddedInLabelledBy: "none", embeddedInTargetElement: "none" })); }).filter(function (a) { return !!a; }).join(" ");
        var i = e.tagName === "INPUT" && ["text", "password", "search", "tel", "email", "url"].includes(e.type) || e.tagName === "TEXTAREA", l = e.getAttribute("placeholder") || "", c = e.getAttribute("title") || "";
        return !i || c ? c : l;
    }
    if (e.tagName === "FIELDSET") {
        t.visitedElements.add(e);
        for (var i = e.firstElementChild; i; i = i.nextElementSibling)
            if (i.tagName === "LEGEND")
                return ot(i, __assign(__assign({}, n), { embeddedInTextAlternativeElement: !0 }));
        return e.getAttribute("title") || "";
    }
    if (e.tagName === "FIGURE") {
        t.visitedElements.add(e);
        for (var i = e.firstElementChild; i; i = i.nextElementSibling)
            if (i.tagName === "FIGCAPTION")
                return ot(i, __assign(__assign({}, n), { embeddedInTextAlternativeElement: !0 }));
        return e.getAttribute("title") || "";
    }
    if (e.tagName === "IMG") {
        t.visitedElements.add(e);
        var s = e.getAttribute("alt") || "";
        return s.trim() ? s : e.getAttribute("title") || "";
    }
    if (e.tagName === "TABLE") {
        t.visitedElements.add(e);
        for (var i = e.firstElementChild; i; i = i.nextElementSibling)
            if (i.tagName === "CAPTION")
                return ot(i, __assign(__assign({}, n), { embeddedInTextAlternativeElement: !0 }));
        var s = e.getAttribute("summary") || "";
        if (s)
            return s;
    }
    if (e.tagName === "AREA") {
        t.visitedElements.add(e);
        var s = e.getAttribute("alt") || "";
        return s.trim() ? s : e.getAttribute("title") || "";
    }
    if (e.tagName === "SVG" && e.ownerSVGElement) {
        t.visitedElements.add(e);
        for (var s = e.firstElementChild; s; s = s.nextElementSibling)
            if (s.tagName === "TITLE" && e.ownerSVGElement)
                return ot(s, __assign(__assign({}, n), { embeddedInTextAlternativeElement: !0 }));
    }
} if (eX(r, t.embeddedInTargetElement === "descendant") || t.embeddedInLabelledBy !== "none" || t.embeddedInLabel !== "none" || t.embeddedInTextAlternativeElement) {
    t.visitedElements.add(e);
    var s_1 = [], i = function (a, u) { var p; if (!(u && a.assignedSlot))
        if (a.nodeType === 1) {
            var d = ((p = qn(a)) == null ? void 0 : p.getPropertyValue("display")) || "inline";
            var m = ot(a, n);
            (d !== "inline" || a.nodeName === "BR") && (m = " " + m + " "), s_1.push(m);
        }
        else
            a.nodeType === 3 && s_1.push(a.textContent || ""); };
    s_1.push(iu(qn(e, "::before")));
    var l = e.nodeName === "SLOT" ? e.assignedNodes() : [];
    if (l.length)
        for (var _10 = 0, l_2 = l; _10 < l_2.length; _10++) {
            var a = l_2[_10];
            i(a, !1);
        }
    else {
        for (var a = e.firstChild; a; a = a.nextSibling)
            i(a, !0);
        if (e.shadowRoot)
            for (var a = e.shadowRoot.firstChild; a; a = a.nextSibling)
                i(a, !0);
        for (var _11 = 0, _12 = Fr(e, e.getAttribute("aria-owns")); _11 < _12.length; _11++) {
            var a = _12[_11];
            i(a, !0);
        }
    }
    s_1.push(iu(qn(e, "::after")));
    var c = s_1.join("");
    if (c.trim())
        return c;
} if (!["presentation", "none"].includes(r) || e.tagName === "IFRAME") {
    t.visitedElements.add(e);
    var s = e.getAttribute("title") || "";
    if (s.trim())
        return s;
} return t.visitedElements.add(e), ""; }
var Uh = ["gridcell", "option", "row", "tab", "rowheader", "columnheader", "treeitem"];
function tX(e) { return e.tagName === "OPTION" ? e.selected : Uh.includes(qe(e) || "") ? Ph(e.getAttribute("aria-selected")) === !0 : !1; }
var Fh = ["checkbox", "menuitemcheckbox", "option", "radio", "switch", "menuitemradio", "treeitem"];
function nX(e) { var t = zh(e, !0); return t === "error" ? !1 : t; }
function zh(e, t) { if (t && e.tagName === "INPUT" && e.indeterminate)
    return "mixed"; if (e.tagName === "INPUT" && ["checkbox", "radio"].includes(e.type))
    return e.checked; if (Fh.includes(qe(e) || "")) {
    var n = e.getAttribute("aria-checked");
    return n === "true" ? !0 : t && n === "mixed" ? "mixed" : !1;
} return "error"; }
var Hh = ["button"];
function rX(e) { if (Hh.includes(qe(e) || "")) {
    var t = e.getAttribute("aria-pressed");
    if (t === "true")
        return !0;
    if (t === "mixed")
        return "mixed";
} return !1; }
var Bh = ["application", "button", "checkbox", "combobox", "gridcell", "link", "listbox", "menuitem", "row", "rowheader", "tab", "treeitem", "columnheader", "menuitemcheckbox", "menuitemradio", "rowheader", "switch"];
function oX(e) { if (e.tagName === "DETAILS")
    return e.open; if (Bh.includes(qe(e) || "")) {
    var t = e.getAttribute("aria-expanded");
    return t === null ? "none" : t === "true";
} return "none"; }
var jh = ["heading", "listitem", "row", "treeitem"];
function sX(e) { var t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[e.tagName]; if (t)
    return t; if (jh.includes(qe(e) || "")) {
    var n = e.getAttribute("aria-level"), r = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(r) && r >= 1)
        return r;
} return 0; }
var iX = ["application", "button", "composite", "gridcell", "group", "input", "link", "menuitem", "scrollbar", "separator", "tab", "checkbox", "columnheader", "combobox", "grid", "listbox", "menu", "menubar", "menuitemcheckbox", "menuitemradio", "option", "radio", "radiogroup", "row", "rowheader", "searchbox", "select", "slider", "spinbutton", "switch", "tablist", "textbox", "toolbar", "tree", "treegrid", "treeitem"];
function Vh(e) { return ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTION", "OPTGROUP"].includes(e.tagName) && (e.hasAttribute("disabled") || Wh(e)) ? !0 : Gh(e); }
function Wh(e) { return e ? e.tagName === "FIELDSET" && e.hasAttribute("disabled") ? !0 : Wh(e.parentElement) : !1; }
function Gh(e) { if (!e)
    return !1; if (iX.includes(qe(e) || "")) {
    var t = (e.getAttribute("aria-disabled") || "").toLowerCase();
    if (t === "true")
        return !0;
    if (t === "false")
        return !1;
} return Gh(ct(e)); }
var Qh = ["selected", "checked", "pressed", "expanded", "level", "disabled", "name", "include-hidden"];
Qh.sort();
function rr(e, t, n) { if (!t.includes(n))
    throw new Error("\"".concat(e, "\" attribute is only supported for roles: ").concat(t.slice().sort().map(function (r) { return "\"".concat(r, "\""); }).join(", "))); }
function un(e, t) { if (e.op !== "<truthy>" && !t.includes(e.value))
    throw new Error("\"".concat(e.name, "\" must be one of ").concat(t.map(function (n) { return JSON.stringify(n); }).join(", "))); }
function fn(e, t) { if (!t.includes(e.op))
    throw new Error("\"".concat(e.name, "\" does not support \"").concat(e.op, "\" matcher")); }
function lX(e, t) { var n = { role: t }; for (var _10 = 0, e_2 = e; _10 < e_2.length; _10++) {
    var r = e_2[_10];
    switch (r.name) {
        case "checked": {
            rr(r.name, Fh, t), un(r, [!0, !1, "mixed"]), fn(r, ["<truthy>", "="]), n.checked = r.op === "<truthy>" ? !0 : r.value;
            break;
        }
        case "pressed": {
            rr(r.name, Hh, t), un(r, [!0, !1, "mixed"]), fn(r, ["<truthy>", "="]), n.pressed = r.op === "<truthy>" ? !0 : r.value;
            break;
        }
        case "selected": {
            rr(r.name, Uh, t), un(r, [!0, !1]), fn(r, ["<truthy>", "="]), n.selected = r.op === "<truthy>" ? !0 : r.value;
            break;
        }
        case "expanded": {
            rr(r.name, Bh, t), un(r, [!0, !1]), fn(r, ["<truthy>", "="]), n.expanded = r.op === "<truthy>" ? !0 : r.value;
            break;
        }
        case "level": {
            if (rr(r.name, jh, t), typeof r.value == "string" && (r.value = +r.value), r.op !== "=" || typeof r.value != "number" || Number.isNaN(r.value))
                throw new Error('"level" attribute must be compared to a number');
            n.level = r.value;
            break;
        }
        case "disabled": {
            un(r, [!0, !1]), fn(r, ["<truthy>", "="]), n.disabled = r.op === "<truthy>" ? !0 : r.value;
            break;
        }
        case "name": {
            if (r.op === "<truthy>")
                throw new Error('"name" attribute must have a value');
            if (typeof r.value != "string" && !(r.value instanceof RegExp))
                throw new Error('"name" attribute must be a string or a regular expression');
            n.name = r.value, n.nameOp = r.op, n.exact = r.caseSensitive;
            break;
        }
        case "include-hidden": {
            un(r, [!0, !1]), fn(r, ["<truthy>", "="]), n.includeHidden = r.op === "<truthy>" ? !0 : r.value;
            break;
        }
        default: throw new Error("Unknown attribute \"".concat(r.name, "\", must be one of ").concat(Qh.map(function (o) { return "\"".concat(o, "\""); }).join(", "), "."));
    }
} return n; }
function cX(e, t, n) { var r = new Map, o = [], s = function (l) { if (qe(l) === t.role && !(t.selected !== void 0 && tX(l) !== t.selected) && !(t.checked !== void 0 && nX(l) !== t.checked) && !(t.pressed !== void 0 && rX(l) !== t.pressed) && !(t.expanded !== void 0 && oX(l) !== t.expanded) && !(t.level !== void 0 && sX(l) !== t.level) && !(t.disabled !== void 0 && Vh(l) !== t.disabled) && !(!t.includeHidden && Mh(l, r))) {
    if (t.name !== void 0) {
        var c = Ne(Os(l, !!t.includeHidden, r));
        if (typeof t.name == "string" && (t.name = Ne(t.name)), n && !t.exact && t.nameOp === "=" && (t.nameOp = "*="), !bh(c, { name: "", jsonPath: [], op: t.nameOp || "=", value: t.name, caseSensitive: !!t.exact }))
            return;
    }
    o.push(l);
} }, i = function (l) { var c = []; l.shadowRoot && c.push(l.shadowRoot); for (var _10 = 0, _11 = l.querySelectorAll("*"); _10 < _11.length; _10++) {
    var a = _11[_10];
    s(a), a.shadowRoot && c.push(a.shadowRoot);
} c.forEach(i); }; return i(e), o; }
function lu(e) { return { queryAll: function (t, n) { var r = Zt(n, !0), o = r.name.toLowerCase(); if (!o)
        throw new Error("Role must not be empty"); var s = lX(r.attributes, o); return cX(t, s, e); } }; }
function aX(e, t, n) { var r = e.left - t.right; if (!(r < 0 || n !== void 0 && r > n))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0); }
function uX(e, t, n) { var r = t.left - e.right; if (!(r < 0 || n !== void 0 && r > n))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0); }
function fX(e, t, n) { var r = t.top - e.bottom; if (!(r < 0 || n !== void 0 && r > n))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0); }
function dX(e, t, n) { var r = e.top - t.bottom; if (!(r < 0 || n !== void 0 && r > n))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0); }
function hX(e, t, n) { var r = n === void 0 ? 50 : n; var o = 0; return e.left - t.right >= 0 && (o += e.left - t.right), t.left - e.right >= 0 && (o += t.left - e.right), t.top - e.bottom >= 0 && (o += t.top - e.bottom), e.top - t.bottom >= 0 && (o += e.top - t.bottom), o > r ? void 0 : o; }
var pX = ["left-of", "right-of", "above", "below", "near"];
function Kh(e, t, n, r) { var o = t.getBoundingClientRect(), s = { "left-of": uX, "right-of": aX, above: fX, below: dX, near: hX }[e]; var i; for (var _10 = 0, n_3 = n; _10 < n_3.length; _10++) {
    var l = n_3[_10];
    if (l === t)
        continue;
    var c = s(o, l.getBoundingClientRect(), r);
    c !== void 0 && (i === void 0 || c < i) && (i = c);
} return i; }
var mX = /** @class */ (function () {
    function mX(t) {
        this._engines = new Map, this._cacheQueryCSS = new Map, this._cacheMatches = new Map, this._cacheQuery = new Map, this._cacheMatchesSimple = new Map, this._cacheMatchesParents = new Map, this._cacheCallMatches = new Map, this._cacheCallQuery = new Map, this._cacheQuerySimple = new Map, this._cacheText = new Map, this._retainCacheCounter = 0;
        for (var _10 = 0, t_2 = t; _10 < t_2.length; _10++) {
            var _11 = t_2[_10], o = _11[0], s = _11[1];
            this._engines.set(o, s);
        }
        this._engines.set("not", yX), this._engines.set("is", ar), this._engines.set("where", ar), this._engines.set("has", gX), this._engines.set("scope", vX), this._engines.set("light", wX), this._engines.set("visible", SX), this._engines.set("text", EX), this._engines.set("text-is", kX), this._engines.set("text-matches", xX), this._engines.set("has-text", TX), this._engines.set("right-of", or("right-of")), this._engines.set("left-of", or("left-of")), this._engines.set("above", or("above")), this._engines.set("below", or("below")), this._engines.set("near", or("near")), this._engines.set("nth-match", bX);
        var n = __spreadArray([], this._engines.keys(), true);
        n.sort();
        var r = __spreadArray([], th, true);
        if (r.sort(), n.join("|") !== r.join("|"))
            throw new Error("Please keep customCSSNames in sync with evaluator engines: ".concat(n.join("|"), " vs ").concat(r.join("|")));
    }
    mX.prototype.begin = function () { ++this._retainCacheCounter; };
    mX.prototype.end = function () { --this._retainCacheCounter, this._retainCacheCounter || (this._cacheQueryCSS.clear(), this._cacheMatches.clear(), this._cacheQuery.clear(), this._cacheMatchesSimple.clear(), this._cacheMatchesParents.clear(), this._cacheCallMatches.clear(), this._cacheCallQuery.clear(), this._cacheQuerySimple.clear(), this._cacheText.clear()); };
    mX.prototype._cached = function (t, n, r, o) { t.has(n) || t.set(n, []); var s = t.get(n), i = s.find(function (c) { return r.every(function (a, u) { return c.rest[u] === a; }); }); if (i)
        return i.result; var l = o(); return s.push({ rest: r, result: l }), l; };
    mX.prototype._checkSelector = function (t) { if (!(typeof t == "object" && t && (Array.isArray(t) || "simples" in t && t.simples.length)))
        throw new Error("Malformed selector \"".concat(t, "\"")); return t; };
    mX.prototype.matches = function (t, n, r) {
        var _this = this;
        var o = this._checkSelector(n);
        this.begin();
        try {
            return this._cached(this._cacheMatches, t, [o, r.scope, r.pierceShadow], function () { return Array.isArray(o) ? _this._matchesEngine(ar, t, o, r) : _this._matchesSimple(t, o.simples[o.simples.length - 1].selector, r) ? _this._matchesParents(t, o, o.simples.length - 2, r) : !1; });
        }
        finally {
            this.end();
        }
    };
    mX.prototype.query = function (t, n) {
        var _this = this;
        var r = this._checkSelector(n);
        this.begin();
        try {
            return this._cached(this._cacheQuery, r, [t.scope, t.pierceShadow], function () { if (Array.isArray(r))
                return _this._queryEngine(ar, t, r); var o = _this._scoreMap; _this._scoreMap = new Map; var s = _this._querySimple(t, r.simples[r.simples.length - 1].selector); return s = s.filter(function (i) { return _this._matchesParents(i, r, r.simples.length - 2, t); }), _this._scoreMap.size && s.sort(function (i, l) { var c = _this._scoreMap.get(i), a = _this._scoreMap.get(l); return c === a ? 0 : c === void 0 ? 1 : a === void 0 ? -1 : c - a; }), _this._scoreMap = o, s; });
        }
        finally {
            this.end();
        }
    };
    mX.prototype._markScore = function (t, n) { this._scoreMap && this._scoreMap.set(t, n); };
    mX.prototype._matchesSimple = function (t, n, r) {
        var _this = this;
        return this._cached(this._cacheMatchesSimple, t, [n, r.scope, r.pierceShadow], function () { if (!n.functions.some(function (s) { return s.name === "scope" || s.name === "is"; }) && t === r.scope || n.css && !_this._matchesCSS(t, n.css))
            return !1; for (var _10 = 0, _11 = n.functions; _10 < _11.length; _10++) {
            var s = _11[_10];
            if (!_this._matchesEngine(_this._getEngine(s.name), t, s.args, r))
                return !1;
        } return !0; });
    };
    mX.prototype._querySimple = function (t, n) {
        var _this = this;
        return n.functions.length ? this._cached(this._cacheQuerySimple, n, [t.scope, t.pierceShadow], function () { var r = n.css; var o = n.functions; r === "*" && o.length && (r = void 0); var s, i = -1; r !== void 0 ? (s = _this._queryCSS(t, r), o.some(function (c) { return c.name === "scope"; }) && t.scope.nodeType === 1 && _this._matchesCSS(t.scope, r) && s.unshift(t.scope)) : (i = o.findIndex(function (l) { return _this._getEngine(l.name).query !== void 0; }), i === -1 && (i = 0), s = _this._queryEngine(_this._getEngine(o[i].name), t, o[i].args)); var _loop_1 = function (l) {
            if (l === i)
                return "continue";
            var c = _this._getEngine(o[l].name);
            c.matches !== void 0 && (s = s.filter(function (a) { return _this._matchesEngine(c, a, o[l].args, t); }));
        }; for (var l = 0; l < o.length; l++) {
            _loop_1(l);
        } var _loop_2 = function (l) {
            if (l === i)
                return "continue";
            var c = _this._getEngine(o[l].name);
            c.matches === void 0 && (s = s.filter(function (a) { return _this._matchesEngine(c, a, o[l].args, t); }));
        }; for (var l = 0; l < o.length; l++) {
            _loop_2(l);
        } return s; }) : this._queryCSS(t, n.css || "*");
    };
    mX.prototype._matchesParents = function (t, n, r, o) {
        var _this = this;
        return r < 0 ? !0 : this._cached(this._cacheMatchesParents, t, [n, r, o.scope, o.pierceShadow], function () { var _10 = n.simples[r], s = _10.selector, i = _10.combinator; if (i === ">") {
            var l = yo(t, o);
            return !l || !_this._matchesSimple(l, s, o) ? !1 : _this._matchesParents(l, n, r - 1, o);
        } if (i === "+") {
            var l = mi(t, o);
            return !l || !_this._matchesSimple(l, s, o) ? !1 : _this._matchesParents(l, n, r - 1, o);
        } if (i === "") {
            var l = yo(t, o);
            for (; l;) {
                if (_this._matchesSimple(l, s, o)) {
                    if (_this._matchesParents(l, n, r - 1, o))
                        return !0;
                    if (n.simples[r - 1].combinator === "")
                        break;
                }
                l = yo(l, o);
            }
            return !1;
        } if (i === "~") {
            var l = mi(t, o);
            for (; l;) {
                if (_this._matchesSimple(l, s, o)) {
                    if (_this._matchesParents(l, n, r - 1, o))
                        return !0;
                    if (n.simples[r - 1].combinator === "~")
                        break;
                }
                l = mi(l, o);
            }
            return !1;
        } if (i === ">=") {
            var l = t;
            for (; l;) {
                if (_this._matchesSimple(l, s, o)) {
                    if (_this._matchesParents(l, n, r - 1, o))
                        return !0;
                    if (n.simples[r - 1].combinator === "")
                        break;
                }
                l = yo(l, o);
            }
            return !1;
        } throw new Error("Unsupported combinator \"".concat(i, "\"")); });
    };
    mX.prototype._matchesEngine = function (t, n, r, o) { if (t.matches)
        return this._callMatches(t, n, r, o); if (t.query)
        return this._callQuery(t, r, o).includes(n); throw new Error('Selector engine should implement "matches" or "query"'); };
    mX.prototype._queryEngine = function (t, n, r) {
        var _this = this;
        if (t.query)
            return this._callQuery(t, r, n);
        if (t.matches)
            return this._queryCSS(n, "*").filter(function (o) { return _this._callMatches(t, o, r, n); });
        throw new Error('Selector engine should implement "matches" or "query"');
    };
    mX.prototype._callMatches = function (t, n, r, o) {
        var _this = this;
        return this._cached(this._cacheCallMatches, n, __spreadArray([t, o.scope, o.pierceShadow], r, true), function () { return t.matches(n, r, o, _this); });
    };
    mX.prototype._callQuery = function (t, n, r) {
        var _this = this;
        return this._cached(this._cacheCallQuery, t, __spreadArray([r.scope, r.pierceShadow], n, true), function () { return t.query(r, n, _this); });
    };
    mX.prototype._matchesCSS = function (t, n) { return t.matches(n); };
    mX.prototype._queryCSS = function (t, n) { return this._cached(this._cacheQueryCSS, n, [t.scope, t.pierceShadow], function () { var r = []; function o(s) { if (r = r.concat(__spreadArray([], s.querySelectorAll(n), true)), !!t.pierceShadow) {
        s.shadowRoot && o(s.shadowRoot);
        for (var _10 = 0, _11 = s.querySelectorAll("*"); _10 < _11.length; _10++) {
            var i = _11[_10];
            i.shadowRoot && o(i.shadowRoot);
        }
    } } return o(t.scope), r; }); };
    mX.prototype._getEngine = function (t) { var n = this._engines.get(t); if (!n)
        throw new Error("Unknown selector engine \"".concat(t, "\"")); return n; };
    return mX;
}());
var ar = { matches: function (e, t, n, r) { if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list'); return t.some(function (o) { return r.matches(e, o, n); }); }, query: function (e, t, n) { if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list'); var r = []; for (var _10 = 0, t_3 = t; _10 < t_3.length; _10++) {
        var o = t_3[_10];
        r = r.concat(n.query(e, o));
    } return t.length === 1 ? r : _X(r); } }, gX = { matches: function (e, t, n, r) { if (t.length === 0)
        throw new Error('"has" engine expects non-empty selector list'); return r.query(__assign(__assign({}, n), { scope: e }), t).length > 0; } }, vX = { matches: function (e, t, n, r) { if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments'); return n.scope.nodeType === 9 ? e === n.scope.documentElement : e === n.scope; }, query: function (e, t, n) { if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments'); if (e.scope.nodeType === 9) {
        var r = e.scope.documentElement;
        return r ? [r] : [];
    } return e.scope.nodeType === 1 ? [e.scope] : []; } }, yX = { matches: function (e, t, n, r) { if (t.length === 0)
        throw new Error('"not" engine expects non-empty selector list'); return !r.matches(e, t, n); } }, wX = { query: function (e, t, n) { return n.query(__assign(__assign({}, e), { pierceShadow: !1 }), t); }, matches: function (e, t, n, r) { return r.matches(e, t, __assign(__assign({}, n), { pierceShadow: !1 })); } }, SX = { matches: function (e, t, n, r) { if (t.length)
        throw new Error('"visible" engine expects no arguments'); return ms(e); } }, EX = { matches: function (e, t, n, r) { if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"text" engine expects a single string'); var o = Ne(t[0]).toLowerCase(), s = function (i) { return Ne(i.full).toLowerCase().includes(o); }; return Is(r._cacheText, e, s) === "self"; } }, kX = { matches: function (e, t, n, r) { if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"text-is" engine expects a single string'); var o = Ne(t[0]), s = function (i) { return !o && !i.immediate.length ? !0 : i.immediate.some(function (l) { return Ne(l) === o; }); }; return Is(r._cacheText, e, s) !== "none"; } }, xX = { matches: function (e, t, n, r) { if (t.length === 0 || typeof t[0] != "string" || t.length > 2 || t.length === 2 && typeof t[1] != "string")
        throw new Error('"text-matches" engine expects a regexp body and optional regexp flags'); var o = new RegExp(t[0], t.length === 2 ? t[1] : void 0), s = function (i) { return o.test(i.full); }; return Is(r._cacheText, e, s) === "self"; } }, TX = { matches: function (e, t, n, r) { if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"has-text" engine expects a single string'); if (xc(e))
        return !1; var o = Ne(t[0]).toLowerCase(); return (function (i) { return Ne(i.full).toLowerCase().includes(o); })(Be(r._cacheText, e)); } };
function or(e) { return { matches: function (t, n, r, o) { var s = n.length && typeof n[n.length - 1] == "number" ? n[n.length - 1] : void 0, i = s === void 0 ? n : n.slice(0, n.length - 1); if (n.length < 1 + (s === void 0 ? 0 : 1))
        throw new Error("\"".concat(e, "\" engine expects a selector list and optional maximum distance in pixels")); var l = o.query(r, i), c = Kh(e, t, l, s); return c === void 0 ? !1 : (o._markScore(t, c), !0); } }; }
var bX = { query: function (e, t, n) { var r = t[t.length - 1]; if (t.length < 2)
        throw new Error('"nth-match" engine expects non-empty selector list and an index argument'); if (typeof r != "number" || r < 1)
        throw new Error('"nth-match" engine expects a one-based index as the last argument'); var o = ar.query(e, t.slice(0, t.length - 1), n); return r--, r < o.length ? [o[r]] : []; } };
function yo(e, t) { if (e !== t.scope)
    return t.pierceShadow ? ct(e) : e.parentElement || void 0; }
function mi(e, t) { if (e !== t.scope)
    return e.previousElementSibling || void 0; }
function _X(e) { var t = new Map, n = [], r = []; function o(i) { var l = t.get(i); if (l)
    return l; var c = ct(i); return c ? o(c).children.push(i) : n.push(i), l = { children: [], taken: !1 }, t.set(i, l), l; } e.forEach(function (i) { return o(i).taken = !0; }); function s(i) { var l = t.get(i); if (l.taken && r.push(i), l.children.length > 1) {
    var c = new Set(l.children);
    l.children = [];
    var a = i.firstElementChild;
    for (; a && l.children.length < c.size;)
        c.has(a) && l.children.push(a), a = a.nextElementSibling;
    for (a = i.shadowRoot ? i.shadowRoot.firstElementChild : null; a && l.children.length < c.size;)
        c.has(a) && l.children.push(a), a = a.nextElementSibling;
} l.children.forEach(s); } return n.forEach(s), r; }
var Xh = new Map, Yh = new Map, Jh = 10, Gn = Jh / 2, cu = 1, NX = 2, CX = 10, LX = 50, Zh = 100, ep = 120, Tc = 140, tp = 160, Sl = 180, np = 200, AX = 250, qX = Zh + Gn, RX = ep + Gn, rp = Tc + Gn, DX = tp + Gn, $X = Sl + Gn, PX = np + Gn, MX = 300, IX = 500, op = 510, gi = 520, sp = 530, ip = 1e4, OX = 1e7;
function UX(e, t, n) { try {
    var r = e.parseSelector(t);
    return { selector: t, elements: e.querySelectorAll(r, n) };
}
catch (_10) {
    return { selector: t, elements: [] };
} }
function El(e, t, n) { e._evaluator.begin(); try {
    t = t.closest("button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]") || t;
    var o = FX(e, t, n) || BX(e, t), s = cp(o), i = e.parseSelector(s);
    return { selector: s, elements: e.querySelectorAll(i, t.ownerDocument) };
}
finally {
    Xh.clear(), Yh.clear(), e._evaluator.end();
} }
function au(e) { return e.filter(function (t) { return t[0].selector[0] !== "/"; }); }
function FX(e, t, n) { if (t.ownerDocument.documentElement === t)
    return [{ engine: "css", selector: "html", score: 1 }]; var r = new Map, o = function (i, l) { var c = i === t; var a = l ? HX(e, i, i === t, r) : []; i !== t && (a = au(a)); var u = zX(e, i, n, r).map(function (m) { return [m]; }); var p = uu(e, t.ownerDocument, i, __spreadArray(__spreadArray([], a, true), u, true), c); a = au(a); var d = function (m) { var y = l && !m.length, T = __spreadArray(__spreadArray([], m, true), u, true).filter(function (h) { return p ? Qt(h) < Qt(p) : !0; }); var k = T[0]; if (k)
    for (var h = kl(i); h; h = kl(h)) {
        var f = s(h, y);
        if (!f || p && Qt(__spreadArray(__spreadArray([], f, true), k, true)) >= Qt(p))
            continue;
        if (k = uu(e, h, i, T, c), !k)
            return;
        var g = __spreadArray(__spreadArray([], f, true), k, true);
        (!p || Qt(g) < Qt(p)) && (p = g);
    } }; return d(a), i === t && a.length && d([]), p; }, s = function (i, l) { var c = l ? Xh : Yh; var a = c.get(i); return a === void 0 && (a = o(i, l), c.set(i, a)), a; }; return s(t, !0); }
function zX(e, t, n, r) { var l; var o = []; for (var _10 = 0, _11 = ["data-testid", "data-test-id", "data-test"]; _10 < _11.length; _10++) {
    var c = _11[_10];
    c !== n && t.getAttribute(c) && o.push({ engine: "css", selector: "[".concat(c, "=").concat(wo(t.getAttribute(c)), "]"), score: NX });
} var s = t.getAttribute("id"); if (s && !jX(s) && o.push({ engine: "css", selector: lp(s), score: IX }), o.push({ engine: "css", selector: lt(t.nodeName.toLowerCase()), score: sp }), t.nodeName === "IFRAME") {
    for (var _12 = 0, _13 = ["name", "title"]; _12 < _13.length; _12++) {
        var c = _13[_12];
        t.getAttribute(c) && o.push({ engine: "css", selector: "".concat(lt(t.nodeName.toLowerCase()), "[").concat(c, "=").concat(wo(t.getAttribute(c)), "]"), score: CX });
    }
    return t.getAttribute(n) && o.push({ engine: "css", selector: "[".concat(n, "=").concat(De(t.getAttribute(n), !0), "]"), score: cu }), xl([o]), o;
} if (t.getAttribute(n) && o.push({ engine: "internal:testid", selector: "[".concat(n, "=").concat(De(t.getAttribute(n), !0), "]"), score: cu }), t.nodeName === "INPUT" || t.nodeName === "TEXTAREA") {
    var c = t;
    c.placeholder && (o.push({ engine: "internal:attr", selector: "[placeholder=".concat(De(c.placeholder, !1), "]"), score: Zh }), o.push({ engine: "internal:attr", selector: "[placeholder=".concat(De(c.placeholder, !0), "]"), score: qX }));
    var a = (l = c.labels) == null ? void 0 : l[0];
    if (a) {
        var u = Be(e._evaluator._cacheText, a).full.trim();
        o.push({ engine: "internal:label", selector: zn(u, !1), score: ep }), o.push({ engine: "internal:label", selector: zn(u, !0), score: RX });
    }
} var i = qe(t); if (i && !["none", "presentation"].includes(i)) {
    var c = Os(t, !1, r);
    c ? (o.push({ engine: "internal:role", selector: "".concat(i, "[name=").concat(De(c, !1), "]"), score: Tc }), o.push({ engine: "internal:role", selector: "".concat(i, "[name=").concat(De(c, !0), "]"), score: rp })) : o.push({ engine: "internal:role", selector: i, score: op });
} return t.getAttribute("alt") && ["APPLET", "AREA", "IMG", "INPUT"].includes(t.nodeName) && (o.push({ engine: "internal:attr", selector: "[alt=".concat(De(t.getAttribute("alt"), !1), "]"), score: tp }), o.push({ engine: "internal:attr", selector: "[alt=".concat(De(t.getAttribute("alt"), !0), "]"), score: DX })), t.getAttribute("name") && ["BUTTON", "FORM", "FIELDSET", "FRAME", "IFRAME", "INPUT", "KEYGEN", "OBJECT", "OUTPUT", "SELECT", "TEXTAREA", "MAP", "META", "PARAM"].includes(t.nodeName) && o.push({ engine: "css", selector: "".concat(lt(t.nodeName.toLowerCase()), "[name=").concat(wo(t.getAttribute("name")), "]"), score: gi }), t.getAttribute("title") && (o.push({ engine: "internal:attr", selector: "[title=".concat(De(t.getAttribute("title"), !1), "]"), score: np }), o.push({ engine: "internal:attr", selector: "[title=".concat(De(t.getAttribute("title"), !0), "]"), score: PX })), ["INPUT", "TEXTAREA"].includes(t.nodeName) && t.getAttribute("type") !== "hidden" && t.getAttribute("type") && o.push({ engine: "css", selector: "".concat(lt(t.nodeName.toLowerCase()), "[type=").concat(wo(t.getAttribute("type")), "]"), score: gi }), ["INPUT", "TEXTAREA", "SELECT"].includes(t.nodeName) && t.getAttribute("type") !== "hidden" && o.push({ engine: "css", selector: lt(t.nodeName.toLowerCase()), score: gi + 1 }), xl([o]), o; }
function HX(e, t, n, r) { if (t.nodeName === "SELECT")
    return []; var o = Ne(Be(e._evaluator._cacheText, t).full).substring(0, 80); if (!o)
    return []; var s = [], i = zn(o, !1); n && (s.push([{ engine: "internal:text", selector: i, score: Sl }]), s.push([{ engine: "internal:text", selector: zn(o, !0), score: $X }])); var l = qe(t), c = []; if (l && !["none", "presentation"].includes(l)) {
    var a = Os(t, !1, r);
    a ? (c.push({ engine: "internal:role", selector: "".concat(l, "[name=").concat(De(a, !1), "]"), score: Tc }), c.push({ engine: "internal:role", selector: "".concat(l, "[name=").concat(De(a, !0), "]"), score: rp })) : c.push({ engine: "internal:role", selector: l, score: op });
}
else
    c.push({ engine: "css", selector: t.nodeName.toLowerCase(), score: sp }); return s.push(__spreadArray(__spreadArray([], c, true), [{ engine: "internal:has-text", selector: i, score: Sl }], false)), o.length <= 80 && s.push(__spreadArray(__spreadArray([], c, true), [{ engine: "internal:has-text", selector: "/^" + VX(o) + "$/", score: AX }], false)), xl(s), s; }
function kl(e) { return e.parentElement ? e.parentElement : e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.parentNode.host ? e.parentNode.host : null; }
function lp(e) { return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(e) ? "#" + e : "[id=\"".concat(lt(e), "\"]"); }
function BX(e, t) { var n = t.ownerDocument, r = []; function o(i) { var l = r.slice(); i && l.unshift(i); var c = l.join(" > "), a = e.parseSelector(c); return e.querySelector(a, t.ownerDocument, !1) === t ? c : void 0; } function s(i) { var l = { engine: "css", selector: i, score: OX }, c = e.parseSelector(i), a = e.querySelectorAll(c, t.ownerDocument); if (a.length === 1)
    return [l]; var u = { engine: "nth", selector: String(a.indexOf(t)), score: ip }; return [l, u]; } var _loop_3 = function (i) {
    var l = i.nodeName.toLowerCase();
    var c = "";
    if (i.id) {
        var p = lp(i.id), d = o(p);
        if (d)
            return { value: s(d) };
        c = p;
    }
    var a = i.parentNode, u = __spreadArray([], i.classList, true);
    for (var p = 0; p < u.length; ++p) {
        var d = "." + lt(u.slice(0, p + 1).join(".")), m = o(d);
        if (m)
            return { value: s(m) };
        !c && a && a.querySelectorAll(d).length === 1 && (c = d);
    }
    if (a) {
        var p = __spreadArray([], a.children, true), m = p.filter(function (T) { return T.nodeName.toLowerCase() === l; }).indexOf(i) === 0 ? lt(l) : "".concat(lt(l), ":nth-child(").concat(1 + p.indexOf(i), ")"), y = o(m);
        if (y)
            return { value: s(y) };
        c || (c = m);
    }
    else
        c || (c = l);
    r.unshift(c);
}; for (var i = t; i && i !== n; i = kl(i)) {
    var state_1 = _loop_3(i);
    if (typeof state_1 === "object")
        return state_1.value;
} return s(o()); }
function wo(e) { return "\"".concat(lt(e).replace(/\\ /g, " "), "\""); }
function xl(e) { for (var _10 = 0, e_3 = e; _10 < e_3.length; _10++) {
    var t = e_3[_10];
    for (var _11 = 0, t_4 = t; _11 < t_4.length; _11++) {
        var n = t_4[_11];
        n.score > LX && n.score < MX && (n.score += Math.min(Jh, n.selector.length / 10 | 0));
    }
} }
function cp(e) { var t = []; var n = ""; for (var _10 = 0, e_4 = e; _10 < e_4.length; _10++) {
    var _11 = e_4[_10], r = _11.engine, o = _11.selector;
    t.length && (n !== "css" || r !== "css" || o.startsWith(":nth-match(")) && t.push(">>"), n = r, r === "css" ? t.push(o) : t.push("".concat(r, "=").concat(o));
} return t.join(" "); }
function Qt(e) { var t = 0; for (var n = 0; n < e.length; n++)
    t += e[n].score * (e.length - n); return t; }
function uu(e, t, n, r, o) { var s = r.map(function (l) { return ({ tokens: l, score: Qt(l) }); }); s.sort(function (l, c) { return l.score - c.score; }); var i = null; for (var _10 = 0, s_2 = s; _10 < s_2.length; _10++) {
    var l = s_2[_10].tokens;
    var c = e.parseSelector(cp(l)), a = e.querySelectorAll(c, t);
    if (a[0] === n && a.length === 1)
        return l;
    var u = a.indexOf(n);
    if (!o || i || u === -1 || a.length > 5)
        continue;
    var p = { engine: "nth", selector: String(u), score: ip };
    i = __spreadArray(__spreadArray([], l, true), [p], false);
} return i; }
function jX(e) { var t, n = 0; for (var r = 0; r < e.length; ++r) {
    var o = e[r];
    var s = void 0;
    if (!(o === "-" || o === "_")) {
        if (o >= "a" && o <= "z" ? s = "lower" : o >= "A" && o <= "Z" ? s = "upper" : o >= "0" && o <= "9" ? s = "digit" : s = "other", s === "lower" && t === "upper") {
            t = s;
            continue;
        }
        t && t !== s && ++n, t = s;
    }
} return n >= e.length / 4; }
function VX(e) { return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
var Tl = /** @class */ (function () {
    function Tl(t) {
        this._highlightEntries = [], this._language = "javascript", this._injectedScript = t;
        var n = t.document;
        this._isUnderTest = t.isUnderTest, this._glassPaneElement = n.createElement("x-pw-glass"), this._glassPaneElement.style.position = "fixed", this._glassPaneElement.style.top = "0", this._glassPaneElement.style.right = "0", this._glassPaneElement.style.bottom = "0", this._glassPaneElement.style.left = "0", this._glassPaneElement.style.zIndex = "2147483647", this._glassPaneElement.style.pointerEvents = "none", this._glassPaneElement.style.display = "flex", this._actionPointElement = n.createElement("x-pw-action-point"), this._actionPointElement.setAttribute("hidden", "true"), this._glassPaneShadow = this._glassPaneElement.attachShadow({ mode: this._isUnderTest ? "open" : "closed" }), this._glassPaneShadow.appendChild(this._actionPointElement);
        var r = n.createElement("style");
        r.textContent = "\n        x-pw-tooltip {\n          align-items: center;\n          backdrop-filter: blur(5px);\n          background-color: rgba(0, 0, 0, 0.7);\n          border-radius: 2px;\n          box-shadow: rgba(0, 0, 0, 0.1) 0px 3.6px 3.7px,\n                      rgba(0, 0, 0, 0.15) 0px 12.1px 12.3px,\n                      rgba(0, 0, 0, 0.1) 0px -2px 4px,\n                      rgba(0, 0, 0, 0.15) 0px -12.1px 24px,\n                      rgba(0, 0, 0, 0.25) 0px 54px 55px;\n          color: rgb(204, 204, 204);\n          display: none;\n          font-family: 'Dank Mono', 'Operator Mono', Inconsolata, 'Fira Mono',\n                      'SF Mono', Monaco, 'Droid Sans Mono', 'Source Code Pro', monospace;\n          font-size: 12.8px;\n          font-weight: normal;\n          left: 0;\n          line-height: 1.5;\n          max-width: 600px;\n          padding: 3.2px 5.12px 3.2px;\n          position: absolute;\n          top: 0;\n        }\n        x-pw-action-point {\n          position: absolute;\n          width: 20px;\n          height: 20px;\n          background: red;\n          border-radius: 10px;\n          pointer-events: none;\n          margin: -10px 0 0 -10px;\n          z-index: 2;\n        }\n        *[hidden] {\n          display: none !important;\n        }\n    ", this._glassPaneShadow.appendChild(r);
    }
    Tl.prototype.install = function () { this._injectedScript.document.documentElement.appendChild(this._glassPaneElement); };
    Tl.prototype.setLanguage = function (t) { this._language = t; };
    Tl.prototype.runHighlightOnRaf = function (t) {
        var _this = this;
        this._rafRequest && cancelAnimationFrame(this._rafRequest), this.updateHighlight(this._injectedScript.querySelectorAll(t, this._injectedScript.document.documentElement), hs(t), !1), this._rafRequest = requestAnimationFrame(function () { return _this.runHighlightOnRaf(t); });
    };
    Tl.prototype.uninstall = function () { this._rafRequest && cancelAnimationFrame(this._rafRequest), this._glassPaneElement.remove(); };
    Tl.prototype.isInstalled = function () { return this._glassPaneElement.parentElement === this._injectedScript.document.documentElement && !this._glassPaneElement.nextElementSibling; };
    Tl.prototype.showActionPoint = function (t, n) { this._actionPointElement.style.top = n + "px", this._actionPointElement.style.left = t + "px", this._actionPointElement.hidden = !1, this._isUnderTest && console.error("Action point for test: " + JSON.stringify({ x: t, y: n })); };
    Tl.prototype.hideActionPoint = function () { this._actionPointElement.hidden = !0; };
    Tl.prototype.clearHighlight = function () { var t, n; for (var _10 = 0, _11 = this._highlightEntries; _10 < _11.length; _10++) {
        var r = _11[_10];
        (t = r.highlightElement) == null || t.remove(), (n = r.tooltipElement) == null || n.remove();
    } this._highlightEntries = []; };
    Tl.prototype.updateHighlight = function (t, n, r) { var o; r ? o = "#dc6f6f7f" : o = t.length > 1 ? "#f6b26b7f" : "#6fa8dc7f", this._innerUpdateHighlight(t, { color: o, tooltipText: n ? sn(this._language, n) : "" }); };
    Tl.prototype.maskElements = function (t) { this._innerUpdateHighlight(t, { color: "#F0F" }); };
    Tl.prototype._innerUpdateHighlight = function (t, n) { if (!this._highlightIsUpToDate(t, n.tooltipText)) {
        this.clearHighlight();
        for (var r = 0; r < t.length; ++r) {
            var o = this._createHighlightElement();
            this._glassPaneShadow.appendChild(o);
            var s = void 0;
            if (n.tooltipText) {
                s = this._injectedScript.document.createElement("x-pw-tooltip"), this._glassPaneShadow.appendChild(s);
                var i = t.length > 1 ? " [".concat(r + 1, " of ").concat(t.length, "]") : "";
                s.textContent = n.tooltipText + i, s.style.top = "0", s.style.left = "0", s.style.display = "flex";
            }
            this._highlightEntries.push({ targetElement: t[r], tooltipElement: s, highlightElement: o, tooltipText: n.tooltipText });
        }
        for (var _10 = 0, _11 = this._highlightEntries; _10 < _11.length; _10++) {
            var r = _11[_10];
            if (r.box = r.targetElement.getBoundingClientRect(), !r.tooltipElement)
                continue;
            var o = r.tooltipElement.offsetWidth, s = r.tooltipElement.offsetHeight, i = this._glassPaneElement.offsetWidth, l = this._glassPaneElement.offsetHeight;
            var c = r.box.left;
            c + o > i - 5 && (c = i - o - 5);
            var a = r.box.bottom + 5;
            a + s > l - 5 && (r.box.top > s + 5 ? a = r.box.top - s - 5 : a = l - 5 - s), r.tooltipTop = a, r.tooltipLeft = c;
        }
        for (var _12 = 0, _13 = this._highlightEntries; _12 < _13.length; _12++) {
            var r = _13[_12];
            r.tooltipElement && (r.tooltipElement.style.top = r.tooltipTop + "px", r.tooltipElement.style.left = r.tooltipLeft + "px");
            var o = r.box;
            r.highlightElement.style.backgroundColor = n.color, r.highlightElement.style.left = o.x + "px", r.highlightElement.style.top = o.y + "px", r.highlightElement.style.width = o.width + "px", r.highlightElement.style.height = o.height + "px", r.highlightElement.style.display = "block", this._isUnderTest && console.error("Highlight box for test: " + JSON.stringify({ x: o.x, y: o.y, width: o.width, height: o.height }));
        }
    } };
    Tl.prototype._highlightIsUpToDate = function (t, n) { if (t.length !== this._highlightEntries.length)
        return !1; for (var r = 0; r < this._highlightEntries.length; ++r) {
        if (n !== this._highlightEntries[r].tooltipText || t[r] !== this._highlightEntries[r].targetElement)
            return !1;
        var o = this._highlightEntries[r].box;
        if (!o)
            return !1;
        var s = t[r].getBoundingClientRect();
        if (s.top !== o.top || s.right !== o.right || s.bottom !== o.bottom || s.left !== o.left)
            return !1;
    } return !0; };
    Tl.prototype._createHighlightElement = function () { var t = this._injectedScript.document.createElement("x-pw-highlight"); return t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.width = "0", t.style.height = "0", t.style.boxSizing = "border-box", t; };
    return Tl;
}());
var WX = /** @class */ (function () {
    function WX(t, n, r, o, s, i, l) {
        this.onGlobalListenersRemoved = new Set, this._testIdAttributeNameForStrictErrorAndConsoleCodegen = "data-testid", this._markedTargetElements = new Set, this.window = t, this.document = t.document, this.isUnderTest = n, this._sdkLanguage = r, this._testIdAttributeNameForStrictErrorAndConsoleCodegen = o, this._evaluator = new mX(new Map), this._engines = new Map, this._engines.set("xpath", tu), this._engines.set("xpath:light", tu), this._engines.set("_react", HK), this._engines.set("_vue", GK), this._engines.set("role", lu(!1)), this._engines.set("text", this._createTextEngine(!0, !1)), this._engines.set("text:light", this._createTextEngine(!1, !1)), this._engines.set("id", this._createAttributeEngine("id", !0)), this._engines.set("id:light", this._createAttributeEngine("id", !1)), this._engines.set("data-testid", this._createAttributeEngine("data-testid", !0)), this._engines.set("data-testid:light", this._createAttributeEngine("data-testid", !1)), this._engines.set("data-test-id", this._createAttributeEngine("data-test-id", !0)), this._engines.set("data-test-id:light", this._createAttributeEngine("data-test-id", !1)), this._engines.set("data-test", this._createAttributeEngine("data-test", !0)), this._engines.set("data-test:light", this._createAttributeEngine("data-test", !1)), this._engines.set("css", this._createCSSEngine()), this._engines.set("nth", { queryAll: function () { return []; } }), this._engines.set("visible", this._createVisibleEngine()), this._engines.set("internal:control", this._createControlEngine()), this._engines.set("internal:has", this._createHasEngine()), this._engines.set("internal:label", this._createInternalLabelEngine()), this._engines.set("internal:text", this._createTextEngine(!0, !0)), this._engines.set("internal:has-text", this._createInternalHasTextEngine()), this._engines.set("internal:attr", this._createNamedAttributeEngine()), this._engines.set("internal:testid", this._createNamedAttributeEngine()), this._engines.set("internal:role", lu(!0));
        for (var _10 = 0, l_3 = l; _10 < l_3.length; _10++) {
            var _11 = l_3[_10], c = _11.name, a = _11.engine;
            this._engines.set(c, a);
        }
        this._stableRafCount = s, this._browserName = i, this._setupGlobalListenersRemovalDetection(), this._setupHitTargetInterceptors(), n && (this.window.__injectedScript = this);
    }
    WX.prototype.eval = function (t) { return this.window.eval(t); };
    WX.prototype.testIdAttributeNameForStrictErrorAndConsoleCodegen = function () { return this._testIdAttributeNameForStrictErrorAndConsoleCodegen; };
    WX.prototype.parseSelector = function (t) { var n = Ur(t); for (var _10 = 0, _11 = wv(n); _10 < _11.length; _10++) {
        var r = _11[_10];
        if (!this._engines.has(r))
            throw this.createStacklessError("Unknown engine \"".concat(r, "\" while parsing selector ").concat(t));
    } return n; };
    WX.prototype.generateSelector = function (t, n) { return El(this, t, n).selector; };
    WX.prototype.querySelector = function (t, n, r) { var o = this.querySelectorAll(t, n); if (r && o.length > 1)
        throw this.strictModeViolationError(t, o); return o[0]; };
    WX.prototype._queryNth = function (t, n) { var r = __spreadArray([], t, true); var o = +n.body; return o === -1 && (o = r.length - 1), new Set(r.slice(o, o + 1)); };
    WX.prototype._queryLayoutSelector = function (t, n, r) { var o = n.name, s = n.body, i = [], l = this.querySelectorAll(s.parsed, r); for (var _10 = 0, t_5 = t; _10 < t_5.length; _10++) {
        var c = t_5[_10];
        var a = Kh(o, c, l, s.distance);
        a !== void 0 && i.push({ element: c, score: a });
    } return i.sort(function (c, a) { return c.score - a.score; }), new Set(i.map(function (c) { return c.element; })); };
    WX.prototype.querySelectorAll = function (t, n) { if (t.capture !== void 0) {
        if (t.parts.some(function (o) { return o.name === "nth"; }))
            throw this.createStacklessError("Can't query n-th element in a request with the capture.");
        var r = { parts: t.parts.slice(0, t.capture + 1) };
        if (t.capture < t.parts.length - 1) {
            var o = { parts: t.parts.slice(t.capture + 1) }, s = { name: "internal:has", body: { parsed: o }, source: hs(o) };
            r.parts.push(s);
        }
        return this.querySelectorAll(r, n);
    } if (!n.querySelectorAll)
        throw this.createStacklessError("Node is not queryable."); if (t.capture !== void 0)
        throw this.createStacklessError("Internal error: there should not be a capture in the selector."); this._evaluator.begin(); try {
        var r = new Set([n]);
        for (var _10 = 0, _11 = t.parts; _10 < _11.length; _10++) {
            var o = _11[_10];
            if (o.name === "nth")
                r = this._queryNth(r, o);
            else if (pX.includes(o.name))
                r = this._queryLayoutSelector(r, o, n);
            else {
                var s = new Set;
                for (var _12 = 0, r_3 = r; _12 < r_3.length; _12++) {
                    var i = r_3[_12];
                    var l = this._queryEngineAll(o, i);
                    for (var _13 = 0, l_4 = l; _13 < l_4.length; _13++) {
                        var c = l_4[_13];
                        s.add(c);
                    }
                }
                r = s;
            }
        }
        return __spreadArray([], r, true);
    }
    finally {
        this._evaluator.end();
    } };
    WX.prototype._queryEngineAll = function (t, n) { var r = this._engines.get(t.name).queryAll(n, t.body); for (var _10 = 0, r_4 = r; _10 < r_4.length; _10++) {
        var o = r_4[_10];
        if (!("nodeName" in o))
            throw this.createStacklessError("Expected a Node but got ".concat(Object.prototype.toString.call(o)));
    } return r; };
    WX.prototype._createAttributeEngine = function (t, n) {
        var _this = this;
        var r = function (o) { return [{ simples: [{ selector: { css: "[".concat(t, "=").concat(JSON.stringify(o), "]"), functions: [] }, combinator: "" }] }]; };
        return { queryAll: function (o, s) { return _this._evaluator.query({ scope: o, pierceShadow: n }, r(s)); } };
    };
    WX.prototype._createCSSEngine = function () {
        var _this = this;
        return { queryAll: function (t, n) { return _this._evaluator.query({ scope: t, pierceShadow: !0 }, n); } };
    };
    WX.prototype._createTextEngine = function (t, n) {
        var _this = this;
        return { queryAll: function (o, s) { var _10 = vi(s, n), i = _10.matcher, l = _10.kind, c = []; var a = null; var u = function (d) { if (l === "lax" && a && a.contains(d))
                return !1; var m = Is(_this._evaluator._cacheText, d, i); m === "none" && (a = d), (m === "self" || m === "selfAndChildren" && l === "strict" && !n) && c.push(d); }; o.nodeType === Node.ELEMENT_NODE && u(o); var p = _this._evaluator._queryCSS({ scope: o, pierceShadow: t }, "*"); for (var _11 = 0, p_1 = p; _11 < p_1.length; _11++) {
                var d = p_1[_11];
                u(d);
            } return c; } };
    };
    WX.prototype._createInternalHasTextEngine = function () {
        var _this = this;
        return { queryAll: function (t, n) { if (t.nodeType !== 1)
                return []; var r = t, o = Be(_this._evaluator._cacheText, r), s = vi(n, !0).matcher; return s(o) ? [r] : []; } };
    };
    WX.prototype._createInternalLabelEngine = function () {
        var _this = this;
        return { queryAll: function (t, n) { var r = vi(n, !0).matcher; return _this._evaluator._queryCSS({ scope: t, pierceShadow: !0 }, "*").filter(function (s) { var i = Oh(s); if (i === null) {
                var l = s.getAttribute("aria-label");
                if (l !== null)
                    return r({ full: l, immediate: [l] });
            } return i === null && (i = s.labels), !!i && __spreadArray([], i, true).some(function (l) { return r(Be(_this._evaluator._cacheText, l)); }); }); } };
    };
    WX.prototype._createNamedAttributeEngine = function () {
        var _this = this;
        return { queryAll: function (n, r) { var o = Zt(r, !0); if (o.name || o.attributes.length !== 1)
                throw new Error("Malformed attribute selector: " + r); var _10 = o.attributes[0], s = _10.name, i = _10.value, l = _10.caseSensitive, c = l ? null : i.toLowerCase(); var a; return i instanceof RegExp ? a = function (p) { return !!p.match(i); } : l ? a = function (p) { return p === i; } : a = function (p) { return p.toLowerCase().includes(c); }, _this._evaluator._queryCSS({ scope: n, pierceShadow: !0 }, "[".concat(s, "]")).filter(function (p) { return a(p.getAttribute(s)); }); } };
    };
    WX.prototype._createControlEngine = function () { return { queryAll: function (t, n) { if (n === "enter-frame")
            return []; if (n === "return-empty")
            return []; if (n === "component")
            return t.nodeType !== 1 ? [] : [t.childElementCount === 1 ? t.firstElementChild : t]; throw new Error("Internal error, unknown internal:control selector ".concat(n)); } }; };
    WX.prototype._createHasEngine = function () {
        var _this = this;
        return { queryAll: function (n, r) { return n.nodeType !== 1 ? [] : !!_this.querySelector(r.parsed, n, !1) ? [n] : []; } };
    };
    WX.prototype._createVisibleEngine = function () { return { queryAll: function (n, r) { return n.nodeType !== 1 ? [] : ms(n) === Boolean(r) ? [n] : []; } }; };
    WX.prototype.extend = function (t, n) {
        var r = this.window.eval("\n    (() => {\n      const module = {};\n      ".concat(t, "\n      return module.exports.default();\n    })()"));
        return new r(this, n);
    };
    WX.prototype.isVisible = function (t) { return ms(t); };
    WX.prototype.viewportRatio = function (t) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_10) {
            switch (_10.label) {
                case 0: return [4 /*yield*/, new Promise(function (n) { var r = new IntersectionObserver(function (o) { n(o[0].intersectionRatio), r.disconnect(); }); r.observe(t), requestAnimationFrame(function () { }); })];
                case 1: return [2 /*return*/, _10.sent()];
            }
        }); });
    };
    WX.prototype.pollRaf = function (t) { return this.poll(t, function (n) { return requestAnimationFrame(n); }); };
    WX.prototype.poll = function (t, n) { return this._runAbortableTask(function (r) { var o, s; var i = new Promise(function (c, a) { o = c, s = a; }), l = function () { if (!r.aborted)
        try {
            var c = t(r);
            c !== r.continuePolling ? o(c) : n(l);
        }
        catch (c) {
            r.log("  " + c.message), s(c);
        } }; return l(), i; }); };
    WX.prototype._runAbortableTask = function (t) { var n = [], r, o = !1; var s = function () { r && (r(n), n = [], r = void 0); }, i = function () { return new Promise(function (u) { r = u, (n.length || o) && s(); }); }; var l = ""; var c = { injectedScript: this, aborted: !1, continuePolling: Symbol("continuePolling"), log: function (u) { l = u, n.push({ message: u }), s(); }, logRepeating: function (u) { u !== l && c.log(u); } }; return { takeNextLogs: i, run: function () { var u = t(c); return u.finally(function () { o = !0, s(); }), u; }, cancel: function () { c.aborted = !0; }, takeLastLogs: function () { return n; } }; };
    WX.prototype.getElementBorderWidth = function (t) { if (t.nodeType !== Node.ELEMENT_NODE || !t.ownerDocument || !t.ownerDocument.defaultView)
        return { left: 0, top: 0 }; var n = t.ownerDocument.defaultView.getComputedStyle(t); return { left: parseInt(n.borderLeftWidth || "", 10), top: parseInt(n.borderTopWidth || "", 10) }; };
    WX.prototype.describeIFrameStyle = function (t) { if (!t.ownerDocument || !t.ownerDocument.defaultView)
        return "error:notconnected"; var n = t.ownerDocument.defaultView; for (var o = t; o; o = ct(o))
        if (n.getComputedStyle(o).transform !== "none")
            return "transformed"; var r = n.getComputedStyle(t); return { left: parseInt(r.borderLeftWidth || "", 10) + parseInt(r.paddingLeft || "", 10), top: parseInt(r.borderTopWidth || "", 10) + parseInt(r.paddingTop || "", 10) }; };
    WX.prototype.retarget = function (t, n) { var r = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement; return r ? (n === "none" || (r.matches("input, textarea, select") || (n === "button-link" ? r = r.closest("button, [role=button], a, [role=link]") || r : r = r.closest("button, [role=button], [role=checkbox], [role=radio]") || r), n === "follow-label" && (!r.matches("input, textarea, button, select, [role=button], [role=checkbox], [role=radio]") && !r.isContentEditable && (r = r.closest("label") || r), r.nodeName === "LABEL" && (r = r.control || r))), r) : null; };
    WX.prototype.waitForElementStatesAndPerformAction = function (t, n, r, o) {
        var _this = this;
        var s, i = 0, l = 0, c = 0;
        return this.pollRaf(function (a) { if (r)
            return a.log("    forcing action"), o(t, a); for (var _10 = 0, n_4 = n; _10 < n_4.length; _10++) {
            var u = n_4[_10];
            if (u !== "stable") {
                var f = _this.elementState(t, u);
                if (typeof f != "boolean")
                    return f;
                if (!f)
                    return a.logRepeating("    element is not ".concat(u, " - waiting...")), a.continuePolling;
                continue;
            }
            var p = _this.retarget(t, "no-follow-label");
            if (!p)
                return "error:notconnected";
            if (++i === 1)
                return a.continuePolling;
            var d = performance.now();
            if (_this._stableRafCount > 1 && d - c < 15)
                return a.continuePolling;
            c = d;
            var m = p.getBoundingClientRect(), y = { x: m.top, y: m.left, width: m.width, height: m.height };
            s && y.x === s.x && y.y === s.y && y.width === s.width && y.height === s.height ? ++l : l = 0;
            var k = l >= _this._stableRafCount, h = k || !s;
            if (s = y, h || a.logRepeating("    element is not stable - waiting..."), !k)
                return a.continuePolling;
        } return o(t, a); });
    };
    WX.prototype.elementState = function (t, n) { var r = this.retarget(t, ["stable", "visible", "hidden"].includes(n) ? "none" : "follow-label"); if (!r || !r.isConnected)
        return n === "hidden" ? !0 : "error:notconnected"; if (n === "visible")
        return this.isVisible(r); if (n === "hidden")
        return !this.isVisible(r); var o = Vh(r); if (n === "disabled")
        return o; if (n === "enabled")
        return !o; var s = !(["INPUT", "TEXTAREA", "SELECT"].includes(r.nodeName) && r.hasAttribute("readonly")); if (n === "editable")
        return !o && s; if (n === "checked" || n === "unchecked") {
        var i = n === "checked", l = zh(r, !1);
        if (l === "error")
            throw this.createStacklessError("Not a checkbox or radio button");
        return i === l;
    } throw this.createStacklessError("Unexpected element state \"".concat(n, "\"")); };
    WX.prototype.selectOptions = function (t, n, r) { var o = this.retarget(n, "follow-label"); if (!o)
        return "error:notconnected"; if (o.nodeName.toLowerCase() !== "select")
        throw this.createStacklessError("Element is not a <select> element"); var s = o, i = __spreadArray([], s.options, true), l = []; var c = t.slice(); var _loop_4 = function (a) {
        var u = i[a], p = function (d) { if (d instanceof Node)
            return u === d; var m = !0; return d.valueOrLabel !== void 0 && (m = m && (d.valueOrLabel === u.value || d.valueOrLabel === u.label)), d.value !== void 0 && (m = m && d.value === u.value), d.label !== void 0 && (m = m && d.label === u.label), d.index !== void 0 && (m = m && d.index === a), m; };
        if (c.some(p))
            if (l.push(u), s.multiple)
                c = c.filter(function (d) { return !p(d); });
            else {
                c = [];
                return "break";
            }
    }; for (var a = 0; a < i.length; a++) {
        var state_2 = _loop_4(a);
        if (state_2 === "break")
            break;
    } return c.length ? (r.logRepeating("    did not find some options - waiting... "), r.continuePolling) : (s.value = void 0, l.forEach(function (a) { return a.selected = !0; }), r.log("    selected specified option(s)"), s.dispatchEvent(new Event("input", { bubbles: !0 })), s.dispatchEvent(new Event("change", { bubbles: !0 })), l.map(function (a) { return a.value; })); };
    WX.prototype.fill = function (t, n, r) { var o = this.retarget(n, "follow-label"); if (!o)
        return "error:notconnected"; if (o.nodeName.toLowerCase() === "input") {
        var s = o, i = s.type.toLowerCase(), l = new Set(["color", "date", "time", "datetime", "datetime-local", "month", "range", "week"]);
        if (!new Set(["", "email", "number", "password", "search", "tel", "text", "url"]).has(i) && !l.has(i))
            throw r.log("    input of type \"".concat(i, "\" cannot be filled")), this.createStacklessError("Input of type \"".concat(i, "\" cannot be filled"));
        if (i === "number" && (t = t.trim(), isNaN(Number(t))))
            throw this.createStacklessError("Cannot type text into input[type=number]");
        if (l.has(i)) {
            if (t = t.trim(), s.focus(), s.value = t, s.value !== t)
                throw this.createStacklessError("Malformed value");
            return o.dispatchEvent(new Event("input", { bubbles: !0 })), o.dispatchEvent(new Event("change", { bubbles: !0 })), "done";
        }
    }
    else if (o.nodeName.toLowerCase() !== "textarea") {
        if (!o.isContentEditable)
            throw this.createStacklessError("Element is not an <input>, <textarea> or [contenteditable] element");
    } return this.selectText(o), "needsinput"; };
    WX.prototype.selectText = function (t) { var n = this.retarget(t, "follow-label"); if (!n)
        return "error:notconnected"; if (n.nodeName.toLowerCase() === "input") {
        var s = n;
        return s.select(), s.focus(), "done";
    } if (n.nodeName.toLowerCase() === "textarea") {
        var s = n;
        return s.selectionStart = 0, s.selectionEnd = s.value.length, s.focus(), "done";
    } var r = n.ownerDocument.createRange(); r.selectNodeContents(n); var o = n.ownerDocument.defaultView.getSelection(); return o && (o.removeAllRanges(), o.addRange(r)), n.focus(), "done"; };
    WX.prototype._activelyFocused = function (t) { var n = t.getRootNode().activeElement, r = n === t && !!t.ownerDocument && t.ownerDocument.hasFocus(); return { activeElement: n, isFocused: r }; };
    WX.prototype.focusNode = function (t, n) { if (!t.isConnected)
        return "error:notconnected"; if (t.nodeType !== Node.ELEMENT_NODE)
        throw this.createStacklessError("Node is not an element"); var _10 = this._activelyFocused(t), r = _10.activeElement, o = _10.isFocused; if (t.isContentEditable && !o && r && r.blur && r.blur(), t.focus(), n && !o && t.nodeName.toLowerCase() === "input")
        try {
            t.setSelectionRange(0, 0);
        }
        catch (_11) { } return "done"; };
    WX.prototype.blurNode = function (t) { if (!t.isConnected)
        return "error:notconnected"; if (t.nodeType !== Node.ELEMENT_NODE)
        throw this.createStacklessError("Node is not an element"); return t.blur(), "done"; };
    WX.prototype.setInputFiles = function (t, n) { if (t.nodeType !== Node.ELEMENT_NODE)
        return "Node is not of type HTMLElement"; var r = t; if (r.nodeName !== "INPUT")
        return "Not an <input> element"; var o = r; if ((o.getAttribute("type") || "").toLowerCase() !== "file")
        return "Not an input[type=file] element"; var i = n.map(function (c) { var a = Uint8Array.from(atob(c.buffer), function (u) { return u.charCodeAt(0); }); return new File([a], c.name, { type: c.mimeType }); }), l = new DataTransfer; for (var _10 = 0, i_2 = i; _10 < i_2.length; _10++) {
        var c = i_2[_10];
        l.items.add(c);
    } o.files = l.files, o.dispatchEvent(new Event("input", { bubbles: !0 })), o.dispatchEvent(new Event("change", { bubbles: !0 })); };
    WX.prototype.expectHitTarget = function (t, n) { var r = []; var o = n; for (; o;) {
        var u = Eh(o);
        if (!u || (r.push(u), u.nodeType === 9))
            break;
        o = u.host;
    } var s; for (var u = r.length - 1; u >= 0; u--) {
        var p = r[u], d = p.elementsFromPoint(t.x, t.y), m = p.elementFromPoint(t.x, t.y);
        if (m && d[0] && ct(m) === d[0]) {
            var T = this.window.getComputedStyle(m);
            (T == null ? void 0 : T.display) === "contents" && d.unshift(m);
        }
        d[0] && d[0].shadowRoot === p && d[1] === m && d.shift();
        var y = d[0];
        if (!y || (s = y, u && y !== r[u - 1].host))
            break;
    } var i = []; for (; s && s !== n;)
        i.push(s), s = ct(s); if (s === n)
        return "done"; var l = this.previewNode(i[0] || this.document.documentElement); var c, a = n; for (; a;) {
        var u = i.indexOf(a);
        if (u !== -1) {
            u > 1 && (c = this.previewNode(i[u - 1]));
            break;
        }
        a = ct(a);
    } return c ? { hitTargetDescription: "".concat(l, " from ").concat(c, " subtree") } : { hitTargetDescription: l }; };
    WX.prototype.setupHitTargetInterceptor = function (t, n, r, o) {
        var _this = this;
        var s = this.retarget(t, "button-link");
        if (!s || !s.isConnected)
            return "error:notconnected";
        if (r) {
            var u = this.expectHitTarget(r, s);
            if (u !== "done")
                return u.hitTargetDescription;
        }
        if (n === "drag")
            return { stop: function () { return "done"; } };
        var i = { hover: ap, tap: up, mouse: fp }[n];
        var l;
        var c = function (u) { if (!i.has(u.type) || !u.isTrusted)
            return; var p = _this.window.TouchEvent && u instanceof _this.window.TouchEvent ? u.touches[0] : u; l === void 0 && p && (l = _this.expectHitTarget({ x: p.clientX, y: p.clientY }, s)), (o || l !== "done" && l !== void 0) && (u.preventDefault(), u.stopPropagation(), u.stopImmediatePropagation()); }, a = function () { return (_this._hitTargetInterceptor === c && (_this._hitTargetInterceptor = void 0), l || "done"); };
        return this._hitTargetInterceptor = c, { stop: a };
    };
    WX.prototype.dispatchEvent = function (t, n, r) { var o; switch ((r = __assign({ bubbles: !0, cancelable: !0, composed: !0 }, r), KX.get(n))) {
        case "mouse":
            o = new MouseEvent(n, r);
            break;
        case "keyboard":
            o = new KeyboardEvent(n, r);
            break;
        case "touch":
            o = new TouchEvent(n, r);
            break;
        case "pointer":
            o = new PointerEvent(n, r);
            break;
        case "focus":
            o = new FocusEvent(n, r);
            break;
        case "drag":
            o = new DragEvent(n, r);
            break;
        case "wheel":
            o = new WheelEvent(n, r);
            break;
        default:
            o = new Event(n, r);
            break;
    } t.dispatchEvent(o); };
    WX.prototype.previewNode = function (t) { if (t.nodeType === Node.TEXT_NODE)
        return So("#text=".concat(t.nodeValue || "")); if (t.nodeType !== Node.ELEMENT_NODE)
        return So("<".concat(t.nodeName.toLowerCase(), " />")); var n = t, r = []; for (var c = 0; c < n.attributes.length; c++) {
        var _10 = n.attributes[c], a = _10.name, u = _10.value;
        a === "style" || a.startsWith("__playwright") || (!u && QX.has(a) ? r.push(" ".concat(a)) : r.push(" ".concat(a, "=\"").concat(u, "\"")));
    } r.sort(function (c, a) { return c.length - a.length; }); var o = r.join(""); if (o.length > 50 && (o = o.substring(0, 49) + "…"), GX.has(n.nodeName))
        return So("<".concat(n.nodeName.toLowerCase()).concat(o, "/>")); var s = n.childNodes; var i = !1; if (s.length <= 5) {
        i = !0;
        for (var c = 0; c < s.length; c++)
            i = i && s[c].nodeType === Node.TEXT_NODE;
    } var l = i ? n.textContent || "" : s.length ? "…" : ""; return l.length > 50 && (l = l.substring(0, 49) + "…"), So("<".concat(n.nodeName.toLowerCase()).concat(o, ">").concat(l, "</").concat(n.nodeName.toLowerCase(), ">")); };
    WX.prototype.strictModeViolationError = function (t, n) {
        var _this = this;
        var r = n.slice(0, 10).map(function (s) { return ({ preview: _this.previewNode(s), selector: _this.generateSelector(s, _this._testIdAttributeNameForStrictErrorAndConsoleCodegen) }); }), o = r.map(function (s, i) { return "\n    ".concat(i + 1, ") ").concat(s.preview, " aka ").concat(sn(_this._sdkLanguage, s.selector)); });
        return r.length < n.length && o.push("\n    ..."), this.createStacklessError("strict mode violation: ".concat(sn(this._sdkLanguage, hs(t)), " resolved to ").concat(n.length, " elements:").concat(o.join(""), "\n"));
    };
    WX.prototype.createStacklessError = function (t) { if (this._browserName === "firefox") {
        var r = new Error("Error: " + t);
        return r.stack = "", r;
    } var n = new Error(t); return delete n.stack, n; };
    WX.prototype.maskSelectors = function (t) { this._highlight && this.hideHighlight(), this._highlight = new Tl(this), this._highlight.install(); var n = []; for (var _10 = 0, t_6 = t; _10 < t_6.length; _10++) {
        var r = t_6[_10];
        n.push(this.querySelectorAll(r, this.document.documentElement));
    } this._highlight.maskElements(n.flat()); };
    WX.prototype.highlight = function (t) { this._highlight || (this._highlight = new Tl(this), this._highlight.install()), this._highlight.runHighlightOnRaf(t); };
    WX.prototype.hideHighlight = function () { this._highlight && (this._highlight.uninstall(), delete this._highlight); };
    WX.prototype.markTargetElements = function (t, n) { for (var _10 = 0, _11 = this._markedTargetElements; _10 < _11.length; _10++) {
        var r = _11[_10];
        t.has(r) || r.removeAttribute("__playwright_target__");
    } for (var _12 = 0, t_7 = t; _12 < t_7.length; _12++) {
        var r = t_7[_12];
        this._markedTargetElements.has(r) || r.setAttribute("__playwright_target__", n);
    } this._markedTargetElements = t; };
    WX.prototype._setupGlobalListenersRemovalDetection = function () {
        var _this = this;
        var t = "__playwright_global_listeners_check__";
        var n = !1;
        var r = function () { return n = !0; };
        this.window.addEventListener(t, r), new MutationObserver(function (o) { if (o.some(function (i) { return Array.from(i.addedNodes).includes(_this.document.documentElement); }) && (n = !1, _this.window.dispatchEvent(new CustomEvent(t)), !n)) {
            _this.window.addEventListener(t, r);
            for (var _10 = 0, _11 = _this.onGlobalListenersRemoved; _10 < _11.length; _10++) {
                var i = _11[_10];
                i();
            }
        } }).observe(this.document, { childList: !0 });
    };
    WX.prototype._setupHitTargetInterceptors = function () {
        var _this = this;
        var t = function (r) { var o; return (o = _this._hitTargetInterceptor) == null ? void 0 : o.call(_this, r); }, n = function () { for (var _10 = 0, XX_1 = XX; _10 < XX_1.length; _10++) {
            var r = XX_1[_10];
            _this.window.addEventListener(r, t, { capture: !0, passive: !1 });
        } };
        n(), this.onGlobalListenersRemoved.add(n);
    };
    WX.prototype.expect = function (t, n, r) {
        return __awaiter(this, void 0, void 0, function () { var _10, _11; return __generator(this, function (_12) {
            switch (_12.label) {
                case 0:
                    if (!(n.expression === "to.have.count" || n.expression.endsWith(".array"))) return [3 /*break*/, 1];
                    _10 = this.expectArray(r, n);
                    return [3 /*break*/, 5];
                case 1:
                    if (!t) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.expectSingleElement(t, n)];
                case 2:
                    _11 = _12.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _11 = !n.isNot && n.expression === "to.be.hidden" ? { matches: !0 } : n.isNot && n.expression === "to.be.visible" ? { matches: !1 } : n.isNot && n.expression === "to.be.in.viewport" ? { matches: !1 } : { matches: n.isNot, missingRecevied: !0 };
                    _12.label = 4;
                case 4:
                    _10 = _11;
                    _12.label = 5;
                case 5: return [2 /*return*/, _10];
            }
        }); });
    };
    WX.prototype.expectSingleElement = function (t, n) {
        var _10;
        return __awaiter(this, void 0, void 0, function () { var o, r, s, s, i, s, s, s, i, i; return __generator(this, function (_11) {
            switch (_11.label) {
                case 0:
                    r = n.expression;
                    {
                        s = void 0;
                        if (r === "to.be.checked" ? s = this.elementState(t, "checked") : r === "to.be.unchecked" ? s = this.elementState(t, "unchecked") : r === "to.be.disabled" ? s = this.elementState(t, "disabled") : r === "to.be.editable" ? s = this.elementState(t, "editable") : r === "to.be.readonly" ? s = !this.elementState(t, "editable") : r === "to.be.empty" ? t.nodeName === "INPUT" || t.nodeName === "TEXTAREA" ? s = !t.value : s = !((o = t.textContent) != null && o.trim()) : r === "to.be.enabled" ? s = this.elementState(t, "enabled") : r === "to.be.focused" ? s = this._activelyFocused(t).isFocused : r === "to.be.hidden" ? s = this.elementState(t, "hidden") : r === "to.be.visible" && (s = this.elementState(t, "visible")), s !== void 0) {
                            if (s === "error:notcheckbox")
                                throw this.createStacklessError("Element is not a checkbox");
                            if (s === "error:notconnected")
                                throw this.createStacklessError("Element is not connected");
                            return [2 /*return*/, { received: s, matches: s }];
                        }
                    }
                    if (r === "to.have.property") {
                        s = t[n.expressionArg], i = bl(s, n.expectedValue);
                        return [2 /*return*/, { received: s, matches: i }];
                    }
                    if (!(r === "to.be.in.viewport")) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.viewportRatio(t)];
                case 1:
                    s = _11.sent();
                    return [2 /*return*/, { received: "viewport ratio ".concat(s), matches: s > 0 && s > ((_10 = n.expectedNumber) !== null && _10 !== void 0 ? _10 : 0) - 1e-9 }];
                case 2:
                    if (r === "to.have.values") {
                        if (t = this.retarget(t, "follow-label"), t.nodeName !== "SELECT" || !t.multiple)
                            throw this.createStacklessError("Not a select element with a multiple attribute");
                        s = __spreadArray([], t.selectedOptions, true).map(function (i) { return i.value; });
                        return [2 /*return*/, s.length !== n.expectedText.length ? { received: s, matches: !1 } : { received: s, matches: s.map(function (i, l) { return new yi(n.expectedText[l]).matches(i); }).every(Boolean) }];
                    }
                    {
                        s = void 0;
                        if (r === "to.have.attribute") {
                            i = t.getAttribute(n.expressionArg);
                            if (i === null)
                                return [2 /*return*/, { received: null, matches: !1 }];
                            s = i;
                        }
                        else if (r === "to.have.class")
                            s = t.classList.toString();
                        else if (r === "to.have.css")
                            s = this.window.getComputedStyle(t).getPropertyValue(n.expressionArg);
                        else if (r === "to.have.id")
                            s = t.id;
                        else if (r === "to.have.text")
                            s = n.useInnerText ? t.innerText : Be(new Map, t).full;
                        else if (r === "to.have.title")
                            s = this.document.title;
                        else if (r === "to.have.url")
                            s = this.document.location.href;
                        else if (r === "to.have.value") {
                            if (t = this.retarget(t, "follow-label"), t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA" && t.nodeName !== "SELECT")
                                throw this.createStacklessError("Not an input element");
                            s = t.value;
                        }
                        if (s !== void 0 && n.expectedText) {
                            i = new yi(n.expectedText[0]);
                            return [2 /*return*/, { received: s, matches: i.matches(s) }];
                        }
                    }
                    throw this.createStacklessError("Unknown expect matcher: " + r);
            }
        }); });
    };
    WX.prototype.expectArray = function (t, n) { var r = n.expression; if (r === "to.have.count") {
        var s = t.length, i = s === n.expectedNumber;
        return { received: s, matches: i };
    } var o; if (r === "to.have.text.array" || r === "to.contain.text.array" ? o = t.map(function (s) { return n.useInnerText ? s.innerText : Be(new Map, s).full; }) : r === "to.have.class.array" && (o = t.map(function (s) { return s.classList.toString(); })), o && n.expectedText) {
        var s = r !== "to.contain.text.array";
        if (!(o.length === n.expectedText.length || !s))
            return { received: o, matches: !1 };
        var l = n.expectedText.map(function (u) { return new yi(u); });
        var c = 0, a = 0;
        for (; c < l.length && a < o.length;)
            l[c].matches(o[a]) && ++c, ++a;
        return { received: o, matches: c === l.length };
    } throw this.createStacklessError("Unknown expect matcher: " + r); };
    WX.prototype.getElementAccessibleName = function (t, n) { return Os(t, !!n, new Map); };
    WX.prototype.getAriaRole = function (t) { return qe(t); };
    return WX;
}());
var GX = new Set(["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "MENUITEM", "META", "PARAM", "SOURCE", "TRACK", "WBR"]), QX = new Set(["checked", "selected", "disabled", "readonly", "multiple"]);
function So(e) { return e.replace(/\n/g, "↵").replace(/\t/g, "⇆"); }
var KX = new Map([["auxclick", "mouse"], ["click", "mouse"], ["dblclick", "mouse"], ["mousedown", "mouse"], ["mouseeenter", "mouse"], ["mouseleave", "mouse"], ["mousemove", "mouse"], ["mouseout", "mouse"], ["mouseover", "mouse"], ["mouseup", "mouse"], ["mouseleave", "mouse"], ["mousewheel", "mouse"], ["keydown", "keyboard"], ["keyup", "keyboard"], ["keypress", "keyboard"], ["textInput", "keyboard"], ["touchstart", "touch"], ["touchmove", "touch"], ["touchend", "touch"], ["touchcancel", "touch"], ["pointerover", "pointer"], ["pointerout", "pointer"], ["pointerenter", "pointer"], ["pointerleave", "pointer"], ["pointerdown", "pointer"], ["pointerup", "pointer"], ["pointermove", "pointer"], ["pointercancel", "pointer"], ["gotpointercapture", "pointer"], ["lostpointercapture", "pointer"], ["focus", "focus"], ["blur", "focus"], ["drag", "drag"], ["dragstart", "drag"], ["dragend", "drag"], ["dragover", "drag"], ["dragenter", "drag"], ["dragleave", "drag"], ["dragexit", "drag"], ["drop", "drag"], ["wheel", "wheel"]]), ap = new Set(["mousemove"]), up = new Set(["pointerdown", "pointerup", "touchstart", "touchend", "touchcancel"]), fp = new Set(["mousedown", "mouseup", "pointerdown", "pointerup", "click", "auxclick", "dblclick", "contextmenu"]), XX = new Set(__spreadArray(__spreadArray(__spreadArray([], ap, true), up, true), fp, true));
function YX(e) { if (e = e.substring(1, e.length - 1), !e.includes("\\"))
    return e; var t = []; var n = 0; for (; n < e.length;)
    e[n] === "\\" && n + 1 < e.length && n++, t.push(e[n++]); return t.join(""); }
function vi(e, t) { if (e[0] === "/" && e.lastIndexOf("/") > 0) {
    var o = e.lastIndexOf("/"), s_3 = new RegExp(e.substring(1, o), e.substring(o + 1));
    return { matcher: function (i) { return s_3.test(i.full); }, kind: "regex" };
} var n = t ? JSON.parse.bind(JSON) : YX; var r = !1; return e.length > 1 && e[0] === '"' && e[e.length - 1] === '"' ? (e = n(e), r = !0) : t && e.length > 1 && e[0] === '"' && e[e.length - 2] === '"' && e[e.length - 1] === "i" ? (e = n(e.substring(0, e.length - 1)), r = !1) : t && e.length > 1 && e[0] === '"' && e[e.length - 2] === '"' && e[e.length - 1] === "s" ? (e = n(e.substring(0, e.length - 1)), r = !0) : e.length > 1 && e[0] === "'" && e[e.length - 1] === "'" && (e = n(e), r = !0), e = Ne(e), r ? t ? { kind: "strict", matcher: function (s) { return Ne(s.full) === e; } } : { matcher: function (s) { return !e && !s.immediate.length ? !0 : s.immediate.some(function (i) { return Ne(i) === e; }); }, kind: "strict" } : (e = e.toLowerCase(), { kind: "lax", matcher: function (o) { return Ne(o.full).toLowerCase().includes(e); } }); }
var yi = /** @class */ (function () {
    function yi(t) {
        if (this._normalizeWhiteSpace = t.normalizeWhiteSpace, this._ignoreCase = t.ignoreCase, this._string = t.matchSubstring ? void 0 : this.normalize(t.string), this._substring = t.matchSubstring ? this.normalize(t.string) : void 0, t.regexSource) {
            var n = new Set((t.regexFlags || "").split(""));
            t.ignoreCase === !1 && n.delete("i"), t.ignoreCase === !0 && n.add("i"), this._regex = new RegExp(t.regexSource, __spreadArray([], n, true).join(""));
        }
    }
    yi.prototype.matches = function (t) { return this._regex || (t = this.normalize(t)), this._string !== void 0 ? t === this._string : this._substring !== void 0 ? t.includes(this._substring) : this._regex ? !!this._regex.test(t) : !1; };
    yi.prototype.normalize = function (t) { return t && (this._normalizeWhiteSpace && (t = Ne(t)), this._ignoreCase && (t = t.toLocaleLowerCase()), t); };
    return yi;
}());
function bl(e, t) { if (e === t)
    return !0; if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
        return !1;
    if (Array.isArray(e)) {
        if (e.length !== t.length)
            return !1;
        for (var r = 0; r < e.length; ++r)
            if (!bl(e[r], t[r]))
                return !1;
        return !0;
    }
    if (e instanceof RegExp)
        return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
        return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
        return e.toString() === t.toString();
    var n = Object.keys(e);
    if (n.length !== Object.keys(t).length)
        return !1;
    for (var r = 0; r < n.length; ++r)
        if (!t.hasOwnProperty(n[r]))
            return !1;
    for (var _10 = 0, n_5 = n; _10 < n_5.length; _10++) {
        var r = n_5[_10];
        if (!bl(e[r], t[r]))
            return !1;
    }
    return !0;
} return typeof e == "number" && typeof t == "number" ? isNaN(e) && isNaN(t) : !1; }
var JX = /** @class */ (function () {
    function JX(t, n) {
        this._performingAction = !1, this._listeners = [], this._hoveredModel = null, this._hoveredElement = null, this._activeModel = null, this._expectProgrammaticKeyUp = !1, this._mode = "none", this._testIdAttributeName = "data-testid", this.document = t.document, this._injectedScript = t, this._delegate = n, this._highlight = new Tl(t), this.refreshListenersIfNeeded(), t.isUnderTest && console.error("Recorder script ready for test");
    }
    JX.prototype.refreshListenersIfNeeded = function () {
        var _this = this;
        this._highlight.isInstalled() || (tY(this._listeners), this._listeners = [Xe(this.document, "click", function (t) { return _this._onClick(t); }, !0), Xe(this.document, "auxclick", function (t) { return _this._onClick(t); }, !0), Xe(this.document, "input", function (t) { return _this._onInput(t); }, !0), Xe(this.document, "keydown", function (t) { return _this._onKeyDown(t); }, !0), Xe(this.document, "keyup", function (t) { return _this._onKeyUp(t); }, !0), Xe(this.document, "mousedown", function (t) { return _this._onMouseDown(t); }, !0), Xe(this.document, "mouseup", function (t) { return _this._onMouseUp(t); }, !0), Xe(this.document, "mousemove", function (t) { return _this._onMouseMove(t); }, !0), Xe(this.document, "mouseleave", function (t) { return _this._onMouseLeave(t); }, !0), Xe(this.document, "focus", function (t) { return t.isTrusted && _this._onFocus(!0); }, !0), Xe(this.document, "scroll", function (t) { t.isTrusted && (_this._hoveredModel = null, _this._highlight.hideActionPoint(), _this._updateHighlight()); }, !0)], this._highlight.install());
    };
    JX.prototype.setUIState = function (t) { var l; var n = t.mode, r = t.actionPoint, o = t.actionSelector, s = t.language, i = t.testIdAttributeName; this._testIdAttributeName = i, this._highlight.setLanguage(s), n !== this._mode && (this._mode = n, this._clearHighlight()), r && this._actionPoint && r.x === this._actionPoint.x && r.y === this._actionPoint.y || !r && !this._actionPoint || (r ? this._highlight.showActionPoint(r.x, r.y) : this._highlight.hideActionPoint(), this._actionPoint = r), this._actionSelector && !((l = this._hoveredModel) != null && l.elements.length) && (this._actionSelector = void 0), o !== this._actionSelector && (this._hoveredModel = o ? UX(this._injectedScript, o, this.document) : null, this._updateHighlight(), this._actionSelector = o); };
    JX.prototype._clearHighlight = function () { this._hoveredModel = null, this._activeModel = null, this._updateHighlight(); };
    JX.prototype._actionInProgress = function (t) { return this._performingAction ? !0 : (Tt(t), !1); };
    JX.prototype._consumedDueToNoModel = function (t, n) { return n ? !1 : (Tt(t), !0); };
    JX.prototype._consumedDueWrongTarget = function (t) { return this._activeModel && this._activeModel.elements[0] === this._deepEventTarget(t) ? !1 : (Tt(t), !0); };
    JX.prototype._onClick = function (t) { var r, o; if (!t.isTrusted || (this._mode === "inspecting" && ((o = (r = this._delegate).setSelector) == null || o.call(r, this._hoveredModel ? this._hoveredModel.selector : "")), this._shouldIgnoreMouseEvent(t)) || this._actionInProgress(t) || this._consumedDueToNoModel(t, this._hoveredModel))
        return; var n = wi(this._deepEventTarget(t)); if (n) {
        this._performAction({ name: n.checked ? "check" : "uncheck", selector: this._hoveredModel.selector, signals: [] });
        return;
    } this._performAction({ name: "click", selector: this._hoveredModel.selector, position: eY(t), signals: [], button: ZX(t), modifiers: fu(t), clickCount: t.detail }); };
    JX.prototype._shouldIgnoreMouseEvent = function (t) { var n = this._deepEventTarget(t); if (this._mode === "none")
        return !0; if (this._mode === "inspecting")
        return Tt(t), !0; var r = n.nodeName; return !!(r === "SELECT" || r === "OPTION" || r === "INPUT" && ["date"].includes(n.type)); };
    JX.prototype._onMouseDown = function (t) { t.isTrusted && (this._shouldIgnoreMouseEvent(t) || (this._performingAction || Tt(t), this._activeModel = this._hoveredModel)); };
    JX.prototype._onMouseUp = function (t) { t.isTrusted && (this._shouldIgnoreMouseEvent(t) || this._performingAction || Tt(t)); };
    JX.prototype._onMouseMove = function (t) { if (!t.isTrusted || this._mode === "none")
        return; var n = this._deepEventTarget(t); this._hoveredElement !== n && (this._hoveredElement = n, this._updateModelForHoveredElement()); };
    JX.prototype._onMouseLeave = function (t) { t.isTrusted && this._injectedScript.window.top !== this._injectedScript.window && this._deepEventTarget(t).nodeType === Node.DOCUMENT_NODE && (this._hoveredElement = null, this._updateModelForHoveredElement()); };
    JX.prototype._onFocus = function (t) { if (this._mode === "none")
        return; var n = this._deepActiveElement(this.document); if (t && n === this.document.body)
        return; var r = n ? El(this._injectedScript, n, this._testIdAttributeName) : null; this._activeModel = r && r.selector ? r : null, t && (this._hoveredElement = n), this._updateModelForHoveredElement(); };
    JX.prototype._updateModelForHoveredElement = function () { if (!this._hoveredElement) {
        this._hoveredModel = null, this._updateHighlight();
        return;
    } var t = this._hoveredElement, _10 = El(this._injectedScript, t, this._testIdAttributeName), n = _10.selector, r = _10.elements; this._hoveredModel && this._hoveredModel.selector === n || (this._hoveredModel = n ? { selector: n, elements: r } : null, this._updateHighlight()); };
    JX.prototype._updateHighlight = function () { var t = this._hoveredModel ? this._hoveredModel.elements : [], n = this._hoveredModel ? this._hoveredModel.selector : ""; this._highlight.updateHighlight(t, n, this._mode === "recording"); };
    JX.prototype._onInput = function (t) { var r, o, s, i; if (this._mode !== "recording")
        return !0; var n = this._deepEventTarget(t); if (n.nodeName === "INPUT" && n.type.toLowerCase() === "file") {
        (o = (r = this._delegate).recordAction) == null || o.call(r, { name: "setInputFiles", selector: this._activeModel.selector, signals: [], files: __spreadArray([], n.files || [], true).map(function (l) { return l.name; }) });
        return;
    } if (["INPUT", "TEXTAREA"].includes(n.nodeName) || n.isContentEditable) {
        if (n.nodeName === "INPUT" && ["checkbox", "radio"].includes(n.type.toLowerCase()) || this._consumedDueWrongTarget(t))
            return;
        (i = (s = this._delegate).recordAction) == null || i.call(s, { name: "fill", selector: this._activeModel.selector, signals: [], text: n.isContentEditable ? n.innerText : n.value });
    } if (n.nodeName === "SELECT") {
        var l = n;
        if (this._actionInProgress(t))
            return;
        this._performAction({ name: "select", selector: this._hoveredModel.selector, options: __spreadArray([], l.selectedOptions, true).map(function (c) { return c.value; }), signals: [] });
    } };
    JX.prototype._shouldGenerateKeyPressFor = function (t) { if (["Backspace", "Delete", "AltGraph"].includes(t.key) || t.key === "@" && t.code === "KeyL")
        return !1; if (navigator.platform.includes("Mac")) {
        if (t.key === "v" && t.metaKey)
            return !1;
    }
    else if (t.key === "v" && t.ctrlKey || t.key === "Insert" && t.shiftKey)
        return !1; if (["Shift", "Control", "Meta", "Alt", "Process"].includes(t.key))
        return !1; var n = t.ctrlKey || t.altKey || t.metaKey; return t.key.length === 1 && !n ? !!wi(this._deepEventTarget(t)) : !0; };
    JX.prototype._onKeyDown = function (t) { if (t.isTrusted) {
        if (this._mode === "inspecting") {
            Tt(t);
            return;
        }
        if (this._mode === "recording" && this._shouldGenerateKeyPressFor(t)) {
            if (this._actionInProgress(t)) {
                this._expectProgrammaticKeyUp = !0;
                return;
            }
            if (!this._consumedDueWrongTarget(t)) {
                if (t.key === " ") {
                    var n = wi(this._deepEventTarget(t));
                    if (n) {
                        this._performAction({ name: n.checked ? "uncheck" : "check", selector: this._activeModel.selector, signals: [] });
                        return;
                    }
                }
                this._performAction({ name: "press", selector: this._activeModel.selector, signals: [], key: t.key, modifiers: fu(t) });
            }
        }
    } };
    JX.prototype._onKeyUp = function (t) { if (t.isTrusted && this._mode !== "none" && this._shouldGenerateKeyPressFor(t)) {
        if (!this._expectProgrammaticKeyUp) {
            Tt(t);
            return;
        }
        this._expectProgrammaticKeyUp = !1;
    } };
    JX.prototype._performAction = function (t) {
        return __awaiter(this, void 0, void 0, function () { var n, r; return __generator(this, function (_10) {
            switch (_10.label) {
                case 0:
                    this._clearHighlight(), this._performingAction = !0;
                    return [4 /*yield*/, ((r = (n = this._delegate).performAction) == null ? void 0 : r.call(n, t).catch(function () { }))];
                case 1:
                    _10.sent(), this._performingAction = !1, this._onFocus(!1), this._injectedScript.isUnderTest && console.error("Action performed for test: " + JSON.stringify({ hovered: this._hoveredModel ? this._hoveredModel.selector : null, active: this._activeModel ? this._activeModel.selector : null }));
                    return [2 /*return*/];
            }
        }); });
    };
    JX.prototype._deepEventTarget = function (t) { return t.composedPath()[0]; };
    JX.prototype._deepActiveElement = function (t) { var n = t.activeElement; for (; n && n.shadowRoot && n.shadowRoot.activeElement;)
        n = n.shadowRoot.activeElement; return n; };
    return JX;
}());
function fu(e) { return (e.altKey ? 1 : 0) | (e.ctrlKey ? 2 : 0) | (e.metaKey ? 4 : 0) | (e.shiftKey ? 8 : 0); }
function ZX(e) { switch (e.which) {
    case 1: return "left";
    case 2: return "middle";
    case 3: return "right";
} return "left"; }
function eY(e) { if (e.target.nodeName === "CANVAS")
    return { x: e.offsetX, y: e.offsetY }; }
function Tt(e) { e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(); }
function wi(e) { if (!e || e.nodeName !== "INPUT")
    return null; var t = e; return ["checkbox", "radio"].includes(t.type) ? t : null; }
function Xe(e, t, n, r) { return e.addEventListener(t, n, r), function () { e.removeEventListener(t, n, r); }; }
function tY(e) { for (var _10 = 0, e_5 = e; _10 < e_5.length; _10++) {
    var t = e_5[_10];
    t();
} e.splice(0, e.length); }
function nY(e, t) {
    e = e.replace(/AriaRole\s*\.\s*([\w]+)/g, function (o, s) { return s.toLowerCase(); }).replace(/(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g, function (o, s, i) { return "".concat(s, "(").concat(i.toLowerCase()); });
    var n = [];
    var r = "";
    for (var o = 0; o < e.length; ++o) {
        var s = e[o];
        if (s !== '"' && s !== "'" && s !== "`" && s !== "/") {
            r += s;
            continue;
        }
        var i = e[o - 1] === "r" || e[o] === "/";
        ++o;
        var l = "";
        for (; o < e.length;) {
            if (e[o] === "\\") {
                i ? (e[o + 1] !== s && (l += e[o]), ++o, l += e[o]) : (++o, e[o] === "n" ? l += "\n" : e[o] === "r" ? l += "\r" : e[o] === "t" ? l += "	" : l += e[o]), ++o;
                continue;
            }
            if (e[o] !== s) {
                l += e[o++];
                continue;
            }
            break;
        }
        n.push({ quote: s, text: l }), r += (s === "/" ? "r" : "") + "$" + n.length;
    }
    return r = r.toLowerCase().replace(/get_by_alt_text/g, "getbyalttext").replace(/get_by_test_id/g, "getbytestid").replace(/get_by_([\w]+)/g, "getby$1").replace(/has_text/g, "hastext").replace(/frame_locator/g, "framelocator").replace(/[{}\s]/g, "").replace(/new\(\)/g, "").replace(/new[\w]+\.[\w]+options\(\)/g, "").replace(/\.set([\w]+)\(([^)]+)\)/g, function (o, s, i) { return "," + s.toLowerCase() + "=" + i.toLowerCase(); }).replace(/:/g, "=").replace(/,re\.ignorecase/g, "i").replace(/,pattern.case_insensitive/g, "i").replace(/,regexoptions.ignorecase/g, "i").replace(/re.compile\(([^)]+)\)/g, "$1").replace(/pattern.compile\(([^)]+)\)/g, "r$1").replace(/newregex\(([^)]+)\)/g, "r$1").replace(/string=/g, "=").replace(/regex=/g, "=").replace(/,,/g, ","), dp(r, n, t);
}
function du(e) { return __spreadArray([], e.matchAll(/\$\d+/g), true).length; }
function hu(e, t) { return e.replace(/\$(\d+)/g, function (n, r) { return "$".concat(r - t); }); }
function dp(e, t, n) { for (;;) {
    var o = e.match(/filter\(,?has=/);
    if (!o)
        break;
    var s = o.index + o[0].length;
    var i = 0, l = s;
    for (; l < e.length && (e[l] === "(" ? i++ : e[l] === ")" && i--, !(i < 0)); l++)
        ;
    var c = du(e.substring(0, s)), a = hu(e.substring(s, l), c), u = du(a), p = t.slice(c, c + u), d = JSON.stringify(dp(a, p, n));
    e = e.substring(0, s - 1) + "2=$".concat(c + 1) + hu(e.substring(l), u - 1);
    var m = t.slice(0, c), y = t.slice(c + u);
    t = m.concat([{ quote: '"', text: d }]).concat(y);
} e = e.replace(/framelocator\(([^)]+)\)/g, "$1.internal:control=enter-frame").replace(/locator\(([^)]+)\)/g, "$1").replace(/getbyrole\(([^)]+)\)/g, "internal:role=$1").replace(/getbytext\(([^)]+)\)/g, "internal:text=$1").replace(/getbylabel\(([^)]+)\)/g, "internal:label=$1").replace(/getbytestid\(([^)]+)\)/g, "internal:testid=[".concat(n, "=$1s]")).replace(/getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g, "internal:attr=[$1=$2]").replace(/first(\(\))?/g, "nth=0").replace(/last(\(\))?/g, "nth=-1").replace(/nth\(([^)]+)\)/g, "nth=$1").replace(/filter\(,?hastext=([^)]+)\)/g, "internal:has-text=$1").replace(/filter\(,?has2=([^)]+)\)/g, "internal:has=$1").replace(/,exact=false/g, "").replace(/,exact=true/g, "s").replace(/\,/g, "]["); var r = e.split("."); for (var o = 0; o < r.length - 1; o++)
    if (r[o] === "internal:control=enter-frame" && r[o + 1].startsWith("nth=")) {
        var s = r.splice(o, 1)[0];
        r.splice(o + 1, 0, s);
    } return r.map(function (o) { return !o.startsWith("internal:") || o === "internal:control" ? o.replace(/\$(\d+)/g, function (s, i) { return t[+i - 1].text; }) : (o = o.includes("[") ? o.replace(/\]/, "") + "]" : o, o = o.replace(/(?:r)\$(\d+)(i)?/g, function (s, i, l) { var c = t[+i - 1]; return o.startsWith("internal:attr") || o.startsWith("internal:testid") || o.startsWith("internal:role") ? new RegExp(c.text) + (l || "") : zn(new RegExp(c.text, l), !1); }).replace(/\$(\d+)(i|s)?/g, function (s, i, l) { var c = t[+i - 1]; return o.startsWith("internal:has=") ? c.text : o.startsWith("internal:attr") || o.startsWith("internal:testid") || o.startsWith("internal:role") ? De(c.text, l === "s") : zn(c.text, l === "s"); }), o); }).join(" >> "); }
function rY(e, t, n) { try {
    return Ur(t), t;
}
catch (_10) { } try {
    var r = nY(t, n);
    if (pu(sn(e, r)) === pu(t))
        return r;
}
catch (_11) { } return ""; }
function pu(e) { return e.replace(/\s/g, "").replace(/["`]/g, "'"); }
var mu = function (_10) {
    var e = _10.tabs, t = _10.selectedTab, n = _10.setSelectedTab, r = _10.leftToolbar, o = _10.rightToolbar;
    return S("div", { className: "tabbed-pane", children: D("div", { className: "vbox", children: [S(wl, { children: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], r || [], true), e.map(function (s) { return S(hp, { id: s.id, title: s.title, count: s.count, selected: t === s.id, onSelect: n }); }), true), [S("div", { className: "spacer" })], false), o || [], true) }), e.map(function (s) { if (s.component)
                    return S("div", { className: "tab-content", style: { display: t === s.id ? "inherit" : "none" }, children: s.component }, s.id); if (t === s.id)
                    return S("div", { className: "tab-content", children: s.render() }, s.id); })] }) });
}, hp = function (_10) {
    var e = _10.id, t = _10.title, n = _10.count, r = _10.selected, o = _10.onSelect;
    return D("div", { className: "tabbed-pane-tab " + (r ? "selected" : ""), onClick: function () { return o(e); }, children: [S("div", { className: "tabbed-pane-tab-label", children: t }), S("div", { className: "tabbed-pane-tab-count", children: n || "" })] }, e);
}, oY = function (_10) {
    var e = _10.action, t = _10.sdkLanguage, n = _10.testIdAttributeName;
    var _11 = ys(), r = _11[0], o = _11[1], _12 = $.useState("action"), s = _12[0], i = _12[1], _13 = $.useState(!1), l = _13[0], c = _13[1], _14 = $.useState(""), a = _14[0], u = _14[1], _15 = $.useState(!1), p = _15[0], d = _15[1], m = $.useMemo(function () { if (!e)
        return { snapshots: {} }; var x = e.beforeSnapshot ? { action: e, snapshotName: e.beforeSnapshot } : void 0, A = e; for (; !x && A;)
        A = Yg(A), x = A != null && A.afterSnapshot ? { action: A, snapshotName: A == null ? void 0 : A.afterSnapshot } : void 0; var F = e.afterSnapshot ? { action: e, snapshotName: e.afterSnapshot } : x; return { snapshots: { action: e.inputSnapshot ? { action: e, snapshotName: e.inputSnapshot } : F, before: x, after: F } }; }, [e]).snapshots, _16 = $.useMemo(function () { var M, V; var x = m[s]; if (!x)
        return { snapshotUrl: iY }; var A = new URLSearchParams; A.set("trace", Fn(x.action).traceUrl), A.set("name", x.snapshotName); var F = new URL("snapshot/".concat(x.action.pageId, "?").concat(A.toString()), window.location.href).toString(), Z = new URL("snapshotInfo/".concat(x.action.pageId, "?").concat(A.toString()), window.location.href).toString(), ke = s === "action" ? (M = x.action.point) == null ? void 0 : M.x : void 0, Re = s === "action" ? (V = x.action.point) == null ? void 0 : V.y : void 0, C = new URLSearchParams; C.set("r", F), C.set("trace", Fn(x.action).traceUrl); var P = new URL("popout.html?".concat(C.toString()), window.location.href).toString(); return { snapshots: m, snapshotInfoUrl: Z, snapshotUrl: F, pointX: ke, pointY: Re, popoutUrl: P }; }, [m, s]), y = _16.snapshotInfoUrl, T = _16.snapshotUrl, k = _16.pointX, h = _16.pointY, f = _16.popoutUrl, g = $.useRef(null), v = $.useRef(null), _17 = $.useState({ viewport: vu, url: "" }), E = _17[0], b = _17[1], w = $.useRef({ iteration: 0, visibleIframe: 0 });
    $.useEffect(function () { (function () { return __awaiter(void 0, void 0, void 0, function () { var x, A, F, Re, Z, ke_1, Re, C, _10; return __generator(this, function (_11) {
        switch (_11.label) {
            case 0:
                x = w.current.iteration + 1, A = 1 - w.current.visibleIframe;
                w.current.iteration = x;
                F = { url: "", viewport: vu };
                if (!y) return [3 /*break*/, 3];
                return [4 /*yield*/, fetch(y)];
            case 1: return [4 /*yield*/, (_11.sent()).json()];
            case 2:
                Re = _11.sent();
                Re.error || (F.url = Re.url, F.viewport = Re.viewport);
                _11.label = 3;
            case 3:
                if (w.current.iteration !== x)
                    return [2 /*return*/];
                Z = [g, v][A].current;
                if (!Z) return [3 /*break*/, 8];
                ke_1 = function () { };
                Re = new Promise(function (C) { return ke_1 = C; });
                _11.label = 4;
            case 4:
                _11.trys.push([4, 6, 7, 8]);
                Z.addEventListener("load", ke_1), Z.addEventListener("error", ke_1);
                C = T + (k === void 0 ? "" : "&pointX=".concat(k, "&pointY=").concat(h));
                Z.contentWindow ? Z.contentWindow.location.replace(C) : Z.src = C;
                return [4 /*yield*/, Re];
            case 5:
                _11.sent();
                return [3 /*break*/, 8];
            case 6:
                _10 = _11.sent();
                return [3 /*break*/, 8];
            case 7:
                Z.removeEventListener("load", ke_1), Z.removeEventListener("error", ke_1);
                return [7 /*endfinally*/];
            case 8:
                w.current.iteration === x && (w.current.visibleIframe = A, b(F));
                return [2 /*return*/];
        }
    }); }); })(); }, [T, y, k, h]);
    var N = 40, R = { width: E.viewport.width, height: E.viewport.height + N }, q = Math.min(r.width / R.width, r.height / R.height, 1), j = { x: (r.width - R.width) / 2, y: (r.height - R.height) / 2 };
    return D("div", { className: "snapshot-tab", tabIndex: 0, onKeyDown: function (x) { x.key === "Escape" && l && c(!1); }, children: [S(gu, { isInspecting: l, sdkLanguage: t, testIdAttributeName: n, highlightedLocator: a, setHighlightedLocator: u, iframe: g.current }), S(gu, { isInspecting: l, sdkLanguage: t, testIdAttributeName: n, highlightedLocator: a, setHighlightedLocator: u, iframe: v.current }), D(wl, { children: [S(mo, { title: "Pick locator", disabled: !f, toggled: p, onClick: function () { d(!p), u(""), c(!p); }, children: "Pick locator" }), ["action", "before", "after"].map(function (x) { return S(hp, { id: x, title: sY(x), selected: s === x, onSelect: function () { return i(x); } }); }), S("div", { style: { flex: "auto" } }), S(mo, { icon: "link-external", title: "Open snapshot in a new tab", disabled: !f, onClick: function () { window.open(f || "", "_blank"); } })] }), p && D(wl, { noMinHeight: !0, children: [S(mo, { icon: "microscope", title: "Pick locator", disabled: !f, toggled: l, onClick: function () { c(!l); } }), S(wh, { text: a, language: t, readOnly: !f, focusOnChange: !0, wrapLines: !0, onChange: function (x) { u(x), c(!1); } }), S(mo, { icon: "files", title: "Copy locator", disabled: !f, onClick: function () { jp(a); } })] }), S("div", { ref: o, className: "snapshot-wrapper", children: D("div", { className: "snapshot-container", style: { width: R.width + "px", height: R.height + "px", transform: "translate(".concat(j.x, "px, ").concat(j.y, "px) scale(").concat(q, ")") }, children: [D("div", { className: "window-header", children: [D("div", { style: { whiteSpace: "nowrap" }, children: [S("span", { className: "window-dot", style: { backgroundColor: "rgb(242, 95, 88)" } }), S("span", { className: "window-dot", style: { backgroundColor: "rgb(251, 190, 60)" } }), S("span", { className: "window-dot", style: { backgroundColor: "rgb(88, 203, 66)" } })] }), S("div", { className: "window-address-bar", title: E.url || "about:blank", children: E.url || "about:blank" }), S("div", { style: { marginLeft: "auto" }, children: D("div", { children: [S("span", { className: "window-menu-bar" }), S("span", { className: "window-menu-bar" }), S("span", { className: "window-menu-bar" })] }) })] }), D("div", { className: "snapshot-switcher", children: [S("iframe", { ref: g, name: "snapshot", className: w.current.visibleIframe === 0 ? "snapshot-visible" : "" }), S("iframe", { ref: v, name: "snapshot", className: w.current.visibleIframe === 1 ? "snapshot-visible" : "" })] })] }) })] });
};
function sY(e) { return e === "before" ? "Before" : e === "after" ? "After" : e === "action" ? "Action" : e; }
var gu = function (_10) {
    var e = _10.iframe, t = _10.isInspecting, n = _10.sdkLanguage, r = _10.testIdAttributeName, o = _10.highlightedLocator, s = _10.setHighlightedLocator;
    return ($.useEffect(function () { var i = e == null ? void 0 : e.contentWindow; var l; try {
        if (!i || (l = i._recorder, !l && !t && !o))
            return;
    }
    catch (_10) {
        return;
    } if (!l) {
        var a = new WX(i, !1, n, r, 1, "chromium", []);
        l = new JX(a, { setSelector: function (u) {
                return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_10) {
                    l.setUIState({ mode: "none", language: n, testIdAttributeName: r }), s(sn("javascript", u, !1, !0));
                    return [2 /*return*/];
                }); });
            } }), i._recorder = l;
    } var c = rY(n, o, r); l.setUIState({ mode: t ? "inspecting" : "none", actionSelector: c, language: n, testIdAttributeName: r }); }, [e, t, o, s, n, r]), S(Hr, {}));
}, vu = { width: 1280, height: 720 }, iY = 'data:text/html,<body style="background: #ddd"></body>';
var lY = $d, cY = function (_10) {
    var e = _10.action, t = _10.setSelectedFrame, n = _10.selectedFrame;
    var r = (e == null ? void 0 : e.stack) || [];
    return S(lY, { dataTestId: "stack-trace", items: r, selectedItem: r[n], render: function (o) { var s = o.file[1] === ":" ? "\\" : "/"; return D(Hr, { children: [S("span", { className: "stack-trace-frame-function", children: o.function || "(anonymous)" }), S("span", { className: "stack-trace-frame-location", children: o.file.split(s).pop() }), S("span", { className: "stack-trace-frame-line", children: ":" + o.line })] }); }, onSelected: function (o) { return t(r.indexOf(o)); } });
}, aY = function (_10) {
    var e = _10.action, t = _10.sources, n = _10.hideStackFrames, r = _10.rootDir, o = _10.fallbackLocation;
    var _11 = $.useState(), s = _11[0], i = _11[1], _12 = $.useState(0), l = _12[0], c = _12[1];
    $.useEffect(function () { s !== e && (i(e), c(0)); }, [e, s, i, c]);
    var _13 = Bp(function () { return __awaiter(void 0, void 0, void 0, function () { var f, m, y, T, k, h, g, v, _10, _11, _12; return __generator(this, function (_13) {
        switch (_13.label) {
            case 0:
                m = ((f = e == null ? void 0 : e.stack) == null ? void 0 : f[l]) || o;
                if (!(m != null && m.file))
                    return [2 /*return*/, { source: { errors: [], content: void 0 }, targetLine: 0, highlight: [] }];
                y = t.get(m.file);
                y || (y = { errors: [], content: void 0 }, t.set(m.file, y));
                T = m.line || 0, k = r && m.file.startsWith(r) ? m.file.substring(r.length + 1) : m.file, h = y.errors.map(function (g) { return ({ type: "error", line: g.location.line, message: g.error.message }); });
                if (!(h.push({ line: T, type: "running" }), y.content === void 0 || o)) return [3 /*break*/, 8];
                return [4 /*yield*/, uY(m.file)];
            case 1:
                g = _13.sent();
                _13.label = 2;
            case 2:
                _13.trys.push([2, 7, , 8]);
                return [4 /*yield*/, fetch("sha1/src@".concat(g, ".txt"))];
            case 3:
                v = _13.sent();
                _10 = v.status === 404;
                if (!_10) return [3 /*break*/, 5];
                return [4 /*yield*/, fetch("file?path=".concat(m.file))];
            case 4:
                _10 = (v = _13.sent());
                _13.label = 5;
            case 5:
                _10;
                _11 = y;
                return [4 /*yield*/, v.text()];
            case 6:
                _11.content = _13.sent();
                return [3 /*break*/, 8];
            case 7:
                _12 = _13.sent();
                y.content = "<Unable to read \"".concat(m.file, "\">");
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/, { source: y, highlight: h, targetLine: T, fileName: k }];
        }
    }); }); }, [e, l, r, o], { source: { errors: [], content: "Loading…" }, highlight: [] }), a = _13.source, u = _13.highlight, p = _13.targetLine, d = _13.fileName;
    return D(hl, { sidebarSize: 200, orientation: "horizontal", sidebarHidden: n, children: [D("div", { className: "vbox", "data-testid": "source-code", children: [d && S("div", { className: "source-tab-file-name", children: d }), S(wh, { text: a.content || "", language: "javascript", highlight: u, revealLine: p, readOnly: !0, lineNumbers: !0 })] }), S(cY, { action: e, selectedFrame: l, setSelectedFrame: c })] });
};
function uY(e) {
    return __awaiter(this, void 0, void 0, function () { var t, n, r, o, s, i; return __generator(this, function (_10) {
        switch (_10.label) {
            case 0:
                t = new TextEncoder().encode(e);
                return [4 /*yield*/, crypto.subtle.digest("SHA-1", t)];
            case 1:
                n = _10.sent(), r = [], o = new DataView(n);
                for (s = 0; s < o.byteLength; s += 1) {
                    i = o.getUint8(s).toString(16).padStart(2, "0");
                    r.push(i);
                }
                return [2 /*return*/, r.join("")];
        }
    }); });
}
var pp = { width: 200, height: 45 }, fY = function (_10) {
    var e = _10.model, t = _10.boundaries, n = _10.previewPoint;
    var a, u;
    var _11 = ys(), r = _11[0], o = _11[1];
    var s = 0;
    if (o.current && n) {
        var p = o.current.getBoundingClientRect();
        s = (n.clientY - p.top) / pp.height | 0;
    }
    var i = (u = (a = e == null ? void 0 : e.pages) == null ? void 0 : a[s]) == null ? void 0 : u.screencastFrames;
    var l, c;
    if (n !== void 0 && i) {
        var p = t.minimum + (t.maximum - t.minimum) * n.x / r.width;
        l = i[Nu(i, p, mp) - 1], c = l ? gp({ width: l.width, height: l.height }, { width: window.innerWidth * 3 / 4 | 0, height: window.innerHeight * 3 / 4 | 0 }) : void 0;
    }
    return D("div", { className: "film-strip", ref: o, children: [e == null ? void 0 : e.pages.filter(function (p) { return p.screencastFrames.length; }).map(function (p, d) { return S(dY, { boundaries: t, page: p, width: r.width }, d); }), l && c && (n == null ? void 0 : n.x) !== void 0 && S("div", { className: "film-strip-hover", style: { width: c.width, height: c.height, top: r.bottom + 5, left: Math.min(n.x, r.width - c.width - 10) }, children: S("img", { src: "sha1/".concat(l.sha1), width: c.width, height: c.height }) })] });
}, dY = function (_10) {
    var e = _10.boundaries, t = _10.page, n = _10.width;
    var r = { width: 0, height: 0 }, o = t.screencastFrames;
    for (var _11 = 0, o_4 = o; _11 < o_4.length; _11++) {
        var k = o_4[_11];
        r.width = Math.max(r.width, k.width), r.height = Math.max(r.height, k.height);
    }
    var s = gp(r, pp), i = 2.5, l = o[0].timestamp, c = o[o.length - 1].timestamp, a = e.maximum - e.minimum, u = (l - e.minimum) / a * n, p = (e.maximum - c) / a * n, m = (c - l) / a * n / (s.width + 2 * i) | 0, y = (c - l) / m, T = [];
    for (var k = 0; l && y && k < m; ++k) {
        var h = l + y * k, f = Nu(o, h, mp) - 1;
        T.push(S("div", { className: "film-strip-frame", style: { width: s.width, height: s.height, backgroundImage: "url(sha1/".concat(o[f].sha1, ")"), backgroundSize: "".concat(s.width, "px ").concat(s.height, "px"), margin: i, marginRight: i } }, k));
    }
    return T.push(S("div", { className: "film-strip-frame", style: { width: s.width, height: s.height, backgroundImage: "url(sha1/".concat(o[o.length - 1].sha1, ")"), backgroundSize: "".concat(s.width, "px ").concat(s.height, "px"), margin: i, marginRight: i } }, T.length)), S("div", { className: "film-strip-lane", style: { marginLeft: u + "px", marginRight: p + "px" }, children: T });
};
function mp(e, t) { return e - t.timestamp; }
function gp(e, t) { var n = Math.max(e.width / t.width, e.height / t.height); return { width: e.width / n | 0, height: e.height / n | 0 }; }
var hY = function (_10) {
    var e = _10.model, t = _10.selectedAction, n = _10.onSelected, r = _10.hideTimelineBars;
    var _11 = ys(), o = _11[0], s = _11[1], i = $.useRef(null), _12 = $.useState(), l = _12[0], c = _12[1], _13 = $.useState(), a = _13[0], u = _13[1], _14 = $.useMemo(function () { var v = { minimum: (e == null ? void 0 : e.startTime) || 0, maximum: (e == null ? void 0 : e.endTime) || 3e4 }; return v.minimum > v.maximum && (v.minimum = 0, v.maximum = 3e4), v.maximum += (v.maximum - v.minimum) / 20, { boundaries: v, offsets: pY(o.width, v) }; }, [o.width, e]), p = _14.boundaries, d = _14.offsets, m = $.useMemo(function () { var v = []; for (var _10 = 0, _11 = (e == null ? void 0 : e.actions) || []; _10 < _11.length; _10++) {
        var E = _11[_10];
        var b = yu(E.params.selector || "", 50);
        E.method === "goto" && (b = yu(E.params.url || "", 50)), v.push({ action: E, leftTime: E.startTime, rightTime: E.endTime, leftPosition: ur(o.width, p, E.startTime), rightPosition: ur(o.width, p, E.endTime), label: E.apiName + " " + b, title: E.endTime ? Dn(E.endTime - E.startTime) : "Timed Out", type: E.type + "." + E.method, className: "".concat(E.type, "_").concat(E.method).toLowerCase() });
    } for (var _12 = 0, _13 = (e == null ? void 0 : e.events) || []; _12 < _13.length; _12++) {
        var E = _13[_12];
        var b = E.time;
        v.push({ event: E, leftTime: b, rightTime: b, leftPosition: ur(o.width, p, b), rightPosition: ur(o.width, p, b), label: E.method, title: void 0, type: E.class + "." + E.method, className: "".concat(E.class, "_").concat(E.method).toLowerCase() });
    } return v; }, [e, p, o.width]), y = a !== void 0 ? m[a] : void 0;
    var T = m.find(function (v) { return v.action === t; });
    T = y || T;
    var k = function (v) { var E = Si(o.width, p, v), b = Si(o.width, p, v - 5), w = Si(o.width, p, v + 5); var N, R; for (var q = 0; q < m.length; q++) {
        var j = m[q], x = Math.max(j.leftTime, b), A = Math.min(j.rightTime, w), F = (j.leftTime + j.rightTime) / 2, Z_1 = Math.abs(E - F);
        x > A || (N === void 0 || Z_1 < R) && (N = q, R = Z_1);
    } return N; }, h = function (v) { if (!s.current)
        return; var E = v.clientX - s.current.getBoundingClientRect().left, b = k(E); c({ x: E, clientY: v.clientY }), u(b); };
    return S("div", { style: { flex: "none", borderBottom: "1px solid var(--vscode-panel-border)" }, children: D("div", { ref: s, className: "timeline-view", onMouseMove: h, onMouseOver: h, onMouseLeave: function () { c(void 0), u(void 0); }, onClick: function (v) { if (c(void 0), !s.current)
                return; var E = v.clientX - s.current.getBoundingClientRect().left, b = k(E); if (b === void 0)
                return; var w = m[b].action; w && n(w); }, children: [S("div", { className: "timeline-grid", children: d.map(function (v, E) { return S("div", { className: "timeline-divider", style: { left: v.position + "px" }, children: S("div", { className: "timeline-time", children: Dn(v.time - p.minimum) }) }, E); }) }), !r && S("div", { className: "timeline-lane timeline-labels", children: m.map(function (v, E) { return S("div", { className: "timeline-label " + v.className + (T === v ? " selected" : ""), style: { left: v.leftPosition, maxWidth: 100 }, children: v.label }, E); }) }), !r && S("div", { className: "timeline-lane timeline-bars", ref: i, children: m.map(function (v, E) { return S("div", { className: "timeline-bar " + (v.action ? "action " : "") + (v.event ? "event " : "") + v.className + (T === v ? " selected" : ""), style: { left: v.leftPosition + "px", width: Math.max(1, v.rightPosition - v.leftPosition) + "px", top: mY(v) + "px" }, title: v.title }, E); }) }), S(fY, { model: e, boundaries: p, previewPoint: l }), S("div", { className: "timeline-marker timeline-marker-hover", style: { display: l !== void 0 ? "block" : "none", left: ((l == null ? void 0 : l.x) || 0) + "px" } })] }) });
};
function pY(e, t) { var r = e / 64; var o = t.maximum - t.minimum, s = e / o; var i = o / r; var l = Math.ceil(Math.log(i) / Math.LN10); i = Math.pow(10, l), i * s >= 5 * 64 && (i = i / 5), i * s >= 2 * 64 && (i = i / 2); var c = t.minimum; var a = t.maximum; a += 64 / s, r = Math.ceil((a - c) / i), i || (r = 0); var u = []; for (var p = 0; p < r; ++p) {
    var d = c + i * p;
    u.push({ position: ur(e, t, d), time: d });
} return u; }
function ur(e, t, n) { return (n - t.minimum) / (t.maximum - t.minimum) * e; }
function Si(e, t, n) { return n / e * (t.maximum - t.minimum) + t.minimum; }
function yu(e, t) { return e.length <= t ? e : e.substring(0, t - 1) + "…"; }
function mY(e) { var t; return e.event ? 22 : ((t = e.action) == null ? void 0 : t.method) === "waitForEventInfo" ? 0 : 11; }
var gY = function (_10) {
    var e = _10.model;
    var t, n;
    return e ? D("div", { className: "metadata-view vbox", children: [S("div", { className: "call-section", style: { paddingTop: 2 }, children: "Time" }), !!e.wallTime && D("div", { className: "call-line", children: ["start time:", S("span", { className: "call-value datetime", title: new Date(e.wallTime).toLocaleString(), children: new Date(e.wallTime).toLocaleString() })] }), D("div", { className: "call-line", children: ["duration:", S("span", { className: "call-value number", title: Dn(e.endTime - e.startTime), children: Dn(e.endTime - e.startTime) })] }), S("div", { className: "call-section", children: "Browser" }), D("div", { className: "call-line", children: ["engine:", S("span", { className: "call-value string", title: e.browserName, children: e.browserName })] }), e.platform && D("div", { className: "call-line", children: ["platform:", S("span", { className: "call-value string", title: e.platform, children: e.platform })] }), e.options.userAgent && D("div", { className: "call-line", children: ["user agent:", S("span", { className: "call-value datetime", title: e.options.userAgent, children: e.options.userAgent })] }), S("div", { className: "call-section", children: "Viewport" }), e.options.viewport && D("div", { className: "call-line", children: ["width:", S("span", { className: "call-value number", title: String(!!((t = e.options.viewport) != null && t.width)), children: e.options.viewport.width })] }), e.options.viewport && D("div", { className: "call-line", children: ["height:", S("span", { className: "call-value number", title: String(!!((n = e.options.viewport) != null && n.height)), children: e.options.viewport.height })] }), D("div", { className: "call-line", children: ["is mobile:", S("span", { className: "call-value boolean", title: String(!!e.options.isMobile), children: String(!!e.options.isMobile) })] }), e.options.deviceScaleFactor && D("div", { className: "call-line", children: ["device scale:", S("span", { className: "call-value number", title: String(e.options.deviceScaleFactor), children: String(e.options.deviceScaleFactor) })] }), S("div", { className: "call-section", children: "Counts" }), D("div", { className: "call-line", children: ["pages:", S("span", { className: "call-value number", children: e.pages.length })] }), D("div", { className: "call-line", children: ["actions:", S("span", { className: "call-value number", children: e.actions.length })] }), D("div", { className: "call-line", children: ["events:", S("span", { className: "call-value number", children: e.events.length })] })] }) : S(Hr, {});
}, bY = function (_10) {
    var e = _10.model, t = _10.hideTimelineBars, n = _10.hideStackFrames, r = _10.showSourcesFirst, o = _10.rootDir, s = _10.defaultSourceLocation;
    var _11 = $.useState(void 0), i = _11[0], l = _11[1], _12 = $.useState(), c = _12[0], a = _12[1], _13 = $.useState("actions"), u = _13[0], p = _13[1], _14 = $.useState(r ? "source" : "call"), d = _14[0], m = _14[1], y = e ? c || i : void 0, T = $.useMemo(function () { return (e == null ? void 0 : e.sources) || new Map; }, [e]);
    $.useEffect(function () { if (i && (e != null && e.actions.includes(i)))
        return; var q = e == null ? void 0 : e.actions.find(function (j) { return j.error; }); q ? l(q) : e != null && e.actions.length && l(e.actions[e.actions.length - 1]); }, [e, i, l, m]);
    var _15 = y ? qd(y) : { errors: 0, warnings: 0 }, k = _15.errors, h = _15.warnings, f = k + h, g = y ? Dd(y).length : 0, v = (e == null ? void 0 : e.sdkLanguage) || "javascript", E = { id: "call", title: r ? "Log" : "Call", render: function () { return S(CK, { action: y, sdkLanguage: v }); } }, b = { id: "source", title: "Source", render: function () { return S(aY, { action: y, sources: T, hideStackFrames: n, rootDir: o, fallbackLocation: s }); } }, w = { id: "console", title: "Console", count: f, render: function () { return S(LK, { action: y }); } }, N = { id: "network", title: "Network", count: g, render: function () { return S(DK, { action: y }); } }, R = r ? [b, w, N, E] : [E, w, N, b];
    return D("div", { className: "vbox", children: [S(hY, { model: e, selectedAction: y, onSelected: function (q) { return l(q); }, hideTimelineBars: t }), D(hl, { sidebarSize: 250, orientation: "vertical", children: [D(hl, { sidebarSize: 250, orientation: "horizontal", sidebarIsFirst: !0, children: [S(oY, { action: y, sdkLanguage: v, testIdAttributeName: (e == null ? void 0 : e.testIdAttributeName) || "data-testid" }), S(mu, { tabs: [{ id: "actions", title: "Actions", count: 0, component: S(_v, { sdkLanguage: v, actions: (e == null ? void 0 : e.actions) || [], selectedAction: e ? i : void 0, onSelected: function (q) { l(q); }, onHighlighted: function (q) { a(q); }, revealConsole: function () { return m("console"); } }) }, { id: "metadata", title: "Metadata", count: 0, component: S(gY, { model: e }) }], selectedTab: u, setSelectedTab: p })] }), S(mu, { tabs: R, selectedTab: d, setSelectedTab: m })] })] });
};
export { qK as E, Hr as F, $d as L, TY as M, Tn as R, hl as S, mo as T, bY as W, MK as _, S as a, wY as b, Cc as c, xY as d, EY as e, kY as f, yY as g, wl as h, Rn as i, D as j, Dn as m, $ as r, Er as s, SY as t, ys as u };
