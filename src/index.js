import properties from './object-properties';
import data from './data';
import ext from './ext';

import { render, teardown } from './components/root';

export default function supernova(env) {
  const { Theme, Sense } = env;
  const button = document.createElement('button');
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
          button,
          Theme,
          app,
          Sense,
        });
      },
      resize() {},
      willUnmount() {
        teardown(this.element);
      },
      destroy() {},
    },
    ext: ext(),
  };
}
