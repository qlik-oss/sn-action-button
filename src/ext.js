import actions from './utils/actions';
import navigationActions from './utils/navigation-actions';

export const checkShow = (data, field) => {
  const act = actions.find(action => data.actionType === action.value);
  return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
};

export const checkShowNav = (data, field) => {
  const nav = navigationActions.find(navigation => data.navigation.action === navigation.value);
  return nav && nav.requiredInput && nav.requiredInput.indexOf(field) !== -1;
};

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
                  show: data => checkShow(data, 'bookmark'),
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
                  show: data => checkShow(data, 'field'),
                },
                softLock: {
                  type: 'boolean',
                  ref: 'softLock',
                  label: 'Overwrite locked selections',
                  defaultValue: false,
                  show: data => checkShow(data, 'softLock'),
                },
                value: {
                  // TODO: expressions
                  type: 'string',
                  ref: 'value',
                  component: 'string',
                  label: 'Value',
                  show: data => checkShow(data, 'value'),
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
                      show: data => checkShowNav(data, 'sheetId'),
                    },
                    {
                      type: 'string',
                      ref: 'navigation.sheet',
                      label: 'Sheet',
                      component: 'dropdown',
                      show: data => checkShowNav(data, 'sheet'),
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
                      show: data => checkShowNav(data, 'story'),
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
                      show: data => checkShowNav(data, 'websiteUrl'),
                    },
                    {
                      type: 'boolean',
                      ref: 'navigation.sameWindow',
                      label: 'Open in same window',
                      show: data => checkShowNav(data, 'websiteUrl'),
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
