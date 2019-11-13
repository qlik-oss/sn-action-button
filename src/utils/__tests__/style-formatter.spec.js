import styleFormatter from '../style-formatter';
import defaultValues from '../../__tests__/default-button-props';

describe('style-formatter', () => {
  describe('setStyles', () => {
    let style;
    const defaultStyle =
      'width: 100%;height: 100%;padding: 4px;cursor: pointer;color: #ffffff;font-weight: bold;text-align: center;background-color: myPrimaryColor;border: none;';
    const someColor = '#ffff00';
    const someColorExpression = 'rgb(255,255,0)';
    const someUrl = '/media/Logo/qlik.png';
    const { Theme, layout } = defaultValues;
    const disabled = false;
    let element;
    let button;

    beforeEach(() => {
      style = JSON.parse(JSON.stringify(layout.style));
      element = {
        offsetHeight: 200,
        offsetWidth: 100,
      };
      button = { setAttribute: sinon.spy() };
    });

    it('should return default styling', () => {
      styleFormatter.setStyles({ style, disabled, Theme, button });
      expect(button.setAttribute).to.be.calledWith('style', defaultStyle);
    });
    // enable
    it('should have set opacity and cursor for disabled button', () => {
      styleFormatter.setStyles({ style, disabled: true, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[0]).to.equal('style');
      expect(result[1]).to.contain('opacity: 0.4');
      expect(result[1]).to.not.contain('cursor: pointer');
    });

    it('should not have set opacity for enabled button', () => {
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.not.contain('opacity: 0.4');
    });
    // font
    it('should return specified font color', () => {
      style.font.color = someColor;
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain(`color: ${someColor}`);
    });

    it('should return specified font color from expression', () => {
      style.font.colorExpression = someColorExpression;
      style.font.useColorExpression = true;
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain(`color: ${someColorExpression}`);
    });

    it('should return font-weight: bold when bold is selected', () => {
      style.font.style = {
        bold: true,
      };
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('font-weight: bold');
    });

    it('should return font-style: italic when italic is selected', () => {
      style.font.style = {
        italic: true,
      };
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('font-style: italic');
    });

    it('should return text-decoration: underline when underline is selected', () => {
      style.font.style = {
        underline: true,
      };
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('text-decoration: underline');
    });

    it('should return text-align: left when left is selected', () => {
      style.font.align = 'left';
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('text-align: left');
    });
    // background
    it('should return specified background color', () => {
      style.background.color = someColor;
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain(`background-color: ${someColor}`);
    });

    it('should return specified background color from expression', () => {
      style.background.colorExpression = someColorExpression;
      style.background.useColorExpression = true;
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain(`background-color: ${someColorExpression}`);
    });

    it('should return default background color when color is none', () => {
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('background-color: myPrimaryColor');
    });

    it('should return specified image url and default image settings', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl = { qUrl: someUrl };
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain(`background-image: url('${someUrl}')`);
      expect(result[1]).to.contain('background-size: auto auto');
      expect(result[1]).to.contain('background-position: 50% 50%');
      expect(result[1]).to.contain('background-repeat: no-repeat');
    });

    it('should return no settings when url is missing', () => {
      style.background.useImage = true;
      style.background.url.qStaticContentUrl = {};
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.not.contain('background-image:');
      expect(result[1]).to.not.contain('background-size:');
      expect(result[1]).to.not.contain('background-position:');
      expect(result[1]).to.not.contain('background-repeat:');
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
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('background-size: 100% 100%');
    });

    it('should return specified image position', () => {
      style.background = {
        useImage: true,
        position: 'topLeft',
        url: {
          qStaticContentUrl: {
            qUrl: someUrl,
          },
        },
      };
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('background-position: 0% 0%');
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
      styleFormatter.setStyles({ style, disabled, Theme, element, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('border: 5px solid color2');
    });

    it('should set a border based on expression', () => {
      style.border = {
        useBorder: true,
        width: 10,
        useColorExpression: true,
        colorExpression: 'rebeccapurple',
      };
      styleFormatter.setStyles({ style, disabled, Theme, element, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('border: 5px solid rgba(102,51,153,1)');
    });

    it('should set border radius', () => {
      style.border = {
        useBorder: true,
        radius: 20,
      };
      styleFormatter.setStyles({ style, disabled, Theme, element, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('border-radius: 10px');
    });

    it('should set border radius for smaller height', () => {
      element.offsetHeight = 50;
      style.border = {
        useBorder: true,
        radius: 20,
      };
      styleFormatter.setStyles({ style, disabled, Theme, element, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('border-radius: 5px');
    });

    it('should not set a border', () => {
      styleFormatter.setStyles({ style, disabled, Theme, button });
      const result = button.setAttribute.getCalls()[0].args;
      expect(result[1]).to.contain('border: none');
    });
  });

  describe('setFontSizeAndFamily', () => {
    const { Theme } = defaultValues;
    let button;
    const layout = JSON.parse(JSON.stringify(defaultValues.layout));
    beforeEach(() => {
      button = {
        firstElementChild: { setAttribute: sinon.spy(), offsetHeight: 400, offsetWidth: 20 },
        clientHeight: 100,
        clientWidth: 100,
      };
    });
    it('should set fontSize and family to default', () => {
      styleFormatter.setFontSizeAndFamily({ Theme, button, layout });
      expect(button.firstElementChild.textContent).to.equal('Button');
      expect(button.firstElementChild.setAttribute).to.have.been.calledThrice;
      expect(button.firstElementChild.setAttribute).to.have.been.calledWith(
        'style',
        'white-space: nowrap; font-size: 100px; font-family: myFont;'
      );
      expect(button.firstElementChild.setAttribute).to.have.been.calledWith(
        'style',
        'white-space: nowrap; font-size: 25px; font-family: myFont;'
      );
      expect(button.firstElementChild.setAttribute).to.have.been.calledWith(
        'style',
        'white-space: nowrap; font-size: 12.5px; font-family: myFont;'
      );
    });
    it('should set fontSize when text offsetWidth is bigger than button', () => {
      button.firstElementChild.offsetWidth = 400;
      styleFormatter.setFontSizeAndFamily({ Theme, button, layout });
      expect(button.firstElementChild.setAttribute).to.have.been.calledThrice;
      expect(button.firstElementChild.setAttribute).to.have.been.calledWith(
        'style',
        'white-space: nowrap; font-size: 100px; font-family: myFont;'
      );
      expect(button.firstElementChild.setAttribute).to.have.been.calledWith(
        'style',
        'white-space: nowrap; font-size: 25px; font-family: myFont;'
      );
      expect(button.firstElementChild.setAttribute).to.have.been.calledWith(
        'style',
        'white-space: nowrap; font-size: 2.875px; font-family: myFont;'
      );
    });
  });
});
