import styleFormatter from '../style-formatter';
import defaultValues from '../../__tests__/default-button-props';

describe('style-formatter', () => {
  describe('getStyles', () => {
    let style = {
      textAlign: 'center',
    };
    const defaultStyle =
      'width: 100%;height: 100%;border: none;padding: 4px;color: #ffffff;font-size: 12px;text-align: center;background-color: #4477aa;cursor: pointer;';
    const someColor = '#ffff00';
    const someColorExpression = 'rgb(255,255,0)';
    const someSize = 24;
    const someUrl = '/media/Logo/qlik.png';
    const { Theme } = defaultValues;
    const disabled = false;

    it('should return default styling', () => {
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle).to.equal(defaultStyle);
    });

    it('should return specified background color', () => {
      style = { backgroundColor: someColor };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes(`background-color: ${someColor}`)).to.be.true;
    });

    it('should return specified background color from expression', () => {
      style = {
        backgroundColorExpression: someColorExpression,
        useBackgroundColorExpression: true,
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes(`background-color: ${someColorExpression}`)).to.be.true;
    });

    it('should return default background color when color is none', () => {
      style = {
        backgroundColor: {
          index: 0,
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('background-color: #4477aa')).to.be.true;
    });

    it('should return specified font color', () => {
      style = { fontColor: someColor };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes(`color: ${someColor}`)).to.be.true;
    });

    it('should return specified font color from expression', () => {
      style = {
        fontColorExpression: someColorExpression,
        useFontColorExpression: true,
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes(`color: ${someColorExpression}`)).to.be.true;
    });

    it('should return specified font size', () => {
      style = { fontSize: someSize };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes(`font-size: ${someSize}px`)).to.be.true;
    });

    it('should return default font size for incorrect value', () => {
      style = { fontSize: 'someSize' };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('font-size: 12px')).to.be.true;
    });

    it('should return specified image url and default image settings', () => {
      style = {
        background: {
          isUsed: true,
          url: {
            qStaticContentUrl: {
              qUrl: someUrl,
            },
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes(`background-image: url('${someUrl}')`)).to.be.true;
      expect(formattedStyle.includes('background-size: auto auto')).to.be.true;
      expect(formattedStyle.includes('background-position: 0% 0%')).to.be.true;
      expect(formattedStyle.includes('background-repeat: no-repeat')).to.be.true;
    });

    it('should return specified image size', () => {
      style = {
        background: {
          isUsed: true,
          size: 'fill',
          url: {
            qStaticContentUrl: {
              qUrl: someUrl,
            },
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('background-size: 100% 100%')).to.be.true;
    });

    it('should return specified image position', () => {
      style = {
        background: {
          isUsed: true,
          position: 'centerCenter',
          url: {
            qStaticContentUrl: {
              qUrl: someUrl,
            },
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('background-position: 50% 50%')).to.be.true;
    });

    it('should have set opacity for disabled button', () => {
      const formattedStyle = styleFormatter.getStyles(style, true, Theme);
      expect(formattedStyle.includes('opacity: 0.4')).to.be.true;
    });

    it('should not have set cursor for disabled button', () => {
      const formattedStyle = styleFormatter.getStyles(style, true, Theme);
      expect(formattedStyle.includes('cursor: pointer')).to.be.false;
    });

    it('should not have set opacity for enabled button', () => {
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('opacity: 0.4')).to.be.false;
    });
    it('should return font-weight: bold when bold is selected', () => {
      style = {
        textStyle: {
          bold: true,
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('font-weight: bold')).to.be.true;
    });
    it('should return font-style: italic when italic is selected', () => {
      style = {
        textStyle: {
          italic: true,
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('font-style: italic')).to.be.true;
    });
    it('should return text-decoration: underline when underline is selected', () => {
      style = {
        textStyle: {
          underline: true,
        },
      };
      const formattedStyle = styleFormatter.getStyles(style, disabled, Theme);
      expect(formattedStyle.includes('text-decoration: underline')).to.be.true;
    });
  });
});
