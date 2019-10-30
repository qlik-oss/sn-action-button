import colorUtils from '../color-utils';
import defaultValues from '../../__tests__/default-button-props';

describe('color-resolver', () => {
  const palette = ['color1', 'color2', 'color3'];
  describe('resolve-color', () => {
    it('should resolve color for theme', () => {
      const color = colorUtils.resolveColor('color2', palette);
      expect(color).to.equal('color2');
    });
    it('should take index color from palette', () => {
      const color = colorUtils.resolveColor({ index: 2, color: 'some' }, palette);
      expect(color).to.equal('color3');
    });
    it('should resolve color from input.color', () => {
      const color = colorUtils.resolveColor({ color: 'myColor' }, palette);
      expect(color).to.equal('myColor');
    });
    it('should return none as default', () => {
      const color = colorUtils.resolveColor();
      expect(color).to.equal('none');
    });
  });
  describe('getPalette', () => {
    it('should return empty array as default', () => {
      const result = colorUtils.getPalette();
      expect(result).to.be.an('array').that.is.empty;
    });
    it('should return array from default properties', () => {
      const result = colorUtils.getPalette(defaultValues.Theme);
      expect(result).to.include.members(['none', 'color1', 'color2']);
    });
  });
});
