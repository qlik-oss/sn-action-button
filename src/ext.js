import actions from './utils/actions';

export const checkShow = (data, field) => {
  const act = actions.find(action => data.actionType === action.value);
  return act && act.requiredInput && act.requiredInput.indexOf(field) !== -1;
};

export const getValue = (dataContainer, reference, defaultValue) => {
  const steps = reference.split('.');
  let i;
  if (dataContainer === undefined) {
    return defaultValue;
  }
  for (i = 0; i < steps.length; ++i) {
    if (typeof dataContainer[steps[i]] === 'undefined') {
      return defaultValue;
    }
    dataContainer = dataContainer[steps[i]];
  }

  return dataContainer;
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
                const bms = await hyperCubeHandler.app.enigmaModel.getBookmarkList();
                return bms.map(bookmark => ({
                  label: bookmark.qData.title,
                  value: bookmark.qInfo.qId,
                }));
              },
              show: data => checkShow(data, 'bookmark'),
            },
            field: {
              // TODO: searchable dropdown
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
            variable: {
              // TODO: searchable dropdown
              type: 'string',
              ref: 'variable',
              component: 'string',
              label: 'Variable name',
              show: data => checkShow(data, 'variable'),
            },
            value: {
              // TODO: expressions
              type: 'string',
              ref: 'value',
              component: 'string',
              label: 'Value',
              show: data => checkShow(data, 'value'),
            },
            softLock: {
              type: 'boolean',
              ref: 'softLock',
              label: 'Overwrite locked selections',
              defaultValue: false,
              show: data => checkShow(data, 'softLock'),
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
                    return getValue(data, 'style.background.isUsed');
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
                      getValue(data, 'style.background.isUsed')
                      && getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl')
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
                      getValue(data, 'style.background.isUsed')
                      && getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl')
                      && getValue(data, 'style.background.size') !== 'fill'
                    );
                  },
                  currentSize(data) {
                    return getValue(data, 'style.background.size');
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
