import importProperties, { convertNavigation, convertAction } from '../conversion';
import objectProperties from '../../object-properties';

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

    it('should convert unlockAllAndClearAll', () => {
      action.actionType = 'unlockAllAndClearAll';
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(1);
      expect(newProperties.actions[0].actionType).to.equal('clearAll');
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.be.true;
      expect(newProperties.actions[0].cId).to.equal(action.cId);
    });

    it('should convert selectField', () => {
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

    it('should convert selectAndLockField', () => {
      action.actionType = 'selectAndLockField';
      convertAction(action, newProperties);
      expect(newProperties.actions).to.have.length(2);
      expect(newProperties.actions[0].actionType).to.equal('selectValues');
      expect(newProperties.actions[0].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[0].field).to.equal(action.selectedField);
      expect(newProperties.actions[0].variable).to.equal(action.variable);
      expect(newProperties.actions[0].value).to.equal(action.value);
      expect(newProperties.actions[0].softLock).to.equal(action.softLock);
      expect(newProperties.actions[0].cId).to.equal(null);
      expect(newProperties.actions[1].actionType).to.equal('lockField');
      expect(newProperties.actions[1].bookmark).to.equal(action.selectedBookmark);
      expect(newProperties.actions[1].field).to.equal(action.selectedField);
      expect(newProperties.actions[1].variable).to.equal(action.variable);
      expect(newProperties.actions[1].value).to.equal(action.value);
      expect(newProperties.actions[1].softLock).to.equal(action.softLock);
      expect(newProperties.actions[1].cId).to.equal(action.cId);
    });
  });

  describe('importProperties', () => {
    let exportedFmt;
    let initialProperties;
    beforeEach(() => {
      exportedFmt = { properties: { visualization: 'qlik-button-for-navigation' } };
      initialProperties = JSON.parse(JSON.stringify(objectProperties));
    });
    it('should return default newPropertyTree', () => {
      const result = importProperties(exportedFmt, initialProperties);
      expect(result).to.be.an('object');
      expect(result.qChildren).to.be.an('array').that.is.empty;
      expect(result.qProperty.actions).to.be.an('array').that.is.empty;
      expect(result.qProperty.props.useEnabledCondition).to.equal(null);
      expect(result.qProperty.props.fullWidth).to.equal('auto');
      expect(result.qProperty.showTitles).to.be.false;
      expect(result.qProperty.title).to.equal('');
      expect(result.qProperty.footnote).to.equal('');
      expect(result.qProperty.navigation.action).to.equal('none');
    });

    it('should not convert qLayoutExclude', () => {
      exportedFmt.properties.qLayoutExclude = { someProperty: 'withAValue' };
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.qLayoutExclude.disabled).to.not.have.any.keys('someProperty');
    });

    it('should convert props from exported properties and overwrite initalprops', () => {
      exportedFmt.properties.props = {
        buttonLabel: 'myButton',
        buttonShowIcon: true,
        buttonIconLui: 'thisIcon',
        buttonTextAlign: 'left',
        navigationAction: 'thisNavigationAction',
        selectedSheet: 'thisSheet',
        selectedStory: 'thisStory',
        websiteUrl: 'thisUrl',
        sameWindow: false,
        actionItems: [
          {
            actionType: 'someAction',
          },
          {
            actionType: 'someAction2',
          },
        ],
      };
      const result = importProperties(exportedFmt, initialProperties);
      const expectedStyle = JSON.parse(JSON.stringify(initialProperties.style));
      expectedStyle.label = 'myButton';
      expectedStyle.icon.useIcon = true;
      expectedStyle.icon.iconType = 'thisIcon';
      expectedStyle.font.align = 'left';
      expect(result.qProperty.actions).to.have.length(2);
      expect(result.qProperty.style).to.deep.equal(expectedStyle);
      expect(result.qProperty.navigation).to.deep.equal({
        action: 'thisNavigationAction',
        sameWindow: false,
        sheet: 'thisSheet',
        story: 'thisStory',
        websiteUrl: 'thisUrl',
      });
    });

    it('should pick sheet based on navigation action gotoSheetId', () => {
      exportedFmt.properties.props = {
        navigationAction: 'gotoSheetById',
        selectedSheet: 'notThisSheet',
        sheetId: 'thisId',
      };
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.navigation.sheet).to.equal('thisId');
    });

    it('should convert qStateName', () => {
      exportedFmt.properties.qStateName = 'thisState';
      const result = importProperties(exportedFmt, initialProperties);
      expect(result.qProperty.qStateName).to.equal('thisState');
    });

    it('no exportedFmt', () => {
      const result = importProperties(undefined, initialProperties);
      expect(result).to.include.all.keys('qChildren', 'qProperty');
    });
  });
});
