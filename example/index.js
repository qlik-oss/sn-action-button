(function run() {
  function connect() {
    const schemaPromise = fetch('https://unpkg.com/enigma.js/schemas/3.2.json').then(response => response.json());

    const openDoc = appId => schemaPromise.then(schema => window.enigma.create({
      schema,
      url: `ws://${window.location.hostname || 'localhost'}:9076/app/${encodeURIComponent(appId)}`,
    }).open().then(qix => qix.openDoc(appId)));

    return openDoc;
  }

  connect()('/apps/Executive_Dashboard.qvf').then((app) => {
    // configure nucleus
    const nuked = window.nucleus(app, {
      types: [{
        name: 'action-button',
        load: () => Promise.resolve(window['sn-action-button']),
      }],
    });

    nuked.selections().mount(document.querySelector('.toolbar'));

    // create a session object
    nuked.create({
      type: 'action-button',
    }, {
      element: document.querySelector('.object'),
      context: {
        permissions: ['passive', 'interact', 'select', 'fetch'], // allow selections
      },
      properties: {
        actions: [{
          actionType: 'selectValues',
          field: 'Region',
          value: 'Americas;Asia',
          softLock: false
        }],
        style: {
          label: 'Make selections',
          font: {
            size: 0.8,
            style: {
              bold: true
            }
          },
          background: {
            color: 'SpringGreen'
          },
          border: {
            useBorder: true,
            radius: 1,
            width: 0,
            color: 'Green'
          },
          icon: {}
        }
      },
    });

    // create another session object
    nuked.create({
      type: 'action-button',
    }, {
      element: document.querySelectorAll('.object')[1],
      context: {
        permissions: ['passive', 'interact', 'select', 'fetch'], // allow selections
      },
      properties: {
        actions: [{
          actionType: 'clearAll',
          softLock: false,
        }],
        style: {
          label: 'Clear Selections',
          font: {
            size: 0.7,
            style: {
              italic: true
            }
          },
          background: {
            color: 'Red'
          },
          border: {
            useBorder: true,
            radius: 0.25,
            width: 0.1,
            color: 'DarkRed'
          },
          icon: {}
        }
      },
    });
  });
}());
