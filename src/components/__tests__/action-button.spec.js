import defaultValues from '../../__tests__/default-button-props';
import renderButton, { runActions } from '../action-button';
import actions from '../../utils/actions';

let actionList;
let button;
let defaults;

describe('action button', () => {
  describe('renderButton', () => {
    beforeEach(() => {
      defaults = JSON.parse(JSON.stringify(defaultValues));
      button = {
        setAttribute: sinon.spy(),
        removeAttribute: sinon.spy(),
        firstElementChild: { setAttribute: () => {}, text: {} },
        appendChild: () => {},
      };
      defaults.element.firstElementChild = button;
      defaults.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
      defaults.layout.navigation = { action: 'firstSheet', sheet: 'mySheet' };
      defaults.app = defaultValues.app;
      defaults.app.clearAll = sinon.spy();
      defaults.context.permissions = ['interact'];
      defaults.senseNavigation = {
        goToSheet: sinon.spy(),
        getCurrentStoryId: () => false,
      };
    });
    it('should render action button', () => {
      renderButton(defaults);
      expect(defaults.element.firstElementChild).to.be.an('object');
      expect(button.setAttribute).to.have.been.called;
    });

    it('should disable action button on click and enable again', async () => {
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).to.have.been.calledWith('disabled', true);
      expect(button.removeAttribute).to.have.been.calledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).to.have.been.called;
    });

    it('should not act on click when permissions not present', async () => {
      defaults.context.permissions = ['notInteract'];
      const callback = sinon.spy();
      const oldCallback = actions[0].getActionCall;
      actions[0].getActionCall = () => callback;
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(callback).to.not.have.been.called;
      actions[0].getActionCall = oldCallback;
    });

    it('should not act on click when button is disabled by condition', async () => {
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      const callback = sinon.spy();
      const oldCallback = actions[0].getActionCall;
      actions[0].getActionCall = () => callback;
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(callback).to.not.have.been.called;
      actions[0].getActionCall = oldCallback;
    });

    it('should run without navigation', async () => {
      defaults.layout.navigation = {};
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.removeAttribute).to.have.been.calledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).to.not.have.been.called;
    });

    it('should not run navigation when in story mode', async () => {
      defaults.senseNavigation.getCurrentStoryId = () => 'storyIde';
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.removeAttribute).to.have.been.calledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).to.not.have.been.called;
    });

    it('should call scale and resetScale on mousedown/up', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.offsetHeight = 100;
      defaults.element.firstElementChild.offsetWidth = 200;
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.onmousedown({ button: 0 });
      expect(defaults.element.firstElementChild.style.transform).to.equal('scale(0.99, 0.98)');
      defaults.element.firstElementChild.onmouseup();
      expect(defaults.element.firstElementChild.style.transform).to.equal('scale(1)');
    });
    it('should not call scale with secondary button', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.offsetHeight = 100;
      defaults.element.firstElementChild.offsetWidth = 200;
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.onmousedown({ button: 2 });
      expect(defaults.element.firstElementChild.style.transform).to.equal('');
    });
    it('should call scale and resetScale on touchstart/stop', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.offsetHeight = 200;
      defaults.element.firstElementChild.offsetWidth = 100;
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchstart();
      expect(defaults.element.firstElementChild.style.transform).to.equal('scale(0.98, 0.99)');
      defaults.element.firstElementChild.ontouchend();
      expect(defaults.element.firstElementChild.style.transform).to.equal('scale(1)');
    });
    it('should not scale nor reset when disabled', async () => {
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchstart();
      expect(defaults.element.firstElementChild.style.transform).to.equal('');
      defaults.element.firstElementChild.ontouchend();
      expect(defaults.element.firstElementChild.style.transform).to.equal('');
    });
    it('should not scale nor reset scale when in edit mode', async () => {
      defaults.context.permissions = [];
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchstart();
      expect(defaults.element.firstElementChild.style.transform).to.equal('');
      defaults.element.firstElementChild.ontouchend();
      expect(defaults.element.firstElementChild.style.transform).to.equal('');
    });
    it('should not reset scale when already scaled to 1', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: 'scale(1)' };
      defaults.element.firstElementChild.onmouseleave();
      expect(defaults.element.firstElementChild.style.transform).to.equal('scale(1)');
    });
    it('should not reset scale when already scale is not set yet', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchcancel();
      expect(defaults.element.firstElementChild.style.transform).to.equal('');
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
});
