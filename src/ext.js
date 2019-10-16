import actions, { checkShowAction } from './utils/actions';
import navigationActions, { checkShowNavigation } from './utils/navigation-actions';

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
                  type: 'string',
                  ref: 'actionType',
                  component: 'dropdown',
                  defaultValue: null,
                  options: actions,
                },
                bookmark: {
                  type: 'string',
                  ref: 'bookmark',
                  component: 'dropdown',
                  defaultValue: null,
                  options: async (action, hyperCubeHandler) => {
                    const bms = await hyperCubeHandler.app.enigmaModel.getBookmarkList();
                    return bms.map(bookmark => ({
                      label: bookmark.qData.title,
                      value: bookmark.qInfo.qId,
                    }));
                  },
                  show: data => checkShowAction(data, 'bookmark'),
                },
                field: {
                  type: 'string',
                  ref: 'field',
                  component: 'dropdown',
                  defaultValue: null,
                  options: async (action, hyperCubeHandler) => {
                    const fields = await hyperCubeHandler.app.enigmaModel.getFieldList();
                    return fields.map(field => ({
                      label: field.qName,
                      value: field.qName,
                    }));
                  },
                  show: data => checkShowAction(data, 'field'),
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
                  items: [
                    {
                      ref: 'navigation.action',
                      label: 'Navigation action',
                      component: 'dropdown',
                      defaultValue: null,
                      options: navigationActions,
                    },
                    {
                      // TODO: expressions
                      type: 'string',
                      ref: 'navigation.sheet',
                      label: 'Sheet Id',
                      show: data => checkShowNavigation(data, 'sheetId'),
                    },
                    {
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
                    {
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
                    {
                      type: 'string',
                      ref: 'navigation.websiteUrl',
                      label: 'Website Url',
                      show: data => checkShowNavigation(data, 'websiteUrl'),
                    },
                    {
                      type: 'boolean',
                      ref: 'navigation.sameWindow',
                      label: 'Open in same window',
                      show: data => checkShowNavigation(data, 'websiteUrl'),
                      defaultValue: false,
                    },
                  ],
                },
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
                  defaultValue: '12',
                },
                {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.fontColor',
                  translation: 'Font color',
                  dualOutput: true,
                  show: true,
                  defaultValue: {
                    index: -1,
                    color: null,
                  },
                },
              ],
            },
            background: {
              grouped: true,
              type: 'items',
              translation: 'Background',
              items: [
                {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.backgroundColor',
                  translation: 'Background color',
                  dualOutput: true,
                  show: true,
                  defaultValue: {
                    index: -1,
                    color: null,
                  },
                },
              ],
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
