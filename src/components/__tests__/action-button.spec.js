import defaultValues from '../../__tests__/default-button-props';
import { runActions, renderButton } from '../action-button';

let actionList;
let button;
let defaults;

describe('action button', () => {
  describe('renderButton', () => {
    beforeEach(() => {
      defaults = defaultValues();
      button = {
        setAttribute: jest.fn(),
        removeAttribute: jest.fn(),
        firstElementChild: { setAttribute: () => {}, text: {} },
        appendChild: () => {},
      };
      defaults.element.firstElementChild = button;
      defaults.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
      defaults.layout.navigation = { action: 'firstSheet', sheet: 'mySheet' };
      defaults.app.clearAll = jest.fn();
      defaults.senseNavigation = {
        goToSheet: jest.fn(),
        getCurrentStoryId: () => false,
      };
    });
    it('should render action button', () => {
      renderButton(defaults);
      expect(defaults.element.firstElementChild).toBeInstanceOf(Object);
      expect(button.setAttribute).toHaveBeenCalled;
    });

    it('should disable action button on click and enable again', async () => {
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).toHaveBeenCalledWith('disabled', true);
      expect(button.removeAttribute).toHaveBeenCalledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).toHaveBeenCalled;
    });

    it("should not act on click when 'active' constraint is enabled ", async () => {
      defaults.constraints = { active: true };
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).not.toHaveBeenCalledWith('disabled', true);
    });

    it('should not act on click when button is disabled by condition', async () => {
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).not.toHaveBeenCalledWith('disabled', true);
    });

    it('should run without navigation', async () => {
      defaults.layout.navigation = {};
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.removeAttribute).toHaveBeenCalledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).toNotHaveBeenCalled;
    });

    it('should not run navigation when in story mode', async () => {
      defaults.senseNavigation.getCurrentStoryId = () => 'storyIde';
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.removeAttribute).toHaveBeenCalledWith('disabled');
      expect(defaults.senseNavigation.goToSheet).toNotHaveBeenCalled;
    });

    it('should call scale and resetScale on mousedown/up', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.offsetHeight = 100;
      defaults.element.firstElementChild.offsetWidth = 200;
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.onmousedown({ button: 0 });
      expect(defaults.element.firstElementChild.style.transform).toEqual('scale(0.99, 0.98)');
      defaults.element.firstElementChild.onmouseup();
      expect(defaults.element.firstElementChild.style.transform).toEqual('scale(1)');
    });
    it('should not call scale with secondary button', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.offsetHeight = 100;
      defaults.element.firstElementChild.offsetWidth = 200;
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.onmousedown({ button: 2 });
      expect(defaults.element.firstElementChild.style.transform).toEqual('');
    });
    it('should call scale and resetScale on touchstart/stop', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.offsetHeight = 200;
      defaults.element.firstElementChild.offsetWidth = 100;
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchstart();
      expect(defaults.element.firstElementChild.style.transform).toEqual('scale(0.98, 0.99)');
      defaults.element.firstElementChild.ontouchend();
      expect(defaults.element.firstElementChild.style.transform).toEqual('scale(1)');
    });
    it('should not scale nor reset when disabled', async () => {
      defaults.layout.useEnabledCondition = true;
      defaults.layout.enabledCondition = 0;
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchstart();
      expect(defaults.element.firstElementChild.style.transform).toEqual('');
      defaults.element.firstElementChild.ontouchend();
      expect(defaults.element.firstElementChild.style.transform).toEqual('');
    });
    it('should not scale nor reset scale when in edit mode', async () => {
      defaults.constraints = {
        passive: true,
        active: true,
      };
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchstart();
      expect(defaults.element.firstElementChild.style.transform).toEqual('');
      defaults.element.firstElementChild.ontouchend();
      expect(defaults.element.firstElementChild.style.transform).toEqual('');
    });
    it('should not reset scale when already scaled to 1', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: 'scale(1)' };
      defaults.element.firstElementChild.onmouseleave();
      expect(defaults.element.firstElementChild.style.transform).toEqual('scale(1)');
    });
    it('should not reset scale when already scale is not set yet', async () => {
      renderButton(defaults);
      defaults.element.firstElementChild.style = { transform: '' };
      defaults.element.firstElementChild.ontouchcancel();
      expect(defaults.element.firstElementChild.style.transform).toEqual('');
    });
    it('should act on click when `On-demand app` navigation and odag link are selected', async () => {
      defaults.layout.navigation = { action: 'odagLink' };
      defaults.layout.odagLink = 'odagLinkId';
      defaults.layout.actions = [{ actionType: 'refreshDynamicViews' }];
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).toHaveBeenCalledWith('disabled', true);
      expect(button.removeAttribute).toHaveBeenCalledWith('disabled');
    });
    it('should navigate to Odag Popup', async () => {
      defaults.layout.navigation = { action: 'odagLink' };
      defaults.layout.odagLink = 'odagLinkId';
      defaults.senseNavigation = {
        openOdagPopup: jest.fn(),
        getCurrentStoryId: () => false,
      };
      renderButton(defaults);
      await defaults.element.firstElementChild.onclick();
      expect(button.setAttribute).toHaveBeenCalledWith('disabled', true);
      expect(button.removeAttribute).toHaveBeenCalledWith('disabled');
      expect(defaults.senseNavigation.openOdagPopup).toHaveBeenCalled;
    });
  });
  describe('runActions', () => {
    beforeEach(() => {
      actionList = [jest.fn(), jest.fn()];
    });
    it('should call all functions in array', async () => {
      await runActions(actionList);
      expect(actionList[0]).toHaveBeenCalledOnce;
      expect(actionList[1]).toHaveBeenCalledOnce;
    });
  });
});
