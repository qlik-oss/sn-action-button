import styleFormatter from './style-formatter';
import styleDefaults from '../style-defaults';
import propertyResolver from './property-resolver';

const styleEditorDefinition = (bkgOptionsEnabled) => {
  return {
    component: 'styling-panel',
    translation: 'LayerStyleEditor.component.styling',
    chartTitle: 'Object.ActionButton',
    subtitle: 'LayerStyleEditor.component.styling',
    useGeneral: true,
    useBackground: bkgOptionsEnabled,
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
                options: styleFormatter.fontFamilyOptions,
                defaultValue: styleDefaults.FONT_FAMILY,
              },
              fontWrapper: {
                component: 'inline-wrapper',
                items: {
                  fontStyle: {
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
              // layoutBehavior: {
              //   type: 'string',
              //   component: 'dropdown',
              //   ref: 'layoutBehavior',
              //   sx: {
              //     marginBottom: '5px',
              //   },
              //   translation: 'properties.kpi.layoutBehavior',
              //   defaultValue: 'responsive',
              //   undefinedValue: 'responsive',
              //   snapshot: {
              //     tid: 'property-layoutBehavior',
              //   },
              //   options: [
              //     {
              //       value: 'responsive',
              //       translation: 'properties.responsive',
              //     },
              //     {
              //       value: 'relative',
              //       translation: 'properties.fluid',
              //     },
              //     {
              //       value: 'fixed',
              //       translation: 'properties.fixed',
              //     },
              //   ],
              // },
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
        // Add Background option title here
        translation: 'Background Color', // Fix it with the correct translation
        component: 'panel-section',
        items: {
          backgroundColor: {
            items: {
              useColorExpression: {
                type: 'boolean',
                component: 'dropdown',
                ref: 'style.background.useColorExpression',
                translation: 'properties.color.used',
                options: styleFormatter.colorOptions,
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
                translation: 'properties.color',
                dualOutput: true,
                show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
              },
            },
          },
        },
      },
      backgroundImage: {
        component: 'panel-section',
        translation: 'properties.backgroundImage',
        items: {
          backgroundImageItems: {
            items: {
              backgroundImageMode: {
                component: 'dropdown',
                ref: 'style.background.bgImage.mode',
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
                change(args) {
                  const bgImageComp = args.background.bgImage;
                  if (bgImageComp) {
                    bgImageComp.mediaUrl = { qStaticContentUrlDef: '' };
                  }
                },
              },
              MediaLibrary: {
                component: 'media-library-button',
                ref: 'style.background.bgImage.mediaUrl',
                translation: 'MediaLibrary.Header',
                show: (data) => data.style.background.bgImage?.mode === 'media',
              },
              imageSize: {
                component: 'dropdown',
                ref: 'style.background.bgImage.sizing',
                defaultValue: 'originalSize',
                change(data) {
                  if (data?.style.background.bgImage?.position) {
                    data.style.background.bgImage.position = 'center-center';
                  }
                },
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
                show(data) {
                  const imageMode = data.style.background.bgImage?.mode;
                  return !!imageMode && imageMode !== 'none';
                },
              },
              position: {
                component: 'position-grid',
                ref: 'style.background.bgImage.position',
                translation: 'Common.Position',
                show(data) {
                  const imageMode = data.style.background.bgImage?.mode;
                  const sizing = data.style.background.bgImage?.sizing;
                  return !!imageMode && imageMode !== 'none' && sizing !== 'stretch';
                },
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
};

export default styleEditorDefinition;
