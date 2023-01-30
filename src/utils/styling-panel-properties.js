import styleFormatter from './style-formatter';
import styleDefaults from '../style-defaults';

const styleEditorDefinition = {
  // key: 'chart',
  ref: 'components',
  component: 'styling-panel',
  translation: 'LayerStyleEditor.component.styling',
  chartTitle: 'Object.ActionButton',
  subtitle: 'LayerStyleEditor.component.styling',
  useGeneral: true,
  useBackground: true,
  // defaultValues: {},
  items: {
    labelSection: {
      component: 'panel-section',
      translation: 'Common.Label',
      items: {
        fontFamily: {
          component: 'dropdown',
          ref: 'style.font.fontFamily',
          options: styleFormatter.fontFamilyOptions,
          defaultValue: styleDefaults.FONT_FAMILY,
          // defaultValue: () =>
          //   isEnabledIm2420
          //     ? getPlaceholder('title.main.fontFamily', 'fontFamily', themeStyleResolver, true)
          //     : getPlaceholderFromTheme('title.main.fontFamily', chartType),
        },
        fontWrapper: {
          type: 'items',
          grouped: true,
          component: 'inline-wrapper',
          items: {
            fontStyleItem: {
              component: 'font-style-buttons',
              width: false,
              ref: 'style.font.labelStyle',
              defaultValue: ['bold'],
            },
          },
        },
      },
    },
  },
};

export default styleEditorDefinition;