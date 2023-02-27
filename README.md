# sn-action-button

Action button supernova for nebula.js

![Action button preview](./assets/preview.gif)

## Installing

If you use npm: `npm install @nebula.js/sn-action-button`. You can also load through the script tag directly from [https://unpkg.com](https://unpkg.com/@nebula.js/sn-action-button).

## Usage

```js
import { embed } from '@nebula.js/stardust';
import actionButton from '@nebula.js/sn-action-button';

// 'app' is an enigma app model
const nuked = embed(app, {
  types: [{ // register the action button object
    name: 'action-button',
    load: () => Promise.resolve(actionButton);
  }]
});

nuked.render({
  element,
  type: 'action-button',
});
```

[See full example](./example)
