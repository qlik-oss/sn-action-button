import actions, { getValueList } from '../actions';

describe('actions', () => {
  let app;
  let fieldObject;
  let variableObject;
  let field;
  let variable;
  let bookmark;
  const value = 'someValue';
  const softLock = true;

  beforeEach(() => {
    field = 'someField';
    bookmark = 'someBookmark';
    variable = 'someVariable';
    fieldObject = {
      clear: sinon.spy(),
      clearAllButThis: sinon.spy(),
      lock: sinon.spy(),
      unlock: sinon.spy(),
      select: sinon.spy(),
      selectAll: sinon.spy(),
      selectValues: sinon.spy(),
      selectAlternative: sinon.spy(),
      selectExcluded: sinon.spy(),
      selectPossible: sinon.spy(),
      toggleSelect: sinon.spy(),
    };
    variableObject = {
      setStringValue: sinon.spy(),
    };
    app = {
      applyBookmark: sinon.spy(),
      clearAll: sinon.spy(),
      back: sinon.spy(),
      forward: sinon.spy(),
      getField: sinon.stub().resolves(fieldObject),
      getVariableByName: sinon.stub().resolves(variableObject),
      lockAll: sinon.spy(),
      unlockAll: sinon.spy(),
    };
  });

  it('should call applyBookmark', async () => {
    const actionObj = actions.find(action => action.value === 'applyBookmark');
    await actionObj.getActionCall({ app, bookmark })();
    expect(app.applyBookmark).to.have.been.calledWith(bookmark);
  });

  it('should NOT call applyBookmark when no bookmark', async () => {
    const actionObj = actions.find(action => action.value === 'applyBookmark');
    bookmark = null;
    await actionObj.getActionCall({ app, bookmark })();
    expect(app.applyBookmark).to.not.have.been.called;
  });

  it('should call clearAll', async () => {
    const actionObject = actions.find(action => action.value === 'clearAll');
    await actionObject.getActionCall({ app, softLock })();
    expect(app.clearAll).to.have.been.calledWith(softLock);
  });

  it('should call clearAllButThis', async () => {
    const actionObject = actions.find(action => action.value === 'clearAllButThis');
    await actionObject.getActionCall({ app, field, softLock })();
    expect(fieldObject.clearAllButThis).to.have.been.calledWith(softLock);
  });

  it('should NOT call clearAllButThis when no field', async () => {
    const actionObject = actions.find(action => action.value === 'clearAllButThis');
    field = null;
    await actionObject.getActionCall({ app, field, softLock })();
    expect(fieldObject.clearAllButThis).to.not.have.been.called;
  });

  it('should call forward', async () => {
    const actionObject = actions.find(action => action.value === 'forward');
    await actionObject.getActionCall({ app })();
    expect(app.forward).to.have.been.called;
  });

  it('should call back', async () => {
    const actionObject = actions.find(action => action.value === 'back');
    await actionObject.getActionCall({ app })();
    expect(app.back).to.have.been.called;
  });

  it('should call clearField', async () => {
    const actionObject = actions.find(action => action.value === 'clearField');
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.clear).to.have.been.called;
  });

  it('should NOT call clearField when no field', async () => {
    const actionObject = actions.find(action => action.value === 'clearField');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.clear).to.not.have.been.called;
  });

  it('should call lockAll', async () => {
    const actionObject = actions.find(action => action.value === 'lockAll');
    await actionObject.getActionCall({ app, field })();
    expect(app.lockAll).to.have.been.called;
  });

  it('should call lockField', async () => {
    const actionObject = actions.find(action => action.value === 'lockField');
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.lock).to.have.been.called;
  });

  it('should NOT call lockField when no field', async () => {
    const actionObject = actions.find(action => action.value === 'lockField');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.lock).to.not.have.been.called;
  });

  it('should call unlockAll', async () => {
    const actionObject = actions.find(action => action.value === 'unlockAll');
    await actionObject.getActionCall({ app, field })();
    expect(app.unlockAll).to.have.been.called;
  });

  it('should call unlockField', async () => {
    const actionObject = actions.find(action => action.value === 'unlockField');
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.unlock).to.have.been.called;
  });

  it('should NOT call unlockField when no field', async () => {
    const actionObject = actions.find(action => action.value === 'unlockField');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.unlock).to.not.have.been.called;
  });

  it('should call selectAll', async () => {
    const actionObject = actions.find(action => action.value === 'selectAll');
    await actionObject.getActionCall({ app, field, softLock })();
    expect(fieldObject.selectAll).to.have.been.calledWith(softLock);
  });

  it('should NOT call selectAll when no field', async () => {
    const actionObject = actions.find(action => action.value === 'selectAll');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.selectAll).to.not.have.been.called;
  });

  it('should call selectValues', async () => {
    const actionObject = actions.find(action => action.value === 'selectValues');
    await actionObject.getActionCall({ app, field, value, softLock })();
    expect(fieldObject.selectValues).to.have.been.calledWith(getValueList(value), false, softLock);
  });

  it('should NOT call selectValues when no field', async () => {
    const actionObject = actions.find(action => action.value === 'selectValues');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.selectValues).to.not.have.been.called;
  });

  it('should call selectAlternative', async () => {
    const actionObject = actions.find(action => action.value === 'selectAlternative');
    await actionObject.getActionCall({ app, field, softLock })();
    expect(fieldObject.selectAlternative).to.have.been.calledWith(softLock);
  });

  it('should NOT call selectAlternative when no field', async () => {
    const actionObject = actions.find(action => action.value === 'selectAlternative');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.selectAlternative).to.not.have.been.called;
  });

  it('should call selectExcluded', async () => {
    const actionObject = actions.find(action => action.value === 'selectExcluded');
    await actionObject.getActionCall({ app, field, softLock })();
    expect(fieldObject.selectExcluded).to.have.been.calledWith(softLock);
  });

  it('should NOT call selectExcluded when no field', async () => {
    const actionObject = actions.find(action => action.value === 'selectExcluded');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.selectExcluded).to.not.have.been.called;
  });

  it('should call selectPossible', async () => {
    const actionObject = actions.find(action => action.value === 'selectPossible');
    await actionObject.getActionCall({ app, field, softLock })();
    expect(fieldObject.selectPossible).to.have.been.calledWith(softLock);
  });

  it('should NOT call selectPossible when no field', async () => {
    const actionObject = actions.find(action => action.value === 'selectPossible');
    field = null;
    await actionObject.getActionCall({ app, field })();
    expect(fieldObject.selectPossible).to.not.have.been.called;
  });

  it('should call toggleSelect', async () => {
    const actionObject = actions.find(action => action.value === 'toggleSelect');
    await actionObject.getActionCall({ app, field, value, softLock })();
    expect(fieldObject.toggleSelect).to.have.been.calledWith(value, softLock);
  });

  it('should NOT call toggleSelect when no field', async () => {
    const actionObject = actions.find(action => action.value === 'toggleSelect');
    field = null;
    await actionObject.getActionCall({ app, field, value })();
    expect(fieldObject.toggleSelect).to.not.have.been.called;
  });

  it('should call setVariable', async () => {
    const actionObject = actions.find(action => action.value === 'setVariable');
    await actionObject.getActionCall({ app, variable, value })();
    expect(variableObject.setStringValue).to.have.been.called.calledWith(value);
  });

  it('should NOT call setVariable when no variable', async () => {
    const actionObject = actions.find(action => action.value === 'setVariable');
    variable = null;
    await actionObject.getActionCall({ app, variable, value })();
    expect(variableObject.setStringValue).to.not.have.been.called;
  });
});

describe('getValueList', () => {
  let valueString = 'valueOne;valueTwo';
  let expectedList = [{ qText: 'valueOne' }, { qText: 'valueTwo' }];

  it('should return array with values in an array', () => {
    expect(getValueList(valueString)).to.eql(expectedList);
  });

  it('should return array with numbers in value string', () => {
    valueString = '1;2';
    expectedList = [{ qNumber: 1, qIsNumeric: true }, { qNumber: 2, qIsNumeric: true }];
    expect(getValueList(valueString)).to.eql(expectedList);
  });
});
