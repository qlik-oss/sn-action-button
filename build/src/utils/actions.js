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
import { getAutomationData, getAutomationUrl, getPostOptions, getTemporaryBookmark, oldAutomationRun, pollAutomationAndGetMsg, showSnackbar, } from "./automation-helper";
export var getValueList = function (app, values, isDate) { return __awaiter(void 0, void 0, void 0, function () {
    var valuesArray, dateExpression_1, convertedDates;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                valuesArray = values.split(";");
                if (!isDate) return [3 /*break*/, 2];
                dateExpression_1 = "";
                valuesArray.forEach(function (date) {
                    dateExpression_1 += "Num('".concat(date, "')&';'&");
                });
                return [4 /*yield*/, app.evaluate(dateExpression_1.slice(0, -5))];
            case 1:
                convertedDates = _a.sent();
                valuesArray = convertedDates.split(";");
                _a.label = 2;
            case 2: return [2 /*return*/, valuesArray.map(function (value) {
                    return Number.isNaN(+value) ? { qText: value } : { qIsNumeric: true, qNumber: Number(value) };
                })];
        }
    });
}); };
var actions = [
    {
        value: "applyBookmark",
        translation: "Object.ActionButton.ApplyBookmark",
        group: "bookmark",
        hide: function (_a) {
            var isUnsupportedFeature = _a.isUnsupportedFeature;
            return isUnsupportedFeature === null || isUnsupportedFeature === void 0 ? void 0 : isUnsupportedFeature("bookmarks");
        },
        getActionCall: function (_a) {
            var app = _a.app, bookmark = _a.bookmark;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var bookMarks, findBm, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, app.getBookmarkList()];
                        case 1:
                            bookMarks = _b.sent();
                            findBm = bookMarks.find(function (bm) { return bm.qData.title === bookmark; });
                            _a = bookmark;
                            if (!_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.applyBookmark((findBm && findBm.qInfo && findBm.qInfo.qId) || bookmark)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            _a;
                            return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["bookmark"],
    },
    {
        value: "back",
        translation: "Object.ActionButton.MoveBackward",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, app.back()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: [],
    },
    {
        value: "forward",
        translation: "Object.ActionButton.MoveForward",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, app.forward()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: [],
    },
    {
        value: "clearAll",
        translation: "Object.ActionButton.ClearAll",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, app.clearAll(softLock)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["softLock"],
    },
    {
        value: "clearAllButThis",
        translation: "Object.ActionButton.ClearAllButThis",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.clearAllButThis(softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["field", "softLock"],
    },
    {
        value: "clearField",
        translation: "Object.ActionButton.ClearSelectionInField",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.clear()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["field"],
    },
    {
        value: "selectAll",
        translation: "Object.ActionButton.SelectAllInField",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.selectAll(softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["field", "softLock"],
    },
    {
        value: "selectValues",
        translation: "Object.ActionButton.SelectValuesInField",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, value = _a.value, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj, fieldInfo, valueList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(field && value)) return [3 /*break*/, 5];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, app.getFieldDescription(field)];
                        case 2:
                            fieldInfo = _a.sent();
                            return [4 /*yield*/, getValueList(app, value, fieldInfo.qTags.includes("$date"))];
                        case 3:
                            valueList = _a.sent();
                            return [4 /*yield*/, fieldObj.selectValues(valueList, false, softLock)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["field", "value", "softLock"],
    },
    {
        value: "selectMatchingValues",
        translation: "Object.ActionButton.SelectMatchingValues",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, value = _a.value, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(field && value)) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.select(value, false, softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["field", "value", "softLock"],
    },
    {
        value: "selectAlternative",
        translation: "Object.ActionButton.SelectAlternatives",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.selectAlternative(softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: ["field", "softLock"],
    },
    {
        value: "selectExcluded",
        translation: "Object.ActionButton.SelectExcluded",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.selectExcluded(softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: ["field", "softLock"],
    },
    {
        value: "selectPossible",
        translation: "Object.ActionButton.SelectPossibleValues",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.selectPossible(softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: ["field", "softLock"],
    },
    {
        value: "toggleSelect",
        translation: "Object.ActionButton.ToggleFieldSelection",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field, value = _a.value, softLock = _a.softLock;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(field && value)) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.toggleSelect(value, softLock)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["field", "value", "softLock"],
    },
    {
        value: "lockAll",
        translation: "Object.ActionButton.LockAllSelections",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, app.lockAll()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: [],
    },
    {
        value: "lockField",
        translation: "Object.ActionButton.LockField",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.lock()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: ["field"],
    },
    {
        value: "unlockAll",
        translation: "Object.ActionButton.UnlockAllSelections",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, app.unlockAll()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: [],
    },
    {
        value: "unlockField",
        translation: "Object.ActionButton.UnlockAField",
        group: "selection",
        getActionCall: function (_a) {
            var app = _a.app, qStateName = _a.qStateName, field = _a.field;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var fieldObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!field) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.getField(field, qStateName)];
                        case 1:
                            fieldObj = _a.sent();
                            return [4 /*yield*/, fieldObj.unlock()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("advancedSelectionOptions");
        },
        requiredInput: ["field"],
    },
    {
        value: "setVariable",
        translation: "Object.ActionButton.SetVariable",
        group: "variables",
        getActionCall: function (_a) {
            var app = _a.app, variable = _a.variable, value = _a.value;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var variableObj, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(variable && value)) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, app.getVariableByName(variable)];
                        case 2:
                            variableObj = _a.sent();
                            return [4 /*yield*/, variableObj.setStringValue(value)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["variable", "value"],
    },
    {
        value: "doReload",
        translation: "Object.ActionButton.DoReload",
        group: "reload",
        hide: function (_a) {
            var isFeatureBlacklisted = _a.isFeatureBlacklisted;
            return isFeatureBlacklisted === null || isFeatureBlacklisted === void 0 ? void 0 : isFeatureBlacklisted("reloadData");
        },
        getActionCall: function (_a) {
            var app = _a.app, partial = _a.partial;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var e;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, app.doReload(0, !!partial, false)];
                        case 1:
                            e = _a.sent();
                            if (!e) return [3 /*break*/, 3];
                            return [4 /*yield*/, app.doSave()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["partial"],
    },
    {
        /** *************************************
         * Execute Automation contacts internal urls to obtain automation
         * information and execute the automation selected in the property panel in
         * edit mode.
         *
         * ARGS
         * app - Reference to current app inherited from index.js
         * automation - the item id of the automation to contact the items api. Only needed if SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER is not enabled
         * automationId - the automation id of the automation. Needed if SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER is enabled
         * automationTriggered - If true, triggers the automation using the automations webhook URL, otherwise it will trigger the automation using the automations run API
         * automationExecutionToken - token which is needed if triggering the automation using the automations webhook URL
         * automationPostData - If true, creates a temporary bookmark and posts the resulting temporary bookmark id to the automation
         * multiUserAutomation - Determines if SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER is enabled or not
         * senseNavigation - Navigation API provided when in sense client
         */
        translation: "Object.ActionButton.ExecuteAutomation",
        value: "executeAutomation",
        getActionCall: function (_a) {
            var app = _a.app, automation = _a.automation, automationId = _a.automationId, automationTriggered = _a.automationTriggered, automationExecutionToken = _a.automationExecutionToken, automationPostData = _a.automationPostData, automationShowNotification = _a.automationShowNotification, automationNotificationDuration = _a.automationNotificationDuration, automationOpenLinkSameWindow = _a.automationOpenLinkSameWindow, multiUserAutomation = _a.multiUserAutomation, translator = _a.translator, senseNavigation = _a.senseNavigation;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                var automationUrl, bookmark, automationData, options, response, msg, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(multiUserAutomation && automationId.length)) return [3 /*break*/, 10];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 8, , 9]);
                            automationUrl = void 0;
                            if (automationId !== undefined && automationId.length > 1) {
                                automationUrl = getAutomationUrl(automationId, automationTriggered, automationExecutionToken);
                            }
                            else {
                                return [2 /*return*/];
                            }
                            bookmark = void 0;
                            if (!automationPostData) return [3 /*break*/, 3];
                            return [4 /*yield*/, getTemporaryBookmark(app)];
                        case 2:
                            bookmark = _b.sent();
                            _b.label = 3;
                        case 3: return [4 /*yield*/, getAutomationData({ app: app, automationId: automationId, bookmark: bookmark, senseNavigation: senseNavigation })];
                        case 4:
                            automationData = _b.sent();
                            return [4 /*yield*/, getPostOptions(automationTriggered, automationExecutionToken, automationData)];
                        case 5:
                            options = _b.sent();
                            return [4 /*yield*/, fetch(automationUrl, options)];
                        case 6:
                            response = _b.sent();
                            return [4 /*yield*/, pollAutomationAndGetMsg(automationId, automationTriggered, response, translator)];
                        case 7:
                            msg = _b.sent();
                            if (automationShowNotification) {
                                showSnackbar(msg, automationNotificationDuration, automationOpenLinkSameWindow);
                            }
                            return [3 /*break*/, 9];
                        case 8:
                            _a = _b.sent();
                            return [3 /*break*/, 9];
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (automation !== undefined) {
                                oldAutomationRun(automation, automationPostData, app);
                            }
                            _b.label = 11;
                        case 11: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: ["automation"],
        hide: function (_a) {
            var isEnabled = _a.isEnabled;
            return !(isEnabled === null || isEnabled === void 0 ? void 0 : isEnabled("ACTION_BUTTON_AUTOMATIONS"));
        },
    },
    {
        value: "refreshDynamicViews",
        translation: "Object.ActionButton.RefreshDynamicViews",
        group: "dynamicViews",
        getActionCall: function (_a) {
            var senseNavigation = _a.senseNavigation;
            return function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(typeof senseNavigation.refreshDynamicViews === "function")) return [3 /*break*/, 2];
                            return [4 /*yield*/, senseNavigation.refreshDynamicViews()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); };
        },
        requiredInput: [],
    },
];
export var getActionsList = function (shouldHide) { return actions.filter(function (a) { var _a; return !((_a = a.hide) === null || _a === void 0 ? void 0 : _a.call(a, shouldHide)); }); };
export function checkShowAction(data, field) {
    var act = actions.find(function (action) { return data.actionType === action.value; });
    return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
}
export default actions;
