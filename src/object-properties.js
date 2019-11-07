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
    /**
     * @type {string}
     */
    label: 'Button',
    /**
     * @type {object}
     */
    font: {
      /**
       * @type {string}
       */
      size: '',
      /**
       * @type {boolean}
       */
      useColorExpression: false,
      /**
       * @type {object}
       */
      color: {
        index: -1,
        color: null,
      },
      /**
       * @type {string}
       */
      colorExpression: '',
      /**
       * @type {object}
       */
      style: {
        bold: true,
        italic: false,
        underline: false,
      },
      /**
       * @type {string}
       */
      align: 'center',
    },
    /**
     * @type {object}
     */
    background: {
      /**
       * @type {boolean}
       */
      useColorExpression: false,
      /**
       * @type {object}
       */
      color: {
        index: -1,
        color: null,
      },
      /**
       * @type {string}
       */
      colorExpression: '',
      /**
       * @type {boolean}
       */
      useImage: false,
      /**
       * @type {string}
       */
      size: 'auto',
      /**
       * @type {string}
       */
      position: 'topLeft',
    },
    /**
     * @type {object}
     */
    border: {
      /**
       * @type {boolean}
       */
      useBorder: false,
      /**
       * @type {number}
       */
      radius: 0,
      /**
       * @type {number}
       */
      width: 0,
      /**
       * @type {boolean}
       */
      useColorExpression: false,
      /**
       * @type {object}
       */
      color: {
        index: -1,
        color: null,
      },
      /**
       * @type {string}
       */
      colorExpression: '',
    },
  },
  /**
   * @type {array}
   */
  actions: [],
};

export default properties;
