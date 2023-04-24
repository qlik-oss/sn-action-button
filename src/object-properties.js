import DEFAULTS from "./style-defaults";

/**
 * @extends {qae.GenericObjectProperties}
 * @entry
 */

const properties = {
  /**
   * Current version of this generic object definition.
   * @type {string}
   * @default
   */
  version: process.env.PACKAGE_VERSION,
  /**
   * Show title for the visualization
   * @type {boolean=}
   */
  showTitles: true,
  /**
   * Visualization title
   * @type {string=}
   */
  title: "",
  /**
   * Visualization subtitle
   * @type {string=}
   */
  subtitle: "",
  /**
   * Visualization footnote
   * @type {string=}
   */
  footnote: "",
  /**
   * Controlling if the button should use an expression to determine if it is enabled or not
   *  @type {boolean}
   */
  useEnabledCondition: false,
  /**
   * Number or expression evaluating to number, 0 means disabling the button
   * @type {number | EnabledExpression}
   */
  enabledCondition: 1,
  /**
   * List of actions, performed in this order
   * @type {Action[]}
   */
  actions: [],
  /**
   * Navigation action to move to new sheet/URL, performed after all other actions
   * @type {NavigationAction}
   */
  navigation: {
    action: "none",
  },
  disableNavMenu: true,
  showDetails: false,
  /**
   * All styling options
   * @type {Style}
   */
  style: {
    label: DEFAULTS.LABEL,
    font: {
      fontFamily: DEFAULTS.FONT_FAMILY,
      useColorExpression: false,
      color: DEFAULTS.FONT_COLOR,
      colorExpression: "",
      size: DEFAULTS.FONT_SIZE,
      sizeFixed: DEFAULTS.FONT_SIZE_FIXED,
      sizeBehavior: DEFAULTS.SIZE_BEHAVIOR,
      style: DEFAULTS.FONT_STYLE,
      align: DEFAULTS.TEXT_ALIGN,
    },
    background: {
      useColorExpression: false,
      color: DEFAULTS.COLOR,
      colorExpression: "",
      mode: DEFAULTS.BGIMAGE_MODE,
      useImage: false,
      url: {
        qStaticContentUrlDef: {
          qUrl: "",
        },
      },
      size: DEFAULTS.BACKGROUND_SIZE,
      position: DEFAULTS.BACKGROUND_POSITION,
    },
    border: {
      useColorExpression: false,
      color: DEFAULTS.COLOR,
      colorExpression: "",
      useBorder: false,
      radius: DEFAULTS.BORDER_RADIUS,
      width: DEFAULTS.BORDER_WIDTH,
    },
    icon: {
      useIcon: false,
      iconType: "",
      position: DEFAULTS.ICON_POSITION,
    },
  },
};

/**
 * Defines what action to perform and options for that action type.
 * @typedef {object} Action
 * @property {string} [actionLabel=''] - Label for reference
 * @property {('applyBookmark'|'back'|'forward'|'clearAll'|'clearAllButThis'|'clearField'|'selectAll'|'selectValues'|'selectMatchingValues'|'selectAlternative'|'selectExcluded'|'selectPossible'|'toggleSelect'|'lockAll'|'lockField'|'unlockAll'|'unlockField'|'setVariable'|'doReload'|'executeAutomation'|'refreshDynamicViews')} [actionType=''] - The type of action
 * @property {string=} [bookmark=''] - ID of bookmark, required for type 'applyBookmark'
 * @property {string=} [field=''] - Name of field. Required for types 'clearAllButThis', 'clearField', 'selectAll', 'selectValues', 'selectMatchingValues', 'selectAlternative', 'selectExcluded', 'selectPossible', 'toggleSelect', 'lockField' and 'unlockField'
 * @property {string=} [softLock=''] - Set to true to ignore locked field(s). Required for types 'clearAll', 'clearAllButThis', 'clearField', 'selectAll', 'selectValues', 'selectMatchingValues', 'selectAlternative', 'selectExcluded', 'selectPossible' and 'toggleSelect'
 * @property {string=} [value=''] - To select certain values in a field or set a variable. Required for types 'selectValues', 'selectMatchingValues', 'toggleSelect' and 'setVariable'
 * @property {string=} [variable=''] - Name of variable. Required for type 'setVariable'
 * @property {boolean=} [partial=false] - Set to true if you want to do a partial reload.
 * @property {string=} [automation=''] - Item ID of the automation (the id field returned from /api/v1/items?resourceType=automations)
 * @property {string=} [automationId=''] - ID of the automation (the id field from /api/v1/automations OR the id field from /api/v1/automations)
 * @property {boolean=} [automationPostData=false] - Set to true to include the current selections in the automation. Defaults to false
 * @property {boolean=} [automationTriggered=false] - Set to true when the automation should use the triggered run mode. Defaults to false
 * @property {string=} [automationTriggeredText=''] - Helper text when using the triggered run mode. Defaults to false
 * @property {string=} [automationExecutionToken=''] - Token used when using the triggered run mode
 * @property {boolean=} [automationShowNotification=''] - Set to true when an automation should return a notification when finished running. Defaults to false
 * @property {string=} [automationNotificationDuration=''] - The amount of time in seconds that a notification should remain visible after running an automation
 * @property {string=} [automationNotificationDurationHelp=''] - Helper text when enabling notifications
 * @property {boolean=} [automationOpenLinkSameWindow=''] - Set to true if you want links from notifications to be opened in the same tab
 */

/**
 * Defines a navigation action to perform after the other actions. Note that when the sn-action-button is used outside Qlik Sense you can only use the 'openWebsite' action.
 * @typedef {object} NavigationAction
 * @property {'nextSheet'|'prevSheet'|'firstSheet'|'lastSheet'|'goToSheet'|'goToSheetById'|'goToSheetById'|'goToStory'|'openWebsite'|'odagLink'|'openChainedApp'} action - Name of navigation action
 * @property {string=} appId - app ID. Required for 'openChainedApp'
 * @property {string=} sheet - sheet ID. Required for 'goToSheet' and 'goToSheetById'
 * @property {string=} story - Story ID. Required for 'goToStory'
 * @property {string=} websiteUrl - URL for website. required for 'openWebsite'
 * @property {boolean=} sameWindow - Set to true to open in same window/tab. Required for 'openWebsite'
 * @property {string=} odagLink - ODAG link name. Required for 'odagLink'
 */

/**
 * Holds styling options
 * @typedef {object} Style
 * @property {string=} [label='Button'] - The text displayed on the button
 * @property {Font=} font - Styling for the label
 * @property {Background=} background - Styling for background, including image
 * @property {Border=} border - Styling for border
 * @property {Icon=} icon - Styling for icon
 */

/**
 * @typedef {object} Font
 * @property {string=} [fontFamily='Source Sans Pro'] - Font Family of the label
 * @property {boolean=} [useColorExpression=false] - Set to true to use color expression
 * @property {PaletteColor=} color - Color defined by index or hex code, needed if useColorExpression is false
 * @property {ColorExpression=} colorExpression - Color defined by expression, needed if useColorExpression is true
 * @property {number=} [size=0.5] - Relative[] size of label, must be greater than 0 and 1 fills the entire button
 * @property {number=} [sizeFixed=20] - Fixed size of the label in pixels. Must be bigger than 5. Only active when sizeBehavior is fixed.
 * @property {('left'|'center'|'right')=} [align='center'] - Horizontal alignment
 * @property {object=} style - Additional style options
 * @property {boolean=} [style.bold = true] - Bold text
 * @property {boolean=} [style.italic = false] - Italic text
 * @property {boolean=} [style.underline = false] - Underlined text
 * @property {('responsive'|'relative'|'fixed')} [sizeBehavior='responsive'] - Setting to determine how the fontsize of the label is calculated.
 */

/**
 * @typedef {object} Background
 * @property {boolean=} [useColorExpression=false] - Set to true to use color expression
 * @property {PaletteColor=} color - Color defined by index or hex code, needed if useColorExpression is false
 * @property {ColorExpression=} colorExpression - Color defined by expression, needed if useColorExpression is true
 * @property {('none'|'media')=} [mode = 'none'] - Toggles the background image, set to media to show the image
 * @property {boolean=} [useImage=false] - Set to true to show background image
 * @property {object=} url - Contains the URL for the background image
 * @property {object=} url.qStaticContentUrlDef
 * @property {string=} url.qStaticContentUrlDef.qUrl - URL represented as a string
 * @property {('topLeft'|'centerLeft'|'bottomLeft'|'topCenter'|'centerCenter'|'bottomCenter'|'topRight'|'centerRight'|'bottomRight'|'top-left'|'center-left'|'bottom-left'|'top-center'|'center-center'|'top-right'|'center-right'|'bottom-right')} [position='center-center'] - Image position
 * @property {('auto'|'alwaysFit'|'fitWidth'|'fitWidth'|'fitHeight'|'fill'|'alwaysFill')=} [size='auto'] - Size of the image, relative to the button
 */

/**
 * @typedef {object} Border
 * @property {boolean=} [useBorder=false] - Set to true to use border expression
 * @property {number=} [width=0] - Relative width, 0 is no border and 1 make the border fill the entire button
 * @property {number=} [radius=0] - Relative border radius, 0 is no rounding and 1 will make the short side a half circle
 * @property {boolean=} [useColorExpression=false] - Set to true to use color expression
 * @property {PaletteColor=} color - Color defined by index or hex code, needed if useColorExpression is false
 * @property {string=} colorExpression - Color defined by expression, needed if useColorExpression is true
 */

/**
 * Icons are only available inside Qlik Sense
 * @typedef {object} Icon
 * @property {boolean=} [useIcon=false] - Set to true to show icon, default is false
 * @property {object=} iconType - holds the name of the icon
 * @property {string=} [iconType.value=''] - name of icon
 * @property {('left'|'right')=} [position='left'] - Defines which side of the label the icon will be
 */

/**
 * Color information structure. Holds the actual color and index in palette.
 * @typedef {object} PaletteColor
 * @property {string=} color - Color as hex string (only used if index: -1)
 * @property {number=} index - Index in palette
 */

/**
 * Format for using color expressions
 * @typedef {object} ColorExpression
 * @property {object} qStringExpression
 * @property {string} qStringExpression.qExpr - expression that resolves to a supported color format
 */

/**
 * Format for setting if the button is enabled/disabled with an expression
 * @typedef {object} EnabledExpression
 * @property {object} qStringExpression
 * @property {string} qStringExpression.qExpr - expression that resolves to a number
 */

export default properties;
