import props from "../object-properties";
var sheets = [
    { qData: { rank: 1, showCondition: "0" }, qInfo: { qId: "id1" } },
    { qData: { rank: 2, showCondition: "0" }, qInfo: { qId: "id2" } },
    { qData: { rank: 3, showCondition: "True" }, qInfo: { qId: "id3" } },
    { qData: { rank: 4, showCondition: "//False" }, qInfo: { qId: "id4" } },
    { qData: { rank: 5, showCondition: "" }, qInfo: { qId: "id5" } },
    { qData: { rank: 6, showCondition: "False" }, qInfo: { qId: "id6" } },
    { qData: { rank: 7, showCondition: "1" }, qInfo: { qId: "id7" } },
    { qData: { rank: 8, showCondition: "False" }, qInfo: { qId: "id8" } },
];
var defaultValues = function () { return ({
    theme: {
        getDataColorSpecials: function () { return ({ primary: "myPrimaryColor" }); },
        getColorPickerColor: function () { return ""; },
        getStyle: function () { return ""; },
    },
    layout: { style: JSON.parse(JSON.stringify(props.style)) },
    element: {
        firstElementChild: {
            setAttribute: function () { },
            removeAttribute: function () { },
            firstElementChild: { setAttribute: function () { }, text: {} },
            someProps: function () { },
            appendChild: function () { },
        },
    },
    app: {
        getSheetList: function () { return sheets; },
        getOrderedVisibleSheet: function () { return sheets; },
        getBookmarkList: function () { return []; },
        storeTempSelectionState: function () { return "tempBookmarkId"; },
    },
    constraints: {},
    senseNavigation: {},
}); };
export default defaultValues;
