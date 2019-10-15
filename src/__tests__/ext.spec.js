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
      data = { style: { background: { url: 'url' } } };
    });
    it('should return value when it exists', () => {
      const result = getValue(data, 'style.background.url');
      expect(result).to.equal('url');
    });
    it("should return default value if reference doesn't exist", () => {
      const result = getValue(data, 'style.background.urlb', 'default');
      expect(result).to.equal('default');
    });
  });

  describe('ext', () => {
    const result = ext();
    expect(result).to.be.an('object');
  });
});
