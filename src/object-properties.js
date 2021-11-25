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
  title: '',
  /**
   * Visualization subtitle
   * @type {string=}
   */
  subtitle: '',
  /**
   * Visualization footnote
   * @type {string=}
   */
  footnote: '',
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
    action: 'none',
  },
  /**
   * All styling options
   * @type {Style}
   */
  style: {},
};

/**
 * Defines what action to perform and options for that action type.
 * @typedef {object} Action
 * @property {string} actionLabel - Label for reference
 * @property {('applyBookmark'|'back'|'forward'|'clearAll'|'clearAllButThis'|'clearField'|'selectAll'|'selectValues'|'selectMatchingValues'|'selectAlternative'|'selectExcluded'|'selectPossible'|'toggleSelect'|'lockAll'|'lockField'|'unlockAll'|'unlockField'|'setVariable'|'doReload'|'executeAutomation')} actionType - The type of action
 * @property {string=} bookmark - ID of bookmark, required for type 'applyBookmark'
 * @property {string=} field - Name of field. Required for types 'clearAllButThis', 'clearField', 'selectAll', 'selectValues', 'selectMatchingValues', 'selectAlternative', 'selectExcluded', 'selectPossible', 'toggleSelect', 'lockField' and 'unlockField'
 * @property {string=} softLock - Set to true to ignore locked field(s). Required for types 'clearAll', 'clearAllButThis', 'clearField', 'selectAll', 'selectValues', 'selectMatchingValues', 'selectAlternative', 'selectExcluded', 'selectPossible' and 'toggleSelect'
 * @property {string=} value - To select certain values in a field or set a variable. Required for types 'selectValues', 'selectMatchingValues', 'toggleSelect' and 'setVariable'
 * @property {string=} variable - Name of variable. Required for type 'setVariable'
 * @property {boolean=} partial - Set to true if you want to do a partial reload. Defaults to false
 * @property {string=} automation - ID of the automation. Required for type 'setVariable'
 * @property {boolean=} automationPostData - Set to true to include the current selections in the automation. Defaults to false
 */

/**
 * Defines a navigation action to perform after the other actions. Note that when the sn-action-button is used outside Qlik Sense you can only use the 'openWebsite' action.
 * @typedef {object} NavigationAction
 * @property {'nextSheet'|'prevSheet'|'firstSheet'|'lastSheet'|'goToSheet'|'goToSheetById'|'goToSheetById'|'goToStory'|'openWebsite'} action - Name of navigation action
 * @property {string=} sheet - sheet ID. Required for 'goToSheet' and 'goToSheetById'
 * @property {string=} story - Story ID. Required for 'goToStory'
 * @property {string=} websiteUrl - URL for website. required for 'openWebsite'
 * @property {boolean=} sameWindow - Set to true to open in same window/tab. Required for 'openWebsite'
 */

/**
 * Holds styling options
 * @typedef {object} Style
 * @property {string=} label - The text displayed on the button, defaults to 'Button'
 * @property {Font=} font - Styling for the label
 * @property {Background=} background - Styling for background, including image
 * @property {Border=} border - Styling for border
 * @property {Icon=} icon - Styling for icon
 */

/**
 * @typedef {object} Font
 * @property {number=} size - Relative size of label, must be greater than 0 and 1 fills the entire button, defaults to 0.5
 * @property {boolean=} useColorExpression - Set to true to use color expression, defaults to false
 * @property {PaletteColor=} color - Color defined by index or hex code, needed if useColorExpression is false
 * @property {ColorExpression=} colorExpression - Color defined by expression, needed if useColorExpression is true
 * @property {('left'|'center'|'right')=} align - Horizontal alignment, defaults to 'center'
 * @property {object=} style - Additional style options, text is bold as default
 * @property {boolean=} style.bold - Bold text
 * @property {boolean=} style.italic - Italic text
 * @property {boolean=} style.underline - Underlined text
 */

/**
 * @typedef {object} Background
 * @property {boolean=} useColorExpression - Set to true to use color expression, default is false
 * @property {PaletteColor=} color - Color defined by index or hex code, needed if useColorExpression is false
 * @property {ColorExpression=} colorExpression - Color defined by expression, needed if useColorExpression is true
 * @property {boolean=} useImage - Set to true to show background image, default is false
 * @property {object=} url - Contains the URL for the background image
 * @property {object=} url.qStaticContentUrlDef
 * @property {string=} url.qStaticContentUrlDef.qUrl - URL represented as a string
 * @property {('topLeft'|'centerLeft'|'bottomLeft'|'topCenter'|'centerCenter'|'bottomCenter'|'topRight'|'centerRight'|'bottomRight')} position - Image position, defaults to 'centerCenter'
 * @property {('auto'|'alwaysFit'|'fitWidth'|'fitWidth'|'fitHeight'|'fill'|'alwaysFill')=} size - Size of the image, relative to the button, defaults to auto
 */

/**
 * @typedef {object} Border
 * @property {boolean=} useBorder - Set to true to use border expression, default is false
 * @property {number=} width - Relative width, 0 is no border and 1 make the border fill the entire button. Defaults to 0
 * @property {number=} radius - Relative border radius, 0 is no rounding and 1 will make the short side a half circle. Defaults to 0
 * @property {boolean=} useColorExpression - Set to true to use color expression, default is false
 * @property {PaletteColor=} color - Color defined by index or hex code, needed if useColorExpression is false
 * @property {string=} colorExpression - Color defined by expression, needed if useColorExpression is true
 */

/**
 * @typedef {object} Icon
 * @property {boolean=} useIcon - Set to true to show icon, default is false
 * @property {string=} iconType - Name of the icon
 * @property {('left'|'right')=} position - Defines which side of the label the icon will be, defaults to left
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
