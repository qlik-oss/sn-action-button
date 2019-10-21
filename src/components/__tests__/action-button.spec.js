import defaultValues from '../../__tests__/default-button-props';
import actionButton, { runActions } from '../action-button';

let setAttributeSpy;
let removeAttributeSpy;
let spy1;
let spy2;

describe('action button', () => {
  describe('ActionButton', () => {
    beforeEach(() => {
      setAttributeSpy = sinon.spy();
      removeAttributeSpy = sinon.spy();
      const button = {
        setAttribute: setAttributeSpy,
        removeAttribute: removeAttributeSpy,
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
      expect(spy1).to.have.been.calledOnce;
      expect(spy2).to.have.been.calledOnce;
    });
  });
  describe('disabledButton', () => {
    setAttributeSpy = sinon.spy();
    const button = {
      setAttribute: setAttributeSpy,
    };
    defaultValues.button = button;
    defaultValues.layout.style.useEnabledCondition = true;
    defaultValues.layout.style.enabledCondition = 0;
    it('should render disabled button', () => {
      const aButton = actionButton(defaultValues);
      expect(aButton).to.be.an('object');
      expect(setAttributeSpy).to.have.been.calledWith('disabled', true);
    });
  });
});
