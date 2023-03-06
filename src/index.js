import {
  useElement,
  useStaleLayout,
  useEffect,
  useState,
  useMemo,
  useApp,
  useConstraints,
  useAppLayout,
  useTheme,
  useImperativeHandle,
} from '@nebula.js/stardust';

import properties from './object-properties';
import data from './data';
import ext from './ext';
import init from './init';

import { renderButton } from './components/action-button';
import { btnLayoutStyles } from './utils/style-utils';

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
  const multiUserAutomation = isEnabled?.('SENSECLIENT_IM_1855_AUTOMATIONS_MULTI_USER');
  const senseNavigation = sense?.navigation;
  properties.style.label = sense ? translator.get('Object.ActionButton') : 'Button';

  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const theme = useTheme();
      const appLayout = useAppLayout();
      const [instance, setInstance] = useState();
      const [renderState, setRenderState] = useState({});

      const updateRenderState = (attr, value) => {
        if (renderState[attr] !== value) {
          const newState = Object.assign({}, renderState);
          newState[attr] = value;
          setRenderState(newState);
        }
      };

      useMemo(() => {
        const button = document.createElement('button');
        button.appendChild(document.createElement('text'));
        element.appendChild(button);
      }, []);

      const layout = useStaleLayout();
      const app = useApp();
      const constraints = useConstraints();

      const cleanup = renderButton({
        element,
        layout,
        constraints,
        theme,
        app,
        senseNavigation,
        multiUserAutomation,
        translator,
      });

      useEffect(() => {
        const internal = init(element, translator, updateRenderState, theme, senseNavigation);
        internal.localeInfo = appLayout.qLocaleInfo;
        internal.inClient = !!env.sense;
        setInstance(internal);
      }, [element, appLayout, theme]);

      useEffect(() => {
        if (instance && layout) {
          instance.props.renderState = renderState;
          instance.updateRenderState = updateRenderState;
          instance.navigation = !constraints.active;
          instance.options = options;
          instance.maxFontState = checkFontState(instance, el, options, layout);

          instance.formatters = getFormatterForMeasures(
            layout.qHyperCube.qMeasureInfo.length,
            layout,
            instance.localeInfo
          );
          if (update(layout, instance, app, translator, models)) {
            btnLayoutStyles(instance, el, Theme, bkgColorEnabled, stylingPanelEnabled, muiIconsffEnabled);
            cleanup();
            el, { layout, ...instance.props, models, constraints };
          }
        }
      }, [renderState, layout, instance, rect, constraints, Theme.name(), options, models]);

      useEffect(
        () => () => {
          cleanup();
        },
        [element]
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
    ext: ext({ translator, shouldHide, senseNavigation }),
  };
}
