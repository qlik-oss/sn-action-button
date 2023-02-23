import { create } from '@nebula.js/test-utils';
import supernova from '../index';
import * as renderButton from '../components/action-button';

describe('index', () => {
  const renderSpy = jest.spyOn(renderButton, 'renderButton').mockResolvedValue();
  afterEach(() => {
    jest.resetAllMocks();
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
      newElement.appendChild = (newChild) => {
        newElement.children.push(newChild);
      };
      return newElement;
    },
  };
  const thisElement = {
    appendChild: jest.fn(),
    firstElementChild: {
      setAttribute: () => {},
      removeAttribute: () => {},
      firstElementChild: { setAttribute: () => {}, text: {} },
      someProps: () => {},
      appendChild: () => {},
    },
  };

  it('should render supernova', async () => {
    const translator = { get: () => 'fakeTranslation' }
    const result = supernova({
      anything: {
        sense: {
          isUnsupportedFeature: () => false,
          isFeatureBlacklisted: () => false,
        },
      },
      sense: { navigation: 'nav' },
      translator,
      flags: { isEnabled: () => true },
    });
    const c = create(result.component, {
      element: thisElement,
      layout: 'layout',
      constraints: 'constraints',
    });

    await c.update();

    expect(thisElement.appendChild).toHaveBeenCalled;
    expect(renderSpy).toHaveBeenCalledWith({
      element: thisElement,
      layout: 'layout',
      app: undefined,
      constraints: 'constraints',
      theme: undefined,
      senseNavigation: 'nav',
      multiUserAutomation: true,
      translator,
    });
  });
});
