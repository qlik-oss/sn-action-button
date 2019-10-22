import actions, { checkShowAction } from './utils/actions';
import navigationActions, { checkShowNavigation } from './utils/navigation-actions';
import propertyResolver from './utils/property-resolver';

export default function ext(/* env */) {
  return {
    definition: {
      type: 'items',
      component: 'accordion',
      items: {
        actions: {
          type: 'items',
          label: 'Actions',
          items: {
            actions: {
              type: 'array',
              label: 'Actions',
              ref: 'actions',
              itemTitleRef: (data, index) => {
                const act = actions.find(action => data.actionType === action.value);
                return (act && act.label) || `Action ${index + 1}`;
              },
              allowAdd: true,
              allowRemove: true,
              addTranslation: 'Add Item',
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
                  label: 'showSystemVariables',
                  defaultValue: false,
                  show: data => checkShowAction(data, 'variable'),
                },
                softLock: {
                  type: 'boolean',
                  ref: 'softLock',
                  label: 'Overwrite locked selections',
                  defaultValue: false,
                  show: data => checkShowAction(data, 'softLock'),
                },
                value: {
                  // TODO: expressions
                  type: 'string',
                  ref: 'value',
                  component: 'string',
                  label: 'Value',
                  show: data => checkShowAction(data, 'value'),
                },
              },
            },
            navigation: {
              component: 'expandable-items',
              items: {
                navigation: {
                  label: 'Navigation',
                  type: 'items',
                  items: {
                    action: {
                      ref: 'navigation.action',
                      label: 'Navigation action',
                      component: 'dropdown',
                      defaultValue: null,
                      options: navigationActions,
                    },
                    sheetId: {
                      // TODO: expressions
                      type: 'string',
                      ref: 'navigation.sheet',
                      label: 'Sheet Id',
                      show: data => checkShowNavigation(data, 'sheetId'),
                    },
                    sheet: {
                      type: 'string',
                      ref: 'navigation.sheet',
                      label: 'Sheet',
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
                      label: 'Story',
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
                      label: 'Website Url',
                      show: data => checkShowNavigation(data, 'websiteUrl'),
                    },
                    sameWindow: {
                      type: 'boolean',
                      ref: 'navigation.sameWindow',
                      label: 'Open in same window',
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
          label: 'Enable condition',
          items: {
            usecondition: {
              type: 'boolean',
              component: 'switch',
              label: 'Use enable condition',
              ref: 'style.useEnabledCondition',
              options: [{
                value: true,
                label: 'On'
              }, {
                value: false,
                label: 'Off'
              }]
            },
            condition: {
              ref: 'style.enabledCondition',
              label: 'Enable condition',
              type: 'integer',
              expression: 'optional',
              show(data) {
                return data.style.useEnabledCondition === true;
              },
            },
          },
        },
        settings: {
          component: 'expandable-items',
          translation: 'Appearance',
          items: {
            general: {
              type: 'items',
              translation: 'General',
              items: [
                {
                  component: 'string',
                  ref: 'style.label',
                  translation: 'Label',
                },
              ],
            },
            font: {
              grouped: true,
              type: 'items',
              translation: 'Font',
              items: [
                {
                  component: 'integer',
                  ref: 'style.fontSize',
                  translation: 'Font size',
                },
                {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.fontColor',
                  translation: 'Font color',
                  dualOutput: true,
                  show: true,
                },
              ],
            },
            background: {
              grouped: true,
              type: 'items',
              translation: 'Background',
              items: {
                colorPicker: {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.backgroundColor',
                  translation: 'Background color',
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
                  defaultValue: 'auto',
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
                  defaultValue: 'topLeft',
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
