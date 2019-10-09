import defaultValues from './default-button-props';
import { render, teardown } from '../root';

describe('root', () => {
  describe('render', () => {
    const element = {};
    let appendSpy;
    beforeEach(() => {
      appendSpy = sinon.spy();
      element.append = appendSpy;
    });

    it('should render root', () => {
      render(element, defaultValues);
      expect(appendSpy).to.have.been.called;
    });

    it('should tear down component', () => {
      teardown();
    });
  });
});
