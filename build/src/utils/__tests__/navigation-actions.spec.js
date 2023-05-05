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
import navigationActions, { checkShowNavigation, getNavigationsList, getOrderedSheets, getOrderedVisibleSheet, } from "../navigation-actions";
describe("navigation actions", function () {
    var senseNavigation;
    var sheet = "sheetIdHere";
    var story = "storyIdHere";
    var websiteUrl = "https://myUrlHere";
    var mailtoUrl = "mailto:me@example";
    var appId = "selectedApp";
    var app = defaultValues().app;
    describe("all navigation actions", function () {
        beforeEach(function () {
            senseNavigation = {
                nextSheet: jest.fn(),
                prevSheet: jest.fn(),
                goToSheet: jest.fn(),
                goToStory: jest.fn(),
            };
            global.open = jest.fn();
        });
        afterEach(function () {
            jest.resetAllMocks();
        });
        it("should not have navigation call for None", function () {
            var navigationObject = navigationActions.find(function (navigation) { return navigation.value === "none"; });
            expect(navigationObject).not.toHaveProperty("navigationCall");
        });
        it("should call nextSheet", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "nextSheet"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.nextSheet).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call prevSheet", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "prevSheet"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.prevSheet).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call goToSheet", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "goToSheet"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation, sheet: sheet })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.goToSheet).toHaveBeenCalledWith(sheet);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call goToSheet when no sheet", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "goToSheet"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.goToSheet).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call goToSheetById", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "goToSheetById"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation, sheet: sheet })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.goToSheet).toHaveBeenCalledWith(sheet);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call goToSheetById when no sheet", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "goToSheetById"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.goToSheet).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call goToStory", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "goToStory"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation, story: story })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.goToStory).toHaveBeenCalledWith(story);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call goToStory when no sheet", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "goToStory"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ senseNavigation: senseNavigation })];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.goToStory).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call openWebsite", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({})];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite with defaults", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ websiteUrl: websiteUrl, sameWindow: false })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith(websiteUrl, "");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite and add http://", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ websiteUrl: "myWebsite", sameWindow: false })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith("http://myWebsite", "");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite and expect encoded result with https:// protocol", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({
                                websiteUrl: "https://mozilla.org/?x=äáöå&myOtherParam=2´5%€",
                                sameWindow: false,
                            })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith("https://mozilla.org/?x=%C3%A4%C3%A1%C3%B6%C3%A5&myOtherParam=2%C2%B45%25%E2%82%AC", "");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite and expect encoded result with http:// protocol", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({
                                websiteUrl: "http://mozilla.org/?x=äáöå&myOtherParam=2´5%€",
                                sameWindow: false,
                            })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith("http://mozilla.org/?x=%C3%A4%C3%A1%C3%B6%C3%A5&myOtherParam=2%C2%B45%25%E2%82%AC", "");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite and expect encoded result without http:// protocol", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({
                                websiteUrl: "mozilla.org/?x=äáöå&myOtherParam=2´5%€",
                                sameWindow: false,
                            })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith("http://mozilla.org/?x=%C3%A4%C3%A1%C3%B6%C3%A5&myOtherParam=2%C2%B45%25%E2%82%AC", "");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite in same window", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ websiteUrl: websiteUrl, sameWindow: true })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith(websiteUrl, "_self");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call openWebsite in parent", function () { return __awaiter(void 0, void 0, void 0, function () {
            var top, navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        top = window.top;
                        delete window.top;
                        window.top = {};
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ websiteUrl: websiteUrl, sameWindow: true })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith(websiteUrl, "_parent");
                        window.top = top;
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call mailto", function () { return __awaiter(void 0, void 0, void 0, function () {
            var navigationObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openWebsite"; });
                        return [4 /*yield*/, navigationObject.navigationCall({ websiteUrl: mailtoUrl, sameWindow: false })];
                    case 1:
                        _a.sent();
                        expect(global.open).toHaveBeenCalledWith(mailtoUrl, "");
                        return [2 /*return*/];
                }
            });
        }); });
        describe("sheets with show conditions", function () {
            it("should call lastSheet feature flag is on", function () { return __awaiter(void 0, void 0, void 0, function () {
                var navigationObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            navigationObject = navigationActions.find(function (navigation) { return navigation.value === "lastSheet"; });
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, senseNavigation: senseNavigation })];
                        case 1:
                            _a.sent();
                            expect(senseNavigation.goToSheet).toHaveBeenCalledWith("id7");
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should call firstSheet feature flag is on", function () { return __awaiter(void 0, void 0, void 0, function () {
                var navigationObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            navigationObject = navigationActions.find(function (navigation) { return navigation.value === "firstSheet"; });
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, senseNavigation: senseNavigation })];
                        case 1:
                            _a.sent();
                            expect(senseNavigation.goToSheet).toHaveBeenCalledWith("id3");
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe("Document chaining", function () {
            it("should call storeTempSelectionState and open url", function () { return __awaiter(void 0, void 0, void 0, function () {
                var navigationObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openChainedApp"; });
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, sameWindow: false, appId: appId, sheet: sheet })];
                        case 1:
                            _a.sent();
                            expect(global.open).toHaveBeenCalledWith("../sense/app/".concat(appId, "/sheet/").concat(sheet, "/tempselectionstate/tempBookmarkId"), "");
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should call storeTempSelectionState and open url in same window", function () { return __awaiter(void 0, void 0, void 0, function () {
                var navigationObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openChainedApp"; });
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, sameWindow: true, appId: appId, sheet: sheet })];
                        case 1:
                            _a.sent();
                            expect(global.open).toHaveBeenCalledWith("../sense/app/".concat(appId, "/sheet/").concat(sheet, "/tempselectionstate/tempBookmarkId"), "_self");
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should call storeTempSelectionState and open url in parent window", function () { return __awaiter(void 0, void 0, void 0, function () {
                var top, navigationObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            top = window.top;
                            delete window.top;
                            window.top = {};
                            navigationObject = navigationActions.find(function (navigation) { return navigation.value === "openChainedApp"; });
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, sameWindow: true, appId: appId, sheet: sheet })];
                        case 1:
                            _a.sent();
                            expect(global.open).toHaveBeenCalledWith("../sense/app/".concat(appId, "/sheet/").concat(sheet, "/tempselectionstate/tempBookmarkId"), "_parent");
                            window.top = top;
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe("odag navigation popup", function () {
            var navigationObject = navigationActions.find(function (navigation) { return navigation.value === "odagLink"; });
            it("should not call openOdagPopup when openOdagPopup is undefined", function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, navigationObject.navigationCall({ app: app, senseNavigation: senseNavigation })];
                        case 1:
                            _a.sent();
                            expect(senseNavigation.openOdagPopup).toBeUndefined();
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should not call openOdagPopup when odagLink is undefined", function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            senseNavigation.openOdagPopup = jest.fn();
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, senseNavigation: senseNavigation })];
                        case 1:
                            _a.sent();
                            expect(senseNavigation.openOdagPopup).toHaveBeenCalledTimes(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should call openOdagPopup when openOdagPopup & odagLink are defined", function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            senseNavigation.openOdagPopup = jest.fn();
                            return [4 /*yield*/, navigationObject.navigationCall({ app: app, senseNavigation: senseNavigation, odagLink: "odagLinkId" })];
                        case 1:
                            _a.sent();
                            expect(senseNavigation.openOdagPopup).toHaveBeenCalledTimes(1);
                            expect(senseNavigation.openOdagPopup).toHaveBeenCalledWith(app, "odagLinkId", undefined);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
    describe("checkShowNavigation", function () {
        var data;
        beforeEach(function () {
            data = {
                navigation: {
                    action: "goToSheet",
                },
            };
        });
        it("should return true when should be shown", function () {
            var result = checkShowNavigation(data, "sheet");
            expect(result).toBe(true);
        });
        it("should return undefined when no action found", function () {
            data.navigation.action = "notAnAction";
            var result = checkShowNavigation(data, "sheet");
            expect(result).toBeUndefined();
        });
        it("should return false when field not in required input", function () {
            var result = checkShowNavigation(data, "websiteUrl");
            expect(result).toBe(false);
        });
    });
    describe("getOrderedSheets", function () {
        var sheets = [
            { qData: { rank: 15 }, qInfo: { qId: "id15" } },
            { qData: { rank: 1.5 }, qInfo: { qId: "id1.5" } },
            { qData: { rank: 1 }, qInfo: { qId: "id1" } },
            { qData: { rank: 7 }, qInfo: { qId: "id7" } },
        ];
        var fakeApp = { getSheetList: function () { return sheets; } };
        it("should return sheets in correct order", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getOrderedSheets(fakeApp)];
                    case 1:
                        result = _a.sent();
                        expect(result).toHaveLength(4);
                        expect(result[0].qInfo.qId).toEqual("id1");
                        expect(result[1].qInfo.qId).toEqual("id1.5");
                        expect(result[2].qInfo.qId).toEqual("id7");
                        expect(result[3].qInfo.qId).toEqual("id15");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("getOrderedVisibleSheet", function () {
        var sheets = [
            { qData: { rank: 15, showCondition: "False" }, qInfo: { qId: "id15" } },
            { qData: { rank: 1.2, showCondition: "True" }, qInfo: { qId: "id1.2" } },
            { qData: { rank: 1.5, showCondition: "1" }, qInfo: { qId: "id1.5" } },
            { qData: { rank: 3, showCondition: "0" }, qInfo: { qId: "id3" } },
            { qData: { rank: 1, showCondition: "" }, qInfo: { qId: "id1" } },
            { qData: { rank: 7, showCondition: "0" }, qInfo: { qId: "id7" } },
        ];
        var fakeApp = { getSheetList: function () { return sheets; } };
        it("should return visible sheets in correct order", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getOrderedVisibleSheet(fakeApp)];
                    case 1:
                        result = _a.sent();
                        expect(result).toHaveLength(3);
                        expect(result[0].qInfo.qId).toEqual("id1");
                        expect(result[1].qInfo.qId).toEqual("id1.2");
                        expect(result[2].qInfo.qId).toEqual("id1.5");
                        expect(result[3]).toEqual(undefined);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("getNavigationsList", function () {
        it("should return all but not FF disabled navigations", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(false),
                isFeatureBlacklisted: jest.fn().mockReturnValue(false),
                isEnabled: jest.fn().mockReturnValue(false),
            };
            var result = getNavigationsList(shouldHide);
            expect(result.length).toBe(10);
        });
        it("should return all but not unsupported feature navigations", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(true),
                isFeatureBlacklisted: jest.fn().mockReturnValue(false),
                isEnabled: jest.fn().mockReturnValue(true),
            };
            var result = getNavigationsList(shouldHide);
            expect(result.length).toBe(10);
        });
        it("should return all but not feature blacklisted navigations", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(false),
                isFeatureBlacklisted: jest.fn().mockReturnValue(true),
                isEnabled: jest.fn().mockReturnValue(true),
            };
            var result = getNavigationsList(shouldHide);
            expect(result.length).toBe(10);
        });
        it("should return all", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(false),
                isFeatureBlacklisted: jest.fn().mockReturnValue(false),
                isEnabled: jest.fn().mockReturnValue(true),
            };
            var result = getNavigationsList(shouldHide);
            expect(result.length).toBe(11);
        });
    });
});
