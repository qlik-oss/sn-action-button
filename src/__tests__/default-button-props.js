import props from "../object-properties";

const sheets = [
  { qData: { rank: 1, showCondition: "0" }, qInfo: { qId: "id1" } },
  { qData: { rank: 2, showCondition: "0" }, qInfo: { qId: "id2" } },
  { qData: { rank: 3, showCondition: "True" }, qInfo: { qId: "id3" } },
  { qData: { rank: 4, showCondition: "//False" }, qInfo: { qId: "id4" } },
  { qData: { rank: 5, showCondition: "" }, qInfo: { qId: "id5" } },
  { qData: { rank: 6, showCondition: "False" }, qInfo: { qId: "id6" } },
  { qData: { rank: 7, showCondition: "1" }, qInfo: { qId: "id7" } },
  { qData: { rank: 8, showCondition: "False" }, qInfo: { qId: "id8" } },
];

const defaultValues = () => ({
  theme: {
    getDataColorSpecials: () => ({ primary: "myPrimaryColor" }),
    getColorPickerColor: () => "",
    getStyle: () => "",
  },
  layout: { style: JSON.parse(JSON.stringify(props.style)) },
  element: {
    firstElementChild: {
      setAttribute: () => {},
      removeAttribute: () => {},
      firstElementChild: { setAttribute: () => {}, text: {} },
      someProps: () => {},
      appendChild: () => {},
    },
  },
  app: {
    getSheetList: () => sheets,
    getOrderedVisibleSheet: () => sheets,
    getBookmarkList: () => [],
    storeTempSelectionState: () => "tempBookmarkId",
  },
  constraints: {},
  senseNavigation: {},
});

export default defaultValues;
