import actions, { getValueList, checkShowAction } from '../actions';

describe('actions', () => {
  const sandbox = sinon.createSandbox();
  const qStateName = 'someState';
  let app;
  let createdBookmark;
  let fieldObject;
  let fieldInfoObject;
  let variableObject;
  let field;
  let bookmark;
  let variable;
  let automation;
  let hasinputs = false;
  let automationPostData = false;
  const value = 'someValue';
  const softLock = true;
  const resourceId = 'fakeResourceId';
  const guid = 'fakeGuid';
  const executionToken = 'fakeExecutionToken';
  const blocks = [{ displayName: 'Inputs', form: [{ label: 'blockLabel' }, { label: 'blockLabel' }] }];

  describe('all actions', () => {
    beforeEach(() => {
      field = 'someField';
      bookmark = 'someBookmark';
      variable = 'someVariable';
      automation = 'someAutomation';
      fieldObject = {
        clear: sandbox.spy(),
        clearAllButThis: sandbox.spy(),
        lock: sandbox.spy(),
        unlock: sandbox.spy(),
        select: sandbox.spy(),
        selectAll: sandbox.spy(),
        selectValues: sandbox.spy(),
        selectAlternative: sandbox.spy(),
        selectExcluded: sandbox.spy(),
        selectPossible: sandbox.spy(),
        toggleSelect: sandbox.spy(),
      };
      fieldInfoObject = {
        qTags: [],
      };
      variableObject = {
        setStringValue: sandbox.spy(),
      };
      createdBookmark = {
        getLayout: sandbox.stub().resolves({ qInfo: { qId: 'bmId' } }),
      };
      app = {
        applyBookmark: sandbox.spy(),
        clearAll: sandbox.spy(),
        createBookmark: sandbox.stub().resolves(createdBookmark),
        back: sandbox.spy(),
        forward: sandbox.spy(),
        getField: sandbox.stub().resolves(fieldObject),
        getFieldDescription: sandbox.stub().resolves(fieldInfoObject),
        getVariableByName: sandbox.stub().resolves(variableObject),
        lockAll: sandbox.spy(),
        unlockAll: sandbox.spy(),
        getBookmarkList: () => [{ qData: { title: 'findMyBookmark' }, qInfo: { qId: 'myBookmarkId' } }],
        evaluate: () => '43850;43881',
        doReload: sandbox.stub().returns(true),
        doSave: sandbox.spy(),
      };
      global.fetch = sandbox
        .stub()
        .returns(
          Promise.resolve({ json: () => ({ resourceId, guid, execution_token: executionToken, hasinputs, blocks }) })
        );
    });

    afterEach(() => {
      hasinputs = false;
      automationPostData = false;
      sandbox.verifyAndRestore();
    });

    it('should call applyBookmark', async () => {
      const actionObj = actions.find((action) => action.value === 'applyBookmark');
      await actionObj.getActionCall({ app, bookmark })();
      expect(app.applyBookmark).to.have.been.calledWith(bookmark);
    });

    it('should NOT call applyBookmark when no bookmark', async () => {
      const actionObj = actions.find((action) => action.value === 'applyBookmark');
      bookmark = null;
      await actionObj.getActionCall({ app, bookmark })();
      expect(app.applyBookmark).to.not.have.been.called;
    });

    it('should call applyBookmark with bookmark from bookmark list', async () => {
      const actionObj = actions.find((action) => action.value === 'applyBookmark');
      await actionObj.getActionCall({ app, bookmark: 'findMyBookmark' })();
      expect(app.applyBookmark).to.have.been.calledWith('myBookmarkId');
    });

    it('should call back', async () => {
      const actionObject = actions.find((action) => action.value === 'back');
      await actionObject.getActionCall({ app })();
      expect(app.back).to.have.been.called;
    });

    it('should call forward', async () => {
      const actionObject = actions.find((action) => action.value === 'forward');
      await actionObject.getActionCall({ app })();
      expect(app.forward).to.have.been.called;
    });

    it('should call clearAll', async () => {
      const actionObject = actions.find((action) => action.value === 'clearAll');
      await actionObject.getActionCall({ app, softLock })();
      expect(app.clearAll).to.have.been.calledWith(softLock);
    });

    it('should call clearAllButThis', async () => {
      const actionObject = actions.find((action) => action.value === 'clearAllButThis');
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.clearAllButThis).to.have.been.calledWith(softLock);
    });

    it('should NOT call clearAllButThis when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'clearAllButThis');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(fieldObject.clearAllButThis).to.not.have.been.called;
    });

    it('should call clearField', async () => {
      const actionObject = actions.find((action) => action.value === 'clearField');
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.clear).to.have.been.called;
    });

    it('should NOT call clearField when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'clearField');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.clear).to.not.have.been.called;
    });

    it('should call selectAll', async () => {
      const actionObject = actions.find((action) => action.value === 'selectAll');
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.selectAll).to.have.been.calledWith(softLock);
    });

    it('should NOT call selectAll when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'selectAll');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectAll).to.not.have.been.called;
    });

    it('should call toggleSelect', async () => {
      const actionObject = actions.find((action) => action.value === 'toggleSelect');
      await actionObject.getActionCall({ app, qStateName, field, value, softLock })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.toggleSelect).to.have.been.calledWith(value, softLock);
    });

    it('should NOT call toggleSelect when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'toggleSelect');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field, value })();
      expect(fieldObject.toggleSelect).to.not.have.been.called;
    });

    it('should call selectValues', async () => {
      const actionObject = actions.find((action) => action.value === 'selectValues');
      await actionObject.getActionCall({ app, qStateName, field, value, softLock })();
      const valueList = await getValueList(app, value, false);
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.selectValues).to.have.been.calledWith(valueList, false, softLock);
    });

    it('should NOT call selectValues when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'selectValues');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectValues).to.not.have.been.called;
    });

    it('should call selectMatchingValues', async () => {
      const actionObject = actions.find((action) => action.value === 'selectMatchingValues');
      await actionObject.getActionCall({ app, qStateName, field, value, softLock })();
      expect(fieldObject.select).to.have.been.calledWith(value, false, softLock);
    });

    it('should NOT call selectMatchingValues when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'selectMatchingValues');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectValues).to.not.have.been.called;
    });

    it('should call selectAlternative', async () => {
      const actionObject = actions.find((action) => action.value === 'selectAlternative');
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.selectAlternative).to.have.been.calledWith(softLock);
    });

    it('should NOT call selectAlternative when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'selectAlternative');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectAlternative).to.not.have.been.called;
    });

    it('should call selectExcluded', async () => {
      const actionObject = actions.find((action) => action.value === 'selectExcluded');
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.selectExcluded).to.have.been.calledWith(softLock);
    });

    it('should NOT call selectExcluded when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'selectExcluded');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectExcluded).to.not.have.been.called;
    });

    it('should call selectPossible', async () => {
      const actionObject = actions.find((action) => action.value === 'selectPossible');
      await actionObject.getActionCall({ app, qStateName, field, softLock })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.selectPossible).to.have.been.calledWith(softLock);
    });

    it('should NOT call selectPossible when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'selectPossible');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.selectPossible).to.not.have.been.called;
    });

    it('should call lockAll', async () => {
      const actionObject = actions.find((action) => action.value === 'lockAll');
      await actionObject.getActionCall({ app })();
      expect(app.lockAll).to.have.been.called;
    });

    it('should call lockField', async () => {
      const actionObject = actions.find((action) => action.value === 'lockField');
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.lock).to.have.been.called;
    });

    it('should NOT call lockField when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'lockField');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.lock).to.not.have.been.called;
    });

    it('should call unlockAll', async () => {
      const actionObject = actions.find((action) => action.value === 'unlockAll');
      await actionObject.getActionCall({ app })();
      expect(app.unlockAll).to.have.been.called;
    });

    it('should call unlockField', async () => {
      const actionObject = actions.find((action) => action.value === 'unlockField');
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(app.getField).to.have.been.calledWith(field, qStateName);
      expect(fieldObject.unlock).to.have.been.called;
    });

    it('should NOT call unlockField when no field', async () => {
      const actionObject = actions.find((action) => action.value === 'unlockField');
      field = null;
      await actionObject.getActionCall({ app, qStateName, field })();
      expect(fieldObject.unlock).to.not.have.been.called;
    });

    it('should call setVariable', async () => {
      const actionObject = actions.find((action) => action.value === 'setVariable');
      await actionObject.getActionCall({ app, variable, value })();
      expect(variableObject.setStringValue).to.have.been.called.calledWith(value);
    });

    it('should NOT call setVariable when no variable', async () => {
      const actionObject = actions.find((action) => action.value === 'setVariable');
      variable = null;
      await actionObject.getActionCall({ app, variable, value })();
      expect(variableObject.setStringValue).to.not.have.been.called;
    });

    it('should do a reload and save', async () => {
      const actionObject = actions.find((action) => action.value === 'doReload');
      await actionObject.getActionCall({ app, partial: true })();
      expect(app.doReload).to.have.been.calledWith(0, true, false);
      expect(app.doSave).to.have.been.called;
    });

    it('should not save on failed reload', async () => {
      const actionObject = actions.find((action) => action.value === 'doReload');
      app.doReload = () => false;
      await actionObject.getActionCall({ app, partial: true })();
      expect(app.doSave).to.have.not.been.called;
    });

    it('should call executeAutomation', async () => {
      hasinputs = false;
      automationPostData = false;
      const actionObject = actions.find((action) => action.value === 'executeAutomation');
      await actionObject.getActionCall({ app, automation, automationPostData })();
      expect(global.fetch).to.have.been.calledThrice;
      expect(global.fetch).to.have.been.calledWith(`../api/v1/items/${automation}`);
      expect(global.fetch).to.have.been.calledWith(`../api/v1/automations/${resourceId}`);
      expect(global.fetch).to.have.been.calledWith(
        `../api/v1/automations/${guid}/actions/execute?X-Execution-Token=${executionToken}`
      );
    });

    it('should NOT call executeAutomation when no automation', async () => {
      const actionObject = actions.find((action) => action.value === 'executeAutomation');
      automation = undefined;
      await actionObject.getActionCall({ app, automation, automationPostData })();
      expect(global.fetch).to.not.have.been.called;
    });

    it('should call executeAutomation with creation of bookmark and save app', async () => {
      hasinputs = true;
      automationPostData = true;
      const actionObject = actions.find((action) => action.value === 'executeAutomation');
      await actionObject.getActionCall({ app, automation, automationPostData })();
      expect(global.fetch).to.have.callCount(4);
      expect(app.createBookmark).to.have.been.called;
      expect(app.doSave).to.have.been.called;
    });
  });

  describe('getValueList', () => {
    let valueString = 'valueOne;valueTwo';
    let ExpectedList = [{ qText: 'valueOne' }, { qText: 'valueTwo' }];

    it('should return array with values in an array', async () => {
      const valueList = await getValueList(app, valueString, false);
      expect(valueList).to.eql(ExpectedList);
    });

    it('should return array with numbers in value string', async () => {
      valueString = '1;2';
      ExpectedList = [
        { qNumber: 1, qIsNumeric: true },
        { qNumber: 2, qIsNumeric: true },
      ];
      const valueList = await getValueList(app, valueString, false);
      expect(valueList).to.eql(ExpectedList);
    });

    it('should return array with converted dates', async () => {
      valueString = '2020-01-20;2020-02-20';
      ExpectedList = [
        { qNumber: 43850, qIsNumeric: true },
        { qNumber: 43881, qIsNumeric: true },
      ];
      const valueList = await getValueList(app, valueString, true);
      expect(valueList).to.eql(ExpectedList);
    });
  });

  describe('checkShowAction', () => {
    let data;

    beforeEach(() => {
      data = { actionType: 'applyBookmark' };
    });

    it('should return true when field required', () => {
      const result = checkShowAction(data, 'bookmark');
      expect(result).to.be.true;
    });

    it('should return false when field is not required', () => {
      const result = checkShowAction(data, 'notTheField');
      expect(result).to.be.false;
    });

    it('should return undefined when action is not found', () => {
      data.actionType = 'notAnAction';
      const result = checkShowAction(data, 'bookmark');
      expect(result).to.equal(undefined);
    });
  });
});
