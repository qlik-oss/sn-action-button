import defaultValues from './default-button-props';
import actionButton, { runActions } from '../action-button';

let setAttributeSpy;
let spy1;
let spy2;
let fieldObject;

describe('action button', () => {
  describe('ActionButton', () => {
    beforeEach(() => {
      setAttributeSpy = sinon.spy();
      const button = {
        setAttribute: setAttributeSpy,
      };
      defaultValues.button = button;
      defaultValues.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
    });
    it('should render action button', () => {
      const aButton = actionButton(defaultValues);
      expect(aButton).to.be.an('object');
      expect(aButton.textContent).to.equal('testLabel');
      expect(setAttributeSpy).to.have.been.called;
    });

    it('should call actions when button is clicked', () => {
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(setAttributeSpy).to.have.been.calledWith('disabled', true);
    });
  });
  describe('runActions', () => {
    it('should call all functions in array', async () => {
      spy1 = sinon.spy();
      spy2 = sinon.spy();
      const actionList = [spy1, spy2];
      await runActions(actionList);
      expect(spy1).to.have.been.called;
      expect(spy2).to.have.been.called;
    });
  });
  describe('all actions', () => {
    beforeEach(() => {
      fieldObject = {
        clear: sinon.spy(),
        clearOther: sinon.spy(),
        lock: sinon.spy(),
      };
      const engineApp = {
        applyBookmark: sinon.spy(),
        back: sinon.spy(),
        clearAll: sinon.spy(),
        forward: sinon.spy(),
        getField: () => ({
          clearAllButThis: fieldObject.clearOther(true),
          clear: fieldObject.clear(),
          lock: fieldObject.lock(),
        }),
        lockAll: sinon.spy(),
      };
      defaultValues.engineApp = engineApp;
      defaultValues.layout.actions = [{ bookmark: 'testBookmark', field: 'testField', softLock: true }];
    });
    it('should call applyBookmark', () => {
      defaultValues.layout.actions[0].actionType = 'applyBookmark';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(defaultValues.engineApp.applyBookmark).to.have.been.calledWith('testBookmark');
    });
    it('should call clearAll', () => {
      defaultValues.layout.actions[0].actionType = 'clearAll';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(defaultValues.engineApp.clearAll).to.have.been.called;
    });
    it('should call clearOther', () => {
      defaultValues.layout.actions[0].actionType = 'clearOther';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(fieldObject.clearOther).to.have.been.calledWith(true);
    });
    it('should call forward', () => {
      defaultValues.layout.actions[0].actionType = 'forward';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(defaultValues.engineApp.forward).to.have.been.called;
    });
    it('should call back', () => {
      defaultValues.layout.actions[0].actionType = 'back';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(defaultValues.engineApp.back).to.have.been.called;
    });
    it('should call clearField', () => {
      defaultValues.layout.actions[0].actionType = 'clearField';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(fieldObject.clear).to.have.been.called;
    });
    it('should call lockAll', () => {
      defaultValues.layout.actions[0].actionType = 'lockAll';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(defaultValues.engineApp.lockAll).to.have.been.called;
    });
    it('should call lockField', () => {
      defaultValues.layout.actions[0].actionType = 'lockField';
      const aButton = actionButton(defaultValues);
      aButton.onclick();
      expect(fieldObject.lock).to.have.been.called;
    });
  });
});
