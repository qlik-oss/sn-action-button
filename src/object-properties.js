import DEFAULTS from './style-defaults';

const properties = {
  /**
   * @type {boolean}
   */
  showTitles: false,
  /**
   * @type {string}
   */
  title: '',
  /**
   * @type {string}
   */
  subtitle: '',
  /**
   * @type {string}
   */
  footnote: '',
  /**
   * @type {boolean}
   */
  useEnabledCondition: false,
  /**
   * @type {number}
   */
  enabledCondition: 1,
  /**
   * @type {object}
   */
  navigation: {
    action: 'none',
  },
  /**
   * @type {object}
   */
  style: {
    label: DEFAULTS.LABEL,
    font: {
      useColorExpression: false,
      color: DEFAULTS.COLOR,
      colorExpression: '',
      size: DEFAULTS.FONT_SIZE,
      style: DEFAULTS.FONT_SIZE,
      align: DEFAULTS.TEXT_ALIGN,
    },
    background: {
      useColorExpression: false,
      color: DEFAULTS.COLOR,
      colorExpression: '',
      useImage: false,
      url: {
        qStaticContentUrlDef: {
          qUrl: '',
        },
      },
      size: DEFAULTS.BACKGROUND_SIZE,
      position: DEFAULTS.BACKGROUND_POSITION,
    },
    border: {
      useColorExpression: false,
      color: DEFAULTS.COLOR,
      colorExpression: '',
      useBorder: false,
      radius: DEFAULTS.BORDER_RADIUS,
      width: DEFAULTS.BORDER_WIDTH,
    },
    icon: {
      useIcon: false,
      iconType: '',
      position: DEFAULTS.ICON_POSITION,
    },
  },
  /**
   * @type {array}
   */
  actions: [],
};

export default properties;
