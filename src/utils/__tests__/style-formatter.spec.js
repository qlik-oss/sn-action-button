import styleFormatter from '../style-formatter';
import defaultValues from '../../__tests__/default-button-props';

describe('style-formatter', () => {
  describe('getStyles', () => {
    let style = {};
    const defaultStyle =
      'width: 100%;height: 100%;font-weight: bold;color: #ffffff;font-size: 12px;background-color: #3F8AB3;';
    const someColor = '#ffff00';
    const someSize = 24;
    const { Theme } = defaultValues;

    it('should return default styling', () => {
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle).to.equal(defaultStyle);
    });

    it('should return specified background color', () => {
      style = { backgroundColor: someColor };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`background-color: ${someColor}`)).to.be.true;
    });

    it('should return default background color when color is none', () => {
      style = {
        backgroundColor: {
          index: 0,
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes('background-color: #3F8AB3')).to.be.true;
    });

    it('should return specified font color', () => {
      style = { fontColor: someColor };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`color: ${someColor}`)).to.be.true;
    });

    it('should return specified font size', () => {
      style = { fontSize: someSize };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`font-size: ${someSize}px`)).to.be.true;
    });
  });
});
