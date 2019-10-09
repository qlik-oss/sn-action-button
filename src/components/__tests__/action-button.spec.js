import sinon from 'sinon';
import defaultValues from './default-button-props';
import actionButton, { runActions } from '../action-button';

let setAttributeSpy;
let spy1;
let spy2;

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
});
