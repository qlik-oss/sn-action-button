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
import ext from "../ext";
import objectProperties from "../object-properties";
describe("ext", function () {
    var translator = {
        get: function (someString) { return someString; },
    };
    var data;
    var shouldHide = jest.fn();
    shouldHide.isEnabled = jest.fn(function (feature) { return feature === "SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER" && true; });
    var senseNavigation = {
        getOdagLinks: function () {
            return Promise.resolve([
                {
                    properties: {
                        data: { id: "TestOdagLink", name: "TestOdagLink" },
                        type: "odaglink",
                    },
                },
            ]);
        },
    };
    var props = ext({ translator: translator, shouldHide: shouldHide, senseNavigation: senseNavigation });
    var actionItems = props.definition.items.actions.items.actions.items;
    var navigationItems = props.definition.items.actions.items.navigation.items;
    var _a = props.definition.items.settings.items, font = _a.font, background = _a.background, border = _a.border, icon = _a.icon;
    it("should return properties object", function () {
        expect(props).toBeInstanceOf(Object);
    });
    describe("itemTitleRef", function () {
        var itemTitleRef = props.definition.items.actions.items.actions.itemTitleRef;
        beforeEach(function () {
            data = {
                actionType: "",
                actionLabel: "",
            };
        });
        it("Should return action label from dropdown", function () {
            data = { actionType: "applyBookmark" };
            var itemTitle = itemTitleRef(data, 0);
            expect(itemTitle).toEqual("Object.ActionButton.ApplyBookmark");
        });
        it("Should return action label from text field", function () {
            data = { actionLabel: "actionLabel" };
            var itemTitle = itemTitleRef(data, 0);
            expect(itemTitle).toEqual("actionLabel");
        });
        it("Should return default action label when empty action", function () {
            var itemTitle = itemTitleRef(data, 0);
            expect(itemTitle).toEqual("Object.ActionButton.NewAction");
        });
        it("Should return invalid action label when action is not found in actions list", function () {
            data = { actionType: "invalidAction" };
            var itemTitle = itemTitleRef(data, 0);
            expect(itemTitle).toEqual("Object.ActionButton.InvalidAction");
        });
    });
    describe("options", function () {
        var options;
        var bookmarks = [
            {
                qData: {
                    title: "someBookmark",
                },
                qInfo: {
                    qId: "someId",
                },
            },
        ];
        var fields = [
            {
                qName: "someField",
            },
        ];
        var variables = [
            {
                qName: "someVariable",
                qIsReserved: false,
            },
            {
                qName: "someSystemVariable",
                qIsReserved: true,
            },
        ];
        var sheets = [
            {
                qMeta: {
                    title: "myFirstSheet",
                },
                qInfo: {
                    qId: "firstSheetId",
                },
                qData: {
                    showCondition: "0",
                },
            },
            {
                qMeta: {
                    title: "mySecondSheet",
                },
                qInfo: {
                    qId: "secondSheetId",
                },
                qData: {
                    showCondition: "1",
                },
            },
        ];
        var stories = [
            {
                qMeta: {
                    title: "myFirstStory",
                },
                qInfo: {
                    qId: "firstStoryId",
                },
            },
            {
                qMeta: {
                    title: "mySecondStory",
                },
                qInfo: {
                    qId: "secondStoryId",
                },
            },
        ];
        var handler = {
            app: {
                getBookmarkList: function () { return bookmarks; },
                getFieldList: function () { return fields; },
                getVariableList: function () { return variables; },
                getSheetList: function () { return sheets; },
                getStoryList: function () { return stories; },
            },
        };
        afterEach(function () {
            jest.resetAllMocks();
        });
        it("Should return an array with a bookmark", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionItems.bookmark.options(null, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(1);
                        expect(options[0]).toBeInstanceOf(Object);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array with a field", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionItems.field.options(null, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(1);
                        expect(options[0]).toBeInstanceOf(Object);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array with a single non-system variable", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionItems.variable.options({ showSystemVariables: false }, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(1);
                        expect(options[0]).toBeInstanceOf(Object);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array with all variables", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, actionItems.variable.options({ showSystemVariables: true }, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array with all automations", function () { return __awaiter(void 0, void 0, void 0, function () {
            var automationId, automationName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        automationId = "automationId";
                        automationName = "fakeAutomationName";
                        global.fetch = jest.fn(function () {
                            return Promise.resolve({
                                json: function () { return ({ data: [{ id: automationId, name: automationName }] }); },
                            });
                        });
                        return [4 /*yield*/, actionItems.automationProps.items.automationId.options()];
                    case 1:
                        options = _a.sent();
                        expect(global.fetch).toHaveBeenCalled();
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/automations?limit=100");
                        expect(options).toHaveLength(1);
                        expect(options[0].value).toEqual(automationId);
                        expect(options[0].label).toEqual(automationName);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array of odag app links", function () { return __awaiter(void 0, void 0, void 0, function () {
            var odagLinks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        odagLinks = [
                            {
                                label: "TestOdagLink",
                                value: "TestOdagLink",
                            },
                        ];
                        return [4 /*yield*/, navigationItems.odagLink.options(null, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(1);
                        expect(options).toStrictEqual(odagLinks);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array with all sheets", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigationItems.sheet.options(null, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an array with all stories", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigationItems.story.options(null, handler)];
                    case 1:
                        options = _a.sent();
                        expect(options).toHaveLength(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("show functions", function () {
        beforeEach(function () {
            data = JSON.parse(JSON.stringify(objectProperties));
            data.style.background.url = {
                qStaticContentUrlDef: {
                    qUrl: "myUrl",
                },
            };
        });
        it("should return false for all actionItems show functions", function () {
            var actionObject = { actionType: "forward" };
            var resultBookmark = actionItems.bookmark.show(actionObject);
            expect(resultBookmark).toBe(false);
            var resultField = actionItems.field.show(actionObject);
            expect(resultField).toBe(false);
            var resultVariable = actionItems.variable.show(actionObject);
            expect(resultVariable).toBe(false);
            var resultSystemVariable = actionItems.showSystemVariables.show(actionObject);
            expect(resultSystemVariable).toBe(false);
            var resultSoftLock = actionItems.softLock.show(actionObject);
            expect(resultSoftLock).toBe(false);
            var resultValue = actionItems.value.show(actionObject);
            expect(resultValue).toBe(false);
            var resultAutomation = actionItems.automationProps.show(actionObject);
            expect(resultAutomation).toBe(false);
        });
        it("should return true when bookmark needs to show", function () {
            var result = actionItems.bookmark.show({ actionType: "applyBookmark" });
            expect(result).toBe(true);
        });
        it("should return true when field needs to show clearAllButThis", function () {
            var result = actionItems.field.show({ actionType: "clearAllButThis" });
            expect(result).toBe(true);
        });
        it("should return true when field needs to show setVariable", function () {
            var result = actionItems.variable.show({ actionType: "setVariable" });
            expect(result).toBe(true);
        });
        it("should return true when showSystemVariables needs to show", function () {
            var result = actionItems.showSystemVariables.show({
                actionType: "setVariable",
            });
            expect(result).toBe(true);
        });
        it("should return true when softLock needs to show", function () {
            var result = actionItems.softLock.show({ actionType: "selectAll" });
            expect(result).toBe(true);
        });
        it("should return true when value needs to show", function () {
            var result = actionItems.value.show({ actionType: "selectValues" });
            expect(result).toBe(true);
        });
        it("should return true when automation props needs to show", function () {
            var result = actionItems.automationProps.show({
                actionType: "executeAutomation",
            });
            expect(result).toBe(true);
        });
        it("should return false for all navigationItems show functions", function () {
            var navigationObject = { navigation: { action: "nextSheet" } };
            var resultSheetId = navigationItems.sheetId.show(navigationObject);
            expect(resultSheetId).toBe(false);
            var resultSheet = navigationItems.sheet.show(navigationObject);
            expect(resultSheet).toBe(false);
            var resultStory = navigationItems.story.show(navigationObject);
            expect(resultStory).toBe(false);
            var resultWebsiteUrl = navigationItems.websiteUrl.show(navigationObject);
            expect(resultWebsiteUrl).toBe(false);
            var resultSameWindow = navigationItems.sameWindow.show(navigationObject);
            expect(resultSameWindow).toBe(false);
            var appId = navigationItems.appId.show(navigationObject);
            expect(appId).toBe(false);
        });
        it("should return true when sheetId needs to show", function () {
            var result = navigationItems.sheetId.show({
                navigation: { action: "goToSheetById" },
            });
            expect(result).toBe(true);
        });
        it("should return true when sheet needs to show", function () {
            var result = navigationItems.sheet.show({
                navigation: { action: "goToSheet" },
            });
            expect(result).toBe(true);
        });
        it("should return true when story needs to show", function () {
            var result = navigationItems.story.show({
                navigation: { action: "goToStory" },
            });
            expect(result).toBe(true);
        });
        it("should return true when websiteUrl needs to show", function () {
            var result = navigationItems.websiteUrl.show({
                navigation: { action: "openWebsite" },
            });
            expect(result).toBe(true);
        });
        it("should return true when sameWindow needs to show", function () {
            var result = navigationItems.sameWindow.show({
                navigation: { action: "openWebsite" },
            });
            expect(result).toBe(true);
        });
        it("should return true when appId needs to show", function () {
            var result = navigationItems.appId.show({
                navigation: { action: "openChainedApp" },
            });
            expect(result).toBe(true);
        });
        it("should return true when odagLink needs to show", function () {
            var result = navigationItems.odagLink.show({
                navigation: { action: "odagLink" },
            });
            expect(result).toBe(true);
        });
        it("should return true when enableCondition needs to show", function () {
            data.useEnabledCondition = true;
            var result = props.definition.items.enableCondition.items.condition.show(data);
            expect(result).toBe(true);
        });
        it("should return false when enableCondition should not show", function () {
            var result = props.definition.items.enableCondition.items.condition.show(data);
            expect(result).toBe(false);
        });
        // font
        it("should return false for expression and true for picker when font.useColorExpression is false", function () {
            var resultExpression = font.items.sizeAndColor.items.colorExpression.show(data);
            var resultPicker = font.items.sizeAndColor.items.colorPicker.show(data);
            expect(resultExpression).toBe(false);
            expect(resultPicker).toBe(true);
        });
        it("should return true for expression and false for picker when font.useColorExpression is true", function () {
            data.style.font.useColorExpression = true;
            var resultExpression = font.items.sizeAndColor.items.colorExpression.show(data);
            var resultPicker = font.items.sizeAndColor.items.colorPicker.show(data);
            expect(resultExpression).toBe(true);
            expect(resultPicker).toBe(false);
        });
        it("should return false for expression and true for picker when background.useColorExpression is false", function () {
            var resultExpression = background.items.backgroundColor.items.colorExpression.show(data);
            var resultPicker = background.items.backgroundColor.items.colorPicker.show(data);
            expect(resultExpression).toBe(false);
            expect(resultPicker).toBe(true);
        });
        // background
        it("should return true for expression and false for picker when background.useColorExpression is true", function () {
            data.style.background.useColorExpression = true;
            var resultExpression = background.items.backgroundColor.items.colorExpression.show(data);
            var resultPicker = background.items.backgroundColor.items.colorPicker.show(data);
            expect(resultExpression).toBe(true);
            expect(resultPicker).toBe(false);
        });
        it("should return true when background image is used", function () {
            data.style.background.useImage = true;
            var result = background.items.backgroundImage.items.backgroundUrl.show(data);
            expect(result).toBe(true);
        });
        it("should return false for backgroundSize when background image is not used", function () {
            var result = background.items.backgroundImage.items.backgroundUrl.show(data);
            expect(result).toBe(false);
        });
        it("should return true when backgroundSize is used", function () {
            data.style.background.useImage = true;
            var result = background.items.backgroundImage.items.backgroundSize.show(data);
            expect(result).toBe(true);
        });
        it("should return false for backgroundSize when useImage is false", function () {
            var result = background.items.backgroundImage.items.backgroundSize.show(data);
            expect(result).toBe(false);
        });
        it("should return false for backgroundSize when no qUrl", function () {
            data.style.background.url.qStaticContentUrlDef = undefined;
            var result = background.items.backgroundImage.items.backgroundSize.show(data);
            expect(result).toBe(false);
        });
        it("should return true for backgroundPosition", function () {
            data.style.background.useImage = true;
            var result = background.items.backgroundImage.items.backgroundPosition.show(data);
            expect(result).toBe(true);
        });
        it("should return false for backgroundPosition when no background image is used", function () {
            var result = background.items.backgroundImage.items.backgroundPosition.show(data);
            expect(result).toBe(false);
        });
        it("should return false for backgroundPosition when no background image size is fill", function () {
            data.style.background.useImage = true;
            data.style.background.size = "fill";
            var result = background.items.backgroundImage.items.backgroundPosition.show(data);
            expect(result).toBe(false);
        });
        // border
        it("should show all border settings when border is used", function () {
            data.style.border.useBorder = true;
            var resultRadius = border.items.borderSettings.items.borderRadius.show(data);
            var resultWidth = border.items.borderSettings.items.borderWidth.show(data);
            var resultDropdown = border.items.borderSettings.items.colorDropdown.show(data);
            expect(resultRadius).toBe(true);
            expect(resultWidth).toBe(true);
            expect(resultDropdown).toBe(true);
        });
        it("should show no border settings when border is not used", function () {
            var resultRadius = border.items.borderSettings.items.borderRadius.show(data);
            var resultWidth = border.items.borderSettings.items.borderWidth.show(data);
            var resultDropdown = border.items.borderSettings.items.colorDropdown.show(data);
            expect(resultRadius).toBe(false);
            expect(resultWidth).toBe(false);
            expect(resultDropdown).toBe(false);
        });
        it("should show borderColor when no expression is used", function () {
            data.style.border.useBorder = true;
            var borderColor = border.items.borderSettings.items.colorPicker.show(data);
            var borderColorExpression = border.items.borderSettings.items.colorExpression.show(data);
            expect(borderColor).toBe(true);
            expect(borderColorExpression).toBe(false);
        });
        it("should show borderColorExpression when expression is used", function () {
            data.style.border.useBorder = true;
            data.style.border.useColorExpression = true;
            var borderColor = border.items.borderSettings.items.colorPicker.show(data);
            var borderColorExpression = border.items.borderSettings.items.colorExpression.show(data);
            expect(borderColor).toBe(false);
            expect(borderColorExpression).toBe(true);
        });
        // icon
        it("should return true for iconType", function () {
            data.style.icon.useIcon = true;
            var resultType = icon.items.iconSettings.items.iconType.show(data);
            var resultPosition = icon.items.iconSettings.items.iconPosition.show(data);
            expect(resultType).toBe(true);
            expect(resultPosition).toBe(true);
        });
        it("should return false for iconType", function () {
            var resultType = icon.items.iconSettings.items.iconType.show(data);
            var resultPosition = icon.items.iconSettings.items.iconPosition.show(data);
            expect(resultType).toBe(false);
            expect(resultPosition).toBe(false);
        });
    });
    describe("currentSize", function () {
        it("should return current size", function () {
            data = JSON.parse(JSON.stringify(objectProperties));
            var result = background.items.backgroundImage.items.backgroundPosition.currentSize(data);
            expect(result).toEqual("auto");
        });
    });
});
