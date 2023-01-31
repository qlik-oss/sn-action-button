import styleFormatter from './style-formatter';
import styleDefaults from '../style-defaults';
import propertyResolver from './property-resolver';

const styleEditorDefinition = {
  key: 'chart',
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
        labelItem: {
          component: 'items',
          // ref: 'components',
          // key: 'general',
          items: {
            fontFamily: {
              component: 'dropdown',
              ref: 'style.font.fontFamily',
              options: styleFormatter.fontFamilyOptions,
              defaultValue: styleDefaults.FONT_FAMILY,
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
                fontSizeItem: {
                  component: 'dropdown',
                  ref: 'style.font.fontSize',
                },
                fontColorItem: {
                  component: 'color-picker',
                  width: false,
                  ref: 'style.font.color',
                },
              },
            },
            labelFontSize: {
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
              component: 'inline-wrapper',
              type: 'items',
              items: {
                useFontColorExpression: {
                  ref: 'style.font.useColorExpression',
                  type: 'boolean',
                  translation: 'properties.fontColor',
                  component: 'dropdown',
                  width: 14,
                  options: styleFormatter.colorOptions,
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
                  component: 'input-field-expression',
                  type: 'string',
                  ref: 'style.font.colorExpression',
                  translation: 'Common.Expression',
                  show: (data) => propertyResolver.getValue(data, 'style.font.useColorExpression'),
                },
              },
            },
          },
        },
      },
    },
    backgroundOptions: {
      // Add Background option title here
      translation: 'Background Color',
      component: 'panel-section',
      items: {
        backgroundColor: {
          component: 'items',
          // ref: 'components',
          // key: 'general',
          items: {
            colorWrapper: {
              // component: 'inline-wrapper',
              items: {
                useColorExpression: {
                  type: 'boolean',
                  component: 'dropdown',
                  ref: 'style.background.useColorExpression',
                  translation: 'properties.color',
                  options: styleFormatter.colorOptions,
                },
                colorExpression: {
                  type: 'string',
                  component: 'string',
                  ref: 'style.background.colorExpression',
                  translation: 'Common.Expression',
                  expression: 'optional',
                  show: (data) => propertyResolver.getValue(data, 'style.background.useColorExpression'),
                },
                colorPicker: {
                  type: 'object',
                  component: 'color-picker',
                  ref: 'style.background.color',
                  translation: 'properties.color',
                  dualOutput: true,
                  show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
                },
              },
            },
          },
        },
      },
    },
    backgroundImage: {
      // component: 'items',
      component: 'panel-section',
      translation: 'properties.backgroundImage',
      items: {
        backgroundImageItems: {
          // key: 'general',
          // ref: 'components',
          component: 'items',
          items: {
            backgroundWrapper: {
              items: {
                backgroundImageMode: {
                  component: 'dropdown',
                  ref: 'bgImage.mode',
                  defaultValue: 'none',
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
                  // change(data, handler, properties, args) {
                  //   const bgImageComp = args?.properties?.components?.find(
                  //     (comp) => comp.key === 'actionbutton'
                  //   )?.bgImage;
                  //   if (bgImageComp) {
                  //     bgImageComp.mediaUrl = { qStaticContentUrlDef: '' };
                  //   }
                  // },
                },
              },
            },
            mediaLibraryItem: {
              component: 'media-library-button',
              ref: 'bgImage.mediaUrl',
              translation: 'MediaLibrary.Header',
              itemKey: 'actionbutton',
              show(data, handler, args) {
                if (data.bgImage?.mode === 'media') {
                  return true;
                }
                return false;
              },
            },
            sizeItem: {
              component: 'dropdown',
              ref: 'bgImage.sizing',
              defaultValue: 'originalSize',
              change(data) {
                if (data?.bgImage?.position) {
                  data.bgImage.position = 'center-center';
                }
              },
              // show(data, handler, args) {
              //   const bgImageComp = args.properties.components.find((comp) => comp.key === 'actionbutton').bgImage;
              //   if (data?.bgImage?.mode !== 'none' && bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl) {
              //     return true;
              //   }
              //   return false;
              // },
              options: [
                {
                  value: 'originalSize',
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
            },
            positionGridItem: {
              label: 'Position Grid',
              component: 'position-grid',
              ref: 'bgImage.position',
              defaultValue: 'center-center',
              // show(data, handler, args) {
              //   const bgImageComp = args.properties.components.find((comp) => comp.key === 'actionbutton').bgImage;
              //   if (
              //     data?.bgImage?.mode !== 'none' &&
              //     bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl &&
              //     data?.bgImage?.sizing !== 'stretchFit'
              //   ) {
              //     return true;
              //   }
              //   return false;
              // },
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
          component: 'items',
          // ref: 'components',
          // key: 'general',
          items: {
            useBorder: {
              ref: 'style.border.useBorder',
              type: 'boolean',
              translation: 'properties.border.use',
              component: 'switch',
              options: styleFormatter.toggleOptions,
            },
            borderRadius: {
              component: 'slider',
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
              translation: 'properties.border.radius',
              type: 'number',
              ref: 'style.border.radius',
              min: 0,
              max: 1,
              step: 0.01,
            },
            borderWidth: {
              component: 'slider',
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
              type: 'number',
              ref: 'style.border.width',
              translation: 'properties.border.width',
              min: 0,
              max: 0.5,
              step: 0.005,
            },
            colorDropdown: {
              type: 'string',
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
              component: 'dropdown',
              translation: 'properties.border.color',
              ref: 'style.border.useColorExpression',
              options: styleFormatter.colorOptions,
            },
            colorPicker: {
              component: 'color-picker',
              type: 'object',
              ref: 'style.border.color',
              translation: 'properties.color',
              dualOutput: true,
              show: (data) =>
                propertyResolver.getValue(data, 'style.border.useBorder') &&
                !propertyResolver.getValue(data, 'style.border.useColorExpression'),
            },
            colorExpression: {
              component: 'string',
              type: 'string',
              ref: 'style.border.colorExpression',
              translation: 'Common.Expression',
              show: (data) =>
                propertyResolver.getValue(data, 'style.border.useBorder') &&
                propertyResolver.getValue(data, 'style.border.useColorExpression'),
              expression: 'optional',
            },
          },
          items: {
            borderSwitch: {
              type: 'boolean',
              component: 'switch',
              ref: 'style.border.useBorder',
              translation: 'properties.border.use',
              options: styleFormatter.toggleOptions,
              defaultValue: false,
            },
            colorDropdown: {
              type: 'string',
              component: 'dropdown',
              ref: 'style.border.useColorExpression',
              translation: 'properties.border.color',
              options: styleFormatter.colorOptions,
              show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
            },
            colorPicker: {
              type: 'object',
              component: 'color-picker',
              ref: 'style.border.color',
              translation: 'properties.color',
              dualOutput: true,
              show: (data) =>
                propertyResolver.getValue(data, 'style.border.useBorder') &&
                !propertyResolver.getValue(data, 'style.border.useColorExpression'),
            },
            colorExpression: {
              component: 'input-field-expression',
              ref: 'style.border.colorExpression',
              translation: 'Common.Expression',
              show: (data) =>
                propertyResolver.getValue(data, 'style.border.useBorder') &&
                propertyResolver.getValue(data, 'style.border.useColorExpression'),
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
          },
        },
      },
    },
  },
};

export default styleEditorDefinition;
