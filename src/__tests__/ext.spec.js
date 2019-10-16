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
    const result = ext();
    expect(result).to.be.an('object');
  });
});
