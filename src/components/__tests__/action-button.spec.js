import sinon from 'sinon';
import defaultValues from './default-button-props';
import actionButton from '../action-button';
import actions from '../../utils/actions';

let setAttributeSpy;
let spy1;
let spy2;

describe('action button', () => {
  beforeEach(() => {
    setAttributeSpy = sinon.spy();
    const button = {
      setAttribute: setAttributeSpy,
    };
    defaultValues.button = button;
    spy1 = sinon.spy();
    spy2 = sinon.spy();
    defaultValues.layout.actions = [{ actionType: 'applyBookmark' }, { actionType: 'clearAll' }];
    actions[0].promise = spy1;
    actions[1].promise = spy2;
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
    expect(spy1).to.have.been.calledWith({ actionType: 'applyBookmark', engineApp: {} });
    expect(spy2).to.have.been.calledWith({ actionType: 'clearAll', engineApp: {} });
  });
});
