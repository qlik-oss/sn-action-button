import { useElement, useStaleLayout, useEffect, useMemo, useApp, useConstraints, useTheme } from '@nebula.js/stardust';

import properties from './object-properties';
import data from './data';
import ext from './ext';

import renderButton from './components/action-button';

export default function supernova(env) {
  const { sense, translator, flags } = env;
  const senseNavigation = sense && sense.navigation;
  let { isEnabled } = flags;
  isEnabled = isEnabled('SHEET_SHOW_CONDITION');
  properties.style.label = sense ? translator.get('Object.ActionButton') : 'Button';
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const element = useElement();
      const theme = useTheme();

      useMemo(() => {
        const button = document.createElement('button');
        button.appendChild(document.createElement('text'));
        element.appendChild(button);
      }, []);

      const layout = useStaleLayout();
      const app = useApp();
      const constraints = useConstraints();

      const cleanup = renderButton({ element, layout, constraints, theme, app, senseNavigation, isEnabled });

      useEffect(() => () => {
        cleanup();
      }, [element]);
    },
    ext: ext({ translator }),
  };
}
