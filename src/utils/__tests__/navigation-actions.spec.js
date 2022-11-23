import navigationActions, {
  checkShowNavigation,
  getOrderedSheets,
  getOrderedVisibleSheet,
  getNavigationsList,
} from '../navigation-actions';
import defaultValues from '../../__tests__/default-button-props';

describe('navigation actions', () => {
  let senseNavigation;
  const sheet = 'sheetIdHere';
  const story = 'storyIdHere';
  const websiteUrl = 'https://myUrlHere';
  const mailtoUrl = 'mailto:me@example';
  const appId = 'selectedApp';
  const { app } = defaultValues();

  describe('all navigation actions', () => {
    beforeEach(() => {
      senseNavigation = {
        nextSheet: jest.fn(),
        prevSheet: jest.fn(),
        goToSheet: jest.fn(),
        goToStory: jest.fn(),
      };

      global.open = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });
    it('should not have navigation call for None', () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'none');
      expect(navigationObject).not.toHaveProperty('navigationCall');
    });
    it('should call nextSheet', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'nextSheet');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.nextSheet).toHaveBeenCalled;
    });
    it('should call prevSheet', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'prevSheet');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.prevSheet).toHaveBeenCalled;
    });
    it('should call goToSheet', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'goToSheet');
      await navigationObject.navigationCall({ senseNavigation, sheet });
      expect(senseNavigation.goToSheet).toHaveBeenCalledWith(sheet);
    });
    it('should NOT call goToSheet when no sheet', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'goToSheet');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.goToSheet).not.toHaveBeenCalled;
    });
    it('should call goToSheetById', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'goToSheetById');
      await navigationObject.navigationCall({ senseNavigation, sheet });
      expect(senseNavigation.goToSheet).toHaveBeenCalledWith(sheet);
    });
    it('should NOT call goToSheetById when no sheet', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'goToSheetById');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.goToSheet).not.toHaveBeenCalled;
    });
    it('should call goToStory', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'goToStory');
      await navigationObject.navigationCall({ senseNavigation, story });
      expect(senseNavigation.goToStory).toHaveBeenCalledWith(story);
    });
    it('should NOT call goToStory when no sheet', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'goToStory');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.goToStory).not.toHaveBeenCalled;
    });
    it('should NOT call openWebsite', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({});
      expect(global.open).not.toHaveBeenCalled;
    });
    it('should call openWebsite with defaults', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl, sameWindow: false });
      expect(global.open).toHaveBeenCalledWith(websiteUrl, '');
    });
    it('should call openWebsite and add http://', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl: 'myWebsite', sameWindow: false });
      expect(global.open).toHaveBeenCalledWith('http://myWebsite', '');
    });
    it('should call openWebsite and expect encoded result with https:// protocol', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({
        websiteUrl: 'https://mozilla.org/?x=äáöå&myOtherParam=2´5%€',
        sameWindow: false,
      });
      expect(global.open).toHaveBeenCalledWith(
        'https://mozilla.org/?x=%C3%A4%C3%A1%C3%B6%C3%A5&myOtherParam=2%C2%B45%25%E2%82%AC',
        ''
      );
    });
    it('should call openWebsite and expect encoded result with http:// protocol', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({
        websiteUrl: 'https://mozilla.org/?x=äáöå&myOtherParam=2´5%€',
        sameWindow: false,
      });
      expect(global.open).toHaveBeenCalledWith(
        'https://mozilla.org/?x=%C3%A4%C3%A1%C3%B6%C3%A5&myOtherParam=2%C2%B45%25%E2%82%AC',
        ''
      );
    });
    it('should call openWebsite in same window', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl, sameWindow: true });
      expect(global.open).toHaveBeenCalledWith(websiteUrl, '_self');
    });
    it('should call openWebsite in parent', async () => {
      const { top } = window;
      delete window.top;
      window.top = {};
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl, sameWindow: true });
      expect(global.open).toHaveBeenCalledWith(websiteUrl, '_parent');
      window.top = top;
    });
    it('should call mailto', async () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl: mailtoUrl, sameWindow: false });
      expect(global.open).toHaveBeenCalledWith(mailtoUrl, '');
    });
    describe('sheets with show conditions', () => {
      it('should call lastSheet feature flag is on', async () => {
        const navigationObject = navigationActions.find((navigation) => navigation.value === 'lastSheet');
        await navigationObject.navigationCall({ app, senseNavigation });
        expect(senseNavigation.goToSheet).toHaveBeenCalledWith('id7');
      });
      it('should call firstSheet feature flag is on', async () => {
        const navigationObject = navigationActions.find((navigation) => navigation.value === 'firstSheet');
        await navigationObject.navigationCall({ app, senseNavigation });
        expect(senseNavigation.goToSheet).toHaveBeenCalledWith('id3');
      });
    });

    describe('Document chaining', () => {
      it('should call storeTempSelectionState and open url', async () => {
        const navigationObject = navigationActions.find((navigation) => navigation.value === 'openChainedApp');
        await navigationObject.navigationCall({ app, sameWindow: false, appId, sheet });
        expect(global.open).toHaveBeenCalledWith(
          `../sense/app/${appId}/sheet/${sheet}/tempselectionstate/tempBookmarkId`,
          ''
        );
      });
      it('should call storeTempSelectionState and open url in same window', async () => {
        const navigationObject = navigationActions.find((navigation) => navigation.value === 'openChainedApp');
        await navigationObject.navigationCall({ app, sameWindow: true, appId, sheet });
        expect(global.open).toHaveBeenCalledWith(
          `../sense/app/${appId}/sheet/${sheet}/tempselectionstate/tempBookmarkId`,
          '_self'
        );
      });
      it('should call storeTempSelectionState and open url in same window', async () => {
        const { top } = window;
        delete window.top;
        window.top = {};
        const navigationObject = navigationActions.find((navigation) => navigation.value === 'openChainedApp');
        await navigationObject.navigationCall({ app, sameWindow: true, appId, sheet });
        expect(global.open).toHaveBeenCalledWith(
          `../sense/app/${appId}/sheet/${sheet}/tempselectionstate/tempBookmarkId`,
          '_parent'
        );
        window.top = top;
      });
    });

    describe('odag navigation popup', () => {
      const navigationObject = navigationActions.find((navigation) => navigation.value === 'odagLink');
      it('should not call openOdagPopup when openOdagPopup is undefined', async () => {
        await navigationObject.navigationCall({ app, senseNavigation });
        expect(senseNavigation.openOdagPopup).toBeUndefined();
      });
      it('should not call openOdagPopup when odagLink is undefined', async () => {
        senseNavigation.openOdagPopup = jest.fn();
        await navigationObject.navigationCall({ app, senseNavigation });
        expect(senseNavigation.openOdagPopup).toHaveBeenCalledTimes(0);
      });
      it('should call openOdagPopup when openOdagPopup & odagLink are defined', async () => {
        senseNavigation.openOdagPopup = jest.fn();
        await navigationObject.navigationCall({ app, senseNavigation, odagLink: 'odagLinkId' });
        expect(senseNavigation.openOdagPopup).toHaveBeenCalledTimes(1);
        expect(senseNavigation.openOdagPopup).toHaveBeenCalledWith(app, 'odagLinkId', undefined);
      });
    });
  });

  describe('checkShowNavigation', () => {
    let data;
    beforeEach(() => {
      data = {
        navigation: {
          action: 'goToSheet',
        },
      };
    });
    it('should return true when should be shown', () => {
      const result = checkShowNavigation(data, 'sheet');
      expect(result).toBe(true);
    });
    it('should return undefined when no action found', () => {
      data.navigation.action = 'notAnAction';
      const result = checkShowNavigation(data, 'sheet');
      expect(result).toBeUndefined;
    });
    it('should return false when field not in required input', () => {
      const result = checkShowNavigation(data, 'websiteUrl');
      expect(result).toBe(false);
    });
  });

  describe('getOrderedSheets', () => {
    const sheets = [
      { qData: { rank: 15 }, qInfo: { qId: 'id15' } },
      { qData: { rank: 1.5 }, qInfo: { qId: 'id1.5' } },
      { qData: { rank: 1 }, qInfo: { qId: 'id1' } },
      { qData: { rank: 7 }, qInfo: { qId: 'id7' } },
    ];
    const fakeApp = { getSheetList: () => sheets };
    it('should return sheets in correct order', async () => {
      const result = await getOrderedSheets(fakeApp);
      expect(result).toHaveLength(4);
      expect(result[0].qInfo.qId).toEqual('id1');
      expect(result[1].qInfo.qId).toEqual('id1.5');
      expect(result[2].qInfo.qId).toEqual('id7');
      expect(result[3].qInfo.qId).toEqual('id15');
    });
  });

  describe('getOrderedVisibleSheet', () => {
    const sheets = [
      { qData: { rank: 15, showCondition: 'False' }, qInfo: { qId: 'id15' } },
      { qData: { rank: 1.2, showCondition: 'True' }, qInfo: { qId: 'id1.2' } },
      { qData: { rank: 1.5, showCondition: '1' }, qInfo: { qId: 'id1.5' } },
      { qData: { rank: 3, showCondition: '0' }, qInfo: { qId: 'id3' } },
      { qData: { rank: 1, showCondition: '' }, qInfo: { qId: 'id1' } },
      { qData: { rank: 7, showCondition: '0' }, qInfo: { qId: 'id7' } },
    ];
    const fakeApp = { getSheetList: () => sheets };
    it('should return visible sheets in correct order', async () => {
      const result = await getOrderedVisibleSheet(fakeApp);
      expect(result).toHaveLength(3);
      expect(result[0].qInfo.qId).toEqual('id1');
      expect(result[1].qInfo.qId).toEqual('id1.2');
      expect(result[2].qInfo.qId).toEqual('id1.5');
      expect(result[3]).toEqual(undefined);
    });
  });

  describe('getNavigationsList', () => {
    it('should return all but not FF disabled navigations', () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(false),
        isFeatureBlacklisted: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(false),
      };
      const result = getNavigationsList(shouldHide);
      expect(result.length).toBe(10);
    });
    it('should return all but not unsupported feature navigations', () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(true),
        isFeatureBlacklisted: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(true),
      };
      const result = getNavigationsList(shouldHide);
      expect(result.length).toBe(10);
    });
    it('should return all but not feature blacklisted navigations', () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(false),
        isFeatureBlacklisted: jest.fn().mockReturnValue(true),
        isEnabled: jest.fn().mockReturnValue(true),
      };
      const result = getNavigationsList(shouldHide);
      expect(result.length).toBe(10);
    });
    it('should return all', () => {
      const shouldHide = {
        isUnsupportedFeature: jest.fn().mockReturnValue(false),
        isFeatureBlacklisted: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(true),
      };
      const result = getNavigationsList(shouldHide);
      expect(result.length).toBe(11);
    });
  });
});
