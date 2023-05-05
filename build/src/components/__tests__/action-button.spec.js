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
import defaultValues from "../../__tests__/default-button-props";
import { renderButton, runActions } from "../action-button";
var actionList;
var button;
var defaults;
describe("action button", function () {
    describe("renderButton", function () {
        beforeEach(function () {
            defaults = defaultValues();
            button = {
                setAttribute: jest.fn(),
                removeAttribute: jest.fn(),
                firstElementChild: { setAttribute: function () { }, text: {} },
                appendChild: function () { },
            };
            defaults.element.firstElementChild = button;
            defaults.layout.actions = [{ actionType: "applyBookmark" }, { actionType: "clearAll" }];
            defaults.layout.navigation = { action: "firstSheet", sheet: "mySheet" };
            defaults.app.clearAll = jest.fn();
            defaults.senseNavigation = {
                goToSheet: jest.fn(),
                getCurrentStoryId: function () { return false; },
            };
        });
        it("should render action button", function () {
            renderButton(defaults);
            expect(defaults.element.firstElementChild).toBeInstanceOf(Object);
            expect(button.setAttribute).toHaveBeenCalled();
        });
        it("should disable action button on click and enable again", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.setAttribute).toHaveBeenCalledWith("disabled", true);
                        expect(button.removeAttribute).toHaveBeenCalledWith("disabled");
                        expect(defaults.senseNavigation.goToSheet).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should not act on click when 'active' constraint is enabled", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaults.constraints = { active: true };
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.setAttribute).not.toHaveBeenCalledWith("disabled", true);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should not act on click when button is disabled by condition", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaults.layout.useEnabledCondition = true;
                        defaults.layout.enabledCondition = 0;
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.setAttribute).not.toHaveBeenCalledWith("disabled", true);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should run without navigation", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaults.layout.navigation = {};
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.removeAttribute).toHaveBeenCalledWith("disabled");
                        expect(defaults.senseNavigation.goToSheet).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should not run navigation when in story mode", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaults.senseNavigation.getCurrentStoryId = function () { return "storyIde"; };
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.removeAttribute).toHaveBeenCalledWith("disabled");
                        expect(defaults.senseNavigation.goToSheet).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call scale and resetScale on mousedown/up", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderButton(defaults);
                defaults.element.firstElementChild.offsetHeight = 100;
                defaults.element.firstElementChild.offsetWidth = 200;
                defaults.element.firstElementChild.style = { transform: "" };
                defaults.element.firstElementChild.onmousedown({ button: 0 });
                expect(defaults.element.firstElementChild.style.transform).toEqual("scale(0.99, 0.98)");
                defaults.element.firstElementChild.onmouseup();
                expect(defaults.element.firstElementChild.style.transform).toEqual("scale(1)");
                return [2 /*return*/];
            });
        }); });
        it("should not call scale with secondary button", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderButton(defaults);
                defaults.element.firstElementChild.offsetHeight = 100;
                defaults.element.firstElementChild.offsetWidth = 200;
                defaults.element.firstElementChild.style = { transform: "" };
                defaults.element.firstElementChild.onmousedown({ button: 2 });
                expect(defaults.element.firstElementChild.style.transform).toEqual("");
                return [2 /*return*/];
            });
        }); });
        it("should call scale and resetScale on touchstart/stop", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderButton(defaults);
                defaults.element.firstElementChild.offsetHeight = 200;
                defaults.element.firstElementChild.offsetWidth = 100;
                defaults.element.firstElementChild.style = { transform: "" };
                defaults.element.firstElementChild.ontouchstart();
                expect(defaults.element.firstElementChild.style.transform).toEqual("scale(0.98, 0.99)");
                defaults.element.firstElementChild.ontouchend();
                expect(defaults.element.firstElementChild.style.transform).toEqual("scale(1)");
                return [2 /*return*/];
            });
        }); });
        it("should not scale nor reset when disabled", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                defaults.layout.useEnabledCondition = true;
                defaults.layout.enabledCondition = 0;
                renderButton(defaults);
                defaults.element.firstElementChild.style = { transform: "" };
                defaults.element.firstElementChild.ontouchstart();
                expect(defaults.element.firstElementChild.style.transform).toEqual("");
                defaults.element.firstElementChild.ontouchend();
                expect(defaults.element.firstElementChild.style.transform).toEqual("");
                return [2 /*return*/];
            });
        }); });
        it("should not scale nor reset scale when in edit mode", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                defaults.constraints = {
                    passive: true,
                    active: true,
                };
                renderButton(defaults);
                defaults.element.firstElementChild.style = { transform: "" };
                defaults.element.firstElementChild.ontouchstart();
                expect(defaults.element.firstElementChild.style.transform).toEqual("");
                defaults.element.firstElementChild.ontouchend();
                expect(defaults.element.firstElementChild.style.transform).toEqual("");
                return [2 /*return*/];
            });
        }); });
        it("should not reset scale when already scaled to 1", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderButton(defaults);
                defaults.element.firstElementChild.style = { transform: "scale(1)" };
                defaults.element.firstElementChild.onmouseleave();
                expect(defaults.element.firstElementChild.style.transform).toEqual("scale(1)");
                return [2 /*return*/];
            });
        }); });
        it("should not reset scale when already scale is not set yet", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                renderButton(defaults);
                defaults.element.firstElementChild.style = { transform: "" };
                defaults.element.firstElementChild.ontouchcancel();
                expect(defaults.element.firstElementChild.style.transform).toEqual("");
                return [2 /*return*/];
            });
        }); });
        it("should act on click when `On-demand app` navigation and odag link are selected", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaults.layout.navigation = { action: "odagLink" };
                        defaults.layout.odagLink = "odagLinkId";
                        defaults.layout.actions = [{ actionType: "refreshDynamicViews" }];
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.setAttribute).toHaveBeenCalledWith("disabled", true);
                        expect(button.removeAttribute).toHaveBeenCalledWith("disabled");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should navigate to Odag Popup", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        defaults.layout.navigation = {
                            action: "odagLink",
                            odagLink: "odagLinkId",
                        };
                        // defaults.layout.odagLink = "odagLinkId";
                        defaults.senseNavigation = {
                            openOdagPopup: jest.fn(),
                            getCurrentStoryId: function () { return false; },
                        };
                        renderButton(defaults);
                        return [4 /*yield*/, defaults.element.firstElementChild.onclick()];
                    case 1:
                        _a.sent();
                        expect(button.setAttribute).toHaveBeenCalledWith("disabled", true);
                        expect(button.removeAttribute).toHaveBeenCalledWith("disabled");
                        expect(defaults.senseNavigation.openOdagPopup).toHaveBeenCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("runActions", function () {
        beforeEach(function () {
            actionList = [jest.fn(), jest.fn()];
        });
        it("should call all functions in array", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, runActions(actionList)];
                    case 1:
                        _a.sent();
                        expect(actionList[0]).toHaveBeenCalledTimes(1);
                        expect(actionList[1]).toHaveBeenCalledTimes(1);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
