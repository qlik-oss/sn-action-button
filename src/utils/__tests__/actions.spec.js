import actions, { checkShowAction, getActionsList, getValueList } from "../actions";

describe("actions", () => {
  const qStateName = "someState";
  let app;
  let multiUserAutomation;
  let createdBookmark;
  let createdTemporaryBookmark;
  let fieldObject;
  let fieldInfoObject;
  let variableObject;
  let field;
  let bookmark;
  let variable;
  let automationId;
  let inputs = [];
  let automationPostData = false;
  let automationTriggered = false;
  const value = "someValue";
  const softLock = true;
  const resourceId = "fakeResourceId";
  const id = "fakeId";
  const sheetId = "fakeSheetId";
  const senseNavigation = { getCurrentSheetId: () => sheetId };
  const tenantId = "fakeTenantId";
  const spaceId = "fakeSpaceId";
  const csrfToken = "fakeCsrfToken";
  const automationExecutionToken = "fakeExecutionToken";
  const blocks = [
    { displayName: "Inputs", type: "FormBlock", form: [{ label: "blockLabel1" }, { label: "blockLabel2" }] },
  ];
  const translator = { get: () => "" };

  describe("all actions", () => {
    beforeEach(() => {
      field = "someField";
      bookmark = "someBookmark";
      variable = "someVariable";
      automationId = "someAutomation";
      fieldObject = {
        clear: jest.fn(),
        clearAllButThis: jest.fn(),
        lock: jest.fn(),
        unlock: jest.fn(),
        select: jest.fn(),
        selectAll: jest.fn(),
        selectValues: jest.fn(),
        selectAlternative: jest.fn(),
        selectExcluded: jest.fn(),
        selectPossible: jest.fn(),
        toggleSelect: jest.fn(),
      };
      fieldInfoObject = {
        qTags: [],
      };
      variableObject = {
        setStringValue: jest.fn(),
      };
      createdBookmark = {
        getLayout: jest.fn(() => Promise.resolve({ qInfo: { qId: "bmId" } })),
      };
      app = {
        id: "fakeAppId",
        applyBookmark: jest.fn(),
        clearAll: jest.fn(),
        createBookmark: jest.fn(() => Promise.resolve(createdBookmark)),
        createTemporaryBookmark: jest.fn(() => Promise.resolve(createdTemporaryBookmark)),
        back: jest.fn(),
        forward: jest.fn(),
        getField: jest.fn(() => Promise.resolve(fieldObject)),
        getFieldDescription: jest.fn(() => Promise.resolve(fieldInfoObject)),
        getVariableByName: jest.fn(() => Promise.resolve(variableObject)),
        lockAll: jest.fn(),
        unlockAll: jest.fn(),
        getBookmarkList: () => [{ qData: { title: "findMyBookmark" }, qInfo: { qId: "myBookmarkId" } }],
        evaluate: () => "43850;43881",
        doReload: jest.fn(() => true),
        doSave: jest.fn(),
        saveObjects: jest.fn(),
      };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => ({
            resourceId,
            id,
            automationExecutionToken,
            executionToken: automationExecutionToken,
            inputs,
            blocks,
            tenantId,
            headers: { get: () => csrfToken },
            attributes: { spaceId },
          }),
          headers: { get: () => csrfToken },
        })
      );
    });

    afterEach(() => {
      inputs = [];
      automationPostData = false;
      jest.resetAllMocks();
    });

    it("should call applyBookmark", async () => {
      const actionObj = actions.find((action) => action.value === "applyBookmark");
      await actionObj.getActionCall({ app, bookmark })();
      expect(app.applyBookmark).toHaveBeenCalledWith(bookmark);
    });

    it("should NOT call applyBookmark when no bookmark", async () => {
      const actionObj = actions.find((action) => action.value === "applyBookmark");
      bookmark = null;
      await actionObj.getActionCall({ app, bookmark })();
      expect(app.applyBookmark).toHaveBeenCalledTimes(0);
    });

    it("should call applyBookmark with bookmark from bookmark list", async () => {
      const actionObj = actions.find((action) => action.value === "applyBookmark");
      await actionObj.getActionCall({ app, bookmark: "findMyBookmark" })();
      expect(app.applyBookmark).toHaveBeenCalledWith("myBookmarkId");
    });

    it("should call back", async () => {
      const actionObject = actions.find((action) => action.value === "back");
      await actionObject.getActionCall({ app })();
      expect(app.back).toHaveBeenCalled();
    });

    it("should call forward", async () => {
      const actionObject = actions.find((action) => action.value === "forward");
      await actionObject.getActionCall({ app })();
      expect(app.forward).toHaveBeenCalled();
    });

    it("should call clearAll", async () => {
      const actionObject = actions.find((action) => action.value === "clearAll");
      await actionObject.getActionCall({ app, softLock })();
      expect(app.clearAll).toHaveBeenCalledWith(softLock);
    });

    it("should call clearAllButThis", async () => {
      const actionObject = actions.find((action) => action.value === "clearAllButThis");
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.clearAllButThis).toHaveBeenCalledWith(softLock);
    });

    it("should NOT call clearAllButThis when no field", async () => {
      const actionObject = actions.find((action) => action.value === "clearAllButThis");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(fieldObject.clearAllButThis).toHaveBeenCalledTimes(0);
    });

    it("should call clearField", async () => {
      const actionObject = actions.find((action) => action.value === "clearField");
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.clear).toHaveBeenCalled();
    });

    it("should NOT call clearField when no field", async () => {
      const actionObject = actions.find((action) => action.value === "clearField");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.clear).toHaveBeenCalledTimes(0);
    });

    it("should call selectAll", async () => {
      const actionObject = actions.find((action) => action.value === "selectAll");
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.selectAll).toHaveBeenCalledWith(softLock);
    });

    it("should NOT call selectAll when no field", async () => {
      const actionObject = actions.find((action) => action.value === "selectAll");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectAll).toHaveBeenCalledTimes(0);
    });

    it("should call toggleSelect", async () => {
      const actionObject = actions.find((action) => action.value === "toggleSelect");
      await actionObject.getActionCall({ app, qStateName, field, value, softLock })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.toggleSelect).toHaveBeenCalledWith(value, softLock);
    });

    it("should NOT call toggleSelect when no field", async () => {
      const actionObject = actions.find((action) => action.value === "toggleSelect");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field, value })();
      expect(fieldObject.toggleSelect).toHaveBeenCalledTimes(0);
    });

    it("should call selectValues", async () => {
      const actionObject = actions.find((action) => action.value === "selectValues");
      await actionObject.getActionCall({ app, qStateName, field, value, softLock })();
      const valueList = await getValueList(app, value, false);
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.selectValues).toHaveBeenCalledWith(valueList, false, softLock);
    });

    it("should NOT call selectValues when no field", async () => {
      const actionObject = actions.find((action) => action.value === "selectValues");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectValues).toHaveBeenCalledTimes(0);
    });

    it("should call selectMatchingValues", async () => {
      const actionObject = actions.find((action) => action.value === "selectMatchingValues");
      await actionObject.getActionCall({ app, qStateName, field, value, softLock })();
      expect(fieldObject.select).toHaveBeenCalledWith(value, false, softLock);
    });

    it("should NOT call selectMatchingValues when no field", async () => {
      const actionObject = actions.find((action) => action.value === "selectMatchingValues");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectValues).toHaveBeenCalledTimes(0);
    });

    it("should call selectAlternative", async () => {
      const actionObject = actions.find((action) => action.value === "selectAlternative");
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.selectAlternative).toHaveBeenCalledWith(softLock);
    });

    it("should NOT call selectAlternative when no field", async () => {
      const actionObject = actions.find((action) => action.value === "selectAlternative");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectAlternative).toHaveBeenCalledTimes(0);
    });

    it("should call selectExcluded", async () => {
      const actionObject = actions.find((action) => action.value === "selectExcluded");
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.selectExcluded).toHaveBeenCalledWith(softLock);
    });

    it("should NOT call selectExcluded when no field", async () => {
      const actionObject = actions.find((action) => action.value === "selectExcluded");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectExcluded).toHaveBeenCalledTimes(0);
    });

    it("should call selectPossible", async () => {
      const actionObject = actions.find((action) => action.value === "selectPossible");
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.selectPossible).toHaveBeenCalledWith(softLock);
    });

    it("should NOT call selectPossible when no field", async () => {
      const actionObject = actions.find((action) => action.value === "selectPossible");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectPossible).toHaveBeenCalledTimes(0);
    });

    it("should call lockAll", async () => {
      const actionObject = actions.find((action) => action.value === "lockAll");
      await actionObject.getActionCall({ app })();
      expect(app.lockAll).toHaveBeenCalled();
    });

    it("should call lockField", async () => {
      const actionObject = actions.find((action) => action.value === "lockField");
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.lock).toHaveBeenCalled();
    });

    it("should NOT call lockField when no field", async () => {
      const actionObject = actions.find((action) => action.value === "lockField");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.lock).toHaveBeenCalledTimes(0);
    });

    it("should call unlockAll", async () => {
      const actionObject = actions.find((action) => action.value === "unlockAll");
      await actionObject.getActionCall({ app })();
      expect(app.unlockAll).toHaveBeenCalled();
    });

    it("should call unlockField", async () => {
      const actionObject = actions.find((action) => action.value === "unlockField");
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(app.getField).toHaveBeenCalledWith(field, qStateName);
      expect(fieldObject.unlock).toHaveBeenCalled();
    });

    it("should NOT call unlockField when no field", async () => {
      const actionObject = actions.find((action) => action.value === "unlockField");
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.unlock).toHaveBeenCalledTimes(0);
    });

    it("should call setVariable", async () => {
      const actionObject = actions.find((action) => action.value === "setVariable");
      await actionObject.getActionCall({ app, variable, value })();
      expect(variableObject.setStringValue).toHaveBeenCalledWith(value);
    });

    it("should NOT call setVariable when no variable", async () => {
      const actionObject = actions.find((action) => action.value === "setVariable");
      variable = null;
      await actionObject.getActionCall({ app, variable, value })();
      expect(variableObject.setStringValue).toHaveBeenCalledTimes(0);
    });

    it("should do a reload and save", async () => {
      const actionObject = actions.find((action) => action.value === "doReload");
      await actionObject.getActionCall({ app, partial: true })();
      expect(app.doReload).toHaveBeenCalledWith(0, true, false);
      expect(app.doSave).toHaveBeenCalled();
    });

    it("should not save on failed reload", async () => {
      const actionObject = actions.find((action) => action.value === "doReload");
      app.doReload = () => false;
      await actionObject.getActionCall({ app, partial: true })();
      expect(app.doSave).toHaveBeenCalledTimes(0);
    });
    it("should call executeAutomation with old logic with bookmark", async () => {
      const automation = "fakeAutomationId";
      multiUserAutomation = false;
      automationId = undefined;
      automationPostData = true;
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      await actionObject.getActionCall({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        senseNavigation,
        multiUserAutomation,
        translator,
      })();
      expect(global.fetch).toHaveBeenCalledTimes(4);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/items/${automation}`);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/automations/${resourceId}`);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/automations/${resourceId}/blocks`);
      expect(global.fetch).toHaveBeenCalledWith(
        `../api/v1/automations/${id}/actions/execute?X-Execution-Token=${automationExecutionToken}&blocklabel1=${app.id}&blocklabel2=bmId`
      );
      expect(app.createBookmark).toHaveBeenCalledTimes(1);
      expect(app.saveObjects).toHaveBeenCalledTimes(1);
    });
    it("should call executeAutomation with old logic without bookmark", async () => {
      const automation = "fakeAutomationId";
      multiUserAutomation = false;
      automationId = undefined;
      automationPostData = false;
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      await actionObject.getActionCall({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        senseNavigation,
        multiUserAutomation,
        translator,
      })();
      expect(global.fetch).toHaveBeenCalledTimes(3);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/items/${automation}`);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/automations/${resourceId}`);
      expect(global.fetch).toHaveBeenCalledWith(
        `../api/v1/automations/${id}/actions/execute?X-Execution-Token=${automationExecutionToken}`
      );
    });
    it("should call executeAutomation when automationTriggered is true", async () => {
      inputs = [];
      const appId = "fakeAppId";
      let automation;
      automationPostData = false;
      automationTriggered = true;
      multiUserAutomation = true;
      const time = new Date(2022, 10, 1);
      jest.useFakeTimers("modern");
      jest.setSystemTime(time);
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      await actionObject.getActionCall({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        senseNavigation,
        multiUserAutomation,
        translator,
      })();
      expect(global.fetch).toHaveBeenCalledTimes(4);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/users/me`);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/apps/${appId}`);
      expect(global.fetch).toHaveBeenCalledWith("../api/v1/csrf-token");
      const headers = {
        "Content-Type": "application/json",
        "qlik-csrf-token": csrfToken,
        "X-Execution-Token": automationExecutionToken,
      };
      const postOptions = {
        method: "POST",
        headers,
        body: JSON.stringify({
          app: appId,
          sheet: sheetId,
          user: id,
          space: spaceId,
          tenant: tenantId,
          time,
        }),
      };
      expect(global.fetch).toHaveBeenCalledWith(
        `../api/v1/automations/${automationId}/actions/execute?X-Execution-Token=${automationExecutionToken}`,
        postOptions
      );
      jest.useRealTimers();
    });

    it("should call automation run when automationTriggered is false", async () => {
      inputs = [];
      let automation;
      automationPostData = false;
      automationTriggered = false;
      const time = new Date(2022, 10, 1);
      jest.useFakeTimers("modern");
      jest.setSystemTime(time);
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      await actionObject.getActionCall({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        multiUserAutomation,
        translator,
        senseNavigation,
      })();
      expect(global.fetch).toHaveBeenCalledTimes(4);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/users/me`);
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/apps/${app.id}`);
      expect(global.fetch).toHaveBeenCalledWith("../api/v1/csrf-token");
      const automationData = {
        id: automationId,
        inputs: {
          app: app.id,
          sheet: sheetId,
          user: id,
          space: spaceId,
          tenant: tenantId,
          time,
        },
        context: "qsbutton",
      };
      const headers = {
        "Content-Type": "application/json",
        "qlik-csrf-token": csrfToken,
      };
      const postOptions = {
        method: "POST",
        headers,
        body: JSON.stringify(automationData),
      };
      expect(global.fetch).toHaveBeenCalledWith(`../api/v1/automations/${automationId}/runs`, postOptions);
      jest.useRealTimers();
    });

    it("should NOT call executeAutomation when no automation", async () => {
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      automationId = "";
      await actionObject.getActionCall({ app, automationId, automationPostData, multiUserAutomation, translator })();
      expect(global.fetch).toHaveBeenCalledTimes(0);
    });

    it("should call executeAutomation with creation of temp bookmark", async () => {
      inputs = [];
      automationPostData = true;
      let automation;
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      await actionObject.getActionCall({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        multiUserAutomation,
        translator,
        senseNavigation,
      })();
      expect(app.createTemporaryBookmark).toHaveBeenCalled();
    });

    it("should call executeAutomation WITHOUT creation of temp bookmark", async () => {
      inputs = [];
      automationPostData = false;
      let automation;
      const actionObject = actions.find((action) => action.value === "executeAutomation");
      await actionObject.getActionCall({
        app,
        automation,
        automationId,
        automationTriggered,
        automationExecutionToken,
        automationPostData,
        multiUserAutomation,
        translator,
        senseNavigation,
      })();
      expect(app.createTemporaryBookmark).toHaveBeenCalledTimes(0);
    });

    it("should call refreshDynamicViews", async () => {
      senseNavigation.refreshDynamicViews = jest.fn();
      const actionObject = actions.find((action) => action.value === "refreshDynamicViews");
      await actionObject.getActionCall({ senseNavigation })();
      expect(senseNavigation.refreshDynamicViews).toHaveBeenCalled();
    });
  });

  describe("getValueList", () => {
    let valueString = "valueOne;valueTwo";
    let ExpectedList = [{ qText: "valueOne" }, { qText: "valueTwo" }];

    it("should return array with values in an array", async () => {
      const valueList = await getValueList(app, valueString, false);
      expect(valueList).toEqual(ExpectedList);
    });

    it("should return array with numbers in value string", async () => {
      valueString = "1;2";
      ExpectedList = [
        { qNumber: 1, qIsNumeric: true },
        { qNumber: 2, qIsNumeric: true },
      ];
      const valueList = await getValueList(app, valueString, false);
      expect(valueList).toEqual(ExpectedList);
    });

    it("should return array with converted dates", async () => {
      valueString = "2020-01-20;2020-02-20";
      ExpectedList = [
        { qNumber: 43850, qIsNumeric: true },
        { qNumber: 43881, qIsNumeric: true },
      ];
      const valueList = await getValueList(app, valueString, true);
      expect(valueList).toEqual(ExpectedList);
    });
  });

  describe("checkShowAction", () => {
    let data;

    beforeEach(() => {
      data = { actionType: "applyBookmark" };
    });

    it("should return true when field required", () => {
      const result = checkShowAction(data, "bookmark");
      expect(result).toBe(true);
    });

    it("should return false when field is not required", () => {
      const result = checkShowAction(data, "notTheField");
      expect(result).toBe(false);
    });

    it("should return undefined when action is not found", () => {
      data.actionType = "notAnAction";
      const result = checkShowAction(data, "bookmark");
      expect(result).toEqual(undefined);
    });
  });

  describe("getActionsList", () => {
    it("should return all but not FF disabled actions", () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(false),
        isFeatureBlacklisted: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(false),
      };
      const result = getActionsList(shouldHide);
      expect(result.length).toBe(20);
    });
    it("should return all but not unsupported feature navigations", () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(true),
        isFeatureBlacklisted: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(true),
      };
      const result = getActionsList(shouldHide);
      expect(result.length).toBe(20);
    });
    it("should return all but not feature blacklisted navigations", () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(false),
        isFeatureBlacklisted: jest.fn().mockReturnValue(true),
        isEnabled: jest.fn().mockReturnValue(true),
      };
      const result = getActionsList(shouldHide);
      expect(result.length).toBe(13);
    });
    it("should return all", () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(false),
        isFeatureBlacklisted: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(true),
      };
      const result = getActionsList(shouldHide);
      expect(result.length).toBe(21);
    });
  });
});
