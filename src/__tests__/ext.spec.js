import ext from '../ext';

describe('ext', () => {
  let data;
  const props = ext();

  it('should return properties object', () => {
    expect(props).to.be.an('object');
  });

  describe('itemTitleRef', () => {
    const { itemTitleRef } = props.definition.items.actions.items.actions;

    it('Should return action label', () => {
      data = { actionType: 'applyBookmark' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.be.an('object');
      expect(itemTitle.translation).to.equal('Object.ActionButton.ApplyBookmark');
    });

    it('Should return default action label when no act.label', () => {
      data = { actionType: 'someAction' };
      const itemTitle = itemTitleRef(data, 0);
      expect(itemTitle).to.be.an('object');
      expect(itemTitle.translation).to.equal('Object.ActionButton.NewAction');
    });
  });

  describe('options', () => {
    let options;
    const actionItems = props.definition.items.actions.items.actions.items;
    const navigationItems = props.definition.items.actions.items.navigation.items.navigation.items;
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
    const { background } = props.definition.items.settings.items;
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
        },
      };
    });
    it('should return true when background is used', () => {
      const result = background.items.backgroundUrl.show(data);
      expect(result).to.equal(true);
    });
    it('should return false  for backgroundSize when background is not used', () => {
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
  });
});
