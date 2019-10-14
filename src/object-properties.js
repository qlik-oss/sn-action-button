const properties = {
  /**
   * Current version of this generic object definition
   * @type {string}
   */
  version: '0.1.0',
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
   * @typedef {object}
   */
  style: {
    fontSize: 12,
    fontColor: {
      index: -1,
      color: '#ffffff',
    },
    backgroundColor: {
      index: -1,
      color: '#3F8AB3',
    },
    label: null,
  },
};

export default properties;
