import defaultValues from '../../__tests__/default-button-props';
import actionButton, { runActions } from '../action-button';

let actionList;
let button;

describe('action button', () => {
  describe('ActionButton', () => {
    beforeEach(() => {
      button = {
        setAttribute: sinon.spy(),
        removeAttribute: sinon.spy(),
      };
      defaultValues.button = button;
      defaultValues.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
      defaultValues.layout.navigation = { action: 'firstSheet', sheet: 'mySheet' };
      defaultValues.app.clearAll = sinon.spy();
      defaultValues.context.permissions = ['interact'];
      defaultValues.senseNavigation = {
        goToSheet: sinon.spy(),
      };
    });
    it('should render action button', () => {
      const aButton = actionButton(defaultValues);
      expect(aButton).to.be.an('object');
      expect(aButton.textContent).to.equal('testLabel');
      expect(defaultValues.button.setAttribute).to.have.been.called;
    });

    it('should disable action button on click and enable again', async () => {
      const aButton = actionButton(defaultValues);
      await aButton.onclick();
      expect(button.setAttribute).to.have.been.calledWith('disabled', true);
      expect(button.removeAttribute).to.have.been.calledWith('disabled');
      expect(defaultValues.senseNavigation.goToSheet).to.have.been.called;
    });

    it('should not act on click when permissions not present', async () => {
      defaultValues.context.permissions = ['notInteract'];
      const aButton = actionButton(defaultValues);
      await aButton.onclick();
      expect(defaultValues.button.setAttribute).to.not.have.been.calledWith('disabled', true);
    });

    it('should run without navigation', async () => {
      defaultValues.layout.navigation = {};
      const aButton = actionButton(defaultValues);
      await aButton.onclick();
      expect(button.removeAttribute).to.have.been.calledWith('disabled');
    });
  });
  describe('runActions', () => {
    beforeEach(() => {
      actionList = [sinon.spy(), sinon.spy()];
    });
    it('should call all functions in array', async () => {
      await runActions(actionList);
      expect(actionList[0]).to.have.been.calledOnce;
      expect(actionList[1]).to.have.been.calledOnce;
    });
  });
  describe('disabledButton', () => {
    button = {
      setAttribute: sinon.spy(),
    };
    defaultValues.button = button;
    defaultValues.layout.style.useEnabledCondition = true;
    defaultValues.layout.style.enabledCondition = 0;
    it('should render disabled button', () => {
      const aButton = actionButton(defaultValues);
      expect(aButton).to.be.an('object');
      expect(defaultValues.button.setAttribute).to.have.been.calledWith('disabled', true);
    });
  });
});
