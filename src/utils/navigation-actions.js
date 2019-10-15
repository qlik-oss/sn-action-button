const navigationActions = [
  {
    label: 'Go to first sheet',
    value: 'firstSheet',
    navigationCall: async () => {
      // TODO check if we can have goToFirstSheet exposed in navigation api
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
    navigationCall: async () => {
      // TODO check if we can have goToLastSheet exposed in navigation api
    },
  },
  {
    label: 'Go to a sheet',
    value: 'gotoSheet',
  },
  {
    label: 'Go to a sheet (defined by sheet Id)',
    value: 'gotoSheetById',
    navigationCall: async ({ senseNavigation, sheet }) => {
      try {
        await senseNavigation.goToSheet(sheet);
      } catch (error) {
        // no-op
      }
    },
  },
  {
    label: 'Go to a story',
    value: 'gotoStory',
    navigationCall: async ({ senseNavigation, story }) => {
      try {
        await senseNavigation.goToStory(story);
      } catch (error) {
        // no-op
      }
    },
  },
  {
    label: 'Open a website / eMail',
    value: 'openWebsite',
  },
  {
    label: 'Switch to edit mode',
    value: 'switchToEdit',
  },
];

export default navigationActions;
