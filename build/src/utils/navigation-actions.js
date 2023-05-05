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
import { encodeUrl, getCurrentProtocol, removeProtocolHttp, urlHasEmailProtocol } from "./url-encoder";
import { inIframe } from "./url-utils";
import evaluateCondition from "./util";
export var getOrderedSheets = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    var sheets;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app.getSheetList()];
            case 1:
                sheets = _a.sent();
                return [2 /*return*/, sheets.sort(function (current, next) { return current.qData.rank - next.qData.rank; })];
        }
    });
}); };
export var getOrderedVisibleSheet = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    var sheets, visibleSheets;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, app.getSheetList()];
            case 1:
                sheets = _a.sent();
                visibleSheets = sheets.filter(function (sheet) { return evaluateCondition(sheet.qData.showCondition); });
                return [2 /*return*/, visibleSheets.sort(function (current, next) { return current.qData.rank - next.qData.rank; })];
        }
    });
}); };
var navigationActions = [
    {
        translation: "Object.ActionButton.NoNavigation",
        value: "none",
    },
    {
        translation: "Object.ActionButton.GoToNextSheet",
        value: "nextSheet",
        navigationCall: function (_a) {
            var senseNavigation = _a.senseNavigation;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, senseNavigation.nextSheet()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: [],
    },
    {
        translation: "Object.ActionButton.GoToPreviousSheet",
        value: "prevSheet",
        navigationCall: function (_a) {
            var senseNavigation = _a.senseNavigation;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, senseNavigation.prevSheet()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: [],
    },
    {
        translation: "Object.ActionButton.GoToLastSheet",
        value: "lastSheet",
        navigationCall: function (_a) {
            var app = _a.app, senseNavigation = _a.senseNavigation;
            return __awaiter(void 0, void 0, void 0, function () {
                var sheets;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getOrderedVisibleSheet(app)];
                        case 1:
                            sheets = _b.sent();
                            return [4 /*yield*/, senseNavigation.goToSheet(sheets[sheets.length - 1].qInfo.qId)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: [],
    },
    {
        translation: "Object.ActionButton.GoToFirstSheet",
        value: "firstSheet",
        navigationCall: function (_a) {
            var app = _a.app, senseNavigation = _a.senseNavigation;
            return __awaiter(void 0, void 0, void 0, function () {
                var sheets;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, getOrderedVisibleSheet(app)];
                        case 1:
                            sheets = _b.sent();
                            return [4 /*yield*/, senseNavigation.goToSheet(sheets[0].qInfo.qId)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: [],
    },
    {
        translation: "Object.ActionButton.GoToASheet",
        value: "goToSheet",
        navigationCall: function (_a) {
            var senseNavigation = _a.senseNavigation, sheet = _a.sheet;
            return __awaiter(void 0, void 0, void 0, function () {
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = sheet;
                            if (!_b) return [3 /*break*/, 2];
                            return [4 /*yield*/, senseNavigation.goToSheet(sheet)];
                        case 1:
                            _b = (_c.sent());
                            _c.label = 2;
                        case 2:
                            _b;
                            return [2 /*return*/];
                    }
                });
            });
        },
        // TODO replace by searchable dropdown
        requiredInput: ["sheet"],
    },
    {
        translation: "Object.ActionButton.GoToSheetById",
        value: "goToSheetById",
        navigationCall: function (_a) {
            var senseNavigation = _a.senseNavigation, sheet = _a.sheet;
            return __awaiter(void 0, void 0, void 0, function () {
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = sheet;
                            if (!_b) return [3 /*break*/, 2];
                            return [4 /*yield*/, senseNavigation.goToSheet(sheet)];
                        case 1:
                            _b = (_c.sent());
                            _c.label = 2;
                        case 2:
                            _b;
                            return [2 /*return*/];
                    }
                });
            });
        },
        // TODO replace by searchable dropdown
        requiredInput: ["sheetId"],
    },
    {
        translation: "Object.ActionButton.GoToStory",
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("storytelling");
        },
        value: "goToStory",
        navigationCall: function (_a) {
            var senseNavigation = _a.senseNavigation, story = _a.story;
            return __awaiter(void 0, void 0, void 0, function () {
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = story;
                            if (!_b) return [3 /*break*/, 2];
                            return [4 /*yield*/, senseNavigation.goToStory(story)];
                        case 1:
                            _b = (_c.sent());
                            _c.label = 2;
                        case 2:
                            _b;
                            return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: ["story"],
    },
    {
        translation: "Object.ActionButton.OpenWebsiteEmail",
        value: "openWebsite",
        navigationCall: function (_a) {
            var websiteUrl = _a.websiteUrl, sameWindow = _a.sameWindow;
            return __awaiter(void 0, void 0, void 0, function () {
                var protocol, url, isEmail, target, encoded;
                return __generator(this, function (_b) {
                    try {
                        if (websiteUrl) {
                            protocol = getCurrentProtocol(websiteUrl);
                            url = removeProtocolHttp(websiteUrl);
                            isEmail = urlHasEmailProtocol(url);
                            target = "";
                            if (isEmail) {
                                window.open(url, target);
                            }
                            if (sameWindow) {
                                target = inIframe() ? "_parent" : "_self";
                                window.open("".concat(protocol).concat(url), target);
                            }
                            if (!isEmail && !sameWindow) {
                                encoded = encodeUrl(url);
                                window.open("".concat(protocol).concat(encoded), target);
                            }
                        }
                    }
                    catch (error) {
                        // no-op
                    }
                    return [2 /*return*/];
                });
            });
        },
        requiredInput: ["websiteUrl", "sameWindow"],
    },
    {
        translation: "Object.ActionButton.DocumentChain",
        value: "openChainedApp",
        hide: function (_a) {
            var isEnabled = _a.isEnabled, isUnsupportedFeature = _a.isUnsupportedFeature;
            return !(isEnabled === null || isEnabled === void 0 ? void 0 : isEnabled("ACTION_BUTTON_DOCUMENT_CHAINING")) || (isUnsupportedFeature === null || isUnsupportedFeature === void 0 ? void 0 : isUnsupportedFeature("bookmarks"));
        },
        navigationCall: function (_a) {
            var app = _a.app, sameWindow = _a.sameWindow, appId = _a.appId, sheet = _a.sheet;
            return __awaiter(void 0, void 0, void 0, function () {
                var tempBookmark, _b, target, url;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = app.storeTempSelectionState;
                            if (!_b) return [3 /*break*/, 2];
                            return [4 /*yield*/, app.storeTempSelectionState()];
                        case 1:
                            _b = (_c.sent());
                            _c.label = 2;
                        case 2:
                            tempBookmark = _b;
                            target = "";
                            if (sameWindow) {
                                target = inIframe() ? "_parent" : "_self";
                            }
                            url = "../sense/app/".concat(encodeURIComponent(appId), "/sheet/").concat(encodeURIComponent(sheet), "/tempselectionstate/").concat(encodeURIComponent(tempBookmark));
                            window.open(url, target);
                            return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: ["sameWindow", "appId", "sheetId"],
    },
    {
        translation: "Object.ActionButton.SelectOdagApp",
        value: "odagLink",
        navigationCall: function (_a) {
            var app = _a.app, senseNavigation = _a.senseNavigation, odagLink = _a.odagLink, element = _a.element;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(typeof senseNavigation.openOdagPopup === "function" && odagLink && odagLink.length > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, senseNavigation.openOdagPopup(app, odagLink, element)];
                        case 1:
                            _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        },
        requiredInput: ["odagLink"],
    },
];
export var getNavigationsList = function (shouldHide) { return navigationActions.filter(function (n) { var _a; return !((_a = n.hide) === null || _a === void 0 ? void 0 : _a.call(n, shouldHide)); }); };
export var checkShowNavigation = function (data, field) {
    var nav = navigationActions.find(function (navigation) { return data.navigation.action === navigation.value; });
    return nav && nav.requiredInput && nav.requiredInput.indexOf(field) !== -1;
};
export default navigationActions;
