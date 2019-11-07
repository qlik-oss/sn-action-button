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
    border: {
      /**
       * @type {boolean}
       */
      isUsed: false,
      /**
       * @type {number}
       */
      radius: null,
      /**
       * @type {number}
       */
      width: 0,
      /**
       * @type {boolean}
       */
      useExpression: false,
      /**
       * @type {object}
       */
      color: {
        index: -1,
        color: null,
      },
      /**
       * @type {object}
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
