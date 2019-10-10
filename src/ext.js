import actions from './utils/actions';

export const checkShow = (data, field) => {
  const act = actions.find(action => data.actionType === action.value);
  return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
};

export default function ext(/* env */) {
  return {
    definition: {
      type: 'items',
      component: 'accordion',
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
                  placeholder: 'My button',
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
