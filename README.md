# sn-action-button
Action button supernova for nebula.js

[![CircleCI](https://circleci.com/gh/qlik-oss/sn-action-button.svg?style=shield)](https://circleci.com/gh/qlik-oss/sn-action-button)
[![Coverage Status](https://coveralls.io/repos/github/qlik-oss/sn-action-button/badge.svg)](https://coveralls.io/github/qlik-oss/sn-action-button)

## Installing

If you use npm: `npm install @nebula.js/sn-action-button`. You can also load through the script tag directly from [https://unpkg.com](https://unpkg.com/@nebula.js/sn-action-button).

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