import urlUtils from '../url-utils';

describe('urlUtils', () => {
  describe('getImageUrl', () => {
    const prefix = '../';
    it('should return image url', () => {
      const imageUrl = 'someUrl';
      const result = urlUtils.getImageUrl(imageUrl);
      expect(result).to.equal(`${prefix}${imageUrl}`);
    });

    it('should remove / from beginning of url', () => {
      const imageUrl = '/someUrl';
      const result = urlUtils.getImageUrl(imageUrl);
      expect(result).to.equal(`${prefix}someUrl`);
    });
  });
});
