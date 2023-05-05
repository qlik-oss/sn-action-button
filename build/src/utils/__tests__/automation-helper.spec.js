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
import prettier from "prettier";
import { automationRunPolling, createSnackbar, getAutomationUrl, getInputBlocks, getPostOptions, parseOutput, } from "../automation-helper";
describe("automation helper", function () {
    var appId = "fakeAppId";
    var app = { id: appId };
    var csrfToken = "fakeCsrfToken";
    var spaceId = "fakeSpaceId";
    var sheetId = "fakeSheetId";
    var userId = "fakeUserId";
    var tenantId = "fakeTenantId";
    var automationId = "fakeAutomationId";
    var automationExecutionToken = "fakeExecutionToken";
    var runId = "fakeRunId";
    var automationData = {
        id: automationId,
        inputs: {
            app: app.id,
            sheet: sheetId,
            user: userId,
            space: spaceId,
            tenant: tenantId,
            time: new Date(),
        },
        context: "qsbutton",
    };
    var automationTriggered;
    var bookmark;
    var translator;
    var status;
    var title;
    var responseStatus;
    describe("all automation helper", function () {
        beforeEach(function () {
            translator = {
                get: function (key) { return key; },
            };
            global.fetch = jest.fn(function () {
                return Promise.resolve({
                    json: function () { return ({
                        attributes: { spaceId: spaceId },
                        id: userId,
                        tenantId: tenantId,
                        guid: automationId,
                        status: status,
                        title: title,
                    }); },
                    status: responseStatus,
                    headers: { get: function () { return csrfToken; } },
                });
            });
        });
        afterEach(function () {
            jest.resetAllMocks();
        });
        it("empty string should return automation finished message", function () {
            var data = "";
            var result = parseOutput(data, translator);
            expect(result.message).toEqual("Automation finished");
        });
        it("string should return string", function () {
            var data = "Hello World";
            var result = parseOutput(data, translator);
            expect(result.message).toEqual("Hello World");
        });
        it("array should return combined string", function () {
            var data = ["Hello", "World"];
            var result = parseOutput(data, translator);
            expect(result.message).toEqual("Hello World");
        });
        it("object with message key should return message as is", function () {
            var data = { message: "Woooooo" };
            var result = parseOutput(JSON.stringify(data), translator);
            expect(result).toEqual(data);
        });
        it("triggered automation should return triggered url", function () {
            automationTriggered = true;
            var result = getAutomationUrl(automationId, automationTriggered, automationExecutionToken);
            expect(result).toEqual("../api/v1/automations/".concat(automationId, "/actions/execute?X-Execution-Token=").concat(automationExecutionToken));
        });
        it("not triggered automation should return run url", function () {
            automationTriggered = false;
            var result = getAutomationUrl(automationId, automationTriggered, automationExecutionToken);
            expect(result).toEqual("../api/v1/automations/".concat(automationId, "/runs"));
        });
        it("without bookmark should only return one block", function () {
            var result = getInputBlocks(bookmark);
            expect(result.blocks.length).toEqual(1);
        });
        it("with bookmark should only return two blocks", function () {
            bookmark = "Temp\\Bookmark";
            var result = getInputBlocks(bookmark);
            expect(result.blocks.length).toEqual(2);
        });
        it("triggered should return header with execution token and only inputs in the body", function () { return __awaiter(void 0, void 0, void 0, function () {
            var headers, postOptions, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        automationTriggered = true;
                        headers = {
                            "Content-Type": "application/json",
                            "qlik-csrf-token": csrfToken,
                            "X-Execution-Token": automationExecutionToken,
                        };
                        postOptions = {
                            method: "POST",
                            headers: headers,
                            body: JSON.stringify(automationData.inputs),
                        };
                        return [4 /*yield*/, getPostOptions(automationTriggered, automationExecutionToken, automationData)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(postOptions);
                        return [2 /*return*/];
                }
            });
        }); });
        it("non triggered automation should return header without execution be equal to automation data", function () { return __awaiter(void 0, void 0, void 0, function () {
            var headers, postOptions, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        automationTriggered = false;
                        headers = {
                            "Content-Type": "application/json",
                            "qlik-csrf-token": csrfToken,
                        };
                        postOptions = {
                            method: "POST",
                            headers: headers,
                            body: JSON.stringify(automationData),
                        };
                        return [4 /*yield*/, getPostOptions(automationTriggered, automationExecutionToken, automationData)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(postOptions);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return after status changed to finsihed", function () { return __awaiter(void 0, void 0, void 0, function () {
            var queued, finished, prom, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.useFakeTimers({ advanceTimers: true });
                        queued = { status: "queued" };
                        finished = { status: "finished", title: "Automation done running!" };
                        global.fetch = jest
                            .fn()
                            .mockResolvedValueOnce({ json: function () { return Promise.resolve(queued); } })
                            .mockResolvedValueOnce({ json: function () { return Promise.resolve(finished); } });
                        prom = new Promise(function (resolve) {
                            automationRunPolling(automationId, runId, translator, 0, resolve);
                        });
                        jest.runAllTicks();
                        jest.runAllTimers();
                        return [4 /*yield*/, prom];
                    case 1:
                        result = _a.sent();
                        expect(global.fetch).toHaveBeenCalledTimes(2);
                        expect(result).toEqual({ ok: true, message: "Automation done running!" });
                        return [2 /*return*/];
                }
            });
        }); });
        it("should return an error when status changed to failed", function () { return __awaiter(void 0, void 0, void 0, function () {
            var queued, failed, prom, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.useFakeTimers({ advanceTimers: true });
                        queued = { status: "queued" };
                        failed = { status: "failed", title: null };
                        global.fetch = jest
                            .fn()
                            .mockResolvedValueOnce({ json: function () { return Promise.resolve(queued); } })
                            .mockResolvedValueOnce({ json: function () { return Promise.resolve(failed); } });
                        prom = new Promise(function (resolve) {
                            automationRunPolling(automationId, runId, translator, 0, resolve);
                        });
                        jest.runAllTicks();
                        jest.runAllTimers();
                        return [4 /*yield*/, prom];
                    case 1:
                        result = _a.sent();
                        expect(global.fetch).toHaveBeenCalledTimes(2);
                        expect(result).toEqual({ ok: false, message: "Automation error" });
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("createSnackbar", function () {
        it("should create snackbar without url", function () {
            var message = { message: "text message" };
            var result = createSnackbar(message, false, false).innerHTML;
            expect(prettier.format(result.trim(), { parser: "html" })).toMatchSnapshot();
        });
        it("should create snackbar with url", function () {
            var message = { message: "text message", url: "www.qlik.com" };
            var result = createSnackbar(message, false, false).innerHTML;
            expect(prettier.format(result.trim(), { parser: "html" })).toMatchSnapshot();
        });
        it("should create snackbar with url in using same window", function () {
            var message = { message: "text message", url: "www.qlik.com" };
            var result = createSnackbar(message, true).innerHTML;
            expect(prettier.format(result.trim(), { parser: "html" })).toMatchSnapshot();
        });
        it("should create snackbar with error icon", function () {
            var message = { message: "text message" };
            var result = createSnackbar(message, false, true).innerHTML;
            expect(prettier.format(result.trim(), { parser: "html" })).toMatchSnapshot();
        });
    });
});
