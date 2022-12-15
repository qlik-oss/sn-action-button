import propertyResolver from './utils/property-resolver';
import luiIcons from './utils/lui-icons';

const FONT_FAMILIES = [
  'American Typewriter, serif',
  'Andalé Mono, monospace',
  'Arial Black, sans-serif',
  'Arial, sans-serif',
  'Bradley Hand, cursive',
  'Brush Script MT, cursive',
  'Comic Sans MS, cursive',
  'Courier, monospace',
  'Didot, serif',
  'Georgia, serif',
  'Impact, sans-serif',
  'Lucida Console, monospace',
  'Luminari, fantasy',
  'Monaco, monospace',
  'QlikView Sans, sans-serif',
  'Source Sans Pro, sans-serif',
  'Tahoma, sans-serif',
  'Times New Roman, serif',
  'Trebuchet MS, sans-serif',
  'Verdana, sans-serif',
];
const getFirstFont = (s) => s.split(',')[0];

const fontFamilyOptions = FONT_FAMILIES.map((font) => ({
  value: font,
  label: getFirstFont(font),
}));

const getStylingPanelDefinition = (bkgOptionsEnabled, translator, colorOptions, toggleOptions) => ({
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
      items: {
        labelSection: {
          translation: 'Label',
          component: 'panel-section',
          show(data, handler, args) {
            const components = args?.properties?.components
            if (!components) {
              args.properties.components = []
            }
            if (!args?.properties?.components?.find((comp) => comp.key === 'actionbutton')) {
              args.properties.components.push({ key: 'actionbutton', style: args?.handler?.layout?.style })
            }

            return true;
          },
          items: {
            labelItem: {
              component: 'items',
              ref: 'components',
              key: 'actionbutton',
              items: {
                labelFontFamilyItem: {
                  component: 'dropdown',
                  ref: 'style.font.fontFamily',
                  options: fontFamilyOptions,
                },
                labelFontWrapperItem: {
                  component: 'inline-wrapper',
                  items: {
                    labelFontStyleItem: {
                      component: 'font-style-buttons',
                      width: false,
                      ref: 'style.font.style',
                      defaultValue: ['bold'],
                    },
                  },
                },
                labelTextAlign: {
                  type: 'string',
                  component: 'buttongroup',
                  ref: 'style.font.align',
                  options: [
                    {
                      value: 'left',
                      translation: 'properties.dock.left',
                    },
                    {
                      value: 'center',
                      translation: 'center',
                    },
                    {
                      value: 'right',
                      translation: 'properties.dock.right',
                    },
                  ],
                  defaultValue: 'center'
                },
                labelFontSize: {
                  component: 'slider',
                  type: 'number',
                  ref: 'style.font.size',
                  translation: 'properties.fontSize',
                  min: 0.2,
                  max: 1,
                  step: 0.01,

                },
                fontSizeAndColor: {
                  component: 'inline-wrapper',
                  type: 'items',
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
                      // type: 'object',
                      ref: 'style.font.color',
                      translation: 'properties.color',
                      // dualOutput: true,
                      width: 12,
                      // show: (data) => !propertyResolver.getValue(data, 'style.font.useColorExpression'),
                      show(data, handler, args) {
                        const fontColorObj = args?.properties?.components?.find((comp) => comp.key === 'actionbutton')?.style;
                        if (fontColorObj) {
                          if (fontColorObj?.font?.color) {
                            args.properties.components.find((comp) => comp.key === 'actionbutton').style.font.color.color = args?.handler?.layout?.style.font.color.color;
                          } else {
                            args.properties.components.find((comp) => comp.key === 'actionbutton').style = { font: { color: { color: args?.handler?.layout?.style.font.color.color } } }
                          }
                        }
                        return !propertyResolver.getValue(data, 'style.font.useColorExpression')
                      },

                    },
                    colorExpression: {
                      component: 'input-field-expression',
                      type: 'string',
                      ref: 'style.font.colorExpression',
                      translation: 'Common.Expression',
                      // expression: 'optional',

                      show: (data) => propertyResolver.getValue(data, 'style.font.useColorExpression'),


                    },
                  }
                }
              },
            },
          },
        },
        bgColorSection: {
          translation: 'Background Color',
          component: 'panel-section',
          items: {
            bgColorItem: {
              component: 'items',
              ref: 'components',
              key: 'actionbutton',
              items: {
                bgColorWrapper: {
                  component: 'inline-wrapper',
                  items: {
                    useColorExpression: {
                      ref: 'style.background.useColorExpression',
                      width: 9,
                      type: 'boolean',
                      translation: 'AppDetails.SheetBackgroundColor',
                      component: 'dropdown',
                      options: colorOptions,
                    },
                    colorPicker: {
                      component: 'color-picker',
                      width: 3,
                      ref: 'style.background.color',
                      translation: 'properties.color',
                      // show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
                      show(data, handler, args) {
                        const bgColorObj = args?.properties?.components?.find((comp) => comp.key === 'actionbutton')?.style;
                        if (bgColorObj) {
                          if (bgColorObj?.background?.color) {
                            args.properties.components.find((comp) => comp.key === 'actionbutton').style.background.color.color = args?.handler?.layout?.style.background.color.color;
                          } else {
                            args.properties.components.find((comp) => comp.key === 'actionbutton').style = { background: { color: { color: args?.handler?.layout?.style.background.color.color } } }
                          }
                        }
                        return !propertyResolver.getValue(data, 'style.background.useColorExpression')
                      },
                    },
                    colorExpression: {
                      component: 'input-field-expression',
                      ref: 'style.background.colorExpression',
                      translation: 'Common.Expression',
                      show: (data) => propertyResolver.getValue(data, 'style.background.useColorExpression'),
                    },
                  },
                },
              },
            },
          },
        },
        bgImageSection: {
          translation: 'Background Image',
          component: 'panel-section',
          items: {
            bgImageItems: {
              component: 'items',
              ref: 'components',
              key: 'actionbutton',
              items: {
                bgItem: {
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
                  change(data, handler, properties, args) {
                    const bgImageComp = args?.properties?.components?.find((comp) => comp.key === 'actionbutton')?.bgImage;
                    if (bgImageComp) {
                      bgImageComp.mediaUrl = { qStaticContentUrlDef: '' };
                      bgImageComp.expressionUrl = undefined;
                    }
                  },
                },
                mediaLibraryItem: {
                  component: 'media-library-button',
                  ref: 'bgImage.mediaUrl',
                  translation: 'MediaLibrary.Header',
                  itemKey: 'actionbutton',
                  show(data) {
                    return propertyResolver.getValue(data, 'bgImage.mode');
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
                  show(data, handler, args) {
                    const bgImageComp = args.properties.components.find((comp) => comp.key === 'actionbutton').bgImage;
                    if (
                      data?.bgImage?.mode !== 'none' &&
                      (bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl || bgImageComp?.expressionUrl)
                    ) {
                      return true;
                    }
                    return false;
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
                },
                positionGridItem: {
                  label: 'Position Grid',
                  component: 'position-grid',
                  ref: 'bgImage.position',
                  defaultValue: 'center-center',
                  show(data, handler, args) {
                    const bgImageComp = args.properties.components.find((comp) => comp.key === 'actionbutton').bgImage;
                    if (
                      data?.bgImage?.mode !== 'none' &&
                      (bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl || bgImageComp?.expressionUrl) &&
                      data?.bgImage?.sizing !== 'stretchFit'
                    ) {
                      return true;
                    }
                    return false;
                  },
                },
              },
            },
          },
        },
        bgBorderSection: {
          translation: 'Background Border',
          component: "panel-section",
          items: {
            bgBorderItems: {
              component: 'items',
              ref: 'components',
              key: 'actionbutton',
              items: {
                useBorder: {
                  ref: 'style.border.useBorder',
                  type: 'boolean',
                  translation: 'properties.border.use',
                  component: 'switch',
                  options: toggleOptions,
                  defaultValue: false,
                },
                colorDropdown: {
                  type: 'string',
                  show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
                  component: 'dropdown',
                  translation: 'properties.border.color',
                  ref: 'style.border.useColorExpression',
                  options: colorOptions,
                },
                colorPicker: {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'style.border.color',
                  translation: 'properties.color',
                  dualOutput: true,
                  // show: (data) =>
                  //   propertyResolver.getValue(data, 'style.border.useBorder') &&
                  //   !propertyResolver.getValue(data, 'style.border.useColorExpression'),

                  show(data, handler, args) {
                    const borderColorObj = args?.properties?.components?.find((comp) => comp.key === 'actionbutton')?.style;
                    if (borderColorObj) {
                      if (borderColorObj?.border?.color) {
                        args.properties.components.find((comp) => comp.key === 'actionbutton').style.border.color.color = args?.handler?.layout?.style.border.color.color;
                      } else {
                        args.properties.components.find((comp) => comp.key === 'actionbutton').style = { border: { color: { color: args?.handler?.layout?.style.border.color.color } } }
                      }
                    }
                    return propertyResolver.getValue(data, 'style.border.useBorder') && !propertyResolver.getValue(data, 'style.border.useColorExpression')
                  },
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
                  component: 'slider',
                  show: (data) => propertyResolver.getValue(data, 'style.border.useBorder'),
                  type: 'number',
                  ref: 'style.border.width',
                  translation: 'properties.border.width',
                  min: 0,
                  max: 0.5,
                  step: 0.005,
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


              }
            }
          }
        }
      }
    },
    label: {
      component: 'string',
      ref: 'style.label',
      translation: 'Common.Label',
      expression: 'optional',
    },
    icon: {
      type: 'items',
      grouped: true,
      translation: 'properties.icon',
      items: {
        iconSettings: {
          type: 'items',
          items: {
            useIcon: {
              ref: 'style.icon.useIcon',
              type: 'boolean',
              translation: 'properties.icon.use',
              component: 'switch',
              options: toggleOptions,
            },
            iconType: {
              ref: 'style.icon.iconType',
              component: 'expression-with-dropdown',
              translation: 'properties.icon',
              defaultValue: '',
              options: luiIcons,
              expressionType: 'StringExpression',
              show: (data) => propertyResolver.getValue(data, 'style.icon.useIcon'),
            },
            iconPosition: {
              type: 'string',
              component: 'buttongroup',
              ref: 'style.icon.position',
              translation: 'Common.Position',
              options: [
                {
                  value: 'left',
                  translation: 'properties.dock.left',
                },
                {
                  value: 'right',
                  translation: 'properties.dock.right',
                },
              ],
              show: (data) => propertyResolver.getValue(data, 'style.icon.useIcon'),
            },
          },
        },
      },
    }
  },


});
export default getStylingPanelDefinition;