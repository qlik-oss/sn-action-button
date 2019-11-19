import properties from './object-properties';
import data from './data';
import ext from './ext';

import render from './components/root';

export default function supernova(env) {
  const { Theme, sense, translator } = env;
  const senseNavigation = sense && sense.navigation;
  let app;
  return {
    qae: {
      properties,
      data,
    },
    component: {
      mounted(element) {
        this.element = element;
        app = this.app;
      },
      render({ layout, context }) {
        render(this.element, {
          layout,
          context,
          Theme,
          app,
          senseNavigation,
        });
      },
    },
    ext: ext({ translator }),
  };
}
