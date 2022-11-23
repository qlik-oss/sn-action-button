import Util from './util';
import { HTTP_PROTOCOL, removeProtocolHttp, urlHasEmailProtocol, encodeUrl } from './url-encoder';

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
    navigationCall: async ({ websiteUrl, sameWindow }) => {
      try {
        if (websiteUrl) {
          const url = removeProtocolHttp(websiteUrl);
          const isEmail = urlHasEmailProtocol(url);
          let target = '';
          if (isEmail) {
            window.open(url);
          }
          if (sameWindow) {
            target = inIframe() ? '_parent' : '_self';
            window.open(`${HTTP_PROTOCOL}${url}`, target);
          }
          if (!isEmail && !sameWindow) {
            const encoded = encodeUrl(url);
            window.open(`${HTTP_PROTOCOL}${encoded}`, '_blank');
          }
        }
      } catch (error) {
        // no-op
      }
    },
    requiredInput: ['websiteUrl', 'sameWindow'],
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
