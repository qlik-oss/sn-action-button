import supernova from '../index';
import defaultValues from './default-button-props';

describe('index', () => {
  const env = {
    Theme: defaultValues.Theme,
  };
  const { layout } = defaultValues;
  const context = { permissions: [] };
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

  it('should render supernova', () => {
    const result = supernova(env);
    result.component.mounted(thisElement);
    result.component.render({ layout, context });
    expect(result)
      .to.be.an('object')
      .to.have.keys('qae', 'component', 'ext');
    expect(result.component)
      .to.be.an('object')
      .to.have.keys('mounted', 'render', 'element');
    expect(thisElement.appendChild).to.have.been.called;
  });
  it('should render supernova with navigation', () => {
    env.sense = {
      navigation: {},
    };
    env.translator = {
      get: () => {},
    };
    const result = supernova(env);
    expect(result)
      .to.be.an('object')
      .to.have.keys('qae', 'component', 'ext');
  });
});
