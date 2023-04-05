import styleDefaults from './style-defaults';
import propertyResolver from './utils/property-resolver';
import { fontFamilyOptions, colorOptions, toggleOptions, fontSizeOptions } from './utils/style-utils';

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
            fontSizeBehavior: {
              component: 'dropdown',
              ref: 'style.font.sizeBehavior',
              translation: 'properties.kpi.layoutBehavior',
              defaultValue: 'responsive',
              options: fontSizeOptions,
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
                  type: 'object',
                  component: 'color-picker',
                  ref: 'style.font.color',
                  translation: 'properties.color',
                  defaultValue: styleDefaults.FONT_COLOR,
                  disabledNone: true,
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
    backgroundOptions: {
      component: 'panel-section',
      translation: 'properties.background.options',
      items: {
        backgroundColor: {
          type: 'items',
          items: {
            useColorExpression: {
              type: 'boolean',
              component: 'dropdown',
              ref: 'style.background.useColorExpression',
              translation: 'properties.color',
              options: colorOptions,
            },
            colorExpression: {
              type: 'string',
              component: 'input-field-expression',
              ref: 'style.background.colorExpression',
              translation: 'Common.Expression',
              expression: 'optional',
              show: (data) => propertyResolver.getValue(data, 'style.background.useColorExpression'),
            },
            colorPicker: {
              type: 'object',
              component: 'color-picker',
              ref: 'style.background.color',
              translation: 'properties.color.used',
              disableNone: false,
              defaultValue: styleDefaults.COLOR,
              dualOutput: true,
              show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
            },
          },
        },
        backgroundImage: {
          items: {
            backgroundImageMode: {
              component: 'dropdown',
              ref: 'style.background.mode',
              translation: 'properties.backgroundImage',
              defaultValue: styleDefaults.BGIMAGE_MODE,
              options: [
                {
                  value: 'none',
                  translation: 'Background.None',
                },
                {
                  value: 'media',
                  translation: 'MediaLibrary.Header',
                },
              ],
              change(data) {
                const bgImageComp = data.style.background;
                if (!bgImageComp) data.style.background = { qStaticContentUrlDef: {} };
                if (!bgImageComp.url) data.style.background.url = {};
              },
            },
            MediaLibrary: {
              component: 'media-library-button',
              ref: 'style.background.url',
              translation: 'MediaLibrary.Header',
              show: (data) => propertyResolver.getValue(data, 'style.background.mode') === 'media',
            },
            imageSize: {
              component: 'dropdown',
              ref: 'style.background.size',
              defaultValue: styleDefaults.BACKGROUND_SIZE,
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
                  value: 'stretchFit',
                  translation: 'properties.backgroundImage.sizeStretch',
                },
                {
                  value: 'alwaysFill',
                  translation: 'properties.backgroundImage.sizeAlwaysFill',
                },
              ],
              change: (data) => {
                if (propertyResolver.getValue(data, 'style.background.position'))
                  data.style.background.position = styleDefaults.BGIMAGE_POSITION;
              },
              show: (data) =>
                propertyResolver.getValue(data, 'style.background.mode') === 'media' &&
                !!propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl'),
            },
            position: {
              component: 'position-grid',
              ref: 'style.background.position',
              translation: 'properties.backgroundImage.position',
              defaultValue: styleDefaults.BGIMAGE_POSITION,
              show: (data) =>
                propertyResolver.getValue(data, 'style.background.mode') === 'media' &&
                propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl') &&
                propertyResolver.getValue(data, 'style.background.size') !== 'stretchFit',
              currentSizeRef: 'style.background.size',
            },
          },
        },
      },
    },
    backgroundBorder: {
      component: 'panel-section',
      translation: 'properties.border',
      items: {
        backgroundBorderItem: {
          items: {
            useBorder: {
              type: 'boolean',
              component: 'switch',
              ref: 'style.border.useBorder',
              translation: 'properties.border.use',
              defaultValue: false,
              options: toggleOptions,
            },
            borderRadius: {
              type: 'number',
              component: 'slider',
              ref: 'style.border.radius',
              translation: 'properties.border.radius',
              min: 0,
              max: 1,
              step: 0.01,
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
            },
            borderWidth: {
              type: 'number',
              component: 'slider',
              ref: 'style.border.width',
              translation: 'properties.border.width',
              min: 0,
              max: 0.5,
              step: 0.005,
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
            },
            colorDropdown: {
              type: 'string',
              component: 'dropdown',
              ref: 'style.border.useColorExpression',
              translation: 'properties.border.color',
              options: colorOptions,
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
            },
            colorPicker: {
              type: 'object',
              component: 'color-picker',
              ref: 'style.border.color',
              translation: 'properties.color',
              defaultValue: styleDefaults.COLOR,
              disableNone: false,
              dualOutput: true,
              show: (data) =>
                propertyResolver.getValue(data, 'style.border.useBorder') &&
                !propertyResolver.getValue(data, 'style.border.useColorExpression'),
            },
            colorExpression: {
              type: 'string',
              component: 'input-field-expression',
              ref: 'style.border.colorExpression',
              translation: 'Common.Expression',
              show: (data) =>
                propertyResolver.getValue(data, 'style.border.useBorder') &&
                propertyResolver.getValue(data, 'style.border.useColorExpression'),
              expression: 'optional',
            },
          },
        },
      },
    },
  },
});

export const getStylingPanelDefinition = () => ({
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
      useBackground: true,
      ...getStyleEditorDefinition(),
    },
  },
});
