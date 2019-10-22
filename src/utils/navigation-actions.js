const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (error) {
    return true;
  }
};

export const getOrderedSheets = async app => {
  const sheets = await app.getSheetList();
  return sheets.sort((current, next) => current.qData.rank - next.qData.rank);
};

const navigationActions = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Go to first sheet',
    value: 'firstSheet',
    navigationCall: async ({ app, senseNavigation }) => {
      const sheets = await getOrderedSheets(app);
      await senseNavigation.goToSheet(sheets[0].qInfo.qId);
    },
  },
  {
    label: 'Go to next sheet',
    value: 'nextSheet',
    navigationCall: async ({ senseNavigation }) => {
      await senseNavigation.nextSheet();
    },
  },
  {
    label: 'Go to previous sheet',
    value: 'prevSheet',
    navigationCall: async ({ senseNavigation }) => {
      await senseNavigation.prevSheet();
    },
  },
  {
    label: 'Go to last sheet',
    value: 'lastSheet',
    navigationCall: async ({ app, senseNavigation }) => {
      const sheets = await getOrderedSheets(app);
      await senseNavigation.goToSheet(sheets[sheets.length - 1].qInfo.qId);
    },
  },
  {
    label: 'Go to a sheet',
    value: 'goToSheet',
    navigationCall: async ({ senseNavigation, sheet }) => {
      sheet && (await senseNavigation.goToSheet(sheet));
    },
    // TODO replace by searchable dropdown
    requiredInput: ['sheet'],
  },
  {
    label: 'Go to a sheet (defined by sheet Id)',
    value: 'goToSheetById',
    navigationCall: async ({ senseNavigation, sheet }) => {
      sheet && (await senseNavigation.goToSheet(sheet));
    },
    // TODO replace by searchable dropdown
    requiredInput: ['sheetId'],
  },
  {
    label: 'Go to a story',
    value: 'goToStory',
    navigationCall: async ({ senseNavigation, story }) => {
      story && (await senseNavigation.goToStory(story));
    },
    requiredInput: ['story'],
  },
  {
    label: 'Open a website / eMail',
    value: 'openWebsite',
    navigationCall: async ({ websiteUrl, sameWindow }) => {
      try {
        if (websiteUrl) {
          const url = websiteUrl.match(/^(https?|mailto):\/\//) ? websiteUrl : `http://${websiteUrl}`;
          let target = '';
          if (sameWindow) {
            target = inIframe() ? '_parent' : '_self';
          }
          window.open(url, target);
        }
      } catch (error) {
        // no-op
      }
    },
    requiredInput: ['websiteUrl'],
  },
];

export const checkShowNavigation = (data, field) => {
  const nav = navigationActions.find(navigation => data.navigation.action === navigation.value);
  return nav && nav.requiredInput && nav.requiredInput.indexOf(field) !== -1;
};

export default navigationActions;
