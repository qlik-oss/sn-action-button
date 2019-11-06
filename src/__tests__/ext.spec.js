import ext from '../ext';

describe('ext', () => {
  const translator = {
    get: someString => someString,
  };
  let data;
  const props = ext({ translator });
  const actionItems = props.definition.items.actions.items.actions.items;
  const navigationItems = props.definition.items.actions.items.navigation.items.navigation.items;
  const { background, borders } = props.definition.items.settings.items;

  it('should return properties object', () => {
    expect(props).to.be.an('object');
  });

  describe('itemTitleRef', () => {
    const { itemTitleRef } = props.definition.items.actions.items.actions;

    it('Should return action label', () => {
      data = { actionType: 'applyBookmark' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.equal('Object.ActionButton.ApplyBookmark');
    });

    it('Should return default action label when no act.label', () => {
      data = { actionType: 'someAction' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.equal('Object.ActionButton.NewAction');
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
      },
      {
        qMeta: {
          title: 'mySecondSheet',
        },
        qInfo: {
          qId: 'secondSheetId',
        },
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
      data = {
        style: {
          background: {
            isUsed: true,
            url: {
              qStaticContentUrlDef: {
                qUrl: 'myUrl',
              },
            },
          },
          border: {
            isUsed: true,
            useExpression: false,
          },
        },
        useEnabledCondition: true,
      };
    });

    it('should return false for all actionItems show functions', () => {
      const actionObject = { actionType: 'forward' };
      const resultBookmark = actionItems.bookmark.show(actionObject);
      expect(resultBookmark).to.equal(false);
      const resultField = actionItems.field.show(actionObject);
      expect(resultField).to.equal(false);
      const resultVariable = actionItems.variable.show(actionObject);
      expect(resultVariable).to.equal(false);
      const resultSystemVariable = actionItems.showSystemVariables.show(actionObject);
      expect(resultSystemVariable).to.equal(false);
      const resultSoftLock = actionItems.softLock.show(actionObject);
      expect(resultSoftLock).to.equal(false);
      const resultValue = actionItems.value.show(actionObject);
      expect(resultValue).to.equal(false);
    });

    it('should return true when bookmark needs to show', () => {
      const result = actionItems.bookmark.show({ actionType: 'applyBookmark' });
      expect(result).to.equal(true);
    });

    it('should return true when field needs to show', () => {
      const result = actionItems.field.show({ actionType: 'clearAllButThis' });
      expect(result).to.equal(true);
    });

    it('should return true when field needs to show', () => {
      const result = actionItems.variable.show({ actionType: 'setVariable' });
      expect(result).to.equal(true);
    });

    it('should return true when showSystemVariables needs to show', () => {
      const result = actionItems.showSystemVariables.show({ actionType: 'setVariable' });
      expect(result).to.equal(true);
    });

    it('should return true when softLock needs to show', () => {
      const result = actionItems.softLock.show({ actionType: 'selectAll' });
      expect(result).to.equal(true);
    });

    it('should return true when value needs to show', () => {
      const result = actionItems.value.show({ actionType: 'selectValues' });
      expect(result).to.equal(true);
    });

    it('should return false for all navigationItems show functions', () => {
      const navigationObject = { navigation: { action: 'nextSheet' } };
      const resultSheetId = navigationItems.sheetId.show(navigationObject);
      expect(resultSheetId).to.equal(false);
      const resultSheet = navigationItems.sheet.show(navigationObject);
      expect(resultSheet).to.equal(false);
      const resultStory = navigationItems.story.show(navigationObject);
      expect(resultStory).to.equal(false);
      const resultWebsiteUrl = navigationItems.websiteUrl.show(navigationObject);
      expect(resultWebsiteUrl).to.equal(false);
      const resultSameWindow = navigationItems.sameWindow.show(navigationObject);
      expect(resultSameWindow).to.equal(false);
    });

    it('should return true when sheetId needs to show', () => {
      const result = navigationItems.sheetId.show({ navigation: { action: 'goToSheetById' } });
      expect(result).to.equal(true);
    });

    it('should return true when sheet needs to show', () => {
      const result = navigationItems.sheet.show({ navigation: { action: 'goToSheet' } });
      expect(result).to.equal(true);
    });

    it('should return true when story needs to show', () => {
      const result = navigationItems.story.show({ navigation: { action: 'goToStory' } });
      expect(result).to.equal(true);
    });

    it('should return true when websiteUrl needs to show', () => {
      const result = navigationItems.websiteUrl.show({ navigation: { action: 'openWebsite' } });
      expect(result).to.equal(true);
    });

    it('should return true when sameWindow needs to show', () => {
      const result = navigationItems.sameWindow.show({ navigation: { action: 'openWebsite' } });
      expect(result).to.equal(true);
    });

    it('should return true when enableCondition needs to show', () => {
      const result = props.definition.items.enableCondition.items.condition.show(data);
      expect(result).to.equal(true);
    });

    it('should return false when enableCondition should not show', () => {
      data.useEnabledCondition = false;
      const result = props.definition.items.enableCondition.items.condition.show(data);
      expect(result).to.equal(false);
    });

    it('should return true when background is used', () => {
      const result = background.items.backgroundUrl.show(data);
      expect(result).to.equal(true);
    });
    it('should return false for backgroundSize when background is not used', () => {
      data.style.background.isUsed = false;
      const result = background.items.backgroundUrl.show(data);
      expect(result).to.equal(false);
    });
    it('should return myUrl when backgroundSize is used', () => {
      const result = background.items.backgroundSize.show(data);
      expect(result).to.equal('myUrl');
    });
    it('should return false for backgroundSize when isUsed false', () => {
      data.style.background.isUsed = false;
      const result = background.items.backgroundSize.show(data);
      expect(result).to.equal(false);
    });
    it('should return undefined for backgroundSize when no qUrl', () => {
      data.style.background.url.qStaticContentUrlDef = undefined;
      const result = background.items.backgroundSize.show(data);
      expect(result).to.equal(undefined);
    });
    it('should return true for backgroundPosition', () => {
      const result = background.items.backgroundPosition.show(data);
      expect(result).to.equal(true);
    });
    it('should return false for backgroundPosition when no background is used', () => {
      data.style.background.isUsed = false;
      const result = background.items.backgroundPosition.show(data);
      expect(result).to.equal(false);
    });
    it('should return false for backgroundPosition when no background size is fill', () => {
      data.style.background.size = 'fill';
      const result = background.items.backgroundPosition.show(data);
      expect(result).to.equal(false);
    });
    it('should return true for borderRadius, borderWidth, colorDropdown when border is used', () => {
      const borderRadius = borders.items.borderRadius.show(data);
      expect(borderRadius).to.equal(true);
      const borderWidth = borders.items.borderWidth.show(data);
      expect(borderWidth).to.equal(true);
      const colorDropdown = borders.items.colorDropdown.show(data);
      expect(colorDropdown).to.equal(true);
    });

    it('should return false for borderRadius, borderWidth, colorDropdown when border is used', () => {
      data.style.border.isUsed = false;
      const borderRadius = borders.items.borderRadius.show(data);
      expect(borderRadius).to.equal(false);
      const borderWidth = borders.items.borderWidth.show(data);
      expect(borderWidth).to.equal(false);
      const colorDropdown = borders.items.colorDropdown.show(data);
      expect(colorDropdown).to.equal(false);
    });

    it('should show borderColor when no expression is used', () => {
      const borderColor = borders.items.borderColor.show(data);
      expect(borderColor).to.equal(true);
      const borderColorExpression = borders.items.borderColorExpression.show(data);
      expect(borderColorExpression).to.equal(false);
    });

    it('should show borderColorExpression when expression is used', () => {
      data.style.border.useExpression = true;
      const borderColor = borders.items.borderColor.show(data);
      expect(borderColor).to.equal(false);
      const borderColorExpression = borders.items.borderColorExpression.show(data);
      expect(borderColorExpression).to.equal(true);
    });
  });

  describe('currentSize', () => {
    it('should return curent size', () => {
      data = { style: { background: { size: 'mySize' } } };
      const result = background.items.backgroundPosition.currentSize(data);
      expect(result).to.equal('mySize');
    });
  });
});
