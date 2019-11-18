import defaultValues from '../../__tests__/default-button-props';
import render from '../root';

describe('root', () => {
  describe('render', () => {
    const element = {};
    let appendSpy;
    beforeEach(() => {
      appendSpy = sinon.spy();
      element.appendChild = appendSpy;
    });

    it('should render root', () => {
      render(element, defaultValues);
      expect(appendSpy).to.have.been.called;
    });
  });
});
