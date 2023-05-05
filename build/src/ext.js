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
import styleDefaults from "./style-defaults";
import { getStylingPanelDefinition } from "./styling-panel-definition";
import actions, { checkShowAction, getActionsList } from "./utils/actions";
import getAutomationProps from "./utils/automation-props";
import importProperties from "./utils/conversion";
import luiIcons from "./utils/lui-icons";
import { checkShowNavigation, getNavigationsList } from "./utils/navigation-actions";
import propertyResolver from "./utils/property-resolver";
import { colorOptions, toggleOptions } from "./utils/style-utils";
var automationsList = null;
var getAutomations = function () { return __awaiter(void 0, void 0, void 0, function () {
    var automationsResponse, automations;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!!automationsList) return [3 /*break*/, 3];
                return [4 /*yield*/, fetch("../api/v1/automations?limit=100")];
            case 1:
                automationsResponse = _a.sent();
                return [4 /*yield*/, automationsResponse.json()];
            case 2:
                automations = _a.sent();
                automationsList = automations.data.map(function (a) { return ({
                    value: a.id,
                    label: a.name,
                }); });
                _a.label = 3;
            case 3: return [2 /*return*/, automationsList];
        }
    });
}); };
export default function ext(_a) {
    var _this = this;
    var translator = _a.translator, shouldHide = _a.shouldHide, senseNavigation = _a.senseNavigation;
    var multiUserAutomation = shouldHide.isEnabled && shouldHide.isEnabled("SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER");
    var stylingPanelEnabled = shouldHide.isEnabled && shouldHide.isEnabled("SENSECLIENT_IM_1525_STYLINGPANEL_BUTTON");
    return {
        definition: {
            type: "items",
            component: "accordion",
            items: {
                actions: {
                    type: "items",
                    translation: "Object.ActionButton.ActionsAndNavigation",
                    grouped: true,
                    items: {
                        actions: {
                            type: "array",
                            translation: "Object.ActionButton.Actions",
                            ref: "actions",
                            itemTitleRef: function (data) {
                                if (data.actionLabel) {
                                    return data.actionLabel;
                                }
                                // If actionType exists but it's not found in the actions list,
                                // the action is invalid for the current version of the button
                                var fallbackTitle = data.actionType
                                    ? "Object.ActionButton.InvalidAction"
                                    : "Object.ActionButton.NewAction";
                                var action = actions.find(function (act) { return data.actionType === act.value; });
                                return translator.get((action && action.translation) || fallbackTitle);
                            },
                            allowAdd: true,
                            allowRemove: true,
                            allowMove: true,
                            addTranslation: "Object.ActionButton.AddAction",
                            items: {
                                label: {
                                    component: "string",
                                    ref: "actionLabel",
                                    translation: "Common.Label",
                                    expression: "optional",
                                    defaultValue: "",
                                },
                                actionType: {
                                    type: "string",
                                    ref: "actionType",
                                    component: "expression-with-dropdown",
                                    translation: "Object.ActionButton.Action",
                                    defaultValue: "",
                                    options: getActionsList(shouldHide),
                                    dropdownOnly: true,
                                },
                                bookmark: {
                                    type: "string",
                                    ref: "bookmark",
                                    component: "expression-with-dropdown",
                                    translation: "ExpressionEditor.SetExpresions.Bookmark",
                                    defaultValue: "",
                                    dropdownOnly: true,
                                    options: function (action, hyperCubeHandler) { return __awaiter(_this, void 0, void 0, function () {
                                        var bms;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, hyperCubeHandler.app.getBookmarkList()];
                                                case 1:
                                                    bms = _a.sent();
                                                    return [2 /*return*/, bms.map(function (bookmark) { return ({
                                                            label: bookmark.qData.title,
                                                            value: bookmark.qInfo.qId,
                                                        }); })];
                                            }
                                        });
                                    }); },
                                    show: function (data) { return checkShowAction(data, "bookmark"); },
                                },
                                field: {
                                    type: "string",
                                    ref: "field",
                                    component: "expression-with-dropdown",
                                    translation: "Common.Field",
                                    defaultValue: "",
                                    dropdownOnly: true,
                                    options: function (action, hyperCubeHandler) { return __awaiter(_this, void 0, void 0, function () {
                                        var fields;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, hyperCubeHandler.app.getFieldList()];
                                                case 1:
                                                    fields = _a.sent();
                                                    return [2 /*return*/, fields.map(function (field) { return ({
                                                            label: field.qName,
                                                            value: field.qName,
                                                        }); })];
                                            }
                                        });
                                    }); },
                                    show: function (data) { return checkShowAction(data, "field"); },
                                },
                                variable: {
                                    type: "string",
                                    ref: "variable",
                                    component: "expression-with-dropdown",
                                    translation: "Common.Variable",
                                    defaultValue: "",
                                    expressionType: "StringExpression",
                                    options: function (action, hyperCubeHandler) { return __awaiter(_this, void 0, void 0, function () {
                                        var variables;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, hyperCubeHandler.app.getVariableList()];
                                                case 1:
                                                    variables = _a.sent();
                                                    return [2 /*return*/, variables
                                                            .filter(function (v) { return !v.qIsReserved || (v.qIsReserved && action.showSystemVariables); })
                                                            .map(function (v) { return ({
                                                            label: v.qName,
                                                            value: v.qName,
                                                        }); })];
                                            }
                                        });
                                    }); },
                                    show: function (data) { return checkShowAction(data, "variable"); },
                                },
                                showSystemVariables: {
                                    type: "boolean",
                                    ref: "showSystemVariables",
                                    translation: "ExpressionEditor.SystemVariables",
                                    defaultValue: false,
                                    show: function (data) { return checkShowAction(data, "variable"); },
                                },
                                softLock: {
                                    type: "boolean",
                                    ref: "softLock",
                                    translation: "Object.ActionButton.Softlock",
                                    defaultValue: false,
                                    show: function (data) { return checkShowAction(data, "softLock"); },
                                },
                                value: {
                                    type: "string",
                                    ref: "value",
                                    component: "string",
                                    translation: "properties.value",
                                    expression: "optional",
                                    show: function (data) { return checkShowAction(data, "value"); },
                                },
                                partial: {
                                    type: "boolean",
                                    ref: "partial",
                                    translation: "Object.ActionButton.Partial",
                                    defaultValue: false,
                                    show: function (data) { return checkShowAction(data, "partial"); },
                                },
                                automationProps: {
                                    type: "items",
                                    grouped: false,
                                    items: getAutomationProps(multiUserAutomation, getAutomations),
                                    show: function (data) { return checkShowAction(data, "automation"); },
                                },
                            },
                        },
                        navigation: {
                            translation: "Object.ActionButton.Navigation",
                            type: "items",
                            items: {
                                action: {
                                    ref: "navigation.action",
                                    translation: "Object.ActionButton.Navigation",
                                    component: "expression-with-dropdown",
                                    defaultValue: null,
                                    options: getNavigationsList(shouldHide),
                                    dropdownOnly: true,
                                },
                                appId: {
                                    type: "string",
                                    expression: "optional",
                                    ref: "navigation.appId",
                                    translation: "properties.appId",
                                    show: function (data) { return checkShowNavigation(data, "appId"); },
                                },
                                sheetId: {
                                    type: "string",
                                    ref: "navigation.sheet",
                                    translation: "properties.sheet",
                                    expression: "optional",
                                    show: function (data) { return checkShowNavigation(data, "sheetId"); },
                                },
                                sheet: {
                                    type: "string",
                                    ref: "navigation.sheet",
                                    translation: "properties.sheet",
                                    component: "expression-with-dropdown",
                                    expressionType: "StringExpression",
                                    show: function (data) { return checkShowNavigation(data, "sheet"); },
                                    options: function (action, hyperCubeHandler) { return __awaiter(_this, void 0, void 0, function () {
                                        var sheets;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, hyperCubeHandler.app.getSheetList()];
                                                case 1:
                                                    sheets = _a.sent();
                                                    return [2 /*return*/, sheets.map(function (sheet) { return ({
                                                            value: sheet.qInfo.qId,
                                                            label: sheet.qMeta.title,
                                                            showCondition: sheet.qData.showCondition,
                                                        }); })];
                                            }
                                        });
                                    }); },
                                },
                                story: {
                                    type: "string",
                                    ref: "navigation.story",
                                    translation: "properties.story",
                                    component: "expression-with-dropdown",
                                    expressionType: "StringExpression",
                                    show: function (data) { return checkShowNavigation(data, "story"); },
                                    options: function (action, hyperCubeHandler) { return __awaiter(_this, void 0, void 0, function () {
                                        var stories;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, hyperCubeHandler.app.getStoryList()];
                                                case 1:
                                                    stories = _a.sent();
                                                    return [2 /*return*/, stories.map(function (story) { return ({
                                                            value: story.qInfo.qId,
                                                            label: story.qMeta.title,
                                                        }); })];
                                            }
                                        });
                                    }); },
                                },
                                websiteUrl: {
                                    type: "string",
                                    expression: "optional",
                                    ref: "navigation.websiteUrl",
                                    translation: "properties.website",
                                    show: function (data) { return checkShowNavigation(data, "websiteUrl"); },
                                },
                                sameWindow: {
                                    type: "boolean",
                                    ref: "navigation.sameWindow",
                                    translation: "properties.sameWindow",
                                    show: function (data) { return checkShowNavigation(data, "sameWindow"); },
                                    defaultValue: false,
                                },
                                odagLink: {
                                    type: "string",
                                    ref: "navigation.odagLink",
                                    component: "dropdown",
                                    translation: "ExpressionEditor.SetExpresions.OdagAppLinks",
                                    options: function (action, hyperCubeHandler) { return __awaiter(_this, void 0, void 0, function () {
                                        var odagLinks;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, senseNavigation.getOdagLinks(hyperCubeHandler.app)];
                                                case 1:
                                                    odagLinks = _a.sent();
                                                    return [2 /*return*/, odagLinks
                                                            .filter(function (link) { return link.properties.type === "odaglink"; })
                                                            .map(function (odagLink) { return ({
                                                            label: odagLink.properties.data.name,
                                                            value: odagLink.properties.data.id,
                                                        }); })];
                                            }
                                        });
                                    }); },
                                    show: function (data) { return checkShowNavigation(data, "odagLink"); },
                                },
                            },
                        },
                    },
                },
                enableCondition: {
                    type: "items",
                    translation: "properties.enableConditionSection",
                    items: {
                        useCondition: {
                            type: "boolean",
                            component: "switch",
                            translation: "properties.enableToggle",
                            ref: "useEnabledCondition",
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
                        },
                        condition: {
                            ref: "enabledCondition",
                            translation: "properties.enableCondition",
                            type: "integer",
                            expression: "optional",
                            show: function (data) { return data.useEnabledCondition; },
                        },
                    },
                },
                settings: {
                    component: "expandable-items",
                    translation: "Common.Appearance",
                    uses: "settings",
                    items: {
                        general: {
                            type: "items",
                            translation: "properties.general",
                            items: {
                                showTitles: {},
                                details: {
                                    show: false,
                                },
                                cellNavMenu: {
                                    show: false,
                                },
                                label: {
                                    component: "string",
                                    ref: "style.label",
                                    translation: "Common.Label",
                                    expression: "optional",
                                },
                            },
                        },
                        font: {
                            grouped: true,
                            type: "items",
                            translation: "properties.font",
                            items: {
                                sizeAndColor: {
                                    type: "items",
                                    items: {
                                        fontSize: {
                                            component: "slider",
                                            type: "number",
                                            ref: "style.font.size",
                                            translation: "properties.fontSize",
                                            min: 0.2,
                                            max: 1,
                                            step: 0.01,
                                        },
                                        useFontColorExpression: {
                                            ref: "style.font.useColorExpression",
                                            type: "boolean",
                                            translation: "properties.fontColor",
                                            component: "dropdown",
                                            options: colorOptions,
                                        },
                                        colorPicker: {
                                            component: "color-picker",
                                            type: "object",
                                            ref: "style.font.color",
                                            translation: "properties.color",
                                            dualOutput: true,
                                            show: function (data) { return !propertyResolver.getValue(data, "style.font.useColorExpression"); },
                                        },
                                        colorExpression: {
                                            component: "string",
                                            type: "string",
                                            ref: "style.font.colorExpression",
                                            translation: "Common.Expression",
                                            expression: "optional",
                                            show: function (data) { return propertyResolver.getValue(data, "style.font.useColorExpression"); },
                                        },
                                    },
                                },
                                stylingAndAlign: {
                                    type: "items",
                                    items: {
                                        fontStyling: {
                                            component: "item-selection-list",
                                            type: "string",
                                            ref: "style.font.style",
                                            translation: "properties.textStyle",
                                            horizontal: true,
                                            multipleSelect: true,
                                            items: [
                                                {
                                                    component: "icon-item",
                                                    icon: "bold",
                                                    value: "bold",
                                                    translation: "Common.bold",
                                                    labelPlacement: "bottom",
                                                },
                                                {
                                                    component: "icon-item",
                                                    icon: "italic",
                                                    value: "italic",
                                                    translation: "Common.italic",
                                                    labelPlacement: "bottom",
                                                },
                                                {
                                                    component: "icon-item",
                                                    icon: "underline",
                                                    value: "underline",
                                                    translation: "Common.underline",
                                                    labelPlacement: "bottom",
                                                },
                                            ],
                                        },
                                        textAlign: {
                                            component: "item-selection-list",
                                            type: "string",
                                            ref: "style.font.align",
                                            translation: "properties.Alignment",
                                            horizontal: true,
                                            items: [
                                                {
                                                    component: "icon-item",
                                                    icon: "align_left",
                                                    value: "left",
                                                    translation: "properties.dock.left",
                                                    labelPlacement: "bottom",
                                                },
                                                {
                                                    component: "icon-item",
                                                    icon: "align_center",
                                                    value: "center",
                                                    translation: "Common.Center",
                                                    labelPlacement: "bottom",
                                                },
                                                {
                                                    component: "icon-item",
                                                    icon: "align_right",
                                                    value: "right",
                                                    translation: "properties.dock.right",
                                                    labelPlacement: "bottom",
                                                },
                                            ],
                                        },
                                    },
                                },
                            },
                            show: !stylingPanelEnabled,
                        },
                        background: {
                            grouped: true,
                            type: "items",
                            translation: "properties.background",
                            items: {
                                backgroundColor: {
                                    type: "items",
                                    items: {
                                        useColorExpression: {
                                            ref: "style.background.useColorExpression",
                                            type: "boolean",
                                            translation: "AppDetails.SheetBackgroundColor",
                                            component: "dropdown",
                                            options: colorOptions,
                                        },
                                        colorPicker: {
                                            component: "color-picker",
                                            type: "object",
                                            ref: "style.background.color",
                                            translation: "properties.color",
                                            dualOutput: true,
                                            show: function (data) { return !propertyResolver.getValue(data, "style.background.useColorExpression"); },
                                        },
                                        colorExpression: {
                                            component: "string",
                                            type: "string",
                                            ref: "style.background.colorExpression",
                                            translation: "Common.Expression",
                                            expression: "optional",
                                            show: function (data) { return propertyResolver.getValue(data, "style.background.useColorExpression"); },
                                        },
                                    },
                                },
                                backgroundImage: {
                                    type: "items",
                                    items: {
                                        useBackgroundImage: {
                                            ref: "style.background.useImage",
                                            type: "boolean",
                                            translation: "properties.backgroundImage.use",
                                            component: "switch",
                                            options: toggleOptions,
                                        },
                                        backgroundUrl: {
                                            ref: "style.background.url.qStaticContentUrlDef.qUrl",
                                            layoutRef: "style.background.url.qStaticContentUrl.qUrl",
                                            schemaIgnore: true,
                                            translation: "Common.Image",
                                            tooltip: { select: "properties.media.select", remove: "properties.media.removeBackground" },
                                            type: "string",
                                            component: "media",
                                            show: function (data) {
                                                return propertyResolver.getValue(data, "style.background.useImage");
                                            },
                                        },
                                        backgroundSize: {
                                            ref: "style.background.size",
                                            translation: "properties.backgroundImage.size",
                                            type: "string",
                                            component: "dropdown",
                                            defaultValue: styleDefaults.BACKGROUND_SIZE,
                                            options: [
                                                {
                                                    value: "auto",
                                                    translation: "properties.backgroundImage.originalSize",
                                                },
                                                {
                                                    value: "alwaysFit",
                                                    translation: "properties.backgroundImage.sizeAlwaysFit",
                                                },
                                                {
                                                    value: "fitWidth",
                                                    translation: "properties.backgroundImage.sizeFitWidth",
                                                },
                                                {
                                                    value: "fitHeight",
                                                    translation: "properties.backgroundImage.sizeFitHeight",
                                                },
                                                {
                                                    value: "fill",
                                                    translation: "properties.backgroundImage.sizeStretch",
                                                },
                                                {
                                                    value: "alwaysFill",
                                                    translation: "properties.backgroundImage.sizeAlwaysFill",
                                                },
                                            ],
                                            show: function (data) {
                                                return (propertyResolver.getValue(data, "style.background.useImage") &&
                                                    !!propertyResolver.getValue(data, "style.background.url.qStaticContentUrlDef.qUrl"));
                                            },
                                        },
                                        backgroundPosition: {
                                            ref: "style.background.position",
                                            translation: "Common.Position",
                                            type: "string",
                                            component: "align-matrix",
                                            show: function (data) {
                                                return (propertyResolver.getValue(data, "style.background.useImage") &&
                                                    propertyResolver.getValue(data, "style.background.url.qStaticContentUrlDef.qUrl") &&
                                                    propertyResolver.getValue(data, "style.background.size") !== "fill");
                                            },
                                            currentSize: function (data) {
                                                return propertyResolver.getValue(data, "style.background.size");
                                            },
                                        },
                                    },
                                },
                            },
                            show: !stylingPanelEnabled,
                        },
                        border: {
                            type: "items",
                            grouped: true,
                            translation: "properties.border",
                            items: {
                                borderSettings: {
                                    type: "items",
                                    items: {
                                        useBorder: {
                                            ref: "style.border.useBorder",
                                            type: "boolean",
                                            translation: "properties.border.use",
                                            component: "switch",
                                            options: toggleOptions,
                                        },
                                        borderRadius: {
                                            component: "slider",
                                            show: function (data) { return propertyResolver.getValue(data, "style.border.useBorder"); },
                                            translation: "properties.border.radius",
                                            type: "number",
                                            ref: "style.border.radius",
                                            min: 0,
                                            max: 1,
                                            step: 0.01,
                                        },
                                        borderWidth: {
                                            component: "slider",
                                            show: function (data) { return propertyResolver.getValue(data, "style.border.useBorder"); },
                                            type: "number",
                                            ref: "style.border.width",
                                            translation: "properties.border.width",
                                            min: 0,
                                            max: 0.5,
                                            step: 0.005,
                                        },
                                        colorDropdown: {
                                            type: "string",
                                            show: function (data) { return propertyResolver.getValue(data, "style.border.useBorder"); },
                                            component: "dropdown",
                                            translation: "properties.border.color",
                                            ref: "style.border.useColorExpression",
                                            options: colorOptions,
                                        },
                                        colorPicker: {
                                            component: "color-picker",
                                            type: "object",
                                            ref: "style.border.color",
                                            translation: "properties.color",
                                            dualOutput: true,
                                            show: function (data) {
                                                return propertyResolver.getValue(data, "style.border.useBorder") &&
                                                    !propertyResolver.getValue(data, "style.border.useColorExpression");
                                            },
                                        },
                                        colorExpression: {
                                            component: "string",
                                            type: "string",
                                            ref: "style.border.colorExpression",
                                            translation: "Common.Expression",
                                            show: function (data) {
                                                return propertyResolver.getValue(data, "style.border.useBorder") &&
                                                    propertyResolver.getValue(data, "style.border.useColorExpression");
                                            },
                                            expression: "optional",
                                        },
                                    },
                                },
                            },
                            show: !stylingPanelEnabled,
                        },
                        icon: {
                            type: "items",
                            grouped: true,
                            translation: "properties.icon",
                            items: {
                                iconSettings: {
                                    type: "items",
                                    items: {
                                        useIcon: {
                                            ref: "style.icon.useIcon",
                                            type: "boolean",
                                            translation: "properties.icon.use",
                                            component: "switch",
                                            options: toggleOptions,
                                        },
                                        iconType: {
                                            ref: "style.icon.iconType",
                                            component: "expression-with-dropdown",
                                            translation: "properties.icon",
                                            defaultValue: "",
                                            options: luiIcons,
                                            expressionType: "StringExpression",
                                            show: function (data) { return propertyResolver.getValue(data, "style.icon.useIcon"); },
                                        },
                                        iconPosition: {
                                            ref: "style.icon.position",
                                            component: "dropdown",
                                            translation: "Common.Position",
                                            options: [
                                                {
                                                    translation: "properties.dock.left",
                                                    value: "left",
                                                },
                                                {
                                                    translation: "properties.dock.right",
                                                    value: "right",
                                                },
                                            ],
                                            show: function (data) { return propertyResolver.getValue(data, "style.icon.useIcon"); },
                                        },
                                    },
                                },
                            },
                        },
                        presentation: stylingPanelEnabled ? getStylingPanelDefinition() : undefined,
                    },
                },
            },
        },
        importProperties: importProperties,
        exportProperties: null,
        support: {
            export: !1,
            exportData: !1,
            snapshot: !1,
            viewData: !1,
            quickMobile: !0,
        },
    };
}
