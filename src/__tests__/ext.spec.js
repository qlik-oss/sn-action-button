import ext from '../ext';
import objectProperties from '../object-properties';

describe('ext', () => {
  const translator = {
    get: someString => someString,
  };
  let data;
  const props = ext({ translator });
  const actionItems = props.definition.items.actions.items.actions.items;
  const navigationItems = props.definition.items.actions.items.navigation.items;
  const { font, background, border, icon } = props.definition.items.settings.items;

  it('should return properties object', () => {
    expect(props).to.be.an('object');
  });

  describe('itemTitleRef', () => {
    const { itemTitleRef } = props.definition.items.actions.items.actions;

    beforeEach(() => {
      data = {
        actionType: '',
        actionLabel: ''
      };
    });

    it('Should return action label from dropdown', () => {
      data = { actionType: 'applyBookmark' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.equal('Object.ActionButton.ApplyBookmark');
    });

    it('Should return action label from text field', () => {
      data = { actionLabel: 'actionLabel' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.equal('actionLabel');
    });

    it('Should return default action label when empty action', () => {
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.equal('Object.ActionButton.NewAction');
    });

    it('Should return invalid action label when action is not found in actions list', () => {
      data = { actionType: 'invalidAction' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.equal('Object.ActionButton.InvalidAction');
    });
  });

  describe('options', () => {
    let options;
    const bookmarks = [
      {
        qData: {
          title: 'someBookmark',
        },
        qInfo: {
          qId: 'someId',
        },
      },
    ];
    const fields = [
      {
        qName: 'someField',
      },
    ];
    const variables = [
      {
        qName: 'someVariable',
        qIsReserved: false,
      },
      {
        qName: 'someSystemVariable',
        qIsReserved: true,
      },
    ];
    const sheets = [
      {
        qMeta: {
          title: 'myFirstSheet',
        },
        qInfo: {
          qId: 'firstSheetId',
        },
        qData: {
          showCondition: '0',
        }
      },
      {
        qMeta: {
          title: 'mySecondSheet',
        },
        qInfo: {
          qId: 'secondSheetId',
        },
        qData: {
          showCondition: '1',
        }
      },
    ];
    const stories = [
      {
        qMeta: {
          title: 'myFirstStory',
        },
        qInfo: {
          qId: 'firstStoryId',
        },
      },
      {
        qMeta: {
          title: 'mySecondStory',
        },
        qInfo: {
          qId: 'secondStoryId',
        },
      },
    ];
    const handler = {
      app: {
        getBookmarkList: () => bookmarks,
        getFieldList: () => fields,
        getVariableList: () => variables,
        getSheetList: () => sheets,
        getStoryList: () => stories,
      },
    };

    it('Should return an array with a bookmark', async () => {
      options = await actionItems.bookmark.options(null, handler);
      expect(options).to.have.length(1);
      expect(options[0]).to.be.an('object');
    });

    it('Should return an array with a field', async () => {
      options = await actionItems.field.options(null, handler);
      expect(options).to.have.length(1);
      expect(options[0]).to.be.an('object');
    });

    it('Should return an array with a single non-system variable', async () => {
      options = await actionItems.variable.options({ showSystemVariables: false }, handler);
      expect(options).to.have.length(1);
      expect(options[0]).to.be.an('object');
    });

    it('Should return an array with all variables', async () => {
      options = await actionItems.variable.options({ showSystemVariables: true }, handler);
      expect(options).to.have.length(2);
    });

    it('Should return an array with all sheets', async () => {
      options = await navigationItems.sheet.options(null, handler);
      expect(options).to.have.length(2);
    });

    it('Should return an array with all stories', async () => {
      options = await navigationItems.story.options(null, handler);
      expect(options).to.have.length(2);
    });
  });

  describe('show functions', () => {
    beforeEach(() => {
      data = JSON.parse(JSON.stringify(objectProperties));
      data.style.background.url = {
        qStaticContentUrlDef: {
          qUrl: 'myUrl',
        },
      };
    });

    it('should return false for all actionItems show functions', () => {
      const actionObject = { actionType: 'forward' };
      const resultBookmark = actionItems.bookmark.show(actionObject);
      expect(resultBookmark).to.be.false;
      const resultField = actionItems.field.show(actionObject);
      expect(resultField).to.be.false;
      const resultVariable = actionItems.variable.show(actionObject);
      expect(resultVariable).to.be.false;
      const resultSystemVariable = actionItems.showSystemVariables.show(actionObject);
      expect(resultSystemVariable).to.be.false;
      const resultSoftLock = actionItems.softLock.show(actionObject);
      expect(resultSoftLock).to.be.false;
      const resultValue = actionItems.value.show(actionObject);
      expect(resultValue).to.be.false;
    });

    it('should return true when bookmark needs to show', () => {
      const result = actionItems.bookmark.show({ actionType: 'applyBookmark' });
      expect(result).to.be.true;
    });

    it('should return true when field needs to show', () => {
      const result = actionItems.field.show({ actionType: 'clearAllButThis' });
      expect(result).to.be.true;
    });

    it('should return true when field needs to show', () => {
      const result = actionItems.variable.show({ actionType: 'setVariable' });
      expect(result).to.be.true;
    });

    it('should return true when showSystemVariables needs to show', () => {
      const result = actionItems.showSystemVariables.show({ actionType: 'setVariable' });
      expect(result).to.be.true;
    });

    it('should return true when softLock needs to show', () => {
      const result = actionItems.softLock.show({ actionType: 'selectAll' });
      expect(result).to.be.true;
    });

    it('should return true when value needs to show', () => {
      const result = actionItems.value.show({ actionType: 'selectValues' });
      expect(result).to.be.true;
    });

    it('should return false for all navigationItems show functions', () => {
      const navigationObject = { navigation: { action: 'nextSheet' } };
      const resultSheetId = navigationItems.sheetId.show(navigationObject);
      expect(resultSheetId).to.be.false;
      const resultSheet = navigationItems.sheet.show(navigationObject);
      expect(resultSheet).to.be.false;
      const resultStory = navigationItems.story.show(navigationObject);
      expect(resultStory).to.be.false;
      const resultWebsiteUrl = navigationItems.websiteUrl.show(navigationObject);
      expect(resultWebsiteUrl).to.be.false;
      const resultSameWindow = navigationItems.sameWindow.show(navigationObject);
      expect(resultSameWindow).to.be.false;
    });

    it('should return true when sheetId needs to show', () => {
      const result = navigationItems.sheetId.show({ navigation: { action: 'goToSheetById' } });
      expect(result).to.be.true;
    });

    it('should return true when sheet needs to show', () => {
      const result = navigationItems.sheet.show({ navigation: { action: 'goToSheet' } });
      expect(result).to.be.true;
    });

    it('should return true when story needs to show', () => {
      const result = navigationItems.story.show({ navigation: { action: 'goToStory' } });
      expect(result).to.be.true;
    });

    it('should return true when websiteUrl needs to show', () => {
      const result = navigationItems.websiteUrl.show({ navigation: { action: 'openWebsite' } });
      expect(result).to.be.true;
    });

    it('should return true when sameWindow needs to show', () => {
      const result = navigationItems.sameWindow.show({ navigation: { action: 'openWebsite' } });
      expect(result).to.be.true;
    });

    it('should return true when enableCondition needs to show', () => {
      data.useEnabledCondition = true;
      const result = props.definition.items.enableCondition.items.condition.show(data);
      expect(result).to.be.true;
    });

    it('should return false when enableCondition should not show', () => {
      const result = props.definition.items.enableCondition.items.condition.show(data);
      expect(result).to.be.false;
    });
    // font
    it('should return false for expression and true for picker when font.useColorExpression is false', () => {
      const resultExpression = font.items.sizeAndColor.items.colorExpression.show(data);
      const resultPicker = font.items.sizeAndColor.items.colorPicker.show(data);
      expect(resultExpression).to.be.false;
      expect(resultPicker).to.be.true;
    });

    it('should return true for expression and false for picker when font.useColorExpression is true', () => {
      data.style.font.useColorExpression = true;
      const resultExpression = font.items.sizeAndColor.items.colorExpression.show(data);
      const resultPicker = font.items.sizeAndColor.items.colorPicker.show(data);
      expect(resultExpression).to.be.true;
      expect(resultPicker).to.be.false;
    });

    it('should return false for expression and true for picker when background.useColorExpression is false', () => {
      const resultExpression = background.items.backgroundColor.items.colorExpression.show(data);
      const resultPicker = background.items.backgroundColor.items.colorPicker.show(data);
      expect(resultExpression).to.be.false;
      expect(resultPicker).to.be.true;
    });
    // background
    it('should return true for expression and false for picker when background.useColorExpression is true', () => {
      data.style.background.useColorExpression = true;
      const resultExpression = background.items.backgroundColor.items.colorExpression.show(data);
      const resultPicker = background.items.backgroundColor.items.colorPicker.show(data);
      expect(resultExpression).to.be.true;
      expect(resultPicker).to.be.false;
    });

    it('should return true when background image is used', () => {
      data.style.background.useImage = true;
      const result = background.items.backgroundImage.items.backgroundUrl.show(data);
      expect(result).to.be.true;
    });

    it('should return false for backgroundSize when background image is not used', () => {
      const result = background.items.backgroundImage.items.backgroundUrl.show(data);
      expect(result).to.be.false;
    });

    it('should return true when backgroundSize is used', () => {
      data.style.background.useImage = true;
      const result = background.items.backgroundImage.items.backgroundSize.show(data);
      expect(result).to.be.true;
    });

    it('should return false for backgroundSize when useImage is false', () => {
      const result = background.items.backgroundImage.items.backgroundSize.show(data);
      expect(result).to.be.false;
    });

    it('should return false for backgroundSize when no qUrl', () => {
      data.style.background.url.qStaticContentUrlDef = undefined;
      const result = background.items.backgroundImage.items.backgroundSize.show(data);
      expect(result).to.be.false;
    });

    it('should return true for backgroundPosition', () => {
      data.style.background.useImage = true;
      const result = background.items.backgroundImage.items.backgroundPosition.show(data);
      expect(result).to.be.true;
    });

    it('should return false for backgroundPosition when no background image is used', () => {
      const result = background.items.backgroundImage.items.backgroundPosition.show(data);
      expect(result).to.be.false;
    });

    it('should return false for backgroundPosition when no background image size is fill', () => {
      data.style.background.useImage = true;
      data.style.background.size = 'fill';
      const result = background.items.backgroundImage.items.backgroundPosition.show(data);
      expect(result).to.be.false;
    });
    // border
    it('should show all border settings when border is used', () => {
      data.style.border.useBorder = true;
      const resultRadius = border.items.borderSettings.items.borderRadius.show(data);
      const resultWidth = border.items.borderSettings.items.borderWidth.show(data);
      const resultDropdown = border.items.borderSettings.items.colorDropdown.show(data);
      expect(resultRadius).to.be.true;
      expect(resultWidth).to.be.true;
      expect(resultDropdown).to.be.true;
    });

    it('should show no border settings when border is not used', () => {
      const resultRadius = border.items.borderSettings.items.borderRadius.show(data);
      const resultWidth = border.items.borderSettings.items.borderWidth.show(data);
      const resultDropdown = border.items.borderSettings.items.colorDropdown.show(data);
      expect(resultRadius).to.be.false;
      expect(resultWidth).to.be.false;
      expect(resultDropdown).to.be.false;
    });

    it('should show borderColor when no expression is used', () => {
      data.style.border.useBorder = true;
      const borderColor = border.items.borderSettings.items.colorPicker.show(data);
      const borderColorExpression = border.items.borderSettings.items.colorExpression.show(data);
      expect(borderColor).to.be.true;
      expect(borderColorExpression).to.be.false;
    });

    it('should show borderColorExpression when expression is used', () => {
      data.style.border.useBorder = true;
      data.style.border.useColorExpression = true;
      const borderColor = border.items.borderSettings.items.colorPicker.show(data);
      const borderColorExpression = border.items.borderSettings.items.colorExpression.show(data);
      expect(borderColor).to.be.false;
      expect(borderColorExpression).to.be.true;
    });
    // icon
    it('should return true for iconType', () => {
      data.style.icon.useIcon = true;
      const resultType = icon.items.iconSettings.items.iconType.show(data);
      const resultPosition = icon.items.iconSettings.items.iconPosition.show(data);
      expect(resultType).to.be.true;
      expect(resultPosition).to.be.true;
    });

    it('should return false for iconType', () => {
      const resultType = icon.items.iconSettings.items.iconType.show(data);
      const resultPosition = icon.items.iconSettings.items.iconPosition.show(data);
      expect(resultType).to.be.false;
      expect(resultPosition).to.be.false;
    });
  });

  describe('currentSize', () => {
    it('should return current size', () => {
      data = JSON.parse(JSON.stringify(objectProperties));
      const result = background.items.backgroundImage.items.backgroundPosition.currentSize(data);
      expect(result).to.equal('auto');
    });
  });
});
