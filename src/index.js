import properties from './object-properties';
import data from './data';
import ext from './ext';

import { render, teardown } from './components/root';

export default function supernova(/* env */) {
  const button = document.createElement('button');
  return {
    qae: {
      properties,
      data,
    },
    component: {
      mounted(element) {
        this.element = element;
      },
      render({ layout, context }) {
        render(this.element, { layout, context, button });
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
