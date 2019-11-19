import defaultValues from '../../__tests__/default-button-props';
import renderButton, { runActions } from '../action-button';

let actionList;
let button;

const defaults = JSON.parse(JSON.stringify(defaultValues));

describe('action button', () => {
  describe('renderButton', () => {
    beforeEach(() => {
      button = {
        setAttribute: sinon.spy(),
        removeAttribute: sinon.spy(),
        firstElementChild: { setAttribute: () => {}, text: {} },
      };
      defaults.element.firstElementChild = button;
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
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).to.not.have.been.calledWith('disabled', true);
    });

    it('should run without navigation', async () => {
      defaults.layout.navigation = {};
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
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
        firstElementChild: { setAttribute: () => {}, text: {} },
      };
      defaults.element.firstElementChild = button;
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      renderButton(defaults);
      expect(defaults.element.firstElementChild).to.be.an('object');
      expect(button.setAttribute).to.have.been.calledWith('disabled', true);
    });
  });
});
