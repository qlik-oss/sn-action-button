export default {
  definition: {
    type: 'items',
    component: 'accordion',
    items: {
      data: {
        uses: 'data',
      },
      settings: {
        type: 'items',
        translation: 'Settings',
        items: {
          styling: {
            component: 'style-editor',
            translation: 'LayerStyleEditor.component.styling',
            subtitle: 'LayerStyleEditor.component.styling',
            resetBtnTranslation: 'LayerStyleEditor.component.resetAll',
            key: 'content',
            ref: 'components',
            defaultValues: {
              key: 'content',
              style: {
                fontColor: {
                  color: '#aeaeae',
                  index: -1,
                },
                fontSize: 15,
              },
            },
            items: {
              content: {
                components: 'items',
                type: 'items',
                items: {
                  fontColor: {
                    component: 'color-picker',
                  },
                  fontSize: {
                    show: true,
                    component: 'slider',
                    min: 4,
                    max: 48,
                    step: 1,
                    defaultValue: 15,
                  },
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
