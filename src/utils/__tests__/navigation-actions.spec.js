import navigationActions, { checkShowNavigation, getOrderedSheets } from '../navigation-actions';
import defaultValues from '../../__tests__/default-button-props';

describe('navigation actions', () => {
  let senseNavigation;
  const sheet = 'sheetIdHere';
  const story = 'storyIdHere';
  const websiteUrl = 'https://myUrlHere';
  const mailtoUrl = 'mailto:me@example';
  const { app } = defaultValues();

  describe('all navigation actions', () => {
    beforeEach(() => {
      senseNavigation = {
        nextSheet: sinon.spy(),
        prevSheet: sinon.spy(),
        goToSheet: sinon.spy(),
        goToStory: sinon.spy(),
      };
      global.window = {
        open: sinon.spy(),
      };
    });
    it('should not have navigation call for None', () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'none');
      expect(navigationObject).to.not.have.property('navigationCall');
    });
    it('should call nextSheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'nextSheet');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.nextSheet).to.have.been.called;
    });
    it('should call prevSheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'prevSheet');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.prevSheet).to.have.been.called;
    });
    it('should call lastSheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'lastSheet');
      await navigationObject.navigationCall({ app, senseNavigation });
      expect(senseNavigation.goToSheet).to.have.been.calledWith('id1');
    });
    it('should call firstSheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'firstSheet');
      await navigationObject.navigationCall({ app, senseNavigation });
      expect(senseNavigation.goToSheet).to.have.been.calledWith('id1');
    });
    it('should call goToSheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'goToSheet');
      await navigationObject.navigationCall({ senseNavigation, sheet });
      expect(senseNavigation.goToSheet).to.have.been.calledWith(sheet);
    });
    it('should NOT call goToSheet when no sheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'goToSheet');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.goToSheet).to.not.have.been.called;
    });
    it('should call goToSheetById', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'goToSheetById');
      await navigationObject.navigationCall({ senseNavigation, sheet });
      expect(senseNavigation.goToSheet).to.have.been.calledWith(sheet);
    });
    it('should NOT call goToSheetById when no sheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'goToSheetById');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.goToSheet).to.not.have.been.called;
    });
    it('should call goToStory', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'goToStory');
      await navigationObject.navigationCall({ senseNavigation, story });
      expect(senseNavigation.goToStory).to.have.been.calledWith(story);
    });
    it('should NOT call goToStory when no sheet', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'goToStory');
      await navigationObject.navigationCall({ senseNavigation });
      expect(senseNavigation.goToStory).to.not.have.been.called;
    });
    it('should NOT call openWebsite', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({});
      expect(global.window.open).to.not.have.been.called;
    });
    it('should call openWebsite with defaults', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl, sameWindow: false });
      expect(global.window.open).to.have.been.calledWith(websiteUrl, '');
    });
    it('should call openWebsite and add http://', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl: 'myWebsite', sameWindow: false });
      expect(global.window.open).to.have.been.calledWith('http://myWebsite', '');
    });
    it('should call openWebsite in same window', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl, sameWindow: true });
      expect(global.window.open).to.have.been.calledWith(websiteUrl, '_self');
    });
    it('should call openWebsite in parent', async () => {
      global.window.top = 12;
      const navigationObject = navigationActions.find(navigation => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl, sameWindow: true });
      expect(global.window.open).to.have.been.calledWith(websiteUrl, '_parent');
    });
    it('should call mailto', async () => {
      const navigationObject = navigationActions.find(navigation => navigation.value === 'openWebsite');
      await navigationObject.navigationCall({ websiteUrl: mailtoUrl, sameWindow: false });
      expect(global.window.open).to.have.been.calledWith(mailtoUrl, '');
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
      expect(result).to.be.true;
    });
    it('should return undefined when no action found', () => {
      data.navigation.action = 'notAnAction';
      const result = checkShowNavigation(data, 'sheet');
      expect(result).to.be.undefined;
    });
    it('should return false when field not in required input', () => {
      const result = checkShowNavigation(data, 'websiteUrl');
      expect(result).to.be.false;
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
      expect(result).to.have.length(4);
      expect(result[0].qInfo.qId).to.equal('id1');
      expect(result[1].qInfo.qId).to.equal('id1.5');
      expect(result[2].qInfo.qId).to.equal('id7');
      expect(result[3].qInfo.qId).to.equal('id15');
    });
  });
});
