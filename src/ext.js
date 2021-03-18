import actions, { checkShowAction } from './utils/actions';
import navigationActions, { checkShowNavigation } from './utils/navigation-actions';
import propertyResolver from './utils/property-resolver';
import importProperties from './utils/conversion';
import luiIcons from './utils/lui-icons';

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

export default function ext({ translator }) {
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
                  options: actions,
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
                  options: navigationActions,
                  dropdownOnly: true,
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
                  show: (data) => checkShowNavigation(data, 'websiteUrl'),
                  defaultValue: false,
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
