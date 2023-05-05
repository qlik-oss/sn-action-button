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
import actions, { checkShowAction, getActionsList, getValueList } from "../actions";
describe("actions", function () {
    var qStateName = "someState";
    var app;
    var multiUserAutomation;
    var createdBookmark;
    var createdTemporaryBookmark;
    var fieldObject;
    var fieldInfoObject;
    var variableObject;
    var field;
    var bookmark;
    var variable;
    var automationId;
    var inputs = [];
    var automationPostData = false;
    var automationTriggered = false;
    var value = "someValue";
    var softLock = true;
    var resourceId = "fakeResourceId";
    var id = "fakeId";
    var sheetId = "fakeSheetId";
    var senseNavigation = { getCurrentSheetId: function () { return sheetId; } };
    var tenantId = "fakeTenantId";
    var spaceId = "fakeSpaceId";
    var csrfToken = "fakeCsrfToken";
    var automationExecutionToken = "fakeExecutionToken";
    var blocks = [{ displayName: "Inputs", form: [{ label: "blockLabel" }, { label: "blockLabel" }] }];
    var translator = { get: function () { return ""; } };
    describe("all actions", function () {
        beforeEach(function () {
            field = "someField";
            bookmark = "someBookmark";
            variable = "someVariable";
            automationId = "someAutomation";
            fieldObject = {
                clear: jest.fn(),
                clearAllButThis: jest.fn(),
                lock: jest.fn(),
                unlock: jest.fn(),
                select: jest.fn(),
                selectAll: jest.fn(),
                selectValues: jest.fn(),
                selectAlternative: jest.fn(),
                selectExcluded: jest.fn(),
                selectPossible: jest.fn(),
                toggleSelect: jest.fn(),
            };
            fieldInfoObject = {
                qTags: [],
            };
            variableObject = {
                setStringValue: jest.fn(),
            };
            createdBookmark = {
                getLayout: jest.fn(function () { return Promise.resolve({ qInfo: { qId: "bmId" } }); }),
            };
            app = {
                id: "fakeAppId",
                applyBookmark: jest.fn(),
                clearAll: jest.fn(),
                createBookmark: jest.fn(function () { return Promise.resolve(createdBookmark); }),
                createTemporaryBookmark: jest.fn(function () { return Promise.resolve(createdTemporaryBookmark); }),
                back: jest.fn(),
                forward: jest.fn(),
                getField: jest.fn(function () { return Promise.resolve(fieldObject); }),
                getFieldDescription: jest.fn(function () { return Promise.resolve(fieldInfoObject); }),
                getVariableByName: jest.fn(function () { return Promise.resolve(variableObject); }),
                lockAll: jest.fn(),
                unlockAll: jest.fn(),
                getBookmarkList: function () { return [{ qData: { title: "findMyBookmark" }, qInfo: { qId: "myBookmarkId" } }]; },
                evaluate: function () { return "43850;43881"; },
                doReload: jest.fn(function () { return true; }),
                doSave: jest.fn(),
                saveObjects: jest.fn(),
            };
            global.fetch = jest.fn(function () {
                return Promise.resolve({
                    json: function () { return ({
                        resourceId: resourceId,
                        id: id,
                        automationExecutionToken: automationExecutionToken,
                        inputs: inputs,
                        blocks: blocks,
                        tenantId: tenantId,
                        headers: { get: function () { return csrfToken; } },
                        attributes: { spaceId: spaceId },
                    }); },
                    headers: { get: function () { return csrfToken; } },
                });
            });
        });
        afterEach(function () {
            inputs = [];
            automationPostData = false;
            jest.resetAllMocks();
        });
        it("should call applyBookmark", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObj = actions.find(function (action) { return action.value === "applyBookmark"; });
                        return [4 /*yield*/, actionObj.getActionCall({ app: app, bookmark: bookmark })()];
                    case 1:
                        _a.sent();
                        expect(app.applyBookmark).toHaveBeenCalledWith(bookmark);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call applyBookmark when no bookmark", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObj = actions.find(function (action) { return action.value === "applyBookmark"; });
                        bookmark = null;
                        return [4 /*yield*/, actionObj.getActionCall({ app: app, bookmark: bookmark })()];
                    case 1:
                        _a.sent();
                        expect(app.applyBookmark).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call applyBookmark with bookmark from bookmark list", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObj = actions.find(function (action) { return action.value === "applyBookmark"; });
                        return [4 /*yield*/, actionObj.getActionCall({ app: app, bookmark: "findMyBookmark" })()];
                    case 1:
                        _a.sent();
                        expect(app.applyBookmark).toHaveBeenCalledWith("myBookmarkId");
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call back", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "back"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app })()];
                    case 1:
                        _a.sent();
                        expect(app.back).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call forward", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "forward"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app })()];
                    case 1:
                        _a.sent();
                        expect(app.forward).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call clearAll", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "clearAll"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.clearAll).toHaveBeenCalledWith(softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call clearAllButThis", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "clearAllButThis"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.clearAllButThis).toHaveBeenCalledWith(softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call clearAllButThis when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "clearAllButThis"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.clearAllButThis).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call clearField", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "clearField"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.clear).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call clearField when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "clearField"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.clear).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call selectAll", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectAll"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.selectAll).toHaveBeenCalledWith(softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call selectAll when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectAll"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.selectAll).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call toggleSelect", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "toggleSelect"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, value: value, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.toggleSelect).toHaveBeenCalledWith(value, softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call toggleSelect when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "toggleSelect"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, value: value })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.toggleSelect).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call selectValues", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject, valueList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectValues"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, value: value, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, getValueList(app, value, false)];
                    case 2:
                        valueList = _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.selectValues).toHaveBeenCalledWith(valueList, false, softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call selectValues when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectValues"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.selectValues).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call selectMatchingValues", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectMatchingValues"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, value: value, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.select).toHaveBeenCalledWith(value, false, softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call selectMatchingValues when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectMatchingValues"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.selectValues).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call selectAlternative", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectAlternative"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.selectAlternative).toHaveBeenCalledWith(softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call selectAlternative when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectAlternative"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.selectAlternative).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call selectExcluded", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectExcluded"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.selectExcluded).toHaveBeenCalledWith(softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call selectExcluded when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectExcluded"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.selectExcluded).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call selectPossible", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectPossible"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field, softLock: softLock })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.selectPossible).toHaveBeenCalledWith(softLock);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call selectPossible when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "selectPossible"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.selectPossible).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call lockAll", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "lockAll"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app })()];
                    case 1:
                        _a.sent();
                        expect(app.lockAll).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call lockField", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "lockField"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.lock).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call lockField when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "lockField"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.lock).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call unlockAll", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "unlockAll"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app })()];
                    case 1:
                        _a.sent();
                        expect(app.unlockAll).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call unlockField", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "unlockField"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(app.getField).toHaveBeenCalledWith(field, qStateName);
                        expect(fieldObject.unlock).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call unlockField when no field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "unlockField"; });
                        field = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, qStateName: qStateName, field: field })()];
                    case 1:
                        _a.sent();
                        expect(fieldObject.unlock).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call setVariable", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "setVariable"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, variable: variable, value: value })()];
                    case 1:
                        _a.sent();
                        expect(variableObject.setStringValue).toHaveBeenCalledWith(value);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call setVariable when no variable", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "setVariable"; });
                        variable = null;
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, variable: variable, value: value })()];
                    case 1:
                        _a.sent();
                        expect(variableObject.setStringValue).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should do a reload and save", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "doReload"; });
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, partial: true })()];
                    case 1:
                        _a.sent();
                        expect(app.doReload).toHaveBeenCalledWith(0, true, false);
                        expect(app.doSave).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should not save on failed reload", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "doReload"; });
                        app.doReload = function () { return false; };
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, partial: true })()];
                    case 1:
                        _a.sent();
                        expect(app.doSave).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call executeAutomation when automationTriggered is true", function () { return __awaiter(void 0, void 0, void 0, function () {
            var appId, automation, time, actionObject, headers, postOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputs = [];
                        appId = "fakeAppId";
                        automationPostData = false;
                        automationTriggered = true;
                        multiUserAutomation = true;
                        time = new Date(2022, 10, 1);
                        jest.useFakeTimers("modern");
                        jest.setSystemTime(time);
                        actionObject = actions.find(function (action) { return action.value === "executeAutomation"; });
                        return [4 /*yield*/, actionObject.getActionCall({
                                app: app,
                                automation: automation,
                                automationId: automationId,
                                automationTriggered: automationTriggered,
                                automationExecutionToken: automationExecutionToken,
                                automationPostData: automationPostData,
                                senseNavigation: senseNavigation,
                                multiUserAutomation: multiUserAutomation,
                                translator: translator,
                            })()];
                    case 1:
                        _a.sent();
                        expect(global.fetch).toHaveBeenCalledTimes(4);
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/users/me");
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/apps/".concat(appId));
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/csrf-token");
                        headers = {
                            "Content-Type": "application/json",
                            "qlik-csrf-token": csrfToken,
                            "X-Execution-Token": automationExecutionToken,
                        };
                        postOptions = {
                            method: "POST",
                            headers: headers,
                            body: JSON.stringify({
                                app: appId,
                                sheet: sheetId,
                                user: id,
                                space: spaceId,
                                tenant: tenantId,
                                time: time,
                            }),
                        };
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/automations/".concat(automationId, "/actions/execute?X-Execution-Token=").concat(automationExecutionToken), postOptions);
                        jest.useRealTimers();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call automation run when automationTriggered is false", function () { return __awaiter(void 0, void 0, void 0, function () {
            var automation, time, actionObject, automationData, headers, postOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputs = [];
                        automationPostData = false;
                        automationTriggered = false;
                        time = new Date(2022, 10, 1);
                        jest.useFakeTimers("modern");
                        jest.setSystemTime(time);
                        actionObject = actions.find(function (action) { return action.value === "executeAutomation"; });
                        return [4 /*yield*/, actionObject.getActionCall({
                                app: app,
                                automation: automation,
                                automationId: automationId,
                                automationTriggered: automationTriggered,
                                automationExecutionToken: automationExecutionToken,
                                automationPostData: automationPostData,
                                multiUserAutomation: multiUserAutomation,
                                translator: translator,
                                senseNavigation: senseNavigation,
                            })()];
                    case 1:
                        _a.sent();
                        expect(global.fetch).toHaveBeenCalledTimes(4);
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/users/me");
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/apps/".concat(app.id));
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/csrf-token");
                        automationData = {
                            id: automationId,
                            inputs: {
                                app: app.id,
                                sheet: sheetId,
                                user: id,
                                space: spaceId,
                                tenant: tenantId,
                                time: time,
                            },
                            context: "qsbutton",
                        };
                        headers = {
                            "Content-Type": "application/json",
                            "qlik-csrf-token": csrfToken,
                        };
                        postOptions = {
                            method: "POST",
                            headers: headers,
                            body: JSON.stringify(automationData),
                        };
                        expect(global.fetch).toHaveBeenCalledWith("../api/v1/automations/".concat(automationId, "/runs"), postOptions);
                        jest.useRealTimers();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should NOT call executeAutomation when no automation", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionObject = actions.find(function (action) { return action.value === "executeAutomation"; });
                        automationId = "";
                        return [4 /*yield*/, actionObject.getActionCall({ app: app, automationId: automationId, automationPostData: automationPostData, multiUserAutomation: multiUserAutomation, translator: translator })()];
                    case 1:
                        _a.sent();
                        expect(global.fetch).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call executeAutomation with creation of temp bookmark", function () { return __awaiter(void 0, void 0, void 0, function () {
            var automation, actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputs = [];
                        automationPostData = true;
                        actionObject = actions.find(function (action) { return action.value === "executeAutomation"; });
                        return [4 /*yield*/, actionObject.getActionCall({
                                app: app,
                                automation: automation,
                                automationId: automationId,
                                automationTriggered: automationTriggered,
                                automationExecutionToken: automationExecutionToken,
                                automationPostData: automationPostData,
                                multiUserAutomation: multiUserAutomation,
                                translator: translator,
                                senseNavigation: senseNavigation,
                            })()];
                    case 1:
                        _a.sent();
                        expect(app.createTemporaryBookmark).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call executeAutomation WITHOUT creation of temp bookmark", function () { return __awaiter(void 0, void 0, void 0, function () {
            var automation, actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputs = [];
                        automationPostData = false;
                        actionObject = actions.find(function (action) { return action.value === "executeAutomation"; });
                        return [4 /*yield*/, actionObject.getActionCall({
                                app: app,
                                automation: automation,
                                automationId: automationId,
                                automationTriggered: automationTriggered,
                                automationExecutionToken: automationExecutionToken,
                                automationPostData: automationPostData,
                                multiUserAutomation: multiUserAutomation,
                                translator: translator,
                                senseNavigation: senseNavigation,
                            })()];
                    case 1:
                        _a.sent();
                        expect(app.createTemporaryBookmark).toHaveBeenCalledTimes(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should call refreshDynamicViews", function () { return __awaiter(void 0, void 0, void 0, function () {
            var actionObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        senseNavigation.refreshDynamicViews = jest.fn();
                        actionObject = actions.find(function (action) { return action.value === "refreshDynamicViews"; });
                        return [4 /*yield*/, actionObject.getActionCall({ senseNavigation: senseNavigation })()];
                    case 1:
                        _a.sent();
                        expect(senseNavigation.refreshDynamicViews).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("getValueList", function () {
        var valueString = "valueOne;valueTwo";
        var ExpectedList = [{ qText: "valueOne" }, { qText: "valueTwo" }];
        it("should return array with values in an array", function () { return __awaiter(void 0, void 0, void 0, function () {
            var valueList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getValueList(app, valueString, false)];
                    case 1:
                        valueList = _a.sent();
                        expect(valueList).toEqual(ExpectedList);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return array with numbers in value string", function () { return __awaiter(void 0, void 0, void 0, function () {
            var valueList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueString = "1;2";
                        ExpectedList = [
                            { qNumber: 1, qIsNumeric: true },
                            { qNumber: 2, qIsNumeric: true },
                        ];
                        return [4 /*yield*/, getValueList(app, valueString, false)];
                    case 1:
                        valueList = _a.sent();
                        expect(valueList).toEqual(ExpectedList);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return array with converted dates", function () { return __awaiter(void 0, void 0, void 0, function () {
            var valueList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valueString = "2020-01-20;2020-02-20";
                        ExpectedList = [
                            { qNumber: 43850, qIsNumeric: true },
                            { qNumber: 43881, qIsNumeric: true },
                        ];
                        return [4 /*yield*/, getValueList(app, valueString, true)];
                    case 1:
                        valueList = _a.sent();
                        expect(valueList).toEqual(ExpectedList);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("checkShowAction", function () {
        var data;
        beforeEach(function () {
            data = { actionType: "applyBookmark" };
        });
        it("should return true when field required", function () {
            var result = checkShowAction(data, "bookmark");
            expect(result).toBe(true);
        });
        it("should return false when field is not required", function () {
            var result = checkShowAction(data, "notTheField");
            expect(result).toBe(false);
        });
        it("should return undefined when action is not found", function () {
            data.actionType = "notAnAction";
            var result = checkShowAction(data, "bookmark");
            expect(result).toEqual(undefined);
        });
    });
    describe("getActionsList", function () {
        it("should return all but not FF disabled actions", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(false),
                isFeatureBlacklisted: jest.fn().mockReturnValue(false),
                isEnabled: jest.fn().mockReturnValue(false),
            };
            var result = getActionsList(shouldHide);
            expect(result.length).toBe(20);
        });
        it("should return all but not unsupported feature navigations", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(true),
                isFeatureBlacklisted: jest.fn().mockReturnValue(false),
                isEnabled: jest.fn().mockReturnValue(true),
            };
            var result = getActionsList(shouldHide);
            expect(result.length).toBe(20);
        });
        it("should return all but not feature blacklisted navigations", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(false),
                isFeatureBlacklisted: jest.fn().mockReturnValue(true),
                isEnabled: jest.fn().mockReturnValue(true),
            };
            var result = getActionsList(shouldHide);
            expect(result.length).toBe(13);
        });
        it("should return all", function () {
            var shouldHide = {
                isUnsupportedFeature: jest.fn().mockReturnValue(false),
                isFeatureBlacklisted: jest.fn().mockReturnValue(false),
                isEnabled: jest.fn().mockReturnValue(true),
            };
            var result = getActionsList(shouldHide);
            expect(result.length).toBe(21);
        });
    });
});
