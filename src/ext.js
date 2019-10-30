import actions, { checkShowAction } from './utils/actions';
import navigationActions, { checkShowNavigation } from './utils/navigation-actions';
import propertyResolver from './utils/property-resolver';

export default function ext({ translator }) {
  return {
    definition: {
      type: 'items',
      component: 'accordion',
      items: {
        actions: {
          type: 'items',
          translation: 'Object.ActionButton.Actions',
          items: {
            actions: {
              type: 'array',
              translation: 'Object.ActionButton.Actions',
              ref: 'actions',
              itemTitleRef: data => {
                const act = actions.find(action => data.actionType === action.value);
                return translator.get((act && act.translation) || 'Object.ActionButton.NewAction');
              },
              allowAdd: true,
              allowRemove: true,
              addTranslation: 'Object.ActionButton.AddAction',
              items: {
                actionType: {
                  // TODO: searchable dropdown
                  type: 'string',
                  ref: 'actionType',
                  component: 'dropdown',
                  defaultValue: null,
                  options: actions,
                },
                bookmark: {
                  // TODO: searchable dropdown
                  type: 'string',
                  ref: 'bookmark',
                  component: 'dropdown',
                  defaultValue: null,
                  options: async (action, hyperCubeHandler) => {
                    const bms = await hyperCubeHandler.app.getBookmarkList();
                    return bms.map(bookmark => ({
                      label: bookmark.qData.title,
                      value: bookmark.qInfo.qId,
                    }));
                  },
                  show: data => checkShowAction(data, 'bookmark'),
                },
                field: {
                  // TODO: searchable dropdown
                  type: 'string',
                  ref: 'field',
                  component: 'dropdown',
                  defaultValue: null,
                  options: async (action, hyperCubeHandler) => {
                    const fields = await hyperCubeHandler.app.getFieldList();
                    return fields.map(field => ({
                      label: field.qName,
                      value: field.qName,
                    }));
                  },
                  show: data => checkShowAction(data, 'field'),
                },
                variable: {
                  // TODO: searchable dropdown
                  type: 'string',
                  ref: 'variable',
                  component: 'dropdown',
                  defaultValue: null,
                  options: async (action, hyperCubeHandler) => {
                    const variables = await hyperCubeHandler.app.getVariableList();
                    return variables
                      .filter(v => !v.qIsReserved || (v.qIsReserved && action.showSystemVariables))
                      .map(v => ({
                        label: v.qName,
                        value: v.qName,
                      }));
                  },
                  show: data => checkShowAction(data, 'variable'),
                },
                showSystemVariables: {
                  type: 'boolean',
                  ref: 'showSystemVariables',
                  translation: 'ExpressionEditor.SystemVariables',
                  defaultValue: false,
                  show: data => checkShowAction(data, 'variable'),
                },
                softLock: {
                  type: 'boolean',
                  ref: 'softLock',
                  translation: 'Object.ActionButton.Softlock',
                  defaultValue: false,
                  show: data => checkShowAction(data, 'softLock'),
                },
                value: {
                  type: 'string',
                  ref: 'value',
                  component: 'string',
                  translation: 'properties.value',
                  expression: 'optional',
                  show: data => checkShowAction(data, 'value'),
                },
              },
            },
            navigation: {
              component: 'expandable-items',
              items: {
                navigation: {
                  translation: 'Object.ActionButton.Navigation',
                  type: 'items',
                  items: {
                    action: {
                      ref: 'navigation.action',
                      translation: 'Object.ActionButton.Navigation',
                      component: 'dropdown',
                      defaultValue: null,
                      options: navigationActions,
                    },
                    sheetId: {
                      type: 'string',
                      ref: 'navigation.sheet',
                      translation: 'properties.sheet',
                      expression: 'optional',
                      show: data => checkShowNavigation(data, 'sheetId'),
                    },
                    sheet: {
                      type: 'string',
                      ref: 'navigation.sheet',
                      translation: 'properties.sheet',
                      component: 'dropdown',
                      show: data => checkShowNavigation(data, 'sheet'),
                      options: async (action, hyperCubeHandler) => {
                        const sheets = await hyperCubeHandler.app.getSheetList();
                        return sheets.map(sheet => ({
                          value: sheet.qInfo.qId,
                          label: sheet.qMeta.title,
                        }));
                      },
                    },
                    story: {
                      type: 'string',
                      ref: 'navigation.story',
                      translation: 'properties.story',
                      component: 'dropdown',
                      show: data => checkShowNavigation(data, 'story'),
                      options: async (action, hyperCubeHandler) => {
                        const stories = await hyperCubeHandler.app.getStoryList();
                        return stories.map(story => ({
                          value: story.qInfo.qId,
                          label: story.qMeta.title,
                        }));
                      },
                    },
                    websiteUrl: {
                      type: 'string',
                      ref: 'navigation.websiteUrl',
                      translation: 'properties.website',
                      show: data => checkShowNavigation(data, 'websiteUrl'),
                    },
                    sameWindow: {
                      type: 'boolean',
                      ref: 'navigation.sameWindow',
                      translation: 'properties.sameWindow',
                      show: data => checkShowNavigation(data, 'websiteUrl'),
                      defaultValue: false,
                    },
                  },
                },
              },
            },
          },
        },
        enableCondition: {
          type: 'items',
          translation: 'properties.enableConditionSection',
          items: {
            usecondition: {
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
              show(data) {
                return data.useEnabledCondition === true;
              },
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
              items: [
                {
                  component: 'string',
                  ref: 'style.label',
                  translation: 'Common.Label',
                  expression: 'optional',
                },
              ],
            },
            font: {
              grouped: true,
              type: 'items',
              translation: 'properties.font',
              items: [
                {
                  component: 'string',
                  type: 'string',
                  ref: 'style.fontSize',
                  translation: 'properties.fontSize',
                  expression: 'optional',
                },
                {
                  type: 'items',
                  items: {
                    useFontColorExporesison: {
                      ref: 'style.useFontColorExpression',
                      type: 'boolean',
                      translation: 'Font color expression',
                      component: 'switch',
                      defaultValue: false,
                      options: [
                        {
                          value: true,
                          translation: 'On',
                        },
                        {
                          value: false,
                          translation: 'Off',
                        },
                      ],
                    },
                    fontColorExpression: {
                      component: 'string',
                      type: 'string',
                      ref: 'style.fontColorExpression',
                      translation: 'Expression',
                      expression: 'optional',
                      show(data) {
                        return data.style.useFontColorExpression;
                      },
                    },
                    fontColorPicker: {
                      component: 'color-picker',
                      type: 'object',
                      ref: 'style.fontColor',
                      translation: 'Font color',
                      dualOutput: true,
                      show(data) {
                        return !data.style.useFontColorExpression;
                      },
                    },
                  },
                },
              ],
            },
            background: {
              grouped: true,
              type: 'items',
              translation: 'properties.background',
              items: {
                colorPicker: {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.backgroundColor',
                  translation: 'AppDetails.SheetBackgroundColor',
                  dualOutput: true,
                  show: true,
                },
                useBackgroundImage: {
                  ref: 'style.background.isUsed',
                  type: 'boolean',
                  translation: 'properties.backgroundImage.use',
                  component: 'switch',
                  defaultValue: false,
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
                backgroundUrl: {
                  ref: 'style.background.url.qStaticContentUrlDef.qUrl',
                  layoutRef: 'style.background.url.qStaticContentUrl.qUrl',
                  schemaIgnore: true,
                  translation: 'Common.Image',
                  tooltip: { select: 'properties.media.select', remove: 'properties.media.removeBackground' },
                  type: 'string',
                  component: 'media',
                  defaultValue: '',
                  show(data) {
                    return propertyResolver.getValue(data, 'style.background.isUsed');
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
                  ],
                  show(data) {
                    return (
                      propertyResolver.getValue(data, 'style.background.isUsed') &&
                      propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl')
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
                      propertyResolver.getValue(data, 'style.background.isUsed') &&
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
      },
    },
    support: {
      export: !1,
      exportData: !1,
      snapshot: !1,
      viewData: !1,
    },
  };
}
