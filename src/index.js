import {
  useApp,
  useConstraints,
  useEffect,
  useElement,
  useImperativeHandle,
  useMemo,
  useStaleLayout,
  useTheme,
} from "@nebula.js/stardust";

import data from "./data";
import ext from "./ext";
import properties from "./object-properties";

import { renderButton } from "./components/action-button";
import useLoadImage from "./hooks/use-load-image";

export default function supernova(env) {
  const {
    sense,
    translator,
    flags: { isEnabled },
    anything,
  } = env;
  const isFeatureBlacklisted = anything.sense?.isFeatureBlacklisted;
  const isUnsupportedFeature = anything.sense?.isUnsupportedFeature;
  const shouldHide = { isEnabled, isFeatureBlacklisted, isUnsupportedFeature };
  const multiUserAutomation = isEnabled?.("SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER");
  const senseNavigation = sense?.navigation;
  properties.style.label = sense ? translator.get("Object.ActionButton") : "Button";

  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const theme = useTheme();

      useMemo(() => {
        const button = document.createElement("button");
        button.appendChild(document.createElement("text"));
        element.appendChild(button);
      }, []);

      const layout = useStaleLayout();
      const app = useApp();
      const constraints = useConstraints();
      const isBackgroundLoaded = useLoadImage(layout, app);

      const cleanup = renderButton({
        element,
        layout,
        constraints,
        theme,
        app,
        senseNavigation,
        multiUserAutomation,
        translator,
        isBackgroundLoaded,
      });

      useEffect(
        () => () => {
          cleanup();
        },
        [element, isBackgroundLoaded]
      );

      useImperativeHandle(
        () => ({
          focus() {
            element.firstElementChild.onclick();
          },
        }),
        [element]
      );
    },
    ext: ext({ translator, shouldHide, senseNavigation, theme: anything.sense?.theme }),
  };
}
