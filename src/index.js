import properties from './object-properties';
import data from './data';
import ext from './ext';

import renderButton from './components/action-button';

export default function supernova(env) {
  const { Theme, sense, translator } = env;
  const senseNavigation = sense && sense.navigation;
  return {
    qae: {
      properties,
      data,
    },
    component: {
      mounted(element) {
        this.element = element;
        const button = document.createElement('button');
        button.appendChild(document.createElement('text'));
        this.element.appendChild(button);
      },
      render({ layout, context }) {
        renderButton({ element: this.element, layout, context, Theme, app: this.app, senseNavigation });
      },
    },
    ext: ext({ translator }),
  };
}
