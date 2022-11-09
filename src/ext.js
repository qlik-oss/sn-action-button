import actions, { checkShowAction, getActionsList } from './utils/actions';
import { checkShowNavigation, getNavigationsList } from './utils/navigation-actions';
import propertyResolver from './utils/property-resolver';
import importProperties from './utils/conversion';
import luiIcons from './utils/lui-icons';

const colorOptions = [
  {
    value: false,
    translation: 'properties.colorMode.primary',
  },
  {
    value: true,
    translation: 'properties.colorMode.byExpression',
  },
];

const toggleOptions = [
  {
    value: true,
    translation: 'properties.on',
  },
  {
    value: false,
    translation: 'properties.off',
  },
];
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
const FONT_SIZES = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
const getFirstFont = (s) => s.split(',')[0];

const fontFamilyOptions = FONT_FAMILIES.map((font) => ({
  value: font,
  label: getFirstFont(font),
}));

export default function ext({ translator, shouldHide, senseNavigation }) {

  const fontSizeOptions = FONT_SIZES.map((size) => ({
    value: `${size}px`,
    label: size + translator.get('Common.px'),
  }));

  const definition = {
    type: 'items',
    component: 'accordion',
    items: {
      actions: {
        type: 'items',
        translation: 'Object.ActionButton.ActionsAndNavigation',
        grouped: true,
        items: {
          actions: {
            type: 'array',
            translation: 'Object.ActionButton.Actions',
            ref: 'actions',
            itemTitleRef: (data) => {
              if (data.actionLabel) {
                return data.actionLabel;
              }
              // If actionType exists but it's not found in the actions list,
              // the action is invalid for the current version of the button
              const fallbackTitle = data.actionType
                ? 'Object.ActionButton.InvalidAction'
                : 'Object.ActionButton.NewAction';
              const action = actions.find((act) => data.actionType === act.value);
              return translator.get((action && action.translation) || fallbackTitle);
            },
            allowAdd: true,
            allowRemove: true,
            allowMove: true,
            addTranslation: 'Object.ActionButton.AddAction',
            items: {
              label: {
                component: 'string',
                ref: 'actionLabel',
                translation: 'Common.Label',
                expression: 'optional',
                defaultValue: '',
              },
              actionType: {
                type: 'string',
                ref: 'actionType',
                component: 'expression-with-dropdown',
                translation: 'Object.ActionButton.Action',
                defaultValue: '',
                options: getActionsList(shouldHide),
                dropdownOnly: true,
              },
              bookmark: {
                type: 'string',
                ref: 'bookmark',
                component: 'expression-with-dropdown',
                translation: 'ExpressionEditor.SetExpresions.Bookmark',
                defaultValue: '',
                dropdownOnly: true,
                options: async (action, hyperCubeHandler) => {
                  const bms = await hyperCubeHandler.app.getBookmarkList();
                  return bms.map((bookmark) => ({
                    label: bookmark.qData.title,
                    value: bookmark.qInfo.qId,
                  }));
                },
                show: (data) => checkShowAction(data, 'bookmark'),
              },
              field: {
                type: 'string',
                ref: 'field',
                component: 'expression-with-dropdown',
                translation: 'Common.Field',
                defaultValue: '',
                dropdownOnly: true,
                options: async (action, hyperCubeHandler) => {
                  const fields = await hyperCubeHandler.app.getFieldList();
                  return fields.map((field) => ({
                    label: field.qName,
                    value: field.qName,
                  }));
                },
                show: (data) => checkShowAction(data, 'field'),
              },
              variable: {
                type: 'string',
                ref: 'variable',
                component: 'expression-with-dropdown',
                translation: 'Common.Variable',
                defaultValue: '',
                expressionType: 'StringExpression',
                options: async (action, hyperCubeHandler) => {
                  const variables = await hyperCubeHandler.app.getVariableList();
                  return variables
                    .filter((v) => !v.qIsReserved || (v.qIsReserved && action.showSystemVariables))
                    .map((v) => ({
                      label: v.qName,
                      value: v.qName,
                    }));
                },
                show: (data) => checkShowAction(data, 'variable'),
              },
              showSystemVariables: {
                type: 'boolean',
                ref: 'showSystemVariables',
                translation: 'ExpressionEditor.SystemVariables',
                defaultValue: false,
                show: (data) => checkShowAction(data, 'variable'),
              },
              softLock: {
                type: 'boolean',
                ref: 'softLock',
                translation: 'Object.ActionButton.Softlock',
                defaultValue: false,
                show: (data) => checkShowAction(data, 'softLock'),
              },
              value: {
                type: 'string',
                ref: 'value',
                component: 'string',
                translation: 'properties.value',
                expression: 'optional',
                show: (data) => checkShowAction(data, 'value'),
              },
              partial: {
                type: 'boolean',
                ref: 'partial',
                translation: 'Object.ActionButton.Partial',
                defaultValue: false,
                show: (data) => checkShowAction(data, 'partial'),
              },
              // adds automation to actions and adds a dropdown property panel
              // item to select the automation for the button to trigger
              automation: {
                type: 'string',
                component: 'expression-with-dropdown',
                translation: 'Object.ActionButton.Automation',
                ref: 'automation',
                dropdownOnly: true,
                options: async () => {
                  const automations = await fetch('../api/v1/items?resourceType=automation&limit=100').then(
                    (response) => response.json()
                  );
                  return automations.data.map((blend) => ({
                    value: blend.id,
                    label: blend.name,
                  }));
                },
                show: (data) => checkShowAction(data, 'automation'),
              },
              // Boolean property to instruct the automation action to create a
              // bookmark and send it to the selected automation in the
              // property panel.
              automationPostData: {
                type: 'boolean',
                ref: 'automationPostData',
                translation: 'Object.ActionButton.Automation.SendSelections',
                show: (data) => checkShowAction(data, 'automation'),
                defaultValue: false,
              },
            },
          },
          navigation: {
            translation: 'Object.ActionButton.Navigation',
            type: 'items',
            items: {
              action: {
                ref: 'navigation.action',
                translation: 'Object.ActionButton.Navigation',
                component: 'expression-with-dropdown',
                defaultValue: null,
                options: getNavigationsList(shouldHide),
                dropdownOnly: true,
              },
              appId: {
                type: 'string',
                expression: 'optional',
                ref: 'navigation.appId',
                translation: 'properties.appId',
                show: (data) => checkShowNavigation(data, 'appId'),
              },
              sheetId: {
                type: 'string',
                ref: 'navigation.sheet',
                translation: 'properties.sheet',
                expression: 'optional',
                show: (data) => checkShowNavigation(data, 'sheetId'),
              },
              sheet: {
                type: 'string',
                ref: 'navigation.sheet',
                translation: 'properties.sheet',
                component: 'expression-with-dropdown',
                expressionType: 'StringExpression',
                show: (data) => checkShowNavigation(data, 'sheet'),
                options: async (action, hyperCubeHandler) => {
                  const sheets = await hyperCubeHandler.app.getSheetList();
                  return sheets.map((sheet) => ({
                    value: sheet.qInfo.qId,
                    label: sheet.qMeta.title,
                    showCondition: sheet.qData.showCondition,
                  }));
                },
              },
              story: {
                type: 'string',
                ref: 'navigation.story',
                translation: 'properties.story',
                component: 'expression-with-dropdown',
                expressionType: 'StringExpression',
                show: (data) => checkShowNavigation(data, 'story'),
                options: async (action, hyperCubeHandler) => {
                  const stories = await hyperCubeHandler.app.getStoryList();
                  return stories.map((story) => ({
                    value: story.qInfo.qId,
                    label: story.qMeta.title,
                  }));
                },
              },
              websiteUrl: {
                type: 'string',
                expression: 'optional',
                ref: 'navigation.websiteUrl',
                translation: 'properties.website',
                show: (data) => checkShowNavigation(data, 'websiteUrl'),
              },
              sameWindow: {
                type: 'boolean',
                ref: 'navigation.sameWindow',
                translation: 'properties.sameWindow',
                show: (data) => checkShowNavigation(data, 'sameWindow'),
                defaultValue: false,
              },
              odagLink: {
                type: 'string',
                ref: 'navigation.odagLink',
                component: 'dropdown',
                translation: 'ExpressionEditor.SetExpresions.OdagAppLinks',
                options: async (action, hyperCubeHandler) => {
                  const odagLinks = await senseNavigation.getOdagLinks(hyperCubeHandler.app);
                  return odagLinks
                    .filter((link) => link.properties.type === 'odaglink')
                    .map((odagLink) => ({
                      label: odagLink.properties.data.name,
                      value: odagLink.properties.data.id,
                    }));
                },
                show: (data) => checkShowNavigation(data, 'odagLink'),
              },
            },
          },
        },
      },
      enableCondition: {
        type: 'items',
        translation: 'properties.enableConditionSection',
        items: {
          useCondition: {
            type: 'boolean',
            component: 'switch',
            translation: 'properties.enableToggle',
            ref: 'useEnabledCondition',
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
          condition: {
            ref: 'enabledCondition',
            translation: 'properties.enableCondition',
            type: 'integer',
            expression: 'optional',
            show: (data) => data.useEnabledCondition,
          },
        },
      },
      settings: {
        component: 'expandable-items',
        translation: 'Common.Appearance',
        uses: 'settings',
        items: {
          general: {
            type: 'items',
            translation: 'properties.general',
            items: {
              showTitles: {},
              details: {
                show: false,
              },
              cellNavMenu: {
                show: false,
              },

            },
          },
          

        },
      },
    },
  }
  if (shouldHide.isEnabled && shouldHide.isEnabled('SENSECLIENT_IM_1525_BUTTON')) {
    definition.items.settings.items.presentation = {
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
          items: {
            labelSection: {
              translation: 'Label',
              component: 'panel-section',
              items: {
                labelItem: {
                  component: 'items',
                  ref: 'components',
                  key: 'button-label',
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
                        labelFontSizeItem: {
                          component: 'dropdown',
                          ref: 'style.font.size',
                          options: fontSizeOptions,
                        },
                        labelFontColorItem: {
                          component: 'color-picker',
                          width: false,
                          ref: 'style.font.color', 
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
                          translation: 'center',// trannslation has to be added
                        },
                        {
                          value: 'right',
                          translation: 'properties.dock.right',
                        },
                      ],
                      defaultValue: 'center'
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
                  key: 'button-bgcolor',
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
                          show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
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
                  key: 'button-bgimage',
                  items: {
                    bgItem: {
                      component: 'dropdown',
                      ref: 'bgImage.mode',
                      defaultValue: 'none',
                      options: [
                        {
                          value: 'none',
                          translation: 'Background.None', // Needs translation
                        },
                        {
                          value: 'media',
                          translation: 'MediaLibrary.Header',
                        },
                      ],
                      change(data, handler, properties, args) {
                        const bgImageComp = args?.properties?.components?.find((comp) => comp.key === 'button-bgimage')?.bgImage;
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
                      itemKey: 'button-bgimage',
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
                        const bgImageComp = args.properties.components.find((comp) => comp.key === 'button-bgimage').bgImage;
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
                        const bgImageComp = args.properties.components.find((comp) => comp.key === 'button-bgimage').bgImage;
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
                  key: 'button-border',
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
      }
    }
  } else {
    definition.items.settings.items = {
      background : {
        grouped: true,
        type: 'items',
        translation: 'properties.background',
        items: {
          backgroundColor: {
            type: 'items',
            items: {
              useColorExpression: {
                ref: 'style.background.useColorExpression',
                type: 'boolean',
                translation: 'AppDetails.SheetBackgroundColor',
                component: 'dropdown',
                options: colorOptions,
              },
              colorPicker: {
                component: 'color-picker',
                type: 'object',
                ref: 'style.background.color',
                translation: 'properties.color',
                dualOutput: true,
                show: (data) => !propertyResolver.getValue(data, 'style.background.useColorExpression'),
              },
              colorExpression: {
                component: 'string',
                type: 'string',
                ref: 'style.background.colorExpression',
                translation: 'Common.Expression',
                expression: 'optional',
                show: (data) => propertyResolver.getValue(data, 'style.background.useColorExpression'),
              },
            },
          },
          backgroundImage: {
            type: 'items',
            items: {
              useBackgroundImage: {
                ref: 'style.background.useImage',
                type: 'boolean',
                translation: 'properties.backgroundImage.use',
                component: 'switch',
                options: toggleOptions,
              },
              backgroundUrl: {
                ref: 'style.background.url.qStaticContentUrlDef.qUrl',
                layoutRef: 'style.background.url.qStaticContentUrl.qUrl',
                schemaIgnore: true,
                translation: 'Common.Image',
                tooltip: { select: 'properties.media.select', remove: 'properties.media.removeBackground' },
                type: 'string',
                component: 'media',
                show(data) {
                  return propertyResolver.getValue(data, 'style.background.useImage');
                },
              },
              backgroundSize: {
                ref: 'style.background.size',
                translation: 'properties.backgroundImage.size',
                type: 'string',
                component: 'dropdown',
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
                  {
                    value: 'alwaysFill',
                    translation: 'properties.backgroundImage.sizeAlwaysFill',
                  },
                ],
                show(data) {
                  return (
                    propertyResolver.getValue(data, 'style.background.useImage') &&
                    !!propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl')
                  );
                },
              },
              backgroundPosition: {
                ref: 'style.background.position',
                translation: 'Common.Position',
                type: 'string',
                component: 'align-matrix',
                show(data) {
                  return (
                    propertyResolver.getValue(data, 'style.background.useImage') &&
                    propertyResolver.getValue(data, 'style.background.url.qStaticContentUrlDef.qUrl') &&
                    propertyResolver.getValue(data, 'style.background.size') !== 'fill'
                  );
                },
                currentSize(data) {
                  return propertyResolver.getValue(data, 'style.background.size');
                },
              },
            },
          },
        },
      },
      border: {
        type: 'items',
        grouped: true,
        translation: 'properties.border',
        items: {
          borderSettings: {
            type: 'items',
            items: {
              useBorder: {
                ref: 'style.border.useBorder',
                type: 'boolean',
                translation: 'properties.border.use',
                component: 'switch',
                options: toggleOptions,
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
                options: colorOptions,
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
          },
        },
      },
      general :{
        items:{
          label: {
            component: 'string',
            ref: 'style.label',
            translation: 'Common.Label',
            expression: 'optional',
          }
        }
      },
      font: {
        grouped: true,
        type: 'items',
        translation: 'properties.font',
        items: {
          sizeAndColor: {
            type: 'items',
            items: {
              fontSize: {
                component: 'slider',
                type: 'number',
                ref: 'style.font.size',
                translation: 'properties.fontSize',
                min: 0.2,
                max: 1,
                step: 0.01,
              },
              useFontColorExpression: {
                ref: 'style.font.useColorExpression',
                type: 'boolean',
                translation: 'properties.fontColor',
                component: 'dropdown',
                options: colorOptions,
              },
              colorPicker: {
                component: 'color-picker',
                type: 'object',
                ref: 'style.font.color',
                translation: 'properties.color',
                dualOutput: true,
                show: (data) => !propertyResolver.getValue(data, 'style.font.useColorExpression'),
              },
              colorExpression: {
                component: 'string',
                type: 'string',
                ref: 'style.font.colorExpression',
                translation: 'Common.Expression',
                expression: 'optional',
                show: (data) => propertyResolver.getValue(data, 'style.font.useColorExpression'),
              },
            },
          },
          stylingAndAlign: {
            type: 'items',
            items: {
              fontStyling: {
                component: 'item-selection-list',
                type: 'string',
                ref: 'style.font.style',
                translation: 'properties.textStyle',
                horizontal: true,
                multipleSelect: true,
                items: [
                  {
                    component: 'icon-item',
                    icon: 'bold',
                    value: 'bold',
                    translation: 'Common.bold',
                    labelPlacement: 'bottom',
                  },
                  {
                    component: 'icon-item',
                    icon: 'italic',
                    value: 'italic',
                    translation: 'Common.italic',
                    labelPlacement: 'bottom',
                  },
                  {
                    component: 'icon-item',
                    icon: 'underline',
                    value: 'underline',
                    translation: 'Common.underline',
                    labelPlacement: 'bottom',
                  },
                ],
              },
              textAlign: {
                component: 'item-selection-list',
                type: 'string',
                ref: 'style.font.align',
                translation: 'properties.Alignment',
                horizontal: true,
                items: [
                  {
                    component: 'icon-item',
                    icon: 'align_left',
                    value: 'left',
                    translation: 'properties.dock.left',
                    labelPlacement: 'bottom',
                  },
                  {
                    component: 'icon-item',
                    icon: 'align_center',
                    value: 'center',
                    translation: 'Common.Center',
                    labelPlacement: 'bottom',
                  },
                  {
                    component: 'icon-item',
                    icon: 'align_right',
                    value: 'right',
                    translation: 'properties.dock.right',
                    labelPlacement: 'bottom',
                  },
                ],
              },
            },
          },
        },
      },
      icon : {
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
                ref: 'style.icon.position',
                component: 'dropdown',
                translation: 'Common.Position',
                options: [
                  {
                    translation: 'properties.dock.left',
                    value: 'left',
                  },
                  {
                    translation: 'properties.dock.right',
                    value: 'right',
                  },
                ],
                show: (data) => propertyResolver.getValue(data, 'style.icon.useIcon'),
              },
            },
          },
        },
      }
    }
   
  }

  return {
    definition,
    importProperties,
    exportProperties: null,
    support: {
      export: !1,
      exportData: !1,
      snapshot: !1,
      viewData: !1,
      quickMobile: !0,
    },
  };
}
