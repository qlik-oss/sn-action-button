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
import { getAutomation, getInputBlocks } from "./automation-helper";
var getAutomationProps = function (multiUserAutomation, getAutomations) { return ({
    // adds automation to actions and adds a dropdown property panel
    // item to select the automation for the button to trigger
    // Boolean property to instruct the automation action to create a
    // bookmark and send it to the selected automation in the
    // property panel.
    automation: {
        type: "string",
        component: "expression-with-dropdown",
        translation: "Object.ActionButton.Automation",
        ref: "automation",
        dropdownOnly: true,
        options: function () { return __awaiter(void 0, void 0, void 0, function () {
            var automationsResponse, automations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("../api/v1/items?resourceType=automation&limit=100")];
                    case 1:
                        automationsResponse = _a.sent();
                        return [4 /*yield*/, automationsResponse.json()];
                    case 2:
                        automations = _a.sent();
                        return [2 /*return*/, automations.data.map(function (a) { return ({
                                value: a.id,
                                label: a.name,
                            }); })];
                }
            });
        }); },
        show: function () { return !multiUserAutomation; },
    },
    automationId: {
        type: "string",
        component: "expression-with-dropdown",
        translation: "Object.ActionButton.Automation",
        ref: "automationId",
        dropdownOnly: false,
        options: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, getAutomations()];
        }); }); },
        show: function () { return multiUserAutomation; },
        change: function (data) { return __awaiter(void 0, void 0, void 0, function () {
            var a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getAutomation(data.automationId)];
                    case 1:
                        a = _a.sent();
                        if (data.automationTriggered) {
                            data.automationExecutionToken = a.executionToken;
                        }
                        else {
                            data.automationExecutionToken = "";
                        }
                        return [2 /*return*/];
                }
            });
        }); },
    },
    automationLink: {
        translation: "Object.ActionButton.Automation.Link",
        component: "link",
        url: function (data) { return "/automations/editor/".concat(data.automationId); },
        show: function (data) { return data.automationId.length > 1 && multiUserAutomation; },
    },
    // Boolean property to instruct the automation action to create a
    // bookmark and send it to the selected automation in the
    // property panel.
    automationPostData: {
        type: "boolean",
        ref: "automationPostData",
        translation: "Object.ActionButton.Automation.SendSelections",
        defaultValue: false,
    },
    includeSelectionsText: {
        translation: "Object.ActionButton.Automation.SendSelectionsHelp",
        component: "text",
        show: function () { return multiUserAutomation; },
    },
    automationTriggered: {
        type: "boolean",
        ref: "automationTriggered",
        translation: "Object.ActionButton.Automation.RunModeTriggered",
        show: function () { return multiUserAutomation; },
        defaultValue: false,
        change: function (data) { return __awaiter(void 0, void 0, void 0, function () {
            var a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getAutomation(data.automationId)];
                    case 1:
                        a = _a.sent();
                        if (data.automationTriggered) {
                            data.automationExecutionToken = a.executionToken;
                        }
                        else {
                            data.automationExecutionToken = "";
                        }
                        return [2 /*return*/];
                }
            });
        }); },
    },
    automationTriggeredText: {
        translation: "Object.ActionButton.Automation.RunModeTriggeredHelp",
        component: "text",
        show: function () { return multiUserAutomation; },
    },
    automationShowNotification: {
        ref: "automationShowNotification",
        type: "boolean",
        translation: "Object.ActionButton.Automation.ShowNotification",
        component: "switch",
        options: [
            {
                value: true,
                translation: "properties.on",
            },
            {
                value: false,
                translation: "properties.off",
            },
        ],
        defaultValue: false,
        show: function () { return multiUserAutomation; },
    },
    automationNotificationDuration: {
        type: "number",
        ref: "automationNotificationDuration",
        translation: "Object.ActionButton.Automation.NotificationDuration",
        defaultValue: 4,
        expression: "optional",
        show: function (data) { return data.automationShowNotification && multiUserAutomation; },
    },
    automationNotificationDurationHelp: {
        translation: "Object.ActionButton.Automation.NotificationDurationHelp",
        component: "text",
        show: function (data) { return data.automationShowNotification && multiUserAutomation; },
    },
    automationOpenLinkSameWindow: {
        ref: "automationOpenLinkSameWindow",
        type: "boolean",
        translation: "Object.ActionButton.Automation.OpenLinkInSameWindow",
        component: "switch",
        options: [
            {
                value: true,
                translation: "properties.on",
            },
            {
                value: false,
                translation: "properties.off",
            },
        ],
        defaultValue: false,
        show: function (data) { return data.automationShowNotification && multiUserAutomation; },
    },
    copyBlock: {
        component: "button",
        translation: "Object.ActionButton.Automation.CopyInputBlock",
        action: function (data) {
            navigator.clipboard.writeText(JSON.stringify(getInputBlocks(data.automationPostData)));
        },
        show: function () { return multiUserAutomation; },
    },
}); };
export default getAutomationProps;
