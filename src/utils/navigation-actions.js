import Util from './util';

const inIframe = () => {
  try {
    return window.self !== window.top;
  } catch (error) {
    return true;
  }
};

export const getOrderedSheets = async (app) => {
  const sheets = await app.getSheetList();
  return sheets.sort((current, next) => current.qData.rank - next.qData.rank);
};

export const getOrderedVisibleSheet = async (app) => {
  const sheets = await app.getSheetList();
  const visibleSheets = sheets.filter((sheet) => Util.evaluateCondition(sheet.qData.showCondition));
  return visibleSheets.sort((current, next) => current.qData.rank - next.qData.rank);
};

const HTTP_PROTOCOL = 'http://';
const HTTPS_PROTOCOL = 'https://';

const removeHTTP = (s) => {
  let res = s;
  if (s.startsWith(HTTP_PROTOCOL)) {
    res = s.slice(HTTP_PROTOCOL.length);
  }
  if (s.startsWith(HTTPS_PROTOCOL)) {
    res = s.slice(HTTPS_PROTOCOL.length);
  }
  return res;
};

const isEmail = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === 'mailto:';
};

const navigationActions = [
  {
    translation: 'Object.ActionButton.NoNavigation',
    value: 'none',
  },
  {
    translation: 'Object.ActionButton.GoToNextSheet',
    value: 'nextSheet',
    navigationCall: async ({ senseNavigation }) => {
      await senseNavigation.nextSheet();
    },
    requiredInput: [],
  },
  {
    translation: 'Object.ActionButton.GoToPreviousSheet',
    value: 'prevSheet',
    navigationCall: async ({ senseNavigation }) => {
      await senseNavigation.prevSheet();
    },
    requiredInput: [],
  },
  {
    translation: 'Object.ActionButton.GoToLastSheet',
    value: 'lastSheet',
    navigationCall: async ({ app, senseNavigation }) => {
      const sheets = await getOrderedVisibleSheet(app);
      await senseNavigation.goToSheet(sheets[sheets.length - 1].qInfo.qId);
    },
    requiredInput: [],
  },
  {
    translation: 'Object.ActionButton.GoToFirstSheet',
    value: 'firstSheet',
    navigationCall: async ({ app, senseNavigation }) => {
      const sheets = await getOrderedVisibleSheet(app);
      await senseNavigation.goToSheet(sheets[0].qInfo.qId);
    },
    requiredInput: [],
  },

  {
    translation: 'Object.ActionButton.GoToASheet',
    value: 'goToSheet',
    navigationCall: async ({ senseNavigation, sheet }) => {
      sheet && (await senseNavigation.goToSheet(sheet));
    },
    // TODO replace by searchable dropdown
    requiredInput: ['sheet'],
  },
  {
    translation: 'Object.ActionButton.GoToSheetById',
    value: 'goToSheetById',
    navigationCall: async ({ senseNavigation, sheet }) => {
      sheet && (await senseNavigation.goToSheet(sheet));
    },
    // TODO replace by searchable dropdown
    requiredInput: ['sheetId'],
  },
  {
    translation: 'Object.ActionButton.GoToStory',
    hide: ({ isFeatureBlacklisted }) => isFeatureBlacklisted?.('storytelling'),
    value: 'goToStory',
    navigationCall: async ({ senseNavigation, story }) => {
      story && (await senseNavigation.goToStory(story));
    },
    requiredInput: ['story'],
  },
  {
    translation: 'Object.ActionButton.OpenWebsiteEmail',
    value: 'openWebsite',
    navigationCall: async ({ websiteUrl, sameWindow, encodeURL }) => {
      try {
        if (websiteUrl) {
          let protocol;
          if (websiteUrl.startsWith(HTTP_PROTOCOL)) {
            protocol = HTTP_PROTOCOL;
          }
          if (websiteUrl.startsWith(HTTPS_PROTOCOL)) {
            protocol = HTTPS_PROTOCOL;
          }
          const url = removeHTTP(websiteUrl);
          const isE = isEmail(url);
          let target = '';
          if (sameWindow) {
            target = inIframe() ? '_parent' : '_self';
          }
          if (!isE && !sameWindow && encodeURL) {
            const encoded = encodeURI(url);
            window.open(`${protocol}${encoded}`, '_blank');
          } else {
            window.open(isE ? url : `${protocol || 'http://'}${url}`, target);
          }
        }
      } catch (error) {
        // no-op
      }
    },
    requiredInput: ['websiteUrl', 'sameWindow', 'encodeURL'],
  },
  {
    translation: 'Object.ActionButton.DocumentChain',
    value: 'openChainedApp',
    hide: ({ isEnabled, isUnsupportedFeature }) =>
      !isEnabled?.('ACTION_BUTTON_DOCUMENT_CHAINING') || isUnsupportedFeature?.('bookmarks'),
    navigationCall: async ({ app, sameWindow, appId, sheet }) => {
      const tempBookmark = app.storeTempSelectionState && (await app.storeTempSelectionState());
      let target = '';
      if (sameWindow) {
        target = inIframe() ? '_parent' : '_self';
      }
      const url = `../sense/app/${encodeURIComponent(appId)}/sheet/${encodeURIComponent(
        sheet
      )}/tempselectionstate/${encodeURIComponent(tempBookmark)}`;
      window.open(url, target);
    },
    requiredInput: ['sameWindow', 'appId', 'sheetId'],
  },
  {
    translation: 'Object.ActionButton.SelectOdagApp',
    value: 'odagLink',
    navigationCall: async ({ app, senseNavigation, odagLink, element }) => {
      if (typeof senseNavigation.openOdagPopup === 'function' && odagLink && odagLink.length > 0) {
        await senseNavigation.openOdagPopup(app, odagLink, element);
      }
    },
    requiredInput: ['odagLink'],
  },
];

export const getNavigationsList = (shouldHide) => navigationActions.filter((n) => !n.hide?.(shouldHide));

export const checkShowNavigation = (data, field) => {
  const nav = navigationActions.find((navigation) => data.navigation.action === navigation.value);
  return nav && nav.requiredInput && nav.requiredInput.indexOf(field) !== -1;
};

export default navigationActions;
