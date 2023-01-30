import actions, { checkShowAction, getActionsList } from './utils/actions';
import { checkShowNavigation, getNavigationsList } from './utils/navigation-actions';
import styleEditor from './utils/styling-panel-properties';
import { getAutomation } from './utils/automation-helper';
import propertyResolver from './utils/property-resolver';
import importProperties from './utils/conversion';
import luiIcons from './utils/lui-icons';

let automationsList = null;

const getAutomations = async () => {
  if (!automationsList) {
    const automationsResponse = await fetch('../api/v1/automations?limit=100');
    const automations = await automationsResponse.json();
    automationsList = automations.data.map((a) => ({
      value: a.id,
      label: a.name,
    }));
  }
  return automationsList;
};

const colorOptions = [
  {
    value: false,
    translation: 'properties.colorMode.primary',
  },
  {
    value: true,
    translation: 'properties.colorMode.byExpression',
  },
];

const toggleOptions = [
  {
    value: true,
    translation: 'properties.on',
  },
  {
    value: false,
    translation: 'properties.off',
  },
];

export default function ext({ translator, shouldHide, senseNavigation }) {
  const multiUserAutomation =
    shouldHide.isEnabled && shouldHide.isEnabled('SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER');
  const stylingPanelEnabled = shouldHide.isEnabled && shouldHide.isEnabled('SENSECLIENT_IM_1525_STYLINGPANEL_BUTTON');
  return {
    definition: {
      type: 'items',
      component: 'accordion',
      items: {
        actions: {
          type: 'items',
          translation: 'Object.ActionButton.ActionsAndNavigation',
          grouped: true,
          items: {
            actions: {
              type: 'array',
              translation: 'Object.ActionButton.Actions',
              ref: 'actions',
              itemTitleRef: (data) => {
                if (data.actionLabel) {
                  return data.actionLabel;
                }
                // If actionType exists but it's not found in the actions list,
                // the action is invalid for the current version of the button
                const fallbackTitle = data.actionType
                  ? 'Object.ActionButton.InvalidAction'
                  : 'Object.ActionButton.NewAction';
                const action = actions.find((act) => data.actionType === act.value);
                return translator.get((action && action.translation) || fallbackTitle);
              },
              allowAdd: true,
              allowRemove: true,
              allowMove: true,
              addTranslation: 'Object.ActionButton.AddAction',
              items: {
                label: {
                  component: 'string',
                  ref: 'actionLabel',
                  translation: 'Common.Label',
                  expression: 'optional',
                  defaultValue: '',
                },
                actionType: {
                  type: 'string',
                  ref: 'actionType',
                  component: 'expression-with-dropdown',
                  translation: 'Object.ActionButton.Action',
                  defaultValue: '',
                  options: getActionsList(shouldHide),
                  dropdownOnly: true,
                },
                bookmark: {
                  type: 'string',
                  ref: 'bookmark',
                  component: 'expression-with-dropdown',
                  translation: 'ExpressionEditor.SetExpresions.Bookmark',
                  defaultValue: '',
                  dropdownOnly: true,
                  options: async (action, hyperCubeHandler) => {
                    const bms = await hyperCubeHandler.app.getBookmarkList();
                    return bms.map((bookmark) => ({
                      label: bookmark.qData.title,
                      value: bookmark.qInfo.qId,
                    }));
                  },
                  show: (data) => checkShowAction(data, 'bookmark'),
                },
                field: {
                  type: 'string',
                  ref: 'field',
                  component: 'expression-with-dropdown',
                  translation: 'Common.Field',
                  defaultValue: '',
                  dropdownOnly: true,
                  options: async (action, hyperCubeHandler) => {
                    const fields = await hyperCubeHandler.app.getFieldList();
                    return fields.map((field) => ({
                      label: field.qName,
                      value: field.qName,
                    }));
                  },
                  show: (data) => checkShowAction(data, 'field'),
                },
                variable: {
                  type: 'string',
                  ref: 'variable',
                  component: 'expression-with-dropdown',
                  translation: 'Common.Variable',
                  defaultValue: '',
                  expressionType: 'StringExpression',
                  options: async (action, hyperCubeHandler) => {
                    const variables = await hyperCubeHandler.app.getVariableList();
                    return variables
                      .filter((v) => !v.qIsReserved || (v.qIsReserved && action.showSystemVariables))
                      .map((v) => ({
                        label: v.qName,
                        value: v.qName,
                      }));
                  },
                  show: (data) => checkShowAction(data, 'variable'),
                },
                showSystemVariables: {
                  type: 'boolean',
                  ref: 'showSystemVariables',
                  translation: 'ExpressionEditor.SystemVariables',
                  defaultValue: false,
                  show: (data) => checkShowAction(data, 'variable'),
                },
                softLock: {
                  type: 'boolean',
                  ref: 'softLock',
                  translation: 'Object.ActionButton.Softlock',
                  defaultValue: false,
                  show: (data) => checkShowAction(data, 'softLock'),
                },
                value: {
                  type: 'string',
                  ref: 'value',
                  component: 'string',
                  translation: 'properties.value',
                  expression: 'optional',
                  show: (data) => checkShowAction(data, 'value'),
                },
                partial: {
                  type: 'boolean',
                  ref: 'partial',
                  translation: 'Object.ActionButton.Partial',
                  defaultValue: false,
                  show: (data) => checkShowAction(data, 'partial'),
                },
                // adds automation to actions and adds a dropdown property panel
                // item to select the automation for the button to trigger

                // Boolean property to instruct the automation action to create a
                // bookmark and send it to the selected automation in the
                // property panel.
                automation: {
                  type: 'string',
                  component: 'expression-with-dropdown',
                  translation: 'Object.ActionButton.Automation',
                  ref: 'automation',
                  dropdownOnly: true,
                  options: async () => {
                    const automationsResponse = await fetch('../api/v1/items?resourceType=automation&limit=100');
                    const automations = await automationsResponse.json();
                    return automations.data.map((a) => ({
                      value: a.id,
                      label: a.name,
                    }));
                  },
                  show: (data) => checkShowAction(data, 'automation') && !multiUserAutomation,
                },
                automationId: {
                  type: 'string',
                  component: 'expression-with-dropdown',
                  translation: 'Object.ActionButton.Automation',
                  ref: 'automationId',
                  dropdownOnly: false,
                  options: async () => getAutomations(),
                  show: (data) => checkShowAction(data, 'automation') && multiUserAutomation,
                  change: async (data) => {
                    const a = await getAutomation(data.automationId);
                    data.automationShowTriggered = a.runMode === 'triggered';
                    if (data.automationTriggered) {
                      data.automationExecutionToken = a.executionToken;
                    } else {
                      data.automationExecutionToken = '';
                    }
                  },
                },
                automationPostData: {
                  type: 'boolean',
                  ref: 'automationPostData',
                  translation: 'Object.ActionButton.Automation.SendSelections',
                  show: (data) => checkShowAction(data, 'automation'),
                  defaultValue: false,
                },
                automationTriggered: {
                  type: 'boolean',
                  ref: 'automationTriggered',
                  translation: 'Object.ActionButton.Automation.RunModeTriggered',
                  show: (data) =>
                    checkShowAction(data, 'automation') && multiUserAutomation && data.automationShowTriggered,
                  defaultValue: false,
                  change: async (data) => {
                    const a = await getAutomation(data.automationId);
                    if (data.automationTriggered) {
                      data.automationExecutionToken = a.executionToken;
                    } else {
                      data.automationExecutionToken = '';
                    }
                  },
                },
                automationTriggeredText: {
                  label: `Object.ActionButton.Automation.RunModeTriggeredHelp`,
                  component: 'text',
                  show: (data) =>
                    checkShowAction(data, 'automation') && multiUserAutomation && data.automationShowTriggered,
                },
              },
            },
            navigation: {
              translation: 'Object.ActionButton.Navigation',
              type: 'items',
              items: {
                action: {
                  ref: 'navigation.action',
                  translation: 'Object.ActionButton.Navigation',
                  component: 'expression-with-dropdown',
                  defaultValue: null,
                  options: getNavigationsList(shouldHide),
                  dropdownOnly: true,
                },
                appId: {
                  type: 'string',
                  expression: 'optional',
                  ref: 'navigation.appId',
                  translation: 'properties.appId',
                  show: (data) => checkShowNavigation(data, 'appId'),
                },
                sheetId: {
                  type: 'string',
                  ref: 'navigation.sheet',
                  translation: 'properties.sheet',
                  expression: 'optional',
                  show: (data) => checkShowNavigation(data, 'sheetId'),
                },
                sheet: {
                  type: 'string',
                  ref: 'navigation.sheet',
                  translation: 'properties.sheet',
                  component: 'expression-with-dropdown',
                  expressionType: 'StringExpression',
                  show: (data) => checkShowNavigation(data, 'sheet'),
                  options: async (action, hyperCubeHandler) => {
                    const sheets = await hyperCubeHandler.app.getSheetList();
                    return sheets.map((sheet) => ({
                      value: sheet.qInfo.qId,
                      label: sheet.qMeta.title,
                      showCondition: sheet.qData.showCondition,
                    }));
                  },
                },
                story: {
                  type: 'string',
                  ref: 'navigation.story',
                  translation: 'properties.story',
                  component: 'expression-with-dropdown',
                  expressionType: 'StringExpression',
                  show: (data) => checkShowNavigation(data, 'story'),
                  options: async (action, hyperCubeHandler) => {
                    const stories = await hyperCubeHandler.app.getStoryList();
                    return stories.map((story) => ({
                      value: story.qInfo.qId,
                      label: story.qMeta.title,
                    }));
                  },
                },
                websiteUrl: {
                  type: 'string',
                  expression: 'optional',
                  ref: 'navigation.websiteUrl',
                  translation: 'properties.website',
                  show: (data) => checkShowNavigation(data, 'websiteUrl'),
                },
                sameWindow: {
                  type: 'boolean',
                  ref: 'navigation.sameWindow',
                  translation: 'properties.sameWindow',
                  show: (data) => checkShowNavigation(data, 'sameWindow'),
                  defaultValue: false,
                },
                odagLink: {
                  type: 'string',
                  ref: 'navigation.odagLink',
                  component: 'dropdown',
                  translation: 'ExpressionEditor.SetExpresions.OdagAppLinks',
                  options: async (action, hyperCubeHandler) => {
                    const odagLinks = await senseNavigation.getOdagLinks(hyperCubeHandler.app);
                    return odagLinks
                      .filter((link) => link.properties.type === 'odaglink')
                      .map((odagLink) => ({
                        label: odagLink.properties.data.name,
                        value: odagLink.properties.data.id,
                      }));
                  },
                  show: (data) => checkShowNavigation(data, 'odagLink'),
                },
              },
            },
          },
        },
        enableCondition: {
          type: 'items',
          translation: 'properties.enableConditionSection',
          items: {
            useCondition: {
              type: 'boolean',
              component: 'switch',
              translation: 'properties.enableToggle',
              ref: 'useEnabledCondition',
              options: [
                {
                  value: true,
                  translation: 'properties.on',
                },
                {
                  value: false,
                  translation: 'properties.off',
                },
              ],
            },
            condition: {
              ref: 'enabledCondition',
              translation: 'properties.enableCondition',
              type: 'integer',
              expression: 'optional',
              show: (data) => data.useEnabledCondition,
            },
          },
        },
        settings: {
          component: 'expandable-items',
          translation: 'Common.Appearance',
          uses: 'settings',
          items: {
            general: {
              type: 'items',
              translation: 'properties.general',
              items: {
                showTitles: {},
                details: {
                  show: false,
                },
                cellNavMenu: {
                  show: false,
                },
                label: {
                  component: 'string',
                  ref: 'style.label',
                  translation: 'Common.Label',
                  expression: 'optional',
                },
              },
            },
            font: {
              grouped: true,
              type: 'items',
              translation: 'properties.font',
              items: {
                sizeAndColor: {
                  type: 'items',
                  items: {
                    fontSize: {
                      component: 'slider',
                      type: 'number',
                      ref: 'style.font.size',
                      translation: 'properties.fontSize',
                      min: 0.2,
                      max: 1,
                      step: 0.01,
                    },
                    useFontColorExpression: {
                      ref: 'style.font.useColorExpression',
                      type: 'boolean',
                      translation: 'properties.fontColor',
                      component: 'dropdown',
                      options: colorOptions,
                    },
                    colorPicker: {
                      component: 'color-picker',
                      type: 'object',
                      ref: 'style.font.color',
                      translation: 'properties.color',
                      dualOutput: true,
                      show: (data) => !propertyResolver.getValue(data, 'style.font.useColorExpression'),
                    },
                    colorExpression: {
                      component: 'string',
                      type: 'string',
                      ref: 'style.font.colorExpression',
                      translation: 'Common.Expression',
                      expression: 'optional',
                      show: (data) => propertyResolver.getValue(data, 'style.font.useColorExpression'),
                    },
                  },
                },
                stylingAndAlign: {
                  type: 'items',
                  items: {
                    fontStyling: {
                      component: 'item-selection-list',
                      type: 'string',
                      ref: 'style.font.style',
                      translation: 'properties.textStyle',
                      horizontal: true,
                      multipleSelect: true,
                      items: [
                        {
                          component: 'icon-item',
                          icon: 'bold',
                          value: 'bold',
                          translation: 'Common.bold',
                          labelPlacement: 'bottom',
                        },
                        {
                          component: 'icon-item',
                          icon: 'italic',
                          value: 'italic',
                          translation: 'Common.italic',
                          labelPlacement: 'bottom',
                        },
                        {
                          component: 'icon-item',
                          icon: 'underline',
                          value: 'underline',
                          translation: 'Common.underline',
                          labelPlacement: 'bottom',
                        },
                      ],
                    },
                    textAlign: {
                      component: 'item-selection-list',
                      type: 'string',
                      ref: 'style.font.align',
                      translation: 'properties.Alignment',
                      horizontal: true,
                      items: [
                        {
                          component: 'icon-item',
                          icon: 'align_left',
                          value: 'left',
                          translation: 'properties.dock.left',
                          labelPlacement: 'bottom',
                        },
                        {
                          component: 'icon-item',
                          icon: 'align_center',
                          value: 'center',
                          translation: 'Common.Center',
                          labelPlacement: 'bottom',
                        },
                        {
                          component: 'icon-item',
                          icon: 'align_right',
                          value: 'right',
                          translation: 'properties.dock.right',
                          labelPlacement: 'bottom',
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
              type: 'items',
              translation: 'properties.background',
              items: {
                backgroundColor: {
                  type: 'items',
                  items: {
                    useColorExpression: {
                      ref: 'style.background.useColorExpression',
                      type: 'boolean',
                      translation: 'AppDetails.SheetBackgroundColor',
                      component: 'dropdown',
                      options: colorOptions,
                    },
                    colorPicker: {
                      component: 'color-picker',
                      type: 'object',
                      ref: 'style.background.color',
                      translation: 'properties.color',
                      dualOutput: true,
                      show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
                    },
                    colorExpression: {
                      component: 'string',
                      type: 'string',
                      ref: 'style.background.colorExpression',
                      translation: 'Common.Expression',
                      expression: 'optional',
                      show: (data) => propertyResolver.getValue(data, 'style.background.useColorExpression'),
                    },
                  },
                },
                backgroundImage: {
                  type: 'items',
                  items: {
                    useBackgroundImage: {
                      ref: 'style.background.useImage',
                      type: 'boolean',
                      translation: 'properties.backgroundImage.use',
                      component: 'switch',
                      options: toggleOptions,
                    },
                    backgroundUrl: {
                      ref: 'style.background.url.qStaticContentUrlDef.qUrl',
                      layoutRef: 'style.background.url.qStaticContentUrl.qUrl',
                      schemaIgnore: true,
                      translation: 'Common.Image',
                      tooltip: { select: 'properties.media.select', remove: 'properties.media.removeBackground' },
                      type: 'string',
                      component: 'media',
                      show(data) {
                        return propertyResolver.getValue(data, 'style.background.useImage');
                      },
                    },
                    backgroundSize: {
                      ref: 'style.background.size',
                      translation: 'properties.backgroundImage.size',
                      type: 'string',
                      component: 'dropdown',
                      options: [
                        {
                          value: 'auto',
                          translation: 'properties.backgroundImage.originalSize',
                        },
                        {
                          value: 'alwaysFit',
                          translation: 'properties.backgroundImage.sizeAlwaysFit',
                        },
                        {
                          value: 'fitWidth',
                          translation: 'properties.backgroundImage.sizeFitWidth',
                        },
                        {
                          value: 'fitHeight',
                          translation: 'properties.backgroundImage.sizeFitHeight',
                        },
                        {
                          value: 'fill',
                          translation: 'properties.backgroundImage.sizeStretch',
                        },
                        {
                          value: 'alwaysFill',
                          translation: 'properties.backgroundImage.sizeAlwaysFill',
                        },
                      ],
                      show(data) {
                        return (
                          propertyResolver.getValue(data, 'style.background.useImage') &&
                          !!propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl')
                        );
                      },
                    },
                    backgroundPosition: {
                      ref: 'style.background.position',
                      translation: 'Common.Position',
                      type: 'string',
                      component: 'align-matrix',
                      show(data) {
                        return (
                          propertyResolver.getValue(data, 'style.background.useImage') &&
                          propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl') &&
                          propertyResolver.getValue(data, 'style.background.size') !== 'fill'
                        );
                      },
                      currentSize(data) {
                        return propertyResolver.getValue(data, 'style.background.size');
                      },
                    },
                  },
                },
              },
            },
            border: {
              type: 'items',
              grouped: true,
              translation: 'properties.border',
              items: {
                borderSettings: {
                  type: 'items',
                  items: {
                    useBorder: {
                      ref: 'style.border.useBorder',
                      type: 'boolean',
                      translation: 'properties.border.use',
                      component: 'switch',
                      options: toggleOptions,
                    },
                    borderRadius: {
                      component: 'slider',
                      show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
                      translation: 'properties.border.radius',
                      type: 'number',
                      ref: 'style.border.radius',
                      min: 0,
                      max: 1,
                      step: 0.01,
                    },
                    borderWidth: {
                      component: 'slider',
                      show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
                      type: 'number',
                      ref: 'style.border.width',
                      translation: 'properties.border.width',
                      min: 0,
                      max: 0.5,
                      step: 0.005,
                    },
                    colorDropdown: {
                      type: 'string',
                      show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
                      component: 'dropdown',
                      translation: 'properties.border.color',
                      ref: 'style.border.useColorExpression',
                      options: colorOptions,
                    },
                    colorPicker: {
                      component: 'color-picker',
                      type: 'object',
                      ref: 'style.border.color',
                      translation: 'properties.color',
                      dualOutput: true,
                      show: (data) =>
                        propertyResolver.getValue(data, 'style.border.useBorder') &&
                        !propertyResolver.getValue(data, 'style.border.useColorExpression'),
                    },
                    colorExpression: {
                      component: 'string',
                      type: 'string',
                      ref: 'style.border.colorExpression',
                      translation: 'Common.Expression',
                      show: (data) =>
                        propertyResolver.getValue(data, 'style.border.useBorder') &&
                        propertyResolver.getValue(data, 'style.border.useColorExpression'),
                      expression: 'optional',
                    },
                  },
                },
              },
            },
            icon: {
              type: 'items',
              grouped: true,
              translation: 'properties.icon',
              items: {
                iconSettings: {
                  type: 'items',
                  items: {
                    useIcon: {
                      ref: 'style.icon.useIcon',
                      type: 'boolean',
                      translation: 'properties.icon.use',
                      component: 'switch',
                      options: toggleOptions,
                    },
                    iconType: {
                      ref: 'style.icon.iconType',
                      component: 'expression-with-dropdown',
                      translation: 'properties.icon',
                      defaultValue: '',
                      options: luiIcons,
                      expressionType: 'StringExpression',
                      show: (data) => propertyResolver.getValue(data, 'style.icon.useIcon'),
                    },
                    iconPosition: {
                      ref: 'style.icon.position',
                      component: 'dropdown',
                      translation: 'Common.Position',
                      options: [
                        {
                          translation: 'properties.dock.left',
                          value: 'left',
                        },
                        {
                          translation: 'properties.dock.right',
                          value: 'right',
                        },
                      ],
                      show: (data) => propertyResolver.getValue(data, 'style.icon.useIcon'),
                    },
                  },
                },
              },
            },
            presentation: {
              type: 'items',
              grouped: false,
              translation: 'properties.presentation',
              items: {
                ButtonStyling: stylingPanelEnabled && styleEditor,
                // styleEditor: getStyleEditorDefinition(),
                // styleEditor: {
                //   ref: 'components',
                //   component: 'styling-panel',
                //   translation: 'LayerStyleEditor.component.styling',
                //   chartTitle: 'Object.ActionButton',
                //   subtitle: 'LayerStyleEditor.component.styling',
                //   useGeneral: true,
                //   useBackground: true,
                //   items: {
                //     labelSection: {
                //       component: 'panel-section',
                //       translation: 'Common.Label',
                //       items: {
                //         labelItems: {
                //           component: 'items',
                //           ref: 'components',
                //           key: 'general',
                //           items: {
                //             // fontWrapperItem: {
                //             //   component: 'inline-wrapper',
                //             //   items: {
                //             //     fontStyleItem: {
                //             //       component: 'font-style-buttons',
                //             //       width: false,
                //             //       ref: 'title.main.fontStyle',
                //             //       defaultValue: ['bold'],
                //             //     },
                //             //     fontSizeItem: {
                //             //       component: 'dropdown',
                //             //       ref: 'title.main.fontSize',
                //             //       options: () =>
                //             //         isEnabledIm2420 ? getFontSizes('title.main', themeStyleResolver) : fontSizeOptions,
                //             //       defaultValue: () =>
                //             //         isEnabledIm2420
                //             //           ? getPlaceholder('title.main.fontSize', 'fontSize', themeStyleResolver, false)
                //             //           : getPlaceholderFromTheme('title.main.fontSize', chartType),
                //             //     },
                //             //     fontColorItem: {
                //             //       component: 'color-picker',
                //             //       width: false,
                //             //       ref: 'title.main.color',
                //             //       defaultValue: { color: getPlaceholderFromTheme('title.main.color', chartType) },
                //             //     },
                //             //   },
                //             // },
                //           },
                //         },
                //       },
                //     },
                //     // label: {
                //     // component: 'panel-section',
                //     // translation: 'Common.Label',
                //     // key: 'chart',
                //     // items: {
                //     //   fontFamilyItem: {
                //     //     type: 'string',
                //     //     component: 'dropdown',
                //     //     ref: 'style.font.fontFamily',
                //     //     options: styleFormatter.fontFamilyOptions,
                //     //     defaultValue: styleDefaults.FONT_FAMILY,
                //     //   },
                //     //   fontWrapperItem: {
                //     //     component: 'inline-wrapper',
                //     //     type: 'items',
                //     //     items: {
                //     //       fontStyleItem: {
                //     //         component: 'font-style-buttons',
                //     //         type: 'string',
                //     //         width: false,
                //     //         ref: 'style.font.labelStyle',
                //     //         multipleSelect: true,
                //     //         defaultValue: ['bold'],
                //     //       },
                //     //       fontSizeItem: {
                //     //         component: 'dropdown',
                //     //         ref: 'title.main.fontSize',
                //     //         // options: () =>
                //     //         //   isEnabledIm2420 ? getFontSizes('title.main', themeStyleResolver) : fontSizeOptions,
                //     //         // defaultValue: () =>
                //     //         //   isEnabledIm2420
                //     //         //     ? getPlaceholder('title.main.fontSize', 'fontSize', themeStyleResolver, false)
                //     //         //     : getPlaceholderFromTheme('title.main.fontSize', chartType),
                //     //       },
                //     //       fontColorItem: {
                //     //         component: 'color-picker',
                //     //         width: false,
                //     //         ref: 'title.main.color',
                //     //         // defaultValue: { color: getPlaceholderFromTheme('title.main.color', chartType) },
                //     //       },
                //     //     },
                //     //   },
                //     //   labelFontSize: {
                //     //     component: 'slider',
                //     //     type: 'number',
                //     //     ref: 'font.size',
                //     //     translation: 'properties.fontSize',
                //     //     min: 0.2,
                //     //     max: 1,
                //     //     step: 0.01,
                //     //     defaultValue: 0.5,
                //     //   },
                //     //   fontSizeAndColor: {
                //     //     component: 'inline-wrapper',
                //     //     type: 'items',
                //     //     items: {
                //     //       useFontColorExpression: {
                //     //         ref: 'font.useColorExpression',
                //     //         type: 'boolean',
                //     //         translation: 'properties.fontColor',
                //     //         component: 'dropdown',
                //     //         width: 14,
                //     //         options: colorOptions,
                //     //       },
                //     //       colorPicker: {
                //     //         component: 'color-picker',
                //     //         type: 'object',
                //     //         ref: 'font.color',
                //     //         translation: 'properties.color',
                //     //         width: 12,
                //     //         show: (data) => !propertyResolver.getValue(data, 'font.useColorExpression'),
                //     //       },
                //     //       colorExpression: {
                //     //         component: 'input-field-expression',
                //     //         type: 'string',
                //     //         ref: 'font.colorExpression',
                //     //         translation: 'Common.Expression',
                //     //         show: (data) => propertyResolver.getValue(data, 'font.useColorExpression'),
                //     //       },
                //     //     },
                //     //   },
                //     // },
                //     // },
                //     // backgroundOptions: {
                //     //   // Add Background option title here
                //     //   component: 'panel-section',
                //     //   translation: 'properties.color',
                //     //   items: {
                //     //     useColorExpression: {
                //     //       ref: 'style.background.useColorExpression',
                //     //       type: 'boolean',
                //     //       component: 'dropdown',
                //     //       options: colorOptions,
                //     //     },
                //     //     colorPicker: {
                //     //       component: 'color-picker',
                //     //       type: 'object',
                //     //       ref: 'style.background.color',
                //     //       translation: 'library.colors.colorUsed',
                //     //       dualOutput: true,
                //     //       show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
                //     //     },
                //     //     colorExpression: {
                //     //       component: 'string',
                //     //       type: 'string',
                //     //       ref: 'style.background.colorExpression',
                //     //       translation: 'Common.Expression',
                //     //       expression: 'optional',
                //     //       show: (data) => propertyResolver.getValue(data, 'style.background.useColorExpression'),
                //     //     },
                //     //   },
                //     // },
                //     // backgroundImage: {
                //     //   // component: 'items',
                //     //   component: 'panel-section',
                //     //   translation: 'properties.backgroundImage',
                //     //   items: {
                //     //     backgroundImageItems: {
                //     //       key: 'general',
                //     //       ref: 'components',
                //     //       component: 'items',
                //     //       items: {
                //     //         backgroundItem: {
                //     //           component: 'dropdown',
                //     //           ref: 'bgImage.mode',
                //     //           defaultValue: 'none',
                //     //           options: [
                //     //             {
                //     //               value: 'none',
                //     //               translation: 'Background.None',
                //     //             },
                //     //             {
                //     //               value: 'media',
                //     //               translation: 'MediaLibrary.Header',
                //     //             },
                //     //           ],
                //     //           // change(data, handler, properties, args) {
                //     //           //   const bgImageComp = args?.properties?.components?.find(
                //     //           //     (comp) => comp.key === 'actionbutton'
                //     //           //   )?.bgImage;
                //     //           //   if (bgImageComp) {
                //     //           //     bgImageComp.mediaUrl = { qStaticContentUrlDef: '' };
                //     //           //   }
                //     //           // },
                //     //         },
                //     //         // mediaLibraryItem: {
                //     //         //   component: 'media-library-button',
                //     //         //   ref: 'bgImage.mediaUrl',
                //     //         //   translation: 'MediaLibrary.Header',
                //     //         //   itemKey: 'actionbutton',
                //     //         //   show(data, handler, args) {
                //     //         //     if (data.bgImage?.mode === 'media') {
                //     //         //       return true;
                //     //         //     }
                //     //         //     return false;
                //     //         //   },
                //     //         // },
                //     //         // sizeItem: {
                //     //         //   component: 'dropdown',
                //     //         //   ref: 'bgImage.sizing',
                //     //         //   defaultValue: 'originalSize',
                //     //         //   change(data) {
                //     //         //     if (data?.bgImage?.position) {
                //     //         //       data.bgImage.position = 'center-center';
                //     //         //     }
                //     //         //   },
                //     //         //   show(data, handler, args) {
                //     //         //     const bgImageComp = args.properties.components.find(
                //     //         //       (comp) => comp.key === 'actionbutton'
                //     //         //     ).bgImage;
                //     //         //     if (
                //     //         //       data?.bgImage?.mode !== 'none' &&
                //     //         //       bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl
                //     //         //     ) {
                //     //         //       return true;
                //     //         //     }
                //     //         //     return false;
                //     //         //   },
                //     //         //   options: [
                //     //         //     {
                //     //         //       value: 'originalSize',
                //     //         //       translation: 'properties.backgroundImage.originalSize',
                //     //         //     },
                //     //         //     {
                //     //         //       value: 'alwaysFit',
                //     //         //       translation: 'properties.backgroundImage.sizeAlwaysFit',
                //     //         //     },
                //     //         //     {
                //     //         //       value: 'fitWidth',
                //     //         //       translation: 'properties.backgroundImage.sizeFitWidth',
                //     //         //     },
                //     //         //     {
                //     //         //       value: 'fitHeight',
                //     //         //       translation: 'properties.backgroundImage.sizeFitHeight',
                //     //         //     },
                //     //         //     {
                //     //         //       value: 'stretchFit',
                //     //         //       translation: 'properties.backgroundImage.sizeStretch',
                //     //         //     },
                //     //         //     {
                //     //         //       value: 'alwaysFill',
                //     //         //       translation: 'properties.backgroundImage.sizeAlwaysFill',
                //     //         //     },
                //     //         //   ],
                //     //         // },
                //     //         // positionGridItem: {
                //     //         //   label: 'Position Grid',
                //     //         //   component: 'position-grid',
                //     //         //   ref: 'bgImage.position',
                //     //         //   defaultValue: 'center-center',
                //     //         //   show(data, handler, args) {
                //     //         //     const bgImageComp = args.properties.components.find(
                //     //         //       (comp) => comp.key === 'actionbutton'
                //     //         //     ).bgImage;
                //     //         //     if (
                //     //         //       data?.bgImage?.mode !== 'none' &&
                //     //         //       bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl &&
                //     //         //       data?.bgImage?.sizing !== 'stretchFit'
                //     //         //     ) {
                //     //         //       return true;
                //     //         //     }
                //     //         //     return false;
                //     //         //   },
                //     //         // },
                //     //       },
                //     //     },
                //     //   },
                //     // },
                //     // backgroundBorder: {
                //     //   component: 'panel-section',
                //     //   translation: 'properties.background.border',
                //     //   items: {
                //     //     backgroundBorderItem: {
                //     //       component: 'items',
                //     //       ref: 'components',
                //     //       key: 'general',
                //     //       items: {
                //     //         useBorder: {
                //     //           ref: 'border.useBorder',
                //     //           type: 'boolean',
                //     //           translation: 'properties.border.use',
                //     //           component: 'switch',
                //     //           options: toggleOptions,
                //     //           defaultValue: false,
                //     //         },
                //     //         colorDropdown: {
                //     //           type: 'string',
                //     //           component: 'dropdown',
                //     //           translation: 'properties.border.color',
                //     //           ref: 'border.useColorExpression',
                //     //           options: colorOptions,
                //     //           show: (data) => propertyResolver.getValue(data, 'border.useBorder'),
                //     //         },
                //     //         colorPicker: {
                //     //           component: 'color-picker',
                //     //           type: 'object',
                //     //           ref: 'border.color',
                //     //           translation: 'properties.color',
                //     //           dualOutput: true,
                //     //           show: (data) =>
                //     //             propertyResolver.getValue(data, 'border.useBorder') &&
                //     //             !propertyResolver.getValue(data, 'border.useColorExpression'),
                //     //         },
                //     //         colorExpression: {
                //     //           component: 'input-field-expression',
                //     //           ref: 'border.colorExpression',
                //     //           translation: 'Common.Expression',
                //     //           show: (data) =>
                //     //             propertyResolver.getValue(data, 'border.useBorder') &&
                //     //             propertyResolver.getValue(data, 'border.useColorExpression'),
                //     //         },
                //     //         borderWidth: {
                //     //           component: 'slider',
                //     //           show: (data) => propertyResolver.getValue(data, 'border.useBorder'),
                //     //           type: 'number',
                //     //           ref: 'border.width',
                //     //           translation: 'properties.border.width',
                //     //           min: 0,
                //     //           max: 0.5,
                //     //           step: 0.005,
                //     //         },
                //     //         borderRadius: {
                //     //           component: 'slider',
                //     //           show: (data) => propertyResolver.getValue(data, 'border.useBorder'),
                //     //           translation: 'properties.border.radius',
                //     //           type: 'number',
                //     //           ref: 'border.radius',
                //     //           min: 0,
                //     //           max: 1,
                //     //           step: 0.01,
                //     //         },
                //     //       },
                //     //     },
                //     //   },
                //     // },
                //   },
                // },
              },
              show: () => stylingPanelEnabled,
            },
          },
        },
      },
    },
    importProperties,
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
