import ext, { checkShow, getValue } from '../ext';

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

  describe('getValue', () => {
    beforeEach(() => {
      data = { background: { url: 'url' } };
    });
    it('should return value if reference exists', () => {
      const result = getValue(data, 'background.url');
      expect(result).to.equal('url');
    });
    it("should return default value if reference doesn't exist", () => {
      const result = getValue(data, 'background.urlb', 'default');
      expect(result).to.equal('default');
    });
    it("should return default value if data doesn't exist", () => {
      const result = getValue(undefined, 'background.url', 'default');
      expect(result).to.equal('default');
    });
  });

  describe('ext', () => {
    const result = ext();
    expect(result).to.be.an('object');
  });
});
