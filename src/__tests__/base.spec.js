import styleFormatter from '../utils/style-formatter';

describe('style-formatter', () => {
  describe('getStyles', () => {
    let style = null;
    const defaultStyle = 'width: 100%;height: 100%;font-weight: bold;color: #ffffff;font-size: 12px;background-color: #3F8AB3';
    const someColor = '#ffff00';
    const Theme = {
      getCurrent() {
        const colors = ['none', '#ff0000', '#00ff00', '#0000ff'];
        const obj = {
          properties: {
            palettes: {
              ui: [colors],
            },
          },
        };
        return obj;
      },
    };

    it('should return default styling', () => {
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle).to.equal(defaultStyle);
    });

    it('should return spedified background color', () => {
      style = { backgroundColor: someColor };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`background-color: ${someColor}`)).to.be.true;
    });

    it('should return spedified font color', () => {
      style = { fontColor: someColor };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`color: ${someColor}`)).to.be.true;
    });

    it('should return spedified font size', () => {
      style = { fontSize: someColor };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`font-size: ${someColor}`)).to.be.true;
    });

    it('should return changed color', () => {
      style = { fontSize: someColor };
      const formattedStyle = styleFormatter.getStyles(style, Theme);
      expect(formattedStyle.includes(`font-size: ${someColor}`)).to.be.true;
    });
  });
});
