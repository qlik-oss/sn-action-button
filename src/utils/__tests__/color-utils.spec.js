import colorUtils, { getCurrentTheme } from '../color-utils';
import defaultValues from '../../__tests__/default-button-props';

describe('color-utils', () => {
  const palette = ['color1', 'color2', 'color3'];
  describe('resolveColor', () => {
    it('should resolve color', () => {
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
    it('should resolve color to none when color not defined', () => {
      const color = colorUtils.resolveColor({ color: null }, palette);
      expect(color).to.equal('none');
    });
    it('should resolve color to none when input not defined', () => {
      const color = colorUtils.resolveColor({}, palette);
      expect(color).to.equal('none');
    });
    it('should return none as default', () => {
      const color = colorUtils.resolveColor();
      expect(color).to.equal('none');
    });
  });
  describe('resolveExpression', () => {
    it('should resolve color for rgb expression', () => {
      const color = colorUtils.resolveExpression('RGB(255,255,0)');
      expect(color).to.equal('rgb(255,255,0)');
    });
    it('should resolve color for argb expression', () => {
      const color = colorUtils.resolveExpression('ARGB(100,255,255,0)');
      expect(color).to.equal('rgba(255,255,0,0.39)');
    });
    it('should resolve color for hex expression', () => {
      const color = colorUtils.resolveExpression('#123456');
      expect(color).to.equal('#123456');
    });
    it('should resolve color for css color', () => {
      const color = colorUtils.resolveExpression('red');
      expect(color).to.equal('rgba(255,0,0,1)');
    });
    it('should resolve color for css color transparent', () => {
      const color = colorUtils.resolveExpression('transparent');
      expect(color).to.equal('rgba(255,255,255,0)');
    });
    it('should return none for invalid expressions', () => {
      const color = colorUtils.resolveExpression('RGB(asdf)');
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
  describe('getDefaultColor', () => {
    it('should return default color when no Theme', () => {
      const result = colorUtils.getDefaultColor();
      expect(result).to.equal('#4477aa');
    });
    it('should return primary color for Theme', () => {
      const result = colorUtils.getDefaultColor(defaultValues.Theme);
      expect(result).to.equal('myPrimaryColor');
    });
  });
  describe('getFontFamily', () => {
    it('should return inherit when no Theme found', () => {
      const result = colorUtils.getFontFamily();
      expect(result).to.equal('inherit');
    });
    it('should return fontFamily from theme', () => {
      const result = colorUtils.getFontFamily(defaultValues.Theme);
      expect(result).to.equal('myFont');
    });
  });
  describe('getCurrentTheme', () => {
    it('should result no theme', () => {
      const result = getCurrentTheme();
      expect(result).to.be.undefined;
    });
    it('should result current theme', () => {
      const result = getCurrentTheme(defaultValues.Theme);
      expect(result).to.be.an('object');
      expect(result).to.have.keys('properties');
    });
  });
  describe('lightenOrDarkenColor', () => {
    it('should not lighten #ffffff', () => {
      const result = colorUtils.lightenOrDarkenColor('#ffffff', 10);
      expect(result).to.equal('#ffffff');
    });
    it('should not darken #000000', () => {
      const result = colorUtils.lightenOrDarkenColor('#000000', -10);
      expect(result).to.equal('#000000');
    });
    it('should darken #ffffff to #ebebeb', () => {
      const result = colorUtils.lightenOrDarkenColor('#ffffff', -20);
      expect(result).to.equal('#ebebeb');
    });
  });
});
