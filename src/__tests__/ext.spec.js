/* eslint-disable prefer-destructuring */
import ext, { checkShow } from '../ext';

describe('ext', () => {
  let data;
  describe('checkShow', () => {
    beforeEach(() => {
      data = { actionType: 'applyBookmark' };
    });
    it('should return true when field required', () => {
      const result = checkShow(data, 'bookmark');
      expect(result).to.be.true;
    });
    it('should return false when field is not required', () => {
      const result = checkShow(data, 'notTheField');
      expect(result).to.be.false;
    });
    it('should return undefined when action is not found', () => {
      data.actionType = 'notAnAction';
      const result = checkShow(data, 'bookmark');
      expect(result).to.equal(undefined);
    });
  });

  describe('ext', () => {
    const props = ext();

    it('should return properties object', () => {
      expect(props).to.be.an('object');
    });

    describe('itemTitleRef', () => {
      const itemTitleRef = props.definition.items.actions.itemTitleRef;

      it('Should return action label', () => {
        data = { actionType: 'applyBookmark' };
        const itemTitle = itemTitleRef(data, 0);
        expect(itemTitle).to.equal('Apply a bookmark');
      });

      it('Should return default action label when no act.label', () => {
        data = { actionType: 'someAction' };
        const itemTitle = itemTitleRef(data, 0);
        expect(itemTitle).to.equal('Action 1');
      });
    });

    describe('options', () => {
      const items = props.definition.items.actions.items;
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

      const handler = {
        app: {
          getBookmarkList: () => bookmarks,
          getFieldList: () => fields,
          getVariableList: () => variables,
        },
      };

      it('Should return an array with bookmarks', async () => {
        const bookmarkOptions = await items.bookmark.options(null, handler);
        expect(bookmarkOptions).to.have.length(1);
        expect(bookmarkOptions[0]).to.be.an('object');
      });

      it('Should return an array with fields', async () => {
        const bookmarkOptions = await items.bookmark.options(null, handler);
        expect(bookmarkOptions).to.have.length(1);
        expect(bookmarkOptions[0]).to.be.an('object');
      });

      it('Should return an array with a single non-system variable', async () => {
        const bookmarkOptions = await items.variable.options({ showSystemVariables: false }, handler);
        expect(bookmarkOptions).to.have.length(1);
        expect(bookmarkOptions[0]).to.be.an('object');
      });

      it('Should return an array with a single all variables', async () => {
        const bookmarkOptions = await items.variable.options({ showSystemVariables: true }, handler);
        expect(bookmarkOptions).to.have.length(2);
      });
    });
  });
});
