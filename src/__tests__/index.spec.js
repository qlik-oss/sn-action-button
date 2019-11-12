import supernova from '../index';
import defaultValues from './default-button-props';

describe('index', () => {
  const env = {
    Theme: defaultValues.Theme,
  };
  const { layout } = defaultValues;
  global.document = {
    createElement: () => ({
      appendChild: () => {},
      setAttribute: () => {},
      removeAttribute: () => {},
      firstElementChild: { setAttribute: () => {} },
    }),
  };
  const thisElement = { appendChild: () => {} };
  it('should render supernova', () => {
    const result = supernova(env);
    result.component.mounted(thisElement);
    result.component.render({ layout });
    result.component.resize();
    result.component.willUnmount();
    result.component.destroy();
    expect(result)
      .to.be.an('object')
      .to.have.keys('qae', 'component', 'ext');
  });
  it('should render supernova with navigation', () => {
    env.sense = {
      navigation: {},
    };
    const result = supernova(env);
    expect(result)
      .to.be.an('object')
      .to.have.keys('qae', 'component', 'ext');
  });
});
