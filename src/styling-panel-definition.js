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
            console.log("show=>labelSection=>", args, args?.properties?.components?.find((comp) => comp.key === 'actionbutton'),args?.handler?.layout?.style?.background.size)
            const components = args?.properties?.components
            if (!components) {
              args.properties.components = []
            }
            // if (!args?.properties?.components?.find((comp) => comp.key === 'actionbutton')) {
            //   args.properties.components.push({ key: 'actionbutton', style: args?.handler?.layout?.style })
            // }

            if (!args?.properties?.components?.find((comp) => comp.key === 'actionbutton')) {
              const obj = { key: 'actionbutton' };

              // obj.font = args?.handler?.layout?.style?.font;
              obj.font = {
                color : args?.handler?.layout?.style?.font.color,
                useColorExpression : args?.handler?.layout?.style?.font.useColorExpression,
                colorExpression : args?.handler?.layout?.style?.font.colorExpression,
                align : args?.handler?.layout?.style?.font.align,
                size : args?.handler?.layout?.style?.font.size,
                style : args?.handler?.layout?.style?.font.style

              }
              obj.border = args?.handler?.layout?.style?.border;
              obj.bgColor = {
                'color': args?.handler?.layout?.style?.background.color,
                'colorExpression': args?.handler?.layout?.style?.background.colorExpression,
                'useColorExpression': args?.handler?.layout?.style?.background.useColorExpression,
              };
              obj.bgImage = {
                'mode' : (args?.handler?.layout?.style?.background.useImage === true) ? 'media' : 'none',
                'position': args?.handler?.layout?.style?.background.position,
                'sizing': (args?.handler?.layout?.style?.background.size === 'auto') ? 'originalSize' : args?.handler?.layout?.style?.background.size,
                'mediaUrl': {
                  qStaticContentUrl: {
                    qUrl : args?.handler?.layout?.style?.background.url.qStaticContentUrl.qUrl
                  }
                }
              }
              obj.icon = args?.handler?.layout?.style?.icon;
              args.properties.components.push(obj)
            }
            console.log("show=>labelSection=end>", args)

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
                  ref: 'font.fontFamily',
                  options: fontFamilyOptions,
                },
                labelFontWrapperItem: {
                  component: 'font-style-buttons',
                  width: false,
                  ref: 'font.style',
                  defaultValue: ['bold'],
                  // show(data, handler, args) {
                  //   console.log("show= font style>", data, handler, args);
                  //   const fontComp = args?.properties?.components?.find((comp) => comp.key === 'actionbutton')?.font;
                  //   console.log("fontComp.style=>", fontComp, fontComp?.style);
                  //   if (fontComp?.style) {
                  //     fontComp.style = Object.keys(args?.handler?.layout?.style?.font?.style).filter(key => args?.handler?.layout?.style?.font?.style[key] == true);
                  //   }
                  //   console.log("show=>font style=>end=>", data, handler, args);
                  //   return true;
                  // }
                  // component: 'inline-wrapper',
                  // items: {
                  //   labelFontStyleItem: {
                  //     component: 'font-style-buttons',
                  //     width: false,
                  //     ref: 'font.style',
                  //     defaultValue: ['bold'],
                  //     change(data, handler, properties, args) {
                  //       console.log("onchange=>",data, handler, properties, args)
                  //       // const bgColorComp = args?.properties?.components?.find((comp) => comp.key === 'general')?.bgColor;
                  //       // if (bgColorComp?.color || bgColorComp?.colorExpression) {
                  //       //   bgColorComp.color = undefined;
                  //       //   bgColorComp.colorExpression = undefined;
                  //       // }
                  //     },
                  //   },
                  // },
                },
                labelTextAlign: {
                  type: 'string',
                  component: 'buttongroup',
                  ref: 'font.align',
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
                  ref: 'font.size',
                  translation: 'properties.fontSize',
                  min: 0.2,
                  max: 1,
                  step: 0.01,
                  defaultValue : 0.5
                },
                fontSizeAndColor: {
                  component: 'inline-wrapper',
                  type: 'items',
                  items: {
                    useFontColorExpression: {
                      ref: 'font.useColorExpression',
                      type: 'boolean',
                      translation: 'properties.fontColor',
                      component: 'dropdown',
                      width: 14,
                      options: colorOptions,
                    },
                    colorPicker: {
                      component: 'color-picker',
                      type: 'object',
                      ref: 'font.color',
                      translation: 'properties.color',
                      // dualOutput: true,
                      width: 12,
                      show: (data) => !propertyResolver.getValue(data, 'font.useColorExpression'),
                    },
                    colorExpression: {
                      component: 'input-field-expression',
                      type: 'string',
                      ref: 'font.colorExpression',
                      translation: 'Common.Expression',
                      // expression: 'optional',
                      show: (data) => propertyResolver.getValue(data, 'font.useColorExpression'),
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
                      ref: 'bgColor.useColorExpression',
                      width: 9,
                      type: 'boolean',
                      translation: 'AppDetails.SheetBackgroundColor',
                      component: 'dropdown',
                      options: colorOptions,
                    },
                    colorPicker: {
                      component: 'color-picker',
                      width: 3,
                      ref: 'bgColor.color',
                      translation: 'properties.color',
                      show: (data) => !propertyResolver.getValue(data, 'bgColor.useColorExpression'),
                    },
                    colorExpression: {
                      component: 'input-field-expression',
                      ref: 'bgColor.colorExpression',
                      translation: 'Common.Expression',
                      show: (data) => propertyResolver.getValue(data, 'bgColor.useColorExpression'),
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
                    }
                  },
                },
                mediaLibraryItem: {
                  component: 'media-library-button',
                  ref: 'bgImage.mediaUrl',
                  translation: 'MediaLibrary.Header',
                  itemKey: 'actionbutton',
                  show(data,handler,args) {
                    console.log("ML show=>",data,handler,args)
                    if (data.bgImage?.mode === 'media') {
                      const bgImageComp = args?.properties?.components?.find((comp) => comp.key === 'actionbutton')?.bgImage;
                      console.log("ML show=>",bgImageComp)
                      if (bgImageComp) {
                        bgImageComp.mediaUrl = { qStaticContentUrlDef: { qUrl : '/media/356dafb55261dbd4fb094ee008ab1c6a/galaxy.jpeg'} };
                      }
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
                  show(data, handler, args) {
                    const bgImageComp = args.properties.components.find((comp) => comp.key === 'actionbutton').bgImage;
                    if (
                      data?.bgImage?.mode !== 'none' &&
                      bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl
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
                      bgImageComp?.mediaUrl?.qStaticContentUrlDef?.qUrl &&
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
                  ref: 'border.useBorder',
                  type: 'boolean',
                  translation: 'properties.border.use',
                  component: 'switch',
                  options: toggleOptions,
                  defaultValue: false,

                },
                colorDropdown: {
                  type: 'string',
                  show: (data) => propertyResolver.getValue(data, 'border.useBorder'),
                  component: 'dropdown',
                  translation: 'properties.border.color',
                  ref: 'border.useColorExpression',
                  options: colorOptions,
                },
                colorPicker: {
                  component: 'color-picker',
                  type: 'object',
                  ref: 'border.color',
                  translation: 'properties.color',
                  dualOutput: true,
                  show: (data) =>
                    propertyResolver.getValue(data, 'border.useBorder') &&
                    !propertyResolver.getValue(data, 'border.useColorExpression'),
                },
                colorExpression: {
                  component: 'input-field-expression',
                  ref: 'border.colorExpression',
                  translation: 'Common.Expression',
                  show: (data) =>
                    propertyResolver.getValue(data, 'border.useBorder') &&
                    propertyResolver.getValue(data, 'border.useColorExpression'),
                },
                borderWidth: {
                  component: 'slider',
                  show: (data) => propertyResolver.getValue(data, 'border.useBorder'),
                  type: 'number',
                  ref: 'border.width',
                  translation: 'properties.border.width',
                  min: 0,
                  max: 0.5,
                  step: 0.005,

                },
                borderRadius: {
                  component: 'slider',
                  show: (data) => propertyResolver.getValue(data, 'border.useBorder'),
                  translation: 'properties.border.radius',
                  type: 'number',
                  ref: 'border.radius',
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