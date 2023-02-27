import styleDefaults from './style-defaults';
import propertyResolver from './utils/property-resolver';
import { fontFamilyOptions, colorOptions } from './utils/style-utils';

export const getStyleEditorDefinition = () => ({
  items: {
    labelSection: {
      component: 'panel-section',
      translation: 'Common.Label',
      items: {
        labelItem: {
          items: {
            fontFamily: {
              component: 'dropdown',
              ref: 'style.font.fontFamily',
              options: fontFamilyOptions,
              defaultValue: styleDefaults.FONT_FAMILY,
            },
            fontWrapper: {
              component: 'inline-wrapper',
              type: 'items',
              grouped: true,
              items: {
                fontStyle: {
                  type: 'array',
                  component: 'font-style-buttons',
                  width: false,
                  ref: 'style.font.style',
                  defaultValue: ['bold'],
                },
                textAlign: {
                  component: 'text-align-buttons',
                  ref: 'style.font.align',
                  defaultValue: styleDefaults.TEXT_ALIGN,
                },
              },
            },
            fontSize: {
              component: 'slider',
              type: 'number',
              ref: 'style.font.size',
              translation: 'properties.fontSize',
              min: 0.2,
              max: 1,
              step: 0.01,
              defaultValue: 0.5,
            },
            fontColor: {
              items: {
                useFontColorExpression: {
                  ref: 'style.font.useColorExpression',
                  type: 'boolean',
                  translation: 'properties.fontColor',
                  component: 'dropdown',
                  width: 14,
                  options: colorOptions,
                },
                colorPicker: {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.font.color',
                  translation: 'properties.color',
                  width: 12,
                  show: (data) => !propertyResolver.getValue(data, 'style.font.useColorExpression'),
                },
                colorExpression: {
                  type: 'string',
                  component: 'input-field-expression',
                  ref: 'style.font.colorExpression',
                  translation: 'Common.Expression',
                  expression: 'optional',
                  show: (data) => propertyResolver.getValue(data, 'style.font.useColorExpression'),
                },
              },
            },
          },
        },
      },
    },
  },
});

export const getStylingPanelDefinition = (bkgOptionsEnabled) => ({
  type: 'items',
  grouped: false,
  translation: 'properties.presentation',
  items: {
    styleEditor: {
      component: 'styling-panel',
      chartTitle: 'Object.ActionButton',
      translation: 'LayerStyleEditor.component.styling',
      subtitle: 'LayerStyleEditor.component.styling',
      ref: 'components',
      useGeneral: true,
      useBackground: bkgOptionsEnabled,
      ...getStyleEditorDefinition(),
    },
  },
});
