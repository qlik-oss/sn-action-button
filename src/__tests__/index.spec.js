import { create } from "@nebula.js/test-utils";
import * as renderButton from "../components/action-button";
import supernova from "../index";

describe("index", () => {
  const renderSpy = jest.spyOn(renderButton, "renderButton").mockResolvedValue();
  afterEach(() => {
    jest.resetAllMocks();
  });
  if (!global.document) {
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
  }
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

  it("should render supernova twice", async () => {
    const translator = { get: () => "fakeTranslation" };
    const result = supernova({
      anything: {
        sense: {
          isUnsupportedFeature: () => false,
          isFeatureBlacklisted: () => false,
        },
      },
      sense: { navigation: "nav" },
      translator,
      flags: { isEnabled: () => true },
    });
    const c = create(result.component, {
      element: thisElement,
      layout: {
        style: {
          background: {
            url: {
              aStaticContentUrl: {
                qUrl: "/media/Logo/qlik.png",
              },
            },
          },
        },
      },
      interactions: "interactions",
    });

    const value = {
      element: thisElement,
      layout: {
        style: {
          background: {
            url: {
              aStaticContentUrl: {
                qUrl: "/media/Logo/qlik.png",
              },
            },
          },
        },
      },
      app: undefined,
      interactions: "interactions",
      theme: undefined,
      senseNavigation: "nav",
      multiUserAutomation: true,
      translator,
    };

    await c.update();

    expect(thisElement.appendChild).toHaveBeenCalled();
    expect(renderSpy).toHaveBeenNthCalledWith(2, value);
  });
});
