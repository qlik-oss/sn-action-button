import { create } from '@nebula.js/test-utils';

describe('index', () => {
  let renderButton;
  let sandbox;
  let supernova;
  before(() => {
    sandbox = sinon.createSandbox();
    renderButton = sandbox.stub();
    [{ default: supernova }] = aw.mock([
      ['**/action-button.js', () => renderButton]
    ],
    ['../index.js']);
  });
  afterEach(() => {
    sandbox.reset();
  });

  global.document = {
    createElement: () => {
      const newElement = {
        setAttribute: () => {},
        removeAttribute: () => {},
        firstElementChild: { setAttribute: () => {} },
        style: {},
        children: [],
      };
      newElement.appendChild = newChild => {
        newElement.children.push(newChild);
      };
      return newElement;
    },
  };
  const thisElement = {
    appendChild: sinon.spy(),
    firstElementChild: {
      setAttribute: () => {},
      removeAttribute: () => {},
      firstElementChild: { setAttribute: () => {}, text: {} },
      someProps: () => {},
      appendChild: () => {},
    },
  };

  it('should render supernova', async () => {
    const result = supernova({
      sense: { navigation: 'nav' },
      translator: { get: () => '' }
    });
    const c = create(result.component, {
      element: thisElement,
      layout: 'layout',
      constraints: 'constraints',
    });

    await c.update();

    expect(thisElement.appendChild).to.have.been.called;
    expect(renderButton).to.have.been.calledWithExactly({
      element: thisElement,
      layout: 'layout',
      app: undefined,
      constraints: 'constraints',
      theme: undefined,
      senseNavigation: 'nav'
    });
  });
});
