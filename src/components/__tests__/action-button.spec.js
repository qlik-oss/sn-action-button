import defaultValues from '../../__tests__/default-button-props';
import actionButton, { runActions } from '../action-button';

let actionList;
let button;
let defaults;

describe('action button', () => {
  describe('ActionButton', () => {
    beforeEach(() => {
      defaults = JSON.parse(JSON.stringify(defaultValues));
      button = {
        setAttribute: sinon.spy(),
        removeAttribute: sinon.spy(),
      };
      defaults.button = button;
      defaults.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
      defaults.layout.navigation = { action: 'firstSheet', sheet: 'mySheet' };
      defaults.app.clearAll = sinon.spy();
      defaults.app.getSheetList = () => [{ qData: { rank: 1 }, qInfo: { qId: 'id1' } }];
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
    it('should call scale and resetScale on mousedown/up', async () => {
      const aButton = actionButton(defaults);
      aButton.offsetHeight = 100;
      aButton.offsetWidth = 200;
      aButton.style = { transform: '' };
      aButton.onmousedown();
      expect(aButton.style.transform).to.equal('scale(0.99, 0.98)');
      aButton.onmouseup();
      expect(aButton.style.transform).to.equal('scale(1)');
    });
    it('should call scale and resetScale on touchstart/stop', async () => {
      const aButton = actionButton(defaults);
      aButton.offsetHeight = 200;
      aButton.offsetWidth = 100;
      aButton.style = { transform: '' };
      aButton.ontouchstart();
      expect(aButton.style.transform).to.equal('scale(0.98, 0.99)');
      aButton.ontouchend();
      expect(aButton.style.transform).to.equal('scale(1)');
    });
    it('should not scale nor reset when disabled', async () => {
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      const aButton = actionButton(defaults);
      aButton.style = { transform: '' };
      aButton.ontouchstart();
      expect(aButton.style.transform).to.equal('');
      aButton.ontouchend();
      expect(aButton.style.transform).to.equal('');
    });
    it('should not scale nor reset scale when in edit mode', async () => {
      defaults.context.permissions = [];
      const aButton = actionButton(defaults);
      aButton.style = { transform: '' };
      aButton.ontouchstart();
      expect(aButton.style.transform).to.equal('');
      aButton.ontouchend();
      expect(aButton.style.transform).to.equal('');
    });
    it('should not reset scale when already scaled to 1', async () => {
      const aButton = actionButton(defaults);
      aButton.style = { transform: 'scale(1)' };
      aButton.onmouseleave();
      expect(aButton.style.transform).to.equal('scale(1)');
    });
    it('should not reset scale when already scale is not set yet', async () => {
      const aButton = actionButton(defaults);
      aButton.style = { transform: '' };
      aButton.ontouchcancel();
      expect(aButton.style.transform).to.equal('');
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
    beforeEach(() => {
      defaults = JSON.parse(JSON.stringify(defaultValues));
      defaults.button = button;
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
    });
    it('should render disabled button', () => {
      button = {
        setAttribute: sinon.spy(),
        removeAttribute: sinon.spy(),
      };
      const aButton = actionButton(defaults);
      expect(aButton).to.be.an('object');
      expect(defaults.button.setAttribute).to.have.been.calledWith('disabled', true);
    });
  });
});
