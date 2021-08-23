module.exports = {
  serve: {
    snapshots: [
      {
        key: 'btn',
        meta: {
          language: 'sv-SE',
          theme: 'light',
          appLayout: {},
          size: { width: 800, height: 600 },
        },
        layout: {
          qInfo: { qId: 'CNaxMh', qType: 'action-button' },
          qSelectionInfo: {},
          actions: [],
          navigation: { action: 'none', sheet: '', story: '', websiteUrl: '', sameWindow: false },
          useEnabledCondition: false,
          enabledCondition: 1,
          showTitles: true,
          title: '',
          subtitle: '',
          footnote: '',
          showDetails: false,
          style: {
            label: 'My Button!',
            font: {
              size: 0.66,
              useColorExpression: false,
              color: { index: 13, color: '#65d3da' },
              colorExpression: '',
              style: { bold: true, italic: true, underline: true },
              align: 'left',
            },
            background: {
              useColorExpression: true,
              color: { index: -1, color: null },
              colorExpression: 'pink',
              useImage: false,
              size: 'auto',
              position: 'centerCenter',
              url: { qStaticContentUrl: {} },
            },
            border: {
              useBorder: true,
              radius: 0.51,
              width: 0.245,
              useColorExpression: false,
              color: { index: -1, color: null },
              colorExpression: '',
            },
            icon: { useIcon: true, iconType: 'image', position: 'left' },
          },
          visualization: 'action-button',
        },
      },
    ],
  },
  build: {},
};
