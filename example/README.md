# Action button

> This example requires access to a running Qlik Engine.

### With Qlik Sense Desktop

1. Copy the `Example_Dashboard.qvf` app from `data/apps` into Qlik Sense Desktop.
1. Open `index.html` in a modern web browser.

### With Qlik Core + Docker

1. Read and accept the [Qlik Core EULA](https://core.qlik.com/eula/). Run `ACCEPT_EULA=<yes/no> docker-compose up`.
1. Open `index.html` in a modern web browser.

## Usage

```js

import nucleus from '@nebula.js/nucleus';
import actionButton from '@nebula.js/sn-actions-button';

// 'app' is an enigma app model
const nuked = nucleus(app, {
  types: [{ // register the mekko chart
    name: 'action-button',
    load: () => Promise.resolve(actionButton);
  }]
});

nuked.create({
  type: 'action-button',
}, {
  element
});
```

[See full example](./example)