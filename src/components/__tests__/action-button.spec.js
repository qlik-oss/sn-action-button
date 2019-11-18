import defaultValues from '../../__tests__/default-button-props';
import actionButton, { runActions } from '../action-button';

let actionList;
let button;

const defaults = JSON.parse(JSON.stringify(defaultValues));

describe('action button', () => {
  describe('ActionButton', () => {
    beforeEach(() => {
      button = {
        setAttribute: sinon.spy(),
        removeAttribute: sinon.spy(),
      };
      defaults.button = button;
      defaults.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
      defaults.layout.navigation = { action: 'firstSheet', sheet: 'mySheet' };
      defaults.app = defaultValues.app;
      defaults.app.clearAll = sinon.spy();
      defaults.context.permissions = ['interact'];
      defaults.senseNavigation = {
        goToSheet: sinon.spy(),
      };
    });
    it('should render action button', () => {
      const aButton = actionButton(defaults);
      expect(aButton).to.be.an('object');
      expect(defaults.button.setAttribute).to.have.been.called;
    });

    it('should disable action button on click and enable again', async () => {
      const aButton = actionButton(defaults);
      await aButton.onclick();
      expect(button.setAttribute).to.have.been.calledWith('disabled', true);
      expect(button.removeAttribute).to.have.been.calledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).to.have.been.called;
    });

    it('should not act on click when permissions not present', async () => {
      defaults.context.permissions = ['notInteract'];
      const aButton = actionButton(defaults);
      await aButton.onclick();
      expect(defaults.button.setAttribute).to.not.have.been.calledWith('disabled', true);
    });

    it('should run without navigation', async () => {
      defaults.layout.navigation = {};
      const aButton = actionButton(defaults);
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
    it('should render disabled button', () => {
      button = {
        setAttribute: sinon.spy(),
      };
      defaults.button = button;
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      const aButton = actionButton(defaults);
      expect(aButton).to.be.an('object');
      expect(defaults.button.setAttribute).to.have.been.calledWith('disabled', true);
    });
  });
});
