import { getStylingPanelDefinition } from "./styling-panel-definition";
import actions, { checkShowAction, getActionsList } from "./utils/actions";
import getAutomationProps from "./utils/automation-props";
import importProperties from "./utils/conversion";
import luiIcons from "./utils/lui-icons";
import { checkShowNavigation, getNavigationsList } from "./utils/navigation-actions";
import propertyResolver from "./utils/property-resolver";
import { toggleOptions } from "./utils/style-utils";

let automationsList = null;

const getAutomations = async () => {
  if (!automationsList) {
    const automationsResponse = await fetch("../api/v1/automations?limit=100");
    const automations = await automationsResponse.json();
    automationsList = automations.data.map((a) => ({
      value: a.id,
      label: a.name,
    }));
  }
  return automationsList;
};
export default function ext({ translator, shouldHide, senseNavigation, theme, isGoToChartEnabled }) {
  const multiUserAutomation =
    shouldHide.isEnabled && shouldHide.isEnabled("SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER");
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
              itemTitleRef: (data) => {
                if (data.actionLabel) {
                  return data.actionLabel;
                }
                // If actionType exists but it's not found in the actions list,
                // the action is invalid for the current version of the button
                const fallbackTitle = data.actionType
                  ? "Object.ActionButton.InvalidAction"
                  : "Object.ActionButton.NewAction";
                const action = actions.find((act) => data.actionType === act.value);
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
                  options: async (action, hyperCubeHandler) => {
                    const bms = await hyperCubeHandler.app.getBookmarkList();
                    return bms.map((bookmark) => ({
                      label: bookmark.qData.title,
                      value: bookmark.qInfo.qId,
                    }));
                  },
                  show: (data) => checkShowAction(data, "bookmark"),
                },
                field: {
                  type: "string",
                  ref: "field",
                  component: "expression-with-dropdown",
                  translation: "Common.Field",
                  defaultValue: "",
                  dropdownOnly: true,
                  options: async (action, hyperCubeHandler) => {
                    const fields = await hyperCubeHandler.app.getFieldList();
                    return fields.map((field) => ({
                      label: field.qName,
                      value: field.qName,
                    }));
                  },
                  show: (data) => checkShowAction(data, "field"),
                },
                variable: {
                  type: "string",
                  ref: "variable",
                  component: "expression-with-dropdown",
                  translation: "Common.Variable",
                  defaultValue: "",
                  expressionType: "StringExpression",
                  options: async (action, hyperCubeHandler) => {
                    const variables = await hyperCubeHandler.app.getVariableList();
                    return variables
                      .filter((v) => !v.qIsReserved || (v.qIsReserved && action.showSystemVariables))
                      .map((v) => ({
                        label: v.qName,
                        value: v.qName,
                      }));
                  },
                  show: (data) => checkShowAction(data, "variable"),
                },
                showSystemVariables: {
                  type: "boolean",
                  ref: "showSystemVariables",
                  translation: "ExpressionEditor.SystemVariables",
                  defaultValue: false,
                  show: (data) => checkShowAction(data, "variable"),
                },
                softLock: {
                  type: "boolean",
                  ref: "softLock",
                  translation: "Object.ActionButton.Softlock",
                  defaultValue: false,
                  show: (data) => checkShowAction(data, "softLock"),
                },
                value: {
                  type: "string",
                  ref: "value",
                  component: "string",
                  translation: "properties.value",
                  expression: "optional",
                  show: (data) => checkShowAction(data, "value"),
                },
                partial: {
                  type: "boolean",
                  ref: "partial",
                  translation: "Object.ActionButton.Partial",
                  defaultValue: false,
                  show: (data) => checkShowAction(data, "partial"),
                },
                automationProps: {
                  type: "items",
                  grouped: false,
                  items: getAutomationProps(multiUserAutomation, getAutomations),
                  show: (data) => checkShowAction(data, "automation"),
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
                  show: (data) => checkShowNavigation(data, "appId"),
                },
                sheetId: {
                  type: "string",
                  ref: "navigation.sheet",
                  translation: "properties.sheet",
                  expression: "optional",
                  show: (data) => checkShowNavigation(data, "sheetId"),
                },
                sheet: {
                  type: "string",
                  ref: "navigation.sheet",
                  translation: "properties.sheet",
                  component: "expression-with-dropdown",
                  expressionType: "StringExpression",
                  show: (data) => checkShowNavigation(data, "sheet"),
                  options: async (action, hyperCubeHandler) => {
                    const sheets = await hyperCubeHandler.app.getSheetList();
                    return sheets.map((sheet) => ({
                      value: sheet.qInfo.qId,
                      label: sheet.qMeta.title,
                      showCondition: sheet.qData.showCondition,
                    }));
                  },
                },
                chartId: {
                  type: "string",
                  ref: "navigation.chartId",
                  translation: "properties.chartPicker.chartId",
                  component: "expression-with-dropdown",
                  expressionType: "StringExpression",
                  show: (data) => (isGoToChartEnabled ? checkShowNavigation(data, "chartId") : false),
                  options: async (data, action, hyperCubeHandler) => {
                    const sheetId = data.navigation.sheet;
                    const sheet = sheetId && (await hyperCubeHandler.app.getObject(sheetId));
                    return sheet?.properties.cells.map((cell) => ({
                      value: cell.name,
                    }));
                  },
                },
                story: {
                  type: "string",
                  ref: "navigation.story",
                  translation: "properties.story",
                  component: "expression-with-dropdown",
                  expressionType: "StringExpression",
                  show: (data) => checkShowNavigation(data, "story"),
                  options: async (action, hyperCubeHandler) => {
                    const stories = await hyperCubeHandler.app.getStoryList();
                    return stories.map((story) => ({
                      value: story.qInfo.qId,
                      label: story.qMeta.title,
                    }));
                  },
                },
                websiteUrl: {
                  type: "string",
                  expression: "optional",
                  ref: "navigation.websiteUrl",
                  translation: "properties.website",
                  show: (data) => checkShowNavigation(data, "websiteUrl"),
                },
                sameWindow: {
                  type: "boolean",
                  ref: "navigation.sameWindow",
                  translation: "properties.sameWindow",
                  show: (data) => checkShowNavigation(data, "sameWindow"),
                  defaultValue: false,
                },
                odagLink: {
                  type: "string",
                  ref: "navigation.odagLink",
                  component: "dropdown",
                  translation: "ExpressionEditor.SetExpresions.OdagAppLinks",
                  options: async (action, hyperCubeHandler) => {
                    const odagLinks = await senseNavigation.getOdagLinks(hyperCubeHandler.app);
                    return odagLinks
                      .filter((link) => link.properties.type === "odaglink")
                      .map((odagLink) => ({
                        label: odagLink.properties.data.name,
                        value: odagLink.properties.data.id,
                      }));
                  },
                  show: (data) => checkShowNavigation(data, "odagLink"),
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
              show: (data) => data.useEnabledCondition,
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
                labelGroup: {
                  type: "items",
                  items: {
                    label: {
                      component: "string",
                      ref: "style.label",
                      translation: "Common.Label",
                      expression: "optional",
                    },
                    showLabelToggle: {
                      component: "switch",
                      type: "boolean",
                      ref: "style.showLabel",
                      translation: "properties.referenceLines.showLabel",
                      defaultValue: true,
                      options: toggleOptions,
                    },
                  },
                },
              },
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
                      show: (data) => propertyResolver.getValue(data, "style.icon.useIcon"),
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
                      show: (data) => propertyResolver.getValue(data, "style.icon.useIcon"),
                    },
                  },
                },
              },
            },
            presentation: getStylingPanelDefinition({ flags: shouldHide, theme, translator }),
          },
        },
      },
    },
    importProperties,
    exportProperties: null,
    support: {
      export: false,
      exportData: false,
      snapshot: false,
      viewData: false,
      quickMobile: true,
      fullscreen: false,
    },
  };
}
