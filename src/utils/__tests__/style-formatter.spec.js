import styleFormatter from '../style-formatter';
import defaultProperties from '../../__tests__/default-button-props';

describe('style-formatter', () => {
  describe('getStyles', () => {
    let style;
    const defaultStyle =
      'width: 100%;height: 100%;padding: 4px;cursor: pointer;font-size: 12px;color: #ffffff;font-weight: bold;text-align: center;background-color: #4477aa;border: none;';
    const someColor = '#ffff00';
    const someColorExpression = 'rgb(255,255,0)';
    const someSize = 24;
    const someUrl = '/media/Logo/qlik.png';
    const { Theme, layout } = defaultProperties;
    const disabled = false;
    let element;

    beforeEach(() => {
      style = JSON.parse(JSON.stringify(layout.style));
      element = {
        offsetHeight: 200,
        offsetWidth: 100,
      };
    });

    it('should return default styling', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle).to.equal(defaultStyle);
    });
    // enable
    it('should have set opacity and cursor for disabled button', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled: true, Theme });
      expect(formattedStyle.includes('opacity: 0.4')).to.be.true;
      expect(formattedStyle.includes('cursor: pointer')).to.be.false;
    });

    it('should not have set opacity for enabled button', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('opacity: 0.4')).to.be.false;
    });
    // font
    it('should return specified font size', () => {
      style.font.size = someSize;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes(`font-size: ${someSize}px`)).to.be.true;
    });

    it('should return default font size for incorrect value', () => {
      style.font.size = 'someSize';
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('font-size: 12px')).to.be.true;
    });

    it('should return specified font color', () => {
      style.font.color = someColor;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes(`color: ${someColor}`)).to.be.true;
    });

    it('should return specified font color from expression', () => {
      style.font.colorExpression = someColorExpression;
      style.font.useColorExpression = true;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes(`color: ${someColorExpression}`)).to.be.true;
    });

    it('should return font-weight: bold when bold is selected', () => {
      style.font.style = {
        bold: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('font-weight: bold')).to.be.true;
    });

    it('should return font-style: italic when italic is selected', () => {
      style.font.style = {
        italic: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('font-style: italic')).to.be.true;
    });

    it('should return text-decoration: underline when underline is selected', () => {
      style.font.style = {
        underline: true,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('text-decoration: underline')).to.be.true;
    });

    it('should return text-align: left when left is selected', () => {
      style.font.align = 'left';
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('text-align: left')).to.be.true;
    });
    // background
    it('should return specified background color', () => {
      style.background.color = someColor;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes(`background-color: ${someColor}`)).to.be.true;
    });

    it('should return specified background color from expression', () => {
      style.background.colorExpression = someColorExpression;
      style.background.useColorExpression = true;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes(`background-color: ${someColorExpression}`)).to.be.true;
    });

    it('should return default background color when color is none', () => {
      style.background.color = { index: 0 };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('background-color: #4477aa')).to.be.true;
    });

    it('should return specified image url and default image settings', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl.qUrl = someUrl;
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes(`background-image: url('${someUrl}')`)).to.be.true;
      expect(formattedStyle.includes('background-size: auto auto')).to.be.true;
      expect(formattedStyle.includes('background-position: 0% 0%')).to.be.true;
      expect(formattedStyle.includes('background-repeat: no-repeat')).to.be.true;
    });

    it('should return specified image size', () => {
      style.background = {
        useImage: true,
        size: 'fill',
        url: {
          qStaticContentUrl: {
            qUrl: someUrl,
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('background-size: 100% 100%')).to.be.true;
    });

    it('should return specified image position', () => {
      style.background = {
        useImage: true,
        position: 'centerCenter',
        url: {
          qStaticContentUrl: {
            qUrl: someUrl,
          },
        },
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('background-position: 50% 50%')).to.be.true;
    });
    // border
    it('should set border color and width', () => {
      style.border = {
        useBorder: true,
        width: 10,
        color: {
          index: 2,
        },
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme, element });
      expect(formattedStyle.includes('border: 5px solid color2')).to.be.true;
    });

    it('should set a border based on expression', () => {
      style.border = {
        useBorder: true,
        width: 10,
        useColorExpression: true,
        colorExpression: 'rebeccapurple',
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme, element });
      expect(formattedStyle.includes('border: 5px solid rgba(102,51,153,1)')).to.be.true;
    });

    it('should set border radius', () => {
      style.border = {
        useBorder: true,
        radius: 20,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme, element });
      expect(formattedStyle.includes('border-radius: 10px')).to.be.true;
    });

    it('should set border radius for smaller height', () => {
      element.offsetHeight = 50;
      style.border = {
        useBorder: true,
        radius: 20,
      };
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme, element });
      expect(formattedStyle.includes('border-radius: 5px')).to.be.true;
    });

    it('should not set a border', () => {
      const formattedStyle = styleFormatter.getStyles({ style, disabled, Theme });
      expect(formattedStyle.includes('border: none')).to.be.true;
    });
  });
});
