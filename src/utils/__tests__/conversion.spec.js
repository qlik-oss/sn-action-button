import objectProperties from "../../object-properties";
import importProperties, { convertAction, convertNavigation } from "../conversion";

describe("conversion", () => {
  describe("convertNavigation", () => {
    it("should return goToSheet", () => {
      const result = convertNavigation("gotoSheet");
      expect(result).toEqual("goToSheet");
    });
    it("should return goToSheetById", () => {
      const result = convertNavigation("gotoSheetById");
      expect(result).toEqual("goToSheetById");
    });
    it("should return goToStory", () => {
      const result = convertNavigation("gotoStory");
      expect(result).toEqual("goToStory");
    });
    it("should return none for switchToEdit", () => {
      const result = convertNavigation("switchToEdit");
      expect(result).toEqual("none");
    });
    it("should return default entry", () => {
      const result = convertNavigation("myOldType");
      expect(result).toEqual("myOldType");
    });
  });

  describe("convertAction", () => {
    const newProperties = { action: [] };
    const action = {
      actionType: "thisAction",
      selectedBookmark: "thisBookmark",
      selectedField: "thisField",
      variable: "thisVariable",
      value: "thisValue",
      softLock: false,
      cId: "cId",
    };
    beforeEach(() => {
      newProperties.actions = [];
    });

    it("should return action as is", () => {
      convertAction(action, newProperties);
      expect(newProperties.actions).toHaveLength(1);
      expect(newProperties.actions[0].actionType).toEqual(action.actionType);
      expect(newProperties.actions[0].bookmark).toEqual(action.selectedBookmark);
      expect(newProperties.actions[0].field).toEqual(action.selectedField);
      expect(newProperties.actions[0].variable).toEqual(action.variable);
      expect(newProperties.actions[0].value).toEqual(action.value);
      expect(newProperties.actions[0].softLock).toEqual(action.softLock);
      expect(newProperties.actions[0].cId).toEqual(action.cId);
    });

    it("should convert clearOther", () => {
      action.actionType = "clearOther";
      convertAction(action, newProperties);
      expect(newProperties.actions).toHaveLength(1);
      expect(newProperties.actions[0].actionType).toEqual("clearAllButThis");
      expect(newProperties.actions[0].bookmark).toEqual(action.selectedBookmark);
      expect(newProperties.actions[0].field).toEqual(action.selectedField);
      expect(newProperties.actions[0].variable).toEqual(action.variable);
      expect(newProperties.actions[0].value).toEqual(action.value);
      expect(newProperties.actions[0].softLock).toEqual(action.softLock);
      expect(newProperties.actions[0].cId).toEqual(action.cId);
    });

    it("should convert unlockAllAndClearAll", () => {
      action.actionType = "unlockAllAndClearAll";
      convertAction(action, newProperties);
      expect(newProperties.actions).toHaveLength(1);
      expect(newProperties.actions[0].actionType).toEqual("clearAll");
      expect(newProperties.actions[0].bookmark).toEqual(action.selectedBookmark);
      expect(newProperties.actions[0].field).toEqual(action.selectedField);
      expect(newProperties.actions[0].variable).toEqual(action.variable);
      expect(newProperties.actions[0].value).toEqual(action.value);
      expect(newProperties.actions[0].softLock).toBe(true);
      expect(newProperties.actions[0].cId).toEqual(action.cId);
    });

    it("should convert selectField", () => {
      action.actionType = "selectField";
      convertAction(action, newProperties);
      expect(newProperties.actions).toHaveLength(1);
      expect(newProperties.actions[0].actionType).toEqual("selectMatchingValues");
      expect(newProperties.actions[0].bookmark).toEqual(action.selectedBookmark);
      expect(newProperties.actions[0].field).toEqual(action.selectedField);
      expect(newProperties.actions[0].variable).toEqual(action.variable);
      expect(newProperties.actions[0].value).toEqual(action.value);
      expect(newProperties.actions[0].softLock).toEqual(action.softLock);
      expect(newProperties.actions[0].cId).toEqual(action.cId);
    });

    it("should convert selectAndLockField", () => {
      action.actionType = "selectAndLockField";
      convertAction(action, newProperties);
      expect(newProperties.actions).toHaveLength(2);
      expect(newProperties.actions[0].actionType).toEqual("selectMatchingValues");
      expect(newProperties.actions[0].bookmark).toEqual(action.selectedBookmark);
      expect(newProperties.actions[0].field).toEqual(action.selectedField);
      expect(newProperties.actions[0].variable).toEqual(action.variable);
      expect(newProperties.actions[0].value).toEqual(action.value);
      expect(newProperties.actions[0].softLock).toEqual(action.softLock);
      expect(newProperties.actions[0].cId).toEqual(null);
      expect(newProperties.actions[1].actionType).toEqual("lockField");
      expect(newProperties.actions[1].bookmark).toEqual(action.selectedBookmark);
      expect(newProperties.actions[1].field).toEqual(action.selectedField);
      expect(newProperties.actions[1].variable).toEqual(action.variable);
      expect(newProperties.actions[1].value).toEqual(action.value);
      expect(newProperties.actions[1].softLock).toEqual(action.softLock);
      expect(newProperties.actions[1].cId).toEqual(action.cId);
    });
  });

  describe("importProperties", () => {
    let exportedFmt;
    let initialProperties;
    beforeEach(() => {
      exportedFmt = { properties: { visualization: "qlik-button-for-navigation" } };
      initialProperties = JSON.parse(JSON.stringify(objectProperties));
    });
    it("should return default newPropertyTree", () => {
      const result = importProperties(exportedFmt, initialProperties);
      expect(result).toBeInstanceOf(Object);
      expect(result.qChildren).toBeInstanceOf(Array);
      expect(result.qChildren).toHaveLength(0);
      expect(result.qProperty.actions).toBeInstanceOf(Array);
      expect(result.qProperty.actions).toHaveLength(0);
      expect(result.qProperty.props.useEnabledCondition).toEqual(null);
      expect(result.qProperty.props.fullWidth).toEqual("auto");
      expect(result.qProperty.showTitles).toBe(true);
      expect(result.qProperty.title).toEqual("");
      expect(result.qProperty.footnote).toEqual("");
      expect(result.qProperty.navigation.action).toEqual("none");
    });

    it("should not convert qLayoutExclude", () => {
      exportedFmt.properties.qLayoutExclude = { someProperty: "withAValue" };
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.qLayoutExclude.disabled).not.toHaveProperty("someProperty");
    });

    it("should convert props from exported properties and overwrite initalprops", () => {
      exportedFmt.properties.props = {
        buttonLabel: "myButton",
        buttonShowIcon: true,
        buttonIconLui: "thisIcon",
        buttonTextAlign: "left",
        navigationAction: "thisNavigationAction",
        selectedSheet: "thisSheet",
        selectedStory: "thisStory",
        websiteUrl: "thisUrl",
        sameWindow: false,
        actionItems: [
          {
            actionType: "someAction",
          },
          {
            actionType: "someAction2",
          },
        ],
      };
      const result = importProperties(exportedFmt, initialProperties);
      const expectedStyle = JSON.parse(JSON.stringify(initialProperties.style));
      expectedStyle.label = "myButton";
      expectedStyle.icon.useIcon = true;
      expectedStyle.icon.iconType = "thisIcon";
      expectedStyle.font.align = "left";
      expect(result.qProperty.actions).toHaveLength(2);
      expect(result.qProperty.style).toEqual(expectedStyle);
      expect(result.qProperty.navigation).toEqual({
        action: "thisNavigationAction",
        sameWindow: false,
        sheet: "thisSheet",
        story: "thisStory",
        websiteUrl: "thisUrl",
      });
    });

    it("should pick sheet based on navigation action gotoSheetId", () => {
      exportedFmt.properties.props = {
        navigationAction: "gotoSheetById",
        selectedSheet: "notThisSheet",
        sheetId: "thisId",
      };
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.navigation.sheet).toEqual("thisId");
    });

    it("should convert qStateName", () => {
      exportedFmt.properties.qStateName = "thisState";
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.qStateName).toEqual("thisState");
    });

    it("no exportedFmt", () => {
      const result = importProperties(undefined, initialProperties);
      expect(result).toHaveProperty("qChildren");
      expect(result).toHaveProperty("qProperty");
    });

    it("should convert titles", () => {
      exportedFmt.properties.showTitles = true;
      exportedFmt.properties.title = "hello1";
      exportedFmt.properties.subtitle = "hello2";
      exportedFmt.properties.footnote = "hello3";
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.showTitles).toBe(true);
      expect(result.qProperty.title).toEqual("hello1");
      expect(result.qProperty.subtitle).toEqual("hello2");
      expect(result.qProperty.footnote).toEqual("hello3");
    });
  });
});
