const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (error) {
    return true;
  }
};

const navigationActions = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Go to first sheet',
    value: 'firstSheet',
    navigationCall: async ({ senseNavigation }) => {
      try {
        await senseNavigation.firstSheet();
      } catch (error) {
        // no-op
      }
    },
  },
  {
    label: 'Go to next sheet',
    value: 'nextSheet',
    navigationCall: async ({ senseNavigation }) => {
      try {
        await senseNavigation.nextSheet();
      } catch (error) {
        // no-op
      }
    },
  },
  {
    label: 'Go to previous sheet',
    value: 'prevSheet',
    navigationCall: async ({ senseNavigation }) => {
      try {
        await senseNavigation.prevSheet();
      } catch (error) {
        // no-op
      }
    },
  },
  {
    label: 'Go to last sheet',
    value: 'lastSheet',
    navigationCall: async ({ senseNavigation }) => {
      try {
        await senseNavigation.lastSheet();
      } catch (error) {
        // no-op
      }
    },
  },
  {
    label: 'Go to a sheet',
    value: 'goToSheet',
    navigationCall: async ({ senseNavigation, sheet }) => {
      try {
        sheet && (await senseNavigation.goToSheet(sheet));
      } catch (error) {
        // no-op
      }
    },
    // TODO replace by searchable dropdown
    requiredInput: ['sheet'],
  },
  {
    label: 'Go to a sheet (defined by sheet Id)',
    value: 'goToSheetById',
    navigationCall: async ({ senseNavigation, sheet }) => {
      try {
        sheet && (await senseNavigation.goToSheet(sheet));
      } catch (error) {
        // no-op
      }
    },
    // TODO replace by searchable dropdown
    requiredInput: ['sheetId'],
  },
  {
    label: 'Go to a story',
    value: 'goToStory',
    navigationCall: async ({ senseNavigation, story }) => {
      try {
        story && (await senseNavigation.goToStory(story));
      } catch (error) {
        // no-op
      }
    },
    requiredInput: ['story'],
  },
  {
    label: 'Open a website / eMail',
    value: 'openWebsite',
    navigationCall: async ({ websiteUrl, sameWindow }) => {
      try {
        if (websiteUrl) {
          const url =
            websiteUrl.startsWith('https://') || websiteUrl.startsWith('http://') || websiteUrl.startsWith('mailto://')
              ? websiteUrl
              : `http://${websiteUrl}`;
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
