export default function ext(/* env */) {
  return {
    definition: {
      type: 'items',
      component: 'accordion',
      items: {
        // actions: {
        //   type: 'array',
        //   translation: 'Actions',
        // },
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
