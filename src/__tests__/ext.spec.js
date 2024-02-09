import ext from "../ext";
import objectProperties from "../object-properties";

describe("ext", () => {
  const translator = {
    get: (someString) => someString,
  };
  let data;
  const shouldHide = jest.fn();
  shouldHide.isEnabled = jest.fn((feature) => feature === "SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER" && true);
  const senseNavigation = {
    getOdagLinks: () =>
      Promise.resolve([
        {
          properties: {
            data: { id: "TestOdagLink", name: "TestOdagLink" },
            type: "odaglink",
          },
        },
      ]),
  };
  const props = ext({ translator, shouldHide, senseNavigation });
  const actionItems = props.definition.items.actions.items.actionArray.items.actions.items;
  const navigationItems = props.definition.items.actions.items.navigation.items;
  const { icon } = props.definition.items.settings.items;
  const {
    labelSection,
    backgroundOptions: {
      items: { backgroundColor, backgroundImage },
    },
    backgroundBorder: {
      items: { backgroundBorderItem },
    },
  } = props.definition.items.settings.items.presentation.items.styleEditor.items;

  it("should return properties object", () => {
    expect(props).toBeInstanceOf(Object);
  });

  describe("itemTitleRef", () => {
    const { itemTitleRef } = props.definition.items.actions.items.actionArray.items.actions;

    beforeEach(() => {
      data = {
        actionType: "",
        actionLabel: "",
      };
    });

    it("Should return action label from dropdown", () => {
      data = { actionType: "applyBookmark" };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).toEqual("Object.ActionButton.ApplyBookmark");
    });

    it("Should return action label from text field", () => {
      data = { actionLabel: "actionLabel" };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).toEqual("actionLabel");
    });

    it("Should return default action label when empty action", () => {
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).toEqual("Object.ActionButton.NewAction");
    });

    it("Should return invalid action label when action is not found in actions list", () => {
      data = { actionType: "invalidAction" };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).toEqual("Object.ActionButton.InvalidAction");
    });
  });

  describe("options", () => {
    let options;
    const bookmarks = [
      {
        qData: {
          title: "someBookmark",
        },
        qInfo: {
          qId: "someId",
        },
      },
    ];
    const fields = [
      {
        qName: "someField",
      },
    ];
    const variables = [
      {
        qName: "someVariable",
        qIsReserved: false,
      },
      {
        qName: "someSystemVariable",
        qIsReserved: true,
      },
    ];
    const sheets = [
      {
        qMeta: {
          title: "myFirstSheet",
        },
        qInfo: {
          qId: "firstSheetId",
        },
        qData: {
          showCondition: "0",
        },
      },
      {
        qMeta: {
          title: "mySecondSheet",
        },
        qInfo: {
          qId: "secondSheetId",
        },
        qData: {
          showCondition: "1",
        },
      },
    ];
    const sheet = {
      properties: {
        cells: [
          {
            name: "chart-01",
          },
          {
            name: "chart-02",
          },
          {
            name: "chart-03",
          },
        ],
      },
    };
    const stories = [
      {
        qMeta: {
          title: "myFirstStory",
        },
        qInfo: {
          qId: "firstStoryId",
        },
      },
      {
        qMeta: {
          title: "mySecondStory",
        },
        qInfo: {
          qId: "secondStoryId",
        },
      },
    ];
    const dimensions = [
      {
        qInfo: {
          qId: "mHsTwF",
          qType: "dimension",
        },
        qMeta: {
          title: "cyclic",
        },
        qData: {
          grouping: "C",
        },
      },
      {
        qInfo: {
          qId: "GNHRZQ",
          qType: "dimension",
        },
        qMeta: {
          title: "single",
        },
        qData: {
          grouping: "N",
        },
      },
      {
        qInfo: {
          qId: "fb8b9972-e894-4ea1-a4d9-452d8f791672",
          qType: "dimension",
        },
        qMeta: {
          title: "Drill-down",
        },
        qData: {
          grouping: "H",
        },
      },
    ];
    const handler = {
      app: {
        getBookmarkList: () => bookmarks,
        getFieldList: () => fields,
        getVariableList: () => variables,
        getSheetList: () => sheets,
        getStoryList: () => stories,
        getObject: () => sheet,
        getDimensionList: () => dimensions,
      },
    };

    afterEach(() => {
      jest.resetAllMocks();
    });

    it("Should return an array with a bookmark", async () => {
      options = await actionItems.bookmark.options(null, handler);
      expect(options).toHaveLength(1);
      expect(options[0]).toBeInstanceOf(Object);
    });

    it("Should return an array with a field", async () => {
      options = await actionItems.field.options(null, handler);
      expect(options).toHaveLength(1);
      expect(options[0]).toBeInstanceOf(Object);
    });

    it("Should return an array with a single non-system variable", async () => {
      options = await actionItems.variable.options({ showSystemVariables: false }, handler);
      expect(options).toHaveLength(1);
      expect(options[0]).toBeInstanceOf(Object);
    });

    it("Should return an array with all variables", async () => {
      options = await actionItems.variable.options({ showSystemVariables: true }, handler);
      expect(options).toHaveLength(2);
    });

    it("Should return only cyclic group dimensions", async () => {
      options = await actionItems.cyclicDimension.options(null, handler);
      expect(options).toHaveLength(1);
      expect(options[0].label).toEqual("cyclic");
    });

    it("Should return forward and backward option", async () => {
      options = await actionItems.indexStepper.options();
      expect(options).toHaveLength(2);
      expect(options[0].value).toEqual(1);
      expect(options[1].value).toEqual(-1);
    });
    it("Should return an array with all automations", async () => {
      const automationId = "automationId";
      const automationName = "fakeAutomationName";
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => ({ data: [{ id: automationId, name: automationName }] }),
        })
      );
      options = await actionItems.automationProps.items.automationId.options();
      expect(global.fetch).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith("../api/v1/automations?limit=100");
      expect(options).toHaveLength(1);
      expect(options[0].value).toEqual(automationId);
      expect(options[0].label).toEqual(automationName);
    });

    it("Should return an array of odag app links", async () => {
      const odagLinks = [
        {
          label: "TestOdagLink",
          value: "TestOdagLink",
        },
      ];
      options = await navigationItems.odagLink.options(null, handler);
      expect(options).toHaveLength(1);
      expect(options).toStrictEqual(odagLinks);
    });

    it("Should return an array with all sheets", async () => {
      options = await navigationItems.sheet.options(null, handler);
      expect(options).toHaveLength(2);
    });

    it("Should return an array with all chart ids", async () => {
      data = {
        navigation: {
          sheet: "sheetId",
        },
      };
      options = await navigationItems.chartId.options(data, null, handler);
      expect(options).toHaveLength(3);
    });

    it("Should not return an array with all chart ids if the sheet id is not defined", async () => {
      data = {
        navigation: {
          sheet: undefined,
        },
      };
      options = await navigationItems.chartId.options(data, null, handler);
      expect(options).toBe(undefined);
    });

    it("Should return an array with all stories", async () => {
      options = await navigationItems.story.options(null, handler);
      expect(options).toHaveLength(2);
    });
  });

  describe("show functions", () => {
    beforeEach(() => {
      data = JSON.parse(JSON.stringify(objectProperties));
      data.style.background.url = {
        qStaticContentUrlDef: {
          qUrl: "myUrl",
        },
      };
    });

    it("should return false for all actionItems show functions", () => {
      const actionObject = { actionType: "forward" };
      const resultBookmark = actionItems.bookmark.show(actionObject);
      expect(resultBookmark).toBe(false);
      const resultField = actionItems.field.show(actionObject);
      expect(resultField).toBe(false);
      const resultVariable = actionItems.variable.show(actionObject);
      expect(resultVariable).toBe(false);
      const resultSystemVariable = actionItems.showSystemVariables.show(actionObject);
      expect(resultSystemVariable).toBe(false);
      const resultSoftLock = actionItems.softLock.show(actionObject);
      expect(resultSoftLock).toBe(false);
      const resultValue = actionItems.value.show(actionObject);
      expect(resultValue).toBe(false);
      const resultAutomation = actionItems.automationProps.show(actionObject);
      expect(resultAutomation).toBe(false);
    });

    it("should return true when bookmark needs to show", () => {
      const result = actionItems.bookmark.show({ actionType: "applyBookmark" });
      expect(result).toBe(true);
    });

    it("should return true when field needs to show clearAllButThis", () => {
      const result = actionItems.field.show({ actionType: "clearAllButThis" });
      expect(result).toBe(true);
    });

    it("should return true when field needs to show setVariable", () => {
      const result = actionItems.variable.show({ actionType: "setVariable" });
      expect(result).toBe(true);
    });

    it("should return true when showSystemVariables needs to show", () => {
      const result = actionItems.showSystemVariables.show({
        actionType: "setVariable",
      });
      expect(result).toBe(true);
    });

    it("should return true when softLock needs to show", () => {
      const result = actionItems.softLock.show({ actionType: "selectAll" });
      expect(result).toBe(true);
    });

    it("should return true when value needs to show", () => {
      const result = actionItems.value.show({ actionType: "selectValues" });
      expect(result).toBe(true);
    });

    it("should return true when automation props needs to show", () => {
      const result = actionItems.automationProps.show({
        actionType: "executeAutomation",
      });
      expect(result).toBe(true);
    });

    it("should return false for all navigationItems show functions", () => {
      const navigationObject = { navigation: { action: "nextSheet" } };
      const resultSheetId = navigationItems.sheetId.show(navigationObject);
      expect(resultSheetId).toBe(false);
      const resultSheet = navigationItems.sheet.show(navigationObject);
      expect(resultSheet).toBe(false);
      const resultStory = navigationItems.story.show(navigationObject);
      expect(resultStory).toBe(false);
      const resultWebsiteUrl = navigationItems.websiteUrl.show(navigationObject);
      expect(resultWebsiteUrl).toBe(false);
      const resultSameWindow = navigationItems.sameWindow.show(navigationObject);
      expect(resultSameWindow).toBe(false);
      const appId = navigationItems.appId.show(navigationObject);
      expect(appId).toBe(false);
    });

    it("should return true when sheetId needs to show", () => {
      const result = navigationItems.sheetId.show({
        navigation: { action: "goToSheetById" },
      });
      expect(result).toBe(true);
    });

    it("should return true when sheet needs to show", () => {
      const result = navigationItems.sheet.show({
        navigation: { action: "goToSheet" },
      });
      expect(result).toBe(true);
    });

    it("should return true when story needs to show", () => {
      const result = navigationItems.story.show({
        navigation: { action: "goToStory" },
      });
      expect(result).toBe(true);
    });

    it("should return true when websiteUrl needs to show", () => {
      const result = navigationItems.websiteUrl.show({
        navigation: { action: "openWebsite" },
      });
      expect(result).toBe(true);
    });

    it("should return true when sameWindow needs to show", () => {
      const result = navigationItems.sameWindow.show({
        navigation: { action: "openWebsite" },
      });
      expect(result).toBe(true);
    });

    it("should return true when appId needs to show", () => {
      const result = navigationItems.appId.show({
        navigation: { action: "openChainedApp" },
      });
      expect(result).toBe(true);
    });

    it("should return true when odagLink needs to show", () => {
      const result = navigationItems.odagLink.show({
        navigation: { action: "odagLink" },
      });
      expect(result).toBe(true);
    });

    it("should return true when enableCondition needs to show", () => {
      data.useEnabledCondition = true;
      const result = props.definition.items.enableCondition.items.condition.show(data);
      expect(result).toBe(true);
    });

    it("should return false when enableCondition should not show", () => {
      const result = props.definition.items.enableCondition.items.condition.show(data);
      expect(result).toBe(false);
    });
    // font
    it("should return false for expression and true for picker when font.useColorExpression is false", () => {
      const resultExpression = labelSection.items.labelItem.items.fontColor.items.colorExpression.show(data);
      const resultPicker = labelSection.items.labelItem.items.fontColor.items.colorPicker.show(data);
      expect(resultExpression).toBe(false);
      expect(resultPicker).toBe(true);
    });

    it("should return true for expression and false for picker when font.useColorExpression is true", () => {
      data.style.font.useColorExpression = true;
      const resultExpression = labelSection.items.labelItem.items.fontColor.items.colorExpression.show(data);
      const resultPicker = labelSection.items.labelItem.items.fontColor.items.colorPicker.show(data);
      expect(resultExpression).toBe(true);
      expect(resultPicker).toBe(false);
    });

    it("should return false for expression and true for picker when background.useColorExpression is false", () => {
      const resultExpression = backgroundColor.items.colorExpression.show(data);
      const resultPicker = backgroundColor.items.colorPicker.show(data);
      expect(resultExpression).toBe(false);
      expect(resultPicker).toBe(true);
    });
    // background
    it("should return true for expression and false for picker when background.useColorExpression is true", () => {
      data.style.background.useColorExpression = true;
      const resultExpression = backgroundColor.items.colorExpression.show(data);
      const resultPicker = backgroundColor.items.colorPicker.show(data);
      expect(resultExpression).toBe(true);
      expect(resultPicker).toBe(false);
    });

    it("should return false for imageSize when no image option is set", () => {
      const result = backgroundImage.items.imageSize.show(data);
      expect(result).toBe(false);
    });

    it("should return false for backgroundSize when no qUrl", () => {
      data.style.background.url.qStaticContentUrlDef = undefined;
      const result = backgroundImage.items.imageSize.show(data);
      expect(result).toBe(false);
    });

    it("should return true for backgroundPosition", () => {
      data.style.background.mode = "media";
      data.style.background.url.qStaticContentUrlDef.qUrl = "=someUrl";
      const result = backgroundImage.items.position.show(data);
      expect(result).toBe(true);
    });

    it("should return false for backgroundPosition when no background image is used", () => {
      const result = backgroundImage.items.position.show(data);
      expect(result).toBe(false);
    });

    it("should return false for backgroundPosition when no background image size is stretchFit", () => {
      data.style.background.mode = "media";
      data.style.background.url.qStaticContentUrlDef.qUrl = "=someUrl";
      data.style.background.size = "stretchFit";
      const result = backgroundImage.items.position.show(data);
      expect(result).toBe(false);
    });
    // border
    it("should show all border settings when border is used", () => {
      data.style.border.useBorder = true;
      const resultRadius = backgroundBorderItem.items.borderRadius.show(data);
      const resultWidth = backgroundBorderItem.items.borderWidth.show(data);
      const resultDropdown = backgroundBorderItem.items.colorDropdown.show(data);
      expect(resultRadius).toBe(true);
      expect(resultWidth).toBe(true);
      expect(resultDropdown).toBe(true);
    });

    it("should show no border settings when border is not used", () => {
      const resultRadius = backgroundBorderItem.items.borderRadius.show(data);
      const resultWidth = backgroundBorderItem.items.borderWidth.show(data);
      const resultDropdown = backgroundBorderItem.items.colorDropdown.show(data);
      expect(resultRadius).toBe(false);
      expect(resultWidth).toBe(false);
      expect(resultDropdown).toBe(false);
    });

    it("should show borderColor when no expression is used", () => {
      data.style.border.useBorder = true;
      const borderColor = backgroundBorderItem.items.colorPicker.show(data);
      const borderColorExpression = backgroundBorderItem.items.colorExpression.show(data);
      expect(borderColor).toBe(true);
      expect(borderColorExpression).toBe(false);
    });

    it("should show borderColorExpression when expression is used", () => {
      data.style.border.useBorder = true;
      data.style.border.useColorExpression = true;
      const borderColor = backgroundBorderItem.items.colorPicker.show(data);
      const borderColorExpression = backgroundBorderItem.items.colorExpression.show(data);
      expect(borderColor).toBe(false);
      expect(borderColorExpression).toBe(true);
    });
    // icon
    it("should return true for iconType", () => {
      data.style.icon.useIcon = true;
      const resultType = icon.items.iconSettings.items.iconType.show(data);
      const resultPosition = icon.items.iconSettings.items.iconPosition.show(data);
      expect(resultType).toBe(true);
      expect(resultPosition).toBe(true);
    });

    it("should return false for iconType", () => {
      const resultType = icon.items.iconSettings.items.iconType.show(data);
      const resultPosition = icon.items.iconSettings.items.iconPosition.show(data);
      expect(resultType).toBe(false);
      expect(resultPosition).toBe(false);
    });
  });
});
