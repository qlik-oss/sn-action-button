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
import allActions from "../utils/actions";
import navigationActions from "../utils/navigation-actions";
import styleFormatter from "./utils/style-formatter";
export var runActions = function (actionList) { return __awaiter(void 0, void 0, void 0, function () {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < actionList.length)) return [3 /*break*/, 4];
                // eslint-disable-next-line no-await-in-loop
                return [4 /*yield*/, actionList[i]()];
            case 2:
                // eslint-disable-next-line no-await-in-loop
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
export var renderButton = function (_a) {
    var layout = _a.layout, theme = _a.theme, app = _a.app, constraints = _a.constraints, senseNavigation = _a.senseNavigation, element = _a.element, multiUserAutomation = _a.multiUserAutomation, translator = _a.translator;
    var isSense = !!senseNavigation;
    var button = element.firstElementChild;
    var style = layout.style, qStateName = layout.qStateName, navigation = layout.navigation;
    var disabled = layout.useEnabledCondition && layout.enabledCondition === 0;
    var isClickable = !disabled && !constraints.active;
    var formattedStyles = styleFormatter.getStyles({
        style: style,
        disabled: disabled,
        theme: theme,
        element: element,
        app: app,
    });
    button.setAttribute("style", formattedStyles);
    button.setAttribute("tabindex", "-1");
    styleFormatter.createLabelAndIcon({ button: button, theme: theme, style: style, isSense: isSense });
    button.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
        var actionCallList_1, actions, navigationObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isClickable) return [3 /*break*/, 4];
                    actionCallList_1 = [];
                    actions = layout.actions;
                    actions.forEach(function (action) {
                        var actionObj = allActions.find(function (act) { return act.value === action.actionType; });
                        actionObj &&
                            actionCallList_1.push(actionObj.getActionCall(__assign(__assign({ app: app, qStateName: qStateName }, action), { senseNavigation: senseNavigation, multiUserAutomation: multiUserAutomation, translator: translator })));
                    });
                    button.setAttribute("disabled", true);
                    return [4 /*yield*/, runActions(actionCallList_1)];
                case 1:
                    _a.sent();
                    if (!(senseNavigation && !senseNavigation.getCurrentStoryId())) return [3 /*break*/, 3];
                    navigationObject = navigation && navigationActions.find(function (nav) { return nav.value === navigation.action; });
                    if (!(senseNavigation && navigationObject && typeof navigationObject.navigationCall === "function")) return [3 /*break*/, 3];
                    return [4 /*yield*/, navigationObject.navigationCall(__assign(__assign({ app: app, senseNavigation: senseNavigation }, navigation), { element: element }))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    button.removeAttribute("disabled");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var scale = function () {
        if (isClickable) {
            var offsetWidth = button.offsetWidth, offsetHeight = button.offsetHeight;
            button.style.transform =
                offsetHeight > offsetWidth
                    ? "scale(".concat(0.98, ", ").concat(1 - (offsetWidth / offsetHeight) * 0.02, ")")
                    : "scale(".concat(1 - (offsetHeight / offsetWidth) * 0.02, ", ").concat(0.98, ")");
        }
    };
    var resetScale = function () {
        var transform = button.style.transform;
        if (isClickable && transform !== "" && transform !== "scale(1)") {
            button.style.transform = "scale(1)";
        }
    };
    button.onmousedown = function (event) {
        if (event.button === 0) {
            scale();
        }
    };
    button.onmouseup = resetScale;
    button.onmouseleave = resetScale;
    button.ontouchstart = scale;
    button.ontouchend = resetScale;
    button.ontouchcancel = resetScale;
    return function () {
        button.onclick = undefined;
        button.onmousedown = undefined;
        button.onmouseup = undefined;
        button.onmouseleave = undefined;
        button.ontouchstart = undefined;
        button.ontouchend = undefined;
        button.ontouchcancel = undefined;
    };
};
