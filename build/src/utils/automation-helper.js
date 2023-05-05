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
import { encodeUrl, getCurrentProtocol, removeProtocolHttp } from "./url-encoder";
import { inIframe } from "./url-utils";
var TRANSITION_TIME = 400;
var POLL_INTERVAL = 2000;
var MAX_POLLS = 300;
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("../api/v1/users/me")];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var getCsrfToken = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("../api/v1/csrf-token")];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.headers.get("qlik-csrf-token")];
        }
    });
}); };
var getSpaceId = function (appId) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch("../api/v1/apps/".concat(appId))];
            case 1:
                response = _b.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _b.sent();
                return [2 /*return*/, ((_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.spaceId) || "personal"];
        }
    });
}); };
export var getAutomation = function (automationId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(automationId.length > 2)) return [3 /*break*/, 2];
                return [4 /*yield*/, fetch("../api/v1/automations/".concat(automationId))];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.json()];
            case 2: return [2 /*return*/, null];
        }
    });
}); };
export var getAutomationRun = function (automationId, runId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("../api/v1/automations/".concat(automationId, "/runs/").concat(runId))];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.json()];
        }
    });
}); };
var getTranslation = function (translator, key, defaultValue) {
    var translation = translator.get(key);
    if (translation === key) {
        return defaultValue;
    }
    return translation;
};
var getDefaultMessage = function (translator) {
    return getTranslation(translator, "Object.ActionButton.Automation.DefaultAutomationMsg", "Automation finished");
};
export var parseOutput = function (data, translator) {
    var defaultMessage = { message: getDefaultMessage(translator) };
    if (typeof data !== "undefined") {
        if (typeof data === "object") {
            if (Array.isArray(data)) {
                return (data === null || data === void 0 ? void 0 : data.length) > 0 ? { message: data.join(" ") } : defaultMessage;
            }
            if (Object.keys(data).includes("message")) {
                return data;
            }
            return defaultMessage;
        }
        try {
            var message = JSON.parse(data);
            if (Object.keys(message).includes("message")) {
                return message;
            }
            return defaultMessage;
        }
        catch (_a) {
            if (data === "") {
                return defaultMessage;
            }
            if (typeof data === "string" || typeof data === "number") {
                return { message: data };
            }
            return defaultMessage;
        }
    }
    return defaultMessage;
};
export var automationRunPolling = function (automationId, runId, translator, polTimes, resolve) { return __awaiter(void 0, void 0, void 0, function () {
    var automationRun;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, getAutomationRun(automationId, runId)];
            case 1:
                automationRun = _f.sent();
                switch (automationRun.status) {
                    case "queued":
                    case "running":
                    case "not started":
                    case "starting":
                        if (polTimes > MAX_POLLS) {
                            return [2 /*return*/, { ok: false, message: getTranslation(translator, "geo.findLocation.error.timeout", "Timeout") }];
                        }
                        return [2 /*return*/, setTimeout(function () { return automationRunPolling(automationId, runId, translator, polTimes + 1, resolve); }, POLL_INTERVAL)];
                    case "finished": {
                        if (((_a = automationRun.title) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            return [2 /*return*/, resolve(__assign(__assign({}, parseOutput(automationRun.title, translator)), { ok: true }))];
                        }
                        return [2 /*return*/, resolve({
                                message: getDefaultMessage(translator),
                                ok: true,
                            })];
                    }
                    case "failed": {
                        if (((_b = automationRun.title) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                            return [2 /*return*/, resolve(__assign(__assign({}, parseOutput(automationRun.title, translator)), { ok: false }))];
                        }
                        return [2 /*return*/, resolve({
                                message: getTranslation(translator, "Object.ActionButton.Automation.AutomationError", "Automation error"),
                                ok: false,
                            })];
                    }
                    case "finished with warnings": {
                        if (((_c = automationRun.title) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                            return [2 /*return*/, resolve(__assign(__assign({}, parseOutput(automationRun.title, translator)), { ok: false }))];
                        }
                        return [2 /*return*/, resolve({
                                message: getDefaultMessage(translator),
                                ok: true,
                            })];
                    }
                    case "must stop":
                    case "stopped": {
                        if (((_d = automationRun.title) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                            return [2 /*return*/, resolve(__assign(__assign({}, parseOutput(automationRun.title, translator)), { ok: false }))];
                        }
                        return [2 /*return*/, resolve({
                                message: getTranslation(translator, "Object.ActionButton.Automation.DefaultAutomationMsg", "Unknown error"),
                                ok: false,
                            })];
                    }
                    default: {
                        if (((_e = automationRun.title) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                            return [2 /*return*/, resolve(__assign(__assign({}, parseOutput(automationRun.title, translator)), { ok: true }))];
                        }
                        return [2 /*return*/, resolve({
                                message: getDefaultMessage(translator),
                                ok: true,
                            })];
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
export var pollAutomationAndGetMsg = function (automationId, triggered, response, translator) { return __awaiter(void 0, void 0, void 0, function () {
    var message, _a, data, status_1, guid, id, queued, runId_1, prom;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = response.status;
                switch (_a) {
                    case 200: return [3 /*break*/, 1];
                    case 201: return [3 /*break*/, 1];
                    case 400: return [3 /*break*/, 6];
                    case 401: return [3 /*break*/, 7];
                    case 403: return [3 /*break*/, 7];
                    case 404: return [3 /*break*/, 8];
                    case 500: return [3 /*break*/, 9];
                    case 503: return [3 /*break*/, 9];
                }
                return [3 /*break*/, 10];
            case 1: return [4 /*yield*/, response.json()];
            case 2:
                data = _b.sent();
                status_1 = data.status, guid = data.guid, id = data.id;
                queued = status_1 === "queued";
                runId_1 = typeof id === "undefined" ? guid : id;
                if (!(!triggered || queued)) return [3 /*break*/, 4];
                prom = new Promise(function (resolve) {
                    automationRunPolling(automationId, runId_1, translator, 0, resolve);
                });
                return [4 /*yield*/, prom];
            case 3:
                message = _b.sent();
                return [3 /*break*/, 5];
            case 4:
                message = parseOutput(data, translator);
                message.ok = true;
                _b.label = 5;
            case 5: return [3 /*break*/, 11];
            case 6:
                {
                    message = {
                        message: getTranslation(translator, "Object.ActionButton.Automation.BadRequest", "Bad request"),
                        ok: false,
                    };
                    return [3 /*break*/, 11];
                }
                _b.label = 7;
            case 7:
                {
                    message = {
                        message: getTranslation(translator, "Object.ActionButton.Automation.NotAuthorized", "You are not authorized to run this automation"),
                        ok: false,
                    };
                    return [3 /*break*/, 11];
                }
                _b.label = 8;
            case 8:
                {
                    message = {
                        message: getTranslation(translator, "Object.ActionButton.Automation.AutomationNotFound", "Automation not found"),
                        ok: false,
                    };
                    return [3 /*break*/, 11];
                }
                _b.label = 9;
            case 9:
                {
                    message = {
                        message: getTranslation(translator, "Object.ActionButton.Automation.AutomationError", "Automation error"),
                        ok: false,
                    };
                    return [3 /*break*/, 11];
                }
                _b.label = 10;
            case 10:
                {
                    message = {
                        message: getTranslation(translator, "Object.ActionButton.Automation.UnkownError", "Unknown error"),
                        ok: false,
                    };
                }
                _b.label = 11;
            case 11: return [2 /*return*/, message];
        }
    });
}); };
var applyStyles = function (element, styles) {
    if (element !== undefined && element !== null) {
        Object.keys(styles).forEach(function (key) {
            element.style[key] = styles[key];
        });
    }
};
var removeSnackbar = function (element) {
    applyStyles(element, { opacity: 0 });
    setTimeout(function () {
        element.remove();
    }, 1000);
};
var getTarget = function (sameWindow) {
    if (sameWindow) {
        return inIframe() ? "_parent" : "_self";
    }
    return "_blank";
};
var getUrl = function (url) {
    var protocol = getCurrentProtocol(url);
    var urlRemovedProtocol = removeProtocolHttp(url);
    return "".concat(protocol).concat(encodeUrl(urlRemovedProtocol));
};
export var createSnackbar = function (msg, automationOpenLinkSameWindow, error) {
    var message = msg.message, url = msg.url, urlText = msg.urlText;
    var snackContainer = document.createElement("div");
    var randomId = (Math.random() + 1).toString(36).substring(7);
    var snackbarId = "sn-action-button-snackbar-".concat(randomId);
    snackContainer.setAttribute("id", snackbarId);
    var existingSnackbars = document.querySelectorAll(".sn-action-button-snackbar");
    var bottom = 24 + ((existingSnackbars === null || existingSnackbars === void 0 ? void 0 : existingSnackbars.length) || 0) * 5;
    var snackContainerStyles = {
        width: "400px",
        height: "35px",
        "background-color": "#FFFFFF",
        position: "fixed",
        left: "calc(50% - 200px)",
        right: "auto",
        bottom: "".concat(bottom, "px"),
        "box-shadow": "0px 1px 2px 0px rgb(0 0 0 / 15%)",
        padding: "6px 16px",
        "border-radius": "3px",
        "z-index": 1000,
        opacity: 0,
        transition: "visibility 0ms, opacity ".concat(TRANSITION_TIME, "ms linear"),
    };
    applyStyles(snackContainer, snackContainerStyles);
    var snackbar = "<div class=\"sn-action-button-snackbar\" style=\"display: flex; justify-content: space-between; height: 100%; align-items: center;\">\n  ".concat(error
        ? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" height=\"16px\" fill=\"currentColor\" aria-hidden=\"true\" role=\"img\">\n        <path d=\"M6.919.439A1.5 1.5 0 0 1 8.925.336l.114.103 6.48 6.48a1.5 1.5 0 0 1 .102 2.006l-.102.114-6.48 6.48a1.5 1.5 0 0 1-2.006.102l-.114-.102-6.48-6.48a1.5 1.5 0 0 1-.103-2.006l.103-.114 6.48-6.48Zm1.56 10.54h-1c-.267 0-.455.158-.493.404l-.007.096v1c0 .266.158.454.404.492l.096.008h1c.266 0 .454-.158.492-.404l.008-.096v-1c0-.267-.158-.455-.404-.493l-.096-.007Zm0-8h-1c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5Z\"></path>\n      </svg>"
        : "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 16 16\" height=\"16px\" fill=\"currentColor\" aria-hidden=\"true\" role=\"img\" data-testid=\"status-indicator__valid\">\n        <defs>\n          <path id=\"tick_svg__tick-a\" d=\"m6 10 7-7 2 2-7 7-2 2-5-5 2-2 3 3Z\"></path>\n        </defs>\n        <use xlink:href=\"#tick_svg__tick-a\" fill-rule=\"evenodd\"></use>\n      </svg>", "  \n    <span class=\"sn-action-button-snackbar-text\" style=\"overflow: hidden; white-space: nowrap; text-overflow: ellipsis;\">").concat(message).concat(url
        ? "<a href=\"".concat(getUrl(url), "\" style=\"margin-left: 6px;\" target=\"").concat(getTarget(automationOpenLinkSameWindow), "\">").concat(urlText || "Open", "</a>")
        : "", "</span>\n    <span style=\"cursor: pointer;\">\n      <svg class=\"sn-action-button-snackbar-close\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\">\n        <path d=\"M9.34535242,8 L13.3273238,11.9819714 C13.6988326,12.3534802 13.6988326,12.955815 13.3273238,13.3273238 C12.955815,13.6988326 12.3534802,13.6988326 11.9819714,13.3273238 L8,9.34535242 L4.01802863,13.3273238 C3.64651982,13.6988326 3.04418502,13.6988326 2.67267621,13.3273238 C2.3011674,12.955815 2.3011674,12.3534802 2.67267621,11.9819714 L6.65464758,8 L2.67267621,4.01802863 C2.3011674,3.64651982 2.3011674,3.04418502 2.67267621,2.67267621 C3.04418502,2.3011674 3.64651982,2.3011674 4.01802863,2.67267621 L8,6.65464758 L11.9819714,2.67267621 C12.3534802,2.3011674 12.955815,2.3011674 13.3273238,2.67267621 C13.6988326,3.04418502 13.6988326,3.64651982 13.3273238,4.01802863 L9.34535242,8 Z\">\n        </path>\n      </svg>\n      </span>\n    </div>");
    snackContainer.innerHTML = snackbar;
    return snackContainer;
};
export var showSnackbar = function (message, duration, automationOpenLinkSameWindow) { return __awaiter(void 0, void 0, void 0, function () {
    var snackContainer, close, body;
    return __generator(this, function (_a) {
        snackContainer = createSnackbar(message, automationOpenLinkSameWindow, !message.ok);
        snackContainer.focus();
        close = snackContainer.querySelector(".sn-action-button-snackbar-close");
        close.addEventListener("click", function () {
            removeSnackbar(snackContainer);
        });
        body = document.querySelector("body");
        body.appendChild(snackContainer);
        applyStyles(snackContainer, { opacity: 1 });
        setTimeout(function () {
            removeSnackbar(snackContainer);
        }, Math.max(duration * 1000 - TRANSITION_TIME, 1));
        return [2 /*return*/];
    });
}); };
// Automation run logic prior to IM_1855_AUTOMATIONS_MULTI_USER
export var oldAutomationRun = function (automation, automationPostData, app) { return __awaiter(void 0, void 0, void 0, function () {
    var itemInfo, autoInfo, executePath, inputBlocks, newDate, bmkProp, bmk, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                automation = encodeURIComponent(automation);
                return [4 /*yield*/, fetch("../api/v1/items/".concat(automation)).then(function (response) { return response.json(); })];
            case 1:
                itemInfo = _a.sent();
                return [4 /*yield*/, fetch("../api/v1/automations/".concat(itemInfo.resourceId)).then(function (response) { return response.json(); })];
            case 2:
                autoInfo = _a.sent();
                executePath = "../api/v1/automations/".concat(autoInfo.id, "/actions/execute?X-Execution-Token=").concat(autoInfo.executionToken);
                if (!automationPostData) return [3 /*break*/, 6];
                return [4 /*yield*/, fetch("../api/v1/automations/".concat(itemInfo.resourceId, "/blocks"))
                        .then(function (response) { return response.json(); })
                        .then(function (blocks) {
                        var items = [];
                        for (var i = 0; i < blocks.blocks.length; i++) {
                            if (blocks.blocks[i].type === "FormBlock") {
                                items = blocks.blocks[i].form;
                                break;
                            }
                        }
                        return items;
                    })];
            case 3:
                inputBlocks = _a.sent();
                if (!(inputBlocks.length > 0)) return [3 /*break*/, 6];
                newDate = new Date();
                bmkProp = {
                    qProp: {
                        qInfo: {
                            qId: "automation_".concat(app.id, "_").concat(automation, "_").concat(newDate.getTime()),
                            qType: "bookmark",
                        },
                        qMetaDef: {
                            title: "Generated automation bookmark on ".concat(newDate.toISOString()),
                            description: "Generated to provide target automation with bookmark to get current selection state",
                            _createdBy: "sn-action-button",
                            _createdFor: "automation",
                            _createdOn: "".concat(newDate.toISOString()),
                            _id: "automation_".concat(encodeURIComponent(app.id), "_").concat(automation, "_").concat(newDate.getTime()),
                        },
                    },
                };
                return [4 /*yield*/, app
                        .createBookmark(bmkProp)
                        .then(function (bookmark) { return bookmark.getLayout(); })
                        .then(function (layout) { return layout.qInfo.qId; })];
            case 4:
                bmk = _a.sent();
                return [4 /*yield*/, app.saveObjects()];
            case 5:
                _a.sent();
                executePath = "".concat(executePath, "&").concat(inputBlocks[0].label.toLowerCase(), "=").concat(encodeURIComponent(app.id), "&").concat(inputBlocks[1].label.toLowerCase(), "=").concat(bmk);
                _a.label = 6;
            case 6: 
            // execute the automation
            return [4 /*yield*/, fetch(executePath).then(function (response) { return response.json(); })];
            case 7:
                // execute the automation
                _a.sent();
                return [3 /*break*/, 9];
            case 8:
                e_1 = _a.sent();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
export var getAutomationUrl = function (automationId, automationTriggered, automationExecutionToken) {
    if (automationTriggered) {
        return "../api/v1/automations/".concat(automationId, "/actions/execute?X-Execution-Token=").concat(automationExecutionToken);
    }
    return "../api/v1/automations/".concat(automationId, "/runs");
};
export var getTemporaryBookmark = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    var bookmarkProps;
    return __generator(this, function (_a) {
        bookmarkProps = {
            qOptions: {
                qIncludeVariables: true,
                qIncludeAllPatches: true,
            },
        };
        return [2 /*return*/, app.createTemporaryBookmark(bookmarkProps)];
    });
}); };
export var getAutomationData = function (_a) {
    var app = _a.app, automationId = _a.automationId, bookmark = _a.bookmark, senseNavigation = _a.senseNavigation;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, inputs;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, getUser()];
                case 1:
                    user = _c.sent();
                    _b = {
                        app: app.id,
                        bookmark: bookmark,
                        sheet: senseNavigation === null || senseNavigation === void 0 ? void 0 : senseNavigation.getCurrentSheetId(),
                        user: user.id
                    };
                    return [4 /*yield*/, getSpaceId(app.id)];
                case 2:
                    inputs = (_b.space = _c.sent(),
                        _b.tenant = user.tenantId,
                        _b.time = new Date(),
                        _b);
                    return [2 /*return*/, {
                            id: automationId,
                            inputs: inputs,
                            context: "qsbutton",
                        }];
            }
        });
    });
};
export var getPostOptions = function (automationTriggered, automationExecutionToken, automationData) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = {
                    "Content-Type": "application/json"
                };
                _a = "qlik-csrf-token";
                return [4 /*yield*/, getCsrfToken()];
            case 1:
                headers = (_b[_a] = _c.sent(),
                    _b);
                if (automationTriggered) {
                    headers["X-Execution-Token"] = automationExecutionToken;
                }
                return [2 /*return*/, {
                        method: "POST",
                        headers: headers,
                        body: JSON.stringify(automationTriggered ? automationData.inputs : automationData),
                    }];
        }
    });
}); };
export var getInputBlocks = function (bookmark) {
    var inputBlocks = {
        blocks: [
            {
                id: "EB6A372B-3312-4E90-8E8F-88F2A889B4CF",
                type: "FormBlock",
                disabled: false,
                name: "inputs",
                displayName: "Inputs",
                comment: "Inputs received from button",
                childId: bookmark ? "1D55D049-33EB-41CD-9EEC-3CACE5898C86" : null,
                inputs: [],
                settings: [{ id: "persist_data", value: "no", type: "select", structure: {} }],
                collapsed: [{ name: "loop", isCollapsed: false }],
                x: 291.0010678361308,
                y: 40.99957876441722,
                form: [
                    {
                        id: "inputs-input-0",
                        label: "app",
                        helpText: "null",
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 0,
                    },
                    {
                        id: "inputs-input-1",
                        label: "bookmark",
                        helpText: null,
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 1,
                    },
                    {
                        id: "inputs-input-2",
                        label: "sheet",
                        helpText: null,
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 2,
                    },
                    {
                        id: "inputs-input-3",
                        label: "user",
                        helpText: null,
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 3,
                    },
                    {
                        id: "inputs-input-4",
                        label: "space",
                        helpText: null,
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 4,
                    },
                    {
                        id: "inputs-input-5",
                        label: "tenant",
                        helpText: null,
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 5,
                    },
                    {
                        id: "inputs-input-6",
                        label: "time",
                        helpText: null,
                        type: "input",
                        values: null,
                        isRequired: false,
                        options: {},
                        order: 6,
                    },
                ],
                persistData: "no",
            },
        ],
        variables: [],
    };
    if (bookmark) {
        inputBlocks.blocks.push({
            id: "1D55D049-33EB-41CD-9EEC-3CACE5898C86",
            type: "SnippetBlock",
            disabled: false,
            name: "applyBookmark",
            displayName: "Qlik Cloud Services - Apply Bookmark",
            comment: 'Apply bookmark from button. To get selections or variables use the "Get Expression Value" block',
            childId: null,
            inputs: [
                { id: "d41ae430-073a-11ec-bdef-bb104839c843", value: "{$.inputs.app}", type: "string", structure: [] },
                { id: "d41b7e40-073a-11ec-ac1b-59270c518ae7", value: "{$.inputs.bookmark}", type: "string", structure: [] },
                {
                    id: "f478e320-9270-11ed-b551-d73ebe8e14ad",
                    value: "Yes",
                    type: "select",
                    displayValue: "Yes",
                    structure: [],
                },
            ],
            settings: [{ id: "blendr_on_error", value: "stop", type: "select", structure: [] }],
            collapsed: [{ name: "loop", isCollapsed: false }],
            x: 142,
            y: 296,
            datasourcetype_guid: "61a87510-c7a3-11ea-95da-0fb0c241e75c",
            snippet_guid: "d41632d0-073a-11ec-a6ac-d34723268fbc",
        });
    }
    return inputBlocks;
};
