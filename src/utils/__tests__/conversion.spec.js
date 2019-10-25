import { convertNavigation, convertAction } from '../conversion';

describe('conversion', () => {
  describe('convertNavigation', () => {
    it('should return goToSheet', () => {
      const result = convertNavigation('gotoSheet');
      expect(result).to.equal('goToSheet');
    });
    it('should return goToSheetById', () => {
      const result = convertNavigation('gotoSheetById');
      expect(result).to.equal('goToSheetById');
    });
    it('should return goToStory', () => {
      const result = convertNavigation('gotoStory');
      expect(result).to.equal('goToStory');
    });
    it('should return default entry', () => {
      const result = convertNavigation('myOldType');
      expect(result).to.equal('myOldType');
    });
  });

  describe('convertAction', () => {
    const newProperties = { action: [] };
    const action = {
      actionType: 'thisAction',
      selectedBookmark: 'thisBookmark',
      selectedField: 'thisField',
      variable: 'thisVariable',
      value: 'thisValue',
      softLock: false,
      cId: 'cId',
    };
    beforeEach(() => {
      newProperties.actions = [];
    });

    it('should return action as is', () => {
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(1);
      expect(newProperties.actions[0].actionType).to.equal(action.actionType);
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.equal(action.softLock);
      expect(newProperties.actions[0].cId).to.equal(action.cId);
    });

    it('should convert clearOther', () => {
      action.actionType = 'clearOther';
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(1);
      expect(newProperties.actions[0].actionType).to.equal('clearAllButThis');
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.equal(action.softLock);
      expect(newProperties.actions[0].cId).to.equal(action.cId);
    });

    it('should convert clearOther', () => {
      action.actionType = 'unlockAllAndClearAll';
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(1);
      expect(newProperties.actions[0].actionType).to.equal('clearAll');
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.equal(true);
      expect(newProperties.actions[0].cId).to.equal(action.cId);
    });

    it('should convert clearOther', () => {
      action.actionType = 'selectField';
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(1);
      expect(newProperties.actions[0].actionType).to.equal('selectValues');
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.equal(action.softLock);
      expect(newProperties.actions[0].cId).to.equal(action.cId);
    });

    it('should convert clearOther', () => {
      action.actionType = 'selectAndLockField';
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(2);
      expect(newProperties.actions[0].actionType).to.equal('selectValues');
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.equal(action.softLock);
      expect(newProperties.actions[0].cId).to.equal('cId1');
      expect(newProperties.actions[1].actionType).to.equal('lockField');
      expect(newProperties.actions[1].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[1].field).to.equal(action.selectedField);
      expect(newProperties.actions[1].variable).to.equal(action.variable);
      expect(newProperties.actions[1].value).to.equal(action.value);
      expect(newProperties.actions[1].softLock).to.equal(action.softLock);
      expect(newProperties.actions[1].cId).to.equal(action.cId);
    });
  });
});
